import React from 'react';

export default function EmployerObligations() {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">חובות המעביד</h1>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">חתימה על חוזה עבודה</h2>
          <p>יש לחתום על חוזה עבודה מפורט עם העובד המגדיר את תנאי ההעסקה.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">מסירת הודעה על תנאי העסקה</h2>
          <p>חובה למסור לעובד הודעה בכתב המפרטת את תנאי העסקתו תוך 30 יום מתחילת העבודה.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">תשלום שכר מינימום לפחות</h2>
          <p>חובה לשלם לעובד לפחות שכר מינימום כקבוע בחוק (5,571.75 ₪ ברוטו נכון ל-2023).</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">הפרשות לפנסיה וביטוח לאומי</h2>
          <p>יש להפריש לפנסיה ולביטוח לאומי עבור העובד כנדרש בחוק.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">מתן תלושי שכר</h2>
          <p>חובה למסור לעובד תלוש שכר מפורט מדי חודש.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">תשלום דמי נסיעות</h2>
          <p>יש לשלם לעובד דמי נסיעות למקום העבודה וממנו.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">מתן חופשה שנתית ודמי הבראה</h2>
          <p>העובד זכאי לחופשה שנתית בתשלום ולדמי הבראה כקבוע בחוק.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary border-b-2 border-primary pb-2">שמירה על תנאי בטיחות ובריאות בעבודה</h2>
          <p>חובה לספק לעובד סביבת עבודה בטוחה ובריאה.</p>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary">איסורים על המעביד</h2>
          <ul className="list-disc list-inside">
            <li>אפליה בקבלה לעבודה או בתנאי העבודה: אסור להפלות עובדים על רקע מין, גזע, דת וכדומה.</li>
            <li>הלנת שכר: חובה לשלם את שכר העובד במועד, אחרת יש לשלם פיצויי הלנת שכר.</li>
            <li>העסקה מעבר לשעות המותרות בחוק: יש להקפיד על שעות העבודה המותרות בחוק ולשלם עבור שעות נוספות.</li>
            <li>פיטורים שלא כדין: אסור לפטר עובד באופן שרירותי או מסיבות אסורות על פי חוק.</li>
          </ul>
        </section>
        <section className="mb-8 hover:shadow-lg transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <h2 className="text-xl font-semibold mb-4 text-primary">זכויות המעביד</h2>
          <ul className="list-disc list-inside">
            <li>קביעת נהלי עבודה וכללי התנהגות: המעביד רשאי לקבוע נהלים וכללי התנהגות סבירים במקום העבודה.</li>
            <li>פיקוח על ביצוע העבודה: המעביד רשאי לפקח על עבודת העובדים בצורה סבירה.</li>
            <li>דרישה לשמירה על סודיות: ניתן לדרוש מהעובד לשמור על סודיות מידע עסקי.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
