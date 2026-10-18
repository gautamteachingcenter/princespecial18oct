let examDurationSeconds = 60 * 60; // 60 minutes
let examEndTime = null;
let timerInterval = null;
let screenWakeLock = null;
let isProctorWarningActive = false;
let isSubmittingProcess = false;

// 🔗 Guaranteed Script URL Endpoint
const SCRIPT_URL = window.SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzQysEVoQmSS6w_cEeLYK1g95T16cUT5taIdjXfdDLUsOggqFnVMU5GDrl3C3c-Olvt/exec";
window.SCRIPT_URL = SCRIPT_URL;

// 🌐 Question Language Management (Defaults to selected medium)
let currentExamLang = localStorage.getItem("lang") || localStorage.getItem("exam_lang") || localStorage.getItem("selected_lang") || "hi";

let currentQuestionIndex = 0;
let userAnswersIndex = []; 
let userAnswers = [];
let retestAuthorizedKey = "";
let warningCount = 0;
let isAntiCheatDebounce = false;

// 🚨 SMART INCIDENT & 30-SEC RECOVERY ENGINE
let currentIncidentStatus = "Normal";
let incidentRecoveryTimer = null;
let totalIncidentCount = 0; // Tracks total lifetime violations

// 🔑 Invigilator Passcode for Emergency Unlock
const MASTER_RETEST_PASS = "GTC#2000";

// 📹 Camera & AI Proctoring State
let proctorMediaStream = null;
let faceMissingCounter = 0;
let handCoverCounter = 0;
let multipleFacesCounter = 0;
let faceScanInterval = null;
let mpFaceDetector = null;
let nativeFaceDetector = null;
let isAiModelReady = false;

const scanCanvas = document.createElement("canvas");
scanCanvas.width = 160;
scanCanvas.height = 120;
const scanCtx = scanCanvas.getContext("2d", { willReadFrequently: true });

function getNormalizedCandidate() {
    const rawRoll = localStorage.getItem("roll") || "";
    const rawName = localStorage.getItem("name") || "Candidate";
    const rawClass = localStorage.getItem("class") || "Student";
    return {
        roll: rawRoll.trim().toUpperCase(),
        name: rawName.trim(),
        className: rawClass.trim()
    };
}

async function setupLiveProctorCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "user",
                width: { ideal: 320 },
                height: { ideal: 240 }
            },
            audio: false
        });

        proctorMediaStream = stream;

        let cameraContainer = document.getElementById("proctorCameraContainer");
        if (!cameraContainer) {
            cameraContainer = document.createElement("div");
            cameraContainer.id = "proctorCameraContainer";
            cameraContainer.innerHTML = `
                <div style="position: fixed; bottom: 12px; left: 12px; z-index: 99990; display: flex; flex-direction: column; align-items: center; pointer-events: none;">
                    <div style="width: 72px; height: 72px; border-radius: 50%; overflow: hidden; border: 2.5px solid #0284c7; box-shadow: 0 4px 18px rgba(2, 132, 199, 0.4); background: #000; position: relative;">
                        <video id="proctorVideoFeed" autoplay playsinline muted style="width: 100%; height: 100%; object-fit: cover; transform: scaleX(-1);"></video>
                    </div>
                    <span id="camRecBadge" style="margin-top: 4px; background: #ffffff; border: 1.5px solid #0284c7; color: #0284c7; font-size: 9px; font-weight: 800; padding: 2px 7px; border-radius: 14px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 2px 6px rgba(0,0,0,0.12);">
                        🟢 AI ACTIVE
                    </span>
                </div>
            `;
            document.body.appendChild(cameraContainer);
        }

        const videoEl = document.getElementById("proctorVideoFeed");
        if (videoEl) {
            videoEl.srcObject = stream;
        }

        initAiFaceDetectionPipeline(videoEl);
        return true;
    } catch (err) {
        console.warn("Front Camera permission skipped or unsupported:", err);
        return false;
    }
}

