
import React from 'react';
import MainLayout from '../../components/Layout';

export default function GroupsMonitor() {
  return (
    <MainLayout>
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">סורקת קבוצות מוצאת לקוחות - GroupsMonitoring</h1>
        <p className="mb-6">הכלי החזק ביותר לניטור קבוצות פייסבוק, עבור עסקים ונותני שירות</p>

        <h2 className="text-2xl font-semibold mb-2">איך התוסף עובד</h2>
        <ol className="list-decimal list-inside mb-6">
          <li className="mb-2">בחרו את מילות החיפוש ואת הקבוצות שתרצו.</li>
          <li className="mb-2">התוסף יסרוק את הקבוצות 24/7 במקומכם.</li>
          <li className="mb-2">כל פוסט רלוונטי יועבר ישירות ל- GoogleSheets שלכם.</li>
          <li className="mb-2">התראות חכמות: קבלו עדכון למייל על כל פוסט חדש.</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-2">למה GroupsMonitoring?</h2>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2"><strong>חיסכון בזמן:</strong> שבועות של חיפוש הופכות לדקות.</li>
          <li className="mb-2"><strong>פעולה מהירה:</strong> לא מפספסים אף הזדמנות עסקית.</li>
          <li className="mb-2"><strong>גיבוי מושלם:</strong> אוטומציה חכמה הטכנולוגיה עובדת בשבילכם 24/7.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">GroupsMonitoring בפעולה</h2>
        <div className="mb-6">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-geuXKKxWSg"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            className="w-full h-64 md:h-96"
          ></iframe>
        </div>

        <h2 className="text-2xl font-semibold mb-2">התקנה בדפדפן הכרום</h2>
        <p className="mb-6">התקינו את התוסף בקליק אחד</p>

        <h2 className="text-2xl font-semibold mb-2">התקנה</h2>
        <p className="mb-4">עלות חודשית: ₪349</p>
        <p className="mb-4">ביטול בכל עת</p>
        <p className="mb-6">ללא התחייבות</p>

        <h2 className="text-2xl font-semibold mb-2">שאלות ותשובות נפוצות</h2>
        <div className="space-y-4">
          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם ניתן לסרוק כל קבוצה?</summary>
            <p className="p-2">תשובה: אכן, ניתן לסרוק כל קבוצה. על מנת לסרוק קבוצה פרטית יש להצטרף אליה.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם ניתן לבחור כמה מילות חיפוש שאני רוצה?</summary>
            <p className="p-2">תשובה: וודאי. וגם ניתן לבחור ולהגדיר מילים שונות עבור כל קבוצה. תוכלו לעשות הגדרות חיפוש חכמות כולל ביטוי מדויק או גמיש, צירופי מילים, הוצאת מילים ועוד.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: עם איזה פרופיל פייסבוק התוסף משתמש לסריקה?</summary>
            <p className="p-2">תשובה: התוסף סורק את הקבוצות בעזרת פרופיל הפייסבוק שמחובר בדפדפן הכרום ולכן ניתן לבחור כל פרופיל פייסבוק וכן להחליף אותו בכל עת.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם ניתן לשנות את הקבוצות ואת מילות החיפוש מתי שאני רוצה?</summary>
            <p className="p-2">תשובה: כן! כל ההגדרות נמצאות בגליון גוגלשיטס שלך, שנמצא אצלך.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם יש סכנה שפייסבוק יחסום אותי?</summary>
            <p className="p-2">תשובה: אנחנו לא נתקלנו מעולם במקרה כזה. הדבר היחיד שעלול לקרות הוא השעייה זמנית (לכמה שעות) לפעולה הספציפית של פתיחת קבוצת פייסבוק. שאר הפעולות, כמו למשל לגלול בפיד ולכתוב לא יושעו, וגם זה נדיר ביותר וקורה רק אם סורקים ללא הפסקות, ובשביל זה אנחנו מגדירים הפסקות בהגדרות התוסף.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם המחשב שלי צריך להיות דלוק?</summary>
            <p className="p-2">תשובה: התוסף פועל על דפדפן הכרום שלכם ועליו להיות פתוח. אם תסגרו את דפדפן הכרום שעליו פועל התוסף או שתכבו את המחשב, התוסף יפסיק לפעול עד שתדליקו את המחשב. ישנה אפשרות להפעיל את התוכנה על מחשב מרוחק, שלי, שפועל 24/7, בתוספת של 100 ש"ח לחודש.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם ההתראות מגיעות אלינו מיד עם פרסום הפוסט בקבוצה?</summary>
            <p className="p-2">תשובה: ההתראות אינן מיידיות, משום שלוקח זמן להשלים סבב סריקות וצריך גם זמני המתנה, ולכן עבור פוסט שעלה לקבוצה יתכן ונקבל התראה תוך כמה דקות, או לאחר שעה ויותר, תלוי במספר הקבוצות שאנו סורקים ובהגדרות שלנו.</p>
          </details>

          <details className="border rounded-md">
            <summary className="cursor-pointer bg-gray-100 p-2">שאלה: האם אפשר למחוק שורות מהגוגלשיטס עם התוצאות?</summary>
            <p className="p-2">תשובה: הפוסטים שמופיעים בגוגלשיטס משמשים עבור התוסף על מנת שלא ירשום אותם בשנית כשיתקל בהם. מחיקה של שורות מהגוגלשיטס תגרום לרישום חוזר עבור אותם פוסטים במידה וימצאו בתחום הזמן שהגדרנו לחיפוש.</p>
          </details>
        </div>
      </section>
    </MainLayout>
  );
}