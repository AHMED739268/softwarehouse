import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { footer } from 'framer-motion/client';
// import { FaParagraph } from 'react-icons/fa';
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    nav: {
                        solutions: "Solutions",
                        pricing: "Pricing",
                        whyzid: "Why Zid?",
                        howzid: "How Zid Serves You?",
                        enterprise: "Enterprise",
                        resources: "Resources",
                    },
                    buttons: {
                        "login": "Login",
                        "createStore": "Create a store",
                    },
                    hero: {
                        "badge": "Start selling from 9 SAR per month",
                        "title": "ALL-IN-ONE, TRUSTED PLATFORM FOR ECOMMERCE",
                        "description": "Empowering you to build, scale, and grow your online store with secure payments, global shipping, flexible financing, and impactful marketing. Everything you need to become the next leading brand in the market.",
                        "cta": "Start Your Trial"
                    },
                    features: {
                        "title": "Empowering Businesses of All Shapes and Sizes",
                        "title2": "The Zid Difference: More Than Just Tools",
                        "visionary": {
                            "title": "For the Visionaries with Big Ideas",
                            "description": "Got a million-dollar idea? Let’s make it happen. No tech skills needed—bring your passion, and we’ll support you every step of the way."
                        },
                        "local": {
                            "title": "For the Local Heroes",
                            "description": "Ready to take your physical store to the next level? Whether you're running a chic boutique, a buzzing bazaar stall, or a pop-up shop, we've got the secret sauce for your success."
                        },
                        "pioneer": {
                            "title": "For the Online Pioneers",
                            "description": "Launch and grow your e-commerce empire with our digital toolbox. World domination? Let's start with a great online store."
                        },
                        "superstar": {
                            "title": "For the Scaling Superstars",
                            "description": "Ready to leave the competition in the dust? Our advanced tools and expert support will be your rocket fuel at every stage."
                        },
                        allInOne: {
                            title: "All-in-One Commerce Solution",
                            description:
                                "Run your entire business—from physical stores to online marketplaces—all from one powerful dashboard. Less hassle, more hustle.",
                        },
                        merchantGrowth: {
                            title: "Merchant Growth Services",
                            description:
                                "Think of us as your personal business coach. Accelerate your success with our boot camps, expert advice, and tailored strategies.",
                        },
                        community: {
                            title: "Vibrant Community",
                            description:
                                "You're not in this alone. Share tips, celebrate wins, and learn from fellow entrepreneurs in our thriving merchant network.",
                        },
                        partners: {
                            title: "Powerful Partner Ecosystem",
                            description:
                                "Supercharge your Zid-powered business with cutting-edge tools and expert services from our trusted partners.",
                        },
                    },
                    storeBuilder: {
                        "title": "VERSATILE STORE BUILDER",
                        "description": "Launch your dream store online or manage your physical spot with ease. No coding nightmares, we promise.",
                        "button": "Build Your Empire"
                    },
                    storeBuilderRight: {
                        "title": "SMART STORE SOLUTION",
                        "description": "Expand your business seamlessly across online and offline channels with the right tools.",
                        "button": "Start Growing"
                    },
                    successStories: {
                        "title": "FROM DREAM TO REALITY, READ OUR SUCCESS STORIES",
                        "testimonials": [
                            {
                                "name": "Ahmed Al-Subaie",
                                "company": "CMXA",
                                "rating": 2,
                                "logo": "/images/for-visionaries.jpg",
                                "avatar": "/images/for-visionaries.jpg",
                                "review": "Zid made many things easier and created communities and integrated solutions that make you not need any other platform. The Komksa store is stable, and we haven't faced any technical issues. We benefited from all of Zid's services, such as simple payment collection with Zid Pay, shipping to the Gulf countries with Zid Ship, sales analytics, and adding discounts and promo codes."
                            },
                            {
                                "name": "Dr. Khaled Al-Sultan",
                                "company": "Sama Pharma",
                                "rating": 5,
                                "logo": "/images/for-visionaries.jpg",
                                "avatar": "/images/for-visionaries.jpg",
                                "review": "We faced technical issues like payment processing failures, server instability, especially during promotions and discounts. Once we switched to Zid, all these problems disappeared, and we were able to focus on what really matters—operations and business."
                            }
                        ]
                    },
                    features2: {
                        "visionary": {
                            "title": "For the Visionaries with Big Ideas",
                            "description": "Got a million-dollar idea? Let’s make it happen. No tech skills needed—bring your passion, and we’ll support you every step of the way."
                        },
                        "local": {
                            "title": "For the Local Heroes",
                            "description": "Ready to take your physical store to the next level? Whether you're running a chic boutique, a buzzing bazaar stall, or a pop-up shop, we've got the secret sauce for your success."
                        },
                        "pioneer": {
                            "title": "For the Online Pioneers",
                            "description": "Launch and grow your e-commerce empire with our digital toolbox. World domination? Let's start with a great online store."
                        },
                        "superstar": {
                            "title": "For the Scaling Superstars",
                            "description": "Ready to leave the competition in the dust? Our advanced tools and expert support will be your rocket fuel at every stage."
                        }
                    },
                    supportSection: {
                        "title": "Here to Support Your Journey",
                        "subtitle": "Whether you're just starting out or scaling up, our dedicated support team is here to help you every step of the way.",
                        "button": "Contact Support",
                        "features": [
                            {
                                "icon": "feature1",
                                "title": "Quick Inquiries",
                                "description": "Get your questions answered instantly."
                            },
                            {
                                "icon": "feature2",
                                "title": "Community Support",
                                "description": "Join our active community and share knowledge."
                            },
                            {
                                "icon": "feature3",
                                "title": "Expert Guidance",
                                "description": "Talk directly with industry experts."
                            }
                        ]
                    },
                    supportSection2: {
                        "title": "Always By Your Side",
                        "subtitle": "From your first step to your biggest milestone, our support team is ready to guide you at every stage of your journey.",
                        "button": "Get Support",
                        "features": [
                            {
                                "icon": "feature1",
                                "title": "Premium Support",
                                "description": "Priority help for your growing business."
                            },
                            {
                                "icon": "feature2",
                                "title": "Exclusive Community",
                                "description": "Access to VIP groups and discussions."
                            },
                            {
                                "icon": "feature3",
                                "title": "Dedicated Experts",
                                "description": "Work with specialists dedicated to your success."
                            }
                        ]
                    },
                    footer:{
                    cta: {
                        "title": "YOUR ENTREPRENEURIAL ADVENTURE STARTS HERE. LET'S BUILD!",
                        "description": "Whether you're just starting out, looking to level up, or ready to take over the world, Zid has the tools, support, and community to help you crush your goals.",
                        "highlight": "Sellers are 250% more likely to succeed with Zid",
                        "button": "Get Started Now"
                    },
                    sections: {
                        "solutions": {
                            "title": "SOLUTIONS",
                            "items": {
                                "estore": "E-store",
                                "pos": "POS (Point of Sales)",
                                "payments": "Payments",
                                "shipping": "Shipping",
                                "inventory": "Inventory Management",
                                "apps": "Apps",
                                "themes": "Themes",
                                "mazeed": "Mazeed Marketplace",
                                "financing": "Financing",
                                "marketing": "Marketing Tools"
                            }
                        },
                        "why": {
                            "title": "WHY ZID",
                            "items": {
                                "start": "Why start with Zid?",
                                "move": "Why move to Zid?",
                                "expand": "Why Expand with Zid?",
                                "pricing": "Pricing"
                            }
                        },
                        "serve": {
                            "title": "HOW ZID SERVES YOU",
                            "items": {
                                "small": "Small Business",
                                "medium": "Medium Business",
                                "large": "Large Business",
                                "enterprise": "Enterprise",
                                "product": "By Product",
                                "manager": "Store Manager",
                                "finance": "Financial team",
                                "operation": "Operation team",
                                "marketing": "Marketing Team",
                                "partners": "Partners & Developers"
                            }
                        },
                        "resources": {
                            "title": "RESOURCES",
                            "items": {
                                "enablement": "Merchants Enablement",
                                "community": "Merchants Community",
                                "blog": "Blog",
                                "academy": "Zid Academy",
                                "brand": "Brand Guidelines"
                            }
                        },
                        "support": {
                            "title": "SUPPORT",
                            "items": {
                                "help": "Help Center",
                                "new": "What's New",
                                "terms": "Terms & Conditions",
                                "privacy": "Privacy Policy",
                                "complaints": "Complaints and Suggestions"
                            }
                        }
                    },
                    bottom: {
                        "cr": "© Zid 2025 Commercial Registration Number 1010365366",
                        "vat": "VAT Number 300827827900003"
                    }
                }
                },
            },

            ar: {
                translation: {
                    nav: {
                        solutions: "الحلول",
                        pricing: "الأسعار",
                        whyzid: "لماذا زيد؟",
                        howzid: "كيف تخدمك زيد؟",
                        enterprise: "المؤسسات",
                        resources: "الموارد",
                    },
                    buttons: {
                        "login": "تسجيل الدخول",
                        "createStore": "أنشئ متجرك",
                    },
                    hero: {
                        "badge": "ابدأ البيع من 9 ريال سعودي شهريًا",
                        "title": "منصة موثوقة وشاملة للتجارة الإلكترونية",
                        "description": "نمكنك من بناء وتطوير وتوسيع متجرك الإلكتروني مع مدفوعات آمنة، شحن عالمي، تمويل مرن، وتسويق مؤثر. كل ما تحتاجه لتصبح العلامة التجارية الرائدة القادمة في السوق.",
                        "cta": "ابدأ تجربتك الآن"
                    },
                    features: {
                        "title": "تمكين الأعمال بجميع أشكالها وأحجامها",
                        "title2": "تميز زيد: أكثر من مجرد أدوات",
                        "visionary": {
                            "title": "لأصحاب الرؤى والأفكار الكبيرة",
                            "description": "عندك فكرة بملايين؟ خلينا نحققها. مش محتاج خبرة تقنية—يكفي شغفك، وإحنا هنكون معاك في كل خطوة."
                        },
                        "local": {
                            "title": "لأبطال المتاجر المحلية",
                            "description": "جاهز ترفع متجرك لمستوى جديد؟ سواء كان بوتيك أنيق، أو سوق مزدحم، أو متجر مؤقت، عندنا الوصفة السرية لنجاحك."
                        },
                        "pioneer": {
                            "title": "لرواد التجارة الإلكترونية",
                            "description": "أطلق ونمّي إمبراطوريتك الإلكترونية بأدواتنا الرقمية. غزو العالم يبدأ بمتجر إلكتروني رائع."
                        },
                        "superstar": {
                            "title": "لنجوم النمو المتسارع",
                            "description": "جاهز تسيب المنافسين وراك؟ أدواتنا المتقدمة ودعمنا الخبير هيكونوا وقودك الصاروخي في كل مرحلة."
                        },
                        allInOne: {
                            title: "حل تجارة شامل",
                            description:
                                "أدر كامل أعمالك—من المتاجر الفعلية إلى الأسواق الإلكترونية—من لوحة تحكم واحدة قوية. جهد أقل، إنجاز أكثر.",
                        },
                        merchantGrowth: {
                            title: "خدمات نمو التجار",
                            description:
                                "فكر فينا كمدربك الشخصي للأعمال. سرّع نجاحك من خلال برامج التدريب، النصائح الخبيرة، والاستراتيجيات المصممة خصيصًا لك.",
                        },
                        community: {
                            title: "مجتمع نابض بالحياة",
                            description:
                                "لست وحدك في هذه الرحلة. شارك النصائح، احتفل بالنجاحات، وتعلم من رواد الأعمال الآخرين في شبكتنا المتنامية.",
                        },
                        partners: {
                            title: "نظام شراكات قوي",
                            description:
                                "عزز عملك المدعوم من زيد بأحدث الأدوات والخدمات المميزة من شركائنا الموثوقين.",
                        },
                    },
                    storeBuilder: {
                        "title": "منشئ متاجر متعدد الاستخدامات",
                        "description": "أطلق متجرك الإلكتروني أو أدِر موقعك الفعلي بسهولة. بلا كوابيس برمجية، نعدك.",
                        "button": "ابنِ إمبراطوريتك"
                    },
                    storeBuilderRight: {
                        "title": "حل ذكي للمتاجر",
                        "description": "وسّع أعمالك بسلاسة عبر القنوات الإلكترونية والفعلية باستخدام الأدوات المناسبة.",
                        "button": "ابدأ بالنمو"
                    },
                    successStories: {
                        "title": "من الحلم إلى الواقع، اقرأ قصص نجاحنا",
                        "testimonials": [
                            {
                                "name": "أحمد السبيعي",
                                "company": "CMXA",
                                "rating": 2,
                                "logo": "/images/for-visionaries.jpg",
                                "avatar": "/images/for-visionaries.jpg",
                                "review": "زيد سهّلت لنا أشياء كثيرة وأنشأت مجتمعات وحلول متكاملة تجعلنا لا نحتاج أي منصة أخرى. متجر كومكسا مستقر، ولم نواجه أي مشاكل تقنية. واستفدنا من جميع خدمات زيد مثل تحصيل المدفوعات بسهولة عبر زيد باي، الشحن لدول الخليج عبر زيد شيب، تحليلات المبيعات، وإضافة الخصومات والأكواد الترويجية."
                            },
                            {
                                "name": "د. خالد السلطان",
                                "company": "سما فارما",
                                "rating": 5,
                                "logo": "/images/for-visionaries.jpg",
                                "avatar": "/images/for-visionaries.jpg",
                                "review": "كنا نواجه مشاكل تقنية مثل فشل عمليات الدفع وعدم استقرار الخوادم، خصوصًا وقت العروض والخصومات. بعد التحول إلى زيد اختفت هذه المشاكل بالكامل، وصرنا نركز على ما هو أهم: العمليات ونمو الأعمال."
                            }
                        ]
                    },
                    features2: {
                        "visionary": {
                            "title": "للرؤى العظيمة",
                            "description": "عندك فكرة بمليون دولار؟ خلنا نحققها معك. ما تحتاج خبرة تقنية—جيب شغفك، وإحنا معك خطوة بخطوة."
                        },
                        "local": {
                            "title": "لأبطال المتاجر المحلية",
                            "description": "جاهز تطور متجرك الفعلي؟ سواءً كان بوتيك أنيق، أو بسطة في سوق شعبي، أو متجر مؤقت، عندنا الوصفة السرية لنجاحك."
                        },
                        "pioneer": {
                            "title": "لرواد المتاجر الإلكترونية",
                            "description": "اطلق ونمّي متجرك الإلكتروني بأدواتنا الرقمية. السيطرة على السوق العالمي؟ نبدأ بمتجر إلكتروني ناجح."
                        },
                        "superstar": {
                            "title": "لنجوم النمو المتسارع",
                            "description": "جاهز تتفوق على المنافسين؟ أدواتنا المتقدمة ودعمنا الخبير بيكونوا وقود صاروخك في كل مرحلة."
                        }
                    },
                    supportSection: {
                        "title": "هنا لدعم رحلتك",
                        "subtitle": "سواء كنت في بداية طريقك أو في مرحلة التوسع، فريق الدعم المخصص لدينا موجود لمساعدتك في كل خطوة.",
                        "button": "تواصل مع الدعم",
                        "features": [
                            {
                                "icon": "feature1",
                                "title": "استفسارات سريعة",
                                "description": "احصل على إجابات لأسئلتك فوراً."
                            },
                            {
                                "icon": "feature2",
                                "title": "دعم المجتمع",
                                "description": "انضم إلى مجتمعنا النشط وشارك المعرفة."
                            },
                            {
                                "icon": "feature3",
                                "title": "إرشاد الخبراء",
                                "description": "تحدث مباشرة مع خبراء المجال."
                            }
                        ]
                    },
                    supportSection2: {
                        "title": "دائمًا بجانبك",
                        "subtitle": "من أول خطوة لك وحتى أكبر إنجاز، فريقنا جاهز لإرشادك في كل مرحلة من رحلتك.",
                        "button": "احصل على الدعم",
                        "features": [
                            {
                                "icon": "feature1",
                                "title": "دعم مميز",
                                "description": "مساعدة فورية لمشروعك المتنامي."
                            },
                            {
                                "icon": "feature2",
                                "title": "مجتمع حصري",
                                "description": "انضم إلى مجموعات ونقاشات خاصة."
                            },
                            {
                                "icon": "feature3",
                                "title": "خبراء مخصصون",
                                "description": "اعمل مع متخصصين مكرسين لنجاحك."
                            }
                        ]
                    },
                    footer:{
                    cta: {
                        "title": "مغامرتك الريادية تبدأ هنا. لنبدأ البناء!",
                        "description": "سواء كنت تبدأ الآن، أو تبحث عن التوسع، أو جاهز للسيطرة على السوق، زد توفر لك الأدوات والدعم والمجتمع لتحقيق أهدافك.",
                        "highlight": "البائعون أكثر عرضة للنجاح بنسبة 250٪ مع زد",
                        "button": "ابدأ الآن"
                    },
                    sections: {
                        "solutions": {
                            "title": "الحلول",
                            "items": {
                                "estore": "المتجر الإلكتروني",
                                "pos": "نقاط البيع",
                                "payments": "المدفوعات",
                                "shipping": "الشحن",
                                "inventory": "إدارة المخزون",
                                "apps": "التطبيقات",
                                "themes": "القوالب",
                                "mazeed": "سوق مزيد",
                                "financing": "التمويل",
                                "marketing": "أدوات التسويق"
                            }
                        },
                        "why": {
                            "title": "لماذا زد",
                            "items": {
                                "start": "لماذا تبدأ مع زد؟",
                                "move": "لماذا تنتقل إلى زد؟",
                                "expand": "لماذا تتوسع مع زد؟",
                                "pricing": "الأسعار"
                            }
                        },
                        "serve": {
                            "title": "كيف نخدمك في زد",
                            "items": {
                                "small": "الأعمال الصغيرة",
                                "medium": "الأعمال المتوسطة",
                                "large": "الأعمال الكبيرة",
                                "enterprise": "المؤسسات",
                                "product": "حسب المنتج",
                                "manager": "مدير المتجر",
                                "finance": "فريق المالية",
                                "operation": "فريق العمليات",
                                "marketing": "فريق التسويق",
                                "partners": "الشركاء والمطورين"
                            }
                        },
                        "resources": {
                            "title": "الموارد",
                            "items": {
                                "enablement": "تمكين التجار",
                                "community": "مجتمع التجار",
                                "blog": "المدونة",
                                "academy": "أكاديمية زد",
                                "brand": "إرشادات الهوية"
                            }
                        },
                        "support": {
                            "title": "الدعم",
                            "items": {
                                "help": "مركز المساعدة",
                                "new": "ما الجديد",
                                "terms": "الشروط والأحكام",
                                "privacy": "سياسة الخصوصية",
                                "complaints": "الشكاوى والاقتراحات"
                            }
                        }
                    },
                    bottom: {
                        "cr": "© زد 2025 رقم السجل التجاري 1010365366",
                        "vat": "الرقم الضريبي 300827827900003"
                    }
                }
                },
            },
        },
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;