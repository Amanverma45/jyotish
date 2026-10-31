import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Calendar, Clock, BookOpen, Phone, CheckCircle2, ChevronRight, Sun, Flame, Award, Eye, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

import harsiddhiMata from '../assets/harsiddhi_mata_god.jpg';
import pujaKaalsarp from '../assets/puja_kaalsarp.jpg';
import pujaRudrabhishek from '../assets/puja_rudrabhishek.jpg';
import pujaMangal from '../assets/puja_mangal.jpg';
import pujaPitru from '../assets/puja_pitru.jpg';
import pujaNavgrah from '../assets/puja_navgrah.jpg';
import pujaKumbh from '../assets/puja_kumbh.jpg';
import pujaVastu from '../assets/puja_vastu.jpg';
import sharmaji from '../assets/sharmaji.png';

const imageMap = {
  harsiddhi: harsiddhiMata,
  kaalsarp: pujaKaalsarp,
  rudrabhishek: pujaRudrabhishek,
  mangal: pujaMangal,
  pitru: pujaPitru,
  navgrah: pujaNavgrah,
  kumbh: pujaKumbh,
  vastu: pujaVastu,
  sharmaji: sharmaji,
};

const diwaliData = {
  hi: {
    badge: "वैदिक पंचांग एवं पावन दीपोत्सव",
    heading: "दीपावली महापर्व, शुभ मुहूर्त एवं महालक्ष्मी पूजन",
    subHeading: "उज्जैन अवंतिका तीर्थ पंचांग अनुसार दीपावली पंचपर्व, प्रदोष काल व स्थिर वृषभ लग्न महालक्ष्मी-गणेश पूजन",
    activeFestivalTitle: "🪔 वर्तमान मुख्य महापर्व: दीपावली 2026",
    bookFestivalPuja: "महालक्ष्मी पूजन व अनुष्ठान बुक करें",
    featured: {
      status: "दीपावली महालक्ष्मी पूजन बुकिंग चालू",
      shlokaPrefix: "॥ श्री महालक्ष्म्यै नमः ॥",
      shloka: "नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते। शंखचक्रगदाहस्ते महालक्ष्मि नमोऽस्तु ते॥",
      mantraTitle: "महालक्ष्मी महामंत्र",
      mantra: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः ॥",
      mantraDesc: "दीपावली की पावन रात्रि में इस महामंत्र का कमलगट्टे की माला से जप करने से दारिद्र्य नाश एवं अपार धन-धान्य व ऐश्वर्य की प्राप्ति होती है।",
      title: "दीपावली महापर्व 2026 (श्री महालक्ष्मी-गणेश पूजन एवं पंचपर्व)",
      date: "06 नवंबर 2026 (धनतेरस) से 11 नवंबर 2026 (भाई दूज)",
      panchangInfo: "कार्तिक कृष्ण पक्ष अमावस्या (प्रदोष काल एवं स्थिर वृषभ लग्न)",
      tithiStart: "08 नवंबर 2026, दोपहर 12:45 बजे से",
      tithiEnd: "09 नवंबर 2026, दोपहर 01:15 बजे तक",
      muhuratTitle: "महालक्ष्मी पूजन का सर्वश्रेष्ठ शुभ मुहूर्त (उज्जैन पंचांग):",
      muhurat: "शाम 06:09 बजे से रात 08:07 बजे तक (प्रदोष काल व स्थिर वृषभ लग्न)",
      muhuratNote: "(प्रदोष काल: 05:45 PM से 08:19 PM | निशीथ काल महानिशा मुहूर्त: 11:39 PM से 12:31 AM - स्थिर लक्ष्मी व व्यापार वृद्धि हेतु सर्वश्रेष्ठ)",
      timeline: [
        { label: "🪔 धनतेरस (धनत्रयोदशी / कुबेर पूजन व धन्वंतरि जयंती):", date: "06 नवंबर 2026 (शुक्रवार)" },
        { label: "✨ नरक चतुर्दशी / रूप चौदस (छोटी दिवाली - यम दीपदान):", date: "07 नवंबर 2026 (शनिवार)" },
        { label: "👑 दीपावली (मुख्य महालक्ष्मी, गणेश व सरस्वती पूजन):", date: "08 नवंबर 2026 (रविवार)" },
        { label: "🌿 गोवर्धन पूजा एवं अन्नकूट महोत्सव:", date: "09 नवंबर 2026 (सोमवार)" },
        { label: "🌸 भाई दूज / यम द्वितीया (चित्रगुप्त पूजन):", date: "11 नवंबर 2026 (बुधवार)" },
      ],
      desc: "दीपावली सनातन धर्म का सर्वाधिक पावन व ऐश्वर्य प्रदाता महापर्व है। कार्तिक अमावस्या की इस पावन निशा पर माता महालक्ष्मी, रिद्धि-सिद्धि दाता गणेश जी एवं धन के अधिपति कुबेर देव का विधि-विधान से षोडशोपचार पूजन किया जाता है। अवंतिका नगरी उज्जैन महाकाल धाम के विद्वान ब्राह्मण पं. हरिओम शर्मा जी के सानिध्य में महालक्ष्मी अनुष्ठान, श्रीसूक्त पाठ, कनकधारा स्तोत्र एवं व्यापारिक बही-खाता पूजन कराने से व्यापार वृद्धि, ऋणमुक्ति एवं स्थिर लक्ष्मी की प्राप्ति होती है।",
      samagriTitle: "दीपावली महालक्ष्मी-गणेश पूजन आवश्यक सामग्री",
      samagri: [
        "श्री महालक्ष्मी एवं श्री गणेश जी की नूतन प्रतिमा / चित्र",
        "कमल का पुष्प, गुलाब एवं ताजे सुगंधित फूलों की माला",
        "कमलगट्टा (कमल बीज) एवं 11 पीली कौड़ियां (धनवर्धक)",
        "गोमती चक्र (5 या 11) एवं एकाक्षी नारियल",
        "गाय का शुद्ध घी, तिल का तेल एवं मिट्टी के दीपक (21 या 51)",
        "रोली, कुमकुम, अक्षत (अखंडित चावल), अबीर, गुलाल, चंदन",
        "कलश, नारियल, आम/अशोक के पल्लव व दूर्वा घास",
        "पंचामृत (गाय का दूध, दही, घी, शहद, गंगाजल)",
        "खील (धान का लावा), बताशे, ऋतुफल, मिष्ठान्न व मोदक",
        "चांदी का सिक्का / कुबेर यंत्र / सिद्ध श्रीयंत्र",
        "कलावा (मौली), जनेऊ एवं लाल-पीला वस्त्र (चौकी हेतु)",
        "शुद्ध भीमसेनी कपूर, धूपबत्ती, अगरबत्ती व गुलाब इत्र"
      ],
      vidhiTitle: "दीपावली महालक्ष्मी पूजन की शास्त्रोक्त विधि",
      vidhiStepsCount: "7 चरण",
      vidhiSteps: [
        "पवित्रिकरण एवं संकल्प: आचमन कर शरीर व पूजा सामग्री पर गंगाजल छिड़कें। हाथ में जल, अक्षत व पुष्प लेकर विधिवत संकल्प लें।",
        "चौकी एवं कलश स्थापना: ईशान कोण में लाल वस्त्र बिछाकर नवग्रह व अष्टदल बनाएं, उस पर कलश स्थापित कर आम के पत्ते व नारियल रखें।",
        "श्री गणेश जी का प्रथम पूजन: 'ॐ गं गणपतये नमः' से विघ्नहर्ता गणेश जी का ध्यान, आह्वान कर सिंदूर, दूर्वा, मोदक व जनेऊ अर्पित करें।",
        "श्री महालक्ष्मी षोडशोपचार पूजन: माँ लक्ष्मी का आह्वान कर पंचामृत व गंगाजल स्नान कराएं। वस्त्र, कमल पुष्प, इत्र, कमलगट्टा व कौड़ियां अर्पित करें।",
        "श्री कुबेर, बहीखाता व तिजोरी पूजन: धनाध्यक्ष कुबेर देव, व्यापारिक बहीखाते, कलम, तिजोरी व आभूषणों का कुमकुम व अक्षत से पूजन करें।",
        "अखंड दीप प्रज्वलन व महाआरती: चौमुखी शुद्ध घी का दीपक प्रज्वलित कर घर के सभी हिस्सों में दीप रखें और कपूर से माँ लक्ष्मी जी की महाआरती करें।",
        "कनकधारा/श्रीसूक्त पाठ व क्षमा प्रार्थना: श्रीसूक्त का पाठ कर पुष्पांजलि दें, अनजाने भूलों की क्षमा मांगें एवं खील-बताशे का प्रसाद सपरिवार ग्रहण करें।"
      ],
      mahatmyaTitle: "दीपावली एवं महालक्ष्मी पूजन का शास्त्रोक्त महात्म्य",
      mahatmya: "स्कंद पुराण व भविष्य पुराण के अनुसार दीपावली की पावन निशा को 'महारात्रि' व 'सुखरात्रि' कहा गया है। इस दिन स्थिर लग्न (वृषभ लग्न) व प्रदोष काल में विधिपूर्वक किया गया महालक्ष्मी-गणेश पूजन घर व व्यापार स्थल में चिरस्थायी समृद्धि और सकारात्मक ऊर्जा का संचार करता है। महाकाल तीर्थ उज्जैन के पंचांग अनुसार किए गए अनुष्ठान से ग्रह-दोष व दरिद्रता का समूल नाश होता है।",
      jaykaraTitle: "॥ शुभ दीपावली ! माँ महालक्ष्मी आपके घर में रिद्धि-सिद्धि व सुख-समृद्धि भरें ॥",
      jaykaraSub: "भगवान श्री गणेश एवं माता महालक्ष्मी आप सभी के जीवन से अंधकार दूर कर प्रकाश, शांति और आरोग्य प्रदान करें।",
      jaykaraShloka: "॥ दीपज्योतिः परब्रह्म दीपज्योतिर्जनार्दनः। दीपो हरतु मे पापं दीपज्योतिर्नमोऽस्तु ते॥",
      whatsappMsg: "जय श्री महाकाल! पं. हरिओम शर्मा जी से दीपावली 2026 महालक्ष्मी-गणेश पूजन, श्रीसूक्त अनुष्ठान एवं शुभ मुहूर्त परामर्श हेतु संपर्क करना चाहता/चाहती हूँ।",
      panditGuidanceBadge: "उज्जैन महाकाल धाम तीर्थ अनुष्ठान मार्गदर्शन",
      panditHeading: "दीपावली पंचपर्व एवं महालक्ष्मी विशेष अनुष्ठान हेतु संपर्क करें",
      panditSub: "उज्जैन महाकाल धाम के विद्वान पुरोहित से शुभ प्रदोष काल व स्थिर लग्न में विधिवत पूजन कराने हेतु सीधे बात करें。"
    },
    upcomingSectionTitle: "वर्ष के अन्य प्रमुख आगामी व्रत व त्यौहार",
    upcomingSectionSub: "उज्जैन अवंतिका पंचांग के अनुसार आगामी पर्व, तिथि व पूजा मुहूर्त",
    panchangBadge: "उज्जैन पंचांग",
    bookPujaBtn: "पूजा बुक करें",
    upcomingList: [
      {
        id: "devutthana_ekadashi",
        title: "देवउठनी एकादशी एवं तुलसी विवाह महोत्सव",
        date: "20 नवंबर 2026 (शुक्रवार)",
        tithi: "कार्तिक शुक्ल एकादशी",
        muhurat: "सूर्योदय से रात्रि पर्यंत (शुभ विवाह व मांगलिक कार्य आरंभ)",
        imageKey: "vastu",
        desc: "चातुर्मास की समाप्ति पर भगवान श्रीहरि विष्णु योगनिद्रा से जागते हैं। इस पावन दिवस पर तुलसी-शालिग्राम विवाह एवं सभी शुभ मांगलिक कार्य प्रारंभ होते हैं।"
      },
      {
        id: "kartik_purnima",
        title: "कार्तिक पूर्णिमा, त्रिपुरारी पूर्णिमा एवं देव दीपावली",
        date: "24 नवंबर 2026 (मंगलवार)",
        tithi: "कार्तिक शुक्ल पूर्णिमा",
        muhurat: "प्रदोष काल दीपदान: सायं 05:25 से 07:55 बजे तक",
        imageKey: "rudrabhishek",
        desc: "देवताओं की दीपावली। इस दिन उज्जैन में क्षिप्रा नदी के तटों पर महादीपदान एवं महाकाल ज्योतिर्लिंग धाम में विशेष रुद्राभिषेक का अनंत फल प्राप्त होता है।"
      },
      {
        id: "makar_sankranti",
        title: "मकर संक्रांति (सूर्य देव का उत्तरायण महापर्व)",
        date: "14 जनवरी 2027 (गुरुवार)",
        tithi: "पौष शुक्ल पक्ष / मकर संक्रमण",
        muhurat: "महापुण्य काल: प्रातः 07:15 से दोपहर 12:30 बजे तक",
        imageKey: "navgrah",
        desc: "सूर्य का मकर राशि में प्रवेश। उज्जैन में पवित्र स्नान, नवग्रह शांति, सूर्य अर्घ्य एवं तिल-गुड़ दान से यश, तेज और आरोग्यता की प्राप्ति होती है।"
      },
      {
        id: "mahashivratri",
        title: "महाशिवरात्रि (उज्जैन महाकाल ज्योतिर्लिंग महामहोत्सव)",
        date: "06 मार्च 2027 (शनिवार)",
        tithi: "फाल्गुन कृष्ण चतुर्दशी",
        muhurat: "निशीथ काल व चार प्रहर महारुद्राभिषेक",
        imageKey: "rudrabhishek",
        desc: "उज्जैन महाकाल धाम का सर्वोपरि महापर्व। भस्म आरती, महारुद्राभिषेक एवं शिव-पार्वती विवाहोत्सव में विशेष पूजन से समस्त संकट दूर होते हैं।"
      },
      {
        id: "kaalsarp_fest",
        title: "कालसर्प दोष एवं राहु-केतु शांति महापूजन",
        date: "प्रत्येक सर्वपितृ, सोमवती व मौनी अमावस्या",
        tithi: "अमावस्या विशेष तिथि",
        muhurat: "प्रातः 06:00 से दोपहर 12:00 बजे तक",
        imageKey: "kaalsarp",
        desc: "उज्जैन सिद्धवट एवं महाकाल क्षेत्र में कालसर्प दोष, राहु-केतु पीड़ा व नाग दोष की शास्त्रोक्त वैदिक शांति पूजा।"
      },
      {
        id: "mangal_fest",
        title: "मंगलनाथ भात पूजा एवं अंगारक योग शांति",
        date: "प्रत्येक मंगलवार एवं भौमवती अमावस्या",
        tithi: "मंगलवार विशेष",
        muhurat: "प्रातः 06:00 से दोपहर 01:00 बजे तक",
        imageKey: "mangal",
        desc: "मंगल ग्रह की उत्पत्ति स्थली उज्जैन स्थित विश्व प्रसिद्ध मंगलनाथ मंदिर में मांगलिक दोष, विवाह विलंब व भूमि लाभ हेतु भात पूजा।"
      }
    ]
  },
  en: {
    badge: "Vedic Panchang & Sacred Festival of Lights",
    heading: "Deepawali Mahaparv, Shubh Muhurat & Mahalakshmi Puja",
    subHeading: "Deepawali 5-day festivities, Pradosh Kaal & Sthir Vrishabha Lagna Mahalakshmi-Ganesh Puja as per Ujjain Mahakal Dham",
    activeFestivalTitle: "🪔 Current Featured Festival: Deepawali 2026",
    bookFestivalPuja: "Book Mahalakshmi Puja & Anushthan",
    featured: {
      status: "Diwali Mahalakshmi Puja Booking Open",
      shlokaPrefix: "|| Shri Mahalakshmyai Namah ||",
      shloka: "Namastestu Mahamaye Sripithe Surapujite | Shankha Chakra Gada Haste Mahalakshmi Namostute ||",
      mantraTitle: "Mahalakshmi Mahamantra",
      mantra: "Om Shreem Hreem Shreem Kamale Kamalalaye Praseed Praseed Shreem Hreem Shreem Om Mahalakshmyai Namah ||",
      mantraDesc: "Chanting this supreme wealth mantra with Kamal Gatta Mala on Diwali night invokes abundant prosperity, fortune, and divine grace.",
      title: "Deepawali Mahaparv 2026 (Shri Mahalakshmi-Ganesh Puja & Panchaparva)",
      date: "06 November 2026 (Dhanteras) to 11 November 2026 (Bhai Dooj)",
      panchangInfo: "Kartik Krishna Paksha Amavasya (Pradosh Kaal & Sthir Vrishabha Lagna)",
      tithiStart: "08 November 2026, 12:45 PM onwards",
      tithiEnd: "09 November 2026, up to 01:15 PM",
      muhuratTitle: "Mahalakshmi Puja Auspicious Muhurat (Ujjain Panchang):",
      muhurat: "06:09 PM to 08:07 PM (Pradosh Kaal & Sthir Vrishabha Lagna)",
      muhuratNote: "(Pradosh Kaal: 05:45 PM to 08:19 PM | Nishita Kaal Mahanisha Muhurat: 11:39 PM to 12:31 AM - Best for stable wealth)",
      timeline: [
        { label: "🪔 Dhanteras (Dhan Trayodashi / Kuber Puja & Dhanvantari Jayanti):", date: "06 November 2026 (Friday)" },
        { label: "✨ Naraka Chaturdashi / Roop Chaudas (Choti Diwali):", date: "07 November 2026 (Saturday)" },
        { label: "👑 Deepawali (Main Mahalakshmi, Ganesh & Saraswati Puja):", date: "08 November 2026 (Sunday)" },
        { label: "🌿 Govardhan Puja & Annakoot Mahotsav:", date: "09 November 2026 (Monday)" },
        { label: "🌸 Bhai Dooj / Yama Dwitiya (Chitragupta Puja):", date: "11 November 2026 (Wednesday)" },
      ],
      desc: "Deepawali is the foremost Sanatana festival celebrating the victory of light over darkness and divine wealth over poverty. On Kartik Amavasya, Goddess Mahalakshmi, Lord Ganesha, and Kuber Dev are worshipped with full Shodashopachar rituals. Under the Vedic guidance of Pt. Hariom Sharma from Ujjain Mahakal Dham, conducting Shri Suktam Anushthan, Kanakdhara path, and account-books pujan ensures continuous financial growth and peace.",
      samagriTitle: "Diwali Mahalakshmi-Ganesh Puja Essential Samagri",
      samagri: [
        "Sacred Murti / Image of Shri Mahalakshmi and Shri Ganesh",
        "Lotus flowers, fresh red roses and fragrant garlands",
        "Kamal Gatta (Lotus seeds) & 11 Yellow Cowries (Kaudiyan)",
        "Gomati Chakra (5 or 11) & Ekakshi Nariyal",
        "Pure Cow Ghee, Sesame Oil & Earthen Diyas (21 or 51)",
        "Roli, Kumkum, Akshat (Unbroken rice), Abeer, Gulal, Chandan",
        "Kalash, Coconut, Mango/Ashoka leaves & Durva grass",
        "Panchamrit (Cow Milk, Curd, Ghee, Honey, Ganga Jal)",
        "Kheel (Puffed paddy), Batashe, Sweets, Fruits & Modak",
        "Silver Coin / Kuber Yantra / Siddh Shri Yantra",
        "Mouli (Kalawa), Janeu & Red/Yellow Silk Cloth",
        "Pure Bhimseni Camphor, Dhoop, Incense & Rose Attar"
      ],
      vidhiTitle: "Step-by-Step Vedic Mahalakshmi Puja Vidhi",
      vidhiStepsCount: "7 Steps",
      vidhiSteps: [
        "Purification & Sankalp: Sprinkling Ganga Jal with Durva, take water, flowers and rice in hand for the holy resolve (Sankalp).",
        "Kalash Sthapana: Spread red cloth on a wooden chauki in the northeast (Ishaan) corner, make Ashtadal rice design, and place the holy Kalash.",
        "Lord Ganesha Worship: Invoke Lord Ganesha first, offer Janeu, Durva, Sindoor, and Modak for unobstructed auspiciousness.",
        "Shri Mahalakshmi Shodashopachar: Invoke Goddess Lakshmi with lotus flowers, red cloth, chandan, panchamrit snan, and jewellery/coins.",
        "Shri Kuber & Ledger (Bahi-Khata) Puja: Worship Lord Kuber along with trade books, pens, and cash lockers for steady financial growth.",
        "Akhand Deep Daan & Maha Aarti: Light the four-wick master diya (Choumukhi Diya), place diyas across the premises, and perform Lakshmi Aarti.",
        "Shri Suktam Path & Prasad Distribution: Recite Kanakdhara Stotram / Shri Suktam, seek forgiveness, and share Kheel-Batashe prasad."
      ],
      mahatmyaTitle: "Spiritual Glory & Significance of Deepawali",
      mahatmya: "According to Skanda and Bhavishya Puranas, the auspicious night of Diwali is revered as 'Mahanisha'—a sacred period when Goddess Lakshmi walks the earth to bless devotees. Worshipping during the Sthir Vrishabha Lagna ensures that prosperity stays permanent, neutralizing malefic planetary influences and negative energies.",
      jaykaraTitle: "|| Shubh Deepawali ! May Goddess Mahalakshmi Bless You With Endless Prosperity ||",
      jaykaraSub: "May Lord Ganesha and Mother Mahalakshmi illuminate your life with joy, wisdom, sound health and divine peace.",
      jaykaraShloka: "|| Deepajyotih Parabrahma Deepajyotir Janardanah | Deepo Haratu Me Papam Deepajyotir Namostute ||",
      whatsappMsg: "Jai Shree Mahakal! I want to consult Pt. Hariom Sharma Ji for Diwali 2026 Mahalakshmi Puja & Auspicious Muhurat rituals.",
      panditGuidanceBadge: "Ujjain Mahakal Dham Ritual Guidance",
      panditHeading: "Consult Pt. Hariom Sharma for Deepawali Mahalakshmi Anushthan",
      panditSub: "Directly speak with Pandit Ji to perform authentic Vedic Lakshmi Pujan during auspicious Pradosh Kaal and Sthir Lagna."
    },
    upcomingSectionTitle: "Other Upcoming Sacred Vedic Festivals",
    upcomingSectionSub: "Upcoming festival dates, Tithi and special Puja timings as per Ujjain Panchang",
    panchangBadge: "Ujjain Panchang",
    bookPujaBtn: "Book Puja",
    upcomingList: [
      {
        id: "devutthana_ekadashi",
        title: "Devutthana Ekadashi & Tulsi Vivah Mahotsav",
        date: "20 November 2026 (Friday)",
        tithi: "Kartik Shukla Ekadashi",
        muhurat: "Sunrise to Night (Auspicious Wedding Season Begins)",
        imageKey: "vastu",
        desc: "Lord Vishnu awakens from Yog Nidra ending Chaturmas. Auspicious marriage rituals and ceremonies commence with Tulsi-Shaligram Vivah."
      },
      {
        id: "kartik_purnima",
        title: "Kartik Purnima, Tripurari Purnima & Dev Deepawali",
        date: "24 November 2026 (Tuesday)",
        tithi: "Kartik Shukla Purnima",
        muhurat: "Pradosh Kaal Deep Daan: 05:25 PM to 07:55 PM",
        imageKey: "rudrabhishek",
        desc: "The Diwali of Gods. Grand lamp offerings on the holy Shipra Ghats and special Rudrabhishek at Mahakal Dham bestow divine blessings."
      },
      {
        id: "makar_sankranti",
        title: "Makar Sankranti (Surya Dev Uttarayan Mahaparv)",
        date: "14 January 2027 (Thursday)",
        tithi: "Paush Shukla / Makar Sankraman",
        muhurat: "Punya Kaal: 07:15 AM to 12:30 PM",
        imageKey: "navgrah",
        desc: "Sun enters Capricorn. Holy bathing, Navgrah Shanti, Surya Arghya, and charity of sesame & jaggery in Ujjain grant vitality and success."
      },
      {
        id: "mahashivratri",
        title: "Mahashivratri (Ujjain Mahakal Jyotirlinga Mahotsav)",
        date: "06 March 2027 (Saturday)",
        tithi: "Phalguna Krishna Chaturdashi",
        muhurat: "Nishita Kaal & 4 Prahar Maha Rudrabhishek",
        imageKey: "rudrabhishek",
        desc: "The supreme celebration at Mahakal Dham Ujjain. Bhasma Aarti, Maha Rudrabhishek, and Shiva-Parvati Vivah eliminate all life obstacles."
      },
      {
        id: "kaalsarp_fest",
        title: "Kaalsarp Dosh & Rahu-Ketu Shanti Puja",
        date: "Every Sarvapitru, Somvati & Mauni Amavasya",
        tithi: "Special Amavasya Tithi",
        muhurat: "06:00 AM to 12:00 PM",
        imageKey: "kaalsarp",
        desc: "Vedic remedial rituals at Siddhwat and Mahakal Kshetra in Ujjain to relieve Kaalsarp, Rahu-Ketu, and Sarpa Dosh."
      },
      {
        id: "mangal_fest",
        title: "Mangalnath Bhaat Puja & Angarak Yog Shanti",
        date: "Every Tuesday & Bhaumvati Amavasya",
        tithi: "Tuesday Special",
        muhurat: "06:00 AM to 01:00 PM",
        imageKey: "mangal",
        desc: "World-renowned Bhaat Puja at Mangalnath Temple, the birthplace of Mars, for Manglik Dosh relief, marriage harmony, and debt clearance."
      }
    ]
  }
};