async function initAiFaceDetectionPipeline(videoEl) {
    if ('FaceDetector' in window) {
        try {
            nativeFaceDetector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 3 });
            isAiModelReady = true;
        } catch (e) {
            nativeFaceDetector = null;
        }
    }

    if (!nativeFaceDetector && typeof FaceDetection !== 'undefined') {
        try {
            mpFaceDetector = new FaceDetection({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`
            });
            mpFaceDetector.setOptions({
                model: 'short',
                minDetectionConfidence: 0.55
            });
            mpFaceDetector.onResults(handleMediaPipeResults);
            isAiModelReady = true;
        } catch (err) {
            mpFaceDetector = null;
        }
    }

    startSmartAiVisionLoop(videoEl);
}

function startSmartAiVisionLoop(videoEl) {
    if (faceScanInterval) clearInterval(faceScanInterval);

    faceScanInterval = setInterval(async () => {
        if (localStorage.getItem("testSubmitted") === "true") {
            clearInterval(faceScanInterval);
            return;
        }

        if (!videoEl || videoEl.readyState < 2) return;

        if (nativeFaceDetector) {
            try {
                const faces = await nativeFaceDetector.detect(videoEl);
                processDetectedFaces(faces.length, faces);
                return;
            } catch (err) {}
        }

        if (mpFaceDetector) {
            try {
                await mpFaceDetector.send({ image: videoEl });
                return;
            } catch (err) {}
        }

        fallbackHandAndFaceScanner(videoEl);
    }, 1500);
}

function handleMediaPipeResults(results) {
    const faces = results.detections || [];
    processDetectedFaces(faces.length, faces);
}

function processDetectedFaces(faceCount, rawData = []) {
    const badge = document.getElementById("camRecBadge");

    if (faceCount === 0) {
        faceMissingCounter++;
        handCoverCounter++;

        if (badge) {
            badge.textContent = "⚠ FACE HIDDEN";
            badge.style.color = "#d97706";
            badge.style.borderColor = "#d97706";
        }

        // Trigger after sustained 24 scans (~36s) of no face
        if (faceMissingCounter >= 24) {
            faceMissingCounter = 0;
            triggerSmartStudentIncident(`चेहरा छिपाया / दूर गए [Q${currentQuestionIndex + 1}]`);
            speakVoiceWarning("अपना चेहरा स्क्रीन के सामने रखें, कैमरा छिपाना सख्त मना है!");
        }
    } else if (faceCount > 1) {
        multipleFacesCounter++;
        faceMissingCounter = 0;

        if (badge) {
            badge.textContent = "🚨 MULTIPLE FACES";
            badge.style.color = "#dc2626";
            badge.style.borderColor = "#dc2626";
        }

        if (multipleFacesCounter >= 2) {
            multipleFacesCounter = 0;
            triggerSmartStudentIncident(`अतिरिक्त व्यक्ति उपस्थित (${faceCount} चेहरे मिले) [Q${currentQuestionIndex + 1}]`);
            speakVoiceWarning("कैमरे के सामने केवल एक परीक्षार्थी की अनुमति है!");
        }
    } else {
        faceMissingCounter = 0;
        handCoverCounter = 0;
        multipleFacesCounter = 0;

        if (badge) {
            badge.textContent = "🟢 LIVE ACTIVE";
            badge.style.color = "#10b981";
            badge.style.borderColor = "#10b981";
        }
    }
}

function fallbackHandAndFaceScanner(videoEl) {
    try {
        scanCtx.drawImage(videoEl, 0, 0, 160, 120);
        const imgData = scanCtx.getImageData(0, 0, 160, 120);
        const pixels = imgData.data;

        let skinPixelCount = 0;
        let edgeGradientCount = 0;
        let totalLuma = 0;
        const totalPixels = 160 * 120;

        for (let i = 0; i < pixels.length; i += 4) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
            totalLuma += luma;

            if (r > 60 && g > 35 && b > 20 && (r - g) > 12 && r > b) {
                skinPixelCount++;
            }

            if (i > 640) {
                const prevLuma = 0.299 * pixels[i - 640] + 0.587 * pixels[i - 639] + 0.114 * pixels[i - 638];
                if (Math.abs(luma - prevLuma) > 38) {
                    edgeGradientCount++;
                }
            }
        }

        const avgLuma = totalLuma / totalPixels;
        const skinRatio = skinPixelCount / totalPixels;
        const contrastRatio = edgeGradientCount / totalPixels;

        const isHandCovering = (skinRatio > 0.38 && contrastRatio < 0.015);
        const isFaceMissing = (skinRatio < 0.08) || (avgLuma < 15) || (avgLuma > 248);

        if (isHandCovering || isFaceMissing) {
            processDetectedFaces(0);
        } else {
            processDetectedFaces(1);
        }
    } catch (e) {
        console.warn("Fallback scanner issue:", e);
    }
}

let studentHeartbeatInterval = null;

function sendHeartbeatPing(incidentText = null) {
    const candidate = getNormalizedCandidate();
    if (!candidate.roll || !window.SCRIPT_URL) return;
    if (localStorage.getItem("testSubmitted") === "true") return;

    const payload = new URLSearchParams();
    payload.append("action", "ping_status");
    payload.append("roll", candidate.roll);
    payload.append("name", candidate.name);
    payload.append("class", candidate.className);
    payload.append("qno", String(currentQuestionIndex + 1));
    payload.append("incident", incidentText !== null ? incidentText : currentIncidentStatus);
    payload.append("timestamp", String(Date.now()));

    fetch(window.SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString()
    }).catch(() => {});
}

function startStudentStatusPinger() {
    const candidate = getNormalizedCandidate();
    if (!candidate.roll || !window.SCRIPT_URL) return;

    if (studentHeartbeatInterval) clearInterval(studentHeartbeatInterval);

    // Initial sync
    sendHeartbeatPing(currentIncidentStatus);
    
    // Heartbeat every 3.5 seconds
    studentHeartbeatInterval = setInterval(() => {
        sendHeartbeatPing(currentIncidentStatus);
    }, 3500);
}

// 🛡️ SMART INCIDENT HANDLER (30s auto-reset for 1-3 attempts, Permanent flag for 4+ attempts)
function triggerSmartStudentIncident(incidentDescription) {
    totalIncidentCount++;

    if (incidentRecoveryTimer) {
        clearTimeout(incidentRecoveryTimer);
        incidentRecoveryTimer = null;
    }

    if (totalIncidentCount < 4) {
        // 1 से 3 बार: 30 सेकंड के लिए सस्पेक्ट फ्लैग रहेगा, फिर अपने-आप Normal हो जाएगा
        currentIncidentStatus = incidentDescription;
        sendHeartbeatPing(currentIncidentStatus);

        incidentRecoveryTimer = setTimeout(() => {
            currentIncidentStatus = "Normal";
            sendHeartbeatPing("Normal");
        }, 30000); // 30 seconds auto-clear
    } else {
        // 4 या उससे अधिक बार: अब स्थायी (Permanent) फ्लैग रहेगा, 30s में नहीं हटेगा!
        currentIncidentStatus = `🚨 बार-बार संदिग्ध (${totalIncidentCount} बार) - ${incidentDescription}`;
        sendHeartbeatPing(currentIncidentStatus);
    }
}

// Legacy alias for compatibility
function reportStudentIncident(incidentDescription) {
    triggerSmartStudentIncident(incidentDescription);
}

function playPoliceEmergencySiren(callback) {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = "sawtooth";
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1600, ctx.currentTime);

        const now = ctx.currentTime;
        const totalWails = 3;
        const wailTime = 0.42;

        osc.frequency.setValueAtTime(650, now);
        for (let i = 0; i < totalWails; i++) {
            const start = now + (i * wailTime);
            const peak = start + (wailTime / 2);
            const end = start + wailTime;
            osc.frequency.linearRampToValueAtTime(1350, peak);
            osc.frequency.linearRampToValueAtTime(650, end);
        }

        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.45, now + 0.05);
        gain.gain.setValueAtTime(0.45, now + (totalWails * wailTime) - 0.08);
        gain.gain.linearRampToValueAtTime(0.001, now + (totalWails * wailTime));

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        const totalDuration = totalWails * wailTime;
        osc.stop(now + totalDuration);

        setTimeout(() => {
            if (typeof callback === "function") callback();
        }, (totalDuration * 1000) + 80);

    } catch (e) {
        if (typeof callback === "function") callback();
    }
}

function speakVoiceWarning(messageText) {
    let fullAnnouncement = messageText;

    playPoliceEmergencySiren(() => {
        try {
            const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=hi&q=${encodeURIComponent(fullAnnouncement)}`;
            const audio = new Audio(ttsUrl);
            audio.playbackRate = 0.95;

            audio.onerror = () => fallbackSpeechSynthesis(fullAnnouncement);
            audio.play().catch(() => fallbackSpeechSynthesis(fullAnnouncement));
        } catch (e) {
            fallbackSpeechSynthesis(fullAnnouncement);
        }
    });
}

