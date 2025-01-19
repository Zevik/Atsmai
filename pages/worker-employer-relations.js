import React from 'react';

const WorkerEmployerRelations = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">יחסי עובד-מעביד</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">אני רוצה לעבוד עם פרילנסרים</h2>
          <p>
            אני לא רוצה להעסיק עובדים. העסקת עובדים היא ללא ספק אתגר גדול מאוד - גם מבחינה כלכלית, גם מבחינת האחריות וגם בגלל מערכת היחסים המורכבת ועוד... אם אפשר לעבוד עם פרילנסרים עצמאיים, מה טוב. אבל חשוב מאוד לשים לב ליחסי עובד-מעביד!
          </p>
          <p>
            גם אם אנחנו קוראים למישהו "פרילנסר", בית הדין לעבודה יכול לקבוע שבפועל היו יחסי עובד-מעביד אם הוא עבד באופן קבוע, קיבל הוראות ופיקוח שלנו, השתמש בציוד שלנו, ולא באמת עבד במקביל עם לקוחות אחרים. במקרה כזה, יש חשיפה משמעותית לתביעות רטרואקטיביות על זכויות סוציאליות.
          </p>
          <div className="border p-4 mb-4 rounded-lg bg-gray-50 bg-opacity-75">
            <p>
              בשנים האחרונות, עם התרחבות כלכלת הגיג והעלייה במספר העצמאים והפרילנסרים, סוגיית ההבחנה בין עובד לבין קבלן עצמאי הפכה למורכבת יותר מאי פעם. מעסיקים רבים מוצאים עצמם בתחום אפור, כאשר ההגדרה הפורמלית של היחסים עם נותני השירותים אינה תואמת בהכרח את המציאות בשטח. אנסה לספק למעסיקים הבנה מעמיקה של הסוגיה, תוך הצגת הסיכונים הכרוכים בהגדרה שגויה של יחסי ההעסקה, והנחיות מעשיות להתמודדות עם האתגרים בתחום זה.
            </p>
          </div>
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default WorkerEmployerRelations;