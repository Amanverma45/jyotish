import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  hi: {
    // Header & Brand
    titleLine1: "ज्योतिषाचार्य",
    titleLine2: "पं. हरिओम शर्मा",
    title: "ज्योतिषाचार्य पं. हरिओम शर्मा",
    subtitle: "उज्जैन महाकाल धाम पूजन विशेषज्ञ",
    shortTitle: "पंडित हरिओम शर्मा",
    
    // Nav links (Clear & Self-explanatory)
    nav: {
      home: "मुख्य पृष्ठ",
      famousPandit: "प्रसिद्ध पंडित जी",
      ourTeam: "हमारे विद्वान पंडित",
      pujaServices: "पूजा सेवाएं",
      festivals: "व्रत एवं त्योहार",
      gallery: "फोटो गैलरी",
      contact: "संपर्क करें",
      enquireNow: "पूछताछ करें",
      bookNow: "पूजा बुक करें"
    },

    // Hero Section Video Slider Items
    heroSlides: [
      {
        id: "kaalsarp",
        tag: "⚡ उज्जैन महाकालेश्वर धाम",
        heading: "उज्जैन में कालसर्पदोष पूजा",
        subHeading: "पं. हरिओम शर्मा जी द्वारा शास्त्रोक्त कालसर्पदोष पूजन",
        desc: "पंडित हरिओम शर्मा जी द्वारा उज्जैन महाकाल धाम में शास्त्रोक्त विधि-विधान से कालसर्प दोष, राहु-केतु शांति एवं विशेष नागबलि पूजन।",
        ctaText: "कालसर्प पूजा बुक करें",
        badge: "1. कालसर्प दोष पूजा"
      },
      {
        id: "pitru",
        tag: "⚡ उज्जैन सिद्ध क्षेत्र अनुष्ठान",
        heading: "पितृदोष निवारण एवं शांति पूजा",
        subHeading: "पूर्वज दोष शांति एवं परिवार की सुख-समृद्धि हेतु वैदिक अनुष्ठान",
        desc: "अकाल मृत्यु, अंतिम संस्कार दोष या पूर्वज दोष से मुक्ति के लिए उज्जैन में विधि-विधान से पितृदोष शांति पूजा करवाएं।",
        ctaText: "पितृदोष पूजा बुक करें",
        badge: "2. पितृदोष शांति पूजा"
      },
      {
        id: "navgrah",
        tag: "⚡ उज्जैन अवंतिका नगरी",
        heading: "नवग्रह शांति एवं ग्रह दोष पूजा",
        subHeading: "सभी नौ ग्रहों की अनुकूलता और जीवन में संतुलन हेतु विशेष पूजा",
        desc: "सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु एवं केतु ग्रहों के अशुभ प्रभाव को समाप्त कर शुभ फल प्राप्ति हेतु नवग्रह जाप।",
        ctaText: "नवग्रह पूजा बुक करें",
        badge: "3. नवग्रह शांति पूजा"
      }
    ],

    // About Famous Pandit & Sacred Ujjain Section
    about: {
      badge: "प्रसिद्ध पंडित जी",
      heading: "ज्योतिषाचार्य पंडित हरिओम शर्मा - उज्जैन के सर्वश्रेष्ठ पंडित",
      subHeading: "अवंतिका नगरी (उज्जैन महाकाल धाम) पूजन विशेषज्ञ",
      intro: "ज्योतिषाचार्य पंडित हरिओम शर्मा जी एक सिद्ध विद्वान पंडित हैं जो अवंतिका नगरी अर्थात उज्जैन में अनेक प्रकार के धार्मिक आयोजन एवं पूजा-पाठ जैसे कालसर्पदोष पूजा, मंगल भात पूजा करवाने में विशेष पारंगत हैं।",
      
      ujjainTitle: "पवित्र अवंतिका नगरी (उज्जैन) का आध्यात्मिक महत्व",
      ujjainDesc: "उज्जैन भारत के मध्य प्रदेश राज्य में स्थित एक प्रमुख शहर है, जो प्राचीन समय से ही महत्वपूर्ण धार्मिक और सांस्कृतिक स्थल के रूप में प्रसिद्ध है। इसका प्राचीन नाम 'उज्जैनी' है और यह महाकालेश्वर ज्योतिर्लिंग के स्थान के रूप में मशहूर है, जिसे 'महाकालपुरी' भी कहा जाता है।",
      
      landmarksTitle: "उज्जैन के प्रमुख एवं पावन धार्मिक स्थल:",
      landmarks: [
        {
          title: "श्री महाकालेश्वर ज्योतिर्लिंग",
          desc: "उज्जैन का सबसे प्रमुख और पावन स्थान भगवान श्री महाकालेश्वर ज्योतिर्लिंग है। यहाँ भगवान शिव दक्षिणामुखी रूप में विराजमान हैं और नित्य प्रातः पावन भस्म आरती सम्पन्न होती है।",
          imageKey: "mahakal"
        },
        {
          title: "श्री काल भैरव मंदिर (उज्जैन)",
          desc: "उज्जैन के अधिपति एवं रक्षक देव भगवान श्री काल भैरव का अति सिद्ध मंदिर। उज्जैन तीर्थ यात्रा भगवान काल भैरव के दर्शन और आशीर्वाद के बिना अधूरी मानी जाती है।",
          imageKey: "kaal_bhairav"
        },
        {
          title: "श्री मंगलनाथ मंदिर (उज्जैन)",
          desc: "समस्त ब्रह्मांड में मंगल ग्रह की पावन जन्मभूमि सिद्ध मंगलनाथ मंदिर। यहाँ मंगल दोष शांति एवं भात पूजा हेतु देश-विदेश से श्रद्धालु पधारते हैं।",
          imageKey: "mangalnath"
        },
        {
          title: "माँ हरसिद्धि माता शक्तिपीठ",
          desc: "51 पावन शक्तिपीठों में से एक अत्यंत दिव्य माँ हरसिद्धि मंदिर। सम्राट विक्रमादित्य की कुलदेवी माँ हरसिद्धि के दीप स्तंभ एवं दर्शन से समस्त कष्ट दूर होते हैं।",
          imageKey: "harsiddhi_mata"
        }
      ],

      callNow: "अभी कॉल करें: +91-9826525736",
      phone: "+919826525736"
    },

    // Associate Pandits / Our Team Section
    ourTeam: {
      badge: "सहयोगी विद्वान",
      heading: "हमारे सिद्ध विद्वान पंडित गण",
      subHeading: "उज्जैन महाकाल धाम में पं. हरिओम शर्मा जी के मार्गदर्शन में पूजा कराने वाले विद्वान आचार्य",
      members: [
        {
          id: "hariom",
          name: "पं. हरिओम शर्मा जी",
          role: "मुख्य ज्योतिषाचार्य व पूजन विशेषज्ञ",
          experience: "25+ वर्षों का अनुभव",
          specialty: "कालसर्प दोष, मंगल भात पूजा व महामृत्युंजय जाप",
          photoKey: "sharmaji"
        },
        {
          id: "kanha",
          name: "पं. कान्हा शर्मा जी",
          role: "कर्मकांडी विद्वान पंडित",
          experience: "2 वर्षों का अनुभव",
          specialty: "रुद्राभिषेक, शिव पूजन व नवग्रह जाप",
          photoKey: "kanha"
        },
        {
          id: "rishi",
          name: "पं. ऋषि गुरुजी",
          role: "वैदिक ज्योतिष व अनुष्ठान विद्वान",
          experience: "2 वर्षों का अनुभव",
          specialty: "कालसर्प शांति, वास्तु दोष व गृह शांति",
          photoKey: "rishi"
        },
        {
          id: "dipesh",
          name: "पं. दिपेश जोशी जी",
          role: "वैदिक कर्मकांडी पंडित",
          experience: "1 वर्ष का अनुभव",
          specialty: "महामृत्युंजय जाप व महाकाल अभिषेक",
          photoKey: "dipesh"
        },
        {
          id: "shivam",
          name: "पं. शिवम शर्मा जी",
          role: "कर्मकांडी एवं पूजा सहायक",
          experience: "2 वर्षों का अनुभव",
          specialty: "पितृदोष शांति व मंगल भात पूजा सहायक",
          photoKey: "shivam"
        }
      ]
    },

    // Rituals You Can Book Section
    ritualsSection: {
      title: "मुख्य पूजाएं जिन्हें आप बुक कर सकते हैं:",
      desc: "महाकाल अभिषेक एक दिव्य अनुष्ठान है जो श्रद्धालुओं को भगवान शिव से गहराई से जोड़ता है। उज्जैन में नकारात्मक प्रभावों को दूर करने के लिए प्रसिद्ध पंडित जी के मार्गदर्शन में कालसर्प दोष पूजा की जाती है। गृह शांति पूजा घर में सकारात्मक ऊर्जा, शांति और संतुलन लाती है।",
      journeyTitle: "अपनी आध्यात्मिक यात्रा शुरू करें",
      journeyDesc: "उज्जैन में सर्वश्रेष्ठ पंडित जी से मिलने के लिए देश-विदेश से लोग आते हैं। यदि आप चाहते हैं कि उज्जैन में आपकी पूजा शांतिपूर्ण, दोषरहित और भगवान के आशीर्वाद से पूर्ण हो, तो पहुंचने से पहले ही पंडित जी से संपर्क करें।",
      bookLink: "उज्जैन के सर्वश्रेष्ठ पंडित जी से पूजा बुक करें"
    },

    // Services Section (7 Pujas)
    services: {
      badge: "हमारी सेवाएं",
      heading: "उज्जैन महाकाल धाम में मुख्य पूजा एवं अनुष्ठान",
      subHeading: "हम उज्जैन में विद्वान पंडित द्वारा विभिन्न प्रकार के कर्म-कांड एवं पूजा पाठ करवाते हैं",
      readMore: "विस्तार से पढ़ें...",
      callNow: "अभी कॉल करें",

      pujas: [
        {
          id: "kaalsarp",
          title: "कालसर्प दोष पूजा",
          subtitle: "उज्जैन में कालसर्प दोष निवारण",
          desc: "कालसर्प दोष पूजा को कालसर्प योग भी कहा जाता है। कालसर्प पूजा तब होती है जब सभी ग्रह राहु और केतु के बीच आते हैं। कालसर्प हानि, दुविधा, बाधा को सूचित करता है। कुंडली में कालसर्प होने से कितने लोगो को कष्ट हुआ है। कालसर्प पूजा उज्जैन दोष निवारण के लिए की जाने वाली पूजा व्यक्ति की अनुपस्थिति में भी की जा सकती है।",
          photoKey: "kaalsarp"
        },
        {
          id: "mangal",
          title: "मंगलभात पूजा",
          subtitle: "उज्जैन में मंगल भात पूजा",
          desc: "मंगल पूजा उज्जैन तब की जाती है जब व्यक्ति के जीवन में विवाह संबंधी समस्याएं होती हैं। मंगलनाथ मंदिर इस पूजा के लिए प्रसिद्ध है। यह मंगल ग्रह के साथ जुड़ा हुआ है। मंगल आत्म-सम्मान, स्वभाव, अहंकार और संघर्ष का प्रतिनिधित्व करता है। विवाह पर इसका प्रभाव समस्याएं ही बढ़ाता है, मंगल पूजा कर के यह दोष दूर किया जाता है।",
          photoKey: "mangal"
        },
        {
          id: "pitru",
          title: "पितृदोष निवारण पूजा",
          subtitle: "पितृदोष शांति पूजन",
          desc: "पितृदोष पूजा करने से सभी दोषो का निवारण हो जाता है। अगर किसी व्यक्ति की मृत्यु के बाद विधि से अंतिम संस्कार न किया जाए तो पितृदोष होता है, या फिर किसी की अकाल मृत्यु हो जाए तो व्यक्ति के परिवार को कई पीढ़ियों तक पितृदोष के परिणाम झेलने पड़ते है। इससे मुक्ति के लिए पितृदोष पूजा उज्जैन की जाती है।",
          photoKey: "pitru"
        },
        {
          id: "navgrah",
          title: "नवग्रहशांति पूजा",
          subtitle: "नवग्रह दोष शांति",
          desc: "नवग्रह नौ ब्रह्मांडीय वस्तुएं हैं और ऐसा कहा जाता है कि इनका मानव जीवन पर बहुत प्रभाव पड़ता है। ये नौ ग्रह सूर्य, चंद्र, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु और केतु हैं। नवग्रह शांति पूजा से जीवन में सुख, समृद्धि, शांति और संतुलन आता है।",
          photoKey: "navgrah"
        },
        {
          id: "vastu",
          title: "वास्तुदोष पूजा",
          subtitle: "घर व व्यापार वास्तु शांति",
          desc: "वास्तु दोष पूजा एक महत्वपूर्ण अनुष्ठान है, जो वास्तु शास्त्र के मुताबिक घर या कार्यस्थल में होने वाले दोषों को दूर करने के लिए की जाती है। जैसे कि दरवाजों या खिड़कियों की गलत स्थानन, किचन या बाथरूम की गलत स्थानन, आदि। वास्तु दोष पूजा घर की ऊर्जा को संतुलित करके व्यक्ति के जीवन में सुख, समृद्धि, और शांति लाने में मदद कर सकती है।",
          photoKey: "vastu"
        },
        {
          id: "rudrabhishek",
          title: "रुद्राभिषेक पूजा",
          subtitle: "उज्जैन में शिव रुद्राभिषेक",
          desc: "रुद्राभिषेक पूजा हिन्दू धर्म में भगवान शिव की पूजा है, जिसमें शिवलिंग को पवित्र जल, दूध, धान्य, देवद्रव्य, और बिल्वपत्र के साथ समर्पित किया जाता है। इस पूजा के माध्यम से भगवान शिव की कृपा प्राप्त की जा सकती है और व्यक्ति के जीवन में सुख, समृद्धि, और आनंद की वर्षा हो सकती है। यह पूजा मन, शरीर, और आत्मा को पवित्र करने के लिए की जाती है और शिव भक्तों के लिए एक महत्वपूर्ण आध्यात्मिक अनुष्ठान है।",
          photoKey: "rudrabhishek"
        },
        {
          id: "kumbh",
          title: "कुंभ विवाह / अर्क विवाह",
          subtitle: "विवाह बाधा निवारण",
          desc: "जिस किसी पुरुष या स्त्री के विवाह मे विलम्ब हो रहा हो या अन्य किसी दोष को दूर करने के लिए उस पुरुष के विवाह के पूर्व सूर्य पुत्री जिन्हे अर्क वृक्ष के रूप मे पूज जाता है के साथ विवाह किया जाता है, जिससे उस पुरुष के विवाह मे आ रहे समस्त प्रकार के दोषो से मुक्ति मिल जाती है। पुरुष का विवाह से पूर्व किए गए इस प्रकार के विवाह को अर्क विवाह पूजा के नाम से जाना जाता है।",
          photoKey: "kumbh"
        }
      ]
    },

    // Suvichar Banner
    suvichar: {
      title: "सुविचार",
      quote: "डॉक्टर के पास आप बीमार पड़ने पर ही नहीं जाते, गर्भ में बच्चे के आने के बाद ही उससे सलाह लेकर काम करना आरंभ कर देते हैं! कानून की मदद आप झंझट में पड़ने के बाद नहीं लेते, वरन् होश संभालने के बाद ही कानून का पालन करते हैं! गुरू के संपर्क में तब नहीं जाते जब आप गुमराह हो जाते हैं, वरन् जीवन की शिक्षा पाने के लिए पहले से गुरू की सलाह लेते हैं! फिर एक ज्योतिषी के पास जाने के लिए आप बुरे समय का इंतजार क्यों करते हैं?"
    },

    // Fallback blogs object
    blogs: {
      title: "वैदिक पंचांग एवं व्रत-त्योहार",
      subHeading: "उज्जैन महाकाल धाम के अनुसार प्रमुख धार्मिक पर्व, तिथि महात्म्य एवं पूजन मुहूर्त जानकारी",
      readArticle: "त्योहार विवरण देखें",
      posts: []
    },

    // Festivals Section
    festivalsSection: {
      badge: "वैदिक पंचांग एवं व्रत-त्योहार",
      heading: "आगामी प्रमुख व्रत, त्योहार एवं शुभ मुहूर्त",
      subHeading: "उज्जैन महाकाल धाम के अनुसार आगामी धार्मिक पर्व, तिथि महात्म्य एवं पूजन मुहूर्त जानकारी",
      activeFestivalTitle: "🔥 वर्तमान/आगामी मुख्य महात्योहार",
      bookFestivalPuja: "त्योहार विशेष पूजा बुक करें",
      featured: {
        title: "गणेश चतुर्थी 2026 (विनायक चतुर्थी से अनंत चतुर्दशी महामहोत्सव)",
        date: "14 सितंबर 2026 (सोमवार) से 25 सितंबर 2026 (शुक्रवार)",
        panchangInfo: "भाद्रपद मास के शुक्ल पक्ष की चतुर्थी तिथि (विनायक चतुर्थी / गणेश चौथ)",
        tithiStart: "14 सितंबर 2026, प्रातः 7:06 बजे",
        tithiEnd: "15 सितंबर 2026, प्रातः 7:44 बजे",
        sthapanaDate: "14 सितंबर 2026, सोमवार",
        muhurat: "प्रातः 11:09 बजे से दोपहर 1:35 बजे तक (उज्जैन पंचांग अनुसार)",
        visarjanDate: "25 सितंबर 2026 (शुक्रवार - अनंत चतुर्दशी)",
        mantra: "ॐ गं गणपतये नमः ॥",
        shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
        imageKey: "ganesh_poster",
        desc: "विघ्नहर्ता, मंगलकर्ता भगवान श्री गणेश के पावन जन्मोत्सव गणेश चतुर्थी से अनंत चतुर्दशी तक 10 दिवसीय गणेशोत्सव का महापर्व मनाया जाता है। उज्जैन महाकाल धाम में गणपति स्थापना, रिद्धि-सिद्धि पूजन व मोदक अर्पण कराने से जीवन के सभी विघ्न दूर होते हैं।",
        samagri: [
          "भगवान गणेश की प्रतिमा",
          "लाल वस्त्र",
          "दूर्वा (21 या अधिक)",
          "लाल पुष्प (विशेषतः गुड़हल)",
          "अक्षत (चावल)",
          "सिंदूर, चंदन, रोली",
          "मोदक या लड्डू",
          "फल, मिठाई, पंचामृत",
          "धूप, दीप, अगरबत्ती",
          "कलश, जल, नारियल",
          "पान, सुपारी, इलायची",
          "नैवेद्य एवं आरती की सामग्री"
        ],
        vidhiSteps: [
          "पूजा स्थान को स्वच्छ कर लें और चौकी पर लाल वस्त्र बिछाएं।",
          "कलश स्थापना करें और श्री गणेश की प्रतिमा विधिवत स्थापित करें।",
          "भगवान गणेश का ध्यान कर संकल्प लें।",
          "पंचामृत से अभिषेक करें, वस्त्र, चंदन, अक्षत, पुष्प, दूर्वा अर्पित करें।",
          "मोदक/लड्डू का भोग लगाएं।",
          "गणेश जी की आरती करें और मंत्रों का जाप करें।",
          "परिवार की सुख-समृद्धि, आरोग्य और विघ्नों के निवारण की प्रार्थना करें।"
        ],
        mahatmya: "भगवान गणेश बुद्धि, सिद्धि, समृद्धि और सौभाग्य के देवता हैं। गणेश चतुर्थी का व्रत एवं पूजन करने से जीवन के सभी विघ्न दूर होते हैं और घर में सुख-शांति एवं समृद्धि आती है।",
        status: "गणपति स्थापना व विशेष अनुष्ठान बुकिंग चालू है"
      },
      list: [
        {
          id: "mahashivratri",
          title: "महाशिवरात्रि महापूजन एवं भस्म आरती दर्शन",
          date: "फाल्गुन कृष्ण चतुर्दशी",
          tithi: "चतुर्दशी तिथि",
          muhurat: "रात्रि चार प्रहर पूजा व महाकाल भस्म आरती",
          imageKey: "rudrabhishek",
          desc: "उज्जैन में महाशिवरात्रि पर्व अत्यंत दिव्य और फलदायी होता है। इस दिन विशेष रुद्राभिषेक व महामृत्युंजय जाप कराने से जन्मों के पाप नष्ट होते हैं।"
        },
        {
          id: "kaalsarp_fest",
          title: "नागपंचमी एवं कालसर्प दोष महाशांति अनुष्ठान",
          date: "श्रावण शुक्ल पंचमी",
          tithi: "पंचमी तिथि",
          muhurat: "प्रातः 05:00 से सायं 07:00 बजे तक",
          imageKey: "kaalsarp",
          desc: "वर्ष में केवल नागपंचमी के दिन उज्जैन के नागचंद्रेश्वर मंदिर के पट खुलते हैं। इस पवित्र दिन कालसर्पदोष पूजा कराने का अनंत गुना फल मिलता है।"
        },
        {
          id: "shravan",
          title: "पावन श्रावण सोमवार व पार्थिव शिव लिंग पूजन",
          date: "श्रावण माह (प्रति सोमवार)",
          tithi: "श्रावण मास",
          muhurat: "प्रातःकाल एवं संध्या आरती समय",
          imageKey: "rudrabhishek",
          desc: "श्रावण मास में भगवान महाकाल का जल एवं दूध से अभिषेक करने तथा पार्थिव शिवलिंग निर्माण पूजन कराने से आरोग्य व समृद्धि प्राप्त होती है।"
        },
        {
          id: "mangal_fest",
          title: "भौमवती अमावस्या एवं मंगल भात पूजा महायज्ञ",
          date: "मंगलवार अमावस्या तिथि",
          tithi: "अमावस्या तिथि",
          muhurat: "प्रातः 06:00 से दोपहर 02:00 बजे",
          imageKey: "mangal",
          desc: "उज्जैन के सिद्ध मंगलनाथ मंदिर में भौमवती अमावस्या पर मंगल दोष निवारण एवं भात पूजा कराने से विवाह संबंधी समस्त विघ्न दूर होते हैं।"
        },
        {
          id: "pitru_fest",
          title: "पितृ पक्ष (श्राद्ध पक्ष) एवं महालय तर्पण पूजन",
          date: "भाद्रपद पूर्णिमा से आश्विन अमावस्या",
          tithi: "पितृ पक्ष 16 तिथियां",
          muhurat: "कुतप व रोहिण काल (दोपहर 11:30 से 02:30)",
          imageKey: "pitru",
          desc: "उज्जैन के सिद्धवट एवं रामघाट तट पर पितरों की आत्मा की शांति हेतु पिंडदान, तर्पण एवं नारायण बलि अनुष्ठान कराया जाता है।"
        },
        {
          id: "ganesh",
          title: "गणेश चतुर्थी व रिद्धि-सिद्धि गणपति स्थापना",
          date: "भाद्रपद शुक्ल चतुर्थी",
          tithi: "चतुर्थी तिथि",
          muhurat: "मध्याह्न शुभ मुहूर्त 11:05 से 01:35",
          imageKey: "navgrah",
          desc: "गणेश चतुर्थी से अनंत चतुर्दशी तक भगवान श्री गणेश का मोदक व दुर्वा से अर्पण एवं रिद्धि-सिद्धि दायक गणपति अथर्वशीर्ष पाठ।"
        }
      ]
    },

    // Kundli Form Section
    kundli: {
      badge: "परामर्श एवं पूजा बुकिंग",
      heading: "अपनी जन्म डिटेल भेजें",
      subHeading: "पं. हरिओम शर्मा जी आपकी जन्म कुंडली देखकर सही मार्गदर्शन करेंगे।",
      formName: "आपका नाम",
      formNamePlaceholder: "अपना नाम लिखें",
      formPhone: "मोबाइल / व्हाट्सएप नंबर",
      formPhonePlaceholder: "10 अंकों का फोन नंबर",
      formDob: "जन्म तिथि (Date of Birth)",
      formTob: "जन्म समय (Time of Birth)",
      formPob: "जन्म स्थान (शहर/गांव)",
      formGender: "लिंग",
      genderMale: "पुरुष",
      genderFemale: "महिला",
      formQuery: "आपकी समस्या / पूजा की जानकारी",
      formQueryPlaceholder: "उदा. कालसर्प दोष, मंगल पूजा, विवाह रुकावट या व्यापार घाटा...",
      submitBtn: "व्हाट्सएप पर भेजें",
      directCall: "सीधा कॉल करें:"
    },

    // Contact Details
    contactInfo: {
      phone: "+91-9826525736",
      email: "hariomsharma@gmail.com",
      address: "रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001",
      homeAddress: "L 04 /2, श्री सिटी , दाउदखेडी उज्जैन- 456006"
    },

    contact: {
      badge: "संपर्क करें",
      heading: "ज्योतिषाचार्य पं. हरिओम शर्मा जी से संपर्क करें",
      subHeading: "उज्जैन महाकाल धाम में पूजन, कालसर्प दोष निवारण एवं ज्योतिष सलाह हेतु संपर्क करें",
      phoneTitle: "फोन नंबर",
      phoneDesc: "फोन पर तुरंत बात करें",
      whatsappTitle: "व्हाट्सएप परामर्श",
      whatsappDesc: "व्हाट्सएप पर संदेश भेजें",
      pujaAddressTitle: "मुख्य पूजन स्थल (उज्जैन महाकाल धाम)",
      pujaAddressDesc: "रामघाट मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन (म.प्र.) 456001",
      homeAddressTitle: "गृह एवं स्थायी निवास पता",
      homeAddressDesc: "L 04 /2, श्री सिटी , दाउदखेडी उज्जैन- 456006",
      emailTitle: "ईमेल पता",
      emailDesc: "hariomsharma@gmail.com",
      timingTitle: "संपर्क व परामर्श समय",
      timingDesc: "प्रातः 07:00 बजे से रात्रि 10:00 बजे तक (प्रतिदिन)",
      sendMessage: "संदेश भेजें"
    },

    // Footer
    footer: {
      brandDesc: "ज्योतिषाचार्य पं. हरिओम शर्मा - उज्जैन में कालसर्प दोष पूजा, मंगल भात पूजा और रुद्राभिषेक पूजा के विश्वसनीय विद्वान।",
      quickLinks: "त्वरित लिंक",
      ourServices: "मुख्य पूजा सेवाएं",
      contactInfo: "संपर्क जानकारी",
      rights: "सर्वाधिकार सुरक्षित।",
      designedFor: "पं. हरिओम शर्मा"
    },

    // Gallery Page
    galleryPage: {
      badge: "पवित्र चित्र एवं फोटो दीर्घा",
      heading: "उज्जैन महाकाल धाम पूजा एवं अनुष्ठान गैलरी",
      subHeading: "ज्योतिषाचार्य पं. हरिओम शर्मा जी द्वारा उज्जैन महाकाल क्षेत्र में सम्पन्न मुख्य पूजाएं एवं दिव्य क्षण",
      filterAll: "सभी तस्वीरें",
      filterMahakal: "महाकाल धाम",
      filterKaalsarp: "कालसर्प दोष",
      filterMangal: "मंगल भात पूजा",
      filterRudrabhishek: "रुद्राभिषेक",
      filterAnushthan: "विशेष अनुष्ठान",
      addPhotoHint: "फोटो पाथ डालें (src/assets/...) फोटो स्वतः दिखाई देने लगेगी"
    }
  },

  en: {
    // Header & Brand
    titleLine1: "Jyotishacharya",
    titleLine2: "Pt. Hariom Sharma",
    title: "Jyotishacharya Pt. Hariom Sharma",
    subtitle: "Ujjain Mahakal Puja Expert",
    shortTitle: "Pt. Hariom Sharma",
    
    // Nav links
    nav: {
      home: "Home",
      famousPandit: "Famous Pandit",
      ourTeam: "Our Pandits Team",
      pujaServices: "Puja Services",
      festivals: "Vedic Festivals",
      gallery: "Photo Gallery",
      contact: "Contact Us",
      enquireNow: "Enquire Now",
      bookNow: "Book Puja"
    },

    // Hero Section Video Slider Items
    heroSlides: [
      {
        id: "kaalsarp",
        tag: "⚡ Ujjain Mahakaleshwar Dham",
        heading: "Kaal Sarp Dosh Puja in Ujjain",
        subHeading: "Best Kaal Sarp Dosh puja by Pt. Hariom Sharma",
        desc: "Authentic Kaal Sarp Dosh Puja & Rahu-Ketu Shanti Puja performed at Ujjain Mahakal Dham.",
        ctaText: "Book Kaal Sarp Puja",
        badge: "1. Kaal Sarp Dosh Puja"
      },
      {
        id: "pitru",
        tag: "⚡ Ujjain Sacred Shanti Ritual",
        heading: "Pitru Dosh Nivaran & Shanti Puja",
        subHeading: "Vedic Rituals for Ancestral Peace & Family Prosperity",
        desc: "Authentic Pitru Dosh Shanti Puja performed at Ujjain to seek peace for ancestors and ancestral blessing.",
        ctaText: "Book Pitru Dosh Puja",
        badge: "2. Pitru Dosh Shanti Puja"
      },
      {
        id: "navgrah",
        tag: "⚡ Ujjain Avantika Dham",
        heading: "Navgrah Shanti & Dosh Puja",
        subHeading: "Harmonizing 9 Celestial Planetary Energies for Life Balance",
        desc: "Special Vedic Jaap and Puja to balance Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu & Ketu planets.",
        ctaText: "Book Navgrah Puja",
        badge: "3. Navgrah Shanti Puja"
      }
    ],

    // About Section
    about: {
      badge: "Famous Pandit",
      heading: "Jyotishacharya Pandit Hariom Sharma - Best Pandit in Ujjain",
      subHeading: "Avantika Nagari (Ujjain Mahakal Dham) Rituals Specialist",
      intro: "Jyotishacharya Pandit Hariom Sharma Ji is an experienced scholar Pandit who specializes in conducting various religious events and Pujas such as Kaal Sarp Dosh Puja and Mangal Bhaat Puja in Avantika Nagari (Ujjain).",
      
      ujjainTitle: "Spiritual Significance of Sacred Avantika Nagari (Ujjain)",
      ujjainDesc: "Ujjain is a prominent city located in the state of Madhya Pradesh, India, famous since ancient times as an important religious and cultural destination. Its ancient name is 'Ujjaini', and it is renowned as the abode of Mahakaleshwar Jyotirlinga, also known as 'Mahakalpuri'.",
      
      landmarksTitle: "Key Sacred Landmarks of Ujjain:",
      landmarks: [
        {
          title: "Shree Mahakaleshwar Jyotirlinga",
          desc: "The most sacred Jyotirlinga shrine of Lord Shiva in Ujjain, featuring the divine Dakshinamukhi Mahakal form and holy morning Bhasma Aarti.",
          imageKey: "mahakal"
        },
        {
          title: "Shree Kaal Bhairav Temple Ujjain",
          desc: "Ancient Siddha Peeth of Lord Kaal Bhairav, the divine protector and guardian deity of Ujjain. Pilgrimage is complete only with Kaal Bhairav's blessings.",
          imageKey: "kaal_bhairav"
        },
        {
          title: "Shree Mangalnath Temple Ujjain",
          desc: "Cosmic birthplace of Mars (Mangal Graha). Renowned worldwide for authentic Mangal Dosh Nivaran and Mangal Bhaat Puja rituals.",
          imageKey: "mangalnath"
        },
        {
          title: "Maa Harsiddhi Shaktipeeth",
          desc: "One of the 51 revered Shaktipeeths of Mata Sati and Kuldevi of legendary Emperor Vikramaditya, renowned for its 51 glowing lamp pillars.",
          imageKey: "harsiddhi_mata"
        }
      ],

      callNow: "Call Now: +919826525736",
      phone: "+919826525736"
    },

    // Associate Pandits / Our Team Section
    ourTeam: {
      badge: "Vedic Scholars",
      heading: "Our Learned Vedic Pandits Team",
      subHeading: "Experienced Pandits performing Pujas under the guidance of Pt. Hariom Sharma Ji in Ujjain",
      members: [
        {
          id: "hariom",
          name: "Pt. Hariom Sharma Ji",
          role: "Lead Jyotishacharya & Puja Expert",
          experience: "25+ Years Exp.",
          specialty: "Kaal Sarp Dosh, Mangal Bhaat Puja & Mahamrityunjay Jaap",
          photoKey: "sharmaji"
        },
        {
          id: "kanha",
          name: "Pt. Kanha Sharma Ji",
          role: "Vedic Scholar Pandit",
          experience: "2 Years Exp.",
          specialty: "Rudrabhishek, Shiv Puja & Navgrah Jaap",
          photoKey: "kanha"
        },
        {
          id: "rishi",
          name: "Pt. Rishi Guruji",
          role: "Vedic Astrology & Ritual Scholar",
          experience: "2 Years Exp.",
          specialty: "Kaal Sarp Shanti, Vastu Dosh & Grah Shanti",
          photoKey: "rishi"
        },
        {
          id: "dipesh",
          name: "Pt. Dipesh Joshi Ji",
          role: "Vedic Scholar",
          experience: "1 Year Exp.",
          specialty: "Mahamrityunjay Jaap & Mahakal Abhishek",
          photoKey: "dipesh"
        },
        {
          id: "shivam",
          name: "Pt. Shivam Sharma Ji",
          role: "Vedic Ritual Assistant",
          experience: "2 Years Exp.",
          specialty: "Pitru Dosh Shanti & Mangal Bhaat Puja Assistant",
          photoKey: "shivam"
        }
      ]
    },

    // Rituals You Can Book Section
    ritualsSection: {
      title: "Rituals You Can Book:",
      desc: "Mahakal Abhishek is a divine ritual that helps devotees deeply connect with Lord Shiva, while Kaal Sarp Dosh Puja is performed under the guidance of a Famous Pandit for Puja in Ujjain to remove negative influences. Grah Shanti Puja brings positive energy, peace, and balance into the home, and Family Puja in Ujjain is conducted privately for the health, happiness, and well-being of loved ones, creating a spiritually fulfilling experience.",
      journeyTitle: "Start Your Spiritual Journey",
      journeyDesc: "People travel from all over just to meet with the Best Pandit in Ujjain. If you want your Puja in Ujjain to be calm and full of blessings and be Dosh Rahit, it's a smart move to reach out to a Famous Pandit for Puja in Ujjain before you even get there.",
      bookLink: "Book the Best Pandit in Ujjain Now"
    },

    // Services Section
    services: {
      badge: "Our Services",
      heading: "Puja Services in Ujjain",
      subHeading: "Authentic Vedic rituals performed by learned Pandits in Ujjain",
      readMore: "Read More...",
      callNow: "Call Now",

      pujas: [
        {
          id: "kaalsarp",
          title: "Kaal Sarp Dosh Puja",
          subtitle: "Kaal Sarp Dosh Puja in Ujjain",
          desc: "Kaal Sarp Dosh Puja is performed when all planets come between Rahu and Ketu. It helps resolve obstacles and bring peace.",
          iconType: "snake"
        },
        {
          id: "mangal",
          title: "Mangal Bhaat Puja",
          subtitle: "Mangal Bhaat Puja in Ujjain",
          desc: "Performed at Mangalnath Temple Ujjain for marriage delay remedies and Mangal Dosh Nivaran.",
          iconType: "flame"
        },
        {
          id: "pitru",
          title: "Pitru Dosh Nivaran Puja",
          subtitle: "Pitru Dosh Nivaran Puja",
          desc: "Vedic rituals performed in Ujjain to seek peace for ancestors and ancestral dosh remedies.",
          iconType: "shield"
        },
        {
          id: "navgrah",
          title: "Navgrah Shanti Puja",
          subtitle: "Navgrah Shanti Puja",
          desc: "Harmonizing nine celestial planetary energies for peace, health, and prosperity.",
          iconType: "sun"
        },
        {
          id: "vastu",
          title: "Vastu Dosh Puja",
          subtitle: "Vastu Dosh Puja",
          desc: "Balancing energy in home or workplace as per Vastu Shastra principles.",
          iconType: "home"
        },
        {
          id: "rudrabhishek",
          title: "Rudrabhishek Puja",
          subtitle: "Rudrabhishek Puja in Ujjain",
          desc: "Sacred Shivling Abhishek ritual with milk, holy water, and bilvapatra for Lord Shiva's blessings.",
          iconType: "water"
        },
        {
          id: "kumbh",
          title: "Kumbh Vivah / Ark Vivah",
          subtitle: "Kumbh Vivah / Ark Vivah",
          desc: "Symbolic wedding ritual performed before marriage to remove marriage delay and Mangal Dosh.",
          iconType: "heart"
        }
      ]
    },

    // Suvichar Banner
    suvichar: {
      title: "Thought of Wisdom",
      quote: "You consult doctors early, follow laws before trouble strikes, and seek teachers before losing direction. Why wait for hard times before consulting a wise Astrologer?"
    },

    // Fallback blogs object
    blogs: {
      title: "Vedic Panchang & Festivals",
      subHeading: "Sacred festival calendar, significance & special Puja Muhurat as per Ujjain Mahakal Dham",
      readArticle: "View Festival Details",
      posts: []
    },

    // Festivals Section
    festivalsSection: {
      badge: "Vedic Panchang & Festivals",
      heading: "Upcoming Vedic Festivals & Shubh Muhurat",
      subHeading: "Sacred festival calendar, significance & special Puja Muhurat as per Ujjain Mahakal Dham",
      activeFestivalTitle: "🔥 Current / Featured Festival",
      bookFestivalPuja: "Book Special Festival Puja",
      featured: {
        title: "Ganesh Chaturthi 2026 (Vinayak Chaturthi to Anant Chaturdashi)",
        date: "14 September 2026 (Monday) to 25 September 2026 (Friday)",
        panchangInfo: "Bhadrapad Shukla Paksha Chaturthi Tithi (Vinayak Chaturthi / Ganesh Chauth)",
        tithiStart: "14 September 2026, 07:06 AM",
        tithiEnd: "15 September 2026, 07:44 AM",
        sthapanaDate: "14 September 2026, Monday",
        muhurat: "11:09 AM to 01:35 PM (As per Ujjain Panchang)",
        visarjanDate: "25 September 2026 (Friday - Anant Chaturdashi)",
        mantra: "Om Gam Ganapataye Namah ||",
        shloka: "Vakratunda Mahakaya Suryakoti Samaprabha | Nirvighnam Kuru Me Deva Sarva-Karyeshu Sarvada ||",
        imageKey: "ganesh_poster",
        desc: "Celebrating the divine 10-day festival of Vighnaharta Lord Ganesha from Ganesh Chaturthi to Anant Chaturdashi. Performing Ganpati Sthapana, Riddhi-Siddhi Pujan & Modak Archana at Ujjain Mahakal Dham removes all obstacles from life.",
        samagri: [
          "Lord Ganesha Idol",
          "Red Cloth",
          "Durva Grass (21 or more)",
          "Red Flowers (especially Hibiscus)",
          "Akshat (Sacred Rice)",
          "Sindoor, Chandan, Roli",
          "Modak or Laddoo",
          "Fruits, Sweets, Panchamrit",
          "Dhoop, Deep, Agarbatti",
          "Kalash, Water, Coconut",
          "Paan, Supari, Cardamom",
          "Naivedya & Aarti Items"
        ],
        vidhiSteps: [
          "Clean the Puja space and place a clean red cloth on the wooden platform.",
          "Perform Kalash Sthapana and reverently install Lord Ganesha idol.",
          "Meditate upon Lord Ganesha and take solemn Sankalp.",
          "Perform Panchamrit Abhishek; offer clothes, Chandan, Akshat, flowers & Durva.",
          "Offer fresh Modak or Laddoos as Naivedya.",
          "Perform Ganesha Aarti and chant divine Ganesha mantras.",
          "Pray for family peace, prosperity, good health & removal of obstacles."
        ],
        mahatmya: "Lord Ganesha is the deity of Wisdom, Prosperity, Siddhi, and Good Fortune. Observing Ganesh Chaturthi Vrat & Puja removes all hardships and brings peace and abundance to the household.",
        status: "Ganpati Sthapana & Anushthan Booking Open"
      },
      list: [
        {
          id: "mahashivratri",
          title: "Maha Shivratri Mahapujan & Bhasma Aarti",
          date: "Phalguna Krishna Chaturdashi",
          tithi: "Chaturdashi Tithi",
          muhurat: "4 Prahar Night Puja & Bhasma Aarti",
          imageKey: "rudrabhishek",
          desc: "Celebrating Maha Shivratri at Ujjain Mahakal Dham is divine. Performing Rudrabhishek and Mahamrityunjay Jaap fulfills all desires."
        },
        {
          id: "kaalsarp_fest",
          title: "Nag Panchami & Kaal Sarp Dosh Mahashanti",
          date: "Shravan Shukla Panchami",
          tithi: "Panchami Tithi",
          muhurat: "05:00 AM to 07:00 PM",
          imageKey: "kaalsarp",
          desc: "Nagchandreshwar Temple in Ujjain opens only once a year on Nag Panchami. Kaal Sarp Dosh Puja done on this day offers infinite merits."
        },
        {
          id: "shravan",
          title: "Sacred Shravan Somwar & Parthiv Shivling Pujan",
          date: "Shravan Month (Every Monday)",
          tithi: "Shravan Month",
          muhurat: "Morning & Evening Aarti Time",
          imageKey: "rudrabhishek",
          desc: "Offering Shivling Jalabhishek and performing Parthiv Shivling Pujan during Shravan brings health, peace, and divine grace."
        },
        {
          id: "mangal_fest",
          title: "Bhaumvati Amavasya & Mangal Bhaat Puja Yagya",
          date: "Tuesday Amavasya Tithi",
          tithi: "Amavasya Tithi",
          muhurat: "06:00 AM to 02:00 PM",
          imageKey: "mangal",
          desc: "Performing Mangal Bhaat Puja at Mangalnath Temple Ujjain on Bhaumvati Amavasya eliminates marriage delays and Mangal Dosh."
        },
        {
          id: "pitru_fest",
          title: "Pitru Paksha (Shraddh) & Mahalaya Tarpan Puja",
          date: "Bhadrapad Purnima to Ashwin Amavasya",
          tithi: "16 Days Pitru Paksha",
          muhurat: "Kutap & Rohin Kaal (11:30 AM - 02:30 PM)",
          imageKey: "pitru",
          desc: "Performing Pind Daan, Tarpan & Narayan Bali Anushthan at Siddhavat & Ramghat Ujjain brings peace to ancestors."
        },
        {
          id: "ganesh",
          title: "Ganesh Chaturthi & Riddhi-Siddhi Ganpati Sthapana",
          date: "Bhadrapad Shukla Chaturdashi",
          tithi: "Chaturthi Tithi",
          muhurat: "Midday Shubh Muhurat 11:05 AM - 01:35 PM",
          imageKey: "navgrah",
          desc: "Celebrating 10 days of Lord Ganesha with Modak Archana, Ganpati Atharvashirsha Path, and Riddhi-Siddhi Pujan."
        }
      ]
    },

    // Kundli Form Section
    kundli: {
      badge: "Puja Booking & Guidance",
      heading: "Enter Birth Details",
      subHeading: "Pt. Hariom Sharma Ji will analyze your chart and reply on WhatsApp.",
      formName: "Full Name",
      formNamePlaceholder: "Enter your name",
      formPhone: "Mobile / WhatsApp Number",
      formPhonePlaceholder: "10-digit number",
      formDob: "Date of Birth",
      formTob: "Time of Birth",
      formPob: "Birth Place (City/Village)",
      formGender: "Gender",
      genderMale: "Male",
      genderFemale: "Female",
      formQuery: "Your Query / Puja Details",
      formQueryPlaceholder: "e.g., Kaal Sarp Dosh Puja, Mangal Dosh, Marriage delay...",
      submitBtn: "Send Details on WhatsApp",
      directCall: "Direct Call:"
    },

    // Contact Details
    contactInfo: {
      phone: "+91-9826525736",
      email: "hariomsharma@gmail.com",
      address: "Ramghat Marg, Near Mahakaleshwar Temple, Ujjain (M.P.) 456001",
      homeAddress: "L 04 /2, Shree City, Daudkhedi Ujjain - 456006"
    },

    contact: {
      badge: "Contact Us",
      heading: "Get in Touch with Pt. Hariom Sharma",
      subHeading: "For Puja booking, Kaal Sarp Dosh remedies & Astrology consultation in Ujjain",
      phoneTitle: "Phone Number",
      phoneDesc: "Direct Phone Call",
      whatsappTitle: "WhatsApp Consultation",
      whatsappDesc: "Send a message on WhatsApp",
      pujaAddressTitle: "Main Puja Location (Ujjain Dham)",
      pujaAddressDesc: "Ramghat Marg, Near Mahakaleshwar Temple, Ujjain (M.P.) 456001",
      homeAddressTitle: "Home & Permanent Address",
      homeAddressDesc: "L 04 /2, Shree City, Daudkhedi Ujjain - 456006",
      emailTitle: "Email Address",
      emailDesc: "hariomsharma@gmail.com",
      timingTitle: "Consultation Timings",
      timingDesc: "07:00 AM to 10:00 PM (Daily)",
      sendMessage: "Send Message"
    },

    // Footer
    footer: {
      brandDesc: "Jyotishacharya Pt. Hariom Sharma - Trusted expert in Ujjain Kaal Sarp Dosh Puja & Vedic rituals.",
      quickLinks: "Quick Links",
      ourServices: "Puja Services",
      contactInfo: "Contact Information",
      rights: "All Rights Reserved.",
      designedFor: "Pt. Hariom Sharma"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('hi');

  const toggleLanguage = (newLang) => {
    if (newLang) {
      setLang(newLang);
    } else {
      setLang(prev => prev === 'hi' ? 'en' : 'hi');
    }
  };

  const t = translations[lang] || translations.hi;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