function fallbackSpeechSynthesis(text) {
    if (!('speechSynthesis' in window)) return;
    try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "hi-IN";
        utterance.rate = 0.92;
        utterance.pitch = 1.05;

        const voices = window.speechSynthesis.getVoices();
        const hindiVoice = voices.find(v => (v.lang && (v.lang.includes("hi") || v.lang.includes("IN"))) || (v.name && v.name.includes("India")));
        if (hindiVoice) {
            utterance.voice = hindiVoice;
        }

        window.speechSynthesis.speak(utterance);
    } catch (err) {}
}

let proctorPollInterval = null;
let isPollPending = false;

function startProctorLiveListener() {
    const candidate = getNormalizedCandidate();
    if (!candidate.roll || !window.SCRIPT_URL) return;

    if (proctorPollInterval) clearInterval(proctorPollInterval);

    const checkNow = async () => {
        if (localStorage.getItem("testSubmitted") === "true") {
            clearInterval(proctorPollInterval);
            return;
        }
        if (isPollPending) return;

        try {
            isPollPending = true;
            const checkUrl = `${window.SCRIPT_URL}?action=check_warning&roll=${encodeURIComponent(candidate.roll)}&_t=${Date.now()}`;
            const res = await fetch(checkUrl, { method: "GET" });
            const data = await res.json();
            isPollPending = false;

            if (data && data.hasWarning && data.message) {
                isProctorWarningActive = true;
                speakVoiceWarning(data.message);
                showCustomNotification(`🚨 शिक्षक की लाइव चेतावनी:<br><br><b style="color:#dc2626; font-size:16px;">"${data.message}"</b>`, "error", () => {
                    setTimeout(() => { isProctorWarningActive = false; }, 2000);
                });
            }
        } catch (e) {
            isPollPending = false;
        }
    };

    checkNow();
    proctorPollInterval = setInterval(checkNow, 1200);
}

async function requestScreenWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            screenWakeLock = await navigator.wakeLock.request('screen');
            screenWakeLock.addEventListener('release', () => {
                screenWakeLock = null;
            });
        }
    } catch (err) {}
}

function startTimer() {
    requestScreenWakeLock();

    // ⏱️ Bulletproof Timer Resume: Always pick saved end time if test in progress
    let savedEndTime = localStorage.getItem("gtc_exam_end_time");
    if (savedEndTime) {
        const parsedEnd = parseInt(savedEndTime, 10);
        if (!isNaN(parsedEnd) && parsedEnd > 0) {
            examEndTime = parsedEnd;
        }
    }

    if (!examEndTime) {
        examEndTime = Date.now() + (examDurationSeconds * 1000);
        localStorage.setItem("gtc_exam_end_time", String(examEndTime));
        const candidate = getNormalizedCandidate();
        localStorage.setItem("gtc_saved_roll", candidate.roll);
    }

    if (timerInterval) clearInterval(timerInterval);

    const updateTimerDisplay = () => {
        const remainingMillis = examEndTime - Date.now();
        const remainingSeconds = Math.max(0, Math.floor(remainingMillis / 1000));

        let minutes = Math.floor(remainingSeconds / 60);
        let seconds = remainingSeconds % 60;
        
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            timerElement.innerHTML = `⏱ Time Left : ${minutes}:${seconds}`;
        }
        
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            showCustomNotification("⏰ समय समाप्त! आपका टेस्ट स्वतः सबमिट किया जा रहा है।", "info", () => {
                submitTest(false);
            });
        }
    };

    updateTimerDisplay();
    timerInterval = setInterval(updateTimerDisplay, 1000);
}

function handleCheatingAttempt() {
    if (isProctorWarningActive) return;
    if (localStorage.getItem("testSubmitted") === "true" || isSubmittingProcess) return;
    if (!window.location.pathname.includes("test")) return;

    if (isAntiCheatDebounce) return; 

    isAntiCheatDebounce = true;
    setTimeout(() => {
        isAntiCheatDebounce = false;
    }, 1500); 

    warningCount++;
    localStorage.setItem("gtc_warning_count", String(warningCount));
    let remaining = 6 - warningCount;

    // Trigger smart 30s recovery incident handler
    triggerSmartStudentIncident(`स्क्रीन स्विच (${warningCount}/6) [Q${currentQuestionIndex + 1}]`);
    
    if (warningCount >= 6) {
        showCustomNotification("🚨 सुरक्षा चेतावनी: आपने 6 बार स्क्रीन स्विच की है। आपका टेस्ट अब स्वतः सबमिट किया जा रहा है!", "error", () => {
            submitTest(true); 
        });
    } else {
        showCustomNotification(`⚠️ चेतावनी ${warningCount}/6: टेस्ट स्क्रीन से बाहर जाना मना है! यदि आपने ${remaining} बार और ऐसा किया, तो टेस्ट स्वतः सबमिट हो जाएगा।`, "warning");
    }
}

