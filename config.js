const landingConfig = {
    // 1. Core Integration Configs (Global)
    web3formsAccessKey: "0874c239-929a-4155-8e5e-01f663e946a4",
    heroImg: "images/01.webp",
    saleBadge: "-50%",
    currencySymbol: "AZN",

    // Global Pricing Configuration (Clean strings processed by JS dynamically)
    packages: [
        {
            id: "base",
            newPrice: "13.99",
            oldPrice: "21.99",
            isPopular: false
        },
        {
            id: "double",
            newPrice: "22.99",
            oldPrice: "35.99",
            isPopular: true,
            isActiveDefault: true
        }
    ],

    // Global Narrative Image/Structure
    narrativeGrid: [
        {
            type: "image",
            src: "images/02.webp",
        },
        {
            type: "text",
            translationKey: "narrativeText1"
        },
        {
            type: "spec-overlay",
            src: "images/03.webp",
            align: "left",
            showOverlay: false // Glass Overlay disabled for visual clarity
        },
        {
            type: "text",
            translationKey: "narrativeText2"
        },
        {
            type: "spec-overlay",
            src: "images/04.webp",
            align: "right",
            showOverlay: false
        },
        {
            type: "spec-overlay",
            src: "images/prod_1.webp",
            align: "left",
            showOverlay: false
        }
    ],

    // 2. Translatable Database (i18n)
    i18n: {
        az: {
            shippingLabelBase: "Çatdırılma: +3 ₼",
            shippingLabelDouble: "🎉 PULSUZ ÇATDIRILMA!",
            fromName: "Pest Reject Landing - AZ",
            subjectLine: "Yeni Sifariş — Pest Reject",
            
            tickerItems: [
                "⚡ HƏR BİR BÖLGƏYƏ TEZ ÇATDIRILMA",
                "QAPIDA ÖDƏNİŞ",
                "AİLƏ VƏ EV HEYVANLARI ÜÇÜN 100% TƏHLÜKƏSİZ"
            ],
            
            heroTitle: "Pest Reject ultrasəs gəmirici və həşərat qovucu",
            timerTitle: "Xüsusi qiymət hələ də etibarlıdır:",
            timerHours: "Saat",
            timerMinutes: "Dəqiqə",
            timerSeconds: "Saniyə",

            packageNames: {
                base: "1 ədəd (Baz dəst)",
                double: "2 ədəd (Bütün evin maksimum qorunması)"
            },
            packageDataAttrs: {
                base: "1 ədəd (Baz dəst) + 3 ₼ çatdırılma",
                double: "2 ədəd (Maksimum qorunma dəsti) + PULSUZ ÇATDIRILMA"
            },
            popularRibbon: "Ən çox satılan",

            stockWarning: "Xüsusi promo-qiymətlə cəmi <span class='outlined-badge'>8 ədəd</span> qaldı!",
            deliveryTitle: "Pulsuz kuryer çatdırılması: 0 ₼",
            deliveryDesc: "Ödəniş etməzdən əvvəl bağlamanı və cihazı birbaşa əlinizdə yoxlayın.",
            ctaText: "Sifariş vermək",

            narrativeText1: "<b>Pest Reject elektron qovucusu</b> — təhlükəli zəhərlər, tozlar və tələlərdən istifadə ehtiyacını aradan qaldıran müasir cihazdır. Cihaz yaşayış, bağ evi və iş yerlərində mütləq təmizlik və rahatlığı təmin edir.",
            narrativeText2: "Cihazın ultrasəsi insan qulağı tərəfindən qəbul edilmir və pişiklər, itlər və digər böyük ev heyvanları üçün tamamilə zərərsizdir, lakin zərərvericilərin təsir radiusunda qalmasını dözülməz edir.",

            specsTitle: "Pest Reject texniki xüsusiyyətləri",
            technicalSpecs: [
                { label: "Cihazın növü", value: "Ultrasəs + Elektromaqnit qovucu" },
                { label: "Zərərvericilərdən qorunma", value: "Gəmiricilər (siçanlar, siçovullar), Həşəratlar (tarakanlar, hörümçəklər, ağcaqanadlar, taxtabitilər, milçəklər)" },
                { label: "Təsir sahəsi", value: "80 ilə 120 kv. metr arası (bir cihaz üçün)" },
                { label: "Enerji təchizatı", value: "Şəbəkə 220V, standart rozetka" },
                { label: "Təhlükəsizlik", value: "Toksinlər, kimyəvi maddələr və radiasiya yoxdur. Uşaqlar üçün təhlükəsizdir" }
            ],

            reviewsSectionTitle: "Alıcılarımızın rəyləri",
            reviews: [
                {
                    stars: "★★★★★",
                    author: "Olqa V.",
                    userPhoto: "images/review-1.webp",
                    text: "Birinci mərtəbədə yaşayırıq, zirzəmidən gələn tarakanlar bizi bezdirmişdi. Pest Reject-i birbaşa dəhlizə taxdıq. İlk üç gün elə bil daha da çoxaldılar — görünür yuvalarından çıxmağa başlamışdılar. Amma 2 həftədən sonra tamamilə yox oldular! Əla cihazdır, tövsiyə edirəm!"
                },
                {
                    stars: "★★★★★",
                    author: "Vüqar",
                    userPhoto: "images/review-2.webp",
                    text: "Bağ evi üçün siçanlara qarşı aldım. Hər payız eyni problem olurdu. Hər mərtəbəyə bir cihaz qoydum. Artıq bir aydır ki, nə bir səs var, nə də iz. Cihazlar səssiz işləyir, çox az elektrik enerjisi sərf edir."
                },
                {
                    stars: "★★★★★",
                    author: "Səbinə",
                    userPhoto: "images/review-3.webp",
                    text: "Evdə pişiyimiz var, ona görə də kimyəvi maddə və ya zəhər istifadə etmək qətiyyən olmazdı. Cihaz səssiz işləyir, pişik heç bir reaksiya vermir, qulaqlarını qısmır. Evdə ağcaqanad və milçəklərin də xeyli azaldığını hiss etdik."
                }
            ],

            faqTitle: "Tez-tez verilən suallar",
            faqs: [
                {
                    question: "İlk nəticələri nə vaxt gözləmək olar?",
                    answer: "İlk nəticələr (zərərvericilərin sığınacaqlarını tərk edərək aktivləşməsi) bir neçə gün ərzində nəzərə çarpır. Yaşayış sahəsinin həşərat və gəmiricilərdən tamamilə təmizlənməsi üçün 2-4 həftə fasiləsiz işləməsi tələb olunur."
                },
                {
                    question: "Cihaz pişiklər və itlər üçün təhlükəsizdirmi?",
                    answer: "Bəli, tamamilə. Pest Reject cihazının ultrasəs tezliyi yalnız gəmiricilər və həşəratlar üçün tənzimlənib. İnsanlar, pişiklər, itlər və ev quşları bu tezliyi eşitmir və heç bir narahatlıq hiss etmirlər."
                },
                {
                    question: "Ultrasəs divarlardan keçə bilirmi?",
                    answer: "Xeyr, ultrasəs dalğaları bərk maneələrdən əks olunur və yumşaq mebellər tərəfindən udulur. Maksimum effekt üçün hər otağa bir cihaz quraşdırılması tövsiyə olunur."
                }
            ],

            checkoutTitle: "Xüsusi qiymətlə sifariş verməyə tələsin",
            checkoutSubtitle: "Aşağıdakı uyğun dəsti seçin. 50% endirim avtomatik tətbiq olunacaq.",
            labelName: "Adınız",
            labelPhone: "Əlaqə nömrəniz",
            submitBtnText: "Kampaniya ilə sifariş et",
            securityText: "🔒 Şəxsi məlumatlarınız ucdan uca şifrləmə ilə qorunur",

            footerCompany: "SmartHome Tech LLC",
            footerPhone: "TEL: +99477 602-23-22",
            footerPolicyText: "Məxfilik siyasəti",

            alertEmptyPhone: "Zəhmət olmasa, telefon nömrənizi daxil edin",
            alertMinPhone: "Telefon nömrəsi ən azı 9 simvoldan ibarət olmalıdır",
            alertMaxPhone: "Telefon nömrəsi 28 simvoldan çox olmamalıdır",
            alertPatternPhone: "Telefon nömrəsi yalnış daxil edilib. Yalnız rəqəmlər, üstəgəl, minus və mötərizələr icazə verilir.",
            alertPatternName: "Ad yalnız hərflərdən ibarət olmalıdır."
        },
        ru: {
            shippingLabelBase: "Доставка: +3 ₼",
            shippingLabelDouble: "🎉 БЕСПЛАТНАЯ ДОСТАВКА!",
            fromName: "Pest Reject Landing - RU",
            subjectLine: "Новый заказ — Pest Reject",
            
            tickerItems: [
                "⚡ БЫСТРАЯ ДОСТАВКА В ЛЮБОЙ РЕГИОН",
                "ОПЛАТА ПРИ ПОЛУЧЕНИИ",
                "100% БЕЗОПАСНО ДЛЯ СЕМЬИ И ДОМАШНИХ ЖИВОТНЫХ"
            ],
            
            heroTitle: "Ультразвуковой отпугиватель грызунов и насекомых Pest Reject",
            timerTitle: "Спеццена действует еще:",
            timerHours: "Часов",
            timerMinutes: "Минут",
            timerSeconds: "Секунд",

            packageNames: {
                base: "1 шт. (Базовый комплект)",
                double: "2 шт. (Максимальная защита всего дома)"
            },
            packageDataAttrs: {
                base: "1 шт. (Базовый комплект) + 3 ₼ доставка",
                double: "2 шт. (Комплект максимальной защиты) + БЕСПЛАТНАЯ ДОСТАВКА"
            },
            popularRibbon: "Хит продаж",

            stockWarning: "Осталось всего <span class='outlined-badge'>8 шт.</span> по специальной промо-цене!",
            deliveryTitle: "Бесплатная курьерская доставка: 0 ₼",
            deliveryDesc: "Проверка посылки и прибора до внесения оплаты прямо в руки.",
            ctaText: "Перейти к заказу",

            narrativeText1: "<b>Электронный отпугиватель Pest Reject</b> — это современный прибор, избавляющий от необходимости использовать опасные яды, порошки и ловушки. Устройство обеспечивает абсолютную чистоту и спокойствие в жилых, загородных и рабочих помещениях.",
            narrativeText2: "Ультразвук прибора не улавливается человеческим ухом и абсолютно безвреден для кошек, собак и других крупных домашних животных, однако делает невыносимым пребывание вредителей в радиусе действия.",

            specsTitle: "Технические характеристики Pest Reject",
            technicalSpecs: [
                { label: "Тип устройства", value: "Ультразвуковой + Электромагнитный отпугиватель" },
                { label: "Защита от вредителей", value: "Грызуны (мыши, крысы), Насекомые (тараканы, пауки, комары, клопы, мухи)" },
                { label: "Площадь действия", value: "от 80 до 120 кв. метров (на один прибор)" },
                { label: "Питание", value: "Сеть 220V, стандартная розетка" },
                { label: "Безопасность", value: "Без токсинов, химикатов и радиации. Безопасно для детей" }
            ],

            reviewsSectionTitle: "Отзывы наших покупателей",
            reviews: [
                {
                    stars: "★★★★★",
                    author: "Ольга В.",
                    userPhoto: "images/review-1.webp",
                    text: "Взяли в квартиру на первом этаже, задолбали насекомые из подвала лезть. Первые дня три они как взбесились, выползали даже днем, я аж расстроилась. Но в инструкции предупреждали, что это норма. Зато через две недели — идеальная чистота."
                },
                {
                    stars: "★★★★★",
                    author: "Вюгар",
                    userPhoto: "images/review-2.webp",
                    text: "Брал на дачу от мышей по осени. Главный плюс для меня — прибор вообще бесшумный, спать не мешает, голова не болит. Свою задачу выполняет спокойно."
                },
                {
                    stars: "★★★★★",
                    author: "Сабина",
                    userPhoto: "images/review-3.webp",
                    text: "У нас дома кот, поэтому химикаты или отраву рассыпать нельзя. Прибор работает тихо, кот на него ноль внимания, уши не прижимает. Заметили, что мух и комаров в комнате тоже стало намного меньше."
                }
            ],

            faqTitle: "Часто задаваемые вопросы",
            faqs: [
                {
                    question: "Как быстро ожидать первых результатов?",
                    answer: "Первые результаты (повышенная активность вредителей, покидающих убежища) заметны уже через несколько дней. Для полной очистки помещения от насекомых и грызунов требуется от 2 до 4 недель непрерывной работы."
                },
                {
                    question: "Безопасен ли прибор для кошек и собак?",
                    answer: "Да, абсолютно. Ультразвуковая частота Pest Reject настроена исключительно на грызунов и насекомых. Люди, кошки, собаки и домашняя птица этот спектр частот не слышат и не испытывают никакого дискомфорта."
                },
                {
                    question: "Может ли ультразвук проходить сквозь стены?",
                    answer: "Нет, ультразвуковые волны отражаются от твердых препятствий и поглощаются мягкой мебелью. Для максимального эффекта рекомендуется устанавливать по одному прибору в каждую жилую комнату."
                }
            ],

            checkoutTitle: "Успейте заказать по специальной цене",
            checkoutSubtitle: "Выберите подходящую комплектацию ниже. Скидка 50% применится автоматически.",
            labelName: "Ваше имя",
            labelPhone: "Контактный телефон",
            submitBtnText: "Отправить заказ по акции",
            securityText: "🔒 Ваши личные данные защищены сквозным шифрованием",

            footerCompany: "SmartHome Tech LLC",
            footerPhone: "ТЕЛ: +99477 602-23-22",
            footerPolicyText: "Политика конфиденциальности",

            alertEmptyPhone: "Пожалуйста, введите номер телефона",
            alertMinPhone: "Номер должен содержать не менее 9 символов",
            alertMaxPhone: "Номер не должен превышать 28 символов",
            alertPatternPhone: "Номер телефона введен неверно. Допускаются только цифры, плюсы, минусы и скобки.",
            alertPatternName: "Имя должно содержать только буквы."
        }
    }
};