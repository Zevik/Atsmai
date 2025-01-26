'use client';

import { Briefcase, Shield, Clock } from 'lucide-react';
import { useState } from 'react';

//  VideoPlayer Component
const VideoPlayer = ({ videoId }) => {
    return (
        <div className="relative w-full h-[250px] md:h-[450px]">
            <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

//  FaqAccordion Component
const FaqAccordion = ({ faqItems }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        className={`w-full flex justify-between items-center p-4 font-semibold ${openIndex === index ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-panel-${index}`}
                    >
                        <span>{item.question}</span>
                        <span className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                            {openIndex === index ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                        </span>
                    </button>
                    <div
                        id={`faq-panel-${index}`}
                        className={`bg-gray-50 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px] p-4' : 'max-h-0 p-0'}`}
                    >
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const features = [
    {
        title: 'חיסכון בזמן',
        description: 'איסוף אוטומטי של כל התשובות בלחיצת כפתור',
        icon: Clock
    },
    {
        title: 'פעולה מהירה',
        description: 'שמירת המידע באופן מיידי וללא עיכובים',
        icon: Briefcase
    },
    {
        title: 'גיבוי מושלם',
        description: 'כל המידע נשמר בגוגל שיטס באופן מאובטח',
        icon: Shield
    }
];

const steps = [
    'התקנה פשוטה בלחיצת כפתור',
    'יופיעו כפתורים חדשים בפייסבוק שלכם מעל כפתורי אישורי החברות',
    'בלחיצת כפתור תוכלו לאסוף את כל התשובות לגוגלשיטס'
];

function CopyEmailButton() {
    const email = 'fb.tools.zevik@gmail.com';
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all relative"
        >
            <i className="far fa-envelope text-xl"></i>
            {copied ? (
                <span className="animate-fade-in">הכתובת הועתקה!</span>
            ) : (
                <>
                    <span>העתק כתובת אימייל</span>
                    <span className="text-sm opacity-75 absolute -bottom-6 right-0 left-0">
                        {email}
                    </span>
                </>
            )}
        </button>
    );
}

const gmacFaqItems = [
    {
        question: 'האם ניתן להשתמש אם התוסף עבור כמה קבוצות שאני מנהל/ת?',
        answer: 'כן. ובנוסף, עבור כל קבוצה התוסף יצור קובץ נפרד שאליו ישמרו הנתונים.'
    },
    {
        question: 'האם התשובות נאספות באופן אוטומטי לחלוטין?',
        answer: 'לא. יש לאסוף את הנתונים בכל פעם לפני שמאשרים את בקשות ההצטרפות לקבוצה, על ידי לחיצה על כפתור Collect.'
    },
    {
        question: 'אם לוחצים על Collect כמה פעמים, האם הנתונים יופיעו בקובץ כמה פעמים?',
        answer: 'לא. הנתונים נאספים פעם אחת על מנת לא ליצור כפילויות, אלא אם כן אחת התשובות השתנתה ואז הנתונים ירשמו מחדש.'
    },
    {
        question: 'מה יקרה אם אשנה את שאלות הכניסה לקבוצה?',
        answer: 'התוסף יצור עמודות חדשות בגוגלשיטס עם כותרות השאלות החדשות, וירשום את התשובות המתאימות תחתיהן.'
    },
    {
        question: 'האם הנתונים שאספתי יכולים ללכת לאיבוד לאחר סיום המנוי?',
        answer: 'לא! הנתונים נשמרים בגוגלשיטס ששייך למנוי, תחת חשבון הגוגל, ותמיד ניתן למצוא אותו ב: https://drive.google.com'
    },
    {
        question: 'אם אני מבטל/ת את התוסף לאחר 4 ימים, האם יהיה לי חיוב כלשהוא?',
        answer: 'לא! יש 5 ימי ניסיון ללא עלות וללא התחייבות, וניתן לבטל את המנוי לפני היום החמישי ללא כל חיוב.'
    },
    {
        question: 'לאן ישלחו החשבוניות?',
        answer: 'החשבוניות נשלחות באופן אוטומטי לאימייל שאיתו נרשמתם שזהו אותו אימייל של חשבון הכרום תחתיו התקנתם את התוסף. לא ניתן להחליף את האימייל לקבלת חשבונית ללא החלפה של חשבון הכרום שעליו התוסף מותקן ותחתיו חשבון הפייסבוק שלכם פעיל.'
    },
    {
        question: 'כמה ימים אחורה התוסף מאתר פוסטים?',
        answer: 'בהגדרות התוסף ישנה אפשרות להגדיר את מספר הימים שנרצה שהתוסף יגלול אחורה לאיתור פוסטים.'
    },
    {
        question: 'האם ניתן לעשות חיפוש בכל שפה?',
        answer: 'כן.'
    },
    {
        question: 'איך ומתי ניתן לבטל את המנוי?',
        answer: 'המנוי הוא חודשי והוא מתחדש מדי חודש באותו היום שבו התחלתם את המנוי. ניתן לפנות אלי עד 24 שעות לפני חידוש המנוי על מנת לבטלו.'
    }
];

export default function GmacPage() {
    return (
        <div className="flex flex-col min-h-screen">
           
            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-purple-600">
                                GMAC - שומר התשובות לשאלות הכניסה לקבוצה
                                <span className="block text-2xl md:text-3xl text-purple-600 mt-4 animate-fade-in">
                                    התוסף הפופולרי למנהלי ומנהלות קבוצות פייסבוק
                                </span>
                            </h1>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">איך התוסף עובד</h2>
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <p className="text-lg text-black">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">למה GMAC?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {features.map((Feature, index) => (
                                <div key={index} className="text-center p-6">
                                    <Feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">{Feature.title}</h3>
                                    <p className="text-gray-600">{Feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Demo */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">ראו את GMAC בפעולה</h2>
                        <div className="max-w-4xl mx-auto">
                            <VideoPlayer videoId="mLnXlkmy84Q" />
                        </div>
                    </div>
                </section>

                {/* Installation Video */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">איך מתקינים בקלות?</h2>
                        <div className="max-w-4xl mx-auto">
                            <VideoPlayer videoId="-yxpUam5LRA" />
                        </div>
                    </div>
                </section>

                {/* Chrome Installation Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">התקנה בדפדפן הכרום</h2>
                        <p className="text-lg text-gray-600 mb-4">התקינו את התוסף בקליק אחד</p>
                        <a
                            href="https://chromewebstore.google.com/detail/gmac-%E2%80%94-group-answers-coll/omefdeapnicniondiefejngddkjikegn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            התקנה
                        </a>
                    </div>
                </section>

                {/* Pricing Section - Redesigned */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-md mx-auto text-center">
                            <div className="border border-gray-300 rounded-lg p-8 shadow-md">
                                <div className="mb-6">
                                    <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                                        5 ימי ניסיון חינם!
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <div className="text-gray-800 text-lg mb-2">עלות חודשית:</div>
                                    <div className="flex items-baseline justify-center gap-4">
                                        <span className="text-4xl font-bold text-black">₪35</span>
                                        <span className="text-lg text-gray-500 line-through">₪55</span>
                                        <span className="text-sm text-yellow-700 font-semibold">
                                            חיסכון של 36%
                                        </span>
                                    </div>
                                </div>

                                <ul className="text-left space-y-3 mb-6">
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>5 ימי ניסיון ללא עלות</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>ביטול בכל עת</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check text-green-500"></i>
                                        <span>ללא התחייבות</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">שאלות נפוצות</h2>
                        <div className="max-w-3xl mx-auto">
                            <FaqAccordion faqItems={gmacFaqItems} />
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-indigo-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8">רוצים להתחיל?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/972546609385"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all"
                            >
                                <i className="fab fa-whatsapp text-xl"></i>
                                ליצירת קשר בוואטסאפ
                            </a>
                            <CopyEmailButton />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}