document.addEventListener("visibilitychange", async function() {
    if (document.hidden) {
        handleCheatingAttempt();
    } else {
        if (!screenWakeLock && localStorage.getItem("testSubmitted") !== "true") {
            await requestScreenWakeLock();
        }
    }
});

function showCustomNotification(message, type = "info", callback = null) {
    const modal = document.getElementById("customDialogModal");
    const msgEl = document.getElementById("customDialogMsg");
    const iconEl = document.getElementById("customDialogIcon");
    const okBtn = document.getElementById("customDialogOkBtn");
    const cancelBtn = document.getElementById("customDialogCancelBtn");

    if (!modal || !msgEl) {
        if (typeof callback === "function") callback();
        return;
    }

    msgEl.innerHTML = message;
    if (cancelBtn) cancelBtn.style.display = "none";
    if (iconEl) iconEl.textContent = type === "error" ? "🚨" : (type === "warning" ? "⚠️" : "📢");

    modal.style.display = "flex";

    okBtn.onclick = function() {
        modal.style.display = "none";
        if (typeof callback === "function") callback();
    };
}

function showCustomConfirm(message, onConfirm, onCancel = null) {
    const modal = document.getElementById("customDialogModal");
    const msgEl = document.getElementById("customDialogMsg");
    const iconEl = document.getElementById("customDialogIcon");
    const okBtn = document.getElementById("customDialogOkBtn");
    const cancelBtn = document.getElementById("customDialogCancelBtn");

    if (!modal || !msgEl) {
        if (typeof onConfirm === "function") onConfirm();
        return;
    }

    msgEl.innerHTML = message;
    if (cancelBtn) cancelBtn.style.display = "inline-block";
    if (iconEl) iconEl.textContent = "❓";

    modal.style.display = "flex";

    okBtn.onclick = function() {
        modal.style.display = "none";
        if (typeof onConfirm === "function") onConfirm();
    };

    if (cancelBtn) {
        cancelBtn.onclick = function() {
            modal.style.display = "none";
            if (typeof onCancel === "function") onCancel();
        };
    }
}

function getQuestionsList() {
    if (typeof questions !== 'undefined' && Array.isArray(questions)) return questions;
    if (window.questions && Array.isArray(window.questions)) return window.questions;
    return [];
}

function changeQuestionLanguage(newLang) {
    if (!newLang || (newLang !== "hi" && newLang !== "en")) return;
    
    currentExamLang = newLang;
    localStorage.setItem("lang", newLang);
    localStorage.setItem("exam_lang", newLang);
    localStorage.setItem("selected_lang", newLang);

    const langSelect = document.getElementById("examLangSelect");
    if (langSelect && langSelect.value !== newLang) {
        langSelect.value = newLang;
    }

    showQuestion(currentQuestionIndex);
}

function getActiveOptionsList(qData) {
    if (!qData) return [];

    let opts = [];
    if (currentExamLang === "en") {
        opts = qData.options_en || qData.optionsEnglish || qData.en_options || qData.options_english;
    } else {
        opts = qData.options_hi || qData.optionsHindi || qData.hi_options || qData.options_hindi;
    }

    if (!opts || !Array.isArray(opts) || opts.length === 0) {
        if (Array.isArray(qData.options) && qData.options.length > 0) {
            opts = qData.options;
        } else if (qData.option1 || qData.opt1 || qData.a || qData.A) {
            opts = [
                qData.option1 || qData.opt1 || qData.a || qData.A,
                qData.option2 || qData.opt2 || qData.b || qData.B,
                qData.option3 || qData.opt3 || qData.c || qData.C,
                qData.option4 || qData.opt4 || qData.d || qData.D
            ];
        } else {
            opts = qData.options_hi || qData.options_en || [];
        }
    }

    return opts;
}

function showQuestion(index) {
    const qList = getQuestionsList();
    if (!qList || !qList[index]) return;
    
    currentQuestionIndex = index;
    window.index = index; 
    
    // 💾 Persist active question index & active exam state
    localStorage.setItem("gtc_current_q_index", String(index));
    localStorage.setItem("gtc_exam_in_progress", "true");
    
    const qData = qList[index];
    
    const qnoElem = document.getElementById("qno");
    const totalCountEl = document.getElementById("totalQuestionsCount");
    const questionElem = document.getElementById("question");

    if (qnoElem) qnoElem.textContent = index + 1;
    if (totalCountEl) totalCountEl.textContent = qList.length;
    
    let questionText = "";
    if (currentExamLang === "en") {
        questionText = qData.question_en || qData.questionEnglish || qData.en_question || qData.question;
        if (!questionText && (qData.question_hi || qData.questionHindi)) {
            questionText = qData.question_hi || qData.questionHindi;
        }
    } else {
        questionText = qData.question_hi || qData.questionHindi || qData.hi_question || qData.question;
        if (!questionText && (qData.question_en || qData.questionEnglish)) {
            questionText = qData.question_en || qData.questionEnglish;
        }
    }
        
    if (questionElem) questionElem.innerHTML = questionText || `Question ${index + 1}`;
    
    let optionsList = getActiveOptionsList(qData);

    for (let i = 1; i <= 4; i++) {
        const opElem = document.getElementById(`op${i}`);
        if (opElem) {
            opElem.innerHTML = (optionsList && optionsList[i - 1] !== undefined) ? optionsList[i - 1] : "";
        }
    }
    
    let optionsRadio = document.getElementsByName("answer");
    const selectedIdx = userAnswersIndex[index];

    for (let i = 0; i < optionsRadio.length; i++) {
        optionsRadio[i].checked = (selectedIdx !== undefined && selectedIdx !== null && selectedIdx === i);
    }

    updateOptionSelectionUI();
    
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    if (prevBtn) prevBtn.disabled = (index === 0);
    if (index === qList.length - 1) {
        if (nextBtn) nextBtn.style.display = "none";
        if (submitBtn) submitBtn.style.display = "inline-block";
    } else {
        if (nextBtn) nextBtn.style.display = "inline-block";
        if (submitBtn) submitBtn.style.display = "none";
    }
    
    updateQuestionPad();
}

