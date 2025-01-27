import React from 'react';

const ReplyComments = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg overflow-hidden">
        
        {/* סקציה 1 */}
        <section className="mb-6 text-center">
          <h1 className="text-3xl font-bold mb-2 text-primary">מכונת התגובות - ReplyComments</h1>
          <p className="mb-4">תגובות לכל התגובות בכל פוסט שתבחרו</p>
        </section>

        {/* סקציה 2 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">איך התוסף עובד</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>בחרו את הפוסט הרצוי.</li>
            <li>רשמו את התגובות הרצויות.</li>
            <li>התוסף יכתוב תגובות לכל התגובות, אחת אחרי השניה.</li>
          </ol>
        </section>

        {/* סקציה 3 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">למה ReplyComments?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>חיסכון בזמן:</strong> להגיב למאות תגובות בלחיצת כפתור במקום שעות של עבודה!</li>
            <li><strong>מניעת חסימות:</strong> מגדירים את התוסף לעבוד בקצב איטי למנוע השעיה ע"י פייסבוק.</li>
            <li><strong>גמישות מקסימלית:</strong> התאמת התגובות והקצב לצרכים שלנו.</li>
          </ul>
        </section>

        {/* סקציה 4 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">ReplyComments בפעולה</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/4WYeRXCdE_o"
              title="ReplyComments Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* סקציה 5 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">התקנה בדפדפן הכרום</h2>
          <p className="mb-4">התקינו את התוסף בקליק אחד</p>
          <a
            href="https://chromewebstore.google.com/detail/replyallcomments/nndlamggeoglkbnpgipbhciechdnbpcg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors w-48"
          >
            התקינו את התוסף
          </a>
        </section>

        {/* סקציה 6 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">עלות חודשית: ₪299</h2>
          <p className="mb-2">ביטול בכל עת</p>
          <p className="mb-4">ללא התחייבות</p>
        </section>

        {/* סקציה 7 */}
        <section className="mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-2 text-primary">צרו קשר</h2>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://wa.me/972546609385"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors w-48"
            >
              ליצירת קשר בוואטסאפ
            </a>
            <a
              href="mailto:fb.tools.zevik@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors w-48"
            >
              ליצירת קשר באימייל
            </a>
          </div>
        </section>

        {/* סקציה 8 */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-primary">שאלות ותשובות נפוצות</h2>
          <div className="space-y-4">
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם ניתן להגיב לכל פוסט בפייסבוק או רק לפוסטים שלי?</summary>
              <p className="mt-2">תשובה: ניתן להגיב לכל פוסט, לא משנה אם אתם העלתם אותו או לא.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם ניתן להגיב לפוסטים בכל קבוצה גם שאני לא מנהל/ת?</summary>
              <p className="mt-2">תשובה: כן.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם התוסף יגיב לאותה תגובה פעמיים?</summary>
              <p className="mt-2">תשובה: התוסף יגיב רק לתגובות שאין להם שום תגובה. אם יש להם כבר תגובה, לא משנה מי כתב אותה, התוסף לא יגיב. ישנה אפשרות נוספת, להגדיר שהתוסף יגיב לכל משתמש רק פעם אחת, ואז התוסף יגיב לכולם, לא משנה אם יש להם תגובה או לא.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם יש סכנה שפייסבוק יחסום אותי?</summary>
              <p className="mt-2">תשובה: אנחנו לא נתקלנו מעולם במקרה כזה. הדבר היחיד שעלול לקרות הוא השעייה זמנית (לכמה שעות) לפעולה הספציפית של תגובות בפייסבוק. שאר הפעולות לא יושעו, וגם זה נדיר ביותר, ובשביל זה אנחנו מגדירים הפסקות בהגדרות התוסף.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם המחשב שלי צריך להיות דלוק?</summary>
              <p className="mt-2">תשובה: התוסף פועל על דפדפן הכרום שלכם ועליו להיות פתוח. אם תסגרו את דפדפן הכרום שעליו פועל התוסף או שתכבו את המחשב, התוסף יפסיק לפעול עד שתדליקו את המחשב.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: האם ניתן להגיב בכל שפה?</summary>
              <p className="mt-2">תשובה: כן.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: איך ומתי ניתן לבטל את המנוי?</summary>
              <p className="mt-2">תשובה: המנוי הוא חודשי והוא מתחדש מדי חודש באותו היום שבו התחלתם את המנוי. ניתן לפנות אלי עד 24 שעות לפני חידוש המנוי על מנת לבטלו.</p>
            </details>
            <details className="rounded border bg-gray-100 p-2">
              <summary className="cursor-pointer">שאלה: מה ההמלצה לכמות ולקצב תגובות על ידי התוסף?</summary>
              <p className="mt-2">תשובה: ההמלצה שלי היא להגיב עד כ-100 תגובות ביום, עם הפרש זמן של כ-2-3 דקות בין התגובות.</p>
            </details>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ReplyComments;
