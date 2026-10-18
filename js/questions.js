/**
 * =========================================================================
 * 🎓 GAUTAM TEACHING CENTRE (GTC) - OFFICIAL QUESTION BANK (CLASS 3 ADVANCE)
 * File: js/questions.js
 * Structure: 50 Moderate-to-Hard Shuffled Questions (Bilingual: Hindi & English)
 * Topics Included:
 *   - 💰 लाभ और हानि (Profit & Loss - Word Problems)
 *   - ➗ गुणा और भाग (Hard Multiplication & Division Remainder Problems)
 *   - 🔢 ल.स.प. और म.स.प. (LCM & HCF Application)
 *   - 🍕 भिन्न का जोड़ (Addition of Unlike & Mixed Fractions)
 *   - 📐 आयत, वर्ग और घन (Rectangle, Square & Cube - Area, Perimeter, Volume, Properties)
 *   - 🌳 गुणनखंड (Prime Factorization & Factors)
 *   - 🌍 सामान्य ज्ञान एवं विज्ञान (Moderate-Hard GK & General Science)
 * 
 * Strict Answer Key Pattern (50 Questions):
 * ABBDCCCBAD CABDCABDCA DCBBCDADDD CADCBCDADC BCDADCBBBB
 * =========================================================================
 */

const questions = [
  {
    id: 1,
    question_hi: "रोहन ने एक पुरानी साइकिल ₹1,450 में खरीदी और उसकी मरम्मत पर ₹350 खर्च किए। यदि उसने वह साइकिल ₹2,100 में बेच दी, तो उसे कितने रुपये का लाभ हुआ?",
    question_en: "Rohan bought an old bicycle for ₹1,450 and spent ₹350 on its repair. If he sold it for ₹2,100, how much profit did he make?",
    options_hi: ["(a) ₹300", "(b) ₹250", "(c) ₹350", "(d) ₹650"],
    options_en: ["(a) ₹300", "(b) ₹250", "(c) ₹350", "(d) ₹650"],
    answer: "(a)"
  },
  {
    id: 2,
    question_hi: "जब किसी संख्या को 18 से भाग दिया जाता है, तो भागफल 25 और शेषफल 13 आता है। वह संख्या क्या है?",
    question_en: "When a number is divided by 18, the quotient is 25 and the remainder is 13. What is that number?",
    options_hi: ["(a) 450", "(b) 463", "(c) 437", "(d) 473"],
    options_en: ["(a) 450", "(b) 463", "(c) 437", "(d) 473"],
    answer: "(b)"
  },
  {
    id: 3,
    question_hi: "3 अंकों की सबसे बड़ी संख्या और 2 अंकों की सबसे छोटी विषम संख्या का गुणनफल क्या होगा?",
    question_en: "What is the product of the greatest 3-digit number and the smallest 2-digit odd number?",
    options_hi: ["(a) 9990", "(b) 10989", "(c) 9999", "(d) 11988"],
    options_en: ["(a) 9990", "(b) 10989", "(c) 9999", "(d) 11988"],
    answer: "(b)"
  },
  {
    id: 4,
    question_hi: "12, 18 और 24 का लघुत्तम समापवर्त्य (LCM) क्या होगा?",
    question_en: "What is the Least Common Multiple (LCM) of 12, 18, and 24?",
    options_hi: ["(a) 36", "(b) 48", "(c) 144", "(d) 72"],
    options_en: ["(a) 36", "(b) 48", "(c) 144", "(d) 72"],
    answer: "(d)"
  },
  {
    id: 5,
    question_hi: "भिन्न को जोड़ें और सरलतम रूप चुनें: 3/4 + 5/6 = ?",
    question_en: "Add the fractions and choose the simplest form: 3/4 + 5/6 = ?",
    options_hi: ["(a) 8/10", "(b) 15/24", "(c) 19/12", "(d) 17/12"],
    options_en: ["(a) 8/10", "(b) 15/24", "(c) 19/12", "(d) 17/12"],
    answer: "(c)"
  },
  {
    id: 6,
    question_hi: "एक आयताकार पार्क की लंबाई 24 मीटर और चौड़ाई 16 मीटर है। इसके चारों ओर 3 चक्कर लगाने में कुल कितनी दूरी तय करनी होगी?",
    question_en: "The length of a rectangular park is 24 m and breadth is 16 m. What is the total distance covered in taking 3 rounds around it?",
    options_hi: ["(a) 80 मीटर", "(b) 160 मीटर", "(c) 240 मीटर", "(d) 384 मीटर"],
    options_en: ["(a) 80 m", "(b) 160 m", "(c) 240 m", "(d) 384 m"],
    answer: "(c)"
  },
  {
    id: 7,
    question_hi: "एक घन (Cube) में कुल कितने किनारे (Edges), फलक (Faces) और शीर्ष (Vertices) होते हैं?",
    question_en: "How many Edges, Faces, and Vertices does a Cube have respectively?",
    options_hi: ["(a) 6, 8, 12", "(b) 8, 6, 12", "(c) 12, 6, 8", "(d) 12, 8, 6"],
    options_en: ["(a) 6, 8, 12", "(b) 8, 6, 12", "(c) 12, 6, 8", "(d) 12, 8, 6"],
    answer: "(c)"
  },
  {
    id: 8,
    question_hi: "संख्या 84 के सभी अभाज्य गुणनखंड (Prime Factorization) क्या हैं?",
    question_en: "What is the correct prime factorization of the number 84?",
    options_hi: ["(a) 2 × 3 × 3 × 7", "(b) 2 × 2 × 3 × 7", "(c) 4 × 3 × 7", "(d) 2 × 2 × 21"],
    options_en: ["(a) 2 × 3 × 3 × 7", "(b) 2 × 2 × 3 × 7", "(c) 4 × 3 × 7", "(d) 2 × 2 × 21"],
    answer: "(b)"
  },
  {
    id: 9,
    question_hi: "36 और 54 का महत्तम समापवर्तक (HCF) क्या है?",
    question_en: "What is the Highest Common Factor (HCF) of 36 and 54?",
    options_hi: ["(a) 18", "(b) 9", "(c) 6", "(d) 27"],
    options_en: ["(a) 18", "(b) 9", "(c) 6", "(d) 27"],
    answer: "(a)"
  },
  {
    id: 10,
    question_hi: "पत्तियों में पाए जाने वाले उस हरे वर्णक (Pigment) का नाम क्या है जो सूर्य के प्रकाश को सोखकर भोजन बनाने में मदद करता है?",
    question_en: "What is the name of the green pigment found in leaves that absorbs sunlight to help make food?",
    options_hi: ["(a) हीमोग्लोबिन", "(b) जाइलम", "(c) स्टोमेटा (रंध्र)", "(d) क्लोरोफिल (पर्णहरित)"],
    options_en: ["(a) Hemoglobin", "(b) Xylem", "(c) Stomata", "(d) Chlorophyll"],
    answer: "(d)"
  },

  {
    id: 11,
    question_hi: "एक फल विक्रेता ने ₹40 प्रति दर्जन की दर से 5 दर्जन केले खरीदे। उनमें से 10 केले सड़ गए और शेष केलों को उसने ₹5 प्रति केला की दर से बेच दिया। उसे कितना लाभ या हानि हुई?",
    question_en: "A fruit seller bought 5 dozen bananas at ₹40 per dozen. 10 bananas got rotten, and he sold the remaining bananas at ₹5 each. Find his profit or loss.",
    options_hi: ["(a) ₹40 लाभ", "(b) ₹30 हानि", "(c) ₹50 लाभ", "(d) ₹50 हानि"],
    options_en: ["(a) ₹40 Profit", "(b) ₹30 Loss", "(c) ₹50 Profit", "(d) ₹50 Loss"],
    answer: "(c)"
  },
  {
    id: 12,
    question_hi: "₹9,450 को 15 मजदूरों में बराबर-बराबर बांटा गया। यदि एक मजदूर ने अपने हिस्से में से ₹180 खर्च कर दिए, तो उसके पास अब कितने रुपये बचे?",
    question_en: "₹9,450 is distributed equally among 15 workers. If one worker spends ₹180 from his share, how much money is left with him?",
    options_hi: ["(a) ₹450", "(b) ₹630", "(c) ₹550", "(d) ₹470"],
    options_en: ["(a) ₹450", "(b) ₹630", "(c) ₹550", "(d) ₹470"],
    answer: "(a)"
  },
  {
    id: 13,
    question_hi: "एक स्कूल बस एक दिन में 48 किलोमीटर चलती है। यदि स्कूल महीने में 24 दिन खुलता है और 1 लीटर डीजल में बस 8 किमी चलती है, तो पूरे महीने में कुल कितने लीटर डीजल लगेगा?",
    question_en: "A school bus travels 48 km a day. If the school opens for 24 days in a month and the bus runs 8 km per liter of diesel, how much diesel is needed for the month?",
    options_hi: ["(a) 124 लीटर", "(b) 144 लीटर", "(c) 1152 लीटर", "(d) 168 लीटर"],
    options_en: ["(a) 124 Liters", "(b) 144 Liters", "(c) 1152 Liters", "(d) 168 Liters"],
    answer: "(b)"
  },
  {
    id: 14,
    question_hi: "तीन घंटियां क्रमशः 10, 15 और 20 मिनट के अंतराल पर बजती हैं। यदि वे सुबह 8:00 बजे एक साथ बजी हों, तो अगली बार वे कितने बजे एक साथ बजेंगी?",
    question_en: "Three bells ring at intervals of 10, 15, and 20 minutes respectively. If they ring together at 8:00 AM, at what time will they ring together next?",
    options_hi: ["(a) सुबह 8:45 बजे", "(b) सुबह 10:00 बजे", "(c) सुबह 9:30 बजे", "(d) सुबह 9:00 बजे"],
    options_en: ["(a) 8:45 AM", "(b) 10:00 AM", "(c) 9:30 AM", "(d) 9:00 AM"],
    answer: "(d)"
  },
  {
    id: 15,
    question_hi: "हल करें: 2/3 + 4/9 + 5/18 = ?",
    question_en: "Solve the fraction addition: 2/3 + 4/9 + 5/18 = ?",
    options_hi: ["(a) 11/18", "(b) 21/18", "(c) 25/18", "(d) 19/9"],
    options_en: ["(a) 11/18", "(b) 21/18", "(c) 25/18", "(d) 19/9"],
    answer: "(c)"
  },
  {
    id: 16,
    question_hi: "एक वर्ग (Square) का परिमाप 64 सेमी है। उस वर्ग का क्षेत्रफल (Area) कितना होगा?",
    question_en: "The perimeter of a square is 64 cm. What will be the area of that square?",
    options_hi: ["(a) 256 वर्ग सेमी", "(b) 128 वर्ग सेमी", "(c) 196 वर्ग सेमी", "(d) 512 वर्ग सेमी"],
    options_en: ["(a) 256 sq cm", "(b) 128 sq cm", "(c) 196 sq cm", "(d) 512 sq cm"],
    answer: "(a)"
  },
  {
    id: 17,
    question_hi: "संख्या 36 के कुल कितने गुणनखंड (Factors) हैं?",
    question_en: "How many total factors does the number 36 have?",
    options_hi: ["(a) 7", "(b) 9", "(c) 8", "(d) 10"],
    options_en: ["(a) 7", "(b) 9", "(c) 8", "(d) 10"],
    answer: "(b)"
  },
  {
    id: 18,
    question_hi: "वह सबसे बड़ी संख्या कौन-सी है जिससे 45 और 75 दोनों पूरी तरह विभाजित हो जाएं?",
    question_en: "Which is the greatest number that completely divides both 45 and 75?",
    options_hi: ["(a) 5", "(b) 3", "(c) 25", "(d) 15"],
    options_en: ["(a) 5", "(b) 3", "(c) 25", "(d) 15"],
    answer: "(d)"
  },
  {
    id: 19,
    question_hi: "मानव शरीर का कौन-सा अंग रक्त को शुद्ध (Filter) करके शरीर से अपशिष्ट पदार्थ बाहर निकालता है?",
    question_en: "Which organ of the human body filters blood and removes waste products?",
    options_hi: ["(a) हृदय (Heart)", "(b) फेफड़े (Lungs)", "(c) वृक्क / गुर्दा (Kidney)", "(d) आमाशय (Stomach)"],
    options_en: ["(a) Heart", "(b) Lungs", "(c) Kidney", "(d) Stomach"],
    answer: "(c)"
  },
  {
    id: 20,
    question_hi: "स्वतंत्र भारत के प्रथम राष्ट्रपति कौन थे?",
    question_en: "Who was the first President of independent India?",
    options_hi: ["(a) डॉ. राजेंद्र प्रसाद", "(b) पं. जवाहरलाल नेहरू", "(c) डॉ. सर्वपल्ली राधाकृष्णन", "(d) सरदार वल्लभभाई पटेल"],
    options_en: ["(a) Dr. Rajendra Prasad", "(b) Pt. Jawaharlal Nehru", "(c) Dr. S. Radhakrishnan", "(d) Sardar Vallabhbhai Patel"],
    answer: "(a)"
  },

  {
    id: 21,
    question_hi: "एक दुकानदार ने एक घड़ी ₹875 में बेची जिससे उसे ₹125 की हानि हुई। यदि वह ₹150 का लाभ कमाना चाहता है, तो उसे घड़ी कितने रुपये में बेचनी चाहिए?",
    question_en: "A shopkeeper sold a watch for ₹875 at a loss of ₹125. For how much should he sell it to gain a profit of ₹150?",
    options_hi: ["(a) ₹1,000", "(b) ₹1,125", "(c) ₹1,025", "(d) ₹1,150"],
    options_en: ["(a) ₹1,000", "(b) ₹1,125", "(c) ₹1,025", "(d) ₹1,150"],
    answer: "(d)"
  },
  {
    id: 22,
    question_hi: "4 अंकों की सबसे बड़ी संख्या (9999) को 12 से भाग देने पर शेषफल (Remainder) क्या बचेगा?",
    question_en: "What will be the remainder when the greatest 4-digit number (9999) is divided by 12?",
    options_hi: ["(a) 1", "(b) 6", "(c) 3", "(d) 9"],
    options_en: ["(a) 1", "(b) 6", "(c) 3", "(d) 9"],
    answer: "(c)"
  },
  {
    id: 23,
    question_hi: "यदि 1 पेटी में 28 सेब हैं और 1 सेब का औसत वजन 125 ग्राम है, तो ऐसी 5 पेटियों में रखे कुल सेबों का वजन कितने किलोग्राम (kg) होगा?",
    question_en: "If 1 box has 28 apples and each apple weighs 125 g, what is the total weight of apples in 5 such boxes in kilograms (kg)?",
    options_hi: ["(a) 15 किग्रा 500 ग्राम", "(b) 17 किग्रा 500 ग्राम", "(c) 18 किग्रा", "(d) 14 किग्रा 250 ग्राम"],
    options_en: ["(a) 15 kg 500 g", "(b) 17 kg 500 g", "(c) 18 kg", "(d) 14 kg 250 g"],
    answer: "(b)"
  },
  {
    id: 24,
    question_hi: "वह सबसे छोटी संख्या ज्ञात कीजिए जिसे 8, 12 और 16 से भाग देने पर प्रत्येक स्थिति में 3 शेष बचे?",
    question_en: "Find the smallest number which when divided by 8, 12, and 16 leaves a remainder of 3 in each case.",
    options_hi: ["(a) 45", "(b) 51", "(c) 48", "(d) 99"],
    options_en: ["(a) 45", "(b) 51", "(c) 48", "(d) 99"],
    answer: "(b)"
  },
  {
    id: 25,
    question_hi: "मीना ने सुबह 1(1/4) लीटर दूध और शाम को 2(2/3) लीटर दूध खरीदा। उसने पूरे दिन में कुल कितना दूध खरीदा?",
    question_en: "Meena bought 1(1/4) liters of milk in the morning and 2(2/3) liters in the evening. How much total milk did she buy?",
    options_hi: ["(a) 3(3/7) लीटर", "(b) 4(1/12) लीटर", "(c) 3(11/12) लीटर", "(d) 3(5/12) लीटर"],
    options_en: ["(a) 3(3/7) Liters", "(b) 4(1/12) Liters", "(c) 3(11/12) Liters", "(d) 3(5/12) Liters"],
    answer: "(c)"
  },
  {
    id: 26,
    question_hi: "एक घनाकार (Cubical) लकड़ी के बॉक्स की एक भुजा 6 सेमी है। उसका आयतन (Volume = भुजा × भुजा × भुजा) क्या होगा?",
    question_en: "One side of a cubical wooden box is 6 cm. What will be its volume (side × side × side)?",
    options_hi: ["(a) 36 घन सेमी", "(b) 108 घन सेमी", "(c) 256 घन सेमी", "(d) 216 घन सेमी"],
    options_en: ["(a) 36 cu cm", "(b) 108 cu cm", "(c) 256 cu cm", "(d) 216 cu cm"],
    answer: "(d)"
  },
  {
    id: 27,
    question_hi: "संख्या 120 के अभाज्य गुणनखंड (Prime Factors) में '2' कितनी बार आता है?",
    question_en: "How many times does the prime factor '2' appear in the prime factorization of 120?",
    options_hi: ["(a) 3 बार", "(b) 2 बार", "(c) 4 बार", "(d) 5 बार"],
    options_en: ["(a) 3 times", "(b) 2 times", "(c) 4 times", "(d) 5 times"],
    answer: "(a)"
  },
  {
    id: 28,
    question_hi: "24, 40 और 56 का महत्तम समापवर्तक (HCF) क्या होगा?",
    question_en: "What is the Highest Common Factor (HCF) of 24, 40, and 56?",
    options_hi: ["(a) 4", "(b) 6", "(c) 12", "(d) 8"],
    options_en: ["(a) 4", "(b) 6", "(c) 12", "(d) 8"],
    answer: "(d)"
  },
  {
    id: 29,
    question_hi: "हमारे सौरमंडल के किस ग्रह के चारों ओर बर्फ और धूल के स्पष्ट वलय (Rings) पाए जाते हैं?",
    question_en: "Which planet in our solar system is famous for its bright and prominent system of rings?",
    options_hi: ["(a) मंगल (Mars)", "(b) बृहस्पति (Jupiter)", "(c) शुक्र (Venus)", "(d) शनि (Saturn)"],
    options_en: ["(a) Mars", "(b) Jupiter", "(c) Venus", "(d) Saturn"],
    answer: "(d)"
  },
  {
    id: 30,
    question_hi: "भारत की सबसे लंबी नदी कौन-सी है जो हिमालय से निकलकर बंगाल की खाड़ी में गिरती है?",
    question_en: "Which is the longest river in India that originates in the Himalayas and flows into the Bay of Bengal?",
    options_hi: ["(a) यमुना नदी", "(b) ब्रह्मपुत्र नदी", "(c) गोदावरी नदी", "(d) गंगा नदी"],
    options_en: ["(a) Yamuna River", "(b) Brahmaputra River", "(c) Godavari River", "(d) Ganga River"],
    answer: "(d)"
  },

  {
    id: 31,
    question_hi: "एक स्टेशनरी दुकानदार ने 150 कॉपियां ₹25 प्रति कॉपी की दर से खरीदीं। उसने 100 कॉपियां ₹32 प्रति कॉपी और बची हुई 50 कॉपियां ₹28 प्रति कॉपी की दर से बेचीं। उसका कुल लाभ बताइए?",
    question_en: "A shopkeeper bought 150 notebooks at ₹25 each. He sold 100 of them at ₹32 each and the remaining 50 at ₹28 each. Find his total profit.",
    options_hi: ["(a) ₹750", "(b) ₹900", "(c) ₹850", "(d) ₹650"],
    options_en: ["(a) ₹750", "(b) ₹900", "(c) ₹850", "(d) ₹650"],
    answer: "(c)"
  },
  {
    id: 32,
    question_hi: "यदि दो संख्याओं का गुणनफल 3,072 है और उनमें से एक संख्या 16 है, तो दूसरी संख्या को 8 से भाग देने पर क्या प्राप्त होगा?",
    question_en: "If the product of two numbers is 3,072 and one of the numbers is 16, what will we get if the second number is divided by 8?",
    options_hi: ["(a) 24", "(b) 192", "(c) 32", "(d) 16"],
    options_en: ["(a) 24", "(b) 192", "(c) 32", "(d) 16"],
    answer: "(a)"
  },
  {
    id: 33,
    question_hi: "एक कारखाने में प्रतिदिन 275 खिलौने बनते हैं। जनवरी और फरवरी (साधारण वर्ष / Non-leap year) के दोनों महीनों में कुल मिलाकर कितने खिलौने बनेंगे?",
    question_en: "A factory produces 275 toys per day. How many total toys will be produced in the months of January and February combined (in a non-leap year)?",
    options_hi: ["(a) 16,775", "(b) 16,500", "(c) 15,950", "(d) 16,225"],
    options_en: ["(a) 16,775", "(b) 16,500", "(c) 15,950", "(d) 16,225"],
    answer: "(d)"
  },
  {
    id: 34,
    question_hi: "15, 25 और 30 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    question_en: "What is the Least Common Multiple (LCM) of 15, 25, and 30?",
    options_hi: ["(a) 75", "(b) 90", "(c) 150", "(d) 300"],
    options_en: ["(a) 75", "(b) 90", "(c) 150", "(d) 300"],
    answer: "(c)"
  },
  {
    id: 35,
    question_hi: "भिन्न को जोड़ें और सरल करें: 7/10 + 8/15 + 1/5 = ?",
    question_en: "Add and simplify the fractions: 7/10 + 8/15 + 1/5 = ?",
    options_hi: ["(a) 16/30", "(b) 43/30", "(c) 37/30", "(d) 41/30"],
    options_en: ["(a) 16/30", "(b) 43/30", "(c) 37/30", "(d) 41/30"],
    answer: "(b)"
  },
  {
    id: 36,
    question_hi: "एक आयत का क्षेत्रफल (Area) एक ऐसे वर्ग के क्षेत्रफल के बराबर है जिसकी भुजा 12 सेमी है। यदि आयत की लंबाई 16 सेमी है, तो आयत की चौड़ाई क्या होगी?",
    question_en: "The area of a rectangle is equal to the area of a square of side 12 cm. If the length of the rectangle is 16 cm, what is its breadth?",
    options_hi: ["(a) 8 सेमी", "(b) 12 सेमी", "(c) 9 सेमी", "(d) 10 सेमी"],
    options_en: ["(a) 8 cm", "(b) 12 cm", "(c) 9 cm", "(d) 10 cm"],
    answer: "(c)"
  },
  {
    id: 37,
    question_hi: "संख्या 48 के सभी गुणनखंडों (Factors) का योगफल कितना होगा?",
    question_en: "What is the sum of all the factors of the number 48?",
    options_hi: ["(a) 96", "(b) 112", "(c) 120", "(d) 124"],
    options_en: ["(a) 96", "(b) 112", "(c) 120", "(d) 124"],
    answer: "(d)"
  },
  {
    id: 38,
    question_hi: "दो रस्सियों की लंबाई क्रमशः 64 मीटर और 80 मीटर है। दोनों रस्सियों को बराबर लंबाई के बड़े-से-बड़े टुकड़ों में काटा जाना है। प्रत्येक टुकड़े की अधिकतम लंबाई क्या होगी?",
    question_en: "Two ropes are 64 m and 80 m long. Both are to be cut into pieces of equal and maximum possible length. What will be the length of each piece?",
    options_hi: ["(a) 16 मीटर", "(b) 12 मीटर", "(c) 8 मीटर", "(d) 20 मीटर"],
    options_en: ["(a) 16 m", "(b) 12 m", "(c) 8 m", "(d) 20 m"],
    answer: "(a)"
  },
  {
    id: 39,
    question_hi: "जब जल वाष्प (Water Vapour) ठंडी होकर वापस पानी की बूंदों में बदलती है, तो विज्ञान में इस प्रक्रिया को क्या कहते हैं?",
    question_en: "When water vapour cools down and turns back into liquid water droplets, what is this process called?",
    options_hi: ["(a) वाष्पीकरण (Evaporation)", "(b) हिमीकरण (Freezing)", "(c) गलन (Melting)", "(d) संघनन (Condensation)"],
    options_en: ["(a) Evaporation", "(b) Freezing", "(c) Melting", "(d) Condensation"],
    answer: "(d)"
  },
  {
    id: 40,
    question_hi: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?",
    question_en: "Which is the largest state in India in terms of area?",
    options_hi: ["(a) उत्तर प्रदेश", "(b) मध्य प्रदेश", "(c) राजस्थान", "(d) महाराष्ट्र"],
    options_en: ["(a) Uttar Pradesh", "(b) Madhya Pradesh", "(c) Rajasthan", "(d) Maharashtra"],
    answer: "(c)"
  },

  {
    id: 41,
    question_hi: "यदि दो संख्याओं का म.स.प. (HCF) 9 है और उनका ल.स.प. (LCM) 108 है, तथा उनमें से एक संख्या 27 है, तो दूसरी संख्या क्या होगी?",
    question_en: "If the HCF of two numbers is 9 and their LCM is 108, and one of the numbers is 27, what is the other number?",
    options_hi: ["(a) 45", "(b) 36", "(c) 54", "(d) 24"],
    options_en: ["(a) 45", "(b) 36", "(c) 54", "(d) 24"],
    answer: "(b)"
  },
  {
    id: 42,
    question_hi: "एक वर्गाकार बगीचे के चारों ओर बाड़ (Fencing) लगाने का खर्च ₹15 प्रति मीटर की दर से ₹1,800 आया। उस वर्गाकार बगीचे की एक भुजा की लंबाई क्या है?",
    question_en: "The cost of fencing a square garden at ₹15 per meter is ₹1,800. What is the length of one side of that square garden?",
    options_hi: ["(a) 120 मीटर", "(b) 40 मीटर", "(c) 30 मीटर", "(d) 25 मीटर"],
    options_en: ["(a) 120 m", "(b) 40 m", "(c) 30 m", "(d) 25 m"],
    answer: "(c)"
  },
  {
    id: 43,
    question_hi: "एक पासे (Dice / Cube) की एक वर्गाकार सतह का क्षेत्रफल 16 वर्ग सेमी है। पासे की सभी 6 सतहों का कुल क्षेत्रफल कितना होगा?",
    question_en: "The area of one square face of a dice (cube) is 16 sq cm. What will be the total surface area of all 6 faces of the dice?",
    options_hi: ["(a) 64 वर्ग सेमी", "(b) 112 वर्ग सेमी", "(c) 48 वर्ग सेमी", "(d) 96 वर्ग सेमी"],
    options_en: ["(a) 64 sq cm", "(b) 112 sq cm", "(c) 48 sq cm", "(d) 96 sq cm"],
    answer: "(d)"
  },
  {
    id: 44,
    question_hi: "5/12 में कितना जोड़ा जाए कि योगफल 11/8 प्राप्त हो?",
    question_en: "What fraction should be added to 5/12 to get the sum as 11/8?",
    options_hi: ["(a) 23/24", "(b) 19/24", "(c) 17/24", "(d) 21/24"],
    options_en: ["(a) 23/24", "(b) 19/24", "(c) 17/24", "(d) 21/24"],
    answer: "(a)"
  },
  {
    id: 45,
    question_hi: "1 से 100 के बीच आने वाली सबसे बड़ी अभाज्य संख्या (Prime Number) कौन-सी है?",
    question_en: "Which is the largest Prime Number between 1 and 100?",
    options_hi: ["(a) 91", "(b) 93", "(c) 99", "(d) 97"],
    options_en: ["(a) 91", "(b) 93", "(c) 99", "(d) 97"],
    answer: "(d)"
  },
  {
    id: 46,
    question_hi: "45 × 38 के गुणनफल में से क्या घटाया जाए कि परिणाम 1,500 प्राप्त हो?",
    question_en: "What should be subtracted from the product of 45 × 38 to get 1,500?",
    options_hi: ["(a) 190", "(b) 240", "(c) 210", "(d) 180"],
    options_en: ["(a) 190", "(b) 240", "(c) 210", "(d) 180"],
    answer: "(c)"
  },
  {
    id: 47,
    question_hi: "विटामिन 'C' की कमी से मनुष्य में कौन-सा रोग होता है और यह किस फल में सबसे अधिक पाया जाता है?",
    question_en: "Which disease is caused by the deficiency of Vitamin C, and in which fruit is it found abundantly?",
    options_hi: ["(a) रतौंधी - गाजर", "(b) स्कर्वी - आंवला/नींबू", "(c) बेरी-बेरी - सेब", "(d) रिकेट्स - केला"],
    options_en: ["(a) Night Blindness - Carrot", "(b) Scurvy - Amla/Lemon", "(c) Beriberi - Apple", "(d) Rickets - Banana"],
    answer: "(b)"
  },
  {
    id: 48,
    question_hi: "भारत के राष्ट्रीय ध्वज (तिरंगे) की लंबाई और चौड़ाई का सही अनुपात क्या है?",
    question_en: "What is the correct ratio of the length to the width of the Indian National Flag (Tiranga)?",
    options_hi: ["(a) 2 : 3", "(b) 3 : 2", "(c) 4 : 3", "(d) 3 : 1"],
    options_en: ["(a) 2 : 3", "(b) 3 : 2", "(c) 4 : 3", "(d) 3 : 1"],
    answer: "(b)"
  },
  {
    id: 49,
    question_hi: "पृथ्वी अपने अक्ष (Axis) पर एक पूरा चक्कर लगाने में लगभग कितना समय लेती है, जिससे दिन और रात होते हैं?",
    question_en: "How much time does the Earth take to complete one rotation on its axis, which causes day and night?",
    options_hi: ["(a) 365 दिन", "(b) 24 घंटे", "(c) 30 दिन", "(d) 12 घंटे"],
    options_en: ["(a) 365 Days", "(b) 24 Hours", "(c) 30 Days", "(d) 12 Hours"],
    answer: "(b)"
  },
  {
    id: 50,
    question_hi: "एक दर्जन पेन का मूल्य ₹180 है। यदि एक दुकानदार ने 8 पेन ₹140 में बेच दिए, तो उसे इन 8 पेनों पर कितने रुपये का लाभ हुआ?",
    question_en: "The cost of one dozen pens is ₹180. If a shopkeeper sold 8 pens for ₹140, how much profit did he make on these 8 pens?",
    options_hi: ["(a) ₹15", "(b) ₹20", "(c) ₹25", "(d) ₹30"],
    options_en: ["(a) ₹15", "(b) ₹20", "(c) ₹25", "(d) ₹30"],
    answer: "(b)"
  }
];

if (typeof window !== 'undefined') {
  window.questions = questions;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
