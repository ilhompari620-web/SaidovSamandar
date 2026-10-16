// ================= Global News Data =================
        const newsArticles = [
            {
                id: 1,
                title: "Maktablarda 2026-yilgi BSB va CHSB baholash tizimi bo'yicha yangi ko'rsatmalar tasdiqlandi",
                category: "bsb",
                categoryName: "Maktab va BSB",
                date: "15-Oktabr, 2026",
                readTime: "3 daqiqa",
                views: 1420,
                likes: 84,
                liked: false,
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
                source: "Maktabgacha va maktab ta'limi vazirligi",
                summary: "2026-o'quv yilida umumta'lim maktablarida o'quvchilarning bilim va ko'nikmalarini baholashda BSB (bo'lim yuzasidan) va CHSB (choraklik) sinovlarining shaffofligi hamda xolis mezonlari kuchaytirildi.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">Umumta'lim maktablarida o'quv jarayoni sifatini oshirish va baholashda inson omilini kamaytirish maqsadida BSB va CHSB tizimiga muhim o'zgartirishlar kiritildi.</p>
                    <p>Yangi qoidalarga ko'ra:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li><strong>Bo'lim yuzasidan baholash (BSB):</strong> Har bir fan bob yakunida 25-40 daqiqalik yozma yoki test shaklida o'tkaziladi. O'quvchilar topshiriqlarni mustaqil fikrlash darajasiga ko'ra bajaradi.</li>
                        <li><strong>Choraklik baholash (CHSB):</strong> Har chorak oxirida barcha maktablar uchun yagona standartlashtirilgan savollar asosida tashkil etiladi.</li>
                        <li>Baholash natijalari elektron jurnalga 24 soat ichida kiritilishi majburiy etib belgilandi.</li>
                    </ul>
                    <blockquote class="p-3 bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 text-xs italic rounded-r-xl">
                        "Asosiy maqsad — baho uchun emas, mustahkam bilim va hayotiy ko'nikma uchun o'qitishni ta'minlashdir."
                    </blockquote>
                    <p>O'quvchilar va ota-onalar test natijalari hamda tahlillarini ushbu ta'lim portali orqali kuzatib borishlari mumkin.</p>
                `
            },
            {
                id: 2,
                title: "Yangilangan Konstitutsiya bo'yicha maktab o'quvchilari o'rtasida Respublika tanlovi e'lon qilindi",
                category: "huquq",
                categoryName: "Qonun va Huquq",
                date: "14-Oktabr, 2026",
                readTime: "4 daqiqa",
                views: 2850,
                likes: 156,
                liked: false,
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                source: "Adliya vazirligi matbuot xizmati",
                summary: "Yoshlar o'rtasida huquqiy savodxonlikni yuksaltirish maqsadida 'Konstitutsiya — mening huquqim va burchim' mavzusida Respublika insho va huquqiy bilimlar bellashuvi boshlandi.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">Adliya vazirligi hamda Maktabgacha va maktab ta'limi vazirligi hamkorligida 8-11-sinf o'quvchilari uchun keng ko'lamli tanlov e'lon qilindi.</p>
                    <p>Tanlov uch bosqichda tashkil etiladi:</p>
                    <ol class="list-decimal pl-5 space-y-1">
                        <li><strong>Maktab bosqichi:</strong> Oktyabr oyi davomida har bir maktabda o'tkaziladi.</li>
                        <li><strong>Tuman/Shahar bosqichi:</strong> Noyabr oyining birinchi o'n kunligida.</li>
                        <li><strong>Respublika bosqichi:</strong> Konstitutsiya kuni arafasida Toshkent shahrida tantanali ravishda o'tkaziladi.</li>
                    </ol>
                    <p>G'olib o'quvchilar zamonaviy noutbuklar, planshetlar va OTMlarga kirishda qo'shimcha imtiyozli ball beruvchi sertifikatlar bilan taqdirlanadi.</p>
                `
            },
            {
                id: 3,
                title: "Maktablarda 'Milliy tarbiya va odob-axloq oyligi' o'tkazilmoqda",
                category: "tarbiya",
                categoryName: "Ma'naviyat va Odob",
                date: "13-Oktabr, 2026",
                readTime: "3 daqiqa",
                views: 980,
                likes: 67,
                liked: false,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
                source: "Respublika Ma'naviyat va ma'rifat markazi",
                summary: "'Kattalarga hurmat, kichiklarga izzat' shiori ostida maktablarda ma'naviy uchrashuvlar, ota-onalar bilan ochiq muloqotlar va tarbiyaviy soatlar o'tkazilmoqda.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">O'quvchi-yoshlarni milliy va umuminsoniy qadriyatlar ruhida tarbiyalash, ularda yuksak muomala madaniyatini shakllantirish maqsadida barcha ta'lim muassasalarida maxsus oylik boshlandi.</p>
                    <p>Oylik doirasida quyidagi tadbirlar rejalashtirilgan:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Faxriy ustozlar va nuroniylar bilan uchrashuvlar;</li>
                        <li>"Eng odobli sinf" va "Namunali o'quvchi" nominatsiyalari bo'yicha maktab tanlovlari;</li>
                        <li>Ijtimoiy tarmoqlarda odob-axloq va kiberxavfsizlik madaniyati bo'yicha mahorat darslari.</li>
                    </ul>
                `
            },
            {
                id: 4,
                title: "Bolalar huquqlari kafolatlari va ta'lim xavfsizligi to'g'risidagi qonun kuchga kirdi",
                category: "huquq",
                categoryName: "Qonun va Huquq",
                date: "12-Oktabr, 2026",
                readTime: "3 daqiqa",
                views: 3110,
                likes: 198,
                liked: false,
                image: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=800&q=80",
                source: "Oliy Majlis Qonunchilik palatasi",
                summary: "Voyaga yetmaganlarning sha'ni, qadr-qimmati va jismoniy daxlsizligini ta'minlash, ta'lim maskanlarida xavfsiz muhit yaratish bo'yicha qonuniy choralar qat'iylashtirildi.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">Yangi qonun bilan maktablarda o'quvchilarga nisbatan har qanday ruhiy yoki jismoniy tazyiq o'tkazish, kamsitish yoki noqonuniy xatti-harakatlar taqiqlandi.</p>
                    <p>Asosiy yangiliklar:</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Har bir maktabda bolalar huquqlari bo'yicha ishonch qutisi va bepul onlayn yordam liniyasi joriy etildi;</li>
                        <li>O'quvchilarning shaxsiy ma'lumotlari daxlsizligi to'liq kafolatlana boshladi;</li>
                        <li>Ota-onalar va o'qituvchilar o'rtasida huquqiy tushuntirish seminar-treninglari tashkil etiladi.</li>
                    </ul>
                `
            },
            {
                id: 5,
                title: "Huquq va Tarbiya fani o'qituvchilari uchun yangi metodik qo'llanma nashr etildi",
                category: "bsb",
                categoryName: "Maktab va BSB",
                date: "11-Oktabr, 2026",
                readTime: "2 daqiqa",
                views: 1750,
                likes: 92,
                liked: false,
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
                source: "Milliy ta'lim instituti",
                summary: "Yangi o'quv dasturi asosida tayyorlangan interaktiv dars ishlanmalari, BSB baholash mezonlari va vaziyatli topshiriqlar to'plami portalga yuklandi.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">Pedagoglar uchun darslarni qiziqarli va zamonaviy texnologiyalar asosida tashkil etishga mo'ljallangan maxsus qo'llanma taqdim etildi.</p>
                `
            },
            {
                id: 6,
                title: "Yoshlar o'rtasida 'Eng yaxshi huquqiy videorolik' Respublika ko'rik-tanlovi boshlandi",
                category: "elon",
                categoryName: "E'lonlar va Tanlovlar",
                date: "10-Oktabr, 2026",
                readTime: "3 daqiqa",
                views: 2340,
                likes: 120,
                liked: false,
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
                source: "Yoshlar ishlari agentligi",
                summary: "Maktab o'quvchilari internet va ijtimoiy tarmoqlarda huquqiy madaniyat, odob-axloq hamda Konstitutsiya mavzusida 1 daqiqalik qisqa videoroliklar bilan ishtirok etishlari mumkin.",
                content: `
                    <p class="font-semibold text-slate-800 dark:text-slate-100">Yoshlar ishlari agentligi va portalimiz hamkorligida ijodkor o'quvchilar uchun katta tanlov e'lon qilinadi.</p>
                    <p>Bosh mukofot: Eng zamonaviy noutbuk va diplom!</p>
                `
            },
            {
                id: 7, title: "O'quvchining asosiy huquqlari: ta'lim, himoya va fikr bildirish", category: "huquq", categoryName: "Qonun va Huquq",
                date: "Ma'rifiy qo'llanma", readTime: "4 daqiqa", views: 0, likes: 0, liked: false,
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
                source: "Bolalar huquqlari bo'yicha ma'rifiy material",
                summary: "O'quvchi ta'lim olish, hurmat bilan muomala qilinish va xavfsiz muhitda bo'lish huquqlariga ega.",
                content: `<p><strong>Ta'lim olish huquqi.</strong> Har bir bola ta'lim olish va o'z qobiliyatlarini rivojlantirish imkoniga ega bo'lishi kerak.</p><p><strong>Himoya huquqi.</strong> Zo'ravonlik, tahqirlash va kamsitish holatlari e'tiborsiz qoldirilmasligi kerak. Ishonchli katta, maktab rahbariyati yoki vakolatli idoraga xabar berish mumkin.</p><p><strong>Fikr bildirish.</strong> O'quvchi o'z fikrini odob doirasida bildirishni va boshqalarning fikrini tinglashni o'rganadi.</p><p><strong>Rasmiy manba:</strong> <a class="text-sky-600 underline" href="https://lex.uz" target="_blank" rel="noopener noreferrer">LexUZ — qonunchilik bazasi</a>.</p>`
            },
            {
                id: 8, title: "Internetda xavfsiz bo'lish: shaxsiy ma'lumot va kiberbulling", category: "tarbiya", categoryName: "Ma'naviyat va Odob",
                date: "Ma'rifiy qo'llanma", readTime: "3 daqiqa", views: 0, likes: 0, liked: false,
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
                source: "Raqamli xavfsizlik bo'yicha ma'rifiy material",
                summary: "Parol, telefon raqami, manzil va tasdiqlash kodlarini begonalarga bermang. Internetdagi haqoratni ishonchli kattaga ayting.",
                content: `<p><strong>Shaxsiy ma'lumotlar.</strong> Parol va SMS tasdiqlash kodini hech kimga yubormang. Ijtimoiy tarmoqlarda manzil yoki hujjat suratlarini ochiq ulashmang.</p><p><strong>Kiberbullingga javob.</strong> Haqorat bilan javob qaytarmang. Xabarlarni dalil sifatida saqlang, akkauntni bloklang va platformaga shikoyat qiling. Vaziyat davom etsa, ota-ona yoki o'qituvchiga ayting.</p><p><strong>Raqamli odob:</strong> boshqalarni masxara qiluvchi rasm yoki xabarni ruxsatsiz tarqatmang.</p>`
            },
            {
                id: 9, title: "Odobli muloqot va nizolarni tinch yo'l bilan hal qilish", category: "tarbiya", categoryName: "Ma'naviyat va Odob",
                date: "Ma'rifiy qo'llanma", readTime: "3 daqiqa", views: 0, likes: 0, liked: false,
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
                source: "Tarbiya bo'yicha ma'rifiy material",
                summary: "Faol tinglash, muloyim so'zlash, uzr so'rash va kelishuv izlash sinfda sog'lom muhit yaratadi.",
                content: `<p><strong>1. Tinglang.</strong> Suhbatdoshingiz gapini bo'lmasdan, uning fikrini tushunishga harakat qiling.</p><p><strong>2. Ayblamasdan gapiring.</strong> “Sen doim...” deyish o'rniga, “Bu holat menga yoqmadi, keling, yechim topaylik” deb ayting.</p><p><strong>3. Kelishuv izlang.</strong> Muammo hal bo'lmasa, sinf rahbari yoki ishonchli kattadan yordam so'rang. Zo'ravonlikni oddiy nizo deb qabul qilmang.</p>`
            },
            {
                id: 10, title: "Konstitutsiyani o'rganish: huquq bilan birga mas'uliyat ham bor", category: "huquq", categoryName: "Qonun va Huquq",
                date: "Ma'rifiy qo'llanma", readTime: "4 daqiqa", views: 0, likes: 0, liked: false,
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
                source: "Huquqiy savodxonlik bo'yicha ma'rifiy material",
                summary: "Konstitutsiya inson huquqlari, erkinliklari, davlat tuzilishi va burchlariga oid asosiy qoidalarni belgilaydi.",
                content: `<p>Konstitutsiyani o'rganishda modda raqamini yodlash bilan cheklanmay, uning mazmunini tushunish muhim.</p><ul class="list-disc pl-5 space-y-1"><li>Huquq va erkinliklar boshqa insonlarning huquqlarini poymol qilishga ruxsat bermaydi.</li><li>Qonunlarga rioya qilish va boshqalarning qadr-qimmatini hurmat qilish muhim.</li><li>Huquqiy ma'lumotni rasmiy hujjatdan tekshirish odatini shakllantiring.</li></ul><p><strong>Rasmiy manbalar:</strong> <a class="text-sky-600 underline" href="https://lex.uz" target="_blank" rel="noopener noreferrer">LexUZ</a> va <a class="text-sky-600 underline" href="https://constitution.uz" target="_blank" rel="noopener noreferrer">constitution.uz</a>.</p>`
            }
        ];
        let currentActiveNewsCategory = 'all';
        let currentModalNewsId = null;
        let modalFontSize = 14;
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            loadBookPage(0);
            renderNewsCards();
            renderHomeNewsCards();
        });
        function showToast(message, isSuccess = true) {
            const toast = document.getElementById('toast');
            const toastText = document.getElementById('toast-text');
            const toastIcon = document.getElementById('toast-icon');
            toastText.innerText = message;
            if (isSuccess) {
                toastIcon.setAttribute('data-lucide', 'check-circle');
                toastIcon.className = 'w-4 h-4 text-emerald-400 dark:text-emerald-500';
            } else {
                toastIcon.setAttribute('data-lucide', 'alert-circle');
                toastIcon.className = 'w-4 h-4 text-amber-400 dark:text-amber-500';
            }
            lucide.createIcons();
            toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-10');
            toast.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-10');
            }, 3000);
        }
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(`tab-${tabId}`);
            if (target) target.classList.remove('hidden');
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-sky-600', 'bg-sky-50', 'dark:bg-slate-800', 'dark:text-sky-400');
                btn.classList.add('text-slate-600', 'dark:text-slate-300');
            });
            const activeDesktopBtn = document.getElementById(`nav-${tabId}`);
            if (activeDesktopBtn) {
                activeDesktopBtn.classList.remove('text-slate-600', 'dark:text-slate-300');
                activeDesktopBtn.classList.add('text-sky-600', 'bg-sky-50', 'dark:bg-slate-800', 'dark:text-sky-400');
            }
            document.querySelectorAll('.bottom-nav-item').forEach(btn => {
                btn.classList.remove('text-sky-600', 'dark:text-sky-400', 'font-bold');
                btn.classList.add('text-slate-500', 'dark:text-slate-400', 'font-medium');
            });
            const activeBottomBtn = document.getElementById(`bottom-nav-${tabId}`);
            if (activeBottomBtn) {
                activeBottomBtn.classList.remove('text-slate-500', 'dark:text-slate-400', 'font-medium');
                activeBottomBtn.classList.add('text-sky-600', 'dark:text-sky-400', 'font-bold');
            }
            document.getElementById('mobile-menu').classList.add('hidden');
            const hamburger = document.getElementById('hamburger-icon');
            if (hamburger) hamburger.setAttribute('data-lucide', 'menu');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            lucide.createIcons();
        }
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isHidden = menu.classList.contains('hidden');
            const hamburger = document.getElementById('hamburger-icon');
            if (isHidden) {
                menu.classList.remove('hidden');
                if (hamburger) hamburger.setAttribute('data-lucide', 'x');
            } else {
                menu.classList.add('hidden');
                if (hamburger) hamburger.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        }
        function toggleDarkMode() {
            document.documentElement.classList.toggle('dark');
        }
        function renderHomeNewsCards() {
            const container = document.getElementById('home-news-cards');
            if (!container) return;
            const top3 = newsArticles.slice(0, 3);
            container.innerHTML = top3.map(item => `
                <div class="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div class="relative overflow-hidden cursor-pointer" onclick="openNewsModal(${item.id})">
                            <img src="${item.image}" alt="${item.title}" class="w-full h-44 object-cover group-hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/0284c7/fff?text=Yangilik'">
                            <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 shadow">
                                ${item.categoryName}
                            </span>
                        </div>
                        <div class="p-4 sm:p-5 space-y-2">
                            <div class="flex items-center justify-between text-[11px] text-slate-500">
                                <span>${item.date}</span>
                                <span>${item.readTime}</span>
                            </div>
                            <h3 onclick="openNewsModal(${item.id})" class="font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2 hover:text-sky-600 dark:hover:text-sky-400 transition cursor-pointer">
                                ${item.title}
                            </h3>
                            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                ${item.summary}
                            </p>
                        </div>
                    </div>
                    <div class="px-4 sm:px-5 pb-4 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                        <button onclick="openNewsModal(${item.id})" class="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
                            Batafsil o'qish <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                        <button onclick="toggleNewsLike(${item.id}, event)" class="flex items-center gap-1 text-xs text-slate-500 hover:text-red-500 transition">
                            <i data-lucide="heart" class="w-4 h-4 ${item.liked ? 'text-red-500 fill-red-500' : ''}"></i>
                            <span>${item.likes}</span>
                        </button>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }
        function renderNewsCards(filteredList = null) {
            const container = document.getElementById('news-grid-container');
            const emptyState = document.getElementById('news-empty-state');
            const countBadge = document.getElementById('news-count-badge');
            if (!container) return;
            const list = filteredList !== null ? filteredList : getFilteredNews();
            if (list.length === 0) {
                container.innerHTML = '';
                emptyState.classList.remove('hidden');
                if (countBadge) countBadge.innerText = "0 ta yangilik";
                return;
            }
            emptyState.classList.add('hidden');
            if (countBadge) countBadge.innerText = `${list.length} ta yangilik`;
            container.innerHTML = list.map(item => {
                let badgeColorClass = "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300";
                if (item.category === 'bsb') badgeColorClass = "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300";
                if (item.category === 'tarbiya') badgeColorClass = "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300";
                if (item.category === 'elon') badgeColorClass = "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300";
                return `
                    <div class="news-item-card bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div class="relative overflow-hidden cursor-pointer" onclick="openNewsModal(${item.id})">
                                <img src="${item.image}" alt="${item.title}" class="w-full h-48 sm:h-52 object-cover hover:scale-105 transition duration-500" onerror="this.src='https://placehold.co/600x400/0284c7/fff?text=Yangilik'">
                                <span class="absolute top-3 left-3 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${badgeColorClass} shadow-md backdrop-blur-md">
                                    ${item.categoryName}
                                </span>
                            </div>
                            <div class="p-5 space-y-3">
                                <div class="flex items-center justify-between text-xs text-slate-500">
                                    <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5"></i> ${item.date}</span>
                                    <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5"></i> ${item.readTime}</span>
                                </div>
                                <h3 onclick="openNewsModal(${item.id})" class="font-bold text-base sm:text-lg text-slate-900 dark:text-white line-clamp-2 hover:text-sky-600 dark:hover:text-sky-400 transition cursor-pointer leading-snug">
                                    ${item.title}
                                </h3>
                                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                                    ${item.summary}
                                </p>
                            </div>
                        </div>
                        <div class="p-5 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                            <button onclick="openNewsModal(${item.id})" class="px-4 py-2 rounded-xl bg-sky-50 dark:bg-slate-700/60 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 text-sky-600 dark:text-sky-300 font-bold text-xs flex items-center gap-1.5 transition">
                                <span>Batafsil o'qish</span> <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </button>
                            <div class="flex items-center gap-3">
                                <span class="flex items-center gap-1 text-xs text-slate-400">
                                    <i data-lucide="eye" class="w-3.5 h-3.5"></i> ${item.views}
                                </span>
                                <button onclick="toggleNewsLike(${item.id}, event)" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 hover:text-red-500 transition flex items-center gap-1 text-xs">
                                    <i data-lucide="heart" class="w-4 h-4 ${item.liked ? 'text-red-500 fill-red-500' : ''}"></i>
                                    <span>${item.likes}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            lucide.createIcons();
        }
        function getFilteredNews() {
            const query = (document.getElementById('news-search-input')?.value || '').toLowerCase().trim();
            return newsArticles.filter(item => {
                const matchesCat = currentActiveNewsCategory === 'all' || item.category === currentActiveNewsCategory;
                const matchesSearch = !query || item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query);
                return matchesCat && matchesSearch;
            });
        }
        function setNewsCategory(cat) {
            currentActiveNewsCategory = cat;
            document.querySelectorAll('.news-cat-btn').forEach(btn => {
                btn.className = "news-cat-btn px-4 py-2 rounded-xl font-semibold whitespace-nowrap bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 transition";
            });
            const active = document.getElementById(`cat-btn-${cat}`);
            if (active) {
                active.className = "news-cat-btn px-4 py-2 rounded-xl font-bold whitespace-nowrap bg-sky-600 text-white shadow-sm transition";
            }
            renderNewsCards();
        }
        function filterNews() {
            const query = document.getElementById('news-search-input').value;
            const clearBtn = document.getElementById('news-clear-search');
            if (query.trim()) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
            }
            renderNewsCards();
        }
        function clearNewsSearch() {
            const input = document.getElementById('news-search-input');
            if (input) input.value = '';
            document.getElementById('news-clear-search').classList.add('hidden');
            setNewsCategory('all');
        }
        function toggleNewsLike(id, event) {
            if (event) event.stopPropagation();
            const article = newsArticles.find(a => a.id === id);
            if (!article) return;
            article.liked = !article.liked;
            if (article.liked) {
                article.likes++;
                showToast("Yangilik yoqtirildi! ❤️");
            } else {
                article.likes--;
            }
            renderNewsCards();
            renderHomeNewsCards();
        }
        function openNewsModal(id) {
            const item = newsArticles.find(a => a.id === id);
            if (!item) return;
            currentModalNewsId = id;
            item.views++;
            document.getElementById('modal-news-title').innerText = item.title;
            document.getElementById('modal-news-image').src = item.image;
            document.getElementById('modal-news-badge').innerText = item.categoryName;
            document.getElementById('modal-news-date').innerText = item.date;
            document.getElementById('modal-news-views').innerText = item.views;
            document.getElementById('modal-news-readtime').innerText = item.readTime + " o'qish";
            document.getElementById('modal-news-source').innerText = item.source;
            document.getElementById('modal-news-content').innerHTML = item.content;
            modalFontSize = 14;
            document.getElementById('modal-news-content').style.fontSize = `${modalFontSize}px`;
            document.getElementById('news-modal').classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            lucide.createIcons();
        }
        function closeNewsModal() {
            document.getElementById('news-modal').classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
            renderNewsCards();
            renderHomeNewsCards();
        }
        function changeFontSize(delta) {
            modalFontSize = Math.max(12, Math.min(22, modalFontSize + delta * 2));
            document.getElementById('modal-news-content').style.fontSize = `${modalFontSize}px`;
        }
        function shareCurrentNews(platform) {
            const item = newsArticles.find(a => a.id === currentModalNewsId);
            if (!item) return;
            const url = window.location.href;
            const text = `${item.title} — Huquq va Tarbiya portali yangiligi`;
            if (platform === 'telegram') {
                const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                window.open(tgUrl, '_blank');
            }
        }
        function copyNewsLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast("Yangilik havolasi nusxalandi!");
            }).catch(() => {
                showToast("Nusxalandi!");
            });
        }
        function submitNewsSuggestion() {
            const input = document.getElementById('news-contact-input');
            const val = input.value.trim();
            if (!val) {
                showToast("Iltimos, telefon yoki Telegram kontakt kiriting!", false);
                return;
            }
            input.value = '';
            showToast("Rahmat! Taklifingiz tahririyatga qabul qilindi.");
        }
        // ================= 3D Constitution Book Logic =================
        const bookPages = [
            {
                chapter: "1-Bob. Muqaddima va Davlat Suvereniteti",
                content: `
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">1-Modda. Davlat Tuzilishi</h3>
                    <p class="text-xs sm:text-sm leading-relaxed mb-4">O'zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlat. Davlatning rasmiy nomi "O'zbekiston Respublikasi" va "O'zbekiston" teng ma'nolidir.</p>
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">13-Modda. Inson Qadri</h3>
                    <p class="text-xs sm:text-sm leading-relaxed">O'zbekiston Respublikasida demokratiya umuminsoniy tamoyillarga asoslanadi, ularga ko'ra inson, uning hayoti, erkinligi, sha'ni va qadr-qimmati oliy qadriyat hisoblanadi.</p>
                `
            },
            {
                chapter: "2-Bob. Inson va Fuqaroning Asosiy Huquqlari",
                content: `
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">25-Modda. Yashash Huquqi</h3>
                    <p class="text-xs sm:text-sm leading-relaxed mb-4">Yashash huquqi har bir insonning daxlsiz huquqidir. Inson hayotiga suiqasd qilish eng og'ir jinoyatdir. O'zbekiston Respublikasida o'lim jazosi qat'iyan taqiqlanadi.</p>
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">26-Modda. Inson Qadr-Qimmati</h3>
                    <p class="text-xs sm:text-sm leading-relaxed">Insonning sha'ni va qadr-qimmati daxlsizdir. Hech narsa ularni kamsitish uchun asos bo'lishi mumkin emas.</p>
                `
            },
            {
                chapter: "3-Bob. Ijtimoiy Huquqlar va Ta'lim Olish Kafolati",
                content: `
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">50-Modda. Ta'lim Olish Huquqi</h3>
                    <p class="text-xs sm:text-sm leading-relaxed mb-4">Har kim ta'lim olish huquqiga ega. Davlat bepul umumiy o'rta ta'lim va boshlang'ich kasb-hunar ta'limi olinishini kafolatlaydi. Umumiy o'rta ta'lim majburiydir.</p>
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">52-Modda. O'qituvchilarning Huquqiy Maqomi</h3>
                    <p class="text-xs sm:text-sm leading-relaxed">O'zbekiston Respublikasida o'qituvchining mehnati jamiyat va davlatni rivojlantirish, sog'lom, barkamol avlodni shakllantirish hamda tarbiyalashning asosi sifatida e'tirof etiladi va himoya qilinadi.</p>
                `
            },
            {
                chapter: "4-Bob. Oila, Yoshlar va Jamiyat",
                content: `
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">76-Modda. Oila Asoslari</h3>
                    <p class="text-xs sm:text-sm leading-relaxed mb-4">Oila jamiyatning asosiy bo'g'inidir hamda u jamiyat va davlat muhofazasida bo'lish huquqiga ega.</p>
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">77-Modda. Ota-onaning Mas'uliyati</h3>
                    <p class="text-xs sm:text-sm leading-relaxed">Ota-onalar o'z farzandlarini voyaga yetguniga qadar boqishi, ularning tarbiyasi, ta'lim olishi, barkamol va sog'lom rivojlanishi haqida g'amxo'rlik qilishga majburdirlar.</p>
                `
            },
            {
                chapter: "5-Bob. Davlat Hokimiyati va Qonun Ustuvorligi",
                content: `
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">105-Modda. Oliy Majlis</h3>
                    <p class="text-xs sm:text-sm leading-relaxed mb-4">O'zbekiston Respublikasining Oliy Majlisi oliy davlat vakillik organi bo'lib, qonun chiqaruvchi hokimiyatni amalga oshiradi.</p>
                    <h3 class="text-lg sm:text-xl font-extrabold text-sky-600 dark:text-sky-400 mb-3">128-Modda. Mustaqil Sud Hokimiyati</h3>
                    <p class="text-xs sm:text-sm leading-relaxed">O'zbekiston Respublikasida sud hokimiyati qonun chiqaruvchi va ijro etuvchi hokimiyatlardan mustaqil holda ish yuritadi.</p>
                `
            }
        ];
        let currentPageIndex = 0;
        let isSpeaking = false;
        function loadBookPage(index) {
            currentPageIndex = index;
            const contentDiv = document.getElementById('book-content');
            contentDiv.innerHTML = `
                <div class="text-[11px] font-extrabold text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-2">${bookPages[index].chapter}</div>
                ${bookPages[index].content}
            `;
            document.getElementById('page-indicator').innerText = `Sahifa ${index + 1} / ${bookPages.length}`;
            document.getElementById('prev-btn').disabled = index === 0;
            document.getElementById('next-btn').disabled = index === bookPages.length - 1;
            document.getElementById('book-chapter-select').value = index;
        }
        function nextPage() {
            if (currentPageIndex < bookPages.length - 1) loadBookPage(currentPageIndex + 1);
        }
        function prevPage() {
            if (currentPageIndex > 0) loadBookPage(currentPageIndex - 1);
        }
        function jumpToChapter(index) {
            loadBookPage(parseInt(index));
        }
        function speakCurrentPage() {
            if (!('speechSynthesis' in window)) {
                showToast("Brauzeringiz ovozli o'qishni qo'llab-quvvatlamaydi", false);
                return;
            }
            if (isSpeaking) {
                window.speechSynthesis.cancel();
                isSpeaking = false;
                document.getElementById('audio-btn-text').innerText = "Ovozli o'qish";
                return;
            }
            window.speechSynthesis.cancel();
            const text = document.getElementById('book-content').innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'uz-UZ';
            utterance.rate = 0.95;
            utterance.onstart = () => {
                isSpeaking = true;
                document.getElementById('audio-btn-text').innerText = "To'xtatish";
            };
            utterance.onend = () => {
                isSpeaking = false;
                document.getElementById('audio-btn-text').innerText = "Ovozli o'qish";
            };
            utterance.onerror = () => {
                isSpeaking = false;
                document.getElementById('audio-btn-text').innerText = "Ovozli o'qish";
            };
            window.speechSynthesis.speak(utterance);
        }
        function handleScenarioChoice(choice) {
            const resultDiv = document.getElementById('scenario-result');
            resultDiv.classList.remove('hidden');
            if (choice === 1) {
                resultDiv.className = "p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs sm:text-sm leading-relaxed text-emerald-100";
                resultDiv.innerHTML = "<strong>Barakalla! To'g'ri va oqilana qaror.</strong> Kattalarga joy berish va muomala madaniyatiga amal qilish insonning yuksak ma'naviyati va odobini ko'rsatadi.";
                showToast("To'g'ri axloqiy qaror qabul qilindi!");
            } else {
                resultDiv.className = "p-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-xs sm:text-sm leading-relaxed text-amber-100";
                resultDiv.innerHTML = "<strong>Afsuski, bu noto'g'ri tanlov!</strong> Kattalarni e'tiborsiz qoldirish milliy qadriyatlarimiz va axloq qoidalariga to'g'ri kelmaydi.";
                showToast("Bunday vaziyatda kattalarga hurmat ko'rsatish lozim!", false);
            }
        }
        function filterVideos(cat, clickedButton) {
            document.querySelectorAll('.video-filter-btn').forEach(b => {
                b.className = "video-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300";
            });
            if (clickedButton) clickedButton.className = "video-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-600 text-white";
            document.querySelectorAll('.video-card').forEach(card => {
                if (cat === 'all' || card.dataset.category === cat) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
        function openVideoModal(title, url) {
            document.getElementById('video-modal-title').innerText = title;
            document.getElementById('video-modal-iframe').src = url;
            document.getElementById('video-modal').classList.remove('hidden');
        }
        function closeVideoModal() {
            document.getElementById('video-modal-iframe').src = '';
            document.getElementById('video-modal').classList.add('hidden');
        }
        const quizData = [
            {
                q: "Yangilangan O'zbekiston Respublikasi Konstitutsiyasida nechta modda mavjud?",
                options: ["128 ta modda", "155 ta modda", "180 ta modda", "100 ta modda"],
                correct: 1
            },
            {
                q: "Maktablarda BSB qisqartmasi nimani anglatadi?",
                options: ["Bo'lim yuzasidan baholash", "Boshlang'ich sinf bilimi", "Barcha sinflar bahosi", "Boshqaruv sinov balli"],
                correct: 0
            },
            {
                q: "Konstitutsiyaga ko'ra kimning hayoti, sha'ni va daxlsizligi oliy qadriyat hisoblanadi?",
                options: ["Faqat davlat idoralarining", "Inson va uning qadr-qimmati", "Siyosiy partiyalarning", "Tashkilotlarning"],
                correct: 1
            },
            {
                q: "Sharqona muomala odobida kattalarga birinchi bo'lib nima qilinadi?",
                options: ["Salom beriladi", "Savol beriladi", "Kutiladi", "Indamay o'tib ketiladi"],
                correct: 0
            },
            {
                q: "O'zbekistonda bepul ta'lim olishning qaysi bosqichi davlat tomonidan kafolatlanadi?",
                options: ["Umumiy o'rta ta'lim", "Xususiy repetitorlik", "Faqat pullik kurslar", "Magistratura"],
                correct: 0
            }
        ];
        let currentQuizIndex = 0;
        let score = 0;
        let selectedAnswer = null;
        function startQuiz() {
            const nameInput = document.getElementById('student-name-input');
            const studentName = nameInput.value.trim() || "O'quvchi";
            document.getElementById('cert-student-name').innerText = studentName;
            currentQuizIndex = 0;
            score = 0;
            document.getElementById('quiz-start-screen').classList.add('hidden');
            document.getElementById('quiz-result-screen').classList.add('hidden');
            document.getElementById('quiz-active-screen').classList.remove('hidden');
            loadQuizQuestion();
        }
        function loadQuizQuestion() {
            selectedAnswer = null;
            const q = quizData[currentQuizIndex];
            document.getElementById('quiz-progress-text').innerText = `Savol ${currentQuizIndex + 1} / ${quizData.length}`;
            document.getElementById('quiz-question').innerText = q.q;
            const optionsContainer = document.getElementById('quiz-options');
            optionsContainer.innerHTML = '';
            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "w-full p-3 sm:p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-left text-xs sm:text-sm font-semibold hover:bg-sky-50 dark:hover:bg-slate-700 transition flex items-center justify-between";
                btn.innerHTML = `<span>${opt}</span> <i data-lucide="circle" class="w-4 h-4 text-slate-400"></i>`;
                btn.onclick = () => selectOption(idx, btn);
                optionsContainer.appendChild(btn);
            });
            lucide.createIcons();
        }
        function selectOption(idx, btn) {
            selectedAnswer = idx;
            document.querySelectorAll('#quiz-options button').forEach(b => {
                b.classList.remove('border-sky-600', 'bg-sky-50', 'dark:bg-slate-700', 'text-sky-600');
            });
            btn.classList.add('border-sky-600', 'bg-sky-50', 'dark:bg-slate-700', 'text-sky-600');
        }
        function submitAnswer() {
            if (selectedAnswer === null) {
                showToast("Iltimos, variantlardan birini tanlang!", false);
                return;
            }
            if (selectedAnswer === quizData[currentQuizIndex].correct) {
                score++;
            }
            currentQuizIndex++;
            if (currentQuizIndex < quizData.length) {
                loadQuizQuestion();
            } else {
                showQuizResult();
            }
        }
        function showQuizResult() {
            document.getElementById('quiz-active-screen').classList.add('hidden');
            document.getElementById('quiz-result-screen').classList.remove('hidden');
            const percentage = Math.round((score / quizData.length) * 100);
            document.getElementById('quiz-score-display').innerText = `${percentage}% (${score} / ${quizData.length})`;
            document.getElementById('cert-id-badge').innerText = `ID: BSB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
            showToast("Test yakunlandi!");
        }
        function restartQuiz() {
            document.getElementById('quiz-result-screen').classList.add('hidden');
            document.getElementById('quiz-start-screen').classList.remove('hidden');
        }
        function filterDictionary() {
            const query = document.getElementById('dictionary-search').value.toLowerCase();
            document.querySelectorAll('.dict-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                if (text.includes(query)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }
        function escapeHTML(value) {
            return String(value).replace(/[&<>"']/g, char => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            })[char]);
        }
        function quickPrompt(text) {
            document.getElementById('chat-input').value = text;
            handleChatSubmit(new Event('submit'));
        }
        function handleChatSubmit(e) {
            if (e) e.preventDefault();
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            if (!text) return;
            const messagesContainer = document.getElementById('chat-messages');
            const userBubble = document.createElement('div');
            userBubble.className = "flex gap-2.5 justify-end";
            userBubble.innerHTML = `
                <div class="bg-sky-600 text-white p-3 rounded-2xl rounded-tr-none text-xs sm:text-sm max-w-[85%] shadow-sm leading-relaxed">
                    ${escapeHTML(text)}
                </div>
            `;
            messagesContainer.appendChild(userBubble);
            input.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            setTimeout(() => {
                let botReply = "Savolingiz uchun tashakkur! O'zbekiston Respublikasi qonunlari va maktab standartlariga ko'ra, inson huquqlari hamda ma'naviy tarbiya oliy o'rinda turadi.";
                const lower = text.toLowerCase();
                if (lower.includes('1-modda') || lower.includes('birinchi modda')) {
                    botReply = "O'zbekiston Respublikasi Konstitutsiyasining 1-moddasiga ko'ra: O'zbekiston — suveren, demokratik, huquqiy, ijtimoiy va dunyoviy davlatdir.";
                } else if (lower.includes('bsb') || lower.includes('baholash') || lower.includes('chsb')) {
                    botReply = "BSB (Bo'lim yuzasidan baholash) va CHSB (Choraklik baholash) — o'quvchilarning darslardagi haqiqiy bilim va amaliy ko'nikmalarini baholash uchun o'tkaziladi. Testlar va yozma ishlar shaffof tarzda elektron baholanadi.";
                } else if (lower.includes('yangilik') || lower.includes('xabar')) {
                    botReply = "Eng so'nggi yangiliklar: 2026-yilgi BSB baholash qoidalari e'lon qilindi, Yangi Konstitutsiya bo'yicha maktab tanlovi va 'Milliy tarbiya oyligi' start oldi. Yuqoridagi 'Yangiliklar' bo'limida barchasini to'liq o'qishingiz mumkin!";
                } else if (lower.includes('odob') || lower.includes('tarbiya') || lower.includes('hurmat')) {
                    botReply = "Sharqona axloq va tarbiyaning asosi — kattalarga hurmat, kichiklarga shafqat ko'rsatishdir. Shirinso'zlik, ota-ona hurmati va vatanparvarlik har bir o'quvchining faxridir.";
                } else if (lower.includes('ta\'lim') || lower.includes('50') || lower.includes('maktab')) {
                    botReply = "Konstitutsiyaning 50-moddasiga ko'ra, har bir fuqaro ta'lim olish huquqiga ega. Bepul umumiy o'rta ta'lim davlat kafolatidadir.";
                }
                const botBubble = document.createElement('div');
                botBubble.className = "flex gap-2.5 max-w-[85%]";
                botBubble.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-sm">AI</div>
                    <div class="bg-white dark:bg-slate-800 p-3 sm:p-3.5 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 shadow-sm leading-relaxed">
                        ${botReply}
                    </div>
                `;
                messagesContainer.appendChild(botBubble);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 500);
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeNewsModal();
                closeVideoModal();
            }
        });
