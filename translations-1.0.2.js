const ALLOW_TRANSLATION = false;

const TRANSLATIONS = {
	home: {
	  'english': { // English (UK) - default
		title: "Explore your DESTINY-Lung07 support videos",
		subtitle: "<p><strong>Select</strong> your home country to continue.</p>",
		search: "Search",
		button_disabled: "Select your country",
		button_enabled: "Enter"
	  },
	  'english-us': { // English (US)
		title: "Explore your DESTINY-Lung07 support videos",
		subtitle: "<p><strong>Select</strong> your home country to continue.</p>",
		search: "Search",
		button_disabled: "Select your country",
		button_enabled: "Enter"
	  },
	  'bengali': { // Bengali
		title: "আপনার DESTINY-Lung07 সহায়তা ভিডিওগুলি অন্বেষণ করুন",
		subtitle: "<p>চালিয়ে যেতে আপনার দেশ <strong>নির্বাচন করুন</strong>।</p>",
		search: "অনুসন্ধান করুন",
		button_disabled: "আপনার দেশ নির্বাচন করুন",
		button_enabled: "প্রবেশ করুন"
	  },
	  'brazilian-portuguese': { // Brazilian Portuguese
		title: "Explore seus vídeos de suporte DESTINY-Lung07",
		subtitle: "<p><strong>Selecione</strong> seu país de origem para continuar.</p>",
		search: "Buscar",
		button_disabled: "Selecione seu país",
		button_enabled: "Entrar"
	  },
	  'cebuano': { // Cebuano
		title: "Susiha ang imong mga DESTINY-Lung07 support videos",
		subtitle: "<p><strong>Pilia</strong> ang imong nasud aron magpadayon.</p>",
		search: "Pangita",
		button_disabled: "Pilia ang imong nasud",
		button_enabled: "Sulod"
	  },
	  'chinese-hk': { // Chinese (HK)
		title: "探索您的 DESTINY-Lung07 支援影片",
		subtitle: "<p><strong>選擇</strong>您的國家/地區以繼續。</p>",
		search: "搜尋",
		button_disabled: "選擇您的國家/地區",
		button_enabled: "進入"
	  },
	  'chinese-tw': { // Chinese (TW)
		title: "探索您的 DESTINY-Lung07 支援影片",
		subtitle: "<p><strong>選擇</strong>您的國家/地區以繼續。</p>",
		search: "搜尋",
		button_disabled: "選擇您的國家/地區",
		button_enabled: "進入"
	  },
	  'french': { // French
		title: "Explorez vos vidéos d'assistance DESTINY-Lung07",
		subtitle: "<p><strong>Sélectionnez</strong> votre pays d'origine pour continuer.</p>",
		search: "Rechercher",
		button_disabled: "Sélectionnez votre pays",
		button_enabled: "Entrer"
	  },
	  'french-ca': { // French (Canadian)
		title: "Explorez vos vidéos d'assistance DESTINY-Lung07",
		subtitle: "<p><strong>Sélectionnez</strong> votre pays d'origine pour continuer.</p>",
		search: "Rechercher",
		button_disabled: "Sélectionnez votre pays",
		button_enabled: "Entrer"
	  },
	  'german': { // German
		title: "Erkunden Sie Ihre DESTINY-Lung07-Supportvideos",
		subtitle: "<p><strong>Wählen Sie</strong> Ihr Heimatland aus, um fortzufahren.</p>",
		search: "Suchen",
		button_disabled: "Wählen Sie Ihr Land aus",
		button_enabled: "Eingeben"
	  },
	  'gujarati': { // Gujarati
		title: "તમારા DESTINY-Lung07 સહાય વિડિયો શોધો",
		subtitle: "<p>ચાલુ રાખવા માટે તમારા દેશને <strong>પસંદ કરો</strong>.</p>",
		search: "શોધો",
		button_disabled: "તમારા દેશને પસંદ કરો",
		button_enabled: "દાખલ કરો"
	  },
	  'hiligaynon': { // Hiligaynon
		title: "Utsa ang imo nga DESTINY-Lung07 support videos",
		subtitle: "<p><strong>Pilia</strong> ang imo nasyon agud magpadayon.</p>",
		search: "Pangita",
		button_disabled: "Pilia ang imo nasyon",
		button_enabled: "Sulod"
	  },
	  'hindi': { // Hindi
		title: "अपने DESTINY-Lung07 सहायता वीडियो खोजें",
		subtitle: "<p>जारी रखने के लिए अपना देश <strong>चुनें</strong>।</p>",
		search: "खोजें",
		button_disabled: "अपना देश चुनें",
		button_enabled: "प्रवेश करें"
	  },
	  'hungarian': { // Hungarian
		title: "Fedezze fel DESTINY-Lung07 támogatási videóit",
		subtitle: "<p><strong>Válassza ki</strong> hazáját a folytatáshoz.</p>",
		search: "Keresés",
		button_disabled: "Válassza ki az országát",
		button_enabled: "Belépés"
	  },
	  'ilocano': { // Ilocano
		title: "Sukimaten dagiti DESTINY-Lung07 support videos mo",
		subtitle: "<p><strong>Pilien</strong> ti pagiliam tapno agtuloy.</p>",
		search: "Agbiruk",
		button_disabled: "Pilien ti pagiliam",
		button_enabled: "Sumrek"
	  },
	  'italian': { // Italian
		title: "Esplora i tuoi video di supporto DESTINY-Lung07",
		subtitle: "<p><strong>Seleziona</strong> il tuo Paese di origine per continuare.</p>",
		search: "Cerca",
		button_disabled: "Seleziona il tuo paese",
		button_enabled: "Entra"
	  },
	  'japanese': { // Japanese
		title: "DESTINY-Lung07サポートビデオをご覧ください",
		subtitle: "<p>続けるには、お住まいの国を<strong>選択</strong>してください。</p>",
		search: "検索",
		button_disabled: "国を選択してください",
		button_enabled: "入る"
	  },
	  'kannada': { // Kannada
		title: "ನಿಮ್ಮ DESTINY-Lung07 ಬೆಂಬಲ ವೀಡಿಯೊಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
		subtitle: "<p>ಮುಂದುವರಿಸಲು ನಿಮ್ಮ ದೇಶವನ್ನು <strong>ಆಯ್ಕೆಮಾಡಿ</strong>.</p>",
		search: "ಹುಡುಕಿ",
		button_disabled: "ನಿಮ್ಮ ದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
		button_enabled: "ನಮೂದಿಸಿ"
	  },
	  'korean': { // Korean
		title: "DESTINY-Lung07 지원 동영상 살펴보기",
		subtitle: "<p>계속하려면 귀하의 국가를 <strong>선택</strong>하세요.</p>",
		search: "검색",
		button_disabled: "국가를 선택하세요",
		button_enabled: "입력"
	  },
	  'malayalam': { // Malayalam
		title: "നിങ്ങളുടെ DESTINY-Lung07 പിന്തുണാ വീഡിയോകൾ പര്യവേക്ഷണം ചെയ്യുക",
		subtitle: "<p>തുടരാൻ നിങ്ങളുടെ രാജ്യം <strong>തിരഞ്ഞെടുക്കുക</strong>.</p>",
		search: "തിരയുക",
		button_disabled: "നിങ്ങളുടെ രാജ്യം തിരഞ്ഞെടുക്കുക",
		button_enabled: "പ്രവേശിക്കുക"
	  },
	  'marathi': { // Marathi
		title: "तुमचे DESTINY-Lung07 समर्थन व्हिडिओ एक्सप्लोर करा",
		subtitle: "<p>सुरू ठेवण्यासाठी तुमचा देश <strong>निवडा</strong>.</p>",
		search: "शोधा",
		button_disabled: "तुमचा देश निवडा",
		button_enabled: "प्रवेश करा"
	  },
	  'polish': { // Polish
		title: "Przeglądaj filmy pomocy technicznej DESTINY-Lung07",
		subtitle: "<p><strong>Wybierz</strong> swój kraj, aby kontynuować.</p>",
		search: "Szukaj",
		button_disabled: "Wybierz swój kraj",
		button_enabled: "Wejdź"
	  },
	  'punjabi': { // Punjabi
		title: "ਆਪਣੇ DESTINY-Lung07 ਸਹਾਇਤਾ ਵੀਡੀਓਜ਼ ਦੀ ਖੋਜ ਕਰੋ",
		subtitle: "<p>ਜਾਰੀ ਰੱਖਣ ਲਈ ਆਪਣਾ ਦੇਸ਼ <strong>ਚੁਣੋ</strong>.</p>",
		search: "ਖੋਜੋ",
		button_disabled: "ਆਪਣਾ ਦੇਸ਼ ਚੁਣੋ",
		button_enabled: "ਦਾਖਲ ਹੋਵੋ"
	  },
	  'spanish': { // Spanish
		title: "Explora tus videos de soporte DESTINY-Lung07",
		subtitle: "<p><strong>Selecciona</strong> tu país de origen para continuar.</p>",
		search: "Buscar",
		button_disabled: "Selecciona tu país",
		button_enabled: "Entrar"
	  },
	  'tagalog': { // Tagalog
		title: "Tuklasin ang iyong mga DESTINY-Lung07 support videos",
		subtitle: "<p><strong>Piliin</strong> ang iyong bansa upang magpatuloy.</p>",
		search: "Maghanap",
		button_disabled: "Piliin ang iyong bansa",
		button_enabled: "Pumasok"
	  },
	  'tamil': { // Tamil
		title: "உங்கள் DESTINY-Lung07 ஆதரவு வீடியோக்களை ஆராயுங்கள்",
		subtitle: "<p>தொடர உங்கள் நாட்டைத் <strong>தேர்ந்தெடுக்கவும்</strong>.</p>",
		search: "தேடு",
		button_disabled: "உங்கள் நாட்டைத் தேர்ந்தெடுக்கவும்",
		button_enabled: "உள்ளிடவும்"
	  },
	  'telugu': { // Telugu
		title: "మీ DESTINY-Lung07 మద్దతు వీడియోలను అన్వేషించండి",
		subtitle: "<p>కొనసాగించడానికి మీ దేశాన్ని <strong>ఎంచుకోండి</strong>.</p>",
		search: "వెతకండి",
		button_disabled: "మీ దేశాన్ని ఎంచుకోండి",
		button_enabled: "నమోదు చేయండి"
	  },
	  'thai': { // Thai
		title: "สำรวจวิดีโอสนับสนุน DESTINY-Lung07 ของคุณ",
		subtitle: "<p><strong>เลือก</strong>ประเทศของคุณเพื่อดำเนินการต่อ</p>",
		search: "ค้นหา",
		button_disabled: "เลือกประเทศของคุณ",
		button_enabled: "เข้าสู่ระบบ"
	  },
	  'turkish': { // Turkish
		title: "DESTINY-Lung07 destek videolarınızı keşfedin",
		subtitle: "<p>Devam etmek için ülkenizi <strong>seçin</strong>.</p>",
		search: "Ara",
		button_disabled: "Ülkenizi seçin",
		button_enabled: "Gir"
	  },
	  'urdu': { // Urdu
		title: "اپنی DESTINY-Lung07 سپورٹ ویڈیوز تلاش کریں",
		subtitle: "<p>جاری رکھنے کے لیے اپنا ملک <strong>منتخب کریں</strong>۔</p>",
		search: "تلاش کریں",
		button_disabled: "اپنا ملک منتخب کریں",
		button_enabled: "داخل ہوں"
	  },
	  'vietnamese': { // Vietnamese
		title: "Khám phá video hỗ trợ DESTINY-Lung07 của bạn",
		subtitle: "<p><strong>Chọn</strong> quốc gia của bạn để tiếp tục.</p>",
		search: "Tìm kiếm",
		button_disabled: "Chọn quốc gia của bạn",
		button_enabled: "Nhập"
	  }
	},
	password: {
	  'english': {
		title: "Find out what to expect if you choose to take part in this study",
		label: "Please enter your password",
		button_enter: "Enter",
		forgotten_password: "If you <strong>can't remember</strong> your password, please refer to your wallet card or contact your study team."
	  },
	  'english-us': {
		title: "Find out what to expect if you choose to take part in this study",
		label: "Please enter your password",
		button_enter: "Enter",
		forgotten_password: "If you <strong>can't remember</strong> your password, please refer to your wallet card or contact your study team."
	  },
	  'bengali': {
		title: "আপনি এই গবেষণায় অংশ নিতে বেছে নিলে কী আশা করতে হবে তা জানুন",
		label: "অনুগ্রহ করে আপনার পাসওয়ার্ড লিখুন",
		button_enter: "প্রবেশ করুন",
		forgotten_password: "যদি আপনি আপনার পাসওয়ার্ড <strong>মনে করতে না পারেন</strong>, অনুগ্রহ করে আপনার ওয়ালেট কার্ড দেখুন বা আপনার গবেষণা দলের সাথে যোগাযোগ করুন।"
	  },
	  'brazilian-portuguese': {
		title: "Descubra o que esperar se você optar por participar deste estudo",
		label: "Por favor, insira sua senha",
		button_enter: "Entrar",
		forgotten_password: "Se você <strong>não conseguir lembrar</strong> sua senha, consulte seu cartão de carteira ou entre em contato com sua equipe de estudo."
	  },
	  'cebuano': {
		title: "Hibaw-i kung unsa ang mapaabut kung mopili ka nga moapil niini nga pagtuon",
		label: "Palihug isulod ang imong password",
		button_enter: "Sulod",
		forgotten_password: "Kon <strong>dili nimo mahinumdoman</strong> ang imong password, palihug tan-awa ang imong wallet card o kontaka ang imong study team."
	  },
	  'chinese-hk': {
		title: "了解如果您選擇參與本研究將會發生什麼",
		label: "請輸入您的密碼",
		button_enter: "進入",
		forgotten_password: "如果您<strong>記不起</strong>您的密碼，請參閱您的錢包卡或聯繫您的研究團隊。"
	  },
	  'chinese-tw': {
		title: "了解如果您選擇參與本研究將會發生什麼",
		label: "請輸入您的密碼",
		button_enter: "進入",
		forgotten_password: "如果您<strong>記不起</strong>您的密碼，請參閱您的錢包卡或聯繫您的研究團隊。"
	  },
	  'french': {
		title: "Découvrez à quoi vous attendre si vous choisissez de participer à cette étude",
		label: "Veuillez entrer votre mot de passe",
		button_enter: "Entrer",
		forgotten_password: "Si vous <strong>ne vous souvenez plus</strong> de votre mot de passe, veuillez consulter votre carte de portefeuille ou contacter votre équipe d'étude."
	  },
	  'french-ca': {
		title: "Découvrez à quoi vous attendre si vous choisissez de participer à cette étude",
		label: "Veuillez entrer votre mot de passe",
		button_enter: "Entrer",
		forgotten_password: "Si vous <strong>ne vous souvenez plus</strong> de votre mot de passe, veuillez consulter votre carte de portefeuille ou contacter votre équipe d'étude."
	  },
	  'german': {
		title: "Erfahren Sie, was Sie erwartet, wenn Sie sich für die Teilnahme an dieser Studie entscheiden",
		label: "Bitte geben Sie Ihr Passwort ein",
		button_enter: "Eingeben",
		forgotten_password: "Wenn Sie sich <strong>nicht mehr erinnern</strong> können an Ihr Passwort, schauen Sie bitte auf Ihre Brieftaschenkarte oder kontaktieren Sie Ihr Studienteam."
	  },
	  'gujarati': {
		title: "જો તમે આ અભ્યાસમાં ભાગ લેવાનું પસંદ કરો તો શું અપેક્ષા રાખવી તે શોધો",
		label: "કૃપા કરીને તમારો પાસવર્ડ દાખલ કરો",
		button_enter: "દાખલ કરો",
		forgotten_password: "જો તમે તમારો પાસવર્ડ <strong>યાદ ન કરી શકો</strong>, તો કૃપા કરીને તમારા વૉલેટ કાર્ડનો સંદર્ભ લો અથવા તમારી અભ્યાસ ટીમનો સંપર્ક કરો."
	  },
	  'hiligaynon': {
		title: "Hibalui kon ano ang paabuton kon magpili ka nga mag-apil sa sini nga pagtuon",
		label: "Palihog isulod ang imo password",
		button_enter: "Sulod",
		forgotten_password: "Kon <strong>indi mo madumduman</strong> ang imo password, palihog tan-awa ang imo wallet card ukon kontaka ang imo study team."
	  },
	  'hindi': {
		title: "यदि आप इस अध्ययन में भाग लेना चुनते हैं तो क्या उम्मीद करें, यह जानें",
		label: "कृपया अपना पासवर्ड दर्ज करें",
		button_enter: "प्रवेश करें",
		forgotten_password: "यदि आप अपना पासवर्ड <strong>याद नहीं कर सकते</strong>, तो कृपया अपने वॉलेट कार्ड को देखें या अपनी अध्ययन टीम से संपर्क करें।"
	  },
	  'hungarian': {
		title: "Tudja meg, mire számíthat, ha úgy dönt, hogy részt vesz ebben a vizsgálatban",
		label: "Kérjük, adja meg jelszavát",
		button_enter: "Belépés",
		forgotten_password: "Ha <strong>nem emlékszik</strong> a jelszavára, kérjük, nézze meg pénztárca kártyáját, vagy lépjen kapcsolatba vizsgálati csapatával."
	  },
	  'ilocano': {
		title: "Ammuem no ania ti mapasamak no piliemto nga makipaset iti daytoy nga panagadal",
		label: "Pangngaasi nga ikabil ti password mo",
		button_enter: "Sumrek",
		forgotten_password: "No <strong>di mo malagip</strong> ti password mo, pangngaasi a kitaen ti wallet card mo wenno kontaken ti study team mo."
	  },
	  'italian': {
		title: "Scopri cosa aspettarti se scegli di prendere parte a questo studio",
		label: "Inserisci la tua password",
		button_enter: "Entra",
		forgotten_password: "Se <strong>non ricordi</strong> la tua password, fai riferimento alla tua carta portafoglio o contatta il tuo team di studio."
	  },
	  'japanese': {
		title: "この研究に参加することを選択した場合に何が期待できるかを確認してください",
		label: "パスワードを入力してください",
		button_enter: "入る",
		forgotten_password: "パスワードを<strong>思い出せない</strong>場合は、ウォレットカードを参照するか、研究チームにお問い合わせください。"
	  },
	  'kannada': {
		title: "ನೀವು ಈ ಅಧ್ಯಯನದಲ್ಲಿ ಭಾಗವಹಿಸಲು ಆಯ್ಕೆ ಮಾಡಿದರೆ ಏನನ್ನು ನಿರೀಕ್ಷಿಸಬಹುದು ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ",
		label: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
		button_enter: "ನಮೂದಿಸಿ",
		forgotten_password: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ನೀವು <strong>ನೆನಪಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಾಗದಿದ್ದರೆ</strong>, ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಾಲೆಟ್ ಕಾರ್ಡ್ ಅನ್ನು ನೋಡಿ ಅಥವಾ ನಿಮ್ಮ ಅಧ್ಯಯನ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ."
	  },
	  'korean': {
		title: "이 연구에 참여하기로 선택하면 무엇을 기대할 수 있는지 알아보세요",
		label: "비밀번호를 입력하세요",
		button_enter: "입력",
		forgotten_password: "비밀번호를 <strong>기억할 수 없는</strong> 경우 지갑 카드를 참조하거나 연구팀에 문의하십시오."
	  },
	  'malayalam': {
		title: "ഈ പഠനത്തിൽ പങ്കെടുക്കാൻ തിരഞ്ഞെടുക്കുകയാണെങ്കിൽ എന്ത് പ്രതീക്ഷിക്കാം എന്ന് കണ്ടെത്തുക",
		label: "ദയവായി നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക",
		button_enter: "പ്രവേശിക്കുക",
		forgotten_password: "നിങ്ങളുടെ പാസ്‌വേഡ് <strong>ഓർമ്മിക്കാൻ കഴിയുന്നില്ലെങ്കിൽ</strong>, ദയവായി നിങ്ങളുടെ വാലറ്റ് കാർഡ് പരിശോധിക്കുക അല്ലെങ്കിൽ നിങ്ങളുടെ പഠന ടീമിനെ ബന്ധപ്പെടുക."
	  },
	  'marathi': {
		title: "तुम्ही या अभ्यासात भाग घेणे निवडल्यास काय अपेक्षा करावी ते शोधा",
		label: "कृपया तुमचा पासवर्ड प्रविष्ट करा",
		button_enter: "प्रवेश करा",
		forgotten_password: "जर तुम्हाला तुमचा पासवर्ड <strong>आठवत नसेल</strong>, कृपया तुमचे वॉलेट कार्ड पहा किंवा तुमच्या अभ्यास टीमशी संपर्क साधा."
	  },
	  'polish': {
		title: "Dowiedz się, czego możesz oczekiwać, jeśli zdecydujesz się wziąć udział w tym badaniu",
		label: "Proszę wprowadzić hasło",
		button_enter: "Wejdź",
		forgotten_password: "Jeśli <strong>nie pamiętasz</strong> swojego hasła, zapoznaj się z kartą portfela lub skontaktuj się z zespołem badawczym."
	  },
	  'punjabi': {
		title: "ਜੇ ਤੁਸੀਂ ਇਸ ਅਧਿਐਨ ਵਿੱਚ ਹਿੱਸਾ ਲੈਣ ਦੀ ਚੋਣ ਕਰਦੇ ਹੋ ਤਾਂ ਕੀ ਉਮੀਦ ਕਰਨੀ ਹੈ, ਪਤਾ ਕਰੋ",
		label: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਪਾਸਵਰਡ ਦਰਜ ਕਰੋ",
		button_enter: "ਦਾਖਲ ਹੋਵੋ",
		forgotten_password: "ਜੇ ਤੁਸੀਂ ਆਪਣਾ ਪਾਸਵਰਡ <strong>ਯਾਦ ਨਹੀਂ ਕਰ ਸਕਦੇ</strong>, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਵਾਲਟ ਕਾਰਡ ਨੂੰ ਦੇਖੋ ਜਾਂ ਆਪਣੀ ਅਧਿਐਨ ਟੀਮ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।"
	  },
	  'spanish': {
		title: "Descubre qué esperar si eliges participar en este estudio",
		label: "Por favor, ingresa tu contraseña",
		button_enter: "Entrar",
		forgotten_password: "Si <strong>no puedes recordar</strong> tu contraseña, consulta tu tarjeta de billetera o contacta a tu equipo de estudio."
	  },
	  'tagalog': {
		title: "Alamin kung ano ang inaasahan kung pipiliin mong lumahok sa pag-aaral na ito",
		label: "Pakiusap ipasok ang iyong password",
		button_enter: "Pumasok",
		forgotten_password: "Kung <strong>hindi mo maalala</strong> ang iyong password, mangyaring tingnan ang iyong wallet card o makipag-ugnayan sa iyong study team."
	  },
	  'tamil': {
		title: "இந்த ஆய்வில் பங்கேற்க நீங்கள் தேர்வுசெய்தால் என்ன எதிர்பார்க்கலாம் என்பதைக் கண்டறியவும்",
		label: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
		button_enter: "உள்ளிடவும்",
		forgotten_password: "உங்கள் கடவுச்சொல்லை நீங்கள் <strong>நினைவில் கொள்ள முடியவில்லை</strong> என்றால், உங்கள் வாலட் கார்டைப் பார்க்கவும் அல்லது உங்கள் ஆய்வுக் குழுவைத் தொடர்பு கொள்ளவும்."
	  },
	  'telugu': {
		title: "మీరు ఈ అధ్యయనంలో పాల్గొనడానికి ఎంచుకుంటే ఏమి ఆశించవచ్చో తెలుసుకోండి",
		label: "దయచేసి మీ పాస్‌వర్డ్‌ను నమోదు చేయండి",
		button_enter: "నమోదు చేయండి",
		forgotten_password: "మీరు మీ పాస్‌వర్డ్‌ను <strong>గుర్తు చేసుకోలేకపోతే</strong>, దయచేసి మీ వాలెట్ కార్డ్‌ను చూడండి లేదా మీ అధ్యయన బృందాన్ని సంప్రదించండి."
	  },
	  'thai': {
		title: "ค้นหาสิ่งที่คาดหวังได้หากคุณเลือกเข้าร่วมการศึกษานี้",
		label: "กรุณาใส่รหัสผ่านของคุณ",
		button_enter: "เข้าสู่ระบบ",
		forgotten_password: "หากคุณ<strong>จำไม่ได้</strong>รหัสผ่านของคุณ โปรดดูบัตรกระเป๋าเงินของคุณหรือติดต่อทีมการศึกษาของคุณ"
	  },
	  'turkish': {
		title: "Bu çalışmaya katılmayı seçerseniz neler bekleyeceğinizi öğrenin",
		label: "Lütfen şifrenizi girin",
		button_enter: "Gir",
		forgotten_password: "Şifrenizi <strong>hatırlayamıyorsanız</strong>, lütfen cüzdan kartınıza bakın veya çalışma ekibinizle iletişime geçin."
	  },
	  'urdu': {
		title: "اگر آپ اس مطالعے میں حصہ لینے کا انتخاب کرتے ہیں تو کیا توقع کرنی ہے جانیں",
		label: "براہ کرم اپنا پاس ورڈ درج کریں",
		button_enter: "داخل ہوں",
		forgotten_password: "اگر آپ اپنا پاس ورڈ <strong>یاد نہیں کر سکتے</strong>، تو براہ کرم اپنے والٹ کارڈ کو دیکھیں یا اپنی اسٹڈی ٹیم سے رابطہ کریں۔"
	  },
	  'vietnamese': {
		title: "Tìm hiểu những gì mong đợi nếu bạn chọn tham gia nghiên cứu này",
		label: "Vui lòng nhập mật khẩu của bạn",
		button_enter: "Nhập",
		forgotten_password: "Nếu bạn <strong>không thể nhớ</strong> mật khẩu của mình, vui lòng tham khảo thẻ ví của bạn hoặc liên hệ với nhóm nghiên cứu của bạn."
	  }
	},
	language_select: {
	  'english': {
		title: "Please select your preferred language",
		unavailable_language: "This country's support page currently does not offer a version in your chosen language (English UK)",
		search: "Search",
		button_disabled: "Select language",
		button_enabled: "Continue",
		button_back: "Back"
	  },
	  'english-us': {
		title: "Please select your preferred language",
		unavailable_language: "This country's support page currently does not offer a version in your chosen language (English US)",
		search: "Search",
		button_disabled: "Select language",
		button_enabled: "Continue",
		button_back: "Back"
	  },
	  'bengali': {
		title: "অনুগ্রহ করে আপনার পছন্দের ভাষা নির্বাচন করুন",
		unavailable_language: "এই দেশের সহায়তা পৃষ্ঠাটি বর্তমানে আপনার নির্বাচিত ভাষায় (বাংলা) সংস্করণ অফার করে না",
		search: "অনুসন্ধান করুন",
		button_disabled: "ভাষা নির্বাচন করুন",
		button_enabled: "চালিয়ে যান",
		button_back: "পিছনে"
	  },
	  'brazilian-portuguese': {
		title: "Selecione seu idioma preferido",
		unavailable_language: "A página de suporte deste país atualmente não oferece uma versão no seu idioma escolhido (Português Brasileiro)",
		search: "Buscar",
		button_disabled: "Selecione o idioma",
		button_enabled: "Continuar",
		button_back: "Voltar"
	  },
	  'cebuano': {
		title: "Palihug pilia ang imong gusto nga pinulongan",
		unavailable_language: "Ang support page niini nga nasud karon wala mag-offer og bersyon sa imong gipili nga pinulongan (Cebuano)",
		search: "Pangita",
		button_disabled: "Pilia ang pinulongan",
		button_enabled: "Padayon",
		button_back: "Balik"
	  },
	  'chinese-hk': {
		title: "請選擇您的首選語言",
		unavailable_language: "此國家/地區的支援頁面目前不提供您所選語言的版本 (中文 HK)",
		search: "搜尋",
		button_disabled: "選擇語言",
		button_enabled: "繼續",
		button_back: "返回"
	  },
	  'chinese-tw': {
		title: "請選擇您的首選語言",
		unavailable_language: "此國家/地區的支援頁面目前不提供您所選語言的版本 (中文 TW)",
		search: "搜尋",
		button_disabled: "選擇語言",
		button_enabled: "繼續",
		button_back: "返回"
	  },
	  'french': {
		title: "Veuillez sélectionner votre langue préférée",
		unavailable_language: "La page d'assistance de ce pays n'offre actuellement pas de version dans la langue que vous avez choisie (Français)",
		search: "Rechercher",
		button_disabled: "Sélectionner la langue",
		button_enabled: "Continuer",
		button_back: "Retour"
	  },
	  'french-ca': {
		title: "Veuillez sélectionner votre langue préférée",
		unavailable_language: "La page d'assistance de ce pays n'offre actuellement pas de version dans la langue que vous avez choisie (Français Canadien)",
		search: "Rechercher",
		button_disabled: "Sélectionner la langue",
		button_enabled: "Continuer",
		button_back: "Retour"
	  },
	  'german': {
		title: "Bitte wählen Sie Ihre bevorzugte Sprache",
		unavailable_language: "Die Support-Seite dieses Landes bietet derzeit keine Version in Ihrer gewählten Sprache an (Deutsch)",
		search: "Suchen",
		button_disabled: "Sprache auswählen",
		button_enabled: "Weiter",
		button_back: "Zurück"
	  },
	  'gujarati': {
		title: "કૃપા કરીને તમારી પસંદગીની ભાષા પસંદ કરો",
		unavailable_language: "આ દેશનું સપોર્ટ પૃષ્ઠ હાલમાં તમારી પસંદ કરેલી ભાષામાં (ગુજરાતી) સંસ્કરણ પ્રદાન કરતું નથી",
		search: "શોધો",
		button_disabled: "ભાષા પસંદ કરો",
		button_enabled: "ચાલુ રાખો",
		button_back: "પાછળ"
	  },
	  'hiligaynon': {
		title: "Palihug pilia ang imo gusto nga pinulongan",
		unavailable_language: "Ang support page sini nga nasyon subong wala nag-offer sang bersyon sa imo ginpili nga pinulongan (Hiligaynon)",
		search: "Pangita",
		button_disabled: "Pilia ang pinulongan",
		button_enabled: "Padayon",
		button_back: "Balik"
	  },
	  'hindi': {
		title: "कृपया अपनी पसंदीदा भाषा चुनें",
		unavailable_language: "इस देश का सहायता पृष्ठ वर्तमान में आपकी चुनी हुई भाषा (हिंदी) में संस्करण प्रदान नहीं करता है",
		search: "खोजें",
		button_disabled: "भाषा चुनें",
		button_enabled: "जारी रखें",
		button_back: "वापस"
	  },
	  'hungarian': {
		title: "Kérjük, válassza ki az Ön által preferált nyelvet",
		unavailable_language: "Ennek az országnak a támogatási oldala jelenleg nem kínál verziót az Ön által választott nyelven (Magyar)",
		search: "Keresés",
		button_disabled: "Nyelv kiválasztása",
		button_enabled: "Folytatás",
		button_back: "Vissza"
	  },
	  'ilocano': {
		title: "Pangngaasi a pilien ti kayatmo a pagsasao",
		unavailable_language: "Ti support page daytoy a pagilian ita ket saan nga agipaaay ti bersion iti pili mo a pagsasao (Ilocano)",
		search: "Agbiruk",
		button_disabled: "Pilien ti pagsasao",
		button_enabled: "Agtuloy",
		button_back: "Agsubli"
	  },
	  'italian': {
		title: "Seleziona la tua lingua preferita",
		unavailable_language: "La pagina di supporto di questo paese attualmente non offre una versione nella lingua scelta (Italiano)",
		search: "Cerca",
		button_disabled: "Seleziona lingua",
		button_enabled: "Continua",
		button_back: "Indietro"
	  },
	  'japanese': {
		title: "希望する言語を選択してください",
		unavailable_language: "この国のサポートページは現在、選択した言語（日本語）のバージョンを提供していません",
		search: "検索",
		button_disabled: "言語を選択",
		button_enabled: "続ける",
		button_back: "戻る"
	  },
	  'kannada': {
		title: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
		unavailable_language: "ಈ ದೇಶದ ಬೆಂಬಲ ಪುಟವು ಪ್ರಸ್ತುತ ನಿಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ಭಾಷೆಯಲ್ಲಿ (ಕನ್ನಡ) ಆವೃತ್ತಿಯನ್ನು ನೀಡುತ್ತಿಲ್ಲ",
		search: "ಹುಡುಕಿ",
		button_disabled: "ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ",
		button_enabled: "ಮುಂದುವರಿಸಿ",
		button_back: "ಹಿಂದೆ"
	  },
	  'korean': {
		title: "선호하는 언어를 선택하세요",
		unavailable_language: "이 국가의 지원 페이지는 현재 선택한 언어 (한국어)로 된 버전을 제공하지 않습니다",
		search: "검색",
		button_disabled: "언어 선택",
		button_enabled: "계속",
		button_back: "뒤로"
	  },
	  'malayalam': {
		title: "ദയവായി നിങ്ങളുടെ ഇഷ്ടപ്പെട്ട ഭാഷ തിരഞ്ഞെടുക്കുക",
		unavailable_language: "ഈ രാജ്യത്തിന്റെ പിന്തുണ പേജ് നിലവിൽ നിങ്ങൾ തിരഞ്ഞെടുത്ത ഭാഷയിൽ (മലയാളം) പതിപ്പ് വാഗ്ദാനം ചെയ്യുന്നില്ല",
		search: "തിരയുക",
		button_disabled: "ഭാഷ തിരഞ്ഞെടുക്കുക",
		button_enabled: "തുടരുക",
		button_back: "തിരികെ"
	  },
	  'marathi': {
		title: "कृपया तुमची पसंतीची भाषा निवडा",
		unavailable_language: "या देशाचे समर्थन पृष्ठ सध्या तुमच्या निवडलेल्या भाषेत (मराठी) आवृत्ती देत नाही",
		search: "शोधा",
		button_disabled: "भाषा निवडा",
		button_enabled: "सुरू ठेवा",
		button_back: "मागे"
	  },
	  'polish': {
		title: "Wybierz preferowany język",
		unavailable_language: "Strona wsparcia tego kraju obecnie nie oferuje wersji w wybranym języku (Polski)",
		search: "Szukaj",
		button_disabled: "Wybierz język",
		button_enabled: "Kontynuuj",
		button_back: "Wstecz"
	  },
	  'punjabi': {
		title: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਤਰਜੀਹੀ ਭਾਸ਼ਾ ਚੁਣੋ",
		unavailable_language: "ਇਸ ਦੇਸ਼ ਦਾ ਸਹਾਇਤਾ ਪੰਨਾ ਵਰਤਮਾਨ ਵਿੱਚ ਤੁਹਾਡੀ ਚੁਣੀ ਹੋਈ ਭਾਸ਼ਾ (ਪੰਜਾਬੀ) ਵਿੱਚ ਸੰਸਕਰਣ ਪੇਸ਼ ਨਹੀਂ ਕਰਦਾ",
		search: "ਖੋਜੋ",
		button_disabled: "ਭਾਸ਼ਾ ਚੁਣੋ",
		button_enabled: "ਜਾਰੀ ਰੱਖੋ",
		button_back: "ਵਾਪਸ"
	  },
	  'spanish': {
		title: "Selecciona tu idioma preferido",
		unavailable_language: "La página de soporte de este país actualmente no ofrece una versión en tu idioma elegido (Español)",
		search: "Buscar",
		button_disabled: "Seleccionar idioma",
		button_enabled: "Continuar",
		button_back: "Atrás"
	  },
	  'tagalog': {
		title: "Pakiusap piliin ang iyong gustong wika",
		unavailable_language: "Ang support page ng bansang ito ay kasalukuyang hindi nag-aalok ng bersyon sa iyong napiling wika (Tagalog)",
		search: "Maghanap",
		button_disabled: "Piliin ang wika",
		button_enabled: "Magpatuloy",
		button_back: "Bumalik"
	  },
	  'tamil': {
		title: "உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்",
		unavailable_language: "இந்த நாட்டின் ஆதரவு பக்கம் தற்போது நீங்கள் தேர்ந்தெடுத்த மொழியில் (தமிழ்) பதிப்பை வழங்கவில்லை",
		search: "தேடு",
		button_disabled: "மொழியைத் தேர்ந்தெடுக்கவும்",
		button_enabled: "தொடரவும்",
		button_back: "பின்செல்"
	  },
	  'telugu': {
		title: "దయచేసి మీ ఇష్టమైన భాషను ఎంచుకోండి",
		unavailable_language: "ఈ దేశం యొక్క మద్దతు పేజీ ప్రస్తుతం మీరు ఎంచుకున్న భాషలో (తెలుగు) సంస్కరణను అందించడం లేదు",
		search: "వెతకండి",
		button_disabled: "భాషను ఎంచుకోండి",
		button_enabled: "కొనసాగించండి",
		button_back: "వెనుకకు"
	  },
	  'thai': {
		title: "โปรดเลือกภาษาที่คุณต้องการ",
		unavailable_language: "หน้าสนับสนุนของประเทศนี้ปัจจุบันไม่มีเวอร์ชันในภาษาที่คุณเลือก (ไทย)",
		search: "ค้นหา",
		button_disabled: "เลือกภาษา",
		button_enabled: "ดำเนินการต่อ",
		button_back: "กลับ"
	  },
	  'turkish': {
		title: "Lütfen tercih ettiğiniz dili seçin",
		unavailable_language: "Bu ülkenin destek sayfası şu anda seçtiğiniz dilde (Türkçe) bir sürüm sunmamaktadır",
		search: "Ara",
		button_disabled: "Dil seçin",
		button_enabled: "Devam et",
		button_back: "Geri"
	  },
	  'urdu': {
		title: "براہ کرم اپنی ترجیحی زبان منتخب کریں",
		unavailable_language: "اس ملک کا سپورٹ صفحہ فی الوقت آپ کی منتخب کردہ زبان (اردو) میں ورژن پیش نہیں کرتا",
		search: "تلاش کریں",
		button_disabled: "زبان منتخب کریں",
		button_enabled: "جاری رکھیں",
		button_back: "واپس"
	  },
	  'vietnamese': {
		title: "Vui lòng chọn ngôn ngữ ưa thích của bạn",
		unavailable_language: "Trang hỗ trợ của quốc gia này hiện không cung cấp phiên bản bằng ngôn ngữ bạn đã chọn (Tiếng Việt)",
		search: "Tìm kiếm",
		button_disabled: "Chọn ngôn ngữ",
		button_enabled: "Tiếp tục",
		button_back: "Quay lại"
	  }
	}	
};

const COUNTRY_DEFAULTS = {
  'at': 'german',           // Austria
  'fr': 'french',           // France
  'de': 'german',           // Germany
  'hu': 'hungarian',        // Hungary
  'it': 'italian',          // Italy
  'pl': 'polish',           // Poland
  'es': 'spanish',          // Spain
  'gb': 'english',       // United Kingdom
  'tr': 'turkish',          // Turkey
  'th': 'thai',             // Thailand
  'hk': 'chinese-hk',       // Hong Kong
  'br': 'brazilian-portuguese', // Brazil
  'tw': 'chinese-tw',       // Taiwan
  'jp': 'japanese',         // Japan
  'ph': 'english',       // Philippines (default to English)
  'in': 'hindi',       // India (default to English)
  'us': 'english-us',       // United States
  'ca': 'english',       // Canada (could be french-ca in some regions)
  'kr': 'korean',           // South Korea
  'vn': 'vietnamese',       // Vietnam
  'au': 'english'        // Australia
};