function updateOptionSelectionUI() {
    let optionsRadio = document.getElementsByName("answer");
    for (let i = 0; i < optionsRadio.length; i++) {
        let parentContainer = optionsRadio[i].closest('.option-container');
        if (parentContainer) {
            if (optionsRadio[i].checked) {
                parentContainer.classList.add('selected');
            } else {
                parentContainer.classList.remove('selected');
            }
        }
    }
}

function handleInstantOptionSelect() {
    saveSelectedAnswer();
    updateOptionSelectionUI();
    updateQuestionPad();
}

function saveSelectedAnswer() {
    try {
        const qList = getQuestionsList();
        if (!qList || !qList[currentQuestionIndex]) return;
        const optionsRadio = document.querySelectorAll('input[name="answer"]');
        let chosenIdx = null;

        for (let i = 0; i < optionsRadio.length; i++) {
            if (optionsRadio[i].checked) {
                chosenIdx = i;
                break;
            }
        }

        if (chosenIdx !== null) {
            userAnswersIndex[currentQuestionIndex] = chosenIdx;
            const currentOpts = getActiveOptionsList(qList[currentQuestionIndex]);
            if (Array.isArray(currentOpts) && currentOpts[chosenIdx] !== undefined) {
                userAnswers[currentQuestionIndex] = currentOpts[chosenIdx];
            } else {
                userAnswers[currentQuestionIndex] = String(chosenIdx);
            }

            // 💾 Instant Auto-Save of selected responses, position, and active session
            localStorage.setItem("gtc_exam_in_progress", "true");
            localStorage.setItem("gtc_active_answers", JSON.stringify(userAnswersIndex));
            localStorage.setItem("gtc_active_answers_text", JSON.stringify(userAnswers));
            localStorage.setItem("gtc_current_q_index", String(currentQuestionIndex));
        }
    } catch (e) {
        console.warn("Selection save issue:", e);
    }
}

