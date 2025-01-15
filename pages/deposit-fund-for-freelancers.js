import React from 'react';

const DepositFundForFreelancers = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">הפקדות לקרן השתלמות לעצמאים</h1>
        
        {/* מבוא */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">הפקדות לקרן השתלמות לעצמאים (2024)</h2>
          
          <h3 className="font-semibold mb-2">ניכוי מס עבור הפקדות לקרן השתלמות:</h3>
          <p>עצמאים יכולים להפקיד עד 4.5% מההכנסה החייבת (כלומר, הכנסות פחות הוצאות מוכרות).</p>
          <p>ההפקדה המקסימלית המוכרת לצורכי מס הכנסה לשנת 2024 היא 13,203 ₪ לשנה (על בסיס הכנסה חייבת מקסימלית של 293,400 ₪).</p>
          
          <h3 className="font-semibold mb-2 mt-4">פטור ממס רווחי הון:</h3>
          <p>הפקדות לקרן השתלמות עד 20,520 ₪ בשנה (נכון ל-2024) זכאיות לפטור מלא ממס רווחי הון על הרווחים הנצברים בקרן, ללא קשר להכנסה החייבת.</p>
          <p>כל הפקדה מעבר ל-20,520 ₪ תחויב במס רווחי הון על הרווחים שנצברו מעבר לתקרה זו.</p>
        </section>
        
        {/* ההבדל בין "ניכוי מס" ל"פטור ממס רווחי הון" */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">ההבדל בין "ניכוי מס" ל"פטור ממס רווחי הון"</h2>
          
          <h3 className="font-semibold mb-2">ניכוי מס:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>הפקדות בגובה של עד 4.5% מההכנסה החייבת (עד 13,203 ₪) ייחשבו כהוצאה מוכרת.</li>
            <li>המשמעות: ההכנסה החייבת במס מופחתת, ולכן תשלם פחות מס הכנסה.</li>
            <li>לדוגמה: אם ההכנסה החייבת שלך היא 100,000 ₪ והפקדת 4,500 ₪ לקרן השתלמות, ההכנסה החייבת שלך תקטן ל-95,500 ₪.</li>
          </ul>
          
          <h3 className="font-semibold mb-2 mt-4">פטור ממס רווחי הון:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>הפקדות עד 20,520 ₪ בשנה פטורות ממס על הרווחים הנצברים בקרן.</li>
            <li>המשמעות: כל הרווחים שיצטברו בקרן כתוצאה מהשקעות (למשל מניות או אג"ח) יישארו פטורים ממס, בתנאי שהכספים יימשכו לפי הכללים (למשל, לאחר 6 שנים).</li>
          </ul>
          
          <h3 className="font-semibold mb-2 mt-4">דוגמה מעשית:</h3>
          <p>עצמאי עם הכנסה חייבת של 200,000 ₪:</p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>מפקיד 9,000 ₪ לקרן השתלמות.</li>
            <li>4.5% מהכנסה זו (9,000 ₪) יוכרו כהוצאה מוכרת.</li>
            <li>הרווח החייב במס יפחת ל-191,000 ₪.</li>
            <li>מפקיד סכום נוסף של 11,520 ₪ (כך שהסכום הכולל מגיע ל-20,520 ₪).</li>
            <li>על החלק הנוסף אין ניכוי כהוצאה מוכרת.</li>
            <li>הרווחים על מלוא ההפקדה (20,520 ₪) יהיו פטורים ממס רווחי הון.</li>
          </ul>
        </section>
        
        {/* סיכום */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-primary">סיכום:</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>ניכוי מס (הוצאה מוכרת): עד 13,203 ₪ בשנה (4.5% מההכנסה החייבת).</li>
            <li>פטור ממס רווחי הון: עד 20,520 ₪ בשנה, לא תלוי בגובה ההכנסה.</li>
          </ul>
          
          <h3 className="font-semibold mb-2 mt-4">כללים חשובים:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>ניתן למשוך את הכספים בפטור ממס לאחר 6 שנים (או 3 שנים לצורכי לימודים).</li>
            <li>מומלץ לנצל את הטבות המס הללו למקסום חיסכון עתידי ולמינוף כלכלי.</li>
            <li>קרן השתלמות היא כלי מעולה לעצמאים שמאפשר גם חיסכון אפקטיבי וגם חיסכון במס.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DepositFundForFreelancers;
