import React from 'react';

const EndEmployment = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">מדריך מעשי לסיום העסקת עובד - צ'קליסט למעסיק</h1>
        
        {/* צעד 1: לפני הפיטורים */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">צעד 1: לפני הפיטורים</h2>
          
          {/* שימוע - חובה חוקית */}
          <h3 className="text-lg font-semibold mb-4">שימוע - חובה חוקית</h3>
          <ul className="list-disc list-inside mb-4">
            <li>זימון בכתב זמן סביר מראש (תלוי בנסיבות ומורכבות המקרה)</li>
            <li>פירוט הסיבות לשקילת הפיטורים בזימון</li>
            <li>יידוע העובד על זכותו להביא נציג מטעמו</li>
            <li>תיעוד מלא של השימוע בפרוטוקול</li>
            <li>מתן זכות תגובה אמיתית לעובד</li>
          </ul>
          
          {/* בדיקת מגבלות על פיטורים */}
          <h3 className="text-lg font-semibold mb-4">בדיקת מגבלות על פיטורים</h3>
          <ul className="list-disc list-inside">
            <li>עובדת בהריון (נדרש אישור משרד העבודה)</li>
            <li>חופשת לידה + 60 יום אחרי חזרה מחל"ת שבאה בעקבותיה</li>
            <li>מילואים או 30 יום אחרי</li>
            <li>חופשת מחלה</li>
            <li>חברות בוועד</li>
            <li>עובדים המוגנים בחוק הגנה על עובדים בשעת חירום</li>
          </ul>
        </section>
        
        {/* צעד 2: הודעה על פיטורים */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">צעד 2: הודעה על פיטורים</h2>
          
          {/* הודעה מוקדמת - חובה חוקית */}
          <h3 className="text-lg font-semibold mb-4">הודעה מוקדמת - חובה חוקית</h3>
          <p className="mb-4">לעובד במשכורת (חודשי):</p>
          <ul className="list-disc list-inside mb-4">
            <li>עד 6 חודשי עבודה: יום לכל חודש</li>
            <li>7-12 חודשים: 6 ימים + 2.5 ימים לכל חודש נוסף</li>
            <li>מעל שנה: חודש מלא</li>
          </ul>
          <p className="mb-4">לעובד בשכר (שעתי/יומי):</p>
          <ul className="list-disc list-inside">
            <li>עד 12 חודשי עבודה: יום לכל חודש עבודה</li>
            <li>מעל שנה: 14 יום + יום נוסף לכל חודש נוסף, עד מקסימום חודש</li>
          </ul>
          
          {/* מסירת הודעת פיטורים */}
          <h3 className="text-lg font-semibold mb-4 mt-4">מסירת הודעת פיטורים</h3>
          <ul className="list-disc list-inside">
            <li>בכתב בלבד</li>
            <li>ציון תאריך סיום מדויק</li>
            <li>פירוט זכויות העובד</li>
            <li>אפשרות לוותר על תקופת ההודעה (בתשלום)</li>
          </ul>
        </section>
        
        {/* צעד 3: חישוב תשלומים */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">צעד 3: חישוב תשלומים</h2>
          
          {/* פיצויי פיטורים (אחרי שנה) */}
          <h3 className="text-lg font-semibold mb-4">פיצויי פיטורים (אחרי שנה)</h3>
          <ul className="list-disc list-inside mb-4">
            <li>משכורת אחרונה × שנות עבודה</li>
            <li>כולל כל הרכיבים הקבועים</li>
            <li>תשלום תוך 15 יום מהסיום</li>
            <li>חל גם במקרי התפטרות מוצדקת:
              <ul className="list-disc list-inside ml-4">
                <li>הרעה מוחשית בתנאי העבודה</li>
                <li>מצב בריאותי</li>
                <li>טיפול בבן משפחה חולה</li>
              </ul>
            </li>
          </ul>
          
          {/* תשלומים נוספים */}
          <h3 className="text-lg font-semibold mb-4 mt-4">תשלומים נוספים</h3>
          <ul className="list-disc list-inside">
            <li>פדיון חופשה שלא נוצלה</li>
            <li>דמי הבראה יחסיים</li>
            <li>משכורת אחרונה מלאה</li>
            <li>הודעה מוקדמת (גם אם לא עבד)</li>
          </ul>
        </section>
        
        {/* צעד 4: מסמכים נדרשים */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">צעד 4: מסמכים נדרשים</h2>
          
          {/* חובה למסור לעובד */}
          <h3 className="text-lg font-semibold mb-4">חובה למסור לעובד</h3>
          <ul className="list-disc list-inside">
            <li>טופס 161 לשחרור קופות</li>
            <li>מכתב שחרור לקרן פנסיה</li>
            <li>אישור תקופת העסקה</li>
            <li>טופס 106 (בסוף שנת מס)</li>
            <li>תלוש שכר אחרון מפורט</li>
          </ul>
        </section>
        
        {/* הנחיות מיוחדות לתקופת חירום */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">הנחיות מיוחדות לתקופת חירום</h2>
          <ul className="list-disc list-inside mb-4">
            <li>איסור פיטורי עובדים מאזורי סיכון מוגדרים</li>
            <li>חובת החזרת עובדים שפוטרו/הוצאו לחל"ת בגלל המצב</li>
            <li>הגנות מיוחדות לעובדים שנפגעו ישירות מהמצב</li>
            <li>סנקציות מוחמרות על הפרת זכויות בתקופת חירום</li>
          </ul>
        </section>
        
        {/* אזהרות חשובות */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">אזהרות חשובות</h2>
          <p><strong>❌ אסור:</strong></p>
          <ul className="list-disc list-inside mb-4">
            <li>לפטר ללא שימוע</li>
            <li>להתנות על זכויות בסיסיות</li>
            <li>לעכב תשלומים מעבר ל-15 יום</li>
            <li>לפטר מסיבות מפלות</li>
            <li>לפטר עובדים מוגנים ללא אישור</li>
            <li>להפר הגנות מיוחדות בתקופת חירום</li>
          </ul>
          
          <p><strong>✅ חובה:</strong></p>
          <ul className="list-disc list-inside">
            <li>לתעד הכל בכתב</li>
            <li>לשמור מסמכים 7 שנים</li>
            <li>לחשב זכויות במדויק</li>
            <li>לתת הזדמנות אמיתית בשימוע</li>
            <li>לוודא עמידה בהוראות החירום</li>
          </ul>
        </section>
        
        {/* סיום העסקה בהסכמה */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">סיום העסקה בהסכמה</h2>
          <p>אופציה מומלצת כשאפשר:</p>
          <ul className="list-disc list-inside mb-4">
            <li>הסכם פרישה מוסכם</li>
            <li>ויתור הדדי על תביעות (למעט זכויות קוגנטיות)</li>
            <li>הסדרת כל התשלומים מראש</li>
            <li>תנאי פרישה מוגדרים</li>
            <li>שמירה על זכויות בסיסיות שלא ניתן לוותר עליהן</li>
          </ul>
          <p>⚠️ חשוב להדגיש: בכל מקרה של ספק או מורכבות, מומלץ להתייעץ עם עורך דין המתמחה בדיני עבודה.</p>
        </section>
      </div>
    </div>
  );
};

export default EndEmployment;