function nextQuestion() {
    saveSelectedAnswer();
    const qList = getQuestionsList();
    if (qList && currentQuestionIndex < qList.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    saveSelectedAnswer();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function updateQuestionPad() {
    const padContainer = document.getElementById("questionList");
    const qList = getQuestionsList();
    if (!padContainer || !qList || qList.length === 0) return;
    
    let padHTML = "";
    for (let i = 0; i < qList.length; i++) {
        let isAnswered = (userAnswersIndex[i] !== null && userAnswersIndex[i] !== undefined);
        let isCurrent = (i === currentQuestionIndex);
        
        let bgCol = "#f1f5f9";
        let textCol = "#1e293b";
        let borderCol = "#cbd5e1";

        if (isAnswered) {
            bgCol = "#10b981";
            textCol = "#ffffff";
            borderCol = "#059669";
        } else if (isCurrent) {
            bgCol = "#0284c7";
            textCol = "#ffffff";
            borderCol = "#0369a1";
        }
        
        let activeStyle = isCurrent 
            ? "border: 2px solid #0369a1; box-shadow: 0 0 10px rgba(2, 132, 199, 0.45); transform: scale(1.08);" 
            : `border: 1.5px solid ${borderCol};`;
        
        padHTML += `<button type="button" onclick="jumpToQuestion(${i})" class="pad-btn" style="min-width: 38px; width: 38px; height: 38px; flex-shrink: 0; margin: 0; border-radius: 10px; cursor: pointer; background: ${bgCol}; color: ${textCol}; font-weight: 700; ${activeStyle}">${i + 1}</button>`;
    }
    padContainer.innerHTML = padHTML;

    // 🚀 Container-only horizontal scroll: Strictly prevents the page from jumping vertically!
    setTimeout(() => {
        const activeBtn = padContainer.children[currentQuestionIndex];
        if (activeBtn) {
            const containerWidth = padContainer.offsetWidth;
            const btnLeft = activeBtn.offsetLeft;
            const btnWidth = activeBtn.offsetWidth;
            padContainer.scrollTo({
                left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
                behavior: 'smooth'
            });
        }
    }, 40);
}

function jumpToQuestion(index) {
    saveSelectedAnswer();
    showQuestion(index);
}

function clearSelectedResponse() {
    let optionsRadio = document.getElementsByName("answer");
    for (let i = 0; i < optionsRadio.length; i++) {
        optionsRadio[i].checked = false;
    }
    userAnswersIndex[currentQuestionIndex] = null;
    userAnswers[currentQuestionIndex] = null;
    
    // 💾 Save cleared state
    localStorage.setItem("gtc_active_answers", JSON.stringify(userAnswersIndex));
    localStorage.setItem("gtc_active_answers_text", JSON.stringify(userAnswers));

    updateOptionSelectionUI();
    updateQuestionPad();
}

let selectedStarCount = 5;
let isFeedbackSubmitting = false;

function setRating(count) {
    if (isFeedbackSubmitting) return;
    selectedStarCount = count;
    const stars = document.querySelectorAll(".star-rating");
    stars.forEach((s, idx) => {
        s.style.color = (idx < count) ? "#f59e0b" : "#cbd5e1";
    });
}

async function submitStudentFeedback() {
    if (isFeedbackSubmitting) return;
    isFeedbackSubmitting = true;

    const feedbackBtn = document.querySelector("#feedbackContainer button");
    if (feedbackBtn) {
        feedbackBtn.disabled = true;
        feedbackBtn.textContent = "Saving Feedback... ⏳";
    }

    const candidate = getNormalizedCandidate();
    const feedbackNote = document.getElementById("feedbackText") ? document.getElementById("feedbackText").value : "";
    const sheetScriptUrl = window.SCRIPT_URL;

    let payload = {
        action: "feedback",
        name: candidate.name,
        roll: candidate.roll,
        class: candidate.className,
        rating: selectedStarCount + " Stars",
        feedback: feedbackNote
    };

    try {
        await fetch(sheetScriptUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(payload).toString()
        });

        const container = document.getElementById("feedbackContainer");
        const thanks = document.getElementById("feedbackThanks");
        if (container) container.style.display = "none";
        if (thanks) thanks.style.display = "block";
    } catch (e) {
        isFeedbackSubmitting = false;
        if (feedbackBtn) feedbackBtn.disabled = false;
        showCustomNotification("⚠ फीडबैक सेव नहीं हो पाया! कृपया पुनः प्रयास करें।", "warning");
    }
}

function submitTestFromButton() {
    showCustomConfirm("क्या आप वाकई अपना टेस्ट सबमिट करना चाहते हैं?", () => {
        submitTest(false);
    });
}

async function submitTest(isCheating = false) {
    if (localStorage.getItem("testSubmitted") === "true") {
        showCustomNotification("⚠️ यह टेस्ट पहले ही सबमिट किया जा चुका है!", "warning");
        return;
    }

    if (isSubmittingProcess) return;
    isSubmittingProcess = true;

    saveSelectedAnswer();
    
    // 🧹 Clean up active session restoration keys on completion
    localStorage.removeItem("gtc_exam_in_progress");
    localStorage.removeItem("gtc_active_answers");
    localStorage.removeItem("gtc_active_answers_text");
    localStorage.removeItem("gtc_exam_end_time");
    localStorage.removeItem("gtc_current_q_index");
    localStorage.removeItem("gtc_warning_count");
    localStorage.removeItem("gtc_total_incidents");
    localStorage.removeItem("gtc_exam_start_time");
    localStorage.removeItem("gtc_saved_roll");
    
    // 🛑 CRITICAL FIX: Kill all background intervals and pings IMMEDIATELY
    // so they do not collide with the submission lock in Google Apps Script
    if (studentHeartbeatInterval) {
        clearInterval(studentHeartbeatInterval);
        studentHeartbeatInterval = null;
    }
    if (proctorPollInterval) {
        clearInterval(proctorPollInterval);
        proctorPollInterval = null;
    }
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (faceScanInterval) {
        clearInterval(faceScanInterval);
        faceScanInterval = null;
    }

    if (proctorMediaStream) {
        proctorMediaStream.getTracks().forEach(track => track.stop());
    }
    const camBox = document.getElementById("proctorCameraContainer");
    if (camBox) camBox.style.display = "none";

    if (screenWakeLock !== null) {
        screenWakeLock.release().catch(() => {});
        screenWakeLock = null;
    }

    let loading = document.getElementById("loadingOverlay");
    if (loading) {
        const loadingText = document.getElementById("loadingText");
        if (loadingText) loadingText.innerHTML = `<span>Saving responses securely in Google Sheets... ⏳</span>`;
        loading.style.display = "flex";
        loading.style.visibility = "visible";
    }

    // ⏱️ TIME FORMAT IN CLEAN ENGLISH (e.g. 1 Min 5 Sec / 14 Min 30 Sec)
    let trackTime = window.localTimeTracker || Date.now();
    let totalElapsedSeconds = Math.max(1, Math.floor((Date.now() - trackTime) / 1000));
    let computedMinutes = Math.floor(totalElapsedSeconds / 60);
    let computedSeconds = totalElapsedSeconds % 60;
    let finalTimeFormat = `${computedMinutes} Min ${computedSeconds} Sec`;
    localStorage.setItem("savedTimeTaken", finalTimeFormat);
    
    let correctCount = 0;
    let wrongCount = 0;
    let studentResponseList = [];
    const qList = getQuestionsList();
    
    if (qList && qList.length > 0) {
        qList.forEach((q, idx) => {
            const chosenIdx = userAnswersIndex[idx];

            if (chosenIdx === undefined || chosenIdx === null) {
                studentResponseList.push(`Q${idx+1}: Skipped`);
            } else {
                const chosenLetter = ["(a)", "(b)", "(c)", "(d)"][chosenIdx];
                const rightAnswerLetter = (q.answer || q.correct || "").trim().substring(0, 3).toLowerCase();

                if (chosenLetter.toLowerCase() === rightAnswerLetter) {
                    correctCount++;
                    studentResponseList.push(`Q${idx+1}: ${chosenLetter} ✅`);
                } else {
                    wrongCount++;
                    studentResponseList.push(`Q${idx+1}: ${chosenLetter} (Right: ${rightAnswerLetter}) ❌`);
                }
            }
        });
    }
    
    let totalQuestions = (qList && qList.length > 0) ? qList.length : 30;
    let maxPossibleMarks = totalQuestions * 2;
    let rawScore = (correctCount * 2) - (wrongCount * 0.25);
    let finalScore = rawScore < 0 ? 0 : rawScore; 
    let percentageVal = maxPossibleMarks > 0 ? Math.round((finalScore / maxPossibleMarks) * 100) : 0;
    let percentageStr = percentageVal + "%";
    let statusText = isCheating ? "CHEATING DETECTED" : (percentageVal >= 70 ? "PASS" : "FAIL");

    const candidate = getNormalizedCandidate();

    let payload = {
        action: "submit",
        name: candidate.name,
        roll: candidate.roll,
        class: candidate.className,
        score: String(finalScore),
        correct: String(correctCount),
        wrong: String(wrongCount),
        percentage: percentageStr,
        status: statusText,
        adminPass: retestAuthorizedKey || sessionStorage.getItem("adminPassKey") || "",
        timeTaken: finalTimeFormat,
        responses: studentResponseList.join(" | ")
    };

    try {
        const minSpinDelay = new Promise(resolve => setTimeout(resolve, 2200));
        const networkReq = fetch(window.SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(payload).toString()
        });

        await Promise.all([networkReq, minSpinDelay]);

        if (loading) loading.style.display = "none";

        let d = new Date();
        let exactTodayStr = d.toISOString().split('T')[0];
        
        localStorage.setItem("testSubmitted", "true");
        localStorage.setItem("lastTestDate", exactTodayStr);
        localStorage.setItem("gtc_device_locked_date", exactTodayStr);

        const examContainer = document.querySelector(".exam-container");
        if (examContainer) examContainer.style.display = "none";

        const popupModal = document.getElementById("premiumSuccessModal");
        if (popupModal) {
            popupModal.style.display = "flex";
            setRating(5);
        }

    } catch (error) {
        if (loading) loading.style.display = "none";
        isSubmittingProcess = false;
        showCustomNotification("⚠️ सबमिशन में त्रुटि! कृपया पुनः प्रयास करें।", "error");
    }
}