const Festivals = () => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';
  const fest = diwaliData[isHindi ? 'hi' : 'en'];
  const feat = fest.featured;

  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <div className="bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-amber-50/60 text-slate-800 min-h-screen py-10 lg:py-16 relative overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-amber-300/25 via-orange-200/15 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 lg:space-y-14">

        {/* TOP HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
            <Flame className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>{fest.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif bg-gradient-to-r from-red-900 via-amber-800 to-red-800 bg-clip-text text-transparent leading-tight">
            {fest.heading}
          </h1>

          <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
            {fest.subHeading}
          </p>
        </div>

        {/* DEEPAWALI 2026 FEATURED HERO CARD (WARM VEDIC LIGHT THEME) */}
        <div className="relative rounded-3xl bg-white border-2 border-amber-300/90 p-5 sm:p-8 lg:p-10 shadow-xl shadow-amber-500/10 overflow-hidden">

          {/* Top Status Tag */}
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-red-700 via-amber-700 to-red-800 text-white font-extrabold text-xs rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5 z-20">
            <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
            <span>{feat.status}</span>
          </div>

          {/* Shloka Top Banner */}
          <div className="text-center mb-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 space-y-1">
            <span className="text-red-900 font-extrabold text-sm sm:text-base font-serif block tracking-wider">
              {feat.shlokaPrefix}
            </span>
            <p className="text-amber-950 font-semibold font-serif italic text-xs sm:text-sm">
              "{feat.shloka}"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Box: Sacred Darshan Image & Modal Trigger */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="relative rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl group cursor-pointer bg-slate-900"
                onClick={() => setShowPosterModal(true)}
              >
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <img
                    src={harsiddhiMata}
                    alt={isHindi ? "माँ हरसिद्धि शक्तिपीठ उज्जैन - महालक्ष्मी स्वरूप दर्शन" : "Maa Harsiddhi Shaktipeeth Ujjain - Mahalakshmi Swaroop"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-amber-900/20"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-amber-500/95 backdrop-blur-md text-slate-950 text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-md border border-amber-300">
                    <Flame className="w-3.5 h-3.5 text-red-950 animate-bounce" />
                    <span>{isHindi ? 'शुभ दीपोत्सव 2026' : 'Shubh Deepawali 2026'}</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 text-[11px] font-bold border border-amber-400/40">
                    {isHindi ? 'उज्जैन शक्तिपीठ' : 'Ujjain Shaktipeeth'}
                  </div>

                  {/* Bottom Bar */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl border border-amber-300 text-xs font-bold text-slate-900 flex items-center justify-between shadow-lg">
                    <span className="flex items-center gap-1.5 text-red-900 font-extrabold">
                      <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>{isHindi ? '06 - 11 नवंबर 2026' : '06 - 11 Nov 2026'}</span>
                    </span>
                    <span className="flex items-center gap-1 text-amber-900 font-bold hover:underline">
                      <Eye className="w-4 h-4 text-red-700" />
                      <span>{isHindi ? 'पंचांग पत्रक देखें' : 'View Panchang'}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Mantra Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-300 text-center space-y-1.5 shadow-xs">
                <span className="text-xs text-amber-900 font-bold uppercase tracking-wider block flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  {feat.mantraTitle}
                </span>
                <p className="text-base sm:text-lg font-extrabold text-red-950 font-serif leading-snug">
                  {feat.mantra}
                </p>
                <p className="text-[11px] text-amber-950/90 font-medium">
                  {feat.mantraDesc}
                </p>
              </div>
            </div>

            {/* Right Box: Detailed Timings & Schedule */}
            <div className="lg:col-span-7 space-y-5">

              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
                  {fest.activeFestivalTitle}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif text-slate-900 leading-snug">
                  {feat.title}
                </h2>
                <p className="text-red-800 text-xs sm:text-sm font-bold mt-1">
                  📅 {feat.date}
                </p>
              </div>

              {/* Tithi Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                    {isHindi ? 'अमावस्या तिथि प्रारंभ' : 'Amavasya Tithi Starts'}
                  </span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {feat.tithiStart}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1">
                  <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                    {isHindi ? 'अमावस्या तिथि समाप्त' : 'Amavasya Tithi Ends'}
                  </span>
                  <p className="text-sm font-extrabold text-slate-900">
                    {feat.tithiEnd}
                  </p>
                </div>
              </div>

              {/* Highlighted Shubh Muhurat Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 via-amber-50 to-red-50 border-2 border-amber-400 text-red-950 space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-red-900 text-sm">
                  <Clock className="w-5 h-5 text-red-700 shrink-0 animate-pulse" />
                  <span>{feat.muhuratTitle}</span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-red-900 font-serif pl-7">
                  {feat.muhurat}
                </p>
                <p className="text-[11px] text-slate-700 pl-7 font-medium">
                  {feat.muhuratNote}
                </p>
              </div>

              {/* 5-Day Panchaparva Timeline */}
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2 text-xs">
                <span className="font-extrabold text-amber-950 uppercase tracking-wider block border-b border-amber-200 pb-1.5 text-[11px]">
                  {isHindi ? 'दीपावली पंचपर्व तिथियां (उज्जैन पंचांग):' : 'Diwali 5-Day Festival Timeline (Ujjain Panchang):'}
                </span>
                {feat.timeline.map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center ${idx !== feat.timeline.length - 1 ? 'border-b border-amber-200/70 pb-1.5' : 'pt-0.5'}`}>
                    <span className="font-bold text-slate-800">{item.label}</span>
                    <span className="font-extrabold text-red-900 shrink-0 ml-2">{item.date}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {feat.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(feat.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 active:scale-98 transition-transform"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>{fest.bookFestivalPuja}</span>
                </a>

                <a
                  href="tel:+919826525736"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-800 via-amber-800 to-red-900 hover:from-red-700 hover:to-amber-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>+91-9826525736</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* PUJA SAMAGRI & MAHALAKSHMI PUJAN VIDHI SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Puja Samagri List */}
          <div className="lg:col-span-5 bg-white border border-amber-200/90 rounded-3xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-100 pb-3">
              <Sparkles className="w-5 h-5 text-red-700 shrink-0" />
              <h3 className="text-xl font-bold font-serif text-slate-900">
                {feat.samagriTitle}
              </h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {feat.samagri.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Lakshmi Puja Vidhi (7 Steps) */}
          <div className="lg:col-span-7 bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-md space-y-5">
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-700 shrink-0" />
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {feat.vidhiTitle}
                </h3>
              </div>
              <span className="text-xs font-bold text-red-900 bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-300">
                {feat.vidhiStepsCount}
              </span>
            </div>

            <div className="space-y-3">
              {feat.vidhiSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-slate-800 font-medium leading-relaxed hover:border-amber-400 transition-colors">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-800 text-white font-extrabold text-xs shrink-0 shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="pt-0.5">{step}</p>
                </div>
              ))}
            </div>

            {/* Mahalakshmi Mahatmya Quote */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-orange-100/80 border border-amber-300 space-y-1">
              <span className="text-xs font-bold text-red-900 uppercase tracking-wider block">
                {feat.mahatmyaTitle}
              </span>
              <p className="text-xs text-slate-800 font-medium leading-relaxed">
                {feat.mahatmya}
              </p>
            </div>
          </div>

        </div>

        {/* JAYKARA BANNER */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-red-900 via-amber-800 to-red-900 border-2 border-amber-400 text-white shadow-xl text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-amber-200">
            {feat.jaykaraTitle}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100 font-serif">
            {feat.jaykaraSub}
          </p>
          <span className="text-xs font-bold text-amber-300 block pt-1">
            {feat.jaykaraShloka}
          </span>
        </div>

        {/* UPCOMING FESTIVALS GRID SECTION */}
        <div className="space-y-6 pt-4">

          <div className="flex items-center justify-between border-b border-amber-200 pb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                {fest.upcomingSectionTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {fest.upcomingSectionSub}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 border border-amber-300 text-xs font-bold text-amber-900">
              <Sun className="w-4 h-4 text-red-700" />
              <span>{fest.panchangBadge}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fest.upcomingList.map((item) => {
              const cardImg = imageMap[item.imageKey] || pujaRudrabhishek;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-amber-200/90 hover:border-amber-400 rounded-2xl p-5 shadow-md hover:shadow-xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <div className="relative h-44 rounded-xl overflow-hidden border border-amber-200">
                      <img
                        src={cardImg}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                      {/* Date Badge */}
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-white/95 border border-amber-300 text-[11px] font-bold text-red-900 flex items-center gap-1 shadow-xs">
                        <Calendar className="w-3 h-3 text-amber-700" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Title & Details */}
                    <div>
                      <h4 className="text-lg font-bold font-serif text-slate-900 group-hover:text-red-800 transition-colors leading-snug">
                        {item.title}
                      </h4>

                      <div className="mt-2 flex items-center gap-2 text-xs text-red-800 font-bold">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{item.muhurat}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-amber-100 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-700">
                      {item.tithi}
                    </span>

                    <a
                      href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(
                        isHindi
                          ? `जय श्री महाकाल! पं. हरिओम शर्मा जी से ${item.title} पर पूजा परामर्श हेतु संपर्क।`
                          : `Jai Shree Mahakal! Consulting Pt. Hariom Sharma Ji for ${item.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-xs"
                    >
                      <span>{fest.bookPujaBtn}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* PANDITJI FESTIVAL CONSULTATION BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-900 via-amber-800 to-red-900 border-2 border-amber-400 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <img
              src={sharmaji}
              alt="Pt. Hariom Sharma"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 object-cover shadow-md shrink-0 hidden sm:block"
            />
            <div className="space-y-1">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider block flex items-center gap-1.5 justify-center md:justify-start">
                <Award className="w-4 h-4 text-amber-300" />
                {feat.panditGuidanceBadge}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {feat.panditHeading}
              </h4>
              <p className="text-xs sm:text-sm text-amber-100/90 font-medium">
                {feat.panditSub}
              </p>
            </div>
          </div>

          <a
            href="tel:+919826525736"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl flex items-center gap-2 shrink-0 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>+91-9826525736</span>
          </a>
        </div>

      </div>

      {/* FULL POSTER & PANCHANG PREVIEW MODAL */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setShowPosterModal(false)}>
          <div className="relative max-w-3xl w-full max-h-[92vh] overflow-y-auto bg-white border-2 border-amber-400 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5" onClick={(e) => e.stopPropagation()}>

            <div className="flex justify-between items-center border-b border-amber-200 pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-600 animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                  {isHindi ? 'दीपावली 2026 पंचांग एवं महालक्ष्मी पूजन मुहूर्त' : 'Diwali 2026 Panchang & Puja Muhurat'}
                </h3>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="px-3 py-1 bg-red-800 text-white text-xs font-bold rounded-lg hover:bg-red-900 flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                <span>{isHindi ? 'बंद करें' : 'Close'}</span>
              </button>
            </div>

            {/* Sacred Image Card */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-amber-300 shadow-md">
              <img
                src={harsiddhiMata}
                alt="माँ हरसिद्धि शक्तिपीठ दर्शन"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-amber-300 font-extrabold text-xs uppercase tracking-wider block">
                  {isHindi ? '॥ ॐ श्रीं ह्रीं क्लीं श्री सिद्ध लक्ष्म्यै नमः ॥' : '|| Om Shreem Hreem Kleem Shri Siddha Lakshmyai Namah ||'}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold font-serif text-amber-100">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-amber-200/90 font-medium mt-1">
                  {feat.panchangInfo}
                </p>
              </div>
            </div>

            {/* Muhurat Highlights */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
              <h5 className="font-extrabold text-sm text-red-900 font-serif flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-700" />
                <span>{feat.muhuratTitle}</span>
              </h5>
              <p className="text-base sm:text-lg font-extrabold text-red-950">
                {feat.muhurat}
              </p>
              <p className="text-xs text-slate-700">
                {feat.muhuratNote}
              </p>
            </div>

            {/* 5-Day Timeline Table in Modal */}
            <div className="border border-amber-200 rounded-2xl overflow-hidden">
              <div className="bg-amber-100/90 px-4 py-2 border-b border-amber-200 font-bold text-xs text-amber-950 uppercase tracking-wider">
                {isHindi ? 'दीपावली पंचपर्व संपूर्ण समय सारणी (उज्जैन पंचांग)' : 'Diwali 5-Day Festive Schedule'}
              </div>
              <div className="divide-y divide-amber-100 text-xs">
                {feat.timeline.map((item, idx) => (
                  <div key={idx} className="p-3 flex justify-between items-center bg-white hover:bg-amber-50/50">
                    <span className="font-bold text-slate-800">{item.label}</span>
                    <span className="font-extrabold text-red-900 ml-2">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://api.whatsapp.com/send?phone=919826525736&text=${encodeURIComponent(feat.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 fill-current" />
                <span>{fest.bookFestivalPuja}</span>
              </a>

              <a
                href="tel:+919826525736"
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-red-800 via-amber-800 to-red-900 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>+91-9826525736 (पंडित जी से बात करें)</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Festivals;
