/**
 * =========================================================================
 * 🎓 GAUTAM TEACHING CENTRE (GTC) - OFFICIAL QUESTION BANK
 * File: js/questions.js
 * Structure: 100 Shuffled & Interleaved High-Yield Questions
 * Categories Included:
 *   - 🔬 विज्ञान (General Science) [30 Questions]
 *   - 🎯 विभिन्न विषयों के जनक (Fathers of Subjects) [20 Questions]
 *   - 🌍 विश्व के प्रमुख देशों की राजधानी (Capitals of Countries) [20 Questions]
 *   - 💰 विभिन्न देशों की मुद्रा (Currencies of Countries) [15 Questions]
 *   - 🏛️ प्रमुख देशों के राष्ट्राध्यक्ष / प्रधानमंत्री (World Leaders) [15 Questions]
 * 
 * Strict Answer Key Pattern (100 Questions):
 * BCADCABBBC DCADCCCABA DCADCBBCDA CBDCADCBCD ACBBDCABCD
 * CBACACACDC BBBCDACDCC ABDCBCDACD CAABCDCABC DCABCDCABC
 * =========================================================================
 */

const questions = [
  {
    id: 1,
    question_hi: "जल का सही रासायनिक सूत्र क्या है?",
    question_en: "What is the correct chemical formula of water?",
    options_hi: ["(a) H₂O₂", "(b) H₂O", "(c) HO₂", "(d) H₃O"],
    options_en: ["(a) H₂O₂", "(b) H₂O", "(c) HO₂", "(d) H₃O"],
    answer: "(b)"
  },
  {
    id: 2,
    question_hi: "ऑस्ट्रेलिया की आधिकारिक राष्ट्रीय राजधानी कौन-सी है?",
    question_en: "Which of the following is the official capital city of Australia?",
    options_hi: ["(a) सिडनी", "(b) मेलबर्न", "(c) कैनबरा", "(d) ब्रिस्बेन"],
    options_en: ["(a) Sydney", "(b) Melbourne", "(c) Canberra", "(d) Brisbane"],
    answer: "(c)"
  },
  {
    id: 3,
    question_hi: "पड़ोसी देश बांग्लादेश की आधिकारिक राष्ट्रीय मुद्रा क्या है?",
    question_en: "What is the official national currency of Bangladesh?",
    options_hi: ["(a) टका", "(b) रुपया", "(c) क्यात", "(d) नगुल्ट्रम"],
    options_en: ["(a) Taka", "(b) Rupee", "(c) Kyat", "(d) Ngultrum"],
    answer: "(a)"
  },
  {
    id: 4,
    question_hi: "सर्वप्रथम 'जियोग्राफी' शब्द का प्रयोग करने वाले भूगोल के जनक कौन कहलाते हैं?",
    question_en: "Who coined the term 'Geography' and is recognized as the Father of Geography?",
    options_hi: ["(a) हिकेटियस", "(b) हेरोडोटस", "(c) टॉलेमी", "(d) इरेटोस्थनीज"],
    options_en: ["(a) Hecataeus", "(b) Herodotus", "(c) Ptolemy", "(d) Eratosthenes"],
    answer: "(d)"
  },
  {
    id: 5,
    question_hi: "संयुक्त राज्य अमेरिका के वर्तमान निर्वाचित राष्ट्रपति कौन हैं?",
    question_en: "Who is the elected President of the United States?",
    options_hi: ["(a) जो बाइडन", "(b) बराक ओबामा", "(c) डोनाल्ड ट्रंप", "(d) जॉर्ज बुश"],
    options_en: ["(a) Joe Biden", "(b) Barack Obama", "(c) Donald Trump", "(d) George Bush"],
    answer: "(c)"
  },
  {
    id: 6,
    question_hi: "मानव शरीर का क्षेत्रफल के अनुसार सबसे बड़ा अंग कौन-सा है?",
    question_en: "Which is the largest organ of the human body by surface area?",
    options_hi: ["(a) त्वचा", "(b) यकृत", "(c) मस्तिष्क", "(d) फेफड़े"],
    options_en: ["(a) Skin", "(b) Liver", "(c) Brain", "(d) Lungs"],
    answer: "(a)"
  },
  {
    id: 7,
    question_hi: "'अष्टाध्यायी' के रचयिता तथा संस्कृत व्याकरण के जनक के रूप में किन्हें जाना जाता है?",
    question_en: "Who is celebrated as the Father of Sanskrit grammar and author of Ashtadhyayi?",
    options_hi: ["(a) महर्षि वाल्मीकि", "(b) महर्षि पाणिनि", "(c) महर्षि वेदव्यास", "(d) कालिदास"],
    options_en: ["(a) Maharishi Valmiki", "(b) Maharishi Panini", "(c) Maharishi Ved Vyas", "(d) Kalidasa"],
    answer: "(b)"
  },
  {
    id: 8,
    question_hi: "भारत के हिमालयी पड़ोसी देश भूटान की राजधानी कौन-सी है?",
    question_en: "What is the capital city of India's Himalayan neighbor Bhutan?",
    options_hi: ["(a) काठमांडू", "(b) थिम्पू", "(c) पारो", "(d) पुनाखा"],
    options_en: ["(a) Kathmandu", "(b) Thimphu", "(c) Paro", "(d) Punakha"],
    answer: "(b)"
  },
  {
    id: 9,
    question_hi: "मानव शरीर की सबसे लंबी और सबसे मजबूत हड्डी कौन-सी होती है?",
    question_en: "Which is the longest and strongest bone in the human body?",
    options_hi: ["(a) ह्यूमरस", "(b) फीमर", "(c) टिबिया", "(d) पटेला"],
    options_en: ["(a) Humerus", "(b) Femur", "(c) Tibia", "(d) Patella"],
    answer: "(b)"
  },
  {
    id: 10,
    question_hi: "चीन की आधिकारिक मुद्रा रेनमिन्बी की मुख्य मूल इकाई क्या कहलाती है?",
    question_en: "What is the primary monetary unit of China's official currency?",
    options_hi: ["(a) येन", "(b) वॉन", "(c) युआन", "(d) बाट"],
    options_en: ["(a) Yen", "(b) Won", "(c) Yuan", "(d) Baht"],
    answer: "(c)"
  },

  {
    id: 11,
    question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the largest gland in the human body?",
    options_hi: ["(a) अग्न्याशय", "(b) थायरॉयड", "(c) पीयूष ग्रंथि", "(d) यकृत"],
    options_en: ["(a) Pancreas", "(b) Thyroid", "(c) Pituitary", "(d) Liver"],
    answer: "(d)"
  },
  {
    id: 12,
    question_hi: "राजनीति विज्ञान तथा जीव विज्ञान दोनों का जनक किसे माना जाता है?",
    question_en: "Who is universally recognized as the Father of both Political Science and Biology?",
    options_hi: ["(a) प्लेटो", "(b) सुकरात", "(c) अरस्तू", "(d) निकोलो मैकियावेली"],
    options_en: ["(a) Plato", "(b) Socrates", "(c) Aristotle", "(d) Niccolò Machiavelli"],
    answer: "(c)"
  },
  {
    id: 13,
    question_hi: "पाकिस्तान के वर्तमान प्रधानमंत्री पद पर कौन आसीन हैं?",
    question_en: "Who is currently serving as the Prime Minister of Pakistan?",
    options_hi: ["(a) शहबाज शरीफ", "(b) इमरान खान", "(c) बिलावल भुट्टो", "(d) नवाज शरीफ"],
    options_en: ["(a) Shehbaz Sharif", "(b) Imran Khan", "(c) Bilawal Bhutto", "(d) Nawaz Sharif"],
    answer: "(a)"
  },
  {
    id: 14,
    question_hi: "यूरेशियाई देश तुर्की की आधिकारिक राजनीतिक राजधानी कौन-सी है?",
    question_en: "What is the official political capital city of Turkey?",
    options_hi: ["(a) इस्तांबुल", "(b) अंताल्या", "(c) इज़मिर", "(d) अंकारा"],
    options_en: ["(a) Istanbul", "(b) Antalya", "(c) Izmir", "(d) Ankara"],
    answer: "(d)"
  },
  {
    id: 15,
    question_hi: "मानव रक्त का लाल रंग निम्नलिखित में से किस वर्णक के कारण होता है?",
    question_en: "The red color of human blood is due to which respiratory pigment?",
    options_hi: ["(a) प्लाज्मा", "(b) क्लोरोफिल", "(c) हीमोग्लोबिन", "(d) श्वेत रक्त कोशिकाएं"],
    options_en: ["(a) Plasma", "(b) Chlorophyll", "(c) Hemoglobin", "(d) White Blood Cells"],
    answer: "(c)"
  },
  {
    id: 16,
    question_hi: "स्विट्जरलैंड की आधिकारिक राष्ट्रीय मुद्रा निम्नलिखित में से क्या है?",
    question_en: "What is the official national currency of Switzerland?",
    options_hi: ["(a) यूरो", "(b) क्रोना", "(c) स्विस फ्रैंक", "(d) शिलिंग"],
    options_en: ["(a) Euro", "(b) Krona", "(c) Swiss Franc", "(d) Shilling"],
    answer: "(c)"
  },
  {
    id: 17,
    question_hi: "उत्प्लावन बल और पाई के मान की गणना करने वाले गणित के जनक किन्हें माना जाता है?",
    question_en: "Who is widely honored as the Father of Mathematics?",
    options_hi: ["(a) यूक्लिड", "(b) श्रीनिवास रामानुजन", "(c) आर्किमिडीज़", "(d) रेने देकार्त"],
    options_en: ["(a) Euclid", "(b) Srinivasa Ramanujan", "(c) Archimedes", "(d) René Descartes"],
    answer: "(c)"
  },
  {
    id: 18,
    question_hi: "ध्वनि तरंगें निम्नलिखित में से किस माध्यम में बिल्कुल संचरण नहीं कर सकतीं?",
    question_en: "Sound waves cannot travel at all through which of the following media?",
    options_hi: ["(a) निर्वात", "(b) ठोस इस्पात", "(c) शुद्ध जल", "(d) सामान्य वायु"],
    options_en: ["(a) Vacuum", "(b) Solid Steel", "(c) Pure Water", "(d) Normal Air"],
    answer: "(a)"
  },
  {
    id: 19,
    question_hi: "क्षेत्रफल के आधार पर विश्व के सबसे बड़े देश रूस की राजधानी कौन-सी है?",
    question_en: "What is the capital city of Russia, the world's largest country by area?",
    options_hi: ["(a) सेंट पीटर्सबर्ग", "(b) मॉस्को", "(c) कज़ान", "(d) व्लादिवोस्तोक"],
    options_en: ["(a) Saint Petersburg", "(b) Moscow", "(c) Kazan", "(d) Vladivostok"],
    answer: "(b)"
  },
  {
    id: 20,
    question_hi: "पड़ोसी देश भूटान के वर्तमान प्रधानमंत्री कौन हैं?",
    question_en: "Who is currently serving as the Prime Minister of Bhutan?",
    options_hi: ["(a) शेरिंग तोबगे", "(b) लोटे शेरिंग", "(c) जिग्मे थिनले", "(d) सोनम तोबगे"],
    options_en: ["(a) Tshering Tobgay", "(b) Lotay Tshering", "(c) Jigme Thinley", "(d) Sonam Tobgay"],
    answer: "(a)"
  },

  {
    id: 21,
    question_hi: "एनालिटिकल इंजन की रूपरेखा तैयार करने वाले आधुनिक कंप्यूटर के जनक कौन हैं?",
    question_en: "Who designed the Analytical Engine and is hailed as the Father of Modern Computers?",
    options_hi: ["(a) एलन ट्यूरिंग", "(b) बिल गेट्स", "(c) जॉन वॉन न्यूमैन", "(d) चार्ल्स बैबेज"],
    options_en: ["(a) Alan Turing", "(b) Bill Gates", "(c) John von Neumann", "(d) Charles Babbage"],
    answer: "(d)"
  },
  {
    id: 22,
    question_hi: "विद्युत परिपथ में प्रवाहित विद्युत धारा का अंतरराष्ट्रीय एसआई मात्रक क्या है?",
    question_en: "What is the international SI unit of Electric Current flowing in a circuit?",
    options_hi: ["(a) वोल्ट", "(b) ओम", "(c) एम्पियर", "(d) कूलम्ब"],
    options_en: ["(a) Volt", "(b) Ohm", "(c) Ampere", "(d) Coulomb"],
    answer: "(c)"
  },
  {
    id: 23,
    question_hi: "मलेशिया की आधिकारिक राष्ट्रीय मुद्रा क्या कहलाती है?",
    question_en: "What is the official national currency unit of Malaysia?",
    options_hi: ["(a) रिंगिट", "(b) रुपिया", "(c) बाट", "(d) पेसो"],
    options_en: ["(a) Ringgit", "(b) Rupiah", "(c) Baht", "(d) Peso"],
    answer: "(a)"
  },
  {
    id: 24,
    question_hi: "कमरे के सामान्य तापमान पर द्रव अवस्था में पाई जाने वाली एकमात्र धातु कौन-सी है?",
    question_en: "Which is the only metal found in liquid state at normal room temperature?",
    options_hi: ["(a) सोडियम", "(b) सीसा", "(c) गैलियम", "(d) पारा"],
    options_en: ["(a) Sodium", "(b) Lead", "(c) Gallium", "(d) Mercury"],
    answer: "(d)"
  },
  {
    id: 25,
    question_hi: "दक्षिण अमेरिकी देश ब्राजील की आधिकारिक संघीय राजधानी क्या है?",
    question_en: "What is the official federal capital city of Brazil?",
    options_hi: ["(a) रियो डी जनेरियो", "(b) साओ पाउलो", "(c) ब्रासीलिया", "(d) साल्वाडोर"],
    options_en: ["(a) Rio de Janeiro", "(b) São Paulo", "(c) Brasília", "(d) Salvador"],
    answer: "(c)"
  },
  {
    id: 26,
    question_hi: "नींबू और संतरे जैसे खट्टे फलों में प्रमुख रूप से कौन-सा प्राकृतिक अम्ल पाया जाता है?",
    question_en: "Which primary organic acid is predominantly found in citrus fruits like lemons and oranges?",
    options_hi: ["(a) टार्टरिक अम्ल", "(b) साइट्रिक अम्ल", "(c) ऑक्सालिक अम्ल", "(d) मैलिक अम्ल"],
    options_en: ["(a) Tartaric Acid", "(b) Citric Acid", "(c) Oxalic Acid", "(d) Malic Acid"],
    answer: "(b)"
  },
  {
    id: 27,
    question_hi: "रूस के वर्तमान प्रधानमंत्री के रूप में कौन कार्यरत हैं?",
    question_en: "Who currently serves as the Prime Minister of the Russian Federation?",
    options_hi: ["(a) व्लादिमीर पुतिन", "(b) मिखाइल मिशुस्तिन", "(c) दिमित्री मेदवेदेव", "(d) सर्गेई लावरोव"],
    options_en: ["(a) Vladimir Putin", "(b) Mikhail Mishustin", "(c) Dmitry Medvedev", "(d) Sergey Lavrov"],
    answer: "(b)"
  },
  {
    id: 28,
    question_hi: "आधुनिक हिंदी गद्य एवं नवजागरण के अग्रदूत हिंदी के जनक किन्हें माना जाता है?",
    question_en: "Who is recognized as the pioneer of modern prose and the Father of Hindi?",
    options_hi: ["(a) मुंशी प्रेमचंद", "(b) आचार्य रामचंद्र शुक्ल", "(c) भारतेंदु हरिश्चंद्र", "(d) सूर्यकांत त्रिपाठी निराला"],
    options_en: ["(a) Munshi Premchand", "(b) Ramchandra Shukla", "(c) Bharatendu Harishchandra", "(d) Suryakant Tripathi Nirala"],
    answer: "(c)"
  },
  {
    id: 29,
    question_hi: "संयुक्त अरब अमीरात की आधिकारिक राष्ट्रीय मुद्रा कौन-सी है?",
    question_en: "Which of the following is the official currency of the United Arab Emirates?",
    options_hi: ["(a) रियाल", "(b) दीनार", "(c) लीरा", "(d) दिरहम"],
    options_en: ["(a) Riyal", "(b) Dinar", "(c) Lira", "(d) Dirham"],
    answer: "(d)"
  },
  {
    id: 30,
    question_hi: "एक सामान्य वयस्क मनुष्य के शरीर में कुल कितनी अस्थियां पाई जाती हैं?",
    question_en: "How many total bones are present in an adult human skeleton?",
    options_hi: ["(a) 206", "(b) 208", "(c) 300", "(d) 212"],
    options_en: ["(a) 206", "(b) 208", "(c) 300", "(d) 212"],
    answer: "(a)"
  },

  {
    id: 31,
    question_hi: "विश्व इतिहास का विधिवत संकलन प्रारंभ करने के कारण इतिहास का जनक किसे कहा जाता है?",
    question_en: "Who is traditionally honored as the Father of History?",
    options_hi: ["(a) अरस्तू", "(b) सुकरात", "(c) हेरोडोटस", "(d) थ्यूसीडाइड्स"],
    options_en: ["(a) Aristotle", "(b) Socrates", "(c) Herodotus", "(d) Thucydides"],
    answer: "(c)"
  },
  {
    id: 32,
    question_hi: "एशियाई द्वीप राष्ट्र जापान की राजधानी निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the capital city of Japan?",
    options_hi: ["(a) क्योटो", "(b) टोक्यो", "(c) ओसाका", "(d) हिरोशिमा"],
    options_en: ["(a) Kyoto", "(b) Tokyo", "(c) Osaka", "(d) Hiroshima"],
    answer: "(b)"
  },
  {
    id: 33,
    question_hi: "पौधे मिट्टी से जल तथा आवश्यक खनिज लवण मुख्यतः किस अंग द्वारा अवशोषित करते हैं?",
    question_en: "Through which organ do plants primarily absorb water and minerals from the soil?",
    options_hi: ["(a) तने की छाल", "(b) हरी पत्तियां", "(c) फूल", "(d) जड़"],
    options_en: ["(a) Stem Bark", "(b) Green Leaves", "(c) Flowers", "(d) Roots"],
    answer: "(d)"
  },
  {
    id: 34,
    question_hi: "जापान में प्रयुक्त होने वाली आधिकारिक अंतरराष्ट्रीय मुद्रा कौन-सी है?",
    question_en: "Which currency is officially circulated and used in Japan?",
    options_hi: ["(a) युआन", "(b) वॉन", "(c) येन", "(d) रिंगिट"],
    options_en: ["(a) Yuan", "(b) Won", "(c) Yen", "(d) Ringgit"],
    answer: "(c)"
  },
  {
    id: 35,
    question_hi: "'द वेल्थ ऑफ नेशंस' पुस्तक के लेखक तथा आधुनिक अर्थशास्त्र के जनक कौन हैं?",
    question_en: "Who authored 'The Wealth of Nations' and is known as the Father of Economics?",
    options_hi: ["(a) एडम स्मिथ", "(b) कार्ल मार्क्स", "(c) अमर्त्य सेन", "(d) जॉन मेनार्ड कीन्स"],
    options_en: ["(a) Adam Smith", "(b) Karl Marx", "(c) Amartya Sen", "(d) John Maynard Keynes"],
    answer: "(a)"
  },
  {
    id: 36,
    question_hi: "उत्तरी अमेरिका महाद्वीप के देश कनाडा की राष्ट्रीय राजधानी क्या है?",
    question_en: "What is the national capital of the North American nation Canada?",
    options_hi: ["(a) टोरंटो", "(b) वैंकूवर", "(c) मॉन्ट्रियल", "(d) ओटावा"],
    options_en: ["(a) Toronto", "(b) Vancouver", "(c) Montreal", "(d) Ottawa"],
    answer: "(d)"
  },
  {
    id: 37,
    question_hi: "पौधों की पत्तियों का हरा रंग मुख्य रूप से किस वर्णक की उपस्थिति के कारण होता है?",
    question_en: "The green color of plant leaves is primarily due to the presence of which pigment?",
    options_hi: ["(a) कैरोटीन", "(b) एंथोसायनिन", "(c) क्लोरोफिल", "(d) ल्यूकोप्लास्ट"],
    options_en: ["(a) Carotene", "(b) Anthocyanin", "(c) Chlorophyll", "(d) Leucoplast"],
    answer: "(c)"
  },
  {
    id: 38,
    question_hi: "भूटान की आधिकारिक राष्ट्रीय मुद्रा निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the official national currency of Bhutan?",
    options_hi: ["(a) टका", "(b) नगुल्ट्रम", "(c) क्यात", "(d) रुफिया"],
    options_en: ["(a) Taka", "(b) Ngultrum", "(c) Kyat", "(d) Rufiyaa"],
    answer: "(b)"
  },
  {
    id: 39,
    question_hi: "सैद्धांतिक संगणना और कंप्यूटर विज्ञान के जनक कौन माने जाते हैं?",
    question_en: "Who is renowned as the Father of Computer Science and theoretical computation?",
    options_hi: ["(a) चार्ल्स बैबेज", "(b) टिम बर्नर्स ली", "(c) एलन ट्यूरिंग", "(d) ब्लेज़ पास्कल"],
    options_en: ["(a) Charles Babbage", "(b) Tim Berners-Lee", "(c) Alan Turing", "(d) Blaise Pascal"],
    answer: "(c)"
  },
  {
    id: 40,
    question_hi: "हरे पौधे सूर्य के प्रकाश में अपना भोजन किस जैव-प्रक्रिया द्वारा संश्लेषित करते हैं?",
    question_en: "By which biological process do green plants synthesize their food in sunlight?",
    options_hi: ["(a) कोशिकीय श्वसन", "(b) वाष्पोत्सर्जन", "(c) परासरण", "(d) प्रकाश संश्लेषण"],
    options_en: ["(a) Cellular Respiration", "(b) Transpiration", "(c) Osmosis", "(d) Photosynthesis"],
    answer: "(d)"
  },

  {
    id: 41,
    question_hi: "श्रीलंका की आधिकारिक विधायी व प्रशासनिक राजधानी कौन-सी है?",
    question_en: "What is the official legislative and administrative capital of Sri Lanka?",
    options_hi: ["(a) श्री जयवर्धनेपुरा कोट्टे", "(b) कोलंबो", "(c) कैंडी", "(d) गाले"],
    options_en: ["(a) Sri Jayawardenepura Kotte", "(b) Colombo", "(c) Kandy", "(d) Galle"],
    answer: "(a)"
  },
  {
    id: 42,
    question_hi: "दक्षिण कोरिया में प्रचलित आधिकारिक राष्ट्रीय मुद्रा कौन-सी है?",
    question_en: "What is the official national currency used in South Korea?",
    options_hi: ["(a) येन", "(b) युआन", "(c) वॉन", "(d) रिंगिट"],
    options_en: ["(a) Yen", "(b) Yuan", "(c) Won", "(d) Ringgit"],
    answer: "(c)"
  },
  {
    id: 43,
    question_hi: "'द कैंटरबरी टेल्स' के रचयिता तथा अंग्रेज़ी साहित्य के जनक कौन कहलाते हैं?",
    question_en: "Who wrote 'The Canterbury Tales' and is acknowledged as the Father of English Literature?",
    options_hi: ["(a) विलियम शेक्सपियर", "(b) जेफ्री चॉसर", "(c) जॉन मिल्टन", "(d) विलियम वर्ड्सवर्थ"],
    options_en: ["(a) William Shakespeare", "(b) Geoffrey Chaucer", "(c) John Milton", "(d) William Wordsworth"],
    answer: "(b)"
  },
  {
    id: 44,
    question_hi: "मानव शरीर की सबसे छोटी हड्डी स्टेपीज शरीर के किस अंग में पाई जाती है?",
    question_en: "The smallest bone 'Stapes' of the human body is situated in which part?",
    options_hi: ["(a) नाक में", "(b) कान में", "(c) उंगली में", "(d) गले में"],
    options_en: ["(a) In the Nose", "(b) In the Ear", "(c) In the Finger", "(d) In the Throat"],
    answer: "(b)"
  },
  {
    id: 45,
    question_hi: "ओशिनिया क्षेत्र के देश न्यूजीलैंड की राजधानी कौन-सी है?",
    question_en: "Which city serves as the official capital of New Zealand?",
    options_hi: ["(a) ऑकलैंड", "(b) क्राइस्टचर्च", "(c) हैमिल्टन", "(d) वेलिंगटन"],
    options_en: ["(a) Auckland", "(b) Christchurch", "(c) Hamilton", "(d) Wellington"],
    answer: "(d)"
  },
  {
    id: 46,
    question_hi: "पौधों की पत्तियों की सतह पर उपस्थित किन सूक्ष्म छिद्रों द्वारा गैसों का आदान-प्रदान होता है?",
    question_en: "Through which microscopic pores on leaves does the exchange of gases take place?",
    options_hi: ["(a) फ्लोएम नलिकाएं", "(b) जाइलम छिद्र", "(c) रंध्र", "(d) लेंटिसेल्स"],
    options_en: ["(a) Phloem Pores", "(b) Xylem Vessels", "(c) Stomata", "(d) Lenticels"],
    answer: "(c)"
  },
  {
    id: 47,
    question_hi: "दक्षिण अफ्रीका की आधिकारिक राष्ट्रीय मुद्रा क्या है?",
    question_en: "What is the official national currency of South Africa?",
    options_hi: ["(a) रैंड", "(b) नाइरा", "(c) शिलिंग", "(d) बिर्र"],
    options_en: ["(a) Rand", "(b) Naira", "(c) Shilling", "(d) Birr"],
    answer: "(a)"
  },
  {
    id: 48,
    question_hi: "संविधान प्रारूप समिति के अध्यक्ष तथा भारतीय संविधान के जनक कौन हैं?",
    question_en: "Who was the Drafting Committee Chairman and is revered as the Father of the Indian Constitution?",
    options_hi: ["(a) डॉ. राजेंद्र प्रसाद", "(b) डॉ. भीमराव अंबेडकर", "(c) पं. जवाहरलाल नेहरू", "(d) सरदार वल्लभभाई पटेल"],
    options_en: ["(a) Dr. Rajendra Prasad", "(b) Dr. B.R. Ambedkar", "(c) Pt. Jawaharlal Nehru", "(d) Sardar Vallabhbhai Patel"],
    answer: "(b)"
  },
  {
    id: 49,
    question_hi: "पृथ्वी के वायुमंडल में सर्वाधिक मात्रा में पाई जाने वाली गैस कौन-सी है?",
    question_en: "Which gas is present in the largest quantity in Earth's atmosphere?",
    options_hi: ["(a) ऑक्सीजन", "(b) कार्बन डाइऑक्साइड", "(c) नाइट्रोजन", "(d) आर्गन"],
    options_en: ["(a) Oxygen", "(b) Carbon Dioxide", "(c) Nitrogen", "(d) Argon"],
    answer: "(c)"
  },
  {
    id: 50,
    question_hi: "पिरामिडों के देश मिस्र की ऐतिहासिक राजधानी कौन-सी है?",
    question_en: "What is the historic capital city of Egypt?",
    options_hi: ["(a) अलेक्जेंड्रिया", "(b) गीज़ा", "(c) लक्सर", "(d) काहिरा"],
    options_en: ["(a) Alexandria", "(b) Giza", "(c) Luxor", "(d) Cairo"],
    answer: "(d)"
  },

  {
    id: 51,
    question_hi: "'एलिमेंट्स' ग्रंथ के रचयिता तथा गणित में ज्यामिति के जनक कौन माने जाते हैं?",
    question_en: "Who authored 'Elements' and is revered as the Father of Geometry?",
    options_hi: ["(a) पाइथागोरस", "(b) आर्किमिडीज़", "(c) यूक्लिड", "(d) आर्यभट्ट"],
    options_en: ["(a) Pythagoras", "(b) Archimedes", "(c) Euclid", "(d) Aryabhata"],
    answer: "(c)"
  },
  {
    id: 52,
    question_hi: "मानव शरीर में रक्त को निरंतर पंप करने का मुख्य कार्य कौन-सा अंग करता है?",
    question_en: "Which organ continuously pumps blood throughout the human body?",
    options_hi: ["(a) यकृत", "(b) हृदय", "(c) फेफड़े", "(d) गुर्दा"],
    options_en: ["(a) Liver", "(b) Heart", "(c) Lungs", "(d) Kidney"],
    answer: "(b)"
  },
  {
    id: 53,
    question_hi: "दक्षिण-पूर्व एशियाई देश थाईलैंड की राजधानी क्या है?",
    question_en: "What is the capital city of Southeast Asian nation Thailand?",
    options_hi: ["(a) बैंकॉक", "(b) फुकेत", "(c) पटाया", "(d) चियांग माई"],
    options_en: ["(a) Bangkok", "(b) Phuket", "(c) Pattaya", "(d) Chiang Mai"],
    answer: "(a)"
  },
  {
    id: 54,
    question_hi: "'हिस्टोरिया प्लांटारम' के लेखक तथा वनस्पति विज्ञान के जनक कौन हैं?",
    question_en: "Author of 'Historia Plantarum', who is recognized as the Father of Botany?",
    options_hi: ["(a) अरस्तू", "(b) कार्ल लिनिअस", "(c) थियोफ्रेस्टस", "(d) ग्रेगर मेंडल"],
    options_en: ["(a) Aristotle", "(b) Carl Linnaeus", "(c) Theophrastus", "(d) Gregor Mendel"],
    answer: "(c)"
  },
  {
    id: 55,
    question_hi: "सजीवों में एरोबिक ऑक्सी श्वसन क्रिया के लिए कौन-सी गैस अत्यंत अनिवार्य है?",
    question_en: "Which gas is vital for aerobic respiration in living organisms?",
    options_hi: ["(a) ऑक्सीजन", "(b) कार्बन डाइऑक्साइड", "(c) नाइट्रोजन", "(d) हाइड्रोजन"],
    options_en: ["(a) Oxygen", "(b) Carbon Dioxide", "(c) Nitrogen", "(d) Hydrogen"],
    answer: "(a)"
  },
  {
    id: 56,
    question_hi: "संयुक्त अरब अमीरात की आधिकारिक संघीय राजधानी कौन-सी है?",
    question_en: "Which city is the federal capital of the United Arab Emirates?",
    options_hi: ["(a) दुबई", "(b) शारजाह", "(c) अबू धाबी", "(d) अजमान"],
    options_en: ["(a) Dubai", "(b) Sharjah", "(c) Abu Dhabi", "(d) Ajman"],
    answer: "(c)"
  },
  {
    id: 57,
    question_hi: "'ऑपरेशन फ्लड' के सूत्रधार तथा भारत में श्वेत क्रांति के जनक कौन हैं?",
    question_en: "Who led 'Operation Flood' and is celebrated as the Father of the White Revolution in India?",
    options_hi: ["(a) डॉ. वर्गीज कुरियन", "(b) डॉ. एम. एस. स्वामीनाथन", "(c) नॉर्मन बोरलॉग", "(d) सैम पित्रोदा"],
    options_en: ["(a) Dr. Verghese Kurien", "(b) Dr. M.S. Swaminathan", "(c) Norman Borlaug", "(d) Sam Pitroda"],
    answer: "(a)"
  },
  {
    id: 58,
    question_hi: "हमारे सौरमंडल का द्रव्यमान एवं आकार में सबसे विशाल ग्रह कौन-सा है?",
    question_en: "Which is the largest planet in our solar system by mass and size?",
    options_hi: ["(a) शनि", "(b) मंगल", "(c) बृहस्पति", "(d) पृथ्वी"],
    options_en: ["(a) Saturn", "(b) Mars", "(c) Jupiter", "(d) Earth"],
    answer: "(c)"
  },
  {
    id: 59,
    question_hi: "दक्षिण अमेरिकी देश अर्जेंटीना की राजधानी निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the capital city of Argentina?",
    options_hi: ["(a) रोसारियो", "(b) कॉर्डोबा", "(c) मेंडोज़ा", "(d) ब्यूनस आयर्स"],
    options_en: ["(a) Rosario", "(b) Córdoba", "(c) Mendoza", "(d) Buenos Aires"],
    answer: "(d)"
  },
  {
    id: 60,
    question_hi: "रूस की आधिकारिक राष्ट्रीय मुद्रा निम्नलिखित में से क्या है?",
    question_en: "Which of the following is the official national currency of Russia?",
    options_hi: ["(a) यूरो", "(b) दिनार", "(c) रूबल", "(d) क्रोन"],
    options_en: ["(a) Euro", "(b) Dinar", "(c) Ruble", "(d) Krone"],
    answer: "(c)"
  },

  {
    id: 61,
    question_hi: "लौह ऑक्साइड की प्रचुरता के कारण किस ग्रह को 'लाल ग्रह' कहा जाता है?",
    question_en: "Which planet is called the 'Red Planet' due to the abundance of iron oxide on its surface?",
    options_hi: ["(a) शुक्र", "(b) मंगल", "(c) बुध", "(d) बृहस्पति"],
    options_en: ["(a) Venus", "(b) Mars", "(c) Mercury", "(d) Jupiter"],
    answer: "(b)"
  },
  {
    id: 62,
    question_hi: "चिकित्सकों द्वारा ली जाने वाली नैतिक शपथ से जुड़े चिकित्सा विज्ञान के जनक कौन हैं?",
    question_en: "Associated with the physicians' ethical oath, who is the Father of Medicine?",
    options_hi: ["(a) एडवर्ड जेनर", "(b) हिप्पोक्रेट्स", "(c) लुई पाश्चर", "(d) अलेक्जेंडर फ्लेमिंग"],
    options_en: ["(a) Edward Jenner", "(b) Hippocrates", "(c) Louis Pasteur", "(d) Alexander Fleming"],
    answer: "(b)"
  },
  {
    id: 63,
    question_hi: "यूरोपीय संघ के प्रमुख देश जर्मनी की राष्ट्रीय राजधानी कौन-सी है?",
    question_en: "Which city is the national capital of European nation Germany?",
    options_hi: ["(a) म्यूनिख", "(b) बर्लिन", "(c) फ्रैंकफर्ट", "(d) हैम्बर्ग"],
    options_en: ["(a) Munich", "(b) Berlin", "(c) Frankfurt", "(d) Hamburg"],
    answer: "(b)"
  },
  {
    id: 64,
    question_hi: "भौतिकी में बल का अंतरराष्ट्रीय एसआई मात्रक क्या है?",
    question_en: "What is the international SI unit of Force in physics?",
    options_hi: ["(a) जूल", "(b) वाट", "(c) न्यूटन", "(d) पास्कल"],
    options_en: ["(a) Joule", "(b) Watt", "(c) Newton", "(d) Pascal"],
    answer: "(c)"
  },
  {
    id: 65,
    question_hi: "पड़ोसी देश म्यांमार की राष्ट्रीय मुद्रा निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the official currency of Myanmar?",
    options_hi: ["(a) टका", "(b) रुफिया", "(c) रिंगिट", "(d) क्यात"],
    options_en: ["(a) Taka", "(b) Rufiyaa", "(c) Ringgit", "(d) Kyat"],
    answer: "(d)"
  },
  {
    id: 66,
    question_hi: "द्रव्यमान संरक्षण का नियम देने वाले आधुनिक रसायन विज्ञान के जनक कौन हैं?",
    question_en: "Who formulated the Law of Conservation of Mass and is the Father of Modern Chemistry?",
    options_hi: ["(a) एंटोनी लैवॉज़ियर", "(b) रॉबर्ट बॉयल", "(c) जॉन डाल्टन", "(d) दिमित्री मेंडेलीव"],
    options_en: ["(a) Antoine Lavoisier", "(b) Robert Boyle", "(c) John Dalton", "(d) Dmitri Mendeleev"],
    answer: "(a)"
  },
  {
    id: 67,
    question_hi: "ऊर्जा तथा कार्य दोनों का मानक एसआई मात्रक निम्नलिखित में से कौन-सा है?",
    question_en: "Which of the following is the standard SI unit for both Energy and Work?",
    options_hi: ["(a) वाट", "(b) न्यूटन", "(c) जूल", "(d) वोल्ट"],
    options_en: ["(a) Watt", "(b) Newton", "(c) Joule", "(d) Volt"],
    answer: "(c)"
  },
  {
    id: 68,
    question_hi: "फारस की खाड़ी में स्थित देश कतर की राष्ट्रीय राजधानी क्या है?",
    question_en: "What is the capital city of the Arabian Peninsula nation Qatar?",
    options_hi: ["(a) लुसैल", "(b) अल वकराह", "(c) अल खोर", "(d) दोहा"],
    options_en: ["(a) Lusail", "(b) Al Wakrah", "(c) Al Khor", "(d) Doha"],
    answer: "(d)"
  },
  {
    id: 69,
    question_hi: "थाईलैंड की आधिकारिक राष्ट्रीय मुद्रा कौन-सी है?",
    question_en: "What is the official currency unit of Thailand?",
    options_hi: ["(a) रिंगिट", "(b) क्यात", "(c) बाट", "(d) डोंग"],
    options_en: ["(a) Ringgit", "(b) Kyat", "(c) Baht", "(d) Dong"],
    answer: "(c)"
  },
  {
    id: 70,
    question_hi: "सौरमंडल में सूर्य के सबसे निकटतम दूरी पर स्थित ग्रह कौन-सा है?",
    question_en: "Which planet is located closest to the Sun in the Solar System?",
    options_hi: ["(a) शुक्र", "(b) मंगल", "(c) बुध", "(d) पृथ्वी"],
    options_en: ["(a) Venus", "(b) Mars", "(c) Mercury", "(d) Earth"],
    answer: "(c)"
  },

  {
    id: 71,
    question_hi: "मटर के पौधों पर संकरण प्रयोग कर वंशागति के नियम देने वाले आनुवंशिकी के जनक कौन हैं?",
    question_en: "Who formulated the laws of inheritance via pea plants and is the Father of Genetics?",
    options_hi: ["(a) ग्रेगर मेंडल", "(b) चार्ल्स डार्विन", "(c) थॉमस हंट मॉर्गन", "(d) लैमार्क"],
    options_en: ["(a) Gregor Mendel", "(b) Charles Darwin", "(c) Thomas Hunt Morgan", "(d) Lamarck"],
    answer: "(a)"
  },
  {
    id: 72,
    question_hi: "प्रमुख तकनीकी राष्ट्र दक्षिण कोरिया की राजधानी कौन-सी है?",
    question_en: "What is the capital city of East Asian nation South Korea?",
    options_hi: ["(a) बुसान", "(b) सियोल", "(c) इंचियोन", "(d) डेगू"],
    options_en: ["(a) Busan", "(b) Seoul", "(c) Incheon", "(d) Daegu"],
    answer: "(b)"
  },
  {
    id: 73,
    question_hi: "सिरके में खट्टे स्वाद एवं गंध के लिए कौन-सा रासायनिक अम्ल उत्तरदायी होता है?",
    question_en: "Which chemical acid is responsible for the sour taste and smell in Vinegar?",
    options_hi: ["(a) फॉर्मिक अम्ल", "(b) साइट्रिक अम्ल", "(c) लैक्टिक अम्ल", "(d) एसिटिक अम्ल"],
    options_en: ["(a) Formic Acid", "(b) Citric Acid", "(c) Lactic Acid", "(d) Acetic Acid"],
    answer: "(d)"
  },
  {
    id: 74,
    question_hi: "ब्रिटेन की ऐतिहासिक एवं आधिकारिक राष्ट्रीय मुद्रा क्या है?",
    question_en: "What is the official currency of the United Kingdom?",
    options_hi: ["(a) यूरो", "(b) डॉलर", "(c) पाउंड स्टर्लिंग", "(d) फ्रैंक"],
    options_en: ["(a) Euro", "(b) Dollar", "(c) Pound Sterling", "(d) Franc"],
    answer: "(c)"
  },
  {
    id: 75,
    question_hi: "टीसीपी/आईपी प्रोटोकॉल के विकास से जुड़े इंटरनेट के जनक के रूप में किन्हें जाना जाता है?",
    question_en: "Known for developing TCP/IP protocols, who are recognized as the Fathers of the Internet?",
    options_hi: ["(a) टिम बर्नर्स ली", "(b) विंट सर्फ और बॉब कान", "(c) बिल गेट्स", "(d) स्टीव जॉब्स"],
    options_en: ["(a) Tim Berners-Lee", "(b) Vint Cerf and Bob Kahn", "(c) Bill Gates", "(d) Steve Jobs"],
    answer: "(b)"
  },
  {
    id: 76,
    question_hi: "दैनिक जीवन में उपयोग किए जाने वाले साधारण खाने के नमक का रासायनिक नाम क्या है?",
    question_en: "What is the scientific chemical name of common table salt used in daily life?",
    options_hi: ["(a) सोडियम हाइड्रोक्साइड", "(b) सोडियम कार्बोनेट", "(c) सोडियम क्लोराइड", "(d) पोटेशियम क्लोराइड"],
    options_en: ["(a) Sodium Hydroxide", "(b) Sodium Carbonate", "(c) Sodium Chloride", "(d) Potassium Chloride"],
    answer: "(c)"
  },
  {
    id: 77,
    question_hi: "भारत के पूर्वी पड़ोसी देश म्यांमार की वर्तमान आधिकारिक राजधानी कौन-सी है?",
    question_en: "What is the current official administrative capital of Myanmar?",
    options_hi: ["(a) यांगून", "(b) मांडले", "(c) बागन", "(d) नेपीडॉ"],
    options_en: ["(a) Yangon", "(b) Mandalay", "(c) Bagan", "(d) Naypyidaw"],
    answer: "(d)"
  },
  {
    id: 78,
    question_hi: "सिंगापुर के वर्तमान प्रधानमंत्री पद पर कौन आसीन हैं?",
    question_en: "Who is currently serving as the Prime Minister of Singapore?",
    options_hi: ["(a) लॉरेंस वोंग", "(b) ली सीन लूंग", "(c) गोह चोक टोंग", "(d) थर्मन षणमुगरत्नम"],
    options_en: ["(a) Lawrence Wong", "(b) Lee Hsien Loong", "(c) Goh Chok Tong", "(d) Tharman Shanmugaratnam"],
    answer: "(a)"
  },
  {
    id: 79,
    question_hi: "तुर्की की आधिकारिक राष्ट्रीय मुद्रा निम्नलिखित में से कौन-सी है?",
    question_en: "Which of the following is the official national currency of Turkey?",
    options_hi: ["(a) दिनार", "(b) रियाल", "(c) तुर्की लीरा", "(d) दिरहम"],
    options_en: ["(a) Dinar", "(b) Riyal", "(c) Turkish Lira", "(d) Dirham"],
    answer: "(c)"
  },
  {
    id: 80,
    question_hi: "पारंपरिक तापदीप्त विद्युत बल्ब का पतला फिलामेंट किस उच्च गलनांक वाली धातु से निर्मित होता है?",
    question_en: "The thin filament of an incandescent light bulb is made of which high melting-point metal?",
    options_hi: ["(a) तांबा", "(b) नाइक्रोम", "(c) प्लैटिनम", "(d) टंगस्टन"],
    options_en: ["(a) Copper", "(b) Nichrome", "(c) Platinum", "(d) Tungsten"],
    answer: "(d)"
  },

  {
    id: 81,
    question_hi: "भारत में उच्च उपज वाली किस्मों के माध्यम से हरित क्रांति के जनक किन्हें कहा जाता है?",
    question_en: "Who is widely celebrated as the Father of the Green Revolution in India?",
    options_hi: ["(a) डॉ. वर्गीज कुरियन", "(b) नॉर्मन बोरलॉग", "(c) डॉ. एम. एस. स्वामीनाथन", "(d) सी. सुब्रमण्यम"],
    options_en: ["(a) Dr. Verghese Kurien", "(b) Norman Borlaug", "(c) Dr. M.S. Swaminathan", "(d) C. Subramaniam"],
    answer: "(c)"
  },
  {
    id: 82,
    question_hi: "आल्प्स पर्वतों के मध्य स्थित स्विट्जरलैंड की वास्तविक संघीय राजधानी कौन-सी है?",
    question_en: "What is the de facto federal capital city of Switzerland?",
    options_hi: ["(a) बर्न", "(b) ज्यूरिख", "(c) जिनेवा", "(d) बासेल"],
    options_en: ["(a) Bern", "(b) Zurich", "(c) Geneva", "(d) Basel"],
    answer: "(a)"
  },
  {
    id: 83,
    question_hi: "कमरे के सामान्य तापमान पर द्रव अवस्था में पाई जाने वाली एकमात्र अधातु कौन-सी है?",
    question_en: "Which is the only non-metal that exists in liquid state at normal room temperature?",
    options_hi: ["(a) ब्रोमीन", "(b) आयोडीन", "(c) क्लोरीन", "(d) सल्फर"],
    options_en: ["(a) Bromine", "(b) Iodine", "(c) Chlorine", "(d) Sulphur"],
    answer: "(a)"
  },
  {
    id: 84,
    question_hi: "इज़राइल की आधिकारिक राष्ट्रीय मुद्रा निम्नलिखित में से कौन-सी है?",
    question_en: "What is the official national currency of Israel?",
    options_hi: ["(a) दिनार", "(b) नया शेकेल", "(c) पाउंड", "(d) रियाल"],
    options_en: ["(a) Dinar", "(b) New Shekel", "(c) Pound", "(d) Riyal"],
    answer: "(b)"
  },
  {
    id: 85,
    question_hi: "वर्ष 1913 में 'राजा हरिश्चंद्र' फिल्म बनाने वाले भारतीय सिनेमा के जनक कौन हैं?",
    question_en: "Who directed 'Raja Harishchandra' (1913) and is honored as the Father of Indian Cinema?",
    options_hi: ["(a) सत्यजीत रे", "(b) पृथ्वीराज कपूर", "(c) दादासाहेब फाल्के", "(d) शांताराम"],
    options_en: ["(a) Satyajit Ray", "(b) Prithviraj Kapoor", "(c) Dadasaheb Phalke", "(d) V. Shantaram"],
    answer: "(c)"
  },
  {
    id: 86,
    question_hi: "रसोई घर में प्रयुक्त होने वाले बेकिंग सोडा का रासायनिक नाम क्या है?",
    question_en: "What is the chemical name of baking soda used in kitchens?",
    options_hi: ["(a) सोडियम कार्बोनेट", "(b) कैल्शियम कार्बोनेट", "(c) सोडियम क्लोराइड", "(d) सोडियम हाइड्रोजन कार्बोनेट"],
    options_en: ["(a) Sodium Carbonate", "(b) Calcium Carbonate", "(c) Sodium Chloride", "(d) Sodium Hydrogen Carbonate"],
    answer: "(d)"
  },
  {
    id: 87,
    question_hi: "हिंद महासागर में स्थित द्वीपीय देश मालदीव की राजधानी कौन-सी है?",
    question_en: "What is the capital city of the Indian Ocean island nation Maldives?",
    options_hi: ["(a) हुलहुमले", "(b) अड्डू", "(c) माले", "(d) कुलहुधुफ्फुशी"],
    options_en: ["(a) Hulhumalé", "(b) Addu City", "(c) Malé", "(d) Kulhudhuffushi"],
    answer: "(c)"
  },
  {
    id: 88,
    question_hi: "न्यूजीलैंड के वर्तमान प्रधानमंत्री पद पर कौन आसीन हैं?",
    question_en: "Who currently serves as the Prime Minister of New Zealand?",
    options_hi: ["(a) क्रिस्टोफर लक्सन", "(b) क्रिस हिपकिंस", "(c) जेसिंडा अर्डर्न", "(d) जॉन की"],
    options_en: ["(a) Christopher Luxon", "(b) Chris Hipkins", "(c) Jacinda Ardern", "(d) John Key"],
    answer: "(a)"
  },
  {
    id: 89,
    question_hi: "ब्राजील के वर्तमान राष्ट्रपति पद पर कौन आसीन हैं?",
    question_en: "Who is currently serving as the President of Brazil?",
    options_hi: ["(a) जायर बोल्सोनारो", "(b) लुइज़ इनासियो लूला दा सिल्वा", "(c) मिशेल टेमर", "(d) फर्नांडो हेनरिक कार्डोसो"],
    options_en: ["(a) Jair Bolsonaro", "(b) Luiz Inácio Lula da Silva", "(c) Michel Temer", "(d) Fernando Henrique Cardoso"],
    answer: "(b)"
  },
  {
    id: 90,
    question_hi: "दूध के किण्वन द्वारा उसे दही में परिवर्तित करने वाला उपयोगी सूक्ष्मजीव कौन-सा है?",
    question_en: "Which beneficial microorganism converts milk into curd through fermentation?",
    options_hi: ["(a) राइजोबियम", "(b) साल्मोनेला", "(c) लैक्टोबैसिलस", "(d) स्ट्रेप्टोकोकस"],
    options_en: ["(a) Rhizobium", "(b) Salmonella", "(c) Lactobacillus", "(d) Streptococcus"],
    answer: "(c)"
  },

  {
    id: 91,
    question_hi: "इटली की पहली महिला प्रधानमंत्री के रूप में कौन कार्यरत हैं?",
    question_en: "Who serves as the first female Prime Minister of Italy?",
    options_hi: ["(a) मारियो द्रागी", "(b) सिल्वियो बर्लुस्कोनी", "(c) मातेओ रेन्ज़ी", "(d) जॉर्जिया मेलोनी"],
    options_en: ["(a) Mario Draghi", "(b) Silvio Berlusconi", "(c) Matteo Renzi", "(d) Giorgia Meloni"],
    answer: "(d)"
  },
  {
    id: 92,
    question_hi: "दक्षिण अफ्रीका की आधिकारिक प्रशासनिक राजधानी कौन-सी है?",
    question_en: "What is the official administrative capital of South Africa?",
    options_hi: ["(a) केप टाउन", "(b) जोहान्सबर्ग", "(c) प्रिटोरिया", "(d) डरबन"],
    options_en: ["(a) Cape Town", "(b) Johannesburg", "(c) Pretoria", "(d) Durban"],
    answer: "(c)"
  },
  {
    id: 93,
    question_hi: "वर्तमान में भारत गणराज्य के प्रधानमंत्री कौन हैं?",
    question_en: "Who is currently serving as the Prime Minister of the Republic of India?",
    options_hi: ["(a) नरेंद्र मोदी", "(b) अमित शाह", "(c) राजनाथ सिंह", "(d) डॉ. एस. जयशंकर"],
    options_en: ["(a) Narendra Modi", "(b) Amit Shah", "(c) Rajnath Singh", "(d) Dr. S. Jaishankar"],
    answer: "(a)"
  },
  {
    id: 94,
    question_hi: "ऑस्ट्रेलिया के वर्तमान प्रधानमंत्री पद पर कौन आसीन हैं?",
    question_en: "Who is currently serving as the Prime Minister of Australia?",
    options_hi: ["(a) स्कॉट मॉरिसन", "(b) एंथनी अल्बनीज़", "(c) मैल्कम टर्नबुल", "(d) केविन रुड"],
    options_en: ["(a) Scott Morrison", "(b) Anthony Albanese", "(c) Malcolm Turnbull", "(d) Kevin Rudd"],
    answer: "(b)"
  },
  {
    id: 95,
    question_hi: "मनुष्य सांस छोड़ते समय गैसों के मिश्रण में किस गैस का प्रतिशत ग्रहण करने की तुलना में अधिक निष्कासित करता है?",
    question_en: "Which gas is exhaled in noticeably higher proportion compared to when it was inhaled?",
    options_hi: ["(a) कार्बन मोनोऑक्साइड", "(b) सल्फर डाइऑक्साइड", "(c) कार्बन डाइऑक्साइड", "(d) मीथेन"],
    options_en: ["(a) Carbon Monoxide", "(b) Sulfur Dioxide", "(c) Carbon Dioxide", "(d) Methane"],
    answer: "(c)"
  },
  {
    id: 96,
    question_hi: "चीन की स्टेट काउंसिल के प्रीमियर (प्रधानमंत्री) कौन हैं?",
    question_en: "Who currently serves as the Premier of the State Council of China?",
    options_hi: ["(a) शी जिनपिंग", "(b) ली खछ्यांग", "(c) वांग यी", "(d) ली छ्यांग"],
    options_en: ["(a) Xi Jinping", "(b) Li Keqiang", "(c) Wang Yi", "(d) Li Qiang"],
    answer: "(d)"
  },
  {
    id: 97,
    question_hi: "यूक्रेन के वर्तमान राष्ट्रपति पद पर कौन आसीन हैं?",
    question_en: "Who currently serves as the President of Ukraine?",
    options_hi: ["(a) पेट्रो पोरोशेंको", "(b) डेनिस श्मिहाल", "(c) वोलोदिमिर ज़ेलेंस्की", "(d) ओलेक्ज़ेंडर तुरचिनोव"],
    options_en: ["(a) Petro Poroshenko", "(b) Denys Shmyhal", "(c) Volodymyr Zelenskyy", "(d) Oleksandr Turchynov"],
    answer: "(c)"
  },
  {
    id: 98,
    question_hi: "स्पेन के वर्तमान प्रधानमंत्री के रूप में कौन कार्यरत हैं?",
    question_en: "Who is currently serving as the Prime Minister of Spain?",
    options_hi: ["(a) पेद्रो सांचेज़", "(b) मारियानो राजोय", "(c) अल्बर्टो नुनेज़ फेइहू", "(d) जोस लुइस जैपाटेरो"],
    options_en: ["(a) Pedro Sánchez", "(b) Mariano Rajoy", "(c) Alberto Núñez Feijóo", "(d) José Luis Zapatero"],
    answer: "(a)"
  },
  {
    id: 99,
    question_hi: "मलेशिया के वर्तमान प्रधानमंत्री पद पर कौन आसीन हैं?",
    question_en: "Who is currently serving as the Prime Minister of Malaysia?",
    options_hi: ["(a) महाथिर मोहम्मद", "(b) अनवर इब्राहिम", "(c) मुहीद्दीन यासीन", "(d) इस्माइल साबरी याकूब"],
    options_en: ["(a) Mahathir Mohamad", "(b) Anwar Ibrahim", "(c) Muhyiddin Yassin", "(d) Ismail Sabri Yaakob"],
    answer: "(b)"
  },
  {
    id: 100,
    question_hi: "दक्षिण अफ्रीका के वर्तमान राष्ट्रपति पद पर कौन आसीन हैं?",
    question_en: "Who currently serves as the President of South Africa?",
    options_hi: ["(a) जैकब जुमा", "(b) थाबो म्बेकी", "(c) सिरिल रामाफोसा", "(d) कलेमा मोटलांथे"],
    options_en: ["(a) Jacob Zuma", "(b) Thabo Mbeki", "(c) Cyril Ramaphosa", "(d) Kgalema Motlanthe"],
    answer: "(c)"
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}