async function verifyStudentOnlineEligibility() {
    const candidate = getNormalizedCandidate();
    const loading = document.getElementById("loadingOverlay");
    if (loading) loading.style.display = "flex";

    const todayStr = new Date().toISOString().split('T')[0];
    const lockedDate = localStorage.getItem("gtc_device_locked_date");
    const isReattemptGranted = localStorage.getItem("reattemptGranted") === "true";

    if (lockedDate === todayStr && !isReattemptGranted) {
        if (loading) loading.style.display = "none";
        const retestModal = document.getElementById("retestAuthModal");
        const desc = document.getElementById("retestModalDesc");
        if (desc) {
            desc.innerHTML = `<b style="color:#ef4444;">डिवाइस सुरक्षा लॉक:</b> इस फ़ोन से आज की परीक्षा पहले ही सबमिट की जा चुकी है। दोबारा परीक्षा देने के लिए शिक्षक का पासवर्ड अनिवार्य है।`;
        }
        if (retestModal) retestModal.style.display = "flex";
        const examContainer = document.querySelector(".exam-container");
        if (examContainer) examContainer.style.display = "none";
        return;
    }

    let hasStarted = false;
    const startTestImmediately = () => {
        if (!hasStarted) {
            hasStarted = true;
            if (loading) {
                loading.style.display = "none";
                loading.style.visibility = "hidden";
            }
            const examContainer = document.querySelector(".exam-container");
            if (examContainer) examContainer.style.display = "block";
            initQuizScreen();
        }
    };

    const fallbackTimeout = setTimeout(startTestImmediately, 2200);

    try {
        const formData = new URLSearchParams();
        formData.append("action", "check");
        formData.append("roll", candidate.roll);
        formData.append("name", candidate.name); // 🌟 Name validation included
        formData.append("adminPass", "");

        const response = await fetch(window.SCRIPT_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formData.toString()
        });

        const res = await response.json();
        clearTimeout(fallbackTimeout);

        if (res && res.status === "blocked") {
            hasStarted = true;
            if (loading) loading.style.display = "none";
            const retestModal = document.getElementById("retestAuthModal");
            const desc = document.getElementById("retestModalDesc");
            if (desc && res.message) desc.textContent = res.message;
            if (retestModal) retestModal.style.display = "flex";

            const examContainer = document.querySelector(".exam-container");
            if (examContainer) examContainer.style.display = "none";
            return;
        }

        startTestImmediately();
    } catch (e) {
        clearTimeout(fallbackTimeout);
        startTestImmediately();
    }
}

async function verifyRetestPasscode() {
    const passInput = document.getElementById("adminPasscodeField");
    const errEl = document.getElementById("retestPassError");
    const enteredPass = passInput ? passInput.value.trim() : "";

    if (!enteredPass) {
        if (errEl) {
            errEl.textContent = "Please enter the invigilator passcode!";
            errEl.style.display = "block";
        }
        return;
    }

    if (enteredPass !== MASTER_RETEST_PASS && enteredPass !== "GTC#2000" && enteredPass !== "GTC@2026") {
        if (errEl) {
            errEl.textContent = "❌ अमान्य पासवर्ड! केवल शिक्षक का सही पासवर्ड ही मान्य है।";
            errEl.style.display = "block";
        }
        if (passInput) passInput.value = "";
        return;
    }

    retestAuthorizedKey = enteredPass;
    sessionStorage.setItem("adminPassKey", enteredPass);
    localStorage.setItem("reattemptGranted", "true");
    localStorage.removeItem("testSubmitted");
    localStorage.removeItem("gtc_device_locked_date");

    const retestModal = document.getElementById("retestAuthModal");
    if (retestModal) retestModal.style.display = "none";

    const examContainer = document.querySelector(".exam-container");
    if (examContainer) examContainer.style.display = "block";
    initQuizScreen();
}

function cancelRetestExit() {
    localStorage.clear();
    sessionStorage.clear();
    if (window.location.protocol === "blob:" || window.location.href.startsWith("blob:")) return;
    window.location.replace("index.html");
}

async function initQuizScreen() {
    try {
        setupLiveProctorCamera().catch(() => {});
    } catch(e) {}
    initQuizScreenAfterCamera();
}

function initQuizScreenAfterCamera() {
    const loading = document.getElementById("loadingOverlay");
    if (loading) {
        loading.style.display = "none";
        loading.style.visibility = "hidden";
    }

    const examContainer = document.querySelector(".exam-container");
    if (examContainer) {
        examContainer.style.display = "block";
        examContainer.style.visibility = "visible";
    }

    const langSelect = document.getElementById("examLangSelect");
    if (langSelect) {
        langSelect.value = currentExamLang;
    }

    // Start all real-time listeners and pingers
    startProctorLiveListener();
    startStudentStatusPinger();
    startTimer();
    showQuestion(currentQuestionIndex);
}

// Global function exposures
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.jumpToQuestion = jumpToQuestion;
window.clearSelectedResponse = clearSelectedResponse;
window.setRating = setRating;
window.submitStudentFeedback = submitStudentFeedback;
window.submitTestFromButton = submitTestFromButton;
window.verifyRetestPasscode = verifyRetestPasscode;
window.cancelRetestExit = cancelRetestExit;
window.showCustomNotification = showCustomNotification;
window.changeQuestionLanguage = changeQuestionLanguage;

