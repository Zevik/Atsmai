
import React from 'react';

const PracticalGuideGlobalContract = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">מדריך מעשי להעסקה בחוזה גלובלי</h1>
        
        {/* עקרונות יסוד */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">עקרונות יסוד</h2>
          <p>חוזה גלובלי הוא הסכם המגדיר שכר חודשי קבוע הכולל את כל מרכיבי התגמול. המדריך הזה יעזור לכם ליישם אותו נכון ולהימנע מסיכונים משפטיים.</p>
        </section>
        
        {/* דרישות חוקיות בסיסיות */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">דרישות חוקיות בסיסיות</h2>
          <ol className="list-decimal list-inside">
            <li>השכר הגלובלי חייב לעמוד בדרישות שכר המינימום לפי חוק</li>
            <li>חובה לנהל רישום מדויק של שעות העבודה (חובה חוקית)</li>
            <li>חובה להפריד בבירור בין שכר הבסיס לבין תשלום עבור שעות נוספות</li>
            <li>יש להגדיר מספר מקסימלי של שעות נוספות בחוזה</li>
          </ol>
        </section>
        
        {/* מה חייב להיות בחוזה */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">מה חייב להיות בחוזה</h2>
          <ol className="list-decimal list-inside">
            <li>הגדרה ברורה של שכר הבסיס למשרה מלאה (ממוצע של 182 שעות חודשיות, משתנה לפי החודש הספציפי)</li>
            <li>פירוט מדויק של השעות הנוספות המקסימליות המותרות והתשלום עבורן</li>
            <li>רשימה של כל התוספות הכלולות בשכר (נסיעות, הבראה, בונוסים)</li>
            <li>הגדרת תנאים סוציאליים (פנסיה, קרן השתלמות)</li>
            <li>מנגנון להתחשבנות במקרה של חריגה משמעותית בשעות העבודה</li>
            <li>תנאים לעדכון החוזה (בהסכמת שני הצדדים)</li>
          </ol>
        </section>
        
        {/* איך לחשב נכון את השכר הגלובלי */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">איך לחשב נכון את השכר הגלובלי</h2>
          <ol className="list-decimal list-inside">
            <li>קביעת שכר בסיס הוגן למשרה (לא פחות משכר מינימום)</li>
            <li>חישוב שעות נוספות לפי יום עבודה (לא לפי חודש):
              <ul className="list-disc list-inside ml-4">
                <li>שעתיים ראשונות ביום: 125% משכר הבסיס</li>
                <li>מהשעה השלישית ואילך באותו יום: 150% משכר הבסיס</li>
              </ul>
            </li>
            <li>הוספת תוספות קבועות (נסיעות, הבראה)</li>
            <li>חישוב ההפרשות הסוציאליות על הרכיבים הפנסיוניים</li>
          </ol>
        </section>
        
        {/* מה אסור לעשות */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">מה אסור לעשות</h2>
          <ol className="list-decimal list-inside">
            <li>להגדיר שכר גלובלי ללא פירוט מרכיביו</li>
            <li>לכלול תשלום עבור שעות נוספות בלתי מוגבלות</li>
            <li>להימנע מתיעוד שעות העבודה בפועל (זו הפרה של החוק)</li>
            <li>לשלם פחות משכר מינימום</li>
            <li>לשנות את תנאי החוזה ללא הסכמת העובד</li>
            <li>להסתיר את אופן חישוב השכר והזכויות מהעובד</li>
          </ol>
        </section>
        
        {/* בקרה ומעקב */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">בקרה ומעקב</h2>
          <ol className="list-decimal list-inside">
            <li>ניהול רישום יומי מדויק של שעות העבודה (חובה חוקית)</li>
            <li>בדיקה חודשית של התאמה בין השכר המשולם לעבודה בפועל</li>
            <li>בדיקות תקופתיות לוודא עמידה בחוקי העבודה</li>
            <li>תיעוד מסודר של כל השינויים והעדכונים</li>
            <li>מעקב אחר השינויים בשכר המינימום והתאמת השכר בהתאם</li>
          </ol>
        </section>
        
        {/* סימני אזהרה שדורשים טיפול מיידי */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">סימני אזהרה שדורשים טיפול מיידי</h2>
          <ul className="list-disc list-inside">
            <li>עבודה קבועה מעבר לשעות שהוגדרו בחוזה</li>
            <li>חריגה ממכסת השעות הנוספות המוסכמת</li>
            <li>תלונות עובדים על שחיקה</li>
            <li>אי בהירות בתלושי השכר</li>
            <li>חוסר תיעוד של שעות העבודה</li>
          </ul>
        </section>
        
        {/* המלצות מעשיות */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">המלצות מעשיות</h2>
          <ol className="list-decimal list-inside">
            <li>היוועצו עם עורך דין בניסוח החוזה הראשוני</li>
            <li>הקפידו על שקיפות מלאה מול העובד</li>
            <li>נהלו מערכת מסודרת לרישום שעות עבודה</li>
            <li>בצעו בדיקות תקופתיות של עמידה בחוקי העבודה</li>
            <li>שמרו על תקשורת פתוחה עם העובדים לגבי היקפי העבודה</li>
            <li>תעדו כל שינוי או חריגה באופן מסודר</li>
          </ol>
        </section>
        
        {/* סיכום */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">סיכום</h2>
          <p>העסקה בחוזה גלובלי יכולה להיות יעילה ונוחה לשני הצדדים, אך מחייבת ניהול קפדני, עמידה בדרישות החוק והוגנות. המפתח להצלחה הוא שקיפות, תיעוד מסודר ובחינה תקופתית של ההסדר.</p>
        </section>
      </div>
    </div>
  );
};

export default PracticalGuideGlobalContract;