(function () {
  "use strict";

  const T = {
  "shop": "Suman Thai Glass",
  "janala": "জানালা",
  "dorja": "দরজা",
  "janalaSub": "ফিক্সড ও স্লাইডিং",
  "dorjaSub": "সিঙ্গেল ও স্লাইডিং",
  "fut": "ফুট",
  "inchi": "ইঞ্চি",
  "fixedFrame": "ফিক্সড ফ্রেম",
  "oneGlass": "১ কাঁচ",
  "sliding": "স্লাইডিং",
  "s2": "২ শাটার",
  "s3": "৩ শাটার",
  "s4": "৪ শাটার",
  "doorSingle": "সিঙ্গেল দরজা",
  "oneLeaf": "১ পাতা",
  "doorDouble": "ডাবল দরজা",
  "twoLeaf": "২ পাতা",
  "doorSliding": "স্লাইডিং দরজা",
  "caseLock": "ক্যাসমেন্ট হ্যান্ডেল লক",
  "noLock": "লক নেই",
  "emptyRates": "এখনও কিছু যোগ করা হয়নি।",
  "perSq": "/ফুট²",
  "perFt": "/ফুট",
  "muchun": "মুছুন",
  "outerTB": "বাইরের ফ্রেম - উপর/নিচ (O/H, B)",
  "outerLR": "বাইরের ফ্রেম - বাম/ডান (S/L)",
  "glass": "কাঁচ",
  "shutterTB": "শাটার ফ্রেম",
  "shutterLR": "শাটার ফ্রেম - বাম/ডান",
  "glassEach": "কাঁচ (প্রতিটি শাটার)",
  "parts": "পার্টস",
  "map": "মাপ",
  "songkha": "সংখ্যা",
  "piece": "পিস",
  "sutaUnit": "সুতা",
  "errCompany": "প্রথমে \u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8 থেকে অন্তত একটি কাঁচের কোম্পানি যোগ করুন।",
  "errSize": "উচ্চতা ও প্রস্থ সঠিকভাবে দিন।",
  "cutShow": "কাটিং লিস্ট দেখান",
  "cutHide": "কাটিং লিস্ট লুকান",
  "subtotal": "সাবটোটাল",
  "outerSize": "বাইরের মাপ",
  "glassGap": "গ্লাস গ্যাপ",
  "typeEnterSize": "মাপ লিখুন",
  "taka": "৳",
  "sqLabel": " ফুট²",
  "thickness": "থিকনেস",
  "mm": "মিমি",
  "ti": "টি",
  "kach": "কাঁচ",
  "lock": "লক",
  "perSqftSlash": "/বর্গফুট",
  "net": "মশারি নেট",
  "netNo": "নেই",
  "netYes": "আছে",
  "glassColor": "কাঁচের রং",
  "colorClear": "স্বচ্ছ",
  "colorGreen": "সবুজ",
  "colorBlue": "নীল",
  "colorBronze": "ব্রোঞ্জ",
  "colorGray": "ধূসর",
  "colorBlack": "কালো",
  "colorFrosted": "ফ্রস্টেড",
  "deadbolt": "ডেডবোল্ট",
  "knob": "নব লক",
  "generic": "সাধারণ",
  "dhoron": "ধরন",
  "winTypes": "জানালার ধরন",
  "doorTypes": "দরজার ধরন",
  "errKind": "প্রথমে জানালা বা দরজা সিলেক্ট করুন।",
  "ownerUnlockHint": "স্টাফ ইমেইল ও পিন দিয়ে অ্যাডমিন খুলুন।",
  "ownerPinLabel": "পিন",
  "ownerPinShow": "পিন দেখান",
  "ownerPinHide": "পিন লুকান",
  "ownerOpen": "লগইন",
  "ownerPinBad": "পিন ৪ থেকে ১৫ ডিজিট দিন।",
  "ownerPinWrong": "ইমেইল বা পিন ভুল।",
  "ownerLock": "লক",
  "ownerEmailLabel": "ইমেইল",
  "ownerEmailNeed": "ইমেইল দিন।",
  "ownerPinNeed": "পিন দিন।",
  "ownerEmailBad": "সঠিক ইমেইল দিন।",
  "ownerNeedEmail": "Admin → Staff এ ইমেইল ও পিন সেট করুন।",
  "ownerNeedApi": "অ্যাডমিন → ডাটাবেজ থেকে URL/কী সেট করুন, অথবা SQL সেটআপ রান করুন।",
  "ownerNeedSchema": "অ্যাডমিন → ডাটাবেজ থেকে Schema SQL কপি করে Supabase SQL Editor-এ রান করুন।",
  "ownerNetErr": "সার্ভারে সংযোগ হয়নি। ইন্টারনেট চেক করুন।",
  "ownerSaveFail": "সংরক্ষণ হয়নি।",
  "ownerLocked": "অনেকবার ভুল চেষ্টা। পরে চেষ্টা করুন।",
  "staffLogin": "স্টাফ লগইন",
  "quoteTitle": "মালিককে পাঠান",
  "quoteHint": "নাম ও মোবাইল দিন। কোট সার্ভারে সেভ হবে।",
  "quoteName": "নাম",
  "quotePhone": "মোবাইল",
  "quoteSend": "পাঠান",
  "quoteNameNeed": "নাম দিন।",
  "quotePhoneBad": "সঠিক মোবাইল দিন।",
  "quoteEmpty": "আগে জানালা/দরজা যোগ করুন।",
  "quoteOk": "মালিকের কাছে পাঠানো হয়েছে।",
  "quoteFail": "পাঠানো যায়নি।",
  "quotesTitle": "ভিজিটর কোট",
  "quotesEmpty": "এখনও কোনো কোট আসেনি।",
  "errAlu": "আলুমিনিয়াম কোম্পানি ও থিকনেস সিলেক্ট করুন।",
  "aluShort": "আলুমিনিয়াম",
  "glassThick": "কাঁচের থিকনেস (মিমি)",
  "aluCompany": "আলুমিনিয়াম কোম্পানি",
  "aluThick": "আলুমিনিয়াম থিকনেস",
  "aluRatesTitle": "আলুমিনিয়াম কোম্পানি, থিকনেস ও রং",
  "aluRatesHint": "মিমি টিক করে পাশে ৳/ফুট দাম দিন। হিসাব কাটিং লম্বা (ফুট) × রেট।",
  "aluMmRateLabel": "মিমি রেট (৳/ফুট)",
  "aluMmRatePh": "৳/ফুট",
  "chargesTitle": "নেট ও ইনস্টলেশন রেট",
  "chargesHint": "নেট ও ইনস্টলেশন দুটোই উচ্চতা × প্রস্থ (বর্গফুট) × রেট।",
  "chargeNet": "নেট (টাকা / বর্গফুট)",
  "chargeExtra": "ইনস্টলেশন (টাকা / বর্গফুট)",
  "chargesBadge": "নেট ৳/বর্গ · ইনস্টল ৳/বর্গ",
  "editBtn": "এডিট",
  "updateBtn": "আপডেট",
  "cancelBtn": "বাতিল",
  "addBtn": "যোগ করুন",
  "saveBtn": "সংরক্ষণ",
  "savingBtn": "সংরক্ষণ হচ্ছে...",
  "savedOk": "সংরক্ষণ হয়েছে ✓",
  "addedOk": "যোগ হয়েছে ✓",
  "updatedOk": "আপডেট হয়েছে ✓",
  "deletedOk": "মুছে ফেলা হয়েছে",
  "aluNamePh": "কোম্পানি",
  "aluThickPh": "মিমি",
  "aluRatePh": "রেট",
  "glassThickPh": "মিমি",
  "companyRatesHint": "মিমি টিক করে পাশে দাম দিন — যেমন ৫ মিমি ৳১২০, ৬ মিমি ৳১৪০।",
  "mmRateLabel": "মিমি রেট (৳/বর্গফুট)",
  "mmRatePh": "৳/বর্গফুট",
  "aluColor": "আলুমিনিয়াম রং",
  "aluSilver": "সিলভার",
  "aluWhite": "সাদা",
  "aluChampagne": "শ্যাম্পেন",
  "aluBrown": "বাদামি",
  "catalogEmpty": "ক্যাটালগ খালি — অ্যাডমিন থেকে কাঁচ/আলুমিনিয়াম কোম্পানি যোগ করুন।",
  "selectEmpty": "এখনো যোগ হয়নি",
  "admin": "\u0985\u09cd\u09af\u09be\u09a1\u09ae\u09bf\u09a8",
  "calcTab": "\u0995\u09cd\u09af\u09be\u09b2\u0995\u09c1\u09b2\u09c7\u099f\u09b0",
  "pickHint": "\u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
  "pickAddMm": "মিমি যোগ",
  "pickAddColor": "কালার যোগ",
  "pickRemove": "সরান",
  "working": "\u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u09c1\u09a8...",
  "loading": "\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",
  "tabGlass": "\u0995\u09be\u0981\u099a\u09c7\u09b0 \u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf",
  "tabAlu": "\u0986\u09b2\u09c1\u09ae\u09bf\u09a8\u09bf\u09df\u09be\u09ae",
  "tabLock": "\u09b2\u0995 \u098f\u09b0 \u09a6\u09be\u09ae",
  "tabCharges": "\u09a8\u09c7\u099f \u0993 \u0987\u09a8\u09b8\u09cd\u099f\u09b2",
  "tabStaff": "\u09b8\u09cd\u099f\u09be\u09ab \u0985\u09cd\u09af\u09be\u0995\u09be\u0989\u09a8\u09cd\u099f",
  "tabCut": "\u0995\u09be\u099f\u09bf\u0982 \u09ab\u09b0\u09cd\u09ae\u09c1\u09b2\u09be",
  "tabDb": "ডাটাবেজ",
  "tabQuotes": "\u09ad\u09bf\u099c\u09bf\u099f\u09b0 \u0995\u09cb\u099f",
  "dbTitle": "সুপাবেস ডাটাবেজ",
  "dbHint": "প্রজেক্ট URL ও publishable/anon কী। স্কিমা কপি → SQL Editor-এ পেস্ট। স্টাফ পিন আলাদা (প্রাইভেট ফাইল)।",
  "dbUrlLabel": "Project URL",
  "dbKeyLabel": "Anon / Publishable key",
  "dbConnect": "সেভ ও কানেক্ট",
  "dbTest": "টেস্ট",
  "dbDefaults": "ডিফল্ট প্রজেক্ট",
  "dbReset": "সেভড কনফিগ মুছুন",
  "dbConnected": "কানেক্টেড ✓",
  "dbNotConnected": "কানেক্ট হয়নি",
  "dbTestOk": "কানেকশন ঠিক আছে ✓",
  "dbTestFail": "কানেক্ট ব্যর্থ — URL/কী বা schema চেক করুন।",
  "dbSaved": "ডাটাবেজ কনফিগ সেভ হয়েছে ✓",
  "dbSqlTitle": "SQL সেটআপ (ক্লিপবোর্ড)",
  "dbSqlHint": "শুধু সুপার অ্যাডমিন। Schema কপি → SQL Editor → Run — কোম্পানি/রেট/কোট মুছে না (ফিচার আপডেটেও নিরাপদ)।",
  "dbSqlStep1": "Schema SQL কপি করুন (বারবার রান করা নিরাপদ — ক্যাটালগ মুছে না)।",
  "dbSqlStep2": "Supabase → SQL Editor এ পেস্ট করে Run।",
  "dbSqlStep3": "প্রয়োজন হলে Defaults কপি (দোকান/চার্জ ডিফল্ট)।",
  "dbSqlStep4": "স্টাফ পিন শুধু SQL Editor দিয়ে সেট করুন — পাবলিক কোডে রাখবেন না।",
  "dbCopySchema": "Schema SQL কপি",
  "dbCopySeed": "Defaults SQL কপি",
  "dbDownloadSchema": "Schema ডাউনলোড",
  "dbOpenSql": "SQL Editor খুলুন",
  "dbCopied": "কপি হয়েছে ✓",
  "dbDownloaded": "SQL ফাইল ডাউনলোড হয়েছে ✓",
  "dbCopyFail": "কপি হয়নি — নিচের বক্স থেকে সিলেক্ট করে কপি করুন, অথবা ডাউনলোড চাপুন।",
  "dbGateBtn": "ডাটাবেজ সেটআপ",
  "staffTitle": "স্টাফ অ্যাকাউন্ট",
  "staffHint": "মালিক স্টাফ যোগ করতে পারবেন। সারিতে এডিট চাপলে পিন/রোল ইনলাইনে বদলানো যায়।",
  "staffEmailPh": "ইমেইল",
  "staffPinPh": "পিন ৪-১৫ ডিজিট",
  "roleStaff": "স্টাফ",
  "roleOwner": "মালিক",
  "roleSuperAdmin": "সুপার অ্যাডমিন",
  "staffNeedOwner": "কমপক্ষে একজন মালিক রাখুন।",
  "staffProtectSuper": "সুপার অ্যাডমিন একজনই — যোগ বা মুছা যাবে না।",
  "staffPinChange": "পিন",
  "staffPinHint": "নতুন পিন লিখে যোগ/আপডেট চাপুন। সুপার অ্যাডমিন যে কারো পিন বদলাতে পারে।",
  "staffPinUpdated": "পিন আপডেট হয়েছে।",
  "staffBad": "সঠিক ইমেইল ও ৪-১৫ ডিজিট পিন দিন।",
  "errNeedName": "\u09a8\u09be\u09ae \u09a6\u09bf\u09a8\u0964",
  "errNeedNumber": "\u09b8\u09a0\u09bf\u0995 \u09b8\u0982\u0996\u09cd\u09af\u09be \u09a6\u09bf\u09a8\u0964",
  "errNeedPick": "\u09a5\u09bf\u0995\u09a8\u09c7\u09b8 \u0993 \u09b0\u0982 \u09b8\u09bf\u09b2\u09c7\u0995\u09cd\u099f \u09b0\u09be\u0996\u09c1\u09a8\u0964",
  "cutInfo": "\u0995\u09be\u099f\u09bf\u0982 \u09a4\u09a5\u09cd\u09af",
  "quoteCutClear": "\u09ac\u09b0\u09cd\u09a4\u09ae\u09be\u09a8 \u09a4\u09be\u09b2\u09bf\u0995\u09be",
  "quoteNoCut": "\u098f\u0987 \u0995\u09cb\u099f\u09c7\u09b0 \u09ae\u09be\u09aa \u09a8\u09c7\u0987\u0964",
  "costGlass": "\u0995\u09be\u0981\u099a\u09c7\u09b0 \u09a6\u09be\u09ae",
  "costFrame": "\u09ab\u09cd\u09b0\u09c7\u09ae \u098f\u09b0 \u09a6\u09be\u09ae",
  "costLock": "\u09b2\u0995\u09c7\u09b0 \u09a6\u09be\u09ae",
  "costNet": "\u09ae\u09b6\u09be\u09b0\u09bf \u09a8\u09c7\u099f",
  "costExtra": "\u0987\u09a8\u09b8\u09cd\u099f\u09b2\u09c7\u09b6\u09a8",
  "costTotal": "\u09b8\u09b0\u09cd\u09ac\u09ae\u09cb\u099f",
  "livePrice": "\u09a6\u09be\u09ae\u09c7\u09b0 \u09b9\u09bf\u09b8\u09be\u09ac",
  "printKicker": "\u0995\u09cb\u099f / \u09b9\u09bf\u09b8\u09be\u09ac",
  "printCutKicker": "\u0995\u09be\u099f\u09bf\u0982 \u09b2\u09bf\u09b8\u09cd\u099f",
  "printSub": "\u09a5\u09be\u0987 \u0995\u09be\u0981\u099a \u099c\u09be\u09a8\u09be\u09b2\u09be \u0993 \u09a6\u09b0\u099c\u09be\u09b0 \u09b9\u09bf\u09b8\u09be\u09ac",
  "printDate": "\u09a4\u09be\u09b0\u09bf\u0996",
  "printThanks": "\u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6",
  "printNote": "\u098f\u0987 \u09b9\u09bf\u09b8\u09be\u09ac \u0986\u09a8\u09c1\u09ae\u09be\u09a8\u09bf\u0995\u0964 \u099a\u09c2\u09dc\u09be\u09a8\u09cd\u09a4 \u09a6\u09be\u09ae \u09ae\u09be\u09aa \u0993 \u09ae\u09be\u09b2\u09be\u09ae\u09be\u09b2 \u0985\u09a8\u09c1\u09af\u09be\u09df\u09c0 \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964",
  "printFoldHint": "A5 · A4 অর্ধেক সাইজ (১৪৮×২১০ মিমি)",
  "printCustomer": "\u0997\u09cd\u09b0\u09be\u09b9\u0995",
  "shopSlogan": "Thai glass window & door calculator — see the size and estimate price with visuals",
  "tabHome": "\u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae",
  "homeTitle": "\u09a6\u09cb\u0995\u09be\u09a8\u09c7\u09b0 \u09a4\u09a5\u09cd\u09af",
  "homeHello": "\u09b8\u09cd\u09ac\u09be\u0997\u09a4\u09ae",
  "shopName": "দোকানের নাম",
  "shopSloganLabel": "স্লোগান",
  "shopPhone": "মোবাইল",
  "shopAddress": "ঠিকানা",
  "shopLogo": "লোগো",
  "shopLogoPick": "ছবি বাছুন",
  "shopLogoReset": "ডিফল্ট",
  "shopHint": "নাম, স্লোগান, মোবাইল, ঠিকানা ও লোগো হেডার ও প্রিন্টে দেখাবে।",
  "shopLogoBad": "ছবি পড়া যায়নি।",
  "statQuotes": "\u0995\u09cb\u099f",
  "statToday": "\u0986\u099c\u0995\u09c7\u09b0 \u0995\u09cb\u099f",
  "statGlass": "\u0995\u09be\u0981\u099a \u0995\u09cb\u09ae\u09cd\u09aa\u09be\u09a8\u09bf",
  "statAlu": "\u0986\u09b2\u09c1\u09ae\u09bf\u09a8\u09bf\u09df\u09be\u09ae",
  "statLocks": "\u09b2\u0995",
  "statStaff": "\u09b8\u09cd\u099f\u09be\u09ab",
  "homeQuick": "\u09a6\u09cd\u09b0\u09c1\u09a4 \u0995\u09be\u099c",
  "statusNew": "নতুন",
  "statusCalled": "ফোন করা হয়েছে",
  "statusBooked": "বুকড",
  "statusDelivered": "ডেলিভারি",
  "waCustomer": "কাস্টমারকে WhatsApp",
  "waOwner": "মালিককে WhatsApp",
  "waNow": "WhatsApp কোট",
  "quoteSearchPh": "নাম বা মোবাইল খুঁজুন",
  "quoteLink": "কোট লিংক",
  "quoteLinkCopy": "লিংক কপি",
  "quoteLinkCopied": "কপি হয়েছে",
  "quoteShare": "শেয়ার",
  "quoteShareWa": "WhatsApp",
  "quoteOpenCalc": "ক্যালকুলেটরে খুলুন",
  "quoteDelete": "কোট মুছুন",
  "quoteDeleteConfirm": "এই ভিজিটর কোট মুছে ফেলবেন? ফিরে পাওয়া যাবে না।",
  "quotePrint": "প্রিন্ট / PDF",
  "quoteInvoice": "ইনভয়েস",
  "myQuotesTitle": "আমার কোট খুঁজুন",
  "myQuotesHint": "মোবাইল নম্বর দিয়ে আগের কোট দেখুন ও আবার শেয়ার করুন।",
  "myQuotesPhone": "মোবাইল নম্বর",
  "myQuotesFind": "খুঁজুন",
  "myQuotesEmpty": "এই নম্বরে কোনো কোট পাওয়া যায়নি।",
  "myQuotesNeedPhone": "সঠিক মোবাইল নম্বর দিন।",
  "myQuotesView": "দেখুন",
  "quoteHistory": "এই মোবাইলের আগের কোট",
  "catalogGuide": "প্রথমে অ্যাডমিন → কাঁচের কোম্পানি থেকে রেট যোগ করুন। তারপর আলুমিনিয়াম ও লক।",
  "catalogGuideBtn": "কাঁচ রেট সেটআপ",
  "seasonLabel": "সিজনাল ছাড় (%)",
  "seasonHint": "সব রেটের উপর শতাংশ ছাড় (০ = বন্ধ)।",
  "staffPerf": "স্টাফ হ্যান্ডেল",
  "homeTodayList": "আজকের কোট",
  "homeTodayEmpty": "আজ এখনো কোনো নতুন কোট নেই।",
  "homeTodayAll": "সব কোট দেখুন",
  "homeTodayNew": "নতুন কোট",
  "homeChartStatus": "কোট স্ট্যাটাস",
  "homeChartWeek": "৭ দিনের কোট",
  "homeChartOverview": "সারাংশ",
  "offlineCatalog": "অফলাইন ক্যাটালগ ব্যবহার হচ্ছে",
  "quoteFailDetail": "কোট পাঠানো যায়নি",
  "quoteViewTitle": "আপনার কোট",
  "quoteNotFound": "কোট পাওয়া যায়নি।",
  "quoteItemsTitle": "আইটেম তালিকা",
  "quoteTotalLabel": "মোট",
  "quoteAreaLabel": "মোট বর্গফুট",
  "roomLabel": "রুম / ফ্লোর",
  "roomPh": "যেমনঃ ২য় তলা বেডরুম",
  "updateItem": "আপডেট করুন",
  "addItemBtn": "যোগ করুন ও হিসাব করুন",
  "shopWa": "মালিকের WhatsApp",
  "shopWaHint": "নতুন কোট এলে এই নম্বরে অ্যালার্ট যাবে।",
  "assignStaff": "স্টাফ",
  "assignNone": "অ্যাসাইন নেই",
  "quoteShareTitle": "কাস্টমারকে পাঠান",
  "qtyLabel": "পরিমাণ (সংখ্যা)",
  "hLabel": "উচ্চতা (ইঞ্চি.সুতা)",
  "wLabel": "প্রস্থ (ইঞ্চি.সুতা)",
  "heightOnly": "উচ্চতা",
  "widthOnly": "প্রস্থ",
  "autoMapTitle": "অটোমেটিক মাপ",
  "glassPerPiece": "গ্লাস (প্রতি পিস)",
  "glassCountLabel": "গ্লাসের সংখ্যা",
  "pieceCut": "পিচ",
  "glassCompany": "কাঁচের কোম্পানি",
  "lockType": "লক এর ধরন",
  "addCardTitle": "নতুন জানালা / দরজা যোগ করুন",
  "previewTitle": "ভিজুয়াল প্রিভিউ",
  "previewKind": "ধরন",
  "previewModel": "মডেল",
  "previewSize": "মাপ",
  "previewColor": "রং",
  "previewLock": "লক",
  "previewNet": "নেট",
  "previewCaption": "উচ্চতা ও প্রস্থ লিখলে ছবির অনুপাত বদলাবে  -  কাস্টমার সহজে বুঝতে পারবেন।",
  "listTitle": "জানালা / দরজার তালিকা",
  "emptyItems": "এখনও কোনো জানালা বা দরজা যোগ করা হয়নি।",
  "sumSqft": "মোট বর্গফুট",
  "sumGlass": "কাঁচের দাম",
  "sumLock": "লকের দাম",
  "sumFrame": "ফ্রেম এর দাম",
  "sumNet": "মশারি নেট",
  "sumExtra": "ইনস্টলেশন / অন্যান্য",
  "sumTotal": "সর্বমোট",
  "clearList": "তালিকা খালি করুন",
  "printPdf": "প্রিন্ট / PDF",
  "cutTitle": "মিস্ত্রির জন্য কাটিং লিস্ট",
  "navCalc": "ক্যালকুলেটর",
  "navCut": "কাটিং",
  "installBtn": "ইনস্টল",
  "closeBtn": "বন্ধ করুন",
  "quotesOf": "কোট",
  "outerSide": "আউটার সাইড",
  "shutterLock": "সাটার লক",
  "shutterBottom": "সাটার বটম",
  "shutterTop": "সাটার টপ",
  "interLock": "ইন্টার লক",
  "outerBottomHi": "আউটার বটম হাই",
  "outerTopPart": "আউটার টপ",
  "cutCalcTitle": "কাটিং হিসাব",
  "cutCalcHint": "উচ্চতা ও প্রস্থ দিয়ে কাটিং মাপ বের করুন। লগইন লাগবে না।",
  "cutSutaNote": "৮ সুতা = ১ ইঞ্চি · যেমন ৫৪.২ = ৫৪ ইঞ্চি ২ সুতা",
  "sutaHint": "৮ সুতা = ১ ইঞ্চি",
  "cutShutters": "শাটার",
  "cutCalcBtn": "হিসাব করুন",
  "cutAddBtn": "কাটিং লিস্টে যোগ করুন",
  "cutResetBtn": "রিসেট / নতুন",
  "cutAddedNote": "কাটিং লিস্টে যোগ হয়েছে।",
  "cutUserSize": "ইউজার এর মাপ",
  "cutListHint": "প্রতিটি জানালা/দরজার জন্য কোনো পার্টস কতটুকু মাপে কাটতে হবে তার তালিকা।",
  "cutListWarn": "একটা সাধারণ হিসাব - প্রোফাইল অনুযায়ী প্রকৃত মাপ কিছুটা ভিন্ন হতে পারে।",
  "cutBlock": "ব্লক",
  "cpOuterLabel": "আউটার টপ/বটম কমতি (0.4 = 4 সুতা)",
  "cpSideLabel": "সাটার/ইন্টার লক কমতি (1.1)",
  "cpShutterLabel": "শাটার টপ/বটম প্রস্থ কমতি (6)",
  "cpGlassHLabel": "গ্লাস উচ্চতা কমতি (4.2)",
  "cpGlassWLabel": "গ্লাস প্রস্থ কমতি (5)",
  "cutGroupFrame": "ফ্রেম / অ্যালুমিনিয়াম",
  "cutGroupGlass": "কাঁচ",
  "cutFormulaBadge": "ইঞ্চি.সুতা",
  "cutFormulaHint": "মান ইঞ্চি।সুতা ফরম্যাটে। দশমিকের পরে সুতা।",
  "cutFormulaNote": "উদাহরণ: হাইট ৫৪, প্রস্থ ৬০ — দুই শাটার।"
};
  const EN = {
    shop: "Suman Thai Glass",
    janala: "Window",
    dorja: "Door",
    janalaSub: "Fixed & sliding",
    dorjaSub: "Single & sliding",
    fut: "ft",
    inchi: "in",
    fixedFrame: "Fixed frame",
    oneGlass: "1 glass",
    sliding: "Sliding",
    s2: "2 shutters",
    s3: "3 shutters",
    s4: "4 shutters",
    doorSingle: "Single door",
    oneLeaf: "1 leaf",
    doorDouble: "Double door",
    twoLeaf: "2 leaves",
    doorSliding: "Sliding door",
    caseLock: "Casement handle lock",
    noLock: "No lock",
    emptyRates: "Nothing added yet.",
    perSq: "/sqft",
    perFt: "/ft",
    muchun: "Delete",
    outerTB: "Outer frame - top/bottom (O/H, B)",
    outerLR: "Outer frame - left/right (S/L)",
    glass: "Glass",
    shutterTB: "Shutter frame",
    shutterLR: "Shutter frame - left/right",
    glassEach: "Glass (each shutter)",
    parts: "Parts",
    map: "Size",
    songkha: "Qty",
    piece: "pcs",
    sutaUnit: "suta",
    errCompany: "Add at least one glass company from Admin first.",
    errSize: "Enter height and width correctly.",
    cutShow: "Show cutting list",
    cutHide: "Hide cutting list",
    subtotal: "Subtotal",
    outerSize: "Outer size",
    glassGap: "Glass gap",
    typeEnterSize: "Enter size",
    taka: "Tk ",
    sqLabel: " sqft",
    thickness: "Thickness",
    mm: "mm",
    ti: "pcs",
    kach: "Glass",
    lock: "Lock",
    perSqftSlash: "/sqft",
    net: "Mosquito net",
    netNo: "No",
    netYes: "Yes",
    glassColor: "Glass color",
    colorClear: "Clear",
    colorGreen: "Green",
    colorBlue: "Blue",
    colorBronze: "Bronze",
    colorGray: "Gray",
    colorBlack: "Black",
    colorFrosted: "Frosted",
    deadbolt: "Deadbolt",
    knob: "Knob lock",
    generic: "Generic",
    dhoron: "Type",
    winTypes: "Window types",
    doorTypes: "Door types",
    errKind: "Select window or door first.",
    ownerUnlockHint: "Sign in with staff email and PIN to open Admin.",
    ownerPinLabel: "PIN",
    ownerPinShow: "Show PIN",
    ownerPinHide: "Hide PIN",
    ownerOpen: "Sign in",
    ownerPinBad: "PIN must be 4 to 15 digits.",
    ownerPinWrong: "Wrong email or PIN.",
    ownerLock: "Lock",
    ownerEmailLabel: "Email",
    ownerEmailNeed: "Enter email.",
    ownerPinNeed: "Enter PIN.",
    ownerEmailBad: "Enter a valid email.",
    ownerNeedEmail: "Set email and PIN in Admin → Staff.",
    ownerNeedApi: "Set URL/key in Admin → Database, or run the SQL setup.",
    ownerNeedSchema: "Copy Schema SQL from Admin → Database and run it in the Supabase SQL Editor.",
    ownerNetErr: "Could not reach the server. Check internet.",
    ownerSaveFail: "Save failed.",
    ownerLocked: "Too many wrong tries. Try later.",
    staffLogin: "Staff login",
    quoteTitle: "Send to owner",
    quoteHint: "Enter name and mobile. The quote is saved on the server.",
    quoteName: "Name",
    quotePhone: "Mobile",
    quoteSend: "Send",
    quoteNameNeed: "Enter a name.",
    quotePhoneBad: "Enter a valid mobile number.",
    quoteEmpty: "Add a window or door first.",
    quoteOk: "Sent to the owner.",
    quoteFail: "Could not send.",
    quotesTitle: "Visitor quotes",
    quotesEmpty: "No quotes yet.",
    errAlu: "Select aluminium company and thickness.",
    aluShort: "Aluminium",
    glassThick: "Glass thickness (mm)",
    aluCompany: "Aluminium company",
    aluThick: "Aluminium thickness",
    aluRatesTitle: "Aluminium company, thickness and color",
    aluRatesHint: "Tick each mm and enter ৳/ft beside it. Cost = cutting length (ft) × rate.",
    aluMmRateLabel: "mm rate (৳/ft)",
    aluMmRatePh: "৳/ft",
    chargesTitle: "Net and installation rates",
    chargesHint: "Net and installation both = height × width (sqft) × rate.",
    chargeNet: "Net (Tk / sqft)",
    chargeExtra: "Installation (Tk / sqft)",
    chargesBadge: "Net ৳/sqft · Install ৳/sqft",
    editBtn: "Edit",
    updateBtn: "Update",
    cancelBtn: "Cancel",
    addBtn: "Add",
    saveBtn: "Save",
    savingBtn: "Saving...",
    savedOk: "Saved ✓",
    addedOk: "Added ✓",
    updatedOk: "Updated ✓",
    deletedOk: "Deleted",
    aluNamePh: "Company",
    aluThickPh: "mm",
    aluRatePh: "Rate",
    glassThickPh: "mm",
    companyRatesHint: "Tick each mm and enter the price beside it — e.g. 5mm ৳120, 6mm ৳140.",
    mmRateLabel: "mm rate (৳/sqft)",
    mmRatePh: "৳/sqft",
    aluColor: "Aluminium color",
    aluSilver: "Silver",
    aluWhite: "White",
    aluChampagne: "Champagne",
    aluBrown: "Brown",
    catalogEmpty: "Catalog is empty — add glass/aluminium companies in Admin.",
    selectEmpty: "Nothing added yet",
    admin: "Admin",
    calcTab: "Calculator",
    pickHint: "Choose",
    pickAddMm: "Add mm",
    pickAddColor: "Add color",
    pickRemove: "Remove",
    working: "Working...",
    loading: "Loading...",
    tabGlass: "Glass companies",
    tabAlu: "Aluminium",
    tabLock: "Lock prices",
    tabCharges: "Net and install",
    tabStaff: "Staff accounts",
    tabCut: "Cutting formula",
    tabDb: "Database",
    tabQuotes: "Visitor quotes",
    dbTitle: "Supabase database",
    dbHint: "Project URL and publishable/anon key. Copy schema → paste in SQL Editor. Staff PIN stays in private files.",
    dbUrlLabel: "Project URL",
    dbKeyLabel: "Anon / Publishable key",
    dbConnect: "Save & connect",
    dbTest: "Test",
    dbDefaults: "Default project",
    dbReset: "Clear saved config",
    dbConnected: "Connected ✓",
    dbNotConnected: "Not connected",
    dbTestOk: "Connection OK ✓",
    dbTestFail: "Connect failed — check URL/key or schema.",
    dbSaved: "Database config saved ✓",
    dbSqlTitle: "SQL setup (clipboard)",
    dbSqlHint: "Super Admin only. Copy Schema → SQL Editor → Run — does not wipe companies/rates/quotes (safe on updates).",
    dbSqlStep1: "Copy Schema SQL (safe to re-run — never wipes catalog).",
    dbSqlStep2: "Paste in Supabase → SQL Editor and Run.",
    dbSqlStep3: "Optional: copy Defaults (shop/charges defaults).",
    dbSqlStep4: "Set staff PIN only via SQL Editor — never in public code.",
    dbCopySchema: "Copy schema SQL",
    dbCopySeed: "Copy defaults SQL",
    dbDownloadSchema: "Download schema",
    dbOpenSql: "Open SQL Editor",
    dbCopied: "Copied ✓",
    dbDownloaded: "SQL file downloaded ✓",
    dbCopyFail: "Copy failed — select from the box below, or tap Download.",
    dbGateBtn: "Database setup",
    staffTitle: "Staff accounts",
    staffHint: "Owner can add staff. Tap Edit on a row to change PIN/role inline.",
    staffEmailPh: "Email",
    staffPinPh: "PIN 4-15 digits",
    roleStaff: "Staff",
    roleOwner: "Owner",
    roleSuperAdmin: "Super Admin",
    staffNeedOwner: "Keep at least one owner.",
    staffProtectSuper: "Only one Super Admin — cannot add or remove.",
    staffPinChange: "PIN",
    staffPinHint: "Enter the new PIN and tap Add/Update. Super Admin can change anyone's PIN.",
    staffPinUpdated: "PIN updated.",
    staffBad: "Enter a valid email and 4-15 digit PIN.",
    errNeedName: "Enter a name.",
    errNeedNumber: "Enter a valid number.",
    errNeedPick: "Select thickness and color.",
    cutInfo: "Cutting details",
    quoteCutClear: "Current list",
    quoteNoCut: "This quote has no size.",
    costGlass: "Glass cost",
    costFrame: "Frame cost",
    costLock: "Lock cost",
    costNet: "Mosquito net",
    costExtra: "Installation",
    costTotal: "Total",
    livePrice: "Price estimate",
    printKicker: "Quote / estimate",
    printCutKicker: "Cutting list",
    printSub: "Thai glass window and door estimate",
    printDate: "Date",
    printThanks: "Thank you",
    printNote: "This is an estimate. Final price depends on measurement and materials.",
    printFoldHint: "A5 · half of A4 (148×210 mm)",
    printCustomer: "Customer",
    shopSlogan: "Thai glass window & door calculator — see the size and estimate price with visuals",
    tabHome: "Home",
    homeTitle: "Shop details",
    homeHello: "Welcome",
    shopName: "Shop name",
    shopSloganLabel: "Slogan",
    shopPhone: "Mobile",
    shopAddress: "Address",
    shopLogo: "Logo",
    shopLogoPick: "Choose image",
    shopLogoReset: "Default",
    shopHint: "Name, slogan, mobile, address and logo show in the header and print.",
    shopLogoBad: "Image is too large.",
    statQuotes: "Quotes",
    statToday: "Today's quotes",
    statGlass: "Glass companies",
    statAlu: "Aluminium",
    statLocks: "Locks",
    statStaff: "Staff",
    homeQuick: "Quick actions",
    statusNew: "New",
    statusCalled: "Called",
    statusBooked: "Booked",
    statusDelivered: "Delivered",
    waCustomer: "WhatsApp customer",
    waOwner: "WhatsApp owner",
    waNow: "WhatsApp quote",
    quoteSearchPh: "Search name or mobile",
    quoteLink: "Quote link",
    quoteLinkCopy: "Copy link",
    quoteLinkCopied: "Copied",
    quoteShare: "Share",
    quoteShareWa: "WhatsApp",
    quoteOpenCalc: "Open in calculator",
    quoteDelete: "Delete quote",
    quoteDeleteConfirm: "Delete this visitor quote? This cannot be undone.",
    quotePrint: "Print / PDF",
    quoteInvoice: "Invoice",
    myQuotesTitle: "Find my quote",
    myQuotesHint: "Enter your mobile to view past quotes and share again.",
    myQuotesPhone: "Mobile number",
    myQuotesFind: "Search",
    myQuotesEmpty: "No quotes found for this number.",
    myQuotesNeedPhone: "Enter a valid mobile number.",
    myQuotesView: "View",
    quoteHistory: "Earlier quotes for this mobile",
    catalogGuide: "First add glass company rates in Admin → Glass. Then aluminium and locks.",
    catalogGuideBtn: "Set up glass rates",
    seasonLabel: "Seasonal discount (%)",
    seasonHint: "Percent off all rates (0 = off).",
    staffPerf: "Staff handled",
    homeTodayList: "Today's quotes",
    homeTodayEmpty: "No new quotes today yet.",
    homeTodayAll: "View all quotes",
    homeTodayNew: "New quotes",
    homeChartStatus: "Quote status",
    homeChartWeek: "Quotes · 7 days",
    homeChartOverview: "Overview",
    offlineCatalog: "Using offline catalog",
    quoteFailDetail: "Could not send quote",
    quoteViewTitle: "Your quote",
    quoteNotFound: "Quote not found.",
    quoteItemsTitle: "Items",
    quoteTotalLabel: "Total",
    quoteAreaLabel: "Total sqft",
    roomLabel: "Room / floor",
    roomPh: "e.g. 2nd floor bedroom",
    updateItem: "Update item",
    addItemBtn: "Add and calculate",
    shopWa: "Owner WhatsApp",
    shopWaHint: "New quotes will alert this number.",
    assignStaff: "Staff",
    assignNone: "Unassigned",
    quoteShareTitle: "Send to customer",
    qtyLabel: "Quantity",
    hLabel: "Height (inch.suta)",
    wLabel: "Width (inch.suta)",
    heightOnly: "Height",
    widthOnly: "Width",
    autoMapTitle: "Automatic size",
    glassPerPiece: "Glass (per piece)",
    glassCountLabel: "Glass count",
    pieceCut: "pcs",
    glassCompany: "Glass company",
    lockType: "Lock type",
    addCardTitle: "Add a new window / door",
    previewTitle: "Live preview",
    previewKind: "Kind",
    previewModel: "Model",
    previewSize: "Size",
    previewColor: "Color",
    previewLock: "Lock",
    previewNet: "Net",
    previewCaption: "The picture ratio changes with height and width so the customer can see it.",
    listTitle: "Window / door list",
    emptyItems: "No window or door added yet.",
    sumSqft: "Total sqft",
    sumGlass: "Glass cost",
    sumLock: "Lock cost",
    sumFrame: "Frame cost",
    sumNet: "Mosquito net",
    sumExtra: "Installation / other",
    sumTotal: "Grand total",
    clearList: "Clear list",
    printPdf: "Print / PDF",
    cutTitle: "Cutting list for the fitter",
    navCalc: "Calculator",
    navCut: "Cutting",
    installBtn: "Install",
    closeBtn: "Close",
    quotesOf: "quotes",
    outerSide: "Outer side",
    shutterLock: "Shutter lock",
    shutterBottom: "Shutter bottom",
    shutterTop: "Shutter top",
    interLock: "Inter lock",
    outerBottomHi: "Outer bottom",
    outerTopPart: "Outer top",
    cutCalcTitle: "Cutting calculator",
    cutCalcHint: "Enter height and width to get cutting sizes. No login needed.",
    cutSutaNote: "8 suta = 1 inch · e.g. 54.2 = 54 inch 2 suta",
    sutaHint: "8 suta = 1 inch",
    cutShutters: "Shutters",
    cutCalcBtn: "Calculate",
    cutAddBtn: "Add to cutting list",
    cutResetBtn: "Reset / New",
    cutAddedNote: "Added to the cutting list.",
    cutUserSize: "Your size",
    cutListHint: "Part sizes for each window/door in the list.",
    cutListWarn: "Guide sizes only — real cuts may differ by profile.",
    cutBlock: "Block",
    cpOuterLabel: "Outer top/bottom deduct (0.4 = 4 suta)",
    cpSideLabel: "Shutter/inter lock deduct (1.1)",
    cpShutterLabel: "Shutter T/B width deduct (6)",
    cpGlassHLabel: "Glass height deduct (4.2)",
    cpGlassWLabel: "Glass width deduct (5)",
    cutGroupFrame: "Frame / aluminium",
    cutGroupGlass: "Glass",
    cutFormulaBadge: "inch.suta",
    cutFormulaHint: "Values use inch.suta format. Digits after the point are suta.",
    cutFormulaNote: "Example: height 54, width 60 — 2 shutters."
  };
  const BN = {};
  Object.keys(T).forEach(function (k) { BN[k] = T[k]; });

  const KEYS = {
    items: "glasscalc:items",
    cutItems: "glasscalc:cutItems",
    tab: "glasscalc:tab",
    session: "glasscalc:session",
    adminPanel: "glasscalc:adminPanel",
    shop: "glasscalc:shop",
    lang: "glasscalc:lang",
    catalogCache: "glasscalc:catalogCache"
  };

  const PRODUCT_TYPES = {
    windows: [
      { id: "fixed", label: T.fixedFrame, sub: T.oneGlass, image: "images/window-fixed.svg", shutters: 1, kind: "window" },
      { id: "sliding2", label: T.sliding, sub: T.s2, image: "images/window-sliding2.svg", shutters: 2, kind: "window" },
      { id: "sliding3", label: T.sliding, sub: T.s3, image: "images/window-sliding3.svg", shutters: 3, kind: "window" },
      { id: "sliding4", label: T.sliding, sub: T.s4, image: "images/window-sliding4.svg", shutters: 4, kind: "window" }
    ],
    doors: [
      { id: "door-single", label: T.doorSingle, sub: T.oneLeaf, image: "images/door-single.svg", shutters: 1, kind: "door" },
      { id: "door-double", label: T.doorDouble, sub: T.twoLeaf, image: "images/door-double.svg", shutters: 2, kind: "door" },
      { id: "door-sliding", label: T.doorSliding, sub: T.s2, image: "images/door-sliding.svg", shutters: 2, kind: "door" },
      { id: "door-sliding3", label: T.doorSliding, sub: T.s3, image: "images/door-sliding3.svg", shutters: 3, kind: "door" }
    ]
  };
  const ALL_TYPES = [...PRODUCT_TYPES.windows, ...PRODUCT_TYPES.doors];

  const GLASS_COLORS = [
    { id: "clear", labelKey: "colorClear", light: "#e8f6fb", mid: "#7ebfd6", dark: "#c5e4ef" },
    { id: "green", labelKey: "colorGreen", light: "#d9f5e3", mid: "#4e9a66", dark: "#9fd4ae" },
    { id: "blue", labelKey: "colorBlue", light: "#d4e8ff", mid: "#3d6fbe", dark: "#8fb4e8" },
    { id: "bronze", labelKey: "colorBronze", light: "#f3e0c8", mid: "#a86a38", dark: "#d4b089" },
    { id: "gray", labelKey: "colorGray", light: "#e4e8eb", mid: "#6b757c", dark: "#b0b8be" },
    { id: "black", labelKey: "colorBlack", light: "#6b7280", mid: "#1a222b", dark: "#4b5563" },
    { id: "frosted", labelKey: "colorFrosted", light: "#f7f8f9", mid: "#c5ccd1", dark: "#e6eaed" }
  ];

  const ALU_COLORS = [
    { id: "silver", labelKey: "aluSilver", light: "#eef2f4", mid: "#9aa8b0", dark: "#5e6d76" },
    { id: "bronze", labelKey: "colorBronze", light: "#e8d0b0", mid: "#a86a38", dark: "#6b4220" },
    { id: "black", labelKey: "colorBlack", light: "#6b7280", mid: "#1a222b", dark: "#111827" },
    { id: "white", labelKey: "aluWhite", light: "#ffffff", mid: "#e5e7eb", dark: "#9ca3af" },
    { id: "champagne", labelKey: "aluChampagne", light: "#f3e6c8", mid: "#c4a574", dark: "#8a7048" },
    { id: "brown", labelKey: "aluBrown", light: "#d4b896", mid: "#7a4e2e", dark: "#4a2e1a" }
  ];

  const DEFAULT_CUT = { outerHoriz: 0.4, side: 1.1, shutterHoriz: 6, glassH: 4.2, glassW: 5 };

  const state = {
    companies: [],
    locks: [],
    aluminium: [],
    glassThicks: [],
    charges: { net: 0, extra: 0, seasonPct: 0 },
    items: [],
    cutItems: [],
    cutParams: { ...DEFAULT_CUT },
    selectedKind: "window",
    selectedType: "sliding2",
    cutKind: "window",
    cutType: "sliding2",
    glassColor: "clear",
    aluColor: "silver",
    hasNet: false,
    ownerPin: "",
    ownerEmail: "",
    ownerUnlocked: false,
    role: "",
    quotes: [],
    staff: [],
    edit: { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], thickExtras: [], colors: [], colorExtras: [], outs: [] },
    adminPick: {
      companyThicks: [5],
      companyThickExtras: [],
      companyColors: ["clear"],
      companyColorExtras: [],
      companyRates: {},
      aluThicks: [1],
      aluThickExtras: [],
      aluColors: ["silver"],
      aluColorExtras: [],
      aluRates: {}
    },
    shop: { name: "", slogan: "", logo: "", phone: "", address: "" },
    adminPanel: "home",
    quoteOpenId: "",
    cutQuote: null,
    lang: "bn",
    editItemIndex: -1,
    quoteSearch: "",
    myQuotes: []
  };

  let homeChartInstances = { overview: null, week: null };

  const $ = (id) => document.getElementById(id);

  function applyLang(lang, skipRender) {
    state.lang = lang === "en" ? "en" : "bn";
    const src = state.lang === "en" ? EN : BN;
    Object.keys(BN).forEach(function (k) { T[k] = src[k] != null ? src[k] : BN[k]; });
    Object.keys(src).forEach(function (k) { if (T[k] == null) T[k] = src[k]; });
    storeSet(KEYS.lang, state.lang);
    document.documentElement.lang = state.lang === "en" ? "en" : "bn";
    document.documentElement.classList.toggle("lang-en", state.lang === "en");
    if ($("btn-lang")) $("btn-lang").textContent = state.lang === "en" ? "বাংলা" : "EN";
    refreshTypeLabels();
    if (!skipRender) {
      fillQuoteLabels();
      renderKindPicker();
      renderTypePicker();
      renderCutKindPicker();
      renderCutTypePicker();
      refreshCatalogSelects();
      renderItems();
      renderCuttingTab();
      renderLivePreview(true);
      renderCutPreview(true);
      updateAddItemBtn();
    }
  }

  function refreshTypeLabels() {
    const w = PRODUCT_TYPES.windows;
    const d = PRODUCT_TYPES.doors;
    if (!w || !d) return;
    w[0].label = T.fixedFrame; w[0].sub = T.oneGlass;
    w[1].label = T.sliding; w[1].sub = T.s2;
    w[2].label = T.sliding; w[2].sub = T.s3;
    w[3].label = T.sliding; w[3].sub = T.s4;
    d[0].label = T.doorSingle; d[0].sub = T.oneLeaf;
    d[1].label = T.doorDouble; d[1].sub = T.twoLeaf;
    d[2].label = T.doorSliding; d[2].sub = T.s2;
    d[3].label = T.doorSliding; d[3].sub = T.s3;
  }

  function fillCalcLabels() {
    const set = function (id, text) { if ($(id)) $(id).textContent = text; };
    set("qty-label", T.qtyLabel);
    set("room-label", T.roomLabel);
    if ($("in-room")) $("in-room").placeholder = T.roomPh;
    set("h-label", T.hLabel);
    set("w-label", T.wLabel);
    set("calc-suta-hint", T.cutSutaNote);
    set("cut-suta-hint", T.cutSutaNote);
    set("glass-company-label", T.glassCompany);
    set("glass-color-label", T.glassColor);
    set("lock-type-label", T.lockType);
    set("net-label", T.net);
    set("btn-net-no", T.netNo);
    set("btn-net-yes", T.netYes);
    setHeading("add-card-title", T.addCardTitle);
    setHeading("preview-title", T.previewTitle);
    setHeading("list-title", T.listTitle);
    setHeading("cut-title", T.cutTitle);
    setHeading("cut-calc-title", T.cutCalcTitle);
    setHeading("cut-preview-title", T.previewTitle);
    set("cut-qty-label", T.qtyLabel);
    set("cut-room-label", T.roomLabel);
    if ($("cut-room")) $("cut-room").placeholder = T.roomPh;
    set("cut-h-label", T.hLabel);
    set("cut-w-label", T.wLabel);
    set("cut-meta-kind-l", T.previewKind);
    set("cut-meta-type-l", T.previewModel);
    set("cut-meta-size-l", T.previewSize);
    set("cut-preview-caption", T.previewCaption);
    set("btn-cut-calc-label", T.cutCalcBtn);
    set("btn-cut-add-label", T.cutAddBtn);
    set("btn-cut-reset-label", T.cutResetBtn);
    set("btn-calc-reset-label", T.cutResetBtn);
    set("cut-list-hint", T.cutListHint);
    set("cut-list-warn", T.cutListWarn);
    set("empty-note", T.emptyItems);
    set("cutting-empty", T.emptyItems);
    set("cp-outer-label", T.cpOuterLabel);
    set("cp-side-label", T.cpSideLabel);
    set("cp-shutter-label", T.cpShutterLabel);
    set("cp-glassh-label", T.cpGlassHLabel);
    set("cp-glassw-label", T.cpGlassWLabel);
    set("cut-group-frame", T.cutGroupFrame);
    set("cut-group-glass", T.cutGroupGlass);
    set("cut-formula-hint", T.cutFormulaHint);
    set("cut-formula-note", T.cutFormulaNote);
    if ($("cut-formula-badge")) $("cut-formula-badge").textContent = T.cutFormulaBadge;
    if ($("btn-save-cut-label")) $("btn-save-cut-label").textContent = T.saveBtn;
    setHeading("cut-formula-title", T.tabCut);
    set("sum-sqft-label", T.sumSqft);
    set("sum-glass-label", T.sumGlass);
    set("sum-lock-label", T.sumLock);
    set("sum-frame-label", T.sumFrame);
    set("sum-net-label", T.sumNet);
    set("sum-extra-label", T.sumExtra);
    set("sum-total-label", T.sumTotal);
    set("btn-clear-label", T.clearList);
    set("btn-print-label", T.printPdf);
    set("btn-print-cut-label", T.printPdf);
    set("install-label", T.installBtn);
    if ($("btn-install")) {
      $("btn-install").title = T.installBtn;
      $("btn-install").setAttribute("aria-label", T.installBtn);
    }
    if ($("btn-staff-login")) {
      $("btn-staff-login").title = T.staffLogin;
      $("btn-staff-login").setAttribute("aria-label", T.staffLogin);
    }
    set("nav-calc-label", T.navCalc);
    set("nav-cut-label", T.navCut);
    set("quote-share-title", T.quoteShareTitle);
    set("btn-copy-link", T.quoteLinkCopy);
    if ($("quote-search")) $("quote-search").placeholder = T.quoteSearchPh;
    if ($("btn-cancel-item")) $("btn-cancel-item").textContent = T.cancelBtn;
    if ($("btn-quote-view-close")) $("btn-quote-view-close").textContent = T.closeBtn;
    if ($("quote-view-title")) $("quote-view-title").textContent = T.quoteViewTitle;
    setHeading("my-quotes-title", T.myQuotesTitle);
    if ($("my-quotes-hint")) $("my-quotes-hint").textContent = T.myQuotesHint;
    if ($("my-quotes-phone-label")) $("my-quotes-phone-label").textContent = T.myQuotesPhone;
    if ($("btn-find-quotes-label")) $("btn-find-quotes-label").textContent = T.myQuotesFind;
    updateAddItemBtn();
  }

  function statusLabel(s) {
    const v = String(s || "new").toLowerCase();
    if (v === "called") return T.statusCalled;
    if (v === "booked") return T.statusBooked;
    if (v === "delivered") return T.statusDelivered;
    return T.statusNew;
  }

  function quotePublicUrl(id) {
    const base = String(location.origin + location.pathname).replace(/index\.html$/i, "");
    return base + (base.charAt(base.length - 1) === "/" ? "" : "/") + "?q=" + encodeURIComponent(id);
  }

  function waPhoneDigits(phone) {
    let n = String(phone || "").replace(/\D/g, "");
    if (!n) return "";
    if (n.indexOf("88") === 0) return n;
    if (n.length === 11 && n.charAt(0) === "0") return "88" + n;
    if (n.length === 10) return "880" + n;
    return n;
  }

  function quoteShareText(row) {
    if (!row || !row.id) return "";
    const bits = [];
    if (row.name) bits.push(row.name);
    bits.push(T.quoteInvoice + " " + row.id);
    const tot = quoteTotal(row);
    if (tot) bits.push(money(tot));
    return bits.join(" · ") + "\n" + quotePublicUrl(row.id);
  }

  function copyTextFlash(text, okMsg) {
    const msg = okMsg || T.quoteLinkCopied;
    const done = function () { flashNote(msg, false); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          done();
        } catch (_) { /* ignore */ }
      });
    } else {
      done();
    }
  }

  function copyQuoteById(id) {
    if (!id) return;
    copyTextFlash(quotePublicUrl(id));
  }

  function shareQuoteWhatsApp(id) {
    const row = findQuoteAnywhere(id);
    if (!row) return;
    const text = quoteShareText(row);
    const phone = waPhoneDigits(row.phone);
    const url = phone
      ? "https://wa.me/" + phone + "?text=" + encodeURIComponent(text)
      : "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function shareQuoteNative(id) {
    const row = findQuoteAnywhere(id);
    if (!row) return;
    const url = quotePublicUrl(row.id);
    const text = quoteShareText(row);
    if (navigator.share) {
      navigator.share({ title: T.quoteViewTitle, text: text, url: url }).catch(function () {});
      return;
    }
    copyQuoteById(id);
  }

  function findQuoteAnywhere(id) {
    const fromStaff = (state.quotes || []).find(function (x) { return x.id === id; });
    if (fromStaff) return fromStaff;
    return (state.myQuotes || []).find(function (x) { return x.id === id; }) || null;
  }

  function phoneKey(p) {
    let n = String(p || "").replace(/\D/g, "");
    if (n.indexOf("88") === 0 && n.length > 11) n = n.slice(2);
    return n;
  }

  function feetParts(ft) {
    const safe = Math.max(0, Number(ft) || 0);
    let totalSuta = Math.round(safe * 12 * 8);
    let wholeFt = Math.floor(totalSuta / 96);
    totalSuta -= wholeFt * 96;
    let inch = Math.floor(totalSuta / 8);
    let suta = totalSuta % 8;
    if (inch >= 12) {
      wholeFt += Math.floor(inch / 12);
      inch = inch % 12;
    }
    return { ft: wholeFt, inch: inch, suta: suta };
  }


  function formatInchSutaInput(ft) {
    const n = ftToInchSuta(ft);
    const a = Math.abs(Number(n) || 0);
    const inch = Math.floor(a + 1e-9);
    const suta = Math.round((a - inch) * 10);
    return suta > 0 ? (inch + "." + suta) : String(inch);
  }

  function inchSutaInputToFeet(raw) {
    return toSuta(raw) / 96;
  }

  function fillSizeInputs(axis, ft) {
    const a = axis === "w" ? "w" : "h";
    const el = $("in-" + a);
    if (el) el.value = formatInchSutaInput(ft);
  }


  function updateAddItemBtn() {
    if ($("btn-add-label")) $("btn-add-label").textContent = state.editItemIndex >= 0 ? T.updateItem : T.addItemBtn;
    if ($("btn-cancel-item")) $("btn-cancel-item").classList.toggle("hidden", state.editItemIndex < 0);
  }

  function startEditItem(index) {
    const item = state.items[index];
    if (!item) return;
    state.editItemIndex = index;
    state.selectedKind = String(item.winType || "").indexOf("door") === 0 ? "door" : "window";
    state.selectedType = item.winType;
    state.glassColor = normalizeColorId(item.glassColor);
    state.aluColor = normalizeAluColorId(item.aluColor);
    state.hasNet = !!item.hasNet;
    fillSizeInputs("h", item.heightFt);
    fillSizeInputs("w", item.widthFt);
    if ($("in-qty")) $("in-qty").value = String(item.qty || 1);
    if ($("in-room")) $("in-room").value = item.room || "";
    renderKindPicker();
    renderTypePicker();
    refreshCatalogSelects();
    if ($("sel-company") && item.companyName) $("sel-company").value = item.companyName;
    renderGlassThickSelect();
    if ($("sel-glass-thick") && item.thickness) $("sel-glass-thick").value = String(item.thickness);
    if ($("sel-alu-company") && item.aluName) $("sel-alu-company").value = item.aluName;
    renderAluThickSelect();
    if ($("sel-alu-thick") && item.aluThick) $("sel-alu-thick").value = String(item.aluThick);
    if (item.lockName) {
      const li = state.locks.findIndex(function (l) { return l.name === item.lockName; });
      if ($("sel-lock") && li >= 0) $("sel-lock").value = String(li);
    } else if ($("sel-lock")) $("sel-lock").value = "-1";
    setNet(!!item.hasNet);
    updateAddItemBtn();
    syncCalcDetails();
    renderLivePreview(true);
    const card = document.querySelector("#tab-calc .card");
    if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function showQuoteShare(id) {
    const box = $("quote-share");
    if (!box || !id) return;
    if ($("quote-share-link")) $("quote-share-link").value = quotePublicUrl(id);
    box.classList.remove("hidden");
  }

  function copyQuoteLink() {
    const el = $("quote-share-link");
    if (!el || !el.value) return;
    const done = function () {
      if ($("btn-copy-link")) $("btn-copy-link").textContent = T.quoteLinkCopied;
      setTimeout(function () {
        if ($("btn-copy-link")) $("btn-copy-link").textContent = T.quoteLinkCopy;
      }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(el.value).then(done).catch(function () {
        el.select();
        document.execCommand("copy");
        done();
      });
    } else {
      el.select();
      document.execCommand("copy");
      done();
    }
  }

  function staffOptions(selected) {
    const list = [];
    (state.staff || []).forEach(function (u) {
      if (u && u.email) list.push(String(u.email).toLowerCase());
    });
    if (state.ownerEmail && list.indexOf(String(state.ownerEmail).toLowerCase()) < 0) {
      list.unshift(String(state.ownerEmail).toLowerCase());
    }
    const cur = String(selected || "").toLowerCase();
    return '<option value="">' + escapeHtml(T.assignNone) + "</option>" + list.map(function (email) {
      return '<option value="' + escapeHtml(email) + '"' + (email === cur ? " selected" : "") + ">" + escapeHtml(shortEmail(email)) + "</option>";
    }).join("");
  }

  function statusOptions(selected) {
    const cur = String(selected || "new").toLowerCase() === "new" || !selected ? "new" : String(selected).toLowerCase();
    return [["new", T.statusNew], ["called", T.statusCalled], ["booked", T.statusBooked], ["delivered", T.statusDelivered]].map(function (x) {
      return '<option value="' + x[0] + '"' + (x[0] === cur ? " selected" : "") + ">" + x[1] + "</option>";
    }).join("");
  }

  function patchQuote(id, fields) {
    if (!isStaff() || !apiReady()) return;
    apiRequest(Object.assign({
      action: "quotePatch",
      email: state.ownerEmail,
      pin: state.ownerPin,
      id: id
    }, fields)).then(function (data) {
      if (data && data.ok && Array.isArray(data.quotes)) {
        state.quotes = data.quotes;
        renderQuotes();
        renderHome();
      }
    }).catch(function () {});
  }

  function deleteQuote(id) {
    if (!isOwner() || !apiReady() || !id) return;
    if (!window.confirm(T.quoteDeleteConfirm)) return;
    showLoader(true, T.working);
    apiRequest({
      action: "quoteDelete",
      email: state.ownerEmail,
      pin: state.ownerPin,
      id: id
    }).then(function (data) {
      showLoader(false);
      if (!data || !data.ok) {
        flashNote(T.ownerSaveFail || "Error", true);
        return;
      }
      if (Array.isArray(data.quotes)) state.quotes = data.quotes;
      else state.quotes = (state.quotes || []).filter(function (q) { return q.id !== id; });
      if (state.quoteOpenId === id) state.quoteOpenId = "";
      if (state.cutQuote && state.cutQuote.id === id) {
        state.cutQuote = null;
        renderCuttingTab();
      }
      if (state.publicQuote && state.publicQuote.id === id) closeQuoteView();
      renderQuotes();
      renderHome();
      flashNote(T.deletedOk, false);
    }).catch(function () {
      showLoader(false);
      flashNote(T.ownerSaveFail || "Error", true);
    });
  }

  function fetchQuoteGet(id) {
    if (!apiReady() || !window.MTG_API.fetchPublicQuote) return Promise.reject(new Error("noapi"));
    return window.MTG_API.fetchPublicQuote(id);
  }

  function clearQuoteQuery() {
    try {
      const url = new URL(location.href);
      if (!url.searchParams.has("q")) return;
      url.searchParams.delete("q");
      const next = url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : "") + url.hash;
      history.replaceState(null, "", next);
    } catch (_) { /* ignore */ }
  }

  function closeQuoteView() {
    state.publicQuote = null;
    document.documentElement.classList.remove("gate-open");
    if ($("quote-view")) $("quote-view").classList.add("hidden");
    clearQuoteQuery();
  }

  function quoteLineMeta(it) {
    const bits = [];
    if (it.size) bits.push(it.size);
    bits.push((it.qty || 1) + " " + T.ti);
    if (it.company) bits.push(it.company);
    if (it.color) bits.push(it.color);
    if (it.aluminium) bits.push(it.aluminium);
    if (it.glassMm) bits.push(String(it.glassMm) + "mm");
    if (it.lock && it.lock !== "-") bits.push(it.lock);
    if (it.net) bits.push(T.net);
    return bits.join(" · ");
  }

  function renderQuoteView(q) {
    const box = $("quote-view");
    const body = $("quote-view-body");
    const actions = $("quote-view-actions");
    if (!box || !body) return;
    if ($("quote-view-title")) $("quote-view-title").textContent = T.quoteViewTitle;
    const shop = shopOf(state.shop);
    if ($("quote-view-shop")) $("quote-view-shop").textContent = shop.name || "";
    if ($("quote-view-logo") && shop.logo) $("quote-view-logo").src = shop.logo;
    state.publicQuote = q || null;
    document.documentElement.classList.add("gate-open");
    if (!q) {
      body.innerHTML = '<div class="quote-view-empty">' + T.quoteNotFound + "</div>";
      if (actions) actions.innerHTML = "";
      box.classList.remove("hidden");
      return;
    }
    const phone = String(q.phone || "").trim();
    const phoneHref = phone ? "tel:" + phone.replace(/\s+/g, "") : "";
    const lines = (q.lines || []).map(function (it) {
      const title = [it.room, it.type].filter(Boolean).join(" · ") || T.item || "Item";
      return '<div class="qv-line"><div class="qv-line-main"><strong>' + escapeHtml(title) + "</strong>" +
        "<span>" + escapeHtml(quoteLineMeta(it)) + "</span></div>" +
        '<div class="qv-line-price">' + (it.total ? money(it.total) : "—") + "</div></div>";
    }).join("");
    body.innerHTML =
      '<div class="qv-meta">' +
        '<div class="qv-invoice"><span>' + T.quoteInvoice + "</span><strong>" + escapeHtml(q.id || "") + "</strong></div>" +
        (q.time ? '<div class="qv-time">' + escapeHtml(q.time) + "</div>" : "") +
      "</div>" +
      '<div class="qv-customer"><strong>' + escapeHtml(q.name || "") + "</strong>" +
        (phoneHref
          ? '<a href="' + escapeHtml(phoneHref) + '">' + escapeHtml(phone) + "</a>"
          : "<span>" + escapeHtml(phone) + "</span>") +
      "</div>" +
      '<div class="qv-totals">' +
        '<div class="qv-stat"><em>' + T.quoteAreaLabel + "</em><strong>" + fmt(quoteSqft(q)) + "</strong></div>" +
        '<div class="qv-stat is-total"><em>' + T.quoteTotalLabel + "</em><strong>" + money(quoteTotal(q)) + "</strong></div>" +
      "</div>" +
      (lines
        ? '<div class="qv-lines"><p class="qv-lines-title">' + T.quoteItemsTitle + "</p>" + lines + "</div>"
        : "");
    if (actions) {
      actions.innerHTML =
        '<button type="button" class="icon-btn primary" id="btn-quote-view-print">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:18px;height:18px"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>' +
        "<span>" + T.quotePrint + "</span></button>";
    }
    box.classList.remove("hidden");
  }

  function loadPublicQuote(id) {
    if (!id || !apiReady()) return;
    fetchQuoteGet(id).then(function (data) {
      if (data && data.ok && data.quote) renderQuoteView(data.quote);
      else renderQuoteView(null);
    }).catch(function () { renderQuoteView(null); });
  }

  function renderMyQuotesList() {
    const list = $("my-quotes-list");
    if (!list) return;
    const rows = state.myQuotes || [];
    if (!rows.length) {
      list.innerHTML = "";
      return;
    }
    list.innerHTML = rows.map(function (row) {
      return '<div class="my-quote-row" data-id="' + escapeHtml(row.id) + '">' +
        '<div class="my-quote-main"><strong>' + escapeHtml(row.id) + "</strong>" +
        "<span>" + escapeHtml(formatQuoteTime(row.time)) + " · " +
        (row.lines && row.lines.length ? row.lines.length : row.items || 0) + " " + T.ti +
        (quoteTotal(row) ? " · " + money(quoteTotal(row)) : "") +
        "</span></div>" +
        '<div class="my-quote-actions">' +
        '<button type="button" class="icon-btn secondary compact" data-action="my-quote-view" data-id="' +
        escapeHtml(row.id) + '"><span>' + T.myQuotesView + "</span></button>" +
        '<button type="button" class="icon-btn ghost compact" data-action="quote-share-copy" data-id="' +
        escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteLinkCopy) + '">' + ico("link") + "</button>" +
        '<button type="button" class="icon-btn ghost compact" data-action="quote-share-wa" data-id="' +
        escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteShareWa) + '">' + ico("wa") + "</button>" +
        '<button type="button" class="icon-btn ghost compact" data-action="quote-share" data-id="' +
        escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteShare) + '">' + ico("share") + "</button>" +
        "</div></div>";
    }).join("");
  }

  function findMyQuotes() {
    const err = $("my-quotes-err");
    const phone = $("my-quotes-phone") ? $("my-quotes-phone").value.trim() : "";
    const digits = String(phone).replace(/\D/g, "");
    if (err) err.style.display = "none";
    if (digits.length < 10 || digits.length > 15) {
      if (err) {
        err.textContent = T.myQuotesNeedPhone;
        err.style.display = "block";
      }
      return;
    }
    if (!apiReady() || !window.MTG_API.fetchQuotesByPhone) {
      if (err) {
        err.textContent = T.ownerNeedApi || T.myQuotesEmpty;
        err.style.display = "block";
      }
      return;
    }
    const btn = $("btn-find-quotes");
    if (btn) btn.disabled = true;
    showLoader(true, T.working);
    window.MTG_API.fetchQuotesByPhone(phone).then(function (data) {
      if (btn) btn.disabled = false;
      showLoader(false);
      if (!data || !data.ok) {
        state.myQuotes = [];
        renderMyQuotesList();
        if (err) {
          err.textContent = data && data.error === "phone" ? T.myQuotesNeedPhone : T.myQuotesEmpty;
          err.style.display = "block";
        }
        return;
      }
      state.myQuotes = Array.isArray(data.quotes) ? data.quotes : [];
      renderMyQuotesList();
      if (!state.myQuotes.length && err) {
        err.textContent = T.myQuotesEmpty;
        err.style.display = "block";
      }
    }).catch(function () {
      if (btn) btn.disabled = false;
      showLoader(false);
      state.myQuotes = [];
      renderMyQuotesList();
      if (err) {
        err.textContent = T.ownerNetErr || T.myQuotesEmpty;
        err.style.display = "block";
      }
    });
  }


  function setHeading(id, text) {
    const el = $(id);
    if (!el) return;
    let span = el.querySelector(".title-text");
    if (!span) {
      span = document.createElement("span");
      span.className = "title-text";
      el.insertBefore(span, el.firstChild);
    }
    [...el.childNodes].forEach((n) => {
      if (n.nodeType === 3) n.textContent = " ";
    });
    span.textContent = text;
  }


  function ico(name) {
    var p = {
      trash: '<polyline points="3 7 5 7 21 7"/><path d="M8 7V5h8v2"/><path d="M6 7l1 14h10l1-14"/><path d="M10 11v6"/><path d="M14 11v6"/>',
      down: '<path d="M6 9l6 6 6-6"/>',
      up: '<path d="M6 15l6-6 6 6"/>',
      save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>',
      grip: '<path d="M8 6h8M8 12h8M8 18h8"/>',
      pencil: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>',
      cut: '<path d="M4 7h16M4 12h16M4 17h10"/><circle cx="18" cy="17" r="2.2"/>',
      link: '<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1"/>',
      wa: '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3z"/><path d="M9.2 9.3c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.3.4c-.1.2-.1.4.1.6.4.5 1 .9 1.6 1.2.5.3 1 .2 1.2 0l.5-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .2 0 .4-.4.6A4.8 4.8 0 0 1 12.4 16 4.8 4.8 0 0 1 9 9.7c.1-.3.2-.4.2-.4z"/>',
      share: '<circle cx="18" cy="5" r="2.4"/><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="19" r="2.4"/><path d="M8.2 10.8l7.6-4.2M8.2 13.2l7.6 4.2"/>'
    };
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (p[name] || "") + "</svg>";
  }

  function cutToggleLabel(open) {
    return ico(open ? "up" : "down") + "<span>" + (open ? T.cutHide : T.cutShow) + "</span>";
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fmt(n) {
    n = Math.round(Number(n) * 100) / 100;
    return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  }

  function money(n) {
    return T.taka + fmt(n);
  }

  function ftInLabel(ft) {
    return inchSutaPretty(ftToInchSuta(ft));
  }

  function alignDimLabels(root) {
    if (!root) return;
    root.querySelectorAll("g.dim-label").forEach(function (g) {
      const text = g.querySelector("text");
      const rect = g.querySelector("rect");
      if (!text || !rect) return;
      text.removeAttribute("transform");
      text.removeAttribute("dy");
      text.removeAttribute("dominant-baseline");
      text.setAttribute("text-anchor", "start");
      text.setAttribute("x", "0");
      text.setAttribute("y", "0");
      let tb;
      try {
        tb = text.getBBox();
      } catch (_) {
        return;
      }
      if (!(tb.width > 0) || !(tb.height > 0)) return;
      text.setAttribute("x", String(-tb.x - tb.width / 2));
      text.setAttribute("y", String(-tb.y - tb.height / 2));
      try {
        tb = text.getBBox();
      } catch (_) {
        return;
      }
      const padX = 8;
      const padY = 4;
      rect.setAttribute("x", String(tb.x - padX));
      rect.setAttribute("y", String(tb.y - padY));
      rect.setAttribute("width", String(Math.max(28, tb.width + padX * 2)));
      rect.setAttribute("height", String(Math.max(14, tb.height + padY * 2)));
    });
  }

  function scheduleAlignDimLabels(root) {
    alignDimLabels(root);
    requestAnimationFrame(function () {
      alignDimLabels(root);
      if (document.fonts && document.fonts.load) {
        document.fonts.load('600 9.5px "Hind Siliguri"').then(function () {
          alignDimLabels(root);
        }).catch(function () {});
      }
    });
  }

  function dimLabelChip(label, x, y, rotate) {
    const html = escapeHtml(label);
    return (
      '<g class="dim-label" transform="translate(' + x + " " + y + ")" + (rotate ? " rotate(" + rotate + ")" : "") + '">' +
        '<rect x="-20" y="-9" width="40" height="18" rx="8" fill="#0a4456"/>' +
        '<text fill="#fff" font-size="9.5" font-weight="600" font-family="Hind Siliguri, sans-serif">' + html + "</text>" +
      "</g>"
    );
  }


  function toFeet(ft, inch, suta) {
    const su = Math.max(0, Math.min(7, Math.round(Number(suta) || 0)));
    return (Number(ft) || 0) + (Number(inch) || 0) / 12 + su / 96;
  }


  function inputSizeFt(axis) {
    const p = axis === "w" ? "w" : "h";
    const el = $("in-" + p);
    return inchSutaInputToFeet(el && el.value);
  }


  function getType(id) {
    return ALL_TYPES.find((t) => t.id === id) || ALL_TYPES[0];
  }

  function customColorList(kind, isEdit) {
    if (isEdit) return (state.edit && state.edit.colorExtras) || [];
    return (state.adminPick && state.adminPick[kind + "ColorExtras"]) || [];
  }

  function thickExtraList(kind, isEdit) {
    if (isEdit) return (state.edit && state.edit.thickExtras) || [];
    return (state.adminPick && state.adminPick[kind + "ThickExtras"]) || [];
  }

  function paletteFor(kind, isEdit) {
    const base = kind === "alu" ? ALU_COLORS : GLASS_COLORS;
    return base.concat(customColorList(kind, isEdit).map(function (c) {
      return {
        id: c.id,
        labelKey: "",
        label: c.label,
        light: c.light || "#e8eef1",
        mid: c.mid || "#6b8591",
        dark: c.dark || "#3d5560"
      };
    }));
  }

  function findColorDef(id, kind) {
    const s = String(id || "").trim().toLowerCase();
    const base = kind === "alu" ? ALU_COLORS : GLASS_COLORS;
    const hit = base.find((c) => c.id === s);
    if (hit) return hit;
    const extras = []
      .concat(state.adminPick.companyColorExtras || [])
      .concat(state.adminPick.aluColorExtras || [])
      .concat((state.edit && state.edit.colorExtras) || []);
    const custom = extras.find((c) => c.id === s);
    if (custom) {
      return {
        id: custom.id,
        labelKey: "",
        label: custom.label,
        light: custom.light || "#e8eef1",
        mid: custom.mid || "#6b8591",
        dark: custom.dark || "#3d5560"
      };
    }
    if (s) {
      return { id: s, labelKey: "", label: s, light: "#e8eef1", mid: "#6b8591", dark: "#3d5560" };
    }
    return kind === "alu" ? ALU_COLORS[0] : GLASS_COLORS[0];
  }

  function getColor(id) {
    return findColorDef(id, "company");
  }

  function colorLabel(id) {
    const c = getColor(id);
    return c.label || T[c.labelKey] || id;
  }

  function getAluColor(id) {
    return findColorDef(id, "alu");
  }

  function aluColorLabel(id) {
    const c = getAluColor(id);
    return c.label || T[c.labelKey] || id;
  }

  function normalizeAluColorId(id) {
    const s = String(id || "").trim().toLowerCase();
    if (ALU_COLORS.some((c) => c.id === s)) return s;
    if ((state.adminPick.aluColorExtras || []).some((c) => c.id === s)) return s;
    if ((state.edit.colorExtras || []).some((c) => c.id === s)) return s;
    return s || "silver";
  }

  function normalizeColorId(id) {
    const s = String(id || "").trim().toLowerCase();
    if (GLASS_COLORS.some((c) => c.id === s)) return s;
    if ((state.adminPick.companyColorExtras || []).some((c) => c.id === s)) return s;
    if ((state.edit.colorExtras || []).some((c) => c.id === s)) return s;
    return s || "clear";
  }

  function slugColorId(label) {
    const base = String(label || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0980-\u09ff]+/gi, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 24);
    return "x-" + (base || "color") + "-" + String(Date.now()).slice(-4);
  }

  function expandNamedCombos(list, colorFn, defaultThick) {
    const out = [];
    (list || []).forEach((row) => {
      const name = String(row && row.name || "").trim();
      if (!name) return;
      const thicks = uniqueNums(String(row.thickness == null ? "" : row.thickness).split("|").map((p) => Number(String(p).replace(/[^0-9.]/g, ""))));
      const colors = uniqueIds(String(row.color || "").split("|").map((p) => colorFn(p.trim())));
      const useThicks = thicks.length ? thicks : [defaultThick];
      const useColors = colors.length ? colors : [colorFn("")];
      const rate = Number(row.rate);
      const useRate = Number.isFinite(rate) && rate >= 0 ? rate : 0;
      useThicks.forEach((thickness) => {
        useColors.forEach((color) => out.push({ name: name, thickness: thickness, rate: useRate, color: color, out: false }));
      });
    });
    return out;
  }

  function normalizeAluminium(list) {
    return expandNamedCombos(list, normalizeAluColorId, 1).filter((a) => a.name && a.thickness > 0);
  }

  function kindLabel(kind) {
    return kind === "door" ? T.dorja : T.janala;
  }

  function lockStyleOf(lock) {
    if (!lock) return "none";
    if (lock.style) return lock.style;
    const n = String(lock.name || "").toLowerCase();
    if (n.indexOf("slid") !== -1) return "sliding";
    if (n.indexOf("case") !== -1 || n.indexOf("handle") !== -1) return "casement";
    if (n.indexOf("dead") !== -1 || n.indexOf("bolt") !== -1) return "deadbolt";
    if (n.indexOf("knob") !== -1) return "knob";
    return "generic";
  }

  function selectedLock() {
    const idx = parseInt($("sel-lock").value, 10);
    return idx >= 0 ? state.locks[idx] : null;
  }

  function selectedAluName() {
    return $("sel-alu-company") ? $("sel-alu-company").value : "";
  }

  function selectedAluThick() {
    return $("sel-alu-thick") ? $("sel-alu-thick").value : "";
  }

  function aluRows(filters) {
    return state.aluminium.filter((a) => {
      if (filters.name && a.name !== filters.name) return false;
      if (filters.thick != null && filters.thick !== "" && String(a.thickness) !== String(filters.thick)) return false;
      if (filters.color && a.color !== filters.color) return false;
      return true;
    });
  }

  function uniqueAlu(field, filters) {
    const seen = {};
    const out = [];
    aluRows(filters).forEach((a) => {
      const key = String(a[field]);
      if (!seen[key]) {
        seen[key] = true;
        out.push(a[field]);
      }
    });
    return out;
  }

  function pickValid(cur, list) {
    if (cur != null && cur !== "" && list.some((x) => String(x) === String(cur))) return cur;
    return list.length ? list[0] : "";
  }

  function selectedAlu() {
    const name = selectedAluName();
    const thick = selectedAluThick();
    return state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick) && a.color === state.aluColor)
      || state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick))
      || null;
  }

  const GLASS_THICK_PRESETS = [4, 5, 5.5, 6, 8, 10, 12];
  const ALU_THICK_PRESETS = [1, 1.2, 1.4, 1.5, 1.8, 2, 3];

  function togglePick(arr, value, isNum) {
    const v = isNum ? Number(value) : value;
    const i = arr.findIndex((x) => (isNum ? Number(x) === v : x === v));
    if (i >= 0) arr.splice(i, 1);
    else arr.push(v);
  }

  function mergeThicks(presets, selected, extras) {
    const all = presets.slice();
    (extras || []).concat(selected || []).forEach((mm) => {
      if (all.every((p) => Number(p) !== Number(mm))) all.push(Number(mm));
    });
    return all.sort((a, b) => a - b);
  }

  function addThickPick(kind, isEdit) {
    const id = isEdit ? "edit-thick" : (kind === "company" ? "new-company-thick" : "new-alu-thick");
    const wrapId = isEdit ? "edit-thicks" : (kind === "company" ? "new-company-thicks" : "new-alu-thicks");
    const rates = isEdit
      ? (state.edit.rates || (state.edit.rates = {}))
      : (state.adminPick[kind + "Rates"] || (state.adminPick[kind + "Rates"] = {}));
    syncMmRatesFromDom(wrapId, rates);
    const mm = parseFloat($(id) && $(id).value);
    if (Number.isNaN(mm) || mm <= 0) return;
    const arr = isEdit ? (state.edit.thicks || (state.edit.thicks = [])) : state.adminPick[kind + "Thicks"];
    const extras = isEdit ? (state.edit.thickExtras || (state.edit.thickExtras = [])) : (state.adminPick[kind + "ThickExtras"] || (state.adminPick[kind + "ThickExtras"] = []));
    const presets = kind === "alu" ? ALU_THICK_PRESETS : GLASS_THICK_PRESETS;
    if (arr.every((t) => Number(t) !== mm)) arr.push(mm);
    arr.sort((a, b) => a - b);
    if (presets.every((p) => Number(p) !== mm) && extras.every((t) => Number(t) !== mm)) extras.push(mm);
    if ($(id)) $(id).value = "";
    if (isEdit) renderEditPicks();
    else renderAdminPicks();
  }

  function removeThickPick(kind, mm, isEdit) {
    const n = Number(mm);
    const arr = isEdit ? (state.edit.thicks || []) : state.adminPick[kind + "Thicks"];
    const extras = isEdit ? (state.edit.thickExtras || []) : (state.adminPick[kind + "ThickExtras"] || []);
    const rates = isEdit ? (state.edit.rates || {}) : (state.adminPick[kind + "Rates"] || {});
    for (let i = arr.length - 1; i >= 0; i--) if (Number(arr[i]) === n) arr.splice(i, 1);
    for (let i = extras.length - 1; i >= 0; i--) if (Number(extras[i]) === n) extras.splice(i, 1);
    delete rates[String(n)];
    if (isEdit) renderEditPicks();
    else renderAdminPicks();
  }

  function addColorPick(kind, isEdit) {
    const id = isEdit ? "edit-color-custom" : (kind === "company" ? "new-company-color" : "new-alu-color");
    const label = cleanTextValue($(id) && $(id).value);
    if (!label) return;
    const colorId = slugColorId(label);
    const extras = isEdit
      ? (state.edit.colorExtras || (state.edit.colorExtras = []))
      : (state.adminPick[kind + "ColorExtras"] || (state.adminPick[kind + "ColorExtras"] = []));
    const colors = isEdit
      ? (state.edit.colors || (state.edit.colors = []))
      : state.adminPick[kind + "Colors"];
    if (extras.every((c) => c.label !== label && c.id !== colorId)) {
      extras.push({ id: colorId, label: label, light: "#e8eef1", mid: "#6b8591", dark: "#3d5560" });
    }
    const useId = (extras.find((c) => c.label === label) || { id: colorId }).id;
    if (colors.indexOf(useId) < 0) colors.push(useId);
    if ($(id)) $(id).value = "";
    if (isEdit) renderEditPicks();
    else renderAdminPicks();
  }

  function removeColorPick(kind, colorId, isEdit) {
    const colors = isEdit ? (state.edit.colors || []) : state.adminPick[kind + "Colors"];
    const extras = isEdit ? (state.edit.colorExtras || []) : (state.adminPick[kind + "ColorExtras"] || []);
    for (let i = colors.length - 1; i >= 0; i--) if (colors[i] === colorId) colors.splice(i, 1);
    for (let i = extras.length - 1; i >= 0; i--) if (extras[i].id === colorId) extras.splice(i, 1);
    if (isEdit) renderEditPicks();
    else renderAdminPicks();
  }

  function selectedThicks(kind) {
    const arr = (kind === "company" ? state.adminPick.companyThicks : state.adminPick.aluThicks).slice();
    const extra = parseFloat($(kind === "company" ? "new-company-thick" : "new-alu-thick") && $(kind === "company" ? "new-company-thick" : "new-alu-thick").value);
    if (!Number.isNaN(extra) && extra > 0 && arr.every((t) => Number(t) !== extra)) arr.push(extra);
    return arr;
  }

  function upsertCombo(list, row) {
    const existing = list.find((x) => x.name === row.name && Number(x.thickness) === Number(row.thickness) && x.color === row.color);
    if (existing) {
      existing.rate = row.rate;
      existing.out = false;
    } else list.push(row);
  }

  function uniqueNums(arr) {
    const out = [];
    arr.forEach((n) => {
      const v = Number(n);
      if (!Number.isNaN(v) && v > 0 && out.every((x) => Number(x) !== v)) out.push(v);
    });
    return out.sort((a, b) => a - b);
  }

  function uniqueIds(arr) {
    const out = [];
    arr.forEach((id) => {
      if (id && out.indexOf(id) < 0) out.push(id);
    });
    return out;
  }

  function replaceCombos(list, oldName, name, thicks, colors, rate, clickedRate) {
    const old = list.filter((x) => x.name === oldName);
    const rateMap = {};
    old.forEach((x) => {
      rateMap[Number(x.thickness) + "|" + x.color] = x.rate;
    });
    const byMm = rate && typeof rate === "object" && !Array.isArray(rate);
    const rateChanged = !byMm && Number(rate) !== Number(clickedRate);
    const next = [];
    thicks.forEach((thickness) => {
      colors.forEach((color) => {
        const key = Number(thickness) + "|" + color;
        let useRate;
        if (byMm) {
          const mmRate = rate[Number(thickness)];
          useRate = mmRate != null && Number.isFinite(Number(mmRate)) ? Number(mmRate) : (rateMap[key] != null ? rateMap[key] : 0);
        } else {
          useRate = rateChanged || rateMap[key] == null ? rate : rateMap[key];
        }
        next.push({ name: name, thickness: thickness, rate: useRate, color: color, out: false });
      });
    });
    const kept = list.filter((x) => x.name !== oldName);
    list.length = 0;
    kept.concat(next).forEach((row) => list.push(row));
  }

  function syncMmRatesFromDom(wrapId, target) {
    const wrap = $(wrapId);
    if (!wrap || !target) return;
    wrap.querySelectorAll("[data-mm-rate]").forEach((el) => {
      const v = parseFloat(el.value);
      if (Number.isFinite(v) && v >= 0) target[String(el.dataset.mmRate)] = v;
      else delete target[String(el.dataset.mmRate)];
    });
  }

  function mmRateGridHtml(thicks, rates, placeholder) {
    const list = (thicks || []).slice().sort((a, b) => a - b);
    if (!list.length) return "";
    return list.map((mm) => {
      const key = String(Number(mm));
      const val = rates && rates[key] != null ? rates[key] : "";
      return '<label class="mm-rate-item"><span>' + mm + T.mm + '</span><input type="number" min="0" step="1" data-mm-rate="' + key + '" placeholder="' + escapeHtml(placeholder || T.mmRatePh) + '" value="' + escapeHtml(val) + '"></label>';
    }).join("");
  }

  function thickRateLabel(thicks, rates) {
    return mselLabel((thicks || []).map(function (mm) {
      const key = String(Number(mm));
      const r = rates && rates[key] != null && rates[key] !== "" ? rates[key] : null;
      return mm + T.mm + (r != null ? " " + T.taka + r : "");
    }));
  }

  function readMmRates(wrapId, thicks) {
    const wrap = $(wrapId);
    const map = {};
    let ok = true;
    (thicks || []).forEach((mm) => {
      const key = String(Number(mm));
      const el = wrap && wrap.querySelector('[data-mm-rate="' + key + '"]');
      const v = parseFloat(el && el.value);
      if (!Number.isFinite(v) || v < 0) ok = false;
      else map[Number(mm)] = v;
    });
    return ok ? map : null;
  }

  function ratesByThickness(rows) {
    const map = {};
    (rows || []).forEach((x) => {
      const key = String(Number(x.thickness));
      if (map[key] == null) map[key] = Number(x.rate) || 0;
    });
    return map;
  }

  function setAddLabels() {
    const companySpan = $("btn-add-company") && $("btn-add-company").querySelector("span");
    if (companySpan) companySpan.textContent = T.addBtn;
    if ($("btn-add-alu-label")) $("btn-add-alu-label").textContent = T.addBtn;
    if ($("btn-cancel-company")) $("btn-cancel-company").classList.add("hidden");
    if ($("btn-cancel-alu")) $("btn-cancel-alu").classList.add("hidden");
  }

  var loaderCount = 0;
  function showLoader(on, text) {
    const el = $("app-loader");
    if (!el) return;
    if (on) {
      loaderCount += 1;
      if ($("app-loader-text")) $("app-loader-text").textContent = text || T.working;
      el.classList.remove("hidden");
      document.documentElement.classList.add("is-busy");
      return;
    }
    loaderCount = Math.max(0, loaderCount - 1);
    if (loaderCount > 0) return;
    el.classList.add("hidden");
    document.documentElement.classList.remove("is-busy");
  }

  function switchAdminPanel(id) {
    const allowed = ["home", "glass", "alu", "lock", "charges", "staff", "cut", "db", "quotes"];
    if (allowed.indexOf(id) < 0) id = "home";
    if (isStaff() && !isOwner() && id !== "home" && id !== "quotes") id = "home";
    if (id === "quotes" && !isStaff()) id = "home";
    if (id === "staff" && !isOwner()) id = "home";
    if (id === "db" && !isSuperAdmin()) id = "home";
    state.adminPanel = id;
    storeSet(KEYS.adminPanel, id);
    document.querySelectorAll("[data-admin-panel]").forEach((el) => {
      el.classList.toggle("hidden", el.getAttribute("data-admin-panel") !== id);
    });
    document.querySelectorAll(".admin-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.admin === id);
    });
    if (id === "home") renderHome();
    if (id === "db") fillDbSettings();
  }

  function defaultShop() {
    return { name: T.shop, slogan: T.shopSlogan, logo: "images/logo.svg", phone: "+8801727282829", address: "Walia Bazar, Lalpur, Natore" };
  }

  function safeShopLogo(logo) {
    const v = String(logo || "").trim();
    if (v.indexOf("data:image/") === 0 && v.length <= 49000) return v;
    if (v.indexOf("images/") === 0 && v.length < 200) return v;
    return "";
  }

  function shopOf(data) {
    const fallback = defaultShop();
    const src = data && typeof data === "object" ? data : {};
    return {
      name: String(src.name || "").trim() || fallback.name,
      slogan: String(src.slogan || "").trim() || fallback.slogan,
      logo: safeShopLogo(src.logo) || fallback.logo,
      phone: String(src.phone || "").trim(),
      address: String(src.address || "").trim()
    };
  }

  function applyShop(shop) {
    state.shop = shopOf(shop);
    const name = state.shop.name;
    const slogan = state.shop.slogan;
    const logo = state.shop.logo;
    const phone = state.shop.phone;
    const address = state.shop.address;
    document.title = name + "  -  " + T.calcTab;
    const h1 = document.querySelector(".app-bar h1");
    if (h1) h1.textContent = name;
    const barP = document.querySelector(".app-bar-text p");
    if (barP) barP.textContent = slogan;
    document.querySelectorAll(".app-bar .logo, .print-logo, #shop-logo-preview").forEach((img) => {
      if (img && img.getAttribute("src") !== logo) img.src = logo;
    });
    if ($("shop-name") && document.activeElement !== $("shop-name")) $("shop-name").value = name;
    if ($("shop-slogan") && document.activeElement !== $("shop-slogan")) $("shop-slogan").value = slogan;
    if ($("shop-phone") && document.activeElement !== $("shop-phone")) $("shop-phone").value = phone;
    if ($("shop-address") && document.activeElement !== $("shop-address")) $("shop-address").value = address;
    storeSet(KEYS.shop, state.shop);
  }

  function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  }

  function localDayKey(d) {
    if (!d || isNaN(d.getTime())) return "";
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function quoteTimeDate(raw) {
    if (!raw) return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) return raw;
    const s = String(raw).trim();
    if (!s) return null;
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) {
      const iso = new Date(s.indexOf("T") >= 0 ? s : s.replace(" ", "T"));
      if (!isNaN(iso.getTime())) return iso;
    }
    const parsed = new Date(s);
    return isNaN(parsed.getTime()) ? null : parsed;
  }

  function formatQuoteTime(raw) {
    const d = quoteTimeDate(raw);
    if (!d) return String(raw || "");
    return d.toLocaleString(state.lang === "en" ? "en-GB" : "bn-BD", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function quoteLineSize(it) {
    const parsed = parseSizeFt(it && it.size);
    return {
      heightFt: Number(it && it.heightFt) > 0 ? Number(it.heightFt) : parsed.heightFt,
      widthFt: Number(it && it.widthFt) > 0 ? Number(it.widthFt) : parsed.widthFt,
      qty: Math.max(1, Number(it && it.qty) || 1)
    };
  }

  function quoteSqft(q) {
    const stored = Number(q && q.sqft) || 0;
    if (stored > 0) return stored;
    return (q && q.lines || []).reduce((sum, it) => {
      const s = quoteLineSize(it);
      return sum + s.heightFt * s.widthFt * s.qty;
    }, 0);
  }

  function quoteTotal(q) {
    const stored = Number(q && q.total) || 0;
    if (stored > 0) return stored;
    return (q && q.lines || []).reduce((sum, it) => sum + (Number(it && it.total) || 0), 0);
  }

  function quoteHomeStats() {
    const rows = state.quotes || [];
    const day = localDayKey(new Date());
    const seen = {};
    let count = 0;
    let today = 0;
    rows.forEach((q) => {
      const id = String(q && q.id || "");
      if (!id || seen[id]) return;
      seen[id] = true;
      count += 1;
      if (localDayKey(quoteTimeDate(q.time)) === day) today += 1;
    });
    return { count: count, today: today };
  }

  function destroyHomeCharts() {
    Object.keys(homeChartInstances).forEach(function (k) {
      if (homeChartInstances[k]) {
        try { homeChartInstances[k].destroy(); } catch (e) {}
        homeChartInstances[k] = null;
      }
    });
  }

  function homeOverviewSeries() {
    const q = quoteHomeStats();
    const aluNames = typeof uniqueAlu === "function" ? uniqueAlu("name", {}) : [];
    const items = [
      { label: T.statQuotes, value: q.count, goto: isStaff() ? "quotes" : "" },
      { label: T.statToday, value: q.today, goto: isStaff() ? "quotes" : "" },
      { label: T.statGlass, value: companyNames().length, goto: isOwner() ? "glass" : "" },
      { label: T.statAlu, value: aluNames.length, goto: isOwner() ? "alu" : "" },
      { label: T.statLocks, value: (state.locks || []).length, goto: isOwner() ? "lock" : "" },
      { label: T.statStaff, value: (state.staff || []).length, goto: isOwner() ? "staff" : "" }
    ];
    return items;
  }

  function quoteWeekSeries() {
    const labels = [];
    const data = [];
    const base = new Date();
    base.setHours(12, 0, 0, 0);
    for (let i = 6; i >= 0; i -= 1) {
      const d = new Date(base);
      d.setDate(base.getDate() - i);
      const key = localDayKey(d);
      labels.push(d.toLocaleDateString(state.lang === "en" ? "en-GB" : "bn-BD", { weekday: "short" }));
      let n = 0;
      (state.quotes || []).forEach(function (q) {
        if (localDayKey(quoteTimeDate(q.time)) === key) n += 1;
      });
      data.push(n);
    }
    return { labels: labels, data: data };
  }

  function renderHomeCharts() {
    destroyHomeCharts();
    if (typeof Chart === "undefined") return;
    const overviewCanvas = $("home-chart-overview");
    const weekCanvas = $("home-chart-week");
    if (!overviewCanvas || !weekCanvas) return;

    const fontFamily = '"Hind Siliguri", "Noto Sans Bengali", sans-serif';
    const overview = homeOverviewSeries();
    const overviewColors = ["#0e6b86", "#f2a93b", "#12809e", "#2f8f5b", "#5b7380", "#0a4456"];

    homeChartInstances.overview = new Chart(overviewCanvas, {
      type: "bar",
      data: {
        labels: overview.map(function (x) { return x.label; }),
        datasets: [{
          data: overview.map(function (x) { return x.value; }),
          backgroundColor: overviewColors,
          hoverBackgroundColor: overviewColors,
          borderRadius: 7,
          borderSkipped: false,
          maxBarThickness: 28
        }]
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return " " + (ctx.parsed.x || 0);
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              precision: 0,
              font: { family: fontFamily, size: 10 },
              color: "#8aa0ab"
            },
            grid: { color: "rgba(16, 35, 44, 0.06)" },
            border: { display: false }
          },
          y: {
            grid: { display: false },
            ticks: {
              font: { family: fontFamily, size: 11, weight: "600" },
              color: "#10232c"
            },
            border: { display: false }
          }
        },
        onClick: function (_evt, elements) {
          if (!elements || !elements.length) return;
          const idx = elements[0].index;
          const target = overview[idx] && overview[idx].goto;
          if (target) goHomeTarget(target);
        }
      }
    });

    const week = quoteWeekSeries();
    homeChartInstances.week = new Chart(weekCanvas, {
      type: "bar",
      data: {
        labels: week.labels,
        datasets: [{
          data: week.data,
          backgroundColor: "rgba(14, 107, 134, 0.75)",
          hoverBackgroundColor: "#0a4456",
          borderRadius: 6,
          borderSkipped: false,
          maxBarThickness: 22
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (ctx) {
                return " " + (ctx.parsed.y || 0);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              font: { family: fontFamily, size: 10, weight: "600" },
              color: "#5b7380",
              maxRotation: 0
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              precision: 0,
              font: { family: fontFamily, size: 10 },
              color: "#8aa0ab"
            },
            grid: { color: "rgba(16, 35, 44, 0.06)" },
            border: { display: false }
          }
        },
        onClick: function () {
          if (isStaff()) goHomeTarget("quotes");
        }
      }
    });
  }

  function renderHome() {
    const shop = shopOf(state.shop);

    if ($("home-chart-overview-title")) $("home-chart-overview-title").textContent = T.homeChartOverview;
    if ($("home-chart-week-title")) $("home-chart-week-title").textContent = T.homeChartWeek;

    const charts = $("home-charts");
    if (charts) charts.classList.toggle("hidden", !isStaff());
    if (isStaff()) renderHomeCharts();
    else destroyHomeCharts();

    const actions = [];
    if (isStaff()) actions.push(["quotes", T.tabQuotes]);
    if (isOwner()) {
      actions.push(["glass", T.tabGlass]);
      actions.push(["alu", T.tabAlu]);
      actions.push(["lock", T.tabLock]);
      actions.push(["staff", T.tabStaff]);
    }
    actions.push(["calc", T.calcTab]);
    if ($("home-actions")) {
      $("home-actions").innerHTML =
        '<div class="home-action-row">' +
        actions.map(function (a) {
          return '<button type="button" class="home-action" data-goto="' + a[0] + '">' + a[1] + "</button>";
        }).join("") +
        "</div>";
    }

    const board = $("home-board");
    if (board) board.classList.toggle("home-board-solo", !isStaff());

    if ($("home-shop")) $("home-shop").classList.toggle("hidden", !isOwner());
    setHeading("home-title", T.homeTitle);
    if ($("home-shop-title")) $("home-shop-title").textContent = T.homeTitle;
    if ($("home-shop-hint")) $("home-shop-hint").textContent = T.shopHint;
    if ($("shop-name-label")) $("shop-name-label").textContent = T.shopName;
    if ($("shop-slogan-label")) $("shop-slogan-label").textContent = T.shopSloganLabel;
    if ($("shop-phone-label")) $("shop-phone-label").textContent = T.shopPhone;
    if ($("shop-address-label")) $("shop-address-label").textContent = T.shopAddress;
    if ($("shop-logo-label")) $("shop-logo-label").textContent = T.shopLogo;
    if ($("btn-shop-logo")) $("btn-shop-logo").textContent = T.shopLogoPick;
    if ($("btn-shop-logo-reset")) $("btn-shop-logo-reset").textContent = T.shopLogoReset;
    if ($("btn-save-shop")) $("btn-save-shop").textContent = T.saveBtn;
    fillCalcLabels();
    if ($("shop-name") && document.activeElement !== $("shop-name")) $("shop-name").value = shop.name;
    if ($("shop-slogan") && document.activeElement !== $("shop-slogan")) $("shop-slogan").value = shop.slogan;
    if ($("shop-phone") && document.activeElement !== $("shop-phone")) $("shop-phone").value = shop.phone || "";
    if ($("shop-address") && document.activeElement !== $("shop-address")) $("shop-address").value = shop.address || "";
    if ($("shop-logo-preview")) $("shop-logo-preview").src = shop.logo;
  }

  function goHomeTarget(id, quoteId) {
    if (id === "calc") {
      switchTab("calc");
      return;
    }
    switchAdminPanel(id);
    if (id === "quotes" && quoteId) {
      state.quoteOpenId = quoteId;
      if (typeof renderQuotes === "function") renderQuotes();
    }
  }

  function resizeLogoFile(file) {
    return new Promise(function (resolve, reject) {
      if (!file || !file.type || file.type.indexOf("image/") !== 0) {
        reject(new Error("type"));
        return;
      }
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = function () {
        URL.revokeObjectURL(url);
        const max = 192;
        let w = img.width;
        let h = img.height;
        if (w > max || h > max) {
          const s = max / Math.max(w, h);
          w = Math.round(w * s);
          h = Math.round(h * s);
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        let out = canvas.toDataURL("image/jpeg", 0.72);
        if (out.length > 49000) out = canvas.toDataURL("image/jpeg", 0.55);
        if (out.length > 49000) {
          reject(new Error("size"));
          return;
        }
        resolve(out);
      };
      img.onerror = function () {
        URL.revokeObjectURL(url);
        reject(new Error("img"));
      };
      img.src = url;
    });
  }

  function saveShopFromForm() {
    if (!isOwner()) return;
    applyShop({
      name: $("shop-name") && $("shop-name").value,
      slogan: $("shop-slogan") && $("shop-slogan").value,
      phone: $("shop-phone") && $("shop-phone").value,
      address: $("shop-address") && $("shop-address").value,
      logo: state.shop.logo
    });
    renderHome();
    persistOwnerData(["shop"], T.savedOk);
  }

  function onShopLogoPicked(file) {
    resizeLogoFile(file).then(function (dataUrl) {
      applyShop({
        name: state.shop.name,
        slogan: state.shop.slogan,
        phone: state.shop.phone,
        address: state.shop.address,
        logo: dataUrl
      });
      renderHome();
      persistOwnerData(["shop"], T.savedOk);
    }).catch(function () {
      showStaffErr(T.shopLogoBad);
    });
  }

  function groupByName(items) {
    const order = [];
    const map = {};
    items.forEach((item, i) => {
      const key = String(item.name || "");
      if (!map[key]) {
        map[key] = [];
        order.push(key);
      }
      map[key].push(i);
    });
    return order.map((name) => ({ name: name, indices: map[name] }));
  }

  function mselLabel(values) {
    return values.length ? values.join(", ") : T.pickHint;
  }

  function renderThickPanel(wrapId, presets, selected, inputId, kind, rates, ratePh, extras, isEdit) {
    const wrap = $(wrapId);
    if (!wrap) return;
    if (!rates) rates = {};
    syncMmRatesFromDom(wrapId, rates);
    const ph = ratePh || (kind === "alu" ? T.aluMmRatePh : T.mmRatePh);
    const extraList = extras || [];
    const opts = mergeThicks(presets, selected, extraList).map(function (mm) {
      const on = selected.some(function (t) { return Number(t) === Number(mm); });
      const key = String(Number(mm));
      const val = rates[key] != null ? rates[key] : "";
      const isCustom = presets.every(function (p) { return Number(p) !== Number(mm); });
      return (
        '<div class="msel-mm-row' + (on ? " is-on" : "") + '" data-mm="' + mm + '">' +
          '<button type="button" class="msel-opt' + (on ? " active" : "") + '" data-mm="' + mm + '">' +
            '<span class="msel-check"></span>' +
            '<span class="msel-mm-label">' + mm + T.mm + "</span>" +
          "</button>" +
          '<input type="number" class="msel-mm-rate" min="0" step="1" data-mm-rate="' + key + '" placeholder="' + escapeHtml(ph) + '" value="' + escapeHtml(val) + '"' + (on ? "" : " disabled") + ">" +
          '<button type="button" class="msel-remove" data-remove-mm="' + mm + '" title="' + escapeHtml(T.pickRemove) + '" aria-label="' + escapeHtml(T.pickRemove) + '"' + (on || isCustom ? "" : " disabled") + ">×</button>" +
        "</div>"
      );
    }).join("");
    wrap.innerHTML =
      '<div class="msel-opts">' + opts + "</div>" +
      '<div class="msel-custom">' +
        '<input type="number" id="' + inputId + '" min="0" step="' + (kind === "alu" ? "0.1" : "0.5") + '" placeholder="' + escapeHtml(T.pickAddMm || T.mm) + '">' +
        '<button type="button" class="msel-add-mm" data-thick-kind="' + kind + '"' + (isEdit ? ' data-edit="1"' : "") + ">+</button>" +
      "</div>";
  }

  function renderColorPanel(wrapId, kind, selected, extras, isEdit) {
    const wrap = $(wrapId);
    if (!wrap) return;
    const palette = paletteFor(kind, !!isEdit);
    const opts = palette.map(function (c) {
      const on = selected.indexOf(c.id) >= 0;
      const label = c.label || T[c.labelKey] || c.id;
      const isCustom = !(kind === "alu" ? ALU_COLORS : GLASS_COLORS).some(function (b) { return b.id === c.id; });
      return (
        '<div class="msel-color-row' + (on ? " is-on" : "") + '">' +
          '<button type="button" class="msel-opt' + (on ? " active" : "") + '" data-color="' + c.id + '">' +
            '<span class="msel-check"></span>' +
            '<span class="pick-dot" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></span>' +
            escapeHtml(label) +
          "</button>" +
          '<button type="button" class="msel-remove" data-remove-color="' + c.id + '" title="' + escapeHtml(T.pickRemove) + '" aria-label="' + escapeHtml(T.pickRemove) + '"' + (on || isCustom ? "" : " disabled") + ">×</button>" +
        "</div>"
      );
    }).join("");
    const inputId = isEdit ? "edit-color-custom" : (kind === "company" ? "new-company-color" : "new-alu-color");
    wrap.innerHTML =
      '<div class="msel-opts">' + opts + "</div>" +
      '<div class="msel-custom">' +
        '<input type="text" id="' + inputId + '" placeholder="' + escapeHtml(T.pickAddColor) + '" autocomplete="off">' +
        '<button type="button" class="msel-add-color" data-color-kind="' + kind + '"' + (isEdit ? ' data-edit="1"' : "") + ">+</button>" +
      "</div>";
  }

  function renderAdminPicks() {
    const pick = state.adminPick;
    if (!pick.companyRates) pick.companyRates = {};
    if (!pick.aluRates) pick.aluRates = {};
    if (!pick.companyThickExtras) pick.companyThickExtras = [];
    if (!pick.aluThickExtras) pick.aluThickExtras = [];
    if (!pick.companyColorExtras) pick.companyColorExtras = [];
    if (!pick.aluColorExtras) pick.aluColorExtras = [];
    renderThickPanel("new-company-thicks", GLASS_THICK_PRESETS, pick.companyThicks, "new-company-thick", "company", pick.companyRates, T.mmRatePh, pick.companyThickExtras, false);
    renderColorPanel("new-company-colors", "company", pick.companyColors, pick.companyColorExtras, false);
    renderThickPanel("new-alu-thicks", ALU_THICK_PRESETS, pick.aluThicks, "new-alu-thick", "alu", pick.aluRates, T.aluMmRatePh, pick.aluThickExtras, false);
    renderColorPanel("new-alu-colors", "alu", pick.aluColors, pick.aluColorExtras, false);
    if ($("company-thick-toggle")) $("company-thick-toggle").textContent = thickRateLabel(pick.companyThicks, pick.companyRates);
    if ($("company-color-toggle")) $("company-color-toggle").textContent = mselLabel(pick.companyColors.map((id) => colorLabel(id)));
    if ($("alu-thick-toggle")) $("alu-thick-toggle").textContent = thickRateLabel(pick.aluThicks, pick.aluRates);
    if ($("alu-color-toggle")) $("alu-color-toggle").textContent = mselLabel(pick.aluColors.map((id) => aluColorLabel(id)));
  }

  function bindAdminPicks() {
    function bindPanel(wrapId, kind, field) {
      const wrap = $(wrapId);
      if (!wrap || wrap.dataset.pickBound) return;
      wrap.dataset.pickBound = "1";
      wrap.addEventListener("click", (e) => {
        if (e.target.closest(".msel-mm-rate")) return;
        const remMm = e.target.closest("[data-remove-mm]");
        if (remMm) {
          e.preventDefault();
          removeThickPick(kind, remMm.getAttribute("data-remove-mm"), false);
          return;
        }
        const remColor = e.target.closest("[data-remove-color]");
        if (remColor) {
          e.preventDefault();
          removeColorPick(kind, remColor.getAttribute("data-remove-color"), false);
          return;
        }
        const addMm = e.target.closest(".msel-add-mm");
        if (addMm) {
          addThickPick(addMm.dataset.thickKind || kind, false);
          return;
        }
        const addColor = e.target.closest(".msel-add-color");
        if (addColor) {
          addColorPick(addColor.dataset.colorKind || kind, false);
          return;
        }
        const btn = e.target.closest(".msel-opt");
        if (!btn) return;
        if (field === "thick") {
          if (!state.adminPick[kind + "Rates"]) state.adminPick[kind + "Rates"] = {};
          syncMmRatesFromDom(wrapId, state.adminPick[kind + "Rates"]);
          togglePick(state.adminPick[kind + "Thicks"], btn.dataset.mm, true);
        } else {
          togglePick(state.adminPick[kind + "Colors"], btn.dataset.color, false);
        }
        renderAdminPicks();
        if (field === "thick") {
          const rateInp = $(wrapId) && $(wrapId).querySelector('[data-mm-rate="' + String(Number(btn.dataset.mm)) + '"]');
          if (rateInp && !rateInp.disabled) {
            rateInp.focus();
            rateInp.select();
          }
        }
      });
      wrap.addEventListener("input", (e) => {
        const inp = e.target.closest(".msel-mm-rate");
        if (!inp || field !== "thick") return;
        if (!state.adminPick[kind + "Rates"]) state.adminPick[kind + "Rates"] = {};
        const rates = state.adminPick[kind + "Rates"];
        const v = parseFloat(inp.value);
        if (Number.isFinite(v) && v >= 0) rates[String(inp.dataset.mmRate)] = v;
        else delete rates[String(inp.dataset.mmRate)];
        const toggleId = kind === "company" ? "company-thick-toggle" : "alu-thick-toggle";
        if ($(toggleId)) $(toggleId).textContent = thickRateLabel(state.adminPick[kind + "Thicks"], rates);
      });
      wrap.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        if (e.target.closest(".msel-custom input[type='number']") || e.target.id === "new-company-thick" || e.target.id === "new-alu-thick") {
          e.preventDefault();
          addThickPick(kind, false);
          return;
        }
        if (e.target.closest(".msel-custom input[type='text']") || e.target.id === "new-company-color" || e.target.id === "new-alu-color") {
          e.preventDefault();
          addColorPick(kind, false);
        }
      });
    }
    bindPanel("new-company-thicks", "company", "thick");
    bindPanel("new-company-colors", "company", "color");
    bindPanel("new-alu-thicks", "alu", "thick");
    bindPanel("new-alu-colors", "alu", "color");
    document.addEventListener("click", (e) => {
      const toggle = e.target.closest(".msel-toggle");
      if (toggle) {
        const box = toggle.closest(".msel");
        document.querySelectorAll(".msel.open").forEach((el) => {
          if (el !== box) el.classList.remove("open");
        });
        if (box) {
          box.classList.toggle("open");
          box.classList.remove("drop-up");
          if (box.classList.contains("open")) {
            const panel = box.querySelector(".msel-panel");
            if (panel) {
              const r = panel.getBoundingClientRect();
              if (r.bottom > window.innerHeight - 16) box.classList.add("drop-up");
            }
          }
        }
        return;
      }
      if (!e.target.closest(".msel")) {
        document.querySelectorAll(".msel.open").forEach((el) => el.classList.remove("open"));
      }
    });
  }
  async function storeGet(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  async function storeSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* ignore */ }
  }

  function flashSaved(msg) {
    flashNote(msg || T.savedOk || "সংরক্ষণ হয়েছে ✓", false);
  }

  var persistOkMsg = "";
  var TOAST_MAX = 5;

  function dismissToast(el) {
    if (!el || !el.parentNode) return;
    el.classList.remove("show");
    clearTimeout(el._hide);
    clearTimeout(el._gone);
    el._gone = setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 340);
  }

  function flashNote(text, isErr) {
    const stack = $("save-flash");
    if (!stack) return;
    const msg = text || T.savedOk || "";
    const isWait = !isErr && (msg === T.savingBtn || /সংরক্ষণ হচ্ছে|Saving/i.test(msg));
    const kind = isErr ? "err" : (isWait ? "wait" : "ok");

    if (isWait) {
      const existing = stack.querySelector(".app-toast.is-wait");
      if (existing) {
        const m = existing.querySelector(".app-toast-msg");
        if (m) m.textContent = msg;
        existing.classList.add("show");
        return;
      }
    } else {
      stack.querySelectorAll(".app-toast.is-wait").forEach(dismissToast);
    }

    const el = document.createElement("div");
    el.className = "app-toast is-" + kind;
    el.setAttribute("role", "status");
    el.innerHTML = '<span class="app-toast-ico" aria-hidden="true"></span><span class="app-toast-msg"></span>';
    el.querySelector(".app-toast-msg").textContent = msg;
    stack.appendChild(el);

    while (stack.querySelectorAll(".app-toast").length > TOAST_MAX) {
      const oldest = stack.querySelector(".app-toast");
      if (oldest) dismissToast(oldest);
      else break;
    }

    requestAnimationFrame(function () {
      el.classList.add("show");
    });

    if (isWait) return;
    el._hide = setTimeout(function () {
      dismissToast(el);
    }, isErr ? 3400 : 2400);
  }

  function setSaveButtonsBusy(on) {
    ["btn-save-shop", "btn-save-charges", "btn-save-cut"].forEach(function (id) {
      const btn = $(id);
      if (!btn) return;
      btn.disabled = !!on;
      btn.classList.toggle("is-busy", !!on);
      const label = btn.querySelector("span:last-child") || btn.querySelector("span") || btn;
      if (!btn.dataset.labelIdle) btn.dataset.labelIdle = (label.textContent || T.saveBtn || "").trim();
      if (label.tagName === "SPAN" || label === btn) {
        label.textContent = on ? (T.savingBtn || "সংরক্ষণ হচ্ছে...") : (btn.dataset.labelIdle || T.saveBtn);
      }
    });
  }

  function cleanNumberValue(raw) {
    let v = String(raw || "").replace(/[^0-9.]/g, "");
    const dot = v.indexOf(".");
    if (dot >= 0) v = v.slice(0, dot + 1) + v.slice(dot + 1).replace(/\./g, "");
    return v;
  }

  function readNonNeg(el) {
    if (!el) return NaN;
    const n = parseFloat(el.value);
    return Number.isFinite(n) && n >= 0 ? n : NaN;
  }

  function cleanTextValue(raw) {
    return String(raw || "").replace(/\s+/g, " ").trim();
  }

  function markInvalid(el, on) {
    if (el) el.classList.toggle("is-invalid", !!on);
  }

  function bindFieldGuards() {
    document.addEventListener("keydown", (e) => {
      const el = e.target;
      if (!el || el.tagName !== "INPUT") return;
      if (el.type === "number" && (e.key === "e" || e.key === "E" || e.key === "+" || e.key === "-")) e.preventDefault();
    });
    document.addEventListener("input", (e) => {
      const el = e.target;
      if (!el || el.tagName !== "INPUT") return;
      if (el.type === "number") {
        const next = cleanNumberValue(el.value);
        if (el.value !== next) el.value = next;
        markInvalid(el, el.value !== "" && Number.isNaN(readNonNeg(el)));
        return;
      }
      if (el.id === "quote-phone" || el.id === "new-staff-pin" || el.id === "owner-pin") {
        const next = el.value.replace(/\D/g, "");
        if (el.value !== next) el.value = next;
        return;
      }
      if (el.id === "in-h" || el.id === "in-w" || el.id === "cut-h" || el.id === "cut-w") {
        let next = String(el.value || "").replace(/[^\d.]/g, "");
        const dot = next.indexOf(".");
        if (dot >= 0) {
          next = next.slice(0, dot + 1) + next.slice(dot + 1).replace(/\./g, "").slice(0, 1);
        }
        if (el.value !== next) el.value = next;
      }
    });
  }

  function numVal(id) {
    return parseFloat($(id).value);
  }

  function glassTint(color) {
    const map = {
      clear: { fill: "#6eb8d4", op: 0.22 },
      green: { fill: "#157a3a", op: 0.55 },
      blue: { fill: "#0f3d8a", op: 0.55 },
      bronze: { fill: "#7a3f0c", op: 0.58 },
      gray: { fill: "#1f2830", op: 0.56 },
      black: { fill: "#070a10", op: 0.72 },
      frosted: { fill: "#e8eef2", op: 0.82 }
    };
    return map[color && color.id] || map.clear;
  }

  function drawOutdoor(x, y, w, h, uid) {
    const gnd = y + h * 0.62;
    const sunX = x + w * 0.78;
    const sunY = y + h * 0.16;
    const sc = Math.max(0.65, Math.min(w, h) / 95);
    function tree(cx, baseY, s, deep) {
      return (
        '<rect x="' + (cx - 1.2 * s) + '" y="' + (baseY - 9 * s) + '" width="' + (2.4 * s) + '" height="' + (11 * s) + '" rx="' + (0.6 * s) + '" fill="' + (deep ? "#3d2a1c" : "#5a3d28") + '"/>' +
        '<ellipse cx="' + cx + '" cy="' + (baseY - 18 * s) + '" rx="' + (10 * s) + '" ry="' + (9 * s) + '" fill="' + (deep ? "#1e4a28" : "#2a5f34") + '"/>' +
        '<ellipse cx="' + (cx - 5.5 * s) + '" cy="' + (baseY - 12 * s) + '" rx="' + (7 * s) + '" ry="' + (6.2 * s) + '" fill="' + (deep ? "#2d6a38" : "#3d7a45") + '"/>' +
        '<ellipse cx="' + (cx + 5.2 * s) + '" cy="' + (baseY - 12.5 * s) + '" rx="' + (6.4 * s) + '" ry="' + (5.8 * s) + '" fill="' + (deep ? "#356f3c" : "#4a8a4e") + '"/>' +
        '<ellipse cx="' + (cx + 1.5 * s) + '" cy="' + (baseY - 20 * s) + '" rx="' + (4.2 * s) + '" ry="' + (3.5 * s) + '" fill="#6aa85a" opacity="0.45"/>'
      );
    }
    function bldg(bx, by, bw, bh, tone, accent) {
      const winY = by + bh * 0.16;
      const winH = Math.max(2, bh * 0.09);
      const cols = Math.max(2, Math.floor(bw / 6.2));
      const rows = Math.max(2, Math.floor(bh / 13));
      let wins = "";
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const wx = bx + 1.6 + c * ((bw - 3.2) / cols);
          const wy = winY + r * (winH + 2.6);
          if (wy + winH > by + bh - 2.5) continue;
          wins += '<rect x="' + wx + '" y="' + wy + '" width="' + Math.max(2, (bw - 3.2) / cols - 1.3) + '" height="' + winH + '" rx="0.25" fill="' + accent + '" opacity="' + (0.5 + (c % 2) * 0.18) + '"/>';
        }
      }
      return (
        '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + bh + '" fill="' + tone + '"/>' +
        '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + Math.max(1.1, bh * 0.045) + '" fill="#fff" opacity="0.15"/>' +
        '<rect x="' + (bx + bw - 1.1) + '" y="' + by + '" width="1.1" height="' + bh + '" fill="#000" opacity="0.12"/>' +
        wins
      );
    }
    return (
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="url(#' + uid + 'sky)"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (h * 0.45) + '" fill="url(#' + uid + 'haze)" opacity="0.7"/>' +
      '<ellipse cx="' + sunX + '" cy="' + sunY + '" rx="' + (w * 0.22) + '" ry="' + (h * 0.14) + '" fill="#fff4c8" opacity="0.28"/>' +
      '<circle cx="' + sunX + '" cy="' + sunY + '" r="' + Math.max(5.5, w * 0.048) + '" fill="#ffe7a0"/>' +
      '<circle cx="' + sunX + '" cy="' + sunY + '" r="' + Math.max(3.2, w * 0.028) + '" fill="#fff8dc"/>' +
      '<ellipse cx="' + (x + w * 0.2) + '" cy="' + (y + h * 0.14) + '" rx="' + (w * 0.14) + '" ry="' + (h * 0.032) + '" fill="#fff" opacity="0.55"/>' +
      '<ellipse cx="' + (x + w * 0.3) + '" cy="' + (y + h * 0.125) + '" rx="' + (w * 0.09) + '" ry="' + (h * 0.026) + '" fill="#fff" opacity="0.38"/>' +
      '<ellipse cx="' + (x + w * 0.52) + '" cy="' + (y + h * 0.19) + '" rx="' + (w * 0.11) + '" ry="' + (h * 0.028) + '" fill="#fff" opacity="0.32"/>' +
      '<path d="M ' + x + " " + (gnd - h * 0.06) + " L " + (x + w * 0.2) + " " + (gnd - h * 0.15) + " L " + (x + w * 0.4) + " " + (gnd - h * 0.09) + " L " + (x + w * 0.58) + " " + (gnd - h * 0.18) + " L " + (x + w * 0.76) + " " + (gnd - h * 0.1) + " L " + (x + w) + " " + (gnd - h * 0.07) + " L " + (x + w) + " " + gnd + " L " + x + " " + gnd + ' Z" fill="#7f95a8" opacity="0.26"/>' +
      bldg(x + w * 0.04, gnd - h * 0.4, w * 0.14, h * 0.4, "#8a97a4", "#9ec9e0") +
      bldg(x + w * 0.17, gnd - h * 0.5, w * 0.12, h * 0.5, "#74828f", "#7eb6d2") +
      bldg(x + w * 0.3, gnd - h * 0.34, w * 0.13, h * 0.34, "#9aa6b2", "#b7daf0") +
      '<path d="M ' + x + " " + (gnd - h * 0.02) + " C " + (x + w * 0.22) + " " + (gnd - h * 0.16) + " " + (x + w * 0.5) + " " + (gnd + h * 0.02) + " " + (x + w) + " " + (gnd - h * 0.1) + " L " + (x + w) + " " + (y + h) + " L " + x + " " + (y + h) + ' Z" fill="#3f5f36"/>' +
      '<path d="M ' + x + " " + gnd + " C " + (x + w * 0.28) + " " + (gnd - h * 0.12) + " " + (x + w * 0.58) + " " + (gnd + h * 0.04) + " " + (x + w) + " " + (gnd - h * 0.08) + " L " + (x + w) + " " + (gnd + h * 0.14) + " L " + x + " " + (gnd + h * 0.1) + ' Z" fill="#5f8a4c"/>' +
      '<path d="M ' + x + " " + (gnd + h * 0.05) + " C " + (x + w * 0.35) + " " + (gnd - h * 0.05) + " " + (x + w * 0.7) + " " + (gnd + h * 0.08) + " " + (x + w) + " " + (gnd + h * 0.02) + " L " + (x + w) + " " + (y + h) + " L " + x + " " + (y + h) + ' Z" fill="#7eaa60" opacity="0.5"/>' +
      tree(x + w * 0.56, gnd + 1, sc * 0.95, true) +
      tree(x + w * 0.7, gnd + 3, sc * 1.18, false) +
      tree(x + w * 0.85, gnd + 2, sc * 0.88, true) +
      '<rect x="' + x + '" y="' + (gnd + h * 0.12) + '" width="' + w + '" height="' + Math.max(4, h * 0.1) + '" fill="#4f6a40" opacity="0.26"/>' +
      '<ellipse cx="' + (x + w * 0.4) + '" cy="' + (gnd + h * 0.08) + '" rx="' + (w * 0.16) + '" ry="' + (h * 0.03) + '" fill="#8fba68" opacity="0.32"/>'
    );
  }

  function drawLock(style, cx, cy, s, uid) {
    if (!style || style === "none") return "";
    const m = uid + "hwm";
    const g = uid + "hwg";
    if (style === "sliding") {
      return '<g class="viz-lock">' +
        '<rect x="' + (cx - 5.1 * s) + '" y="' + (cy - 19 * s) + '" width="' + (10.2 * s) + '" height="' + (38 * s) + '" rx="' + (2.1 * s) + '" fill="url(#' + m + ')" stroke="rgba(16,24,32,0.32)" stroke-width="' + (0.65 * s) + '"/>' +
        '<rect x="' + (cx - 3 * s) + '" y="' + (cy - 15 * s) + '" width="' + (6 * s) + '" height="' + (30 * s) + '" rx="' + (1.4 * s) + '" fill="#15222a" opacity="0.4"/>' +
        '<rect x="' + (cx - 2.1 * s) + '" y="' + (cy - 5 * s) + '" width="' + (4.2 * s) + '" height="' + (10.5 * s) + '" rx="' + (1 * s) + '" fill="url(#' + g + ')"/>' +
        "</g>";
    }
    if (style === "casement") {
      return '<g class="viz-lock">' +
        '<rect x="' + (cx - 6.8 * s) + '" y="' + (cy - 9 * s) + '" width="' + (13.6 * s) + '" height="' + (18 * s) + '" rx="' + (2.3 * s) + '" fill="url(#' + m + ')" stroke="rgba(16,24,32,0.28)" stroke-width="' + (0.55 * s) + '"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (3.7 * s) + '" fill="url(#' + g + ')"/>' +
        '<path d="M ' + (cx + 2.1 * s) + " " + cy + " C " + (cx + 15 * s) + " " + (cy - 10.5 * s) + " " + (cx + 23 * s) + " " + (cy - 2.6 * s) + " " + (cx + 17.2 * s) + " " + (cy + 3.1 * s) + " C " + (cx + 13.4 * s) + " " + (cy + 5.8 * s) + " " + (cx + 7.6 * s) + " " + (cy + 2.3 * s) + " " + (cx + 2.8 * s) + " " + (cy + 1.1 * s) + ' Z" fill="url(#' + g + ')" stroke="#6b5420" stroke-width="' + (0.5 * s) + '"/>' +
        "</g>";
    }
    if (style === "deadbolt") {
      return '<g class="viz-lock">' +
        '<rect x="' + (cx - 10 * s) + '" y="' + (cy - 11 * s) + '" width="' + (20 * s) + '" height="' + (22 * s) + '" rx="' + (3 * s) + '" fill="url(#' + m + ')" stroke="rgba(16,24,32,0.28)" stroke-width="' + (0.55 * s) + '"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (5.1 * s) + '" fill="url(#' + g + ')"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + (1.6 * s) + '" fill="#1f2d3a"/>' +
        "</g>";
    }
    if (style === "knob") {
      return '<g class="viz-lock">' +
        '<rect x="' + (cx - 4.6 * s) + '" y="' + (cy - 5 * s) + '" width="' + (6.2 * s) + '" height="' + (10 * s) + '" rx="' + (1.3 * s) + '" fill="url(#' + m + ')"/>' +
        '<circle cx="' + (cx + 5.2 * s) + '" cy="' + cy + '" r="' + (7.8 * s) + '" fill="url(#' + g + ')" stroke="#8a6d28" stroke-width="' + (0.65 * s) + '"/>' +
        '<circle cx="' + (cx + 5.2 * s) + '" cy="' + cy + '" r="' + (3 * s) + '" fill="#f6e7b0"/>' +
        "</g>";
    }
    return '<g class="viz-lock">' +
      '<rect x="' + (cx - 6.4 * s) + '" y="' + (cy - 4.8 * s) + '" width="' + (12.8 * s) + '" height="' + (10.6 * s) + '" rx="' + (2 * s) + '" fill="url(#' + m + ')"/>' +
      '<path d="M ' + (cx - 3.5 * s) + " " + (cy - 4.8 * s) + " v " + (-5.8 * s) + " a " + (3.5 * s) + " " + (3.5 * s) + " 0 1 1 " + (7 * s) + " 0 v " + (5.8 * s) + '" fill="none" stroke="url(#' + m + ')" stroke-width="' + (1.7 * s) + '"/>' +
      "</g>";
  }

  function buildDiagram(opts) {
    const type = getType(opts.typeId);
    const color = getColor(opts.glassColor);
    const aluC = getAluColor(opts.aluColor);
    const tint = glassTint(color);
    const isDoor = type.kind === "door";
    const isSliding = String(type.id).indexOf("sliding") !== -1;
    const h = opts.heightFt > 0 ? opts.heightFt : (isDoor ? 7 : 5);
    const w = opts.widthFt > 0 ? opts.widthFt : (isDoor ? 3.5 : 4);
    const shutters = Math.max(1, type.shutters || 1);
    const compact = Boolean(opts.compact);
    const boxH = compact ? 118 : 252;
    const boxW = Math.max(compact ? 50 : 86, Math.min(compact ? 90 : 292, boxH * (w / h)));
    const padL = compact ? 6 : 52;
    const padR = compact ? 8 : 28;
    const padT = compact ? 6 : 20;
    const padB = compact ? 8 : 50;
    const svgW = boxW + padL + padR;
    const svgH = boxH + padT + padB;
    const x = padL;
    const y = padT;
    const uid = "g" + Math.random().toString(36).slice(2, 8);
    const frame = compact ? 5 : 10;
    const sash = compact ? 2.5 : 4.4;
    const overlap = isSliding && shutters > 1 ? (compact ? 7 : 13) : 0;
    const paneGap = !isSliding && shutters > 1 ? (compact ? 4 : 7) : 0;
    const innerX = x + frame;
    const innerY = y + frame;
    const innerW = boxW - frame * 2;
    const innerH = boxH - frame * 2;
    const paneW = (innerW + overlap * (shutters - 1) - paneGap * (shutters - 1)) / shutters;
    const hasKick = isDoor && String(type.id).indexOf("door-sliding") !== 0;
    const glassH = hasKick ? innerH * 0.62 : innerH;
    const lockS = compact ? 0.58 : 1;
    const clipId = uid + "open";

    let defs = "" +
      '<linearGradient id="' + uid + 'aluV" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="' + aluC.light + '"/>' +
        '<stop offset="38%" stop-color="' + aluC.mid + '"/>' +
        '<stop offset="72%" stop-color="' + aluC.mid + '"/>' +
        '<stop offset="100%" stop-color="' + aluC.dark + '"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'aluH" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0%" stop-color="' + aluC.light + '"/>' +
        '<stop offset="45%" stop-color="' + aluC.mid + '"/>' +
        '<stop offset="100%" stop-color="' + aluC.dark + '"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'sheen" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#fff" stop-opacity="0.55"/>' +
        '<stop offset="18%" stop-color="#fff" stop-opacity="0.18"/>' +
        '<stop offset="42%" stop-color="#fff" stop-opacity="0.04"/>' +
        '<stop offset="58%" stop-color="#9ad4ff" stop-opacity="0.08"/>' +
        '<stop offset="100%" stop-color="#041018" stop-opacity="0.06"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'glassBand" x1="0" y1="0" x2="1" y2="0">' +
        '<stop offset="0%" stop-color="#fff" stop-opacity="0"/>' +
        '<stop offset="35%" stop-color="#fff" stop-opacity="0"/>' +
        '<stop offset="48%" stop-color="#fff" stop-opacity="0.22"/>' +
        '<stop offset="56%" stop-color="#fff" stop-opacity="0.05"/>' +
        '<stop offset="100%" stop-color="#fff" stop-opacity="0"/>' +
      "</linearGradient>" +
      '<radialGradient id="' + uid + 'glow" cx="78%" cy="14%" r="48%">' +
        '<stop offset="0%" stop-color="#fff8d6" stop-opacity="0.62"/>' +
        '<stop offset="55%" stop-color="#fff8d6" stop-opacity="0.12"/>' +
        '<stop offset="100%" stop-color="#fff8d6" stop-opacity="0"/>' +
      "</radialGradient>" +
      '<linearGradient id="' + uid + 'sky" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#5ba4d8"/>' +
        '<stop offset="42%" stop-color="#9dcee9"/>' +
        '<stop offset="78%" stop-color="#d5ebf4"/>' +
        '<stop offset="100%" stop-color="#e8f2d6"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'haze" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#fff" stop-opacity="0.35"/>' +
        '<stop offset="100%" stop-color="#fff" stop-opacity="0"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'wall" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#f2f5f7"/>' +
        '<stop offset="55%" stop-color="#e6ebef"/>' +
        '<stop offset="100%" stop-color="#cfd6dc"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'floor" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#b8c0c8" stop-opacity="0.35"/>' +
        '<stop offset="100%" stop-color="#8a949e" stop-opacity="0.55"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'hwm" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0%" stop-color="#f5f7f8"/>' +
        '<stop offset="100%" stop-color="#5f6b74"/>' +
      "</linearGradient>" +
      '<linearGradient id="' + uid + 'hwg" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0%" stop-color="#f8e9b8"/>' +
        '<stop offset="55%" stop-color="#d4b56a"/>' +
        '<stop offset="100%" stop-color="#8a6d28"/>' +
      "</linearGradient>" +
      '<pattern id="' + uid + 'net" width="4.5" height="4.5" patternUnits="userSpaceOnUse">' +
        '<path d="M0 0 H4.5 M0 0 V4.5" stroke="#1a3324" stroke-width="0.32" opacity="0.42"/>' +
      "</pattern>" +
      '<pattern id="' + uid + 'brush" width="5" height="12" patternUnits="userSpaceOnUse">' +
        '<rect width="5" height="12" fill="' + aluC.mid + '"/>' +
        '<path d="M0 0 L5 12" stroke="' + aluC.light + '" stroke-width="0.5" opacity="0.38"/>' +
        '<path d="M2.5 0 L5 6" stroke="' + aluC.dark + '" stroke-width="0.28" opacity="0.22"/>' +
        '<path d="M0 6 L3 12" stroke="#fff" stroke-width="0.2" opacity="0.12"/>' +
      "</pattern>" +
      '<filter id="' + uid + 'sh" x="-22%" y="-16%" width="144%" height="148%">' +
        '<feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#1a2430" flood-opacity="0.28"/>' +
      "</filter>" +
      '<filter id="' + uid + 'soft" x="-8%" y="-8%" width="116%" height="116%">' +
        '<feGaussianBlur stdDeviation="1.1"/>' +
      "</filter>" +
      '<clipPath id="' + clipId + '"><rect x="' + innerX + '" y="' + innerY + '" width="' + innerW + '" height="' + innerH + '" rx="1.2"/></clipPath>';

    let scene = "";
    if (!compact) {
      scene += '<rect x="0" y="0" width="' + svgW + '" height="' + svgH + '" fill="url(#' + uid + 'wall)"/>';
      scene += '<rect x="0" y="0" width="' + svgW + '" height="' + (svgH * 0.18) + '" fill="#fff" opacity="0.28"/>';
      scene += '<rect x="0" y="' + (svgH - 28) + '" width="' + svgW + '" height="28" fill="url(#' + uid + 'floor)"/>';
      scene += '<ellipse cx="' + (x + boxW / 2) + '" cy="' + (y + boxH + 18) + '" rx="' + (boxW * 0.42) + '" ry="7" fill="#1a2430" opacity="0.12" filter="url(#' + uid + 'soft)"/>';
    }

    const depth = compact ? 4 : (isDoor ? 16 : 12);
    if (!compact) {
      scene += '<rect x="' + (x - 8) + '" y="' + (y - 8) + '" width="' + (boxW + 16) + '" height="' + (boxH + 18) + '" rx="4" fill="#9aa7b2" opacity="0.28"/>';
      scene += '<rect x="' + (x - 4.5) + '" y="' + (y - 4.5) + '" width="' + (boxW + 9) + '" height="' + (boxH + 11) + '" rx="3" fill="#7d8a95" opacity="0.18"/>';
    }
    scene += '<path d="M ' + (x + boxW) + " " + y + " L " + (x + boxW + depth) + " " + (y + depth * 0.32) + " L " + (x + boxW + depth) + " " + (y + boxH + depth * 0.32) + " L " + (x + boxW) + " " + (y + boxH) + ' Z" fill="' + aluC.dark + '"/>';
    scene += '<path d="M ' + x + " " + (y + boxH) + " L " + (x + boxW) + " " + (y + boxH) + " L " + (x + boxW + depth) + " " + (y + boxH + depth * 0.32) + " L " + (x + depth) + " " + (y + boxH + depth * 0.32) + ' Z" fill="' + aluC.mid + '"/>';
    scene += '<g filter="url(#' + uid + 'sh)">';
    scene += '<rect x="' + x + '" y="' + y + '" width="' + boxW + '" height="' + boxH + '" rx="2.2" fill="url(#' + uid + 'brush)"/>';
    scene += "</g>";
    scene += '<rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="' + (boxW - 4) + '" height="' + (boxH - 4) + '" rx="1.4" fill="url(#' + uid + 'aluV)"/>';
    scene += '<rect x="' + (x + 1.2) + '" y="' + (y + 1.2) + '" width="' + (boxW - 2.4) + '" height="2.6" fill="#fff" opacity="0.42"/>';
    scene += '<rect x="' + (x + 1.2) + '" y="' + (y + 1.2) + '" width="2.4" height="' + (boxH - 2.4) + '" fill="#fff" opacity="0.22"/>';
    scene += '<rect x="' + (x + 2) + '" y="' + (y + boxH - 3.6) + '" width="' + (boxW - 4) + '" height="2.2" fill="#000" opacity="0.2"/>';
    scene += '<rect x="' + (x + boxW - 3.4) + '" y="' + (y + 2) + '" width="1.6" height="' + (boxH - 4) + '" fill="#000" opacity="0.12"/>';

    scene += '<g clip-path="url(#' + clipId + ')">' + drawOutdoor(innerX, innerY, innerW, innerH, uid) + "</g>";
    scene += '<rect x="' + innerX + '" y="' + innerY + '" width="' + innerW + '" height="' + innerH + '" rx="1.2" fill="#041018" opacity="0.06"/>';
    scene += '<rect x="' + innerX + '" y="' + innerY + '" width="' + innerW + '" height="3" fill="#000" opacity="0.1"/>';
    scene += '<rect x="' + innerX + '" y="' + innerY + '" width="2.2" height="' + innerH + '" fill="#000" opacity="0.08"/>';

    const order = [];
    for (let i = 0; i < shutters; i += 1) order.push(i);
    if (isSliding && shutters === 2) order.reverse();

    let panes = "";
    order.forEach(function (i) {
      const px = innerX + i * (paneW - overlap + paneGap);
      const py = innerY;
      const paneClip = uid + "p" + i;
      const gw = Math.max(2, paneW - sash * 2);
      const gh = Math.max(2, glassH - sash * 2);
      defs += '<clipPath id="' + paneClip + '"><rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" rx="1"/></clipPath>';
      panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + sash + '" fill="url(#' + uid + 'aluH)"/>';
      panes += '<rect x="' + px + '" y="' + (py + glassH - sash) + '" width="' + paneW + '" height="' + sash + '" fill="url(#' + uid + 'aluH)"/>';
      panes += '<rect x="' + px + '" y="' + py + '" width="' + sash + '" height="' + glassH + '" fill="url(#' + uid + 'aluV)"/>';
      panes += '<rect x="' + (px + paneW - sash) + '" y="' + py + '" width="' + sash + '" height="' + glassH + '" fill="url(#' + uid + 'aluV)"/>';
      panes += '<rect x="' + (px + 0.5) + '" y="' + (py + 0.5) + '" width="' + (paneW - 1) + '" height="1.2" fill="#fff" opacity="0.35"/>';
      panes += '<rect x="' + (px + sash) + '" y="' + (py + sash) + '" width="' + gw + '" height="' + gh + '" fill="' + tint.fill + '" opacity="' + tint.op + '"/>';
      panes += '<g clip-path="url(#' + paneClip + ')">';
      panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" fill="url(#' + uid + 'sheen)"/>';
      panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" fill="url(#' + uid + 'glow)" opacity="0.5"/>';
      panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" fill="url(#' + uid + 'glassBand)" opacity="0.85"/>';
      panes += '<path d="M ' + (px + paneW * 0.06) + " " + (py + sash + 1) + " L " + (px + paneW * 0.38) + " " + (py + sash + 1) + " L " + (px + paneW * 0.18) + " " + (py + glassH - sash) + " L " + (px + sash + 1) + " " + (py + glassH - sash) + ' Z" fill="#fff" opacity="' + (color.id === "frosted" ? 0.28 : 0.18) + '"/>';
      panes += '<path d="M ' + (px + paneW * 0.55) + " " + (py + sash + 2) + " L " + (px + paneW * 0.72) + " " + (py + sash + 2) + " L " + (px + paneW * 0.62) + " " + (py + glassH * 0.45) + " L " + (px + paneW * 0.48) + " " + (py + glassH * 0.45) + ' Z" fill="#fff" opacity="0.1"/>';
      panes += '<rect x="' + (px + sash + 0.7) + '" y="' + (py + sash + 0.7) + '" width="1.6" height="' + Math.max(2, gh - 1.4) + '" fill="#fff" opacity="0.32"/>';
      if (opts.hasNet) {
        panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" fill="url(#' + uid + 'net)" opacity="0.78"/>';
      }
      if (color.id === "frosted") {
        panes += '<rect x="' + px + '" y="' + py + '" width="' + paneW + '" height="' + glassH + '" fill="#fff" opacity="0.22"/>';
      }
      panes += "</g>";
      panes += '<rect x="' + (px + 0.6) + '" y="' + (py + 0.6) + '" width="' + (paneW - 1.2) + '" height="' + (glassH - 1.2) + '" fill="none" stroke="' + aluC.dark + '" stroke-width="0.75" opacity="0.32"/>';
      if (hasKick) {
        const ky = py + glassH + 1.5;
        const kh = innerH - glassH - 1.5;
        panes += '<rect x="' + px + '" y="' + ky + '" width="' + paneW + '" height="' + kh + '" fill="url(#' + uid + 'aluV)"/>';
        panes += '<rect x="' + (px + sash + 1.5) + '" y="' + (ky + 5) + '" width="' + Math.max(4, paneW - sash * 2 - 3) + '" height="' + Math.max(8, kh - 10) + '" rx="1.6" fill="' + aluC.dark + '" opacity="0.2"/>';
        panes += '<rect x="' + (px + sash + 3) + '" y="' + (ky + 7) + '" width="' + Math.max(2, paneW - sash * 2 - 6) + '" height="' + Math.max(4, kh - 14) + '" rx="1.1" fill="' + aluC.light + '" opacity="0.14"/>';
        panes += '<rect x="' + (px + sash + 3) + '" y="' + (ky + 7) + '" width="' + Math.max(2, paneW - sash * 2 - 6) + '" height="1.2" fill="#fff" opacity="0.18"/>';
      }
    });

    let extras = "";
    if (isSliding) {
      extras += '<rect x="' + innerX + '" y="' + (innerY + innerH - 3.4) + '" width="' + innerW + '" height="3.4" fill="' + aluC.dark + '" opacity="0.58"/>';
      extras += '<rect x="' + innerX + '" y="' + (innerY + innerH - 2.2) + '" width="' + innerW + '" height="1.1" fill="#111" opacity="0.28"/>';
      extras += '<rect x="' + innerX + '" y="' + (innerY + innerH - 3.1) + '" width="' + innerW + '" height="0.7" fill="#fff" opacity="0.12"/>';
    }
    extras += '<rect x="' + x + '" y="' + y + '" width="' + boxW + '" height="' + boxH + '" rx="2.4" fill="none" stroke="' + aluC.dark + '" stroke-width="1.55"/>';

    const sillH = compact ? 3.5 : 7.5;
    const sillOver = compact ? 3 : 7;
    extras += '<rect x="' + (x - sillOver) + '" y="' + (y + boxH - 1) + '" width="' + (boxW + sillOver * 2) + '" height="' + sillH + '" rx="1.2" fill="url(#' + uid + 'aluH)"/>';
    extras += '<rect x="' + (x - sillOver) + '" y="' + (y + boxH - 1) + '" width="' + (boxW + sillOver * 2) + '" height="1.6" fill="#fff" opacity="0.28"/>';
    extras += '<rect x="' + (x - sillOver + 1) + '" y="' + (y + boxH + sillH - 2.4) + '" width="' + (boxW + sillOver * 2 - 2) + '" height="1.2" fill="#000" opacity="0.14"/>';

    let lx;
    let ly = y + (hasKick ? boxH * 0.4 : boxH * 0.48);
    if (isSliding && shutters > 1) {
      lx = innerX + paneW - overlap * 0.5;
    } else if (type.id === "door-double") {
      lx = x + boxW * 0.5 - (compact ? 6 : 10);
    } else {
      lx = x + boxW - frame - (compact ? 8 : 14);
    }
    extras += drawLock(opts.lockStyle || "none", lx, ly, lockS, uid);

    let dims = "";
    if (!compact) {
      const hx = 20;
      const labelH = ftInLabel(h);
      const labelW = ftInLabel(w);
      const cy = y + boxH / 2;
      const wy = y + boxH + 26;
      const wx = x + boxW / 2;
      dims +=
        '<line x1="' + hx + '" y1="' + y + '" x2="' + hx + '" y2="' + (y + boxH) + '" stroke="#0a4456" stroke-width="1.1"/>' +
        '<line x1="' + (hx - 4) + '" y1="' + y + '" x2="' + (hx + 4) + '" y2="' + y + '" stroke="#0a4456"/>' +
        '<line x1="' + (hx - 4) + '" y1="' + (y + boxH) + '" x2="' + (hx + 4) + '" y2="' + (y + boxH) + '" stroke="#0a4456"/>' +
        dimLabelChip(labelH, hx, cy, -90) +
        '<line x1="' + x + '" y1="' + wy + '" x2="' + (x + boxW) + '" y2="' + wy + '" stroke="#0a4456" stroke-width="1.1"/>' +
        '<line x1="' + x + '" y1="' + (wy - 4) + '" x2="' + x + '" y2="' + (wy + 4) + '" stroke="#0a4456"/>' +
        '<line x1="' + (x + boxW) + '" y1="' + (wy - 4) + '" x2="' + (x + boxW) + '" y2="' + (wy + 4) + '" stroke="#0a4456"/>' +
        dimLabelChip(labelW, wx, wy, 0);
    }

    return (
      '<svg class="viz-unit" viewBox="0 0 ' + svgW + " " + svgH + '" xmlns="http://www.w3.org/2000/svg" role="img">' +
        "<defs>" + defs + "</defs>" +
        scene +
        panes +
        extras +
        dims +
      "</svg>"
    );
  }

  function diagramOpts(extra) {
    const { heightFt, widthFt } = extra && extra.heightFt != null ? extra : {
      heightFt: inputSizeFt("h"),
      widthFt: inputSizeFt("w")
    };
    return {
      typeId: extra && extra.typeId ? extra.typeId : state.selectedType,
      heightFt,
      widthFt,
      glassColor: extra && extra.glassColor ? extra.glassColor : state.glassColor,
      aluColor: extra && extra.aluColor ? extra.aluColor : state.aluColor,
      lockStyle: extra && extra.lockStyle ? extra.lockStyle : lockStyleOf(selectedLock()),
      hasNet: extra && extra.hasNet != null ? extra.hasNet : state.hasNet,
      compact: Boolean(extra && extra.compact)
    };
  }

  function pulsePreview() {
    const stage = $("live-preview");
    stage.classList.remove("pulse");
    void stage.offsetWidth;
    stage.classList.add("pulse");
  }

  function renderLivePreview(animate) {
    if (!state.selectedKind || !state.selectedType) {
      $("live-preview").innerHTML = "";
      $("preview-kind").textContent = "-";
      $("preview-type").textContent = "-";
      $("preview-size").textContent = T.typeEnterSize;
      $("preview-color").textContent = colorLabel(state.glassColor);
      $("preview-lock").textContent = selectedLock() ? selectedLock().name : T.noLock;
      $("preview-net").textContent = state.hasNet ? T.netYes : T.netNo;
      updateLivePrice();
      return;
    }
    const opts = diagramOpts();
    const type = getType(opts.typeId);
    const lock = selectedLock();
    $("live-preview").innerHTML = buildDiagram(opts);
    scheduleAlignDimLabels($("live-preview"));
    $("preview-kind").textContent = kindLabel(type.kind);
    $("preview-type").textContent = type.label + " · " + type.sub;
    $("preview-size").textContent = opts.heightFt > 0 && opts.widthFt > 0
      ? ftInLabel(opts.heightFt) + " x " + ftInLabel(opts.widthFt)
      : T.typeEnterSize;
    $("preview-color").textContent = colorLabel(opts.glassColor);
    $("preview-lock").textContent = lock ? lock.name : T.noLock;
    $("preview-net").textContent = opts.hasNet ? T.netYes : T.netNo;
    if (animate) pulsePreview();
    updateLivePrice();
  }

  function renderKindPicker() {
    $("kind-heading").textContent = T.janala + " / " + T.dorja;
    $("kind-picker").innerHTML = `
      <button type="button" class="kind-btn${state.selectedKind === "window" ? " active" : ""}" data-kind="window">
        <img src="images/window-fixed.svg" alt="${escapeHtml(T.janala)}">
        <span class="name">${escapeHtml(T.janala)}</span>
        <span class="sub">${escapeHtml(T.janalaSub)}</span>
      </button>
      <button type="button" class="kind-btn${state.selectedKind === "door" ? " active" : ""}" data-kind="door">
        <img src="images/door-single.svg" alt="${escapeHtml(T.dorja)}">
        <span class="name">${escapeHtml(T.dorja)}</span>
        <span class="sub">${escapeHtml(T.dorjaSub)}</span>
      </button>
    `;
  }

  function renderTypePicker() {
    const section = $("section-types");
    if (!section) return;
    const hasKind = !!state.selectedKind;
    const isDoor = state.selectedKind === "door";
    const list = isDoor ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    section.classList.remove("hidden");
    section.classList.toggle("is-locked", !hasKind);
    $("types-heading").textContent = !hasKind ? T.dhoron : (isDoor ? T.doorTypes : T.winTypes);
    $("type-list").classList.toggle("doors", isDoor);
    $("type-list").innerHTML = list.map((t) =>
      '<button type="button" class="type-card' + (t.id === state.selectedType ? " active" : "") + '" data-type="' + t.id + '"' + (hasKind ? "" : " disabled") + ">" +
        '<img src="' + t.image + '" alt="' + escapeHtml(t.label) + '">' +
        '<span class="name">' + escapeHtml(t.label) + "</span>" +
        '<span class="sub">' + escapeHtml(t.sub) + "</span>" +
      "</button>"
    ).join("");
  }

  function normalizeCompanies(list) {
    return expandNamedCombos(list, normalizeColorId, 5).filter((c) => c.name);
  }

  function companyNames() {
    const names = [];
    const seen = {};
    state.companies.forEach((c) => {
      if (c.name && !seen[c.name]) {
        seen[c.name] = true;
        names.push(c.name);
      }
    });
    return names;
  }

  function selectedCompanyName() {
    return $("sel-company") ? $("sel-company").value : "";
  }

  function selectedGlassThick() {
    return $("sel-glass-thick") ? $("sel-glass-thick").value : "";
  }

  function companyRows(filters) {
    return state.companies.filter((c) => {
      if (filters.name && c.name !== filters.name) return false;
      if (filters.thick != null && filters.thick !== "" && String(c.thickness) !== String(filters.thick)) return false;
      if (filters.color && c.color !== filters.color) return false;
      return true;
    });
  }

  function uniqueCompany(field, filters) {
    const seen = {};
    const out = [];
    companyRows(filters).forEach((c) => {
      const key = String(c[field]);
      if (!seen[key]) {
        seen[key] = true;
        out.push(c[field]);
      }
    });
    return out;
  }

  function colorsForCompany(name, thick) {
    return uniqueCompany("color", { name: name, thick: thick });
  }

  function rateSpan(rows, unit) {
    const rates = (rows || []).map((x) => Number(x.rate)).filter((n) => Number.isFinite(n));
    if (!rates.length) return "";
    const min = Math.min.apply(null, rates);
    const max = Math.max.apply(null, rates);
    const u = unit || T.perSq;
    const text = min === max ? T.taka + min + u : T.taka + min + "\u2013" + max + u;
    return " (" + text + ")";
  }

  function colorPickHtml(c, active, rate, dataAttr, unit) {
    const u = unit || T.perSq;
    const price = rate != null && rate !== "" && Number.isFinite(Number(rate)) ? T.taka + Number(rate) + u : "";
    const label = c.label || T[c.labelKey] || c.id;
    return '<button type="button" class="color-pick' + (active ? " active" : "") + '" ' + dataAttr + ">" +
      '<span class="color-swatch" style="background:linear-gradient(135deg,' + c.light + "," + c.mid + ')"></span>' +
      '<span class="color-caption">' + escapeHtml(label) + "</span>" +
      (price ? '<span class="color-price">' + escapeHtml(price) + "</span>" : "") +
      "</button>";
  }

  function exactGlassCombo(name, thick, color) {
    return state.companies.find((c) => c.name === name && String(c.thickness) === String(thick) && c.color === color) || null;
  }

  function exactAluCombo(name, thick, color) {
    return state.aluminium.find((a) => a.name === name && String(a.thickness) === String(thick) && a.color === color) || null;
  }

  function selectedGlassCompany() {
    const name = selectedCompanyName();
    const thick = selectedGlassThick();
    return state.companies.find((c) => c.name === name && String(c.thickness) === String(thick) && c.color === state.glassColor)
      || state.companies.find((c) => c.name === name && String(c.thickness) === String(thick))
      || state.companies.find((c) => c.name === name)
      || null;
  }

  function syncGlassColorToCompany() {
    const available = colorsForCompany(selectedCompanyName(), selectedGlassThick());
    if (!available.length) return;
    if (available.indexOf(state.glassColor) < 0) state.glassColor = available[0];
  }

  function renderColorGrid() {
    const grid = $("color-grid");
    if (!grid) return;
    const name = selectedCompanyName();
    const thick = selectedGlassThick();
    const available = colorsForCompany(name, thick);
    const colors = available.map(function (id) { return getColor(id); }).filter(Boolean);
    if (!colors.length) {
      grid.innerHTML = emptyColorHintHtml();
      return;
    }
    if (available.indexOf(state.glassColor) < 0) state.glassColor = colors[0].id;
    grid.innerHTML = colors.map((c) => {
      const row = exactGlassCombo(name, thick, c.id);
      return colorPickHtml(c, c.id === state.glassColor, row ? row.rate : "", 'data-color="' + c.id + '"');
    }).join("");
  }

  function lockBox(el, locked) {
    if (!el) return;
    el.classList.toggle("is-locked", !!locked);
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "button") el.disabled = !!locked;
    el.querySelectorAll("input, select, button").forEach((node) => {
      node.disabled = !!locked;
    });
  }

  function syncCalcDetails() {
    const wrap = $("calc-details");
    if (!wrap) return;
    wrap.classList.remove("hidden", "is-locked");
    wrap.inert = false;
    const hasType = !!(state.selectedKind && state.selectedType);
    const qty = readNonNeg($("in-qty"));
    const hasQty = hasType && Number.isFinite(qty) && qty >= 1 && qty <= 99;
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const hasSize = hasQty && heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    const qtyBox = $("in-qty") && $("in-qty").closest(".field");
    const roomBox = $("in-room") && $("in-room").closest(".field");
    const sizeBox = wrap.querySelector(".size-row");
    lockBox(qtyBox, !hasType);
    lockBox(roomBox, !hasType);
    lockBox(sizeBox, !hasQty);
    let afterSize = false;
    [...wrap.children].forEach((child) => {
      if (child === qtyBox || child === roomBox) return;
      if (child.classList.contains("size-row")) {
        afterSize = true;
        return;
      }
      if (!afterSize) return;
      if (child.classList.contains("suta-hint")) return;
      lockBox(child, !hasSize);
    });
  }

  function setSelectedKind(kind) {
    state.selectedKind = kind;
    const list = kind === "door" ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    const keep = list.some((t) => t.id === state.selectedType);
    state.selectedType = keep ? state.selectedType : (list[0] ? list[0].id : null);
    if (kind === "window" && !keep) state.selectedType = "sliding2";
    renderKindPicker();
    renderTypePicker();
    syncCalcDetails();
    renderLivePreview(true);
  }

  function setSelectedType(id) {
    state.selectedType = id;
    renderTypePicker();
    syncCalcDetails();
    renderLivePreview(true);
  }

  function emptySelectOptionHtml() {
    return '<option value="" disabled selected>' + escapeHtml(T.selectEmpty) + "</option>";
  }

  function emptyColorHintHtml() {
    return '<span class="color-empty">' + escapeHtml(T.selectEmpty) + "</span>";
  }

  function renderCompanySelect() {
    const el = $("sel-company");
    if (!el) return;
    const names = companyNames();
    const cur = el.value;
    if (!names.length) {
      el.innerHTML = emptySelectOptionHtml();
      el.classList.add("is-empty");
      renderGlassThickSelect();
      return;
    }
    el.classList.remove("is-empty");
    el.innerHTML = names.map((n) => {
      const exact = exactGlassCombo(n, selectedGlassThick(), state.glassColor);
      const rows = exact ? [exact] : companyRows({ name: n });
      return '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + rateSpan(rows) + "</option>";
    }).join("");
    if (cur && names.indexOf(cur) >= 0) el.value = cur;
    else el.value = names[0];
    renderGlassThickSelect();
  }

  function renderLockSelect() {
    $("sel-lock").innerHTML = `<option value="-1">${T.noLock}</option>` +
      state.locks.map((l, i) =>
        `<option value="${i}">${escapeHtml(l.name)} (${T.taka}${l.rate})</option>`
      ).join("");
  }

  function renderGlassThickSelect() {
    const el = $("sel-glass-thick");
    if (!el) return;
    const name = selectedCompanyName();
    const thicks = uniqueCompany("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    if (!thicks.length) {
      el.innerHTML = emptySelectOptionHtml();
      el.classList.add("is-empty");
      syncGlassColorToCompany();
      renderColorGrid();
      return;
    }
    el.classList.remove("is-empty");
    el.innerHTML = thicks.map((mm) => {
      const exact = exactGlassCombo(name, mm, state.glassColor);
      const rows = exact ? [exact] : companyRows({ name: name, thick: mm });
      return '<option value="' + mm + '">' + mm + " " + T.mm + rateSpan(rows) + "</option>";
    }).join("");
    if (cur !== "") el.value = String(cur);
    else el.value = String(thicks[0]);
    syncGlassColorToCompany();
    renderColorGrid();
  }

  function onGlassCompanyChange() {
    renderGlassThickSelect();
    renderLivePreview(true);
  }

  function onGlassThickChange() {
    syncGlassColorToCompany();
    renderCompanySelect();
    renderLivePreview(true);
  }

  function onGlassColorChange(id) {
    const allowed = colorsForCompany(selectedCompanyName(), selectedGlassThick());
    if (allowed.indexOf(id) < 0) return;
    state.glassColor = id;
    renderCompanySelect();
    renderLivePreview(true);
  }

  function renderAluCompanySelect() {
    const el = $("sel-alu-company");
    if (!el) return;
    const names = uniqueAlu("name", {});
    const cur = pickValid(el.value, names);
    if (!names.length) {
      el.innerHTML = emptySelectOptionHtml();
      el.classList.add("is-empty");
      renderAluThickSelect();
      return;
    }
    el.classList.remove("is-empty");
    el.innerHTML = names.map((n) => {
      const exact = exactAluCombo(n, selectedAluThick(), state.aluColor);
      const rows = exact ? [exact] : aluRows({ name: n });
      return '<option value="' + escapeHtml(n) + '">' + escapeHtml(n) + rateSpan(rows, T.perFt) + "</option>";
    }).join("");
    if (cur) el.value = cur;
    else el.value = names[0];
    renderAluThickSelect();
  }

  function renderAluThickSelect() {
    const el = $("sel-alu-thick");
    if (!el) return;
    const name = selectedAluName();
    const thicks = uniqueAlu("thickness", { name: name });
    const cur = pickValid(el.value, thicks);
    if (!thicks.length) {
      el.innerHTML = emptySelectOptionHtml();
      el.classList.add("is-empty");
      syncAluColorToSelection();
      renderAluColorGrid();
      return;
    }
    el.classList.remove("is-empty");
    el.innerHTML = thicks.map((mm) => {
      const exact = exactAluCombo(name, mm, state.aluColor);
      const rows = exact ? [exact] : aluRows({ name: name, thick: mm });
      return '<option value="' + mm + '">' + mm + " " + T.mm + rateSpan(rows, T.perFt) + "</option>";
    }).join("");
    if (cur !== "") el.value = String(cur);
    else el.value = String(thicks[0]);
    syncAluColorToSelection();
    renderAluColorGrid();
  }

  function syncAluColorToSelection() {
    const colors = uniqueAlu("color", { name: selectedAluName(), thick: selectedAluThick() });
    state.aluColor = normalizeAluColorId(pickValid(state.aluColor, colors) || "silver");
  }

  function onAluCompanyChange() {
    renderAluThickSelect();
    renderLivePreview(true);
  }

  function onAluThickChange() {
    const name = selectedAluName();
    const thick = selectedAluThick();
    const names = uniqueAlu("name", { thick: thick });
    const companyEl = $("sel-alu-company");
    if (companyEl && names.length && names.indexOf(name) < 0) {
      companyEl.value = names[0];
      renderAluThickSelect();
      return;
    }
    syncAluColorToSelection();
    renderAluColorGrid();
    renderLivePreview(true);
  }

  function onAluColorChange(id) {
    state.aluColor = normalizeAluColorId(id);
    const name = selectedAluName();
    const thicks = uniqueAlu("thickness", { name: name, color: state.aluColor });
    const thickEl = $("sel-alu-thick");
    if (thickEl && thicks.length && thicks.every((mm) => String(mm) !== String(thickEl.value))) {
      thickEl.value = String(thicks[0]);
    }
    renderAluCompanySelect();
    renderLivePreview(true);
  }

  function renderAluColorGrid() {
    const grid = $("alu-color-grid");
    if (!grid) return;
    const name = selectedAluName();
    const thick = selectedAluThick();
    const available = uniqueAlu("color", { name: name, thick: thick });
    const colors = available.map(function (id) { return getAluColor(id); }).filter(Boolean);
    if (!colors.length) {
      grid.innerHTML = emptyColorHintHtml();
      return;
    }
    if (available.indexOf(state.aluColor) < 0) state.aluColor = colors[0].id;
    grid.innerHTML = colors.map((c) => {
      const row = exactAluCombo(name, thick, c.id);
      return colorPickHtml(c, c.id === state.aluColor, row ? row.rate : "", 'data-alu-color="' + c.id + '"', T.perFt);
    }).join("");
  }

  function renderAluList() {
    renderRateList("alu-list", state.aluminium, "alu");
  }

  function colorOptionList(palette, selected) {
    return palette.map(function (c) {
      return '<option value="' + c.id + '"' + (c.id === selected ? " selected" : "") + ">" + escapeHtml(T[c.labelKey]) + "</option>";
    }).join("");
  }

  function comboHeadHtml(kind) {
    const colorHead = kind === "alu" ? T.aluColor : T.glassColor;
    return '<div class="rate-head"><span class="drag-handle" aria-hidden="true"></span><span class="name">' + T.aluNamePh + "</span><span class=\"col-mm\">" + T.thickness + "</span><span class=\"col-color\">" + colorHead + "</span><span class=\"col-rate\">" + T.aluRatePh + "</span><span class=\"rate-actions\"></span></div>";
  }

  function joinPipe(parts) {
    return parts.join(" | ");
  }

  function groupRateText(rows, byMm, unit) {
    const u = unit || T.perSq;
    if (byMm) {
      const thicks = uniqueNums(rows.map((x) => x.thickness));
      if (!thicks.length) return T.taka + "0" + u;
      return thicks.map((mm) => {
        const rates = rows.filter((x) => Number(x.thickness) === Number(mm)).map((x) => Number(x.rate)).filter((n) => !Number.isNaN(n));
        if (!rates.length) return mm + T.mm + " " + T.taka + "0";
        const min = Math.min.apply(null, rates);
        const max = Math.max.apply(null, rates);
        const r = min === max ? String(min) : min + "\u2013" + max;
        return mm + T.mm + " " + T.taka + r;
      }).join(" · ");
    }
    const rates = rows.map((x) => Number(x.rate)).filter((n) => !Number.isNaN(n));
    if (!rates.length) return T.taka + "0" + u;
    const min = Math.min.apply(null, rates);
    const max = Math.max.apply(null, rates);
    if (min === max) return T.taka + min + u;
    return T.taka + min + "\u2013" + max + u;
  }

  function comboRowHtml(kind, item, i, groupRows) {
    const rows = groupRows && groupRows.length ? groupRows : [item];
    const editing = state.edit.kind === kind && (state.edit.index === i || state.edit.name === item.name);
    const thicks = uniqueNums(rows.map((x) => x.thickness));
    const colors = uniqueIds(rows.map((x) => kind === "alu" ? normalizeAluColorId(x.color) : normalizeColorId(x.color)));
    const colorText = joinPipe(colors.map((id) => kind === "alu" ? aluColorLabel(id) : colorLabel(id)));
    const thickText = escapeHtml(joinPipe(thicks.map((mm) => mm + T.mm)));
    const rateUnit = kind === "alu" ? T.perFt : T.perSq;
    const rateText = groupRateText(rows, kind === "company" || kind === "alu", rateUnit);
    const rateVal = state.edit.rate != null ? state.edit.rate : item.rate;
    const attrs = ' data-index="' + i + '" data-group="' + escapeHtml(item.name) + '"';
    if (editing) {
      if (kind === "company" || kind === "alu") {
        return '<div class="rate-row is-combo editing has-mm-rates"' + attrs + ">" +
          '<span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>" +
          '<input class="edit-name" type="text" value="' + escapeHtml(item.name) + '">' +
          '<div class="msel edit-thick" id="msel-edit-thick"><button type="button" class="msel-toggle" id="edit-thick-toggle"></button><div class="msel-panel" id="edit-thicks"></div></div>' +
          '<div class="msel edit-color" id="msel-edit-color"><button type="button" class="msel-toggle" id="edit-color-toggle"></button><div class="msel-panel" id="edit-colors"></div></div>' +
          editSaveCancel(kind, i) + "</div>";
      }
      return '<div class="rate-row is-combo editing"' + attrs + ">" +
        '<span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>" +
        '<input class="edit-name" type="text" value="' + escapeHtml(item.name) + '">' +
        '<div class="msel edit-thick" id="msel-edit-thick"><button type="button" class="msel-toggle" id="edit-thick-toggle"></button><div class="msel-panel" id="edit-thicks"></div></div>' +
        '<div class="msel edit-color" id="msel-edit-color"><button type="button" class="msel-toggle" id="edit-color-toggle"></button><div class="msel-panel" id="edit-colors"></div></div>' +
        '<input class="edit-rate" type="number" min="0" step="1" value="' + escapeHtml(rateVal) + '">' +
        editSaveCancel(kind, i) + "</div>";
    }
    const colorHead = kind === "alu" ? T.aluColor : T.glassColor;
    return '<div class="rate-row is-combo"' + attrs + '><span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>" +
      '<span class="name">' + escapeHtml(item.name) + "</span>" +
      '<span class="col-mm" data-label="' + escapeHtml(T.thickness) + '"><span class="col-val">' + thickText + "</span></span>" +
      '<span class="col-color" data-label="' + escapeHtml(colorHead) + '"><span class="col-val">' + escapeHtml(colorText) + "</span></span>" +
      '<span class="col-rate" data-label="' + escapeHtml(T.aluRatePh) + '"><span class="price">' + rateText + "</span></span>" +
      editAndDelete(kind, i) + "</div>";
  }

  function renderEditPicks() {
    if (!$("edit-thicks") || !$("edit-colors")) return;
    const kind = state.edit.kind;
    const presets = kind === "alu" ? ALU_THICK_PRESETS : GLASS_THICK_PRESETS;
    const thicks = state.edit.thicks || [];
    const colors = state.edit.colors || [];
    if (!state.edit.rates) state.edit.rates = {};
    if (!state.edit.thickExtras) state.edit.thickExtras = [];
    if (!state.edit.colorExtras) state.edit.colorExtras = [];
    // Keep custom selected thicks in extras so they stay removable
    thicks.forEach(function (mm) {
      if (presets.every(function (p) { return Number(p) !== Number(mm); }) &&
          state.edit.thickExtras.every(function (t) { return Number(t) !== Number(mm); })) {
        state.edit.thickExtras.push(Number(mm));
      }
    });
    const ph = kind === "alu" ? T.aluMmRatePh : T.mmRatePh;
    const editKind = kind === "alu" ? "alu" : "company";
    renderThickPanel("edit-thicks", presets, thicks, "edit-thick", editKind, state.edit.rates, ph, state.edit.thickExtras, true);
    renderColorPanel("edit-colors", editKind, colors, state.edit.colorExtras, true);
    if ($("edit-thick-toggle")) $("edit-thick-toggle").textContent = thickRateLabel(thicks, state.edit.rates);
    if ($("edit-color-toggle")) $("edit-color-toggle").textContent = mselLabel(colors.map((id) => kind === "alu" ? aluColorLabel(id) : colorLabel(id)));
  }

  function addEditThick() {
    addThickPick(state.edit.kind === "alu" ? "alu" : "company", true);
  }

  function bindEditPicks(wrapId) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.editPickBound) return;
    wrap.dataset.editPickBound = "1";
    wrap.addEventListener("click", (e) => {
      if (!e.target.closest(".rate-row.editing")) return;
      if (e.target.closest(".msel-mm-rate")) return;
      const editKind = state.edit.kind === "alu" ? "alu" : "company";
      const remMm = e.target.closest("[data-remove-mm]");
      if (remMm) {
        e.preventDefault();
        removeThickPick(editKind, remMm.getAttribute("data-remove-mm"), true);
        return;
      }
      const remColor = e.target.closest("[data-remove-color]");
      if (remColor) {
        e.preventDefault();
        removeColorPick(editKind, remColor.getAttribute("data-remove-color"), true);
        return;
      }
      const addMm = e.target.closest(".msel-add-mm");
      if (addMm) {
        addThickPick(editKind, true);
        return;
      }
      const addColor = e.target.closest(".msel-add-color");
      if (addColor) {
        addColorPick(editKind, true);
        return;
      }
      const btn = e.target.closest(".msel-opt");
      if (!btn) return;
      if (btn.dataset.mm) {
        if (!state.edit.rates) state.edit.rates = {};
        syncMmRatesFromDom("edit-thicks", state.edit.rates);
        togglePick(state.edit.thicks, btn.dataset.mm, true);
      } else if (btn.dataset.color) {
        togglePick(state.edit.colors, btn.dataset.color, false);
      }
      renderEditPicks();
      if (btn.dataset.mm) {
        const rateInp = $("edit-thicks") && $("edit-thicks").querySelector('[data-mm-rate="' + String(Number(btn.dataset.mm)) + '"]');
        if (rateInp && !rateInp.disabled) {
          rateInp.focus();
          rateInp.select();
        }
      }
    });
    wrap.addEventListener("input", (e) => {
      const inp = e.target.closest(".msel-mm-rate");
      if (!inp || !e.target.closest(".rate-row.editing")) return;
      if (!state.edit.rates) state.edit.rates = {};
      const v = parseFloat(inp.value);
      if (Number.isFinite(v) && v >= 0) state.edit.rates[String(inp.dataset.mmRate)] = v;
      else delete state.edit.rates[String(inp.dataset.mmRate)];
      if ($("edit-thick-toggle")) $("edit-thick-toggle").textContent = thickRateLabel(state.edit.thicks || [], state.edit.rates);
    });
    wrap.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const editKind = state.edit.kind === "alu" ? "alu" : "company";
      if (e.target.closest("#edit-thick")) {
        e.preventDefault();
        addThickPick(editKind, true);
        return;
      }
      if (e.target.closest("#edit-color-custom")) {
        e.preventDefault();
        addColorPick(editKind, true);
      }
    });
  }

  function fillChargesInputs() {
    if ($("in-charge-net")) $("in-charge-net").value = state.charges.net || 0;
    if ($("in-charge-extra")) $("in-charge-extra").value = state.charges.extra || 0;
    if ($("in-charge-season")) $("in-charge-season").value = state.charges.seasonPct || 0;
    if ($("charge-season-label")) $("charge-season-label").textContent = T.seasonLabel;
    if ($("charge-season-hint")) $("charge-season-hint").textContent = T.seasonHint;
  }

  function moveItem(arr, from, to) {
    from = Number(from);
    to = Number(to);
    if (!arr || from === to || from < 0 || to < 0 || from >= arr.length || to >= arr.length) return false;
    const item = arr.splice(from, 1)[0];
    arr.splice(to, 0, item);
    return true;
  }

  function moveGroup(list, fromName, toName) {
    const groups = groupByName(list);
    const from = groups.findIndex((g) => g.name === fromName);
    const to = groups.findIndex((g) => g.name === toName);
    if (from < 0 || to < 0 || from === to) return false;
    const moved = groups.splice(from, 1)[0];
    groups.splice(to, 0, moved);
    const next = [];
    groups.forEach((g) => g.indices.forEach((i) => next.push(list[i])));
    list.length = 0;
    next.forEach((row) => list.push(row));
    return true;
  }

  function bindGroupSortable(wrapId, getList, onDone) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.groupSortBound) return;
    wrap.dataset.groupSortBound = "1";
    let drag = null;
    function clearMarks() {
      wrap.querySelectorAll(".rate-group").forEach((g) => g.classList.remove("dragging", "drag-over"));
    }
    wrap.addEventListener("pointerdown", (e) => {
      const handle = e.target.closest(".rate-group-head .drag-handle");
      if (!handle) return;
      const group = handle.closest(".rate-group");
      if (!group) return;
      e.preventDefault();
      handle.setPointerCapture(e.pointerId);
      drag = { from: group.getAttribute("data-group") };
      group.classList.add("dragging");
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!drag) return;
      wrap.querySelectorAll(".drag-over").forEach((g) => g.classList.remove("drag-over"));
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const over = el && el.closest && el.closest("#" + wrapId + " .rate-group");
      if (over) over.classList.add("drag-over");
    });
    wrap.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const over = el && el.closest && el.closest("#" + wrapId + " .rate-group");
      const to = over ? over.getAttribute("data-group") : "";
      const from = drag.from;
      drag = null;
      clearMarks();
      if (to && moveGroup(getList(), from, to)) onDone();
    });
    wrap.addEventListener("pointercancel", () => { drag = null; clearMarks(); });
  }

  function bindSortable(wrapId, getList, onDone, byName) {
    const wrap = $(wrapId);
    if (!wrap || wrap.dataset.sortBound) return;
    wrap.dataset.sortBound = "1";
    let drag = null;

    function clearMarks() {
      wrap.querySelectorAll(".rate-row").forEach((r) => r.classList.remove("dragging", "drag-over"));
    }

    function rowAt(x, y) {
      const el = document.elementFromPoint(x, y);
      return el && el.closest ? el.closest("#" + wrapId + " .rate-row") : null;
    }

    wrap.addEventListener("pointerdown", (e) => {
      if (!e.target.closest(".drag-handle")) return;
      const row = e.target.closest(".rate-row");
      if (!row) return;
      e.preventDefault();
      e.target.closest(".drag-handle").setPointerCapture(e.pointerId);
      drag = { from: byName ? row.getAttribute("data-group") : Number(row.dataset.index) };
      row.classList.add("dragging");
    });
    wrap.addEventListener("pointermove", (e) => {
      if (!drag) return;
      wrap.querySelectorAll(".drag-over").forEach((r) => r.classList.remove("drag-over"));
      const over = rowAt(e.clientX, e.clientY);
      if (over) over.classList.add("drag-over");
    });
    wrap.addEventListener("pointerup", (e) => {
      if (!drag) return;
      const over = rowAt(e.clientX, e.clientY);
      const from = drag.from;
      const to = over ? (byName ? over.getAttribute("data-group") : Number(over.dataset.index)) : (byName ? "" : -1);
      drag = null;
      clearMarks();
      const ok = byName ? moveGroup(getList(), from, to) : moveItem(getList(), from, to);
      if (ok) onDone();
    });
    wrap.addEventListener("pointercancel", () => {
      drag = null;
      clearMarks();
    });
  }

  const LOCK_STYLES = [
    { id: "sliding", labelKey: "sliding" },
    { id: "casement", labelKey: "caseLock" },
    { id: "deadbolt", labelKey: "deadbolt" },
    { id: "knob", labelKey: "knob" },
    { id: "generic", labelKey: "generic" }
  ];

  function rateRowOpen(i, extra) {
    return '<div class="rate-row' + (extra ? " " + extra : "") + '" data-index="' + i + '"><span class="drag-handle" aria-hidden="true">' + ico("grip") + "</span>";
  }

  function optionList(items, selected) {
    return items.map(function (c) {
      return '<option value="' + c.id + '"' + (c.id === selected ? " selected" : "") + '>' + escapeHtml(T[c.labelKey]) + "</option>";
    }).join("");
  }

  function editSaveCancel(kind, i) {
    return '<span class="rate-actions"><button type="button" class="icon-btn secondary compact" data-action="save-' + kind + '" data-index="' + i + '">' + ico("save") + "<span>" + T.updateBtn + "</span></button>" +
      '<button type="button" class="icon-btn ghost compact" data-action="cancel-edit">' + T.cancelBtn + "</button></span>";
  }

  function editAndDelete(kind, i) {
    return '<span class="rate-actions"><button type="button" class="icon-btn ghost compact" data-action="edit-' + kind + '" data-index="' + i + '">' + ico("pencil") + "<span>" + T.editBtn + "</span></button>" +
      '<button type="button" class="danger-ghost icon-btn compact" data-action="remove-' + kind + '" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button></span>";
  }

  function cancelEdit(silent) {
    const was = state.edit.kind;
    state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
    if (was === "company") {
      if ($("new-company-name")) $("new-company-name").value = "";
      if ($("new-company-thick")) $("new-company-thick").value = "";
      state.adminPick.companyThicks = [5];
      state.adminPick.companyColors = ["clear"];
      state.adminPick.companyRates = {};
    }
    if (was === "alu") {
      if ($("new-alu-name")) $("new-alu-name").value = "";
      if ($("new-alu-thick")) $("new-alu-thick").value = "";
      state.adminPick.aluThicks = [1];
      state.adminPick.aluColors = ["silver"];
      state.adminPick.aluRates = {};
    }
    if (was === "company" || was === "alu") renderAdminPicks();
    setAddLabels();
    if (!silent) {
      renderRateList("company-list", state.companies, "company");
      renderAluList();
      renderRateList("lock-list", state.locks, "lock");
      renderStaffList();
    } else if (was === "staff") {
      renderStaffList();
    }
  }

  function startEdit(kind, index) {
    if (!isOwner()) return;
    if (state.edit.kind === kind && state.edit.index === index) {
      cancelEdit();
      return;
    }
    const prevKind = state.edit.kind;
    const list = kind === "company" ? state.companies : kind === "alu" ? state.aluminium : state.locks;
    const item = list[index];
    if (!item) return;
    const siblings = (kind === "company" || kind === "alu") ? list.filter((x) => x.name === item.name) : [];
    state.edit = {
      kind: kind,
      index: index,
      name: item.name || "",
      rate: item.rate,
      rates: (kind === "company" || kind === "alu") ? ratesByThickness(siblings) : {},
      thicks: uniqueNums(siblings.map((x) => x.thickness)),
      thickExtras: [],
      colors: uniqueIds(siblings.map((x) => kind === "alu" ? normalizeAluColorId(x.color) : normalizeColorId(x.color))),
      colorExtras: [],
      outs: []
    };
    if (prevKind === "staff") renderStaffList();
    if (kind === "company") renderRateList("company-list", state.companies, "company");
    else if (kind === "alu") renderAluList();
    else renderRateList("lock-list", state.locks, "lock");
  }

  function rowInput(row, cls) {
    const el = row && row.querySelector("." + cls);
    return el ? el.value : "";
  }

  function saveEdited(kind, index) {
    if (!isOwner()) return;
    const wrapId = kind === "company" ? "company-list" : kind === "alu" ? "alu-list" : "lock-list";
    const wrap = $(wrapId);
    const row = wrap && wrap.querySelector('.rate-row[data-index="' + index + '"]');
    if (!row) return;
    const nameEl = row.querySelector(".edit-name");
    const rateEl = row.querySelector(".edit-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    markInvalid(nameEl, !name);
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (kind === "lock") {
      const rate = parseFloat(rateEl && rateEl.value);
      markInvalid(rateEl, !Number.isFinite(rate) || rate < 0);
      if (!Number.isFinite(rate) || rate < 0) { flashNote(T.errNeedNumber, true); return; }
      const style = rowInput(row, "edit-style") || "generic";
      state.locks[index] = { name: name, rate: rate, style: style };
      state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
      renderRateList("lock-list", state.locks, "lock");
      renderLockSelect();
      renderLivePreview(true);
      persistOwnerData(["locks"], T.updatedOk);
      return;
    }
    const list = kind === "company" ? state.companies : state.aluminium;
    const thicks = (state.edit.thicks || []).slice();
    const extra = parseFloat($("edit-thick") && $("edit-thick").value);
    if (!Number.isNaN(extra) && extra > 0 && thicks.every((t) => Number(t) !== extra)) thicks.push(extra);
    const colors = (state.edit.colors || []).map((id) => kind === "alu" ? normalizeAluColorId(id) : normalizeColorId(id));
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    if (kind === "company" || kind === "alu") {
      syncMmRatesFromDom("edit-thicks", state.edit.rates);
      const rateByMm = readMmRates("edit-thicks", thicks);
      if (!rateByMm) { flashNote(T.errNeedNumber, true); return; }
      replaceCombos(list, state.edit.name, name, thicks, colors, rateByMm);
    } else {
      const rate = parseFloat(rateEl && rateEl.value);
      markInvalid(rateEl, !Number.isFinite(rate) || rate < 0);
      if (!Number.isFinite(rate) || rate < 0) { flashNote(T.errNeedNumber, true); return; }
      replaceCombos(list, state.edit.name, name, thicks, colors, rate, state.edit.rate);
    }
    state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
    if (kind === "company") {
      renderRateList("company-list", state.companies, "company");
      renderCompanySelect();
    } else {
      refreshCatalogSelects();
    }
    persistOwnerData([kind === "company" ? "companies" : "aluminium"], T.updatedOk);
  }

  function handleRateListClick(kind, e) {
    if (!isOwner()) return;
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const index = Number(btn.dataset.index);
    if (action === "edit-" + kind) startEdit(kind, index);
    else if (action === "save-" + kind) saveEdited(kind, index);
    else if (action === "cancel-edit") cancelEdit();
    else if (action === "remove-" + kind) {
      if (state.edit.kind === kind) state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
      if (kind === "company") removeCompany(index);
      else if (kind === "alu") removeAluminium(index);
      else if (kind === "lock") removeLock(index);
    }
  }

  function refreshCatalogSelects() {
    renderCompanySelect();
    renderLockSelect();
    renderGlassThickSelect();
    renderAluCompanySelect();
    renderAluList();
    fillChargesInputs();
    syncCalcDetails();
  }

  function renderRateList(wrapId, items, kind) {
    const wrap = $(wrapId);
    if (!wrap) return;
    if (!isOwner()) {
      wrap.innerHTML = "";
      return;
    }
    if (!items.length) {
      wrap.innerHTML = `<div class="empty-note">${T.emptyRates}</div>`;
      return;
    }
    const unit = kind === "company" ? T.perSq : "";
    if (kind === "lock") {
      wrap.innerHTML = items.map((item, i) => {
        const editing = state.edit.kind === kind && state.edit.index === i;
        if (editing) {
          return rateRowOpen(i, "editing") +
            '<input class="edit-name" type="text" value="' + escapeHtml(item.name) + '">' +
            '<select class="edit-style">' + optionList(LOCK_STYLES, item.style) + "</select>" +
            '<input class="edit-rate" type="number" min="0" step="1" value="' + escapeHtml(item.rate) + '">' +
            editSaveCancel(kind, i) + "</div>";
        }
        return rateRowOpen(i) + '<span class="name">' + escapeHtml(item.name) + '</span><span class="price">' + T.taka + item.rate + unit + "</span>" + editAndDelete(kind, i) + "</div>";
      }).join("");
      return;
    }
    wrap.innerHTML = comboHeadHtml(kind) + groupByName(items).map((g) => {
      const i = g.indices[0];
      return comboRowHtml(kind, items[i], i, g.indices.map((idx) => items[idx]));
    }).join("");
    if (state.edit.kind === kind) renderEditPicks();
  }


  function toSuta(inchSuta) {
    const n = Number(inchSuta);
    if (!Number.isFinite(n)) return 0;
    const sign = n < 0 ? -1 : 1;
    const a = Math.abs(n);
    const inch = Math.floor(a + 1e-9);
    const raw = String(a);
    const dot = raw.indexOf(".");
    let suta = 0;
    if (dot >= 0) suta = parseInt(raw.charAt(dot + 1) || "0", 10) || 0;
    if (suta > 7) {
      return sign * ((inch + Math.floor(suta / 8)) * 8 + (suta % 8));
    }
    return sign * (inch * 8 + suta);
  }

  function fromSuta(total) {
    const sign = total < 0 ? -1 : 1;
    let t = Math.abs(Math.round(Number(total) || 0));
    const inch = Math.floor(t / 8);
    const suta = t % 8;
    return sign * (inch + suta / 10);
  }

  function inchSutaLabel(inchSuta) {
    const n = fromSuta(toSuta(inchSuta));
    const sign = n < 0 ? "-" : "";
    const a = Math.abs(n);
    const inch = Math.floor(a + 1e-9);
    const suta = Math.round((a - inch) * 10);
    return sign + inch + "." + suta + " " + T.inchi;
  }

  function inchSutaPretty(inchSuta) {
    const n = fromSuta(toSuta(inchSuta));
    const sign = n < 0 ? "-" : "";
    const a = Math.abs(n);
    const inch = Math.floor(a + 1e-9);
    const suta = Math.round((a - inch) * 10);
    const main = sign + inch + "." + suta + " " + T.inchi;
    if (!suta) return main;
    return main + " (" + sign + inch + " " + T.inchi + " " + suta + " " + T.sutaUnit + ")";
  }

  function ftToInchSuta(ft) {
    const totalIn = Math.max(0, Number(ft) || 0) * 12;
    const inch = Math.floor(totalIn + 1e-9);
    let suta = Math.round((totalIn - inch) * 8);
    let outInch = inch;
    if (suta >= 8) {
      outInch += Math.floor(suta / 8);
      suta = suta % 8;
    }
    return outInch + suta / 10;
  }

  function normalizeCutParams(cp) {
    const c = cp && typeof cp === "object" ? cp : {};
    const legacy = Number(c.outerHoriz) === 3.6 && Number(c.shutterHoriz) === 1.5;
    const blank = !(Number(c.outerHoriz) > 0 || Number(c.side) > 0 || Number(c.shutterHoriz) > 0);
    if (legacy || blank) return { ...DEFAULT_CUT };
    return {
      outerHoriz: Number.isFinite(Number(c.outerHoriz)) ? Number(c.outerHoriz) : DEFAULT_CUT.outerHoriz,
      side: Number.isFinite(Number(c.side)) ? Number(c.side) : DEFAULT_CUT.side,
      shutterHoriz: Number.isFinite(Number(c.shutterHoriz)) ? Number(c.shutterHoriz) : DEFAULT_CUT.shutterHoriz,
      glassH: Number.isFinite(Number(c.glassH)) ? Number(c.glassH) : DEFAULT_CUT.glassH,
      glassW: Number.isFinite(Number(c.glassW)) ? Number(c.glassW) : DEFAULT_CUT.glassW
    };
  }

  function computeCutFromInches(heightIn, widthIn, shutters) {
    const h = toSuta(heightIn);
    const w = toSuta(widthIn);
    const n = Math.max(1, Math.round(Number(shutters) || 2));
    const p = state.cutParams;
    const sideD = toSuta(p.side);
    const shutterD = toSuta(p.shutterHoriz);
    const outerD = toSuta(p.outerHoriz);
    const glassHD = toSuta(p.glassH);
    const glassWD = toSuta(p.glassW);
    const lockLen = fromSuta(Math.max(0, h - sideD));
    const shutterTB = fromSuta(Math.max(0, Math.round((w - shutterD) / n)));
    const outerTB = fromSuta(Math.max(0, w - outerD));
    const glassH = fromSuta(Math.max(0, h - glassHD));
    const glassW = fromSuta(Math.max(0, Math.round((w - glassWD) / n)));
    const glassDimPretty = inchSutaPretty(glassH) + " × " + inchSutaPretty(glassW);
    const glassDimShort = inchSutaLabel(glassH) + " × " + inchSutaLabel(glassW);
    const list = [
      { part: T.outerSide, size: inchSutaPretty(fromSuta(h)), qty: 2 },
      { part: T.shutterLock, size: inchSutaPretty(lockLen), qty: n },
      { part: T.shutterBottom, size: inchSutaPretty(shutterTB), qty: n },
      { part: T.shutterTop, size: inchSutaPretty(shutterTB), qty: n },
      { part: T.interLock, size: inchSutaPretty(lockLen), qty: n },
      { part: T.outerBottomHi, size: inchSutaPretty(outerTB), qty: 1 },
      { part: T.outerTopPart, size: inchSutaPretty(outerTB), qty: 1 },
      { part: T.glassPerPiece || T.glass, size: glassDimPretty, qty: n, isGlass: true },
      { part: T.glassCountLabel, size: glassDimShort, qty: n, isCount: true }
    ];
    return list;
  }

  function computeCutList(item) {
    const type = getType(item.winType);
    const n = Math.max(1, type && type.shutters ? type.shutters : 2);
    const heightIn = ftToInchSuta(item.heightFt);
    const widthIn = ftToInchSuta(item.widthFt);
    const mult = Math.max(1, Number(item.qty) || 1);
    const countUnit = state.lang === "en" ? " pcs" : "\u099f\u09be";
    const rows = computeCutFromInches(heightIn, widthIn, n).map((row) => {
      if (row.isCount) {
        const total = Math.max(1, Number(row.qty) || n) * mult;
        return {
          part: row.part,
          lengthLabel: total + countUnit + " ( " + row.size + " )",
          qty: 0,
          isGlass: false,
          isCount: true
        };
      }
      return {
        part: row.part,
        lengthLabel: row.size,
        qty: row.qty * mult,
        isGlass: !!row.isGlass,
        isCount: false
      };
    });
    if (item.hasNet) {
      rows.push({
        part: T.net,
        lengthLabel: inchSutaLabel(heightIn) + " x " + inchSutaLabel(widthIn),
        qty: mult,
        isGlass: true
      });
    }
    return rows;
  }

  function renderCutTable(item) {
    const rows = computeCutList(item).map((part) => {
      if (part.isCount) {
        return "<tr>" +
          "<td>" + escapeHtml(part.part) + "</td>" +
          '<td class="mono" colspan="2">' + escapeHtml(part.lengthLabel) + "</td>" +
          "</tr>";
      }
      return "<tr>" +
        "<td>" + escapeHtml(part.part) + "</td>" +
        '<td class="mono">' + escapeHtml(part.lengthLabel) + "</td>" +
        '<td class="center">' + part.qty + " " + (T.pieceCut || T.piece) + "</td>" +
        "</tr>";
    }).join("");
    return (
      '<div class="cut-table-wrap">' +
        '<table class="cut-table">' +
          "<thead><tr>" +
            "<th>" + T.parts + "</th>" +
            "<th>" + T.map + "</th>" +
            '<th class="center">' + T.songkha + "</th>" +
          "</tr></thead>" +
          "<tbody>" + rows + "</tbody>" +
        "</table>" +
      "</div>"
    );
  }

  function cutInputToInchSuta(axis) {
    const p = axis === "w" ? "w" : "h";
    const el = $("cut-" + p);
    return fromSuta(toSuta(el && el.value));
  }

  function cutInputSizeFt(axis) {
    const p = axis === "w" ? "w" : "h";
    const el = $("cut-" + p);
    return inchSutaInputToFeet(el && el.value);
  }

  function cutQtyValue() {
    const raw = parseFloat($("cut-qty") && $("cut-qty").value);
    if (!Number.isFinite(raw) || raw < 1) return 1;
    return Math.min(99, Math.round(raw));
  }

  function renderCutKindPicker() {
    const heading = $("cut-kind-heading");
    const picker = $("cut-kind-picker");
    if (!picker) return;
    if (heading) heading.textContent = T.janala + " / " + T.dorja;
    picker.innerHTML =
      '<button type="button" class="kind-btn' + (state.cutKind === "window" ? " active" : "") + '" data-cut-kind="window">' +
        '<img src="images/window-fixed.svg" alt="' + escapeHtml(T.janala) + '">' +
        '<span class="name">' + escapeHtml(T.janala) + "</span>" +
        '<span class="sub">' + escapeHtml(T.janalaSub) + "</span>" +
      "</button>" +
      '<button type="button" class="kind-btn' + (state.cutKind === "door" ? " active" : "") + '" data-cut-kind="door">' +
        '<img src="images/door-single.svg" alt="' + escapeHtml(T.dorja) + '">' +
        '<span class="name">' + escapeHtml(T.dorja) + "</span>" +
        '<span class="sub">' + escapeHtml(T.dorjaSub) + "</span>" +
      "</button>";
  }

  function renderCutTypePicker() {
    const section = $("cut-section-types");
    const listEl = $("cut-type-list");
    if (!section || !listEl) return;
    const isDoor = state.cutKind === "door";
    const list = isDoor ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    if (!list.some((t) => t.id === state.cutType)) {
      state.cutType = list[0] ? list[0].id : state.cutType;
    }
    if ($("cut-types-heading")) {
      $("cut-types-heading").textContent = isDoor ? T.doorTypes : T.winTypes;
    }
    listEl.classList.toggle("doors", isDoor);
    listEl.innerHTML = list.map((t) =>
      '<button type="button" class="type-card' + (t.id === state.cutType ? " active" : "") + '" data-cut-type="' + t.id + '">' +
        '<img src="' + t.image + '" alt="' + escapeHtml(t.label) + '">' +
        '<span class="name">' + escapeHtml(t.label) + "</span>" +
        '<span class="sub">' + escapeHtml(t.sub) + "</span>" +
      "</button>"
    ).join("");
  }

  function setCutKind(kind) {
    state.cutKind = kind === "door" ? "door" : "window";
    const list = state.cutKind === "door" ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    const keep = list.some((t) => t.id === state.cutType);
    state.cutType = keep ? state.cutType : (list[0] ? list[0].id : state.cutType);
    if (state.cutKind === "window" && !keep) state.cutType = "sliding2";
    renderCutKindPicker();
    renderCutTypePicker();
    renderCutPreview(true);
  }

  function setCutType(id) {
    const list = state.cutKind === "door" ? PRODUCT_TYPES.doors : PRODUCT_TYPES.windows;
    if (!list.some((t) => t.id === id)) return;
    state.cutType = id;
    renderCutTypePicker();
    renderCutPreview(true);
  }

  function pulseCutPreview() {
    const stage = $("cut-live-preview");
    if (!stage) return;
    stage.classList.remove("pulse");
    void stage.offsetWidth;
    stage.classList.add("pulse");
  }

  function renderCutPreview(animate) {
    const stage = $("cut-live-preview");
    if (!stage) return;
    if (!state.cutKind || !state.cutType) {
      stage.innerHTML = "";
      if ($("cut-preview-kind")) $("cut-preview-kind").textContent = "-";
      if ($("cut-preview-type")) $("cut-preview-type").textContent = "-";
      if ($("cut-preview-size")) $("cut-preview-size").textContent = T.typeEnterSize;
      return;
    }
    const heightFt = cutInputSizeFt("h");
    const widthFt = cutInputSizeFt("w");
    const type = getType(state.cutType);
    const opts = {
      typeId: state.cutType,
      heightFt: heightFt,
      widthFt: widthFt,
      glassColor: "clear",
      aluColor: "silver",
      lockStyle: "none",
      hasNet: false,
      compact: false
    };
    stage.innerHTML = buildDiagram(opts);
    scheduleAlignDimLabels(stage);
    if ($("cut-preview-kind")) $("cut-preview-kind").textContent = kindLabel(type.kind);
    if ($("cut-preview-type")) $("cut-preview-type").textContent = type.label + " · " + type.sub;
    if ($("cut-preview-size")) {
      $("cut-preview-size").textContent = heightFt > 0 && widthFt > 0
        ? ftInLabel(heightFt) + " x " + ftInLabel(widthFt)
        : T.typeEnterSize;
    }
    if (animate) pulseCutPreview();
  }

  function renderCutCalcResult() {
    const box = $("cut-calc-result");
    if (!box) return;
    renderCutPreview(false);
    const heightFt = cutInputSizeFt("h");
    const widthFt = cutInputSizeFt("w");
    if (!(heightFt > 0) || !(widthFt > 0) || heightFt > 40 || widthFt > 40) {
      flashNote(T.errSize, true);
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    if (!state.cutType) {
      flashNote(T.errKind, true);
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    const item = {
      winType: state.cutType,
      heightFt: heightFt,
      widthFt: widthFt,
      qty: cutQtyValue(),
      hasNet: false
    };
    box.innerHTML =
      '<h3 class="cut-auto-title">' + escapeHtml(T.autoMapTitle) + "</h3>" +
      renderCutTable(item);
    box.classList.remove("hidden");
  }






  function itemDiagram(item, compact) {
    return buildDiagram({
      typeId: item.winType,
      heightFt: item.heightFt,
      widthFt: item.widthFt,
      glassColor: item.glassColor,
      aluColor: item.aluColor,
      lockStyle: item.lockStyle || "none",
      hasNet: item.hasNet,
      compact: compact
    });
  }

  function findCompanyForItem(item) {
    return state.companies.find((c) => c.name === item.companyName && String(c.thickness) === String(item.thickness) && c.color === item.glassColor)
      || state.companies.find((c) => c.name === item.companyName && String(c.thickness) === String(item.thickness))
      || state.companies.find((c) => c.name === item.companyName)
      || null;
  }

  function findAluForItem(item) {
    return state.aluminium.find((a) => a.name === item.aluName && String(a.thickness) === String(item.aluThick) && a.color === item.aluColor)
      || state.aluminium.find((a) => a.name === item.aluName && String(a.thickness) === String(item.aluThick))
      || state.aluminium.find((a) => a.name === item.aluName)
      || null;
  }

  function aluRunningFeet(heightFt, widthFt, shutters, qty) {
    const heightIn = ftToInchSuta(heightFt);
    const widthIn = ftToInchSuta(widthFt);
    const h = toSuta(heightIn);
    const w = toSuta(widthIn);
    const n = Math.max(1, Math.round(Number(shutters) || 2));
    const p = state.cutParams || DEFAULT_CUT;
    const sideD = toSuta(p.side);
    const shutterD = toSuta(p.shutterHoriz);
    const outerD = toSuta(p.outerHoriz);
    const lockSuta = Math.max(0, h - sideD);
    const shutterSuta = Math.max(0, Math.round((w - shutterD) / n));
    const outerSuta = Math.max(0, w - outerD);
    // Same aluminium parts as cutting list (excludes glass)
    const totalSuta = 2 * h + 2 * n * lockSuta + 2 * n * shutterSuta + 2 * outerSuta;
    const q = Math.max(1, Number(qty) || 1);
    return (totalSuta / 96) * q;
  }

  function priceParts(item, company, alu, lock) {
    const qty = Math.max(1, Number(item.qty) || 1);
    const heightFt = Number(item.heightFt) || 0;
    const widthFt = Number(item.widthFt) || 0;
    const totalSqft = heightFt * widthFt * qty;
    const type = getType(item.winType || state.selectedType);
    const shutters = type && type.shutters ? type.shutters : 2;
    const totalAluFt = aluRunningFeet(heightFt, widthFt, shutters, qty);
    const companyRate = company ? Number(company.rate) || 0 : Number(item.companyRate) || 0;
    const frameRate = alu ? Number(alu.rate) || 0 : Number(item.frameRate) || 0;
    const lockRate = lock ? Number(lock.rate) || 0 : Number(item.lockRate) || 0;
    const glassCost = totalSqft * companyRate;
    const frameCost = totalAluFt * frameRate;
    const lockCost = lockRate * qty;
    const extra = totalSqft * (Number(state.charges.extra) || 0);
    const netCost = item.hasNet ? totalSqft * (Number(state.charges.net) || 0) : 0;
    let subtotal = glassCost + frameCost + lockCost + netCost + extra;
    const seasonPct = Math.max(0, Math.min(90, Number(state.charges.seasonPct) || 0));
    if (seasonPct > 0) subtotal = subtotal * (1 - seasonPct / 100);
    return {
      companyRate: companyRate,
      frameRate: frameRate,
      lockRate: lockRate,
      totalSqft: totalSqft,
      totalAluFt: totalAluFt,
      glassCost: glassCost,
      frameCost: frameCost,
      lockCost: lockCost,
      extra: extra,
      netCost: netCost,
      seasonPct: seasonPct,
      subtotal: Math.round(subtotal * 100) / 100
    };
  }

  function repriceItems() {
    if (!state.items.length) return;
    state.items.forEach((item) => {
      const company = findCompanyForItem(item);
      const alu = findAluForItem(item);
      const lock = item.lockName ? state.locks.find((l) => l.name === item.lockName) : null;
      Object.assign(item, priceParts(item, company, alu, lock));
    });
    storeSet(KEYS.items, state.items);
  }

  function updateLivePrice() {
    const box = $("live-price");
    if (!box) return;
    if (!state.selectedKind || !state.selectedType) {
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const qtyRaw = readNonNeg($("in-qty"));
    const qty = Number.isFinite(qtyRaw) && qtyRaw >= 1 ? Math.min(99, Math.round(qtyRaw)) : 1;
    const thickness = parseFloat($("sel-glass-thick") && $("sel-glass-thick").value) || 0;
    const company = exactGlassCombo(selectedCompanyName(), thickness, normalizeColorId(state.glassColor));
    const lockIdx = parseInt($("sel-lock") && $("sel-lock").value, 10);
    const lock = lockIdx >= 0 && state.locks[lockIdx] ? state.locks[lockIdx] : null;
    const alu = exactAluCombo(selectedAluName(), selectedAluThick(), normalizeAluColorId(state.aluColor));
    const sizeOk = heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    if (!sizeOk || !company || !alu) {
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }
    const priced = priceParts({
      heightFt: heightFt,
      widthFt: widthFt,
      qty: qty,
      hasNet: state.hasNet,
      winType: state.selectedType,
      companyRate: company.rate,
      frameRate: alu.rate,
      lockRate: lock ? lock.rate : 0
    }, company, alu, lock);
    box.classList.remove("hidden");
    box.innerHTML = '<div class="live-price-title">' + T.livePrice + "</div>" + itemCostHtml({
      glassCost: priced.glassCost,
      frameCost: priced.frameCost,
      lockCost: priced.lockCost,
      netCost: priced.netCost,
      extra: priced.extra,
      totalSqft: priced.totalSqft,
      totalAluFt: priced.totalAluFt,
      subtotal: priced.subtotal,
      lockName: lock ? lock.name : null,
      hasNet: state.hasNet
    });
  }

  function itemCostHtml(item) {
    const rows = [
      [T.costGlass, money(item.glassCost || 0)],
      [T.costFrame, money(item.frameCost || 0)]
    ];
    if (item.lockName) rows.push([T.costLock, money(item.lockCost || 0)]);
    if (item.hasNet) rows.push([T.costNet, money(item.netCost || 0)]);
    if (Number(item.extra) > 0) rows.push([T.costExtra, money(item.extra)]);
    return '<div class="item-costs">' + rows.map((r) =>
      '<div class="item-cost"><span>' + r[0] + "</span><span>" + r[1] + "</span></div>"
    ).join("") +
      '<div class="item-subtotal">' + T.costTotal + " (" + fmt(item.totalSqft) + T.sqLabel + "): " + money(item.subtotal || 0) + "</div></div>";
  }

  function updateSummary() {
    const totals = state.items.reduce((acc, item) => {
      acc.sqft += item.totalSqft;
      acc.glass += item.glassCost;
      acc.lock += item.lockCost;
      acc.frame += item.frameCost;
      acc.net += item.netCost || 0;
      acc.extra += item.extra;
      return acc;
    }, { sqft: 0, glass: 0, lock: 0, frame: 0, net: 0, extra: 0 });
    $("sum-sqft").textContent = fmt(totals.sqft) + T.sqLabel;
    $("sum-glass").textContent = money(totals.glass);
    $("sum-lock").textContent = money(totals.lock);
    $("sum-frame").textContent = money(totals.frame);
    $("sum-net").textContent = money(totals.net);
    $("sum-extra").textContent = money(totals.extra);
    $("sum-total").textContent = money(totals.glass + totals.lock + totals.frame + totals.net + totals.extra);
  }

  function renderItems() {
    const listEl = $("item-list");
    const emptyEl = $("empty-note");
    const summaryCard = $("summary-card");
    const listCard = $("list-card");
    if (!state.items.length) {
      listEl.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("hidden");
      if (listCard) listCard.classList.add("hidden");
      summaryCard.classList.add("hidden");
      updateQuoteCard();
      return;
    }
    if (emptyEl) emptyEl.classList.add("hidden");
    if (listCard) listCard.classList.remove("hidden");
    summaryCard.classList.remove("hidden");
    updateQuoteCard();
    listEl.innerHTML = state.items.map((item, i) => {
      const type = getType(item.winType);
      const extras = [
        item.room || "",
        item.thickness ? T.thickness + " " + item.thickness + T.mm : "",
        colorLabel(item.glassColor),
        item.lockName ? T.lock + ": " + item.lockName : T.noLock,
        item.hasNet ? T.net + " " + T.netYes : T.net + " " + T.netNo
      ].filter(Boolean).join(" · ");
      return `
        <div class="window-item">
          <div class="item-thumb">${itemDiagram(item, true)}</div>
          <div>
            <div class="item-head">
              <span class="tag">${kindLabel(type.kind)} ${i + 1} x ${item.qty} - ${escapeHtml(type.label)}${item.room ? " · " + escapeHtml(item.room) : ""}</span>
              <span class="item-actions">
              <button type="button" class="secondary icon-btn compact" data-action="edit-item" data-index="${i}">${T.editBtn}</button>
              ${isStaff() ? '<button type="button" class="secondary icon-btn compact cut-toggle" data-action="toggle-cut" data-index="' + i + '">' + cutToggleLabel(false) + '</button>' : ""}
              <button type="button" class="danger-ghost icon-btn compact" data-action="remove-item" data-index="${i}">${ico("trash")}<span>${T.muchun}</span></button>
              </span>
            </div>
            <div class="item-details">
              ${T.map}: ${ftInLabel(item.heightFt)} x ${ftInLabel(item.widthFt)} · ${escapeHtml(type.sub)}<br>
              ${T.kach}: ${escapeHtml(item.companyName)}${item.thickness ? " · " + item.thickness + T.mm : ""} (${T.taka}${item.companyRate || 0}${T.perSq})<br>
              ${T.aluShort}: ${escapeHtml(item.aluName || "-")}${item.aluThick ? " · " + item.aluThick + T.mm : ""}${item.aluColor ? " · " + escapeHtml(aluColorLabel(item.aluColor)) : ""} (${T.taka}${item.frameRate || 0}${T.perFt})<br>
              ${escapeHtml(extras)}
            </div>
            ${isStaff() ? '<div id="cutwrap-' + i + '" class="hidden">' + renderCutTable(item) + '</div>' : ""}
                        ${itemCostHtml(item)}
          </div>
        </div>
      `;
    }).join("");
    updateSummary();
  }


  function getCuttingItems() {
    return getCuttingEntries().map(function (e) { return e.item; });
  }

  function getCuttingEntries() {
    if (state.cutQuote && state.cutQuote.items && state.cutQuote.items.length) {
      return state.cutQuote.items.map(function (item, i) {
        return { item: item, src: "quote", index: i };
      });
    }
    const fromCalc = (state.items || []).map(function (item, i) {
      return { item: item, src: "items", index: i };
    });
    const fromCut = (state.cutItems || []).map(function (item, i) {
      return { item: item, src: "cut", index: i };
    });
    return fromCalc.concat(fromCut);
  }

  function removeCuttingEntry(src, index) {
    const i = Number(index);
    if (!Number.isFinite(i) || i < 0) return;
    if (src === "quote") {
      if (!state.cutQuote || !Array.isArray(state.cutQuote.items)) return;
      state.cutQuote.items.splice(i, 1);
      if (!state.cutQuote.items.length) state.cutQuote = null;
      renderCuttingTab();
      flashNote(T.deletedOk, false);
      return;
    }
    if (src === "items") {
      removeItem(i);
      flashNote(T.deletedOk, false);
      return;
    }
    if (src === "cut") {
      if (!Array.isArray(state.cutItems) || i >= state.cutItems.length) return;
      state.cutItems.splice(i, 1);
      storeSet(KEYS.cutItems, state.cutItems);
      renderCuttingTab();
      flashNote(T.deletedOk, false);
    }
  }

  function cutBlockNoHtml(num, kind) {
    const label = kindLabel(kind);
    return (
      '<span class="cut-block-no" title="' + escapeHtml(label + " " + num) + '">' +
        "<small>" + escapeHtml(label) + "</small>" +
        "<strong>" + num + "</strong>" +
      "</span>"
    );
  }

  function cutBlockTagHtml(item, num) {
    const type = getType(item.winType);
    return (
      cutBlockNoHtml(num, type.kind) +
      '<span class="tag">' +
        "× " + item.qty + " — " +
        escapeHtml(type.label) +
        " · " + ftInLabel(item.heightFt) + " × " + ftInLabel(item.widthFt) +
        (item.room ? " · " + escapeHtml(item.room) : "") +
        (item.hasNet ? " · " + T.net : "") +
      "</span>"
    );
  }

  function cuttingItemBlockHtml(item, num) {
    return (
      '<div class="window-item booklet-item">' +
        "<div>" +
          '<div class="item-head">' + cutBlockTagHtml(item, num) + "</div>" +
          renderCutTable(item) +
        "</div>" +
      "</div>"
    );
  }

  function paginateCutForBooklet(entries) {
    const items = (entries || []).map(function (e) { return e.item; });
    if (!items.length) return [];
    const chunks = [];
    let i = 0;
    let num = 1;
    // Page 1: 3 blocks (header + footer take space); later pages: 4 each
    while (i < items.length) {
      const take = chunks.length === 0 ? 3 : 4;
      const slice = items.slice(i, i + take);
      chunks.push(slice.map(function (it) {
        return { item: it, num: num++ };
      }));
      i += take;
    }
    return chunks;
  }

  function bookletPrintMeta() {
    const shop = shopOf(state.shop);
    let custName = $("quote-name") && $("quote-name").value.trim();
    let custPhone = $("quote-phone") && $("quote-phone").value.trim();
    if (state.cutQuote) {
      custName = state.cutQuote.name || custName || "";
      custPhone = state.cutQuote.phone || custPhone || "";
    }
    const dateStr = new Date().toLocaleDateString(state.lang === "en" ? "en-GB" : "bn-BD", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    return {
      shop: shop,
      dateLabel: T.printDate,
      date: dateStr,
      custLabel: T.printCustomer,
      custName: custName || "",
      custPhone: custPhone || "",
      kicker: T.printCutKicker,
      sub: T.cutTitle || T.printCutKicker,
      thanks: shop.name
    };
  }

  function bookletPageHtml(pageNo, slots, meta) {
    if (!slots || !slots.length) return "";
    const shop = meta.shop;
    const contact = [shop.phone, shop.address].filter(Boolean).join(" · ");
    const body = slots.map(function (s) {
      return cuttingItemBlockHtml(s.item, s.num);
    }).join("");
    const isCover = pageNo === 1;
    const custHtml = (meta.custName || meta.custPhone)
      ? ('<div class="booklet-cust">' +
          "<span>" + escapeHtml(meta.custLabel) + "</span>" +
          (meta.custName ? "<strong>" + escapeHtml(meta.custName) + "</strong>" : "") +
          (meta.custPhone ? "<span>" + escapeHtml(meta.custPhone) + "</span>" : "") +
        "</div>")
      : "";
    const head = isCover
      ? ('<header class="booklet-head">' +
          '<div class="booklet-head-brand">' +
            '<img class="booklet-logo" src="' + escapeHtml(shop.logo || "images/logo.svg") + '" alt="">' +
            "<div>" +
              '<p class="booklet-kicker">' + escapeHtml(meta.kicker) + "</p>" +
              "<h1>" + escapeHtml(shop.name) + "</h1>" +
              '<p class="booklet-sub">' + escapeHtml(meta.sub) + "</p>" +
              (contact ? '<p class="booklet-contact">' + escapeHtml(contact) + "</p>" : "") +
            "</div>" +
          "</div>" +
          '<div class="booklet-head-meta">' +
            "<div><span>" + escapeHtml(meta.dateLabel) + "</span><strong>" + escapeHtml(meta.date) + "</strong></div>" +
            custHtml +
          "</div>" +
        "</header>")
      : "";
    const foot =
      '<footer class="booklet-foot">' +
        "<strong>" + escapeHtml(meta.thanks) + "</strong>" +
        (contact ? "<span>" + escapeHtml(contact) + "</span>" : "") +
      "</footer>";
    return (
      '<section class="booklet-page' + (isCover ? " is-cover" : "") + '" data-page="' + pageNo + '">' +
        head +
        '<div class="booklet-page-body">' + body + "</div>" +
        foot +
      "</section>"
    );
  }

  function buildCutBookletHtml() {
    const meta = bookletPrintMeta();
    const pages = paginateCutForBooklet(getCuttingEntries());
    if (!pages.length) return "";
    return pages.map(function (slots, i) {
      return bookletPageHtml(i + 1, slots, meta);
    }).join("");
  }

  function prepareCutBooklet() {
    const el = $("print-booklet");
    if (!el) return;
    el.innerHTML = buildCutBookletHtml();
    el.setAttribute("aria-hidden", "false");
  }

  function clearCutBooklet() {
    const el = $("print-booklet");
    if (!el) return;
    el.innerHTML = "";
    el.setAttribute("aria-hidden", "true");
  }

  function renderCuttingTab() {
    const wrap = $("cutting-list-wrap");
    const emptyEl = $("cutting-empty");
    const actionsEl = $("cutting-actions");
    const bar = $("cutting-quote-bar");
    const itemsCard = $("cut-items-card");
    const entries = getCuttingEntries();
    if (itemsCard) itemsCard.classList.toggle("hidden", !entries.length);
    if (bar) {
      const on = !!(state.cutQuote && state.cutQuote.items && state.cutQuote.items.length);
      bar.classList.toggle("hidden", !on);
      if (on) {
        if ($("cutting-quote-name")) $("cutting-quote-name").textContent = state.cutQuote.name || "";
        if ($("cutting-quote-meta")) {
          $("cutting-quote-meta").textContent = [state.cutQuote.phone, state.cutQuote.id].filter(Boolean).join(" · ");
        }
        if ($("btn-clear-cut-quote")) $("btn-clear-cut-quote").textContent = T.quoteCutClear;
      }
    }
    if (!wrap || !emptyEl || !actionsEl) return;
    if (!entries.length) {
      wrap.innerHTML = "";
      emptyEl.classList.add("hidden");
      actionsEl.classList.add("hidden");
      return;
    }
    emptyEl.classList.add("hidden");
    actionsEl.classList.remove("hidden");
    wrap.innerHTML = entries.map(function (entry, i) {
      const item = entry.item;
      const num = i + 1;
      return (
        '<div class="window-item" data-cut-block="' + num + '">' +
          '<div class="item-thumb">' + itemDiagram(item, true) + "</div>" +
          "<div>" +
            '<div class="item-head">' +
              cutBlockTagHtml(item, num) +
              '<span class="item-actions">' +
                '<button type="button" class="danger-ghost icon-btn compact" data-action="remove-cut-entry" data-src="' +
                escapeHtml(entry.src) + '" data-index="' + entry.index + '">' + ico("trash") + "<span>" + T.muchun + "</span></button>" +
              "</span>" +
            "</div>" +
            '<div class="item-details">' +
              T.outerSize + ": " + ftInLabel(item.heightFt) + " x " + ftInLabel(item.widthFt) +
              (item.hasNet ? " · " + T.net : "") +
            "</div>" +
            renderCutTable(item) +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  function fillDefaultCutSize() {
    if ($("cut-h")) $("cut-h").value = "54";
    if ($("cut-w")) $("cut-w").value = "60";
  }

  function resetCutCalc() {
    fillDefaultCutSize();
    if ($("cut-qty")) $("cut-qty").value = "1";
    if ($("cut-room")) $("cut-room").value = "";
    state.cutKind = "window";
    state.cutType = "sliding2";
    state.cutItems = [];
    state.cutQuote = null;
    state.items = [];
    storeSet(KEYS.cutItems, state.cutItems);
    storeSet(KEYS.items, state.items);
    renderCutKindPicker();
    renderCutTypePicker();
    const box = $("cut-calc-result");
    if (box) {
      box.classList.add("hidden");
      box.innerHTML = "";
    }
    renderCutPreview(true);
    renderItems();
    renderCuttingTab();
  }

  function addCutListItem() {
    const heightFt = cutInputSizeFt("h");
    const widthFt = cutInputSizeFt("w");
    if (!(heightFt > 0) || !(widthFt > 0) || heightFt > 40 || widthFt > 40) {
      flashNote(T.errSize, true);
      return;
    }
    if (!state.cutKind || !state.cutType) {
      flashNote(T.errKind, true);
      return;
    }
    const qty = cutQtyValue();
    state.cutItems.push({
      winType: state.cutType,
      heightFt: heightFt,
      widthFt: widthFt,
      qty: qty,
      room: cleanTextValue($("cut-room") && $("cut-room").value).slice(0, 40),
      hasNet: false,
      glassColor: "clear",
      aluColor: "silver",
      fromCut: true
    });
    storeSet(KEYS.cutItems, state.cutItems);
    renderCutCalcResult();
    renderCuttingTab();
    flashNote(T.cutAddedNote, false);
  }


  function showError(message) {
    const el = $("err-msg");
    if (!el) return;
    el.textContent = message;
    el.style.display = "block";
  }

  function hideError() {
    const el = $("err-msg");
    if (el) el.style.display = "none";
  }

  function showStaffErr(message) {
    const el = $("staff-err");
    if (!el) return;
    el.textContent = message || "";
    el.style.display = message ? "block" : "none";
  }

  function addItem() {
    const hEl = $("in-h");
    const wEl = $("in-w");
    const qtyEl = $("in-qty");
    const heightFt = inputSizeFt("h");
    const widthFt = inputSizeFt("w");
    const qtyRaw = readNonNeg(qtyEl);
    const thickness = parseFloat($("sel-glass-thick") && $("sel-glass-thick").value) || 0;
    const companyName = selectedCompanyName();
    const glassColor = normalizeColorId(state.glassColor);
    const company = exactGlassCombo(companyName, thickness, glassColor);
    const lockIdx = parseInt($("sel-lock") && $("sel-lock").value, 10);
    const lock = lockIdx >= 0 && state.locks[lockIdx] ? state.locks[lockIdx] : null;
    const aluName = selectedAluName();
    const aluThick = selectedAluThick();
    const aluColor = normalizeAluColorId(state.aluColor);
    const alu = exactAluCombo(aluName, aluThick, aluColor);

    if (!state.selectedKind || !state.selectedType) {
      showError(T.errKind);
      return;
    }
    if (!company) {
      showError(T.errCompany);
      return;
    }
    if (!alu) {
      showError(T.errAlu);
      return;
    }
    const qtyOk = Number.isFinite(qtyRaw) && qtyRaw >= 1 && qtyRaw <= 99;
    const sizeOk = heightFt > 0 && widthFt > 0 && heightFt <= 40 && widthFt <= 40;
    markInvalid(qtyEl, !qtyOk);
    markInvalid(hEl, !sizeOk);
    markInvalid(wEl, !sizeOk);
    if (!qtyOk) {
      showError(T.errNeedNumber);
      return;
    }
    if (!sizeOk) {
      showError(T.errSize);
      return;
    }
    hideError();
    const qty = Math.max(1, Math.round(qtyRaw));

    const priced = priceParts({
      heightFt: heightFt,
      widthFt: widthFt,
      qty: qty,
      hasNet: state.hasNet,
      winType: state.selectedType,
      companyRate: company.rate,
      frameRate: alu.rate,
      lockRate: lock ? lock.rate : 0
    }, company, alu, lock);

    const nextItem = {
      heightFt,
      widthFt,
      qty,
      thickness,
      aluName: alu.name,
      aluThick: alu.thickness,
      aluColor: aluColor,
      companyName: company.name,
      companyRate: priced.companyRate,
      glassColor: glassColor,
      lockName: lock ? lock.name : null,
      lockRate: priced.lockRate,
      lockStyle: lockStyleOf(lock),
      hasNet: state.hasNet,
      netCost: priced.netCost,
      frameRate: priced.frameRate,
      extra: priced.extra,
      totalSqft: priced.totalSqft,
      totalAluFt: priced.totalAluFt,
      glassCost: priced.glassCost,
      lockCost: priced.lockCost,
      frameCost: priced.frameCost,
      subtotal: priced.subtotal,
      winType: state.selectedType,
      room: cleanTextValue($("in-room") && $("in-room").value).slice(0, 40)
    };
    if (state.editItemIndex >= 0 && state.editItemIndex < state.items.length) {
      state.items[state.editItemIndex] = nextItem;
      state.editItemIndex = -1;
    } else {
      state.items.push(nextItem);
    }

    storeSet(KEYS.items, state.items);
    renderItems();
    renderCuttingTab();
    clearInputs();
    renderLivePreview(true);
  }

  function clearInputs() {
    if ($("in-h")) $("in-h").value = "54";
    if ($("in-w")) $("in-w").value = "60";
    if ($("in-qty")) $("in-qty").value = "1";
    if ($("in-room")) $("in-room").value = "";
    state.editItemIndex = -1;
    updateAddItemBtn();
    syncCalcDetails();
  }

  function removeItem(index) {
    state.items.splice(index, 1);
    storeSet(KEYS.items, state.items);
    renderItems();
    renderCuttingTab();
  }

  function clearAll() {
    state.items = [];
    state.selectedKind = "window";
    state.selectedType = "sliding2";
    state.editItemIndex = -1;
    if ($("in-qty")) $("in-qty").value = "1";
    if ($("in-room")) $("in-room").value = "";
    clearInputs();
    storeSet(KEYS.items, state.items);
    renderKindPicker();
    renderTypePicker();
    syncCalcDetails();
    renderItems();
    renderCuttingTab();
    renderLivePreview(false);
    updateAddItemBtn();
  }

  function toggleCutList(index) {
    const el = $("cutwrap-" + index);
    if (!el) return;
    el.classList.toggle("hidden");
    const open = !el.classList.contains("hidden");
    const btn = document.querySelector('[data-action="toggle-cut"][data-index="' + index + '"]');
    if (btn) btn.innerHTML = cutToggleLabel(open);
  }

  function addCompany() {
    if (!isOwner()) return;
    const nameEl = $("new-company-name");
    const name = cleanTextValue(nameEl && nameEl.value);
    const thicks = selectedThicks("company");
    const colors = state.adminPick.companyColors.map(normalizeColorId);
    syncMmRatesFromDom("new-company-thicks", state.adminPick.companyRates);
    const rateByMm = readMmRates("new-company-thicks", thicks);
    markInvalid(nameEl, !name);
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    if (!rateByMm) { flashNote(T.errNeedNumber, true); return; }
    if (nameEl) nameEl.value = name;
    thicks.forEach((thickness) => {
      const rate = rateByMm[Number(thickness)];
      colors.forEach((color) => upsertCombo(state.companies, {
        name: name,
        thickness: thickness,
        rate: rate,
        color: color,
        out: false
      }));
    });
    $("new-company-name").value = "";
    if ($("new-company-thick")) $("new-company-thick").value = "";
    state.adminPick.companyRates = {};
    state.adminPick.companyThicks = [5];
    state.adminPick.companyColors = ["clear"];
    renderAdminPicks();
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData(["companies"], T.addedOk);
  }

  function removeNamedCombos(list, index) {
    const item = list[index];
    if (!item) return;
    const name = item.name;
    for (let i = list.length - 1; i >= 0; i--) {
      if (list[i].name === name) list.splice(i, 1);
    }
  }

  function removeCompany(index) {
    if (!isOwner()) return;
    removeNamedCombos(state.companies, index);
    renderRateList("company-list", state.companies, "company");
    renderCompanySelect();
    persistOwnerData(["companies"], T.deletedOk);
  }

  function addAluminium() {
    if (!isOwner()) return;
    const nameEl = $("new-alu-name");
    const name = cleanTextValue(nameEl && nameEl.value);
    const thicks = selectedThicks("alu");
    const colors = state.adminPick.aluColors.map(normalizeAluColorId);
    if (!state.adminPick.aluRates) state.adminPick.aluRates = {};
    syncMmRatesFromDom("new-alu-thicks", state.adminPick.aluRates);
    const rateByMm = readMmRates("new-alu-thicks", thicks);
    markInvalid(nameEl, !name);
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (!thicks.length || !colors.length) { flashNote(T.errNeedPick, true); return; }
    if (!rateByMm) { flashNote(T.errNeedNumber, true); return; }
    if (nameEl) nameEl.value = name;
    thicks.forEach((thickness) => {
      const rate = rateByMm[Number(thickness)];
      colors.forEach((color) => upsertCombo(state.aluminium, { name: name, thickness: thickness, rate: rate, color: color }));
    });
    $("new-alu-name").value = "";
    if ($("new-alu-thick")) $("new-alu-thick").value = "";
    state.adminPick.aluRates = {};
    state.adminPick.aluThicks = [1];
    state.adminPick.aluColors = ["silver"];
    renderAdminPicks();
    refreshCatalogSelects();
    persistOwnerData(["aluminium"], T.addedOk);
  }

  function removeAluminium(index) {
    if (!isOwner()) return;
    removeNamedCombos(state.aluminium, index);
    refreshCatalogSelects();
    persistOwnerData(["aluminium"], T.deletedOk);
  }

  function saveCharges() {
    if (!isOwner()) return;
    const netEl = $("in-charge-net");
    const extraEl = $("in-charge-extra");
    const seasonEl = $("in-charge-season");
    const net = readNonNeg(netEl);
    const extra = readNonNeg(extraEl);
    const seasonPct = seasonEl ? Math.max(0, Math.min(90, readNonNeg(seasonEl) || 0)) : 0;
    markInvalid(netEl, Number.isNaN(net));
    markInvalid(extraEl, Number.isNaN(extra));
    if (Number.isNaN(net) || Number.isNaN(extra)) { flashNote(T.errNeedNumber, true); return; }
    state.charges = { net, extra, seasonPct: Number.isNaN(seasonPct) ? 0 : seasonPct };
    try { localStorage.setItem("glasscalc:seasonPct", String(state.charges.seasonPct)); } catch (_) {}
    persistOwnerData(["charges"], T.savedOk);
    repriceItems();
    updateSummary();
  }

  function addLock() {
    if (!isOwner()) return;
    const nameEl = $("new-lock-name");
    const rateEl = $("new-lock-rate");
    const name = cleanTextValue(nameEl && nameEl.value);
    const rate = readNonNeg(rateEl);
    const style = $("new-lock-style") ? $("new-lock-style").value : "generic";
    markInvalid(nameEl, !name);
    markInvalid(rateEl, Number.isNaN(rate));
    if (!name) { flashNote(T.errNeedName, true); return; }
    if (Number.isNaN(rate)) { flashNote(T.errNeedNumber, true); return; }
    if (nameEl) nameEl.value = name;
    state.locks.push({ name, rate, style });
    $("new-lock-name").value = "";
    $("new-lock-rate").value = "";
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData(["locks"], T.addedOk);
    renderLivePreview(true);
  }

  function removeLock(index) {
    if (!isOwner()) return;
    state.locks.splice(index, 1);
    renderRateList("lock-list", state.locks, "lock");
    renderLockSelect();
    persistOwnerData(["locks"], T.deletedOk);
    renderLivePreview(true);
  }


  function saveCutParams() {
    if (!isOwner()) return;
    const next = normalizeCutParams({
      outerHoriz: numVal("in-cp-outerhoriz"),
      side: numVal("in-cp-side"),
      shutterHoriz: numVal("in-cp-shutterhoriz"),
      glassH: numVal("in-cp-glassh"),
      glassW: numVal("in-cp-glassw")
    });
    if (Object.values(next).some((v) => Number.isNaN(v) || v < 0)) { flashNote(T.errNeedNumber, true); return; }
    state.cutParams = next;
    persistOwnerData(["cut"], T.savedOk);
    renderItems();
    renderCuttingTab();
    if ($("cut-calc-result") && !$("cut-calc-result").classList.contains("hidden")) renderCutCalcResult();
  }



  function setupPwa() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("js/sw.js?v=224", { scope: "/" }).then(function (reg) {
        if (reg && reg.update) reg.update().catch(function () {});
      }).catch(function () {});
      var refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (refreshing) return;
        refreshing = true;
        location.reload();
      });
    }
    var installBtn = $("btn-install");
    var tip = $("install-tip");
    var deferred = null;
    var standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    if (standalone) document.documentElement.classList.add("is-standalone");
    window.addEventListener("beforeinstallprompt", function (e) {
      e.preventDefault();
      deferred = e;
      if (installBtn) installBtn.classList.remove("hidden");
    });
    window.addEventListener("appinstalled", function () {
      deferred = null;
      if (installBtn) installBtn.classList.add("hidden");
      if (tip) tip.classList.add("hidden");
    });
    if (installBtn) {
      installBtn.addEventListener("click", function () {
        if (deferred) {
          deferred.prompt();
          deferred.userChoice.finally(function () {
            deferred = null;
            installBtn.classList.add("hidden");
          });
          return;
        }
        if (tip) tip.classList.toggle("hidden");
      });
    }
    if (!standalone && /iphone|ipad|ipod/i.test(navigator.userAgent) && installBtn) {
      installBtn.classList.remove("hidden");
    }
  }

  function apiReady() {
    return !!(window.MTG_API && window.MTG_API.configured && window.MTG_API.configured());
  }

  function setDbStatus(text, ok) {
    const el = $("db-status");
    if (!el) return;
    el.textContent = text || "";
    el.classList.toggle("is-ok", !!ok);
    el.classList.toggle("is-err", ok === false);
    el.classList.toggle("hidden", !text);
  }

  function fillDbSettings() {
    const cur = (window.MTG_API && window.MTG_API.current) ? window.MTG_API.current() : { url: "", key: "" };
    if ($("in-db-url") && document.activeElement !== $("in-db-url")) $("in-db-url").value = cur.url || "";
    if ($("in-db-key") && document.activeElement !== $("in-db-key")) $("in-db-key").value = cur.key || "";
    if ($("btn-db-open-sql") && window.MTG_API && window.MTG_API.sqlEditorUrl) {
      $("btn-db-open-sql").href = window.MTG_API.sqlEditorUrl();
    }
    const steps = $("db-sql-steps");
    if (steps) {
      steps.innerHTML = [T.dbSqlStep1, T.dbSqlStep2, T.dbSqlStep3, T.dbSqlStep4]
        .map((s) => "<li>" + escapeHtml(s) + "</li>").join("");
    }
    setDbStatus(apiReady() ? T.dbConnected : T.dbNotConnected, apiReady() ? true : false);
  }

  function readDbForm() {
    return {
      url: cleanTextValue($("in-db-url") && $("in-db-url").value),
      key: cleanTextValue($("in-db-key") && $("in-db-key").value)
    };
  }

  function connectDbFromForm() {
    if (!isSuperAdmin()) return;
    if (!window.MTG_API || !window.MTG_API.saveConfig) {
      flashNote(T.dbTestFail, true);
      return;
    }
    const form = readDbForm();
    markInvalid($("in-db-url"), !form.url);
    markInvalid($("in-db-key"), !form.key);
    if (!form.url || !form.key) {
      flashNote(T.errNeedName, true);
      return;
    }
    window.MTG_API.saveConfig(form.url, form.key);
    fillDbSettings();
    flashNote(T.dbSaved, false);
    loadCatalog();
  }

  function testDbConnection() {
    if (!isSuperAdmin()) return;
    if (!window.MTG_API || !window.MTG_API.testConnection) {
      flashNote(T.dbTestFail, true);
      return;
    }
    const form = readDbForm();
    if (form.url && form.key && window.MTG_API.applyConfig) {
      window.MTG_API.applyConfig(form.url, form.key);
    }
    setDbStatus(T.working || "...", null);
    window.MTG_API.testConnection().then(function () {
      setDbStatus(T.dbTestOk, true);
      flashNote(T.dbTestOk, false);
    }).catch(function () {
      setDbStatus(T.dbTestFail, false);
      flashNote(T.dbTestFail, true);
    });
  }

  function useDefaultDb() {
    if (!isSuperAdmin()) return;
    if (!window.MTG_API || !window.MTG_API.useDefaults) return;
    window.MTG_API.useDefaults();
    fillDbSettings();
    flashNote(T.dbSaved, false);
    loadCatalog();
  }

  function resetDbConfig() {
    if (!isSuperAdmin()) return;
    if (!window.MTG_API || !window.MTG_API.clearStoredConfig) return;
    window.MTG_API.clearStoredConfig();
    fillDbSettings();
    flashNote(T.dbSaved, false);
    loadCatalog();
  }

  function loadSqlSetup() {
    if (window.MTG_SQL_SETUP && window.MTG_SQL_SETUP.schema) {
      return Promise.resolve(window.MTG_SQL_SETUP);
    }
    return new Promise(function (resolve, reject) {
      const s = document.createElement("script");
      s.src = "js/sql-setup.js?v=9";
      s.onload = function () {
        if (window.MTG_SQL_SETUP && window.MTG_SQL_SETUP.schema) resolve(window.MTG_SQL_SETUP);
        else reject(new Error("sql"));
      };
      s.onerror = function () { reject(new Error("sql")); };
      document.head.appendChild(s);
    });
  }

  function showSqlPreview(text) {
    const box = $("db-sql-preview");
    if (!box) return;
    box.value = text || "";
    try {
      box.focus();
      box.select();
      box.setSelectionRange(0, box.value.length);
    } catch (_) { /* ignore */ }
  }

  function downloadTextFile(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "mtg.sql";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  function copyText(text) {
    if (!text) return Promise.reject(new Error("empty"));
    // Prefer sync fallback first while still inside the click gesture (mobile/PWA safe).
    return copyTextFallback(text).catch(function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      }
      return Promise.reject(new Error("copy"));
    });
  }

  function copyTextFallback(text) {
    return new Promise(function (resolve, reject) {
      const box = $("db-sql-preview");
      if (box) {
        const wasRo = box.readOnly;
        box.readOnly = false;
        box.value = text;
        box.focus();
        box.select();
        try { box.setSelectionRange(0, box.value.length); } catch (_) { /* ignore */ }
        try {
          if (document.execCommand("copy")) {
            box.readOnly = wasRo;
            resolve();
            return;
          }
        } catch (_) { /* fall through */ }
        box.readOnly = wasRo;
      }
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try { ta.setSelectionRange(0, ta.value.length); } catch (_) { /* ignore */ }
      try {
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (ok) resolve();
        else reject(new Error("copy"));
      } catch (err) {
        try { document.body.removeChild(ta); } catch (_) { /* ignore */ }
        reject(err);
      }
    });
  }

  function sqlPackText(pack, kind) {
    if (!pack) return "";
    return kind === "defaults" ? (pack.defaults || "") : (pack.schema || "");
  }

  function applySqlAction(kind, mode) {
    if (!isSuperAdmin()) {
      flashNote(T.dbCopyFail, true);
      return;
    }
    function run(pack) {
      const text = sqlPackText(pack, kind);
      if (!text) {
        flashNote(T.dbCopyFail, true);
        return;
      }
      showSqlPreview(text);
      if (mode === "download") {
        downloadTextFile(kind === "defaults" ? "mtg-defaults.sql" : "mtg-schema.sql", text);
        flashNote(T.dbDownloaded || T.dbCopied, false);
        return;
      }
      copyText(text).then(function () {
        flashNote(T.dbCopied, false);
      }).catch(function () {
        showSqlPreview(text);
        downloadTextFile(kind === "defaults" ? "mtg-defaults.sql" : "mtg-schema.sql", text);
        flashNote(T.dbDownloaded || T.dbCopyFail, false);
      });
    }
    if (window.MTG_SQL_SETUP && window.MTG_SQL_SETUP.schema) {
      run(window.MTG_SQL_SETUP);
      return;
    }
    loadSqlSetup().then(run).catch(function () {
      flashNote(T.dbCopyFail, true);
    });
  }

  function copySqlKind(kind) {
    applySqlAction(kind, "copy");
  }

  function downloadSqlKind(kind) {
    applySqlAction(kind, "download");
  }

  function openDbSettingsFromGate() {
    if (!isSuperAdmin()) return;
    document.documentElement.classList.remove("gate-open");
    $("owner-gate").classList.add("hidden");
    switchTab("rates");
    switchAdminPanel("db");
  }

  function apiRequest(payload) {
    if (!apiReady() || !window.MTG_API.request) return Promise.reject(new Error("noapi"));
    return window.MTG_API.request(payload);
  }


  function fillCutInputs() {
    if ($("in-cp-outerhoriz")) $("in-cp-outerhoriz").value = state.cutParams.outerHoriz;
    if ($("in-cp-side")) $("in-cp-side").value = state.cutParams.side;
    if ($("in-cp-shutterhoriz")) $("in-cp-shutterhoriz").value = state.cutParams.shutterHoriz;
    if ($("in-cp-glassh")) $("in-cp-glassh").value = state.cutParams.glassH;
    if ($("in-cp-glassw")) $("in-cp-glassw").value = state.cutParams.glassW;
  }


  function applyOwnerData(data) {
    if (data.role === "owner" || data.role === "operator" || data.role === "superadmin") state.role = data.role;
    if (isForeverSuperAdminEmail(state.ownerEmail)) state.role = "superadmin";
    if (Array.isArray(data.companies)) state.companies = normalizeCompanies(data.companies);
    if (Array.isArray(data.locks)) state.locks = data.locks;
    if (Array.isArray(data.aluminium)) state.aluminium = normalizeAluminium(data.aluminium);
    if (Array.isArray(data.glassThicks)) state.glassThicks = data.glassThicks;
    if (data.charges && typeof data.charges === "object") {
      state.charges = { net: Number(data.charges.net) || 0, extra: Number(data.charges.extra) || 0, seasonPct: Number(data.charges.seasonPct) || 0 };
    }
    if (data.cutParams && typeof data.cutParams === "object") {
      state.cutParams = normalizeCutParams(data.cutParams);
    }
    state.quotes = isStaff() && Array.isArray(data.quotes) ? data.quotes : [];
    state.staff = isOwner() && Array.isArray(data.users) ? data.users : [];
    if (data.shop && typeof data.shop === "object" && (data.shop.name || data.shop.slogan || data.shop.logo || data.shop.phone || data.shop.address)) applyShop(data.shop);
    fillCutInputs();
    repriceItems();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    renderAluList();
    refreshCatalogSelects();
    renderStaffList();
    renderQuotes();
    renderHome();
    renderItems();
    updateRoleUi();
    updateCatalogHint();
  }

  function setCatalogSyncing(on) {
    document.documentElement.classList.toggle("is-syncing", !!on);
  }

  function fetchJsonTimeout(promise, ms) {
    return new Promise(function (resolve, reject) {
      var done = false;
      var timer = setTimeout(function () {
        if (done) return;
        done = true;
        reject(new Error("timeout"));
      }, ms);
      promise.then(function (data) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(data);
      }, function (err) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        reject(err);
      });
    });
  }

  function applyCatalogLists(data, doRender) {
    if (!data || typeof data !== "object") return false;
    const hasLists = Array.isArray(data.companies) || Array.isArray(data.aluminium)
      || Array.isArray(data.glassThicks) || Array.isArray(data.locks);
    if (data.ok === false && !hasLists) return false;
    if (Array.isArray(data.companies)) state.companies = normalizeCompanies(data.companies);
    if (Array.isArray(data.locks)) state.locks = data.locks;
    if (Array.isArray(data.aluminium)) state.aluminium = normalizeAluminium(data.aluminium);
    if (Array.isArray(data.glassThicks)) state.glassThicks = data.glassThicks;
    if (data.charges && typeof data.charges === "object") {
      state.charges = { net: Number(data.charges.net) || 0, extra: Number(data.charges.extra) || 0, seasonPct: Number(data.charges.seasonPct) || 0 };
    }
    if (data.cutParams && typeof data.cutParams === "object") {
      state.cutParams = normalizeCutParams(data.cutParams);
    }
    if (data.shop && typeof data.shop === "object" && (data.shop.name || data.shop.slogan || data.shop.logo || data.shop.phone || data.shop.address)) applyShop(data.shop);
    const ok = !!(state.companies.length || state.aluminium.length || state.glassThicks.length || state.locks.length);
    if (doRender !== false) {
      repriceItems();
      renderItems();
      renderRateList("company-list", state.companies, "company");
      renderRateList("lock-list", state.locks, "lock");
      renderAluList();
      refreshCatalogSelects();
      updateCatalogHint();
    }
    return ok;
  }

  function applyCatalog(data) {
    return applyCatalogLists(data, true);
  }

  function updateCatalogHint() {
    const el = $("catalog-hint");
    if (!el) return;
    const empty = !state.companies.length && !state.aluminium.length;
    if (empty) {
      el.innerHTML = "<strong>" + T.catalogEmpty + "</strong><br>" + T.catalogGuide +
        (isOwner() || !apiReady()
          ? ' <button type="button" class="icon-btn secondary compact" id="btn-catalog-guide">' + T.catalogGuideBtn + "</button>"
          : "");
      el.classList.remove("hidden");
    } else {
      el.textContent = "";
      el.classList.add("hidden");
    }
  }

  function fetchCatalogGet() {
    if (!apiReady() || !window.MTG_API.fetchCatalogGet) return Promise.reject(new Error("noapi"));
    return window.MTG_API.fetchCatalogGet();
  }

  function fetchCatalogOnce() {
    return fetchJsonTimeout(fetchCatalogGet(), 18000).catch(function () {
      return fetchJsonTimeout(apiRequest({ action: "catalog" }), 18000);
    });
  }

  function fetchCatalogWithRetry(tries) {
    var left = Math.max(1, tries || 3);
    function attempt() {
      return fetchCatalogOnce().then(function (data) {
        if (data && (data.ok !== false) && (
          Array.isArray(data.companies) || Array.isArray(data.aluminium) || Array.isArray(data.locks)
        )) return data;
        throw new Error("catalog");
      }).catch(function (err) {
        left -= 1;
        if (left <= 0) throw err || new Error("catalog");
        return new Promise(function (resolve) {
          setTimeout(resolve, left === 2 ? 700 : 1400);
        }).then(attempt);
      });
    }
    return attempt();
  }

  function loadCatalog() {
    if (!apiReady()) {
        refreshCatalogSelects();
      renderRateList("company-list", state.companies, "company");
      renderRateList("lock-list", state.locks, "lock");
      renderAluList();
      updateCatalogHint();
      return;
    }
    showLoader(true, T.loading);
    fetchCatalogWithRetry(3).then(function (data) {
      applyCatalogLists(data, true);
      try { storeSet(KEYS.catalogCache, data); } catch (_) { /* ignore */ }
    }).catch(function () {
      return storeGet(KEYS.catalogCache).then(function (cached) {
        if (cached && (Array.isArray(cached.companies) || Array.isArray(cached.aluminium))) {
          applyCatalogLists(cached, true);
          flashNote(T.offlineCatalog, false);
        } else {
          updateCatalogHint();
        }
      });
    }).finally(function () {
      showLoader(false);
    });
  }


  function roleLabel(role) {
    if (role === "superadmin") return T.roleSuperAdmin;
    if (role === "owner") return T.roleOwner;
    return T.roleStaff;
  }

  function renderStaffList() {
    const wrap = $("staff-list");
    if (!wrap) return;
    if (!isOwner()) {
      wrap.innerHTML = "";
      return;
    }
    if (!state.staff.length) {
      wrap.innerHTML = '<div class="empty-note">' + T.emptyRates + "</div>";
      return;
    }
    wrap.innerHTML = state.staff.map((u, i) => {
      const isSa = u.role === "superadmin" || isForeverSuperAdminEmail(u.email);
      const pillClass = isSa ? " is-superadmin" : (u.role === "owner" ? " is-owner" : "");
      const canEdit = isSa ? isSuperAdmin() : isOwner();
      const editing = state.edit.kind === "staff" && state.edit.index === i;

      if (editing) {
        const roleField = isSa
          ? '<span class="role-pill is-superadmin">' + escapeHtml(roleLabel("superadmin")) + "</span>"
          : '<select class="edit-role edit-style" aria-label="' + escapeHtml(T.dhoron || T.roleStaff) + '">' +
              '<option value="operator"' + (u.role !== "owner" ? " selected" : "") + ">" + escapeHtml(T.roleStaff) + "</option>" +
              '<option value="owner"' + (u.role === "owner" ? " selected" : "") + ">" + escapeHtml(T.roleOwner) + "</option>" +
            "</select>";
        return rateRowOpen(i, "editing is-staff-edit") +
          '<span class="edit-email name">' + escapeHtml(u.email) + "</span>" +
          roleField +
          '<input class="edit-pin edit-rate" type="text" inputmode="numeric" maxlength="15" placeholder="' + escapeHtml(T.staffPinPh || "") + '" autocomplete="off" aria-label="' + escapeHtml(T.staffPinChange || "PIN") + '">' +
          editSaveCancel("staff", i) +
          "</div>";
      }

      let actions = "";
      if (canEdit) {
        actions += '<button type="button" class="icon-btn ghost compact" data-action="edit-staff" data-index="' + i + '">' + ico("pencil") + "<span>" + escapeHtml(T.editBtn) + "</span></button>";
      }
      if (!isSa) {
        actions += '<button type="button" class="danger-ghost icon-btn compact" data-action="remove-staff" data-index="' + i + '">' + ico("trash") + "<span>" + T.muchun + "</span></button>";
      }
      if (actions) actions = '<span class="rate-actions">' + actions + "</span>";
      return rateRowOpen(i) +
        '<span class="name">' + escapeHtml(u.email) + "</span>" +
        '<span class="role-pill' + pillClass + '">' + escapeHtml(roleLabel(isSa ? "superadmin" : u.role)) + "</span>" +
        actions +
        "</div>";
    }).join("");
  }

  function startEditStaff(index) {
    if (!isOwner()) return;
    const u = state.staff[index];
    if (!u) return;
    const isSa = u.role === "superadmin" || isForeverSuperAdminEmail(u.email);
    if (isSa && !isSuperAdmin()) {
      showStaffErr(T.staffProtectSuper);
      return;
    }
    if (state.edit.kind === "staff" && state.edit.index === index) {
      cancelEdit();
      return;
    }
    cancelEdit(true);
    state.edit = {
      kind: "staff",
      index: index,
      name: u.email || "",
      rate: null,
      rates: {},
      thicks: [],
      thickExtras: [],
      colors: [],
      colorExtras: [],
      outs: []
    };
    showStaffErr("");
    renderStaffList();
    setTimeout(function () {
      const wrap = $("staff-list");
      const pin = wrap && wrap.querySelector('.rate-row[data-index="' + index + '"] .edit-pin');
      if (pin) pin.focus();
    }, 0);
  }

  function saveEditedStaff(index) {
    if (!isOwner()) return;
    const wrap = $("staff-list");
    const row = wrap && wrap.querySelector('.rate-row[data-index="' + index + '"]');
    const u = state.staff[index];
    if (!row || !u) return;
    const isSa = u.role === "superadmin" || isForeverSuperAdminEmail(u.email);
    if (isSa && !isSuperAdmin()) {
      showStaffErr(T.staffProtectSuper);
      return;
    }
    const pinEl = row.querySelector(".edit-pin");
    const pin = String(pinEl && pinEl.value || "").trim();
    if (pinEl) markInvalid(pinEl, !ownerPinOk(pin));
    if (!ownerPinOk(pin)) {
      showStaffErr(T.staffBad);
      return;
    }
    if (!isSa) {
      const roleEl = row.querySelector(".edit-role");
      u.role = roleEl && roleEl.value === "owner" ? "owner" : "operator";
    }
    u.pin = pin;
    if (String(u.email || "").toLowerCase() === String(state.ownerEmail || "").toLowerCase()) {
      state.ownerPin = pin;
      saveSession(state.ownerEmail, state.ownerPin, state.role);
    }
    state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
    showStaffErr("");
    renderStaffList();
    persistOwnerData(["users"], T.staffPinUpdated || T.updatedOk);
  }

  function addStaff() {
    if (!isOwner()) return;
    if (state.edit.kind === "staff") cancelEdit(true);
    const email = String($("new-staff-email") && $("new-staff-email").value || "").trim().toLowerCase();
    const pin = String($("new-staff-pin") && $("new-staff-pin").value || "").trim();
    let role = "operator";
    const picked = $("new-staff-role") && $("new-staff-role").value;
    if (picked === "owner") role = "owner";
    if (!ownerEmailOk(email) || !ownerPinOk(pin)) {
      showStaffErr(T.staffBad);
      return;
    }
    showStaffErr("");
    const existing = state.staff.find((u) => u.email === email);
    const targetIsSa = (existing && existing.role === "superadmin") || isForeverSuperAdminEmail(email);

    if (targetIsSa) {
      if (!isSuperAdmin()) {
        showStaffErr(T.staffProtectSuper);
        return;
      }
      if (existing) existing.pin = pin;
      else state.staff.push({ email: email, pin: pin, role: "superadmin" });
      if (email === String(state.ownerEmail || "").toLowerCase()) {
        state.ownerPin = pin;
        saveSession(state.ownerEmail, state.ownerPin, state.role);
      }
      $("new-staff-email").value = "";
      $("new-staff-pin").value = "";
      if ($("new-staff-role")) $("new-staff-role").value = "operator";
      renderStaffList();
      persistOwnerData(["users"], T.staffPinUpdated || T.updatedOk);
      return;
    }

    if (existing) {
      existing.pin = pin;
      existing.role = role;
    } else {
      state.staff.push({ email: email, pin: pin, role: role });
    }
    $("new-staff-email").value = "";
    $("new-staff-pin").value = "";
    if ($("new-staff-role")) $("new-staff-role").value = "operator";
    renderStaffList();
    persistOwnerData(["users"], existing ? T.updatedOk : T.addedOk);
  }

  function removeStaff(index) {
    if (!isOwner()) return;
    const target = state.staff[index];
    if (target && (target.role === "superadmin" || isForeverSuperAdminEmail(target.email))) {
      showStaffErr(T.staffProtectSuper);
      return;
    }
    const next = state.staff.filter((_, i) => i !== index);
    if (!next.some((u) => u.role === "owner" || u.role === "superadmin")) {
      showStaffErr(T.staffNeedOwner);
      return;
    }
    showStaffErr("");
    if (state.edit.kind === "staff") {
      state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
    }
    state.staff = next;
    renderStaffList();
    persistOwnerData(["users"], T.deletedOk);
  }

  function staffForSave() {
    // Super Admin may include SA rows when a new PIN is set. Owners never send SA.
    const list = (state.staff || [])
      .filter((u) => {
        const email = String(u.email || "").trim().toLowerCase();
        if (!email) return false;
        const isSa = u.role === "superadmin" || isForeverSuperAdminEmail(email);
        if (isSa) {
          return isSuperAdmin() && /^\d{4,15}$/.test(String(u.pin || "").trim());
        }
        return true;
      })
      .map((u) => {
        const email = String(u.email || "").trim().toLowerCase();
        const isSa = u.role === "superadmin" || isForeverSuperAdminEmail(email);
        const row = {
          email: email,
          role: isSa ? "superadmin" : (u.role === "owner" ? "owner" : "operator")
        };
        const pin = String(u.pin || "").trim();
        if (/^\d{4,15}$/.test(pin)) row.pin = pin;
        return row;
      });
    if (state.ownerEmail && state.ownerPin && state.role !== "superadmin") {
      const found = list.find((u) => u.email === state.ownerEmail);
      if (!found) list.push({ email: state.ownerEmail, pin: state.ownerPin, role: "owner" });
      else if (!found.pin) found.pin = state.ownerPin;
    }
    return list;
  }

  var persistTimer = null;
  var persistPending = {};
  var persistInFlight = false;
  var persistAgain = false;

  function persistOwnerData(sections, okMsg) {
    if (!isOwner() || !state.ownerPin || !state.ownerEmail || !apiReady()) {
      flashNote(T.ownerNeedApi || T.ownerSaveFail, true);
      return;
    }
    var list = Array.isArray(sections) ? sections : [];
    if (!list.length) {
      ["companies", "locks", "aluminium", "charges", "cut", "users", "shop"].forEach(function (s) {
        persistPending[s] = true;
      });
    } else {
      list.forEach(function (s) {
        var key = String(s || "").trim();
        if (key === "cutParams") key = "cut";
        if (key) persistPending[key] = true;
      });
    }
    if (okMsg) persistOkMsg = okMsg;
    flashNote(T.savingBtn || "সংরক্ষণ হচ্ছে...", false);
    setSaveButtonsBusy(true);
    setCatalogSyncing(true);
    if (persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(flushPersistOwnerData, 280);
  }

  function flushPersistOwnerData() {
    persistTimer = null;
    if (!isOwner() || !state.ownerPin || !state.ownerEmail || !apiReady()) {
      persistPending = {};
      setSaveButtonsBusy(false);
      setCatalogSyncing(false);
      return;
    }
    if (persistInFlight) {
      persistAgain = true;
      return;
    }
    var sections = Object.keys(persistPending);
    persistPending = {};
    if (!sections.length) {
      setSaveButtonsBusy(false);
      setCatalogSyncing(false);
      return;
    }
    persistInFlight = true;
    setCatalogSyncing(true);
    setSaveButtonsBusy(true);
    var payload = {
      action: "save",
      email: state.ownerEmail,
      pin: state.ownerPin,
      sections: sections,
      companies: state.companies,
      locks: state.locks,
      aluminium: state.aluminium,
      charges: state.charges,
      cutParams: state.cutParams,
      users: staffForSave(),
      shop: state.shop
    };
    apiRequest(payload).then((data) => {
      if (!data || !data.ok) throw new Error("save");
      if (isOwner() && Array.isArray(data.users)) {
        state.staff = data.users;
        renderStaffList();
      }
      flashSaved(persistOkMsg || T.savedOk);
      persistOkMsg = "";
    }).catch(() => {
      persistOkMsg = "";
      flashNote(T.ownerSaveFail, true);
    }).finally(() => {
      persistInFlight = false;
      if (persistAgain || Object.keys(persistPending).length) {
        persistAgain = false;
        flushPersistOwnerData();
        return;
      }
      setCatalogSyncing(false);
      setSaveButtonsBusy(false);
    });
  }

  function isStaff() {
    return state.role === "superadmin" || state.role === "owner" || state.role === "operator";
  }

  const FOREVER_SA_EMAIL = "sumanengbd@gmail.com";

  function isForeverSuperAdminEmail(email) {
    return String(email || "").trim().toLowerCase() === FOREVER_SA_EMAIL;
  }

  function isSuperAdmin() {
    return state.role === "superadmin" || isForeverSuperAdminEmail(state.ownerEmail);
  }

  function isOwner() {
    return state.role === "owner" || state.role === "superadmin";
  }

  function sessionKey(email) {
    return String(email || "mtg").toLowerCase() + "|mtg-s2";
  }

  function encodePin(pin, email) {
    const raw = String(pin || "");
    const key = sessionKey(email);
    let out = "";
    for (let i = 0; i < raw.length; i++) {
      out += String.fromCharCode(raw.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ ((i + 11) & 255));
    }
    return btoa(out);
  }

  function decodePin(token, email) {
    try {
      const bin = atob(String(token || ""));
      const key = sessionKey(email);
      let out = "";
      for (let i = 0; i < bin.length; i++) {
        out += String.fromCharCode(bin.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ ((i + 11) & 255));
      }
      return /^\d{4,15}$/.test(out) ? out : "";
    } catch (_) {
      return "";
    }
  }

  function normalizeRole(role) {
    if (role === "operator") return "operator";
    if (role === "superadmin") return "superadmin";
    if (role === "owner") return "owner";
    return "";
  }

  function saveSession(email, pin, role) {
    const e = String(email || "").toLowerCase();
    const p = String(pin || "");
    const r = normalizeRole(role);
    if (!e || !p || !r) return;
    storeSet(KEYS.session, {
      v: 2,
      e: e,
      r: r,
      k: encodePin(p, e)
    });
  }

  function readSession(raw) {
    if (!raw || typeof raw !== "object") return null;
    if (raw.v === 2 && raw.e && raw.k) {
      const pin = decodePin(raw.k, raw.e);
      if (!pin) return null;
      const email = String(raw.e).toLowerCase();
      const role = normalizeRole(raw.r);
      if (!role) return null;
      return { email: email, pin: pin, role: role };
    }
    if (raw.email && raw.pin) {
      const email = String(raw.email).toLowerCase();
      const pin = String(raw.pin);
      const role = normalizeRole(raw.role) || "owner";
      if (!ownerPinOk(pin)) return null;
      saveSession(email, pin, role);
      return { email: email, pin: pin, role: role };
    }
    return null;
  }

  function applyLocalSession(saved) {
    if (!saved || !saved.email || !saved.pin) return false;
    state.ownerEmail = saved.email;
    state.ownerPin = saved.pin;
    state.role = normalizeRole(saved.role) || "owner";
    state.ownerUnlocked = true;
    saveSession(saved.email, saved.pin, state.role);
    updateRoleUi();
    return true;
  }

  function clearSession() {
    try { localStorage.removeItem(KEYS.session); } catch (_) { /* ignore */ }
  }

  function clearLoginFields() {
    if ($("owner-pin")) $("owner-pin").value = "";
    if ($("owner-email")) $("owner-email").value = "";
  }

  function applyLoginSuccess(data, email, pin, nextTab) {
    state.ownerEmail = String(email || "").toLowerCase();
    state.ownerPin = String(pin || "");
    state.role = normalizeRole(data && data.role) || "owner";
    if (isForeverSuperAdminEmail(state.ownerEmail)) state.role = "superadmin";
    saveSession(state.ownerEmail, state.ownerPin, state.role);
    clearLoginFields();
    applyOwnerData(data);
    setOwnerUnlocked(true);
    document.documentElement.classList.remove("gate-open");
    $("owner-gate").classList.add("hidden");
    var tab = nextTab || state.pendingOwnerTab || "rates";
    if (tab === "rates" && !isStaff()) tab = "calc";
    switchTab(tab);
  }

  function restoreSession(saved, nextTab) {
    if (!saved || !saved.email || !saved.pin || !apiReady()) return Promise.resolve(false);
    showLoader(true, T.working);
    return apiRequest({ action: "unlock", email: saved.email, pin: saved.pin }).then((data) => {
      if (!data || !data.ok) {
        const authFail = data && (data.error === "locked" || data.error === "needemail" || data.error === "required" || data.error === "pin" || data.ok === false);
        if (authFail) {
          clearSession();
          setOwnerUnlocked(false);
        }
        return false;
      }
      applyLoginSuccess(data, saved.email, saved.pin, nextTab);
      return true;
    }).catch(() => false).finally(() => {
      showLoader(false);
    });
  }

  function setOwnerUnlocked(on) {
    state.ownerUnlocked = on;
    if (!on) {
      state.ownerPin = "";
      state.ownerEmail = "";
      state.role = "";
      state.quotes = [];
      state.cutQuote = null;
      state.staff = [];
      state.quoteOpenId = "";
      state.quoteSearch = "";
    }
    updateRoleUi();
  }

  function shortEmail(email) {
    const e = String(email || "").trim();
    if (!e) return "";
    const at = e.indexOf("@");
    return at > 0 ? e.slice(0, at) : e;
  }

  function md5hex(str) {
    function add(x, y) { return (x + y) | 0; }
    function rol(n, c) { return (n << c) | (n >>> (32 - c)); }
    function cmn(q, a, b, x, s, t) { return add(rol(add(add(a, q), add(x, t)), s), b); }
    function ff(a, b, c, d, x, s, t) { return cmn((b & c) | ((~b) & d), a, b, x, s, t); }
    function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & (~d)), a, b, x, s, t); }
    function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
    function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | (~d)), a, b, x, s, t); }
    function rhex(n) {
      let s = "";
      for (let j = 0; j <= 3; j++) s += ("0" + ((n >>> (j * 8)) & 255).toString(16)).slice(-2);
      return s;
    }
    str = unescape(encodeURIComponent(String(str || "")));
    const nblk = ((str.length + 8) >> 6) + 1;
    const x = new Array(nblk * 16);
    for (let i = 0; i < nblk * 16; i++) x[i] = 0;
    for (let i = 0; i < str.length; i++) x[i >> 2] |= str.charCodeAt(i) << ((i % 4) * 8);
    x[str.length >> 2] |= 0x80 << ((str.length % 4) * 8);
    x[nblk * 16 - 2] = str.length * 8;
    let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (let i = 0; i < x.length; i += 16) {
      const oa = a, ob = b, oc = c, od = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936); d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819); b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897); d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341); b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416); d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063); b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682); d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290); b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510); d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713); b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691); d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335); b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438); d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961); b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467); d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473); b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558); d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562); b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060); d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632); b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174); d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979); b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487); d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520); b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844); d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905); b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571); d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523); b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359); d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380); b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070); d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259); b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
    }
    return rhex(a) + rhex(b) + rhex(c) + rhex(d);
  }

  const gravatarNames = {};

  function gravatarHash(email) {
    return md5hex(String(email || "").trim().toLowerCase());
  }

  function gravatarAvatarUrl(email, size) {
    return "https://www.gravatar.com/avatar/" + gravatarHash(email) + "?s=" + (size || 80) + "&d=identicon";
  }

  function setAvatarSrc(id, url, fallback) {
    const el = $(id);
    if (!el) return;
    el.referrerPolicy = "no-referrer";
    el.onerror = function () { this.onerror = null; this.src = fallback; };
    el.src = url;
  }

  function loadGravatarName(email) {
    const key = String(email || "").trim().toLowerCase();
    if (!key) return Promise.resolve("");
    if (gravatarNames[key]) return Promise.resolve(gravatarNames[key]);
    return fetch("https://gravatar.com/" + gravatarHash(key) + ".json", { headers: { Accept: "application/json" } }).then(function (res) {
      if (!res.ok) return "";
      return res.json();
    }).then(function (data) {
      const entry = data && data.entry && data.entry[0];
      const name = entry ? String(entry.displayName || entry.preferredUsername || "").trim() : "";
      if (name) gravatarNames[key] = name;
      return name;
    }).catch(function () { return ""; });
  }

  function emailHue(email) {
    let h = 0;
    const s = String(email || "").toLowerCase();
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h % 360;
  }

  function emailInitials(email) {
    const name = shortEmail(email).replace(/[^A-Za-z0-9]/g, " ").trim();
    const parts = name.split(/[\s._-]+/).filter(Boolean);
    if (parts.length >= 2) return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
    return (name.slice(0, 2) || "?").toUpperCase();
  }

  function emailAvatarUrl(email) {
    const initials = emailInitials(email).replace(/[<&]/g, "");
    const hue = emailHue(email);
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
      '<rect width="64" height="64" rx="32" fill="hsl(' + hue + ',48%,36%)"/>' +
      '<text x="32" y="35" text-anchor="middle" dominant-baseline="middle" font-size="22" font-weight="700" fill="#fff" font-family="Hind Siliguri,Noto Sans Bengali,sans-serif">' + initials + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function closeUserMenu() {
    const menu = $("user-menu");
    const drop = $("user-menu-drop");
    const btn = $("btn-user-menu");
    if (drop) drop.classList.add("hidden");
    if (menu) menu.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function toggleUserMenu() {
    const menu = $("user-menu");
    const drop = $("user-menu-drop");
    const btn = $("btn-user-menu");
    if (!menu || !drop || !btn || menu.classList.contains("hidden")) return;
    const open = drop.classList.contains("hidden");
    drop.classList.toggle("hidden", !open);
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function updateSessionChip() {
    const menu = $("user-menu");
    const on = isStaff() && !!state.ownerEmail;
    if (menu) menu.classList.toggle("hidden", !on);
    if (!on) {
      closeUserMenu();
      return;
    }
    const role = isSuperAdmin() ? T.roleSuperAdmin : (isOwner() ? T.roleOwner : T.roleStaff);
    const mail = String(state.ownerEmail || "").trim().toLowerCase();
    const fallback = emailAvatarUrl(mail);
    const photo = gravatarAvatarUrl(mail, 128);
    const shown = shortEmail(mail);
    if ($("session-role")) $("session-role").textContent = role;
    if ($("session-email")) $("session-email").textContent = shown;
    if ($("session-role-full")) $("session-role-full").textContent = role;
    if ($("session-email-full")) $("session-email-full").textContent = mail;
    if ($("menu-calc-label")) $("menu-calc-label").textContent = T.calcTab;
    if ($("menu-admin-label")) $("menu-admin-label").textContent = T.admin;
    setAvatarSrc("user-avatar", photo, fallback);
    setAvatarSrc("user-avatar-lg", photo, fallback);
    if ($("btn-user-menu")) $("btn-user-menu").title = shown + " · " + role;
    loadGravatarName(mail).then(function (name) {
      if (!name || String(state.ownerEmail || "").trim().toLowerCase() !== mail) return;
      if ($("btn-user-menu")) $("btn-user-menu").title = name + " · " + mail;
    });
  }

  function updateRoleUi() {
    const staff = isStaff();
    document.documentElement.classList.toggle("has-session", staff);
    document.documentElement.classList.toggle("is-staff", staff);
    document.documentElement.classList.toggle("is-owner", isOwner());
    document.documentElement.classList.toggle("is-superadmin", isSuperAdmin());
    document.body.classList.toggle("is-staff", staff);
    if ($("btn-staff-login")) $("btn-staff-login").classList.toggle("hidden", isStaff());
    updateSessionChip();
    if ($("nav-cutting")) $("nav-cutting").classList.remove("tab-hidden");
    if ($("nav-rates")) $("nav-rates").classList.remove("tab-hidden");
    if ($("admin-tab-staff")) $("admin-tab-staff").classList.toggle("hidden", !isOwner());
    if ($("admin-tab-db")) $("admin-tab-db").classList.toggle("hidden", !isSuperAdmin());
    document.querySelectorAll(".superadmin-only").forEach(function (el) {
      el.classList.toggle("hidden", !isSuperAdmin());
    });
    document.querySelectorAll(".owner-only").forEach(function (el) {
      el.classList.toggle("hidden", !isOwner());
    });
    if ($("db-sql-card")) $("db-sql-card").classList.toggle("hidden", !isSuperAdmin());
    if ($("opt-staff-role")) $("opt-staff-role").textContent = T.roleStaff;
    if ($("opt-owner-role")) $("opt-owner-role").textContent = T.roleOwner;
    if (isStaff() && !isOwner()) {
      if (state.adminPanel !== "home" && state.adminPanel !== "quotes") switchAdminPanel("home");
    } else if (!isOwner() && state.adminPanel === "staff") {
      switchAdminPanel("home");
    } else if (!isSuperAdmin() && state.adminPanel === "db") {
      switchAdminPanel("home");
    }
    updateQuoteCard();
    renderQuotes();
  }

  function updateQuoteCard() {
    if ($("quote-card")) $("quote-card").classList.toggle("hidden", !state.items.length);
  }

  function fillQuoteLabels() {
    if ($("staff-login-label")) $("staff-login-label").textContent = T.staffLogin;
    setHeading("quote-title", T.quoteTitle);
    if ($("quote-hint")) $("quote-hint").textContent = T.quoteHint;
    if ($("quote-name-label")) $("quote-name-label").textContent = T.quoteName;
    if ($("quote-phone-label")) $("quote-phone-label").textContent = T.quotePhone;
    if ($("btn-send-quote")) $("btn-send-quote").textContent = T.quoteSend;
    setHeading("quotes-title", T.quotesTitle);
    if ($("glass-thick-label")) $("glass-thick-label").textContent = T.glassThick;
    if ($("alu-company-label")) $("alu-company-label").textContent = T.aluCompany;
    if ($("alu-thick-label")) $("alu-thick-label").textContent = T.aluThick;
    if ($("alu-color-label")) $("alu-color-label").textContent = T.aluColor;
    setHeading("alu-rates-title", T.aluRatesTitle);
    if ($("alu-rates-hint")) $("alu-rates-hint").textContent = T.aluRatesHint;
    setHeading("charges-title", T.chargesTitle);
    if ($("charges-hint")) $("charges-hint").textContent = T.chargesHint;
    if ($("charges-badge")) $("charges-badge").textContent = T.chargesBadge;
    if ($("charge-net-label")) $("charge-net-label").textContent = T.chargeNet;
    if ($("charge-extra-label")) $("charge-extra-label").textContent = T.chargeExtra;
    setAddLabels();
    if ($("btn-save-charges-label")) $("btn-save-charges-label").textContent = T.saveBtn;
    if ($("new-alu-name")) $("new-alu-name").placeholder = T.aluNamePh;
    if ($("new-alu-thick")) $("new-alu-thick").placeholder = T.aluThickPh;
    if ($("new-company-thick")) $("new-company-thick").placeholder = T.glassThickPh;
    if ($("company-rates-hint")) $("company-rates-hint").textContent = T.companyRatesHint;
    var multi = " (" + "\u098f\u0995\u09be\u09a7\u09bf\u0995" + ")";
    if ($("company-name-label")) $("company-name-label").textContent = T.aluNamePh;
    if ($("alu-name-label")) $("alu-name-label").textContent = T.aluNamePh;
    if ($("lock-name-label")) $("lock-name-label").textContent = T.lock;
    if ($("lock-style-label")) $("lock-style-label").textContent = T.dhoron;
    if ($("lock-rate-label")) $("lock-rate-label").textContent = T.aluRatePh;
    if ($("company-thick-pick-label")) $("company-thick-pick-label").textContent = T.thickness + multi;
    if ($("company-color-pick-label")) $("company-color-pick-label").textContent = T.glassColor + multi;
    if ($("alu-thick-pick-label")) $("alu-thick-pick-label").textContent = T.aluThick + multi;
    if ($("alu-color-pick-label")) $("alu-color-pick-label").textContent = T.aluColor + multi;
    renderAdminPicks();
    if ($("nav-rates-label")) $("nav-rates-label").textContent = T.admin;
    if ($("menu-calc-label")) $("menu-calc-label").textContent = T.calcTab;
    if ($("menu-admin-label")) $("menu-admin-label").textContent = T.admin;
    if ($("admin-tab-home")) $("admin-tab-home").textContent = T.tabHome;
    if ($("admin-tab-glass")) $("admin-tab-glass").textContent = T.tabGlass;
    if ($("admin-tab-alu")) $("admin-tab-alu").textContent = T.tabAlu;
    if ($("admin-tab-lock")) $("admin-tab-lock").textContent = T.tabLock;
    if ($("admin-tab-charges")) $("admin-tab-charges").textContent = T.tabCharges;
    if ($("admin-tab-staff")) $("admin-tab-staff").textContent = T.tabStaff;
    if ($("admin-tab-cut")) $("admin-tab-cut").textContent = T.tabCut;
    if ($("admin-tab-db")) $("admin-tab-db").textContent = T.tabDb;
    if ($("admin-tab-quotes")) $("admin-tab-quotes").textContent = T.tabQuotes;
    if ($("staff-email-label")) $("staff-email-label").textContent = T.staffEmailPh;
    if ($("staff-pin-label")) $("staff-pin-label").textContent = T.ownerPinLabel;
    if ($("staff-role-label")) $("staff-role-label").textContent = T.dhoron;
    setHeading("staff-title", T.staffTitle);
    if ($("staff-hint")) $("staff-hint").textContent = T.staffHint;
    if ($("new-staff-email")) $("new-staff-email").placeholder = T.staffEmailPh;
    if ($("new-staff-pin")) $("new-staff-pin").placeholder = T.staffPinPh;
    if ($("opt-staff-role")) $("opt-staff-role").textContent = T.roleStaff;
    if ($("opt-owner-role")) $("opt-owner-role").textContent = T.roleOwner;
    if ($("btn-add-staff-label")) $("btn-add-staff-label").textContent = T.addBtn;
    setHeading("db-title", T.dbTitle);
    if ($("db-hint")) $("db-hint").textContent = T.dbHint;
    if ($("db-url-label")) $("db-url-label").textContent = T.dbUrlLabel;
    if ($("db-key-label")) $("db-key-label").textContent = T.dbKeyLabel;
    if ($("btn-db-connect-label")) $("btn-db-connect-label").textContent = T.dbConnect;
    if ($("btn-db-test-label")) $("btn-db-test-label").textContent = T.dbTest;
    if ($("btn-db-defaults-label")) $("btn-db-defaults-label").textContent = T.dbDefaults;
    if ($("btn-db-reset-label")) $("btn-db-reset-label").textContent = T.dbReset;
    if ($("db-sql-title")) $("db-sql-title").textContent = T.dbSqlTitle;
    if ($("db-sql-hint")) $("db-sql-hint").textContent = T.dbSqlHint;
    if ($("btn-db-copy-schema-label")) $("btn-db-copy-schema-label").textContent = T.dbCopySchema;
    if ($("btn-db-download-schema-label")) $("btn-db-download-schema-label").textContent = T.dbDownloadSchema;
    if ($("btn-db-copy-seed-label")) $("btn-db-copy-seed-label").textContent = T.dbCopySeed;
    if ($("btn-db-open-sql-label")) $("btn-db-open-sql-label").textContent = T.dbOpenSql;
    if ($("btn-owner-db-label")) $("btn-owner-db-label").textContent = T.dbGateBtn;
    if (state.adminPanel === "db") fillDbSettings();
    renderHome();
  }

  function parseSizeFt(size) {
    const parts = String(size || "").split(/\s*x\s*/i);
    const one = (s) => {
      const t = String(s || "");
      const ft = t.match(/(\d+(?:\.\d+)?)\s*(?:ft|\u09ab\u09c1\u099f)/i);
      const inch = t.match(/(\d+(?:\.\d+)?)\s*(?:in|inch|\u0987\u099e\u09cd\u099a\u09bf)/i);
      const mm = t.match(/(\d+(?:\.\d+)?)\s*(?:mm|\u09ae\u09bf\u09ae\u09bf)/i);
      if (ft || inch || mm) {
        return (ft ? Number(ft[1]) : 0) + (inch ? Number(inch[1]) / 12 : 0) + (mm ? Number(mm[1]) / 96 : 0);
      }
      const m = t.match(/(\d+(?:\.\d+)?)(?:\s*(?:ft|\u09ab\u09c1\u099f))?\s*(?:(\d+(?:\.\d+)?))?/i);
      if (!m) return 0;
      return Number(m[1] || 0) + (Number(m[2] || 0) / 12);
    };
    return { heightFt: one(parts[0]), widthFt: one(parts[1]) };
  }

  function typeIdFromQuote(it) {
    const raw = String(it && (it.typeId || it.winType) || "").trim();
    if (raw && ALL_TYPES.some((t) => t.id === raw)) return raw;
    const s = String(it && it.type || "").toLowerCase();
    const exact = ALL_TYPES.find((t) => (t.label + " " + t.sub).toLowerCase() === s);
    if (exact) return exact.id;
    const door = s.indexOf("door") >= 0 || s.indexOf("\u09a6\u09b0\u099c\u09be") >= 0;
    if (door) {
      if (s.indexOf("slid") >= 0 || s.indexOf("\u09b8\u09cd\u09b2\u09be\u0987\u09a1") >= 0) {
        if (/3|\u09e9/.test(s)) return "door-sliding3";
        return "door-sliding";
      }
      if (s.indexOf("double") >= 0 || s.indexOf("\u09a1\u09be\u09ac\u09b2") >= 0) return "door-double";
      return "door-single";
    }
    if (/4|\u09ea/.test(s)) return "sliding4";
    if (/3|\u09e9/.test(s)) return "sliding3";
    if (/2|\u09e8/.test(s) || s.indexOf("slid") >= 0) return "sliding2";
    return "fixed";
  }

  function colorIdFromQuote(it) {
    const id = String(it && (it.colorId || "") || "").trim().toLowerCase();
    if (GLASS_COLORS.some((c) => c.id === id)) return id;
    const s = String(it && it.color || "").trim();
    const found = GLASS_COLORS.find((c) => T[c.labelKey] === s || c.id === s.toLowerCase());
    return found ? found.id : "clear";
  }

  function quoteLinesToItems(q) {
    return (q && q.lines || []).map((it) => {
      const parsed = quoteLineSize(it);
      const heightFt = parsed.heightFt;
      const widthFt = parsed.widthFt;
      const qty = Math.max(1, Number(it.qty) || 1);
      const item = {
        heightFt: heightFt,
        widthFt: widthFt,
        qty: qty,
        thickness: Number(it.glassMm || it.thickness) || 0,
        aluName: it.aluminium || "",
        aluThick: it.aluMm || "",
        aluColor: normalizeAluColorId(it.aluColor),
        companyName: it.company || "",
        companyRate: 0,
        glassColor: colorIdFromQuote(it),
        lockName: it.lock && it.lock !== "-" ? it.lock : null,
        lockRate: 0,
        lockStyle: it.lockStyle || lockStyleOf({ name: it.lock, style: it.lockStyle }),
        hasNet: !!it.net,
        netCost: 0,
        frameRate: 0,
        extra: 0,
        totalSqft: heightFt * widthFt * qty,
        glassCost: 0,
        lockCost: 0,
        frameCost: 0,
        subtotal: Number(it.total) || 0,
        winType: typeIdFromQuote(it),
        room: it.room || ""
      };
      const company = findCompanyForItem(item);
      const alu = findAluForItem(item);
      const lock = item.lockName ? state.locks.find((l) => l.name === item.lockName) : null;
      Object.assign(item, priceParts(item, company, alu, lock));
      if (!(item.subtotal > 0) && Number(it.total) > 0) item.subtotal = Number(it.total);
      return item;
    }).filter((it) => it.heightFt > 0 && it.widthFt > 0);
  }

  function openQuoteInCalc(id) {
    const q = state.quotes.find((x) => x.id === id);
    if (!q) return;
    const items = quoteLinesToItems(q);
    if (!items.length) {
      flashNote(T.quoteNoCut, true);
      return;
    }
    state.items = items;
    storeSet(KEYS.items, state.items);
    if ($("quote-name")) $("quote-name").value = q.name || "";
    if ($("quote-phone")) $("quote-phone").value = q.phone || "";
    state.printQuoteMeta = { id: q.id, name: q.name, phone: q.phone };
    renderItems();
    updateSummary();
    updateQuoteCard();
    switchTab("calc");
    flashNote(T.quoteOpenCalc + " · " + (q.id || ""), false);
  }

  function toggleQuote(id) {
    state.quoteOpenId = state.quoteOpenId === id ? "" : id;
    renderQuotes();
  }

  function openQuoteCutting(id) {
    const q = state.quotes.find((x) => x.id === id);
    if (!q) return;
    const items = quoteLinesToItems(q);
    if (!items.length) {
      flashNote(T.quoteNoCut, true);
      return;
    }
    state.cutQuote = { id: q.id, name: q.name, phone: q.phone, items: items };
    switchTab("cutting");
  }

  function printPublicQuote() {
    const q = state.publicQuote;
    if (!q) return;
    const items = quoteLinesToItems(q);
    const prevItems = state.items;
    const prevMeta = state.printQuoteMeta;
    if (items.length) {
      state.items = items;
      state.printQuoteMeta = { id: q.id, name: q.name, phone: q.phone };
      renderItems();
      updateSummary();
    }
    if ($("quote-name")) $("quote-name").value = q.name || "";
    if ($("quote-phone")) $("quote-phone").value = q.phone || "";
    preparePrint();
    window.print();
    setTimeout(function () {
      state.items = prevItems;
      state.printQuoteMeta = prevMeta;
      renderItems();
      updateSummary();
      clearPrintMode();
    }, 400);
  }

  function clearQuoteCutting() {
    state.cutQuote = null;
    renderCuttingTab();
  }

  function renderQuotes() {
    var card = $("quotes-card");
    var list = $("quotes-list");
    if (!card || !list) return;
    if ($("admin-tab-quotes")) $("admin-tab-quotes").classList.toggle("hidden", !isStaff());
    if (!isStaff()) {
      if (state.adminPanel !== "quotes") card.classList.add("hidden");
      return;
    }
    var q = String(state.quoteSearch || "").trim().toLowerCase();
    var filtered = (state.quotes || []).filter(function (row) {
      if (!q) return true;
      return [row.name, row.phone, row.id, row.assigned].some(function (v) {
        return String(v || "").toLowerCase().indexOf(q) >= 0;
      });
    });
    if (!filtered.length) {
      list.innerHTML = '<div class="empty-note">' + T.quotesEmpty + "</div>";
      if (state.adminPanel === "quotes") card.classList.remove("hidden");
      return;
    }
    var groups = [];
    var map = {};
    filtered.forEach(function (row) {
      var key = phoneKey(row.phone) || row.id;
      if (!map[key]) {
        map[key] = { name: row.name, phone: row.phone, quotes: [] };
        groups.push(map[key]);
      }
      map[key].quotes.push(row);
      if (row.name) map[key].name = row.name;
    });
    list.innerHTML = groups.map(function (g) {
      var head = g.quotes.length > 1
        ? '<div class="quote-group-head"><strong>' + escapeHtml(g.name || "") + "</strong><span>" + escapeHtml(g.phone || "") + " \u00b7 " + g.quotes.length + " " + T.quotesOf + "</span></div>"
        : "";
      return '<div class="quote-group">' + head + g.quotes.map(function (row) {
        const open = state.quoteOpenId === row.id;
        const mine = String(row.assigned || "").toLowerCase() === String(state.ownerEmail || "").toLowerCase();
        const lines = (row.lines || []).map(function (it) {
          return '<div class="quote-line"><strong>' + escapeHtml([it.room, it.type].filter(Boolean).join(" \u00b7 ")) + "</strong>" +
            '<span>' + escapeHtml(it.size || "") + " \u00b7 " + (it.qty || 1) + " " + T.ti + "</span>" +
            '<span>' + escapeHtml([it.company, it.glassMm ? it.glassMm + T.mm : "", it.color].filter(Boolean).join(" \u00b7 ")) + "</span>" +
            '<span>' + escapeHtml([it.aluminium, it.aluMm ? it.aluMm + T.mm : "", it.aluColor].filter(Boolean).join(" \u00b7 ")) + "</span>" +
            '<span>' + escapeHtml([(it.lock && it.lock !== "-" ? it.lock : T.noLock), it.net ? T.net + " " + T.netYes : T.net + " " + T.netNo].join(" \u00b7 ")) +
            (it.total ? " \u00b7 " + money(it.total) : "") + "</span></div>";
        }).join("");
        return '<div class="quote-card' + (open ? " is-open" : "") + (mine ? " is-mine" : "") + '" data-quote-id="' + escapeHtml(row.id) + '">' +
          '<div class="quote-row" data-action="toggle-quote" data-id="' + escapeHtml(row.id) + '">' +
          '<span class="quote-mark"></span><div class="quote-main"><strong>' +
          escapeHtml(row.name) + '</strong><span class="quote-phone">' + escapeHtml(row.phone) +
          '</span></div><div class="quote-stats"><span>' + escapeHtml(formatQuoteTime(row.time)) + "</span><span>" +
          (row.lines && row.lines.length ? row.lines.length : row.items) + " \u00b7 " + fmt(quoteSqft(row)) + T.sqLabel +
          (quoteTotal(row) ? " \u00b7 " + money(quoteTotal(row)) : "") +
          '</span></div><span class="quote-status">' + escapeHtml(statusLabel(row.status)) + "</span>" +
          '<div class="quote-share-mini" role="group" aria-label="' + escapeHtml(T.quoteShare) + '">' +
          '<button type="button" class="icon-btn ghost compact quote-share-btn" data-action="quote-share-copy" data-id="' +
          escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteLinkCopy) + '">' + ico("link") + "</button>" +
          '<button type="button" class="icon-btn ghost compact quote-share-btn" data-action="quote-share-wa" data-id="' +
          escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteShareWa) + '">' + ico("wa") + "</button>" +
          '<button type="button" class="icon-btn ghost compact quote-share-btn" data-action="quote-share" data-id="' +
          escapeHtml(row.id) + '" title="' + escapeHtml(T.quoteShare) + '">' + ico("share") + "</button>" +
          "</div></div>" +
          (open ? '<div class="quote-detail">' + (lines || '<div class="empty-note">' + T.quotesEmpty + "</div>") +
            '<div class="quote-tools">' +
            '<label>' + T.dhoron + ' <select data-action="quote-status" data-id="' + escapeHtml(row.id) + '">' + statusOptions(row.status) + "</select></label>" +
            '<label>' + T.assignStaff + ' <select data-action="quote-assign" data-id="' + escapeHtml(row.id) + '">' + staffOptions(row.assigned) + "</select></label>" +
            '<button type="button" class="icon-btn secondary quote-cut-btn" data-action="quote-cut" data-id="' +
            escapeHtml(row.id) + '">' + ico("cut") + "<span>" + T.cutInfo + "</span></button>" +
            '<button type="button" class="icon-btn secondary" data-action="quote-open-calc" data-id="' +
            escapeHtml(row.id) + '"><span>' + T.quoteOpenCalc + "</span></button>" +
            '<button type="button" class="icon-btn secondary" data-action="quote-share-copy" data-id="' +
            escapeHtml(row.id) + '">' + ico("link") + "<span>" + T.quoteLinkCopy + "</span></button>" +
            '<button type="button" class="icon-btn secondary" data-action="quote-share-wa" data-id="' +
            escapeHtml(row.id) + '">' + ico("wa") + "<span>" + T.quoteShareWa + "</span></button>" +
            '<button type="button" class="icon-btn primary" data-action="quote-share" data-id="' +
            escapeHtml(row.id) + '">' + ico("share") + "<span>" + T.quoteShare + "</span></button>" +
            (isOwner()
              ? '<button type="button" class="danger-ghost icon-btn" data-action="quote-delete" data-id="' +
                escapeHtml(row.id) + '">' + ico("trash") + "<span>" + T.quoteDelete + "</span></button>"
              : "") +
            "</div></div>" : "") +
          "</div>";
      }).join("") + "</div>";
    }).join("");
  }

  function quotePhoneOk(phone) {
    var p = String(phone || "").replace(/\s+/g, "");
    return /^(?:\+?88)?01\d{9}$/.test(p) || /^\d{10,15}$/.test(p);
  }

  function sendQuote() {
    var err = $("quote-err");
    var okEl = $("quote-ok");
    if (okEl) okEl.classList.add("hidden");
    if (!err) return;
    if (!state.items.length) {
      err.textContent = T.quoteEmpty;
      err.style.display = "block";
      return;
    }
    var nameEl = $("quote-name");
    var phoneEl = $("quote-phone");
    var name = cleanTextValue(nameEl && nameEl.value);
    var phone = String(phoneEl && phoneEl.value || "").replace(/\D/g, "");
    markInvalid(nameEl, name.length < 2);
    markInvalid(phoneEl, !quotePhoneOk(phone));
    if (name.length < 2) {
      err.textContent = T.quoteNameNeed;
      err.style.display = "block";
      return;
    }
    if (!quotePhoneOk(phone)) {
      err.textContent = T.quotePhoneBad;
      err.style.display = "block";
      return;
    }
    if (!apiReady()) {
      err.textContent = T.ownerNeedApi;
      err.style.display = "block";
      return;
    }
    err.style.display = "none";
    var btn = $("btn-send-quote");
    if (btn) btn.disabled = true;
    showLoader(true, T.working);
    apiRequest({
      action: "quote",
      name: name,
      phone: phone.replace(/\s+/g, ""),
      items: state.items.map(function (i) {
        var type = getType(i.winType);
        return {
          type: type.label + " " + type.sub,
          typeId: i.winType,
          heightFt: i.heightFt,
          widthFt: i.widthFt,
          qty: i.qty,
          lockStyle: i.lockStyle || "",
          thickness: i.thickness,
          color: colorLabel(i.glassColor),
          colorId: i.glassColor,
          company: i.companyName,
          aluminium: i.aluName || "",
          aluThick: i.aluThick || "",
          aluColor: i.aluColor || "",
          aluColorLabel: aluColorLabel(i.aluColor),
          lock: i.lockName || "",
          net: i.hasNet,
          sqft: i.totalSqft,
          subtotal: i.subtotal,
          total: i.subtotal,
          room: i.room || ""
        };
      })
    }).then(function (data) {
      if (btn) btn.disabled = false;
      showLoader(false);
      if (!data || !data.ok) {
        var msg = T.quoteFail;
        if (data && data.error === "phone") msg = T.quotePhoneBad;
        if (data && data.error === "name") msg = T.quoteNameNeed;
        err.textContent = msg;
        err.style.display = "block";
        return;
      }
      okEl.textContent = T.quoteOk + (data.id ? " — " + T.quoteInvoice + " " + data.id : "");
      okEl.classList.remove("hidden");
      showQuoteShare(data.id);
    }).catch(function (e) {
      if (btn) btn.disabled = false;
      showLoader(false);
      err.textContent = T.quoteFailDetail + (e && e.message ? ": " + e.message : "");
      err.style.display = "block";
    });
  }

  function setPinVisible(show) {
    const pin = $("owner-pin");
    const btn = $("btn-pin-toggle");
    if (!pin || !btn) return;
    pin.type = show ? "text" : "password";
    btn.setAttribute("aria-pressed", show ? "true" : "false");
    btn.title = show ? T.ownerPinHide : T.ownerPinShow;
    btn.setAttribute("aria-label", show ? T.ownerPinHide : T.ownerPinShow);
    const eye = btn.querySelector(".pin-eye");
    const eyeOff = btn.querySelector(".pin-eye-off");
    if (eye) eye.classList.toggle("hidden", show);
    if (eyeOff) eyeOff.classList.toggle("hidden", !show);
  }

  function showOwnerGate(nextTab) {
    state.pendingOwnerTab = nextTab;
    $("owner-gate-title").textContent = T.staffLogin;
    $("owner-gate-hint").textContent = apiReady() ? T.ownerUnlockHint : T.ownerNeedApi;
    $("owner-email-label").textContent = T.ownerEmailLabel;
    $("owner-pin-label").textContent = T.ownerPinLabel;
    $("btn-owner-ok").textContent = T.ownerOpen;
    if ($("btn-owner-cancel")) $("btn-owner-cancel").textContent = T.cancelBtn;
    if ($("owner-pin2-wrap")) $("owner-pin2-wrap").classList.add("hidden");
    $("owner-gate-err").style.display = "none";
    $("owner-email").value = "";
    $("owner-pin").value = "";
    setPinVisible(false);
    document.documentElement.classList.add("gate-open");
    $("owner-gate").classList.remove("hidden");
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === nextTab);
    });
    const nav = document.querySelector(".bottom-nav");
    if (nav) {
      nav.dataset.active = nextTab;
      nav.style.setProperty("--i", String({ calc: 0, cutting: 1, rates: 2 }[nextTab] || 0));
    }
    setTimeout(() => $("owner-email").focus(), 50);
  }

  function ownerEmailOk(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
  }

  function ownerPinOk(pin) {
    return /^\d{4,15}$/.test(String(pin || "").trim());
  }

  function submitOwnerPin() {
    const email = $("owner-email").value.trim();
    const pin = $("owner-pin").value.trim();
    const err = $("owner-gate-err");
    if (!apiReady()) {
      err.textContent = T.ownerNeedApi;
      err.style.display = "block";
      return;
    }
    if (!email) {
      err.textContent = T.ownerEmailNeed;
      err.style.display = "block";
      return;
    }
    if (!ownerEmailOk(email)) {
      err.textContent = T.ownerEmailBad;
      err.style.display = "block";
      return;
    }
    if (!pin) {
      err.textContent = T.ownerPinNeed;
      err.style.display = "block";
      return;
    }
    if (!ownerPinOk(pin)) {
      err.textContent = T.ownerPinBad;
      err.style.display = "block";
      return;
    }
    $("btn-owner-ok").disabled = true;
    showLoader(true, T.working);
    apiRequest({ action: "unlock", email: email, pin: pin }).then((data) => {
      $("btn-owner-ok").disabled = false;
      showLoader(false);
      if (!data || !data.ok) {
        var msg = T.ownerPinWrong;
        if (data && data.error === "locked") msg = T.ownerLocked;
        if (data && data.error === "needemail") msg = T.ownerNeedEmail;
        if (data && data.error === "required") msg = T.ownerUnlockHint;
        err.textContent = msg;
        err.style.display = "block";
        return;
      }
      applyLoginSuccess(data, email, pin);
    }).catch((e) => {
      $("btn-owner-ok").disabled = false;
      showLoader(false);
      var msg = String((e && e.message) || e || "");
      var code = String((e && e.code) || "");
      if (code === "PGRST202" || /Could not find the function|schema cache/i.test(msg)) {
        err.textContent = T.ownerNeedSchema;
      } else {
        err.textContent = T.ownerNetErr;
      }
      err.style.display = "block";
    });
  }

  function lockOwner() {
    clearSession();
    setOwnerUnlocked(false);
    state.companies = [];
    state.locks = [];
    state.aluminium = [];
    state.glassThicks = [];
    state.charges = { net: 0, extra: 0, seasonPct: 0 };
    state.cutParams = { ...DEFAULT_CUT };
    state.staff = [];
    fillCutInputs();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshCatalogSelects();
    loadCatalog();
    switchTab("calc");
  }

  function persistActiveTab(tab) {
    if (tab !== "calc" && tab !== "cutting" && tab !== "rates") return;
    storeSet(KEYS.tab, tab);
  }

  function switchTab(tab) {
    if (tab === "rates" && !isStaff()) {
      persistActiveTab(tab);
      showOwnerGate(tab);
      return;
    }
    persistActiveTab(tab);
    document.documentElement.classList.remove("gate-open");
    $("owner-gate").classList.add("hidden");
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
    });
    const nav = document.querySelector(".bottom-nav");
    if (nav) {
      nav.dataset.active = tab;
      nav.style.setProperty("--i", String({ calc: 0, cutting: 1, rates: 2 }[tab] || 0));
    }
    $("tab-calc").classList.toggle("hidden", tab !== "calc");
    $("tab-cutting").classList.toggle("hidden", tab !== "cutting");
    $("tab-rates").classList.toggle("hidden", tab !== "rates");
    if (tab === "cutting") {
      renderCutKindPicker();
      renderCutTypePicker();
      renderCutPreview(false);
      renderCuttingTab();
    }
    if (tab === "rates") {
      renderQuotes();
      switchAdminPanel(state.adminPanel || "glass");
    }
    var body = document.querySelector(".app-body");
    if (body) body.scrollTop = 0;
  }

  function fillPrintHeader(cutting) {
    if ($("print-kicker")) $("print-kicker").textContent = cutting ? T.printCutKicker : T.printKicker;
    if ($("print-shop")) $("print-shop").textContent = shopOf(state.shop).name;
    if ($("print-sub")) $("print-sub").textContent = cutting ? (T.cutTitle || T.printCutKicker) : shopOf(state.shop).slogan;
    const shop = shopOf(state.shop);
    const contact = $("print-contact");
    if (contact) {
      const bits = [shop.phone, shop.address].filter(Boolean);
      contact.textContent = bits.join(" · ");
      contact.classList.toggle("hidden", !bits.length);
    }
    if ($("print-date-label")) $("print-date-label").textContent = T.printDate;
    if ($("print-date")) {
      $("print-date").textContent = new Date().toLocaleDateString(state.lang === "en" ? "en-GB" : "bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
    if ($("print-thanks")) $("print-thanks").textContent = cutting ? shop.name : T.printThanks;
    if ($("print-note")) {
      if (cutting) {
        const bits = [shop.phone, shop.address].filter(Boolean);
        $("print-note").textContent = bits.join(" · ");
      } else {
        $("print-note").textContent = T.printNote;
      }
    }
    const cust = $("print-customer");
    let name = $("quote-name") && $("quote-name").value.trim();
    let phone = $("quote-phone") && $("quote-phone").value.trim();
    if (cutting && state.cutQuote) {
      name = state.cutQuote.name || name || "";
      phone = state.cutQuote.phone || phone || "";
    }
    if (cust) {
      if (name || phone) {
        cust.classList.remove("hidden");
        const inv = (state.printQuoteMeta && state.printQuoteMeta.id) || (state.cutQuote && state.cutQuote.id) || "";
        cust.innerHTML = "<span>" + T.printCustomer + "</span>" +
          (name ? "<strong>" + escapeHtml(name) + "</strong>" : "") +
          (phone ? "<span>" + escapeHtml(phone) + "</span>" : "") +
          (inv ? "<span>" + T.quoteInvoice + ": " + escapeHtml(inv) + "</span>" : "");
      } else {
        cust.classList.add("hidden");
        cust.innerHTML = "";
      }
    }
  }

  function setPrintPageStyle(cutting) {
    var el = $("mtg-print-page-style");
    if (!el) {
      el = document.createElement("style");
      el.id = "mtg-print-page-style";
      document.head.appendChild(el);
    }
    /* Footer sits in bottom margin zone; keep content clear of it. */
    el.textContent = cutting
      ? "@page{size:148mm 210mm;margin:5mm;}"
      : "@page{size:A4 portrait;margin:8mm 10mm 18mm;}";
  }

  function preparePrint() {
    const cutting = $("tab-cutting") && !$("tab-cutting").classList.contains("hidden");
    document.body.classList.toggle("print-cutting", cutting);
    document.body.classList.toggle("print-quote", !cutting);
    setPrintPageStyle(cutting);
    fillPrintHeader(cutting);
    if (cutting) prepareCutBooklet();
    else clearCutBooklet();
  }

  function clearPrintMode() {
    document.body.classList.remove("print-cutting", "print-quote");
    clearCutBooklet();
    var el = $("mtg-print-page-style");
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function setNet(on) {
    state.hasNet = on;
    $("btn-net-no").classList.toggle("active", !on);
    $("btn-net-yes").classList.toggle("active", on);
    renderLivePreview(true);
  }

  function bindEvents() {
    $("kind-picker").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-kind]");
      if (btn) setSelectedKind(btn.dataset.kind);
    });
    $("type-list").addEventListener("click", (e) => {
      const card = e.target.closest("[data-type]");
      if (!card || card.disabled || !state.selectedKind) return;
      setSelectedType(card.dataset.type);
    });
    $("color-grid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-color]");
      if (!btn) return;
      onGlassColorChange(btn.dataset.color);
    });
    $("btn-net-no").addEventListener("click", () => setNet(false));
    $("btn-net-yes").addEventListener("click", () => setNet(true));
    $("sel-lock").addEventListener("change", () => renderLivePreview(true));
    $("sel-company").addEventListener("change", onGlassCompanyChange);
    if ($("sel-glass-thick")) {
      $("sel-glass-thick").addEventListener("change", onGlassThickChange);
    }
    if ($("sel-alu-company")) {
      $("sel-alu-company").addEventListener("change", onAluCompanyChange);
    }
    if ($("sel-alu-thick")) {
      $("sel-alu-thick").addEventListener("change", onAluThickChange);
    }
    if ($("alu-color-grid")) {
      $("alu-color-grid").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-alu-color]");
        if (!btn) return;
        onAluColorChange(btn.dataset.aluColor);
      });
    }

    ["in-h", "in-w", "in-qty"].forEach((id) => {
      if ($(id)) $(id).addEventListener("input", () => {
        syncCalcDetails();
        renderLivePreview(true);
      });
    });

    $("btn-add").addEventListener("click", addItem);
    $("btn-clear").addEventListener("click", clearAll);
    if ($("btn-calc-reset")) $("btn-calc-reset").addEventListener("click", clearAll);
    if ($("home-board")) {
      $("home-board").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-goto]");
        if (btn) goHomeTarget(btn.dataset.goto, btn.dataset.quoteId || "");
      });
    }
    if ($("btn-save-shop")) $("btn-save-shop").addEventListener("click", saveShopFromForm);
    if ($("btn-shop-logo")) {
      $("btn-shop-logo").addEventListener("click", function () {
        if ($("shop-logo-file")) $("shop-logo-file").click();
      });
    }
    if ($("shop-logo-file")) {
      $("shop-logo-file").addEventListener("change", function () {
        const file = this.files && this.files[0];
        this.value = "";
        if (file) onShopLogoPicked(file);
      });
    }
    if ($("btn-shop-logo-reset")) {
      $("btn-shop-logo-reset").addEventListener("click", function () {
        applyShop({
          name: state.shop.name,
          slogan: state.shop.slogan,
          phone: state.shop.phone,
          address: state.shop.address,
          logo: "images/logo.svg"
        });
        renderHome();
        persistOwnerData(["shop"]);
      });
    }
    $("btn-print").addEventListener("click", () => window.print());
    $("btn-print-cutting").addEventListener("click", () => window.print());
    window.addEventListener("beforeprint", preparePrint);
    window.addEventListener("afterprint", clearPrintMode);
    bindAdminPicks();
    bindEditPicks("company-list");
    bindEditPicks("alu-list");
    function ensureCancel(afterId, cancelId) {
      if ($(cancelId) || !$(afterId)) return;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = cancelId;
      btn.className = "icon-btn ghost compact hidden";
      btn.textContent = T.cancelBtn;
      $(afterId).insertAdjacentElement("afterend", btn);
      btn.addEventListener("click", function () { cancelEdit(); });
    }
    ensureCancel("btn-add-company", "btn-cancel-company");
    ensureCancel("btn-add-alu", "btn-cancel-alu");
    setAddLabels();
    $("btn-add-company").addEventListener("click", addCompany);
    $("btn-add-lock").addEventListener("click", addLock);
    $("btn-add-alu").addEventListener("click", addAluminium);
    if ($("btn-add-staff")) $("btn-add-staff").addEventListener("click", addStaff);
    $("btn-save-charges").addEventListener("click", saveCharges);
    $("btn-save-cut").addEventListener("click", saveCutParams);
    if ($("btn-db-connect")) $("btn-db-connect").addEventListener("click", connectDbFromForm);
    if ($("btn-db-test")) $("btn-db-test").addEventListener("click", testDbConnection);
    if ($("btn-db-defaults")) $("btn-db-defaults").addEventListener("click", useDefaultDb);
    if ($("btn-db-reset")) $("btn-db-reset").addEventListener("click", resetDbConfig);
    if ($("btn-db-copy-schema")) $("btn-db-copy-schema").addEventListener("click", function () {
      copySqlKind("schema");
    });
    if ($("btn-db-download-schema")) $("btn-db-download-schema").addEventListener("click", function () {
      downloadSqlKind("schema");
    });
    if ($("btn-db-copy-seed")) $("btn-db-copy-seed").addEventListener("click", function () {
      copySqlKind("defaults");
    });
    if ($("btn-owner-db")) $("btn-owner-db").addEventListener("click", openDbSettingsFromGate);
    if ($("btn-cut-calc")) $("btn-cut-calc").addEventListener("click", renderCutCalcResult);
    if ($("btn-cut-add")) $("btn-cut-add").addEventListener("click", addCutListItem);
    if ($("btn-cut-reset")) $("btn-cut-reset").addEventListener("click", resetCutCalc);
    if ($("cut-kind-picker")) {
      $("cut-kind-picker").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-cut-kind]");
        if (btn) setCutKind(btn.dataset.cutKind);
      });
    }
    if ($("cut-type-list")) {
      $("cut-type-list").addEventListener("click", function (e) {
        const card = e.target.closest("[data-cut-type]");
        if (card) setCutType(card.dataset.cutType);
      });
    }
    ["cut-h", "cut-w", "cut-qty"].forEach(function (id) {
      if (!$(id)) return;
      $(id).addEventListener("input", function () { renderCutPreview(true); });
      $(id).addEventListener("keydown", function (e) {
        if (e.key === "Enter") renderCutCalcResult();
      });
    });

    if ($("quotes-list")) {
      $("quotes-list").addEventListener("click", (e) => {
        if (e.target.closest("select") || e.target.closest("a")) return;
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const act = btn.dataset.action;
        if (act === "quote-share-copy" || act === "quote-share-wa" || act === "quote-share") {
          e.preventDefault();
          e.stopPropagation();
          if (act === "quote-share-copy") copyQuoteById(btn.dataset.id);
          if (act === "quote-share-wa") shareQuoteWhatsApp(btn.dataset.id);
          if (act === "quote-share") shareQuoteNative(btn.dataset.id);
          return;
        }
        if (act === "toggle-quote") toggleQuote(btn.dataset.id);
        if (act === "quote-cut") openQuoteCutting(btn.dataset.id);
        if (act === "quote-open-calc") openQuoteInCalc(btn.dataset.id);
        if (act === "quote-delete") {
          e.preventDefault();
          e.stopPropagation();
          deleteQuote(btn.dataset.id);
        }
      });
      $("quotes-list").addEventListener("change", (e) => {
        const el = e.target.closest("select[data-action]");
        if (!el) return;
        if (el.dataset.action === "quote-status") patchQuote(el.dataset.id, { status: el.value });
        if (el.dataset.action === "quote-assign") patchQuote(el.dataset.id, { assigned: el.value });
      });
    }
    if ($("quote-search")) {
      $("quote-search").addEventListener("input", function () {
        state.quoteSearch = this.value || "";
        renderQuotes();
      });
    }
    if ($("btn-clear-cut-quote")) $("btn-clear-cut-quote").addEventListener("click", clearQuoteCutting);
    if ($("cutting-list-wrap")) {
      $("cutting-list-wrap").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-action='remove-cut-entry']");
        if (!btn) return;
        removeCuttingEntry(btn.dataset.src, btn.dataset.index);
      });
    }
    $("item-list").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      if (btn.dataset.action === "remove-item") removeItem(index);
      if (btn.dataset.action === "edit-item") startEditItem(index);
      if (btn.dataset.action === "toggle-cut") toggleCutList(index);
    });
    if ($("btn-cancel-item")) $("btn-cancel-item").addEventListener("click", function () { clearInputs(); });
    $("company-list").addEventListener("click", (e) => {
      handleRateListClick("company", e);
    });
    $("lock-list").addEventListener("click", (e) => handleRateListClick("lock", e));
    $("alu-list").addEventListener("click", (e) => handleRateListClick("alu", e));
    ["company-list", "alu-list", "lock-list"].forEach(function (id) {
      $(id).addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        const row = e.target.closest(".rate-row.editing");
        if (!row) return;
        const kind = id === "company-list" ? "company" : id === "alu-list" ? "alu" : "lock";
        saveEdited(kind, Number(row.dataset.index));
      });
    });
    if ($("staff-list")) {
      $("staff-list").addEventListener("click", (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;
        const index = Number(btn.dataset.index);
        if (action === "edit-staff") startEditStaff(index);
        else if (action === "save-staff") saveEditedStaff(index);
        else if (action === "cancel-edit") cancelEdit();
        else if (action === "remove-staff") {
          if (state.edit.kind === "staff") state.edit = { kind: "", index: -1, name: "", rate: null, rates: {}, thicks: [], colors: [], outs: [] };
          removeStaff(index);
        }
      });
      $("staff-list").addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        const row = e.target.closest(".rate-row.editing.is-staff-edit");
        if (!row) return;
        e.preventDefault();
        saveEditedStaff(Number(row.dataset.index));
      });
    }
    bindSortable("company-list", () => state.companies, () => {
      cancelEdit(true);
      renderRateList("company-list", state.companies, "company");
      renderCompanySelect();
      persistOwnerData(["companies"]);
    }, true);
    bindSortable("lock-list", () => state.locks, () => {
      cancelEdit(true);
      renderRateList("lock-list", state.locks, "lock");
      renderLockSelect();
      persistOwnerData(["locks"]);
    });
    bindSortable("alu-list", () => state.aluminium, () => {
      cancelEdit(true);
      refreshCatalogSelects();
      persistOwnerData(["aluminium"]);
    }, true);
    bindSortable("staff-list", () => state.staff, () => {
      renderStaffList();
      persistOwnerData(["users"]);
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
    if ($("admin-tabs")) {
      $("admin-tabs").addEventListener("click", function (e) {
        const btn = e.target.closest(".admin-tab");
        if (btn && btn.dataset.admin) switchAdminPanel(btn.dataset.admin);
      });
    }
    $("btn-owner-ok").addEventListener("click", submitOwnerPin);
    if ($("btn-owner-cancel")) {
      $("btn-owner-cancel").addEventListener("click", function () {
        $("owner-gate-err").style.display = "none";
        switchTab("calc");
      });
    }
    $("owner-email").addEventListener("keydown", (e) => {
      if (e.key === "Enter") $("owner-pin").focus();
    });
    $("owner-pin").addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitOwnerPin();
    });
    if ($("btn-pin-toggle")) {
      $("btn-pin-toggle").addEventListener("click", function () {
        setPinVisible($("owner-pin").type === "password");
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if ($("quote-view") && !$("quote-view").classList.contains("hidden")) {
        e.preventDefault();
        closeQuoteView();
        return;
      }
      if (!$("owner-gate") || $("owner-gate").classList.contains("hidden")) return;
      e.preventDefault();
      $("owner-gate-err").style.display = "none";
      switchTab("calc");
    });
    if ($("btn-user-menu")) $("btn-user-menu").addEventListener("click", function (e) {
      e.stopPropagation();
      toggleUserMenu();
    });
    if ($("btn-menu-calc")) $("btn-menu-calc").addEventListener("click", function () {
      closeUserMenu();
      switchTab("calc");
    });
    if ($("btn-menu-admin")) $("btn-menu-admin").addEventListener("click", function () {
      closeUserMenu();
      switchTab("rates");
    });
    if ($("btn-owner-lock")) $("btn-owner-lock").addEventListener("click", function () {
      closeUserMenu();
      lockOwner();
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest || !e.target.closest("#user-menu")) closeUserMenu();
    });
    $("btn-staff-login").addEventListener("click", function () {
      showOwnerGate("calc");
    });
    $("btn-send-quote").addEventListener("click", sendQuote);
    $("quote-phone").addEventListener("keydown", function (e) {
      if (e.key === "Enter") sendQuote();
    });
    if ($("btn-find-quotes")) $("btn-find-quotes").addEventListener("click", findMyQuotes);
    if ($("my-quotes-phone")) {
      $("my-quotes-phone").addEventListener("keydown", function (e) {
        if (e.key === "Enter") findMyQuotes();
      });
      $("my-quotes-phone").addEventListener("input", function () {
        const next = String(this.value || "").replace(/[^\d+]/g, "");
        if (this.value !== next) this.value = next;
      });
    }
    if ($("my-quotes-list")) {
      $("my-quotes-list").addEventListener("click", function (e) {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const act = btn.dataset.action;
        const id = btn.dataset.id;
        if (act === "my-quote-view") {
          const q = findQuoteAnywhere(id);
          if (q) renderQuoteView(q);
          return;
        }
        if (act === "quote-share-copy") copyQuoteById(id);
        if (act === "quote-share-wa") shareQuoteWhatsApp(id);
        if (act === "quote-share") shareQuoteNative(id);
      });
    }
    if ($("btn-copy-link")) $("btn-copy-link").addEventListener("click", copyQuoteLink);
    if ($("btn-lang")) {
      $("btn-lang").addEventListener("click", function () {
        applyLang(state.lang === "en" ? "bn" : "en");
      });
    }
    if ($("btn-quote-view-close")) $("btn-quote-view-close").addEventListener("click", closeQuoteView);
    document.addEventListener("click", function (e) {
      const printBtn = e.target.closest("#btn-quote-view-print");
      if (printBtn) {
        printPublicQuote();
        return;
      }
      const guide = e.target.closest("#btn-catalog-guide");
      if (guide) {
        if (!isStaff()) showOwnerGate("rates");
        else {
          switchTab("rates");
          switchAdminPanel("glass");
        }
      }
    });
  }

  async function init() {
    try {
      ["glasscalc:companies", "glasscalc:locks", "glasscalc:cutparams", "glasscalc:ownerpin", "glasscalc:catalog"].forEach((k) => {
        localStorage.removeItem(k);
      });
    } catch (_) { /* ignore */ }
    state.companies = [];
    state.locks = [];
    state.aluminium = [];
    state.glassThicks = [];
    state.charges = { net: 0, extra: 0, seasonPct: 0 };
    try {
      const sp = Number(localStorage.getItem("glasscalc:seasonPct"));
      if (Number.isFinite(sp) && sp >= 0) state.charges.seasonPct = Math.min(90, sp);
    } catch (_) { /* ignore */ }
    state.cutParams = { ...DEFAULT_CUT };
    const savedShop = await storeGet(KEYS.shop);
    applyShop(savedShop || state.shop);
    state.items = (await storeGet(KEYS.items)) || [];
    state.cutItems = (await storeGet(KEYS.cutItems)) || [];
    if (!Array.isArray(state.cutItems)) state.cutItems = [];
    const savedLang = await storeGet(KEYS.lang);
    applyLang(savedLang === "en" ? "en" : "bn", true);

    fillCutInputs();

    bindEvents();
    bindFieldGuards();
    fillQuoteLabels();
    const publicId = new URLSearchParams(location.search).get("q");
    if (publicId) loadPublicQuote(publicId);
    $("owner-lock-label").textContent = T.ownerLock;
    const savedPanel = await storeGet(KEYS.adminPanel);
    if (savedPanel) state.adminPanel = savedPanel;
    const savedTab = await storeGet(KEYS.tab);
    const session = readSession(await storeGet(KEYS.session));
    const tab = savedTab === "cutting" || savedTab === "rates" || savedTab === "calc" ? savedTab : "calc";
    if (session) {
      applyLocalSession(session);
    } else {
      setOwnerUnlocked(false);
    }
    loadCatalog();
    renderKindPicker();
    renderTypePicker();
    renderCutKindPicker();
    renderCutTypePicker();
    syncCalcDetails();
    renderColorGrid();
    renderRateList("company-list", state.companies, "company");
    renderRateList("lock-list", state.locks, "lock");
    refreshCatalogSelects();
    renderItems();
    renderCuttingTab();
    renderLivePreview(false);
    renderCutPreview(false);
    setupPwa();
    if (session) {
      const next = tab === "rates" || tab === "cutting" || tab === "calc" ? tab : "calc";
      switchTab(next);
      const ok = await restoreSession(session, next);
      if (!ok && isStaff()) switchTab(next);
      else if (!ok && !isStaff()) switchTab(tab === "cutting" ? "cutting" : "calc");
    } else {
      switchTab(tab === "cutting" ? "cutting" : "calc");
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