function bootExamSession() {
    const candidate = getNormalizedCandidate();
    const qList = getQuestionsList();
    const totalQ = (qList && qList.length > 0) ? qList.length : 100;

    // Pre-populate empty arrays
    userAnswersIndex = new Array(totalQ).fill(null);
    userAnswers = new Array(totalQ).fill(null);

    const isExamInProgress = localStorage.getItem("gtc_exam_in_progress") === "true";
    const isNotSubmitted = localStorage.getItem("testSubmitted") !== "true";

    if (isExamInProgress && isNotSubmitted) {
        // 🔄 1. Restore Answers item-by-item (No restrictive length checks!)
        try {
            const savedAnswersRaw = localStorage.getItem("gtc_active_answers");
            const savedTextsRaw = localStorage.getItem("gtc_active_answers_text");
            if (savedAnswersRaw) {
                const parsedAnswers = JSON.parse(savedAnswersRaw);
                if (Array.isArray(parsedAnswers)) {
                    for (let i = 0; i < totalQ; i++) {
                        if (parsedAnswers[i] !== undefined && parsedAnswers[i] !== null) {
                            userAnswersIndex[i] = parsedAnswers[i];
                        }
                    }
                }
            }
            if (savedTextsRaw) {
                const parsedTexts = JSON.parse(savedTextsRaw);
                if (Array.isArray(parsedTexts)) {
                    for (let i = 0; i < totalQ; i++) {
                        if (parsedTexts[i] !== undefined && parsedTexts[i] !== null) {
                            userAnswers[i] = parsedTexts[i];
                        }
                    }
                }
            }
        } catch (err) {
            console.warn("Answers restore issue:", err);
        }

        // 🔄 2. Restore exact question position
        const savedQIndex = parseInt(localStorage.getItem("gtc_current_q_index") || "0", 10);
        if (!isNaN(savedQIndex) && savedQIndex >= 0 && savedQIndex < totalQ) {
            currentQuestionIndex = savedQIndex;
        } else {
            currentQuestionIndex = 0;
        }

        // 🔄 3. Restore warning counters
        warningCount = parseInt(localStorage.getItem("gtc_warning_count") || "0", 10);
        totalIncidentCount = parseInt(localStorage.getItem("gtc_total_incidents") || "0", 10);

        // 🔄 4. Restore original start time
        let savedStartTime = localStorage.getItem("gtc_exam_start_time");
        if (savedStartTime) {
            window.localTimeTracker = parseInt(savedStartTime, 10);
        } else {
            window.localTimeTracker = Date.now();
            localStorage.setItem("gtc_exam_start_time", String(window.localTimeTracker));
        }
    } else {
        // Fresh initial test start
        currentQuestionIndex = 0;
        warningCount = 0;
        totalIncidentCount = 0;
        window.localTimeTracker = Date.now();
        localStorage.setItem("gtc_exam_start_time", String(window.localTimeTracker));
        localStorage.setItem("gtc_saved_roll", candidate.roll);
        localStorage.setItem("gtc_exam_in_progress", "true");
    }

    const totalCountEl = document.getElementById("totalQuestionsCount");
    if (totalCountEl && qList) totalCountEl.textContent = qList.length;

    document.addEventListener("change", function(e) {
        if (e.target && e.target.name === "answer") {
            handleInstantOptionSelect();
        }
    });

    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const submitBtn = document.getElementById("submitBtn");

    if (nextBtn) nextBtn.onclick = nextQuestion;
    if (prevBtn) prevBtn.onclick = prevQuestion;
    if (submitBtn) submitBtn.onclick = submitTestFromButton;
    
    verifyStudentOnlineEligibility();
}

// 🚫 BLOCK ACCIDENTAL RELOAD KEY COMBINATIONS (F5, Ctrl+R, Cmd+R)
window.addEventListener("keydown", function(e) {
    const isF5 = (e.key === "F5" || e.keyCode === 116);
    const isCtrlR = (e.ctrlKey || e.metaKey) && (e.key === "r" || e.key === "R" || e.keyCode === 82);
    
    if (isF5 || isCtrlR) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof showCustomNotification === "function") {
            showCustomNotification("⚠️ परीक्षा के दौरान पेज रीफ़्रेश (Reload) करना मना है!", "warning");
        }
        return false;
    }
});

// 🚫 BLOCK MOBILE PULL-TO-REFRESH GESTURE (Touch action guard)
let touchStartY = 0;
window.addEventListener('touchstart', function(e) {
    if (e.touches && e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
    }
}, { passive: true });

window.addEventListener('touchmove', function(e) {
    if (e.touches && e.touches.length === 1) {
        const currentY = e.touches[0].clientY;
        // Block pull-down if already scrolled to the top
        if (window.scrollY <= 0 && currentY > touchStartY) {
            e.preventDefault();
        }
    }
}, { passive: false });

// ⚠️ CONFIRMATION PROMPT ON ACCIDENTAL RELOAD / BACK
window.addEventListener("beforeunload", function(e) {
    if (localStorage.getItem("testSubmitted") !== "true" && !isSubmittingProcess) {
        notifyServerStudentLeft();
        e.preventDefault();
        e.returnValue = "परीक्षा चल रही है! क्या आप वाकई पेज रिफ्रेश या छोड़ना चाहते हैं?";
        return e.returnValue;
    }
});

// 🚪 INSTANT TAB / BROWSER CLOSE DETECTOR
function notifyServerStudentLeft() {
    if (localStorage.getItem("testSubmitted") === "true" || isSubmittingProcess) return;
    const candidate = getNormalizedCandidate();
    if (!candidate.roll || !window.SCRIPT_URL) return;

    const payload = new URLSearchParams();
    payload.append("action", "student_left");
    payload.append("roll", candidate.roll);
    payload.append("name", candidate.name);

    if (navigator.sendBeacon) {
        navigator.sendBeacon(window.SCRIPT_URL, payload);
    } else {
        fetch(window.SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            keepalive: true,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: payload.toString()
        }).catch(() => {});
    }
}

window.addEventListener("pagehide", notifyServerStudentLeft);

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootExamSession);
} else {
    bootExamSession();
}