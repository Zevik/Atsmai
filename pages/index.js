export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">עצמאים בישראל</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">סיווגים במע"מ</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">קריטריון</th>
                <th className="py-2">עוסק פטור</th>
                <th className="py-2">עוסק מורשה</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">תקרת הכנסות למע"מ</td>
                <td className="border px-4 py-2">עד 120,000 ₪</td>
                <td className="border px-4 py-2">ללא הגבלה</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">חיוב מע"מ</td>
                <td className="border px-4 py-2">פטור מגביית מע"מ</td>
                <td className="border px-4 py-2">חייב בגביית מע"מ</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">דיווח למע"מ</td>
                <td className="border px-4 py-2">פטור מדיווחים שוטפים</td>
                <td className="border px-4 py-2">חודשי/דו-חודשי</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">קיזוז מע"מ תשומות</td>
                <td className="border px-4 py-2">לא יכול לקזז</td>
                <td className="border px-4 py-2">יכול לקזז</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">סיווג במס הכנסה (עוסק זעיר)</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">קריטריון</th>
                <th className="py-2">פרטים</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">תקרת הכנסות</td>
                <td className="border px-4 py-2">עד 120,000 ₪</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">הוצאות מוכרות</td>
                <td className="border px-4 py-2">30% מההכנסות באופן אוטומטי (למעט ביטוח לאומי שמחייב הצגת קבלות)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">דיווח למס הכנסה</td>
                <td className="border px-4 py-2">פטור מדוח שנתי מלא</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">מי יכול להצטרף</td>
                <td className="border px-4 py-2">כל עוסק (פטור או מורשה) שהכנסתו עד 120,000 ₪</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">חיוב ביטוח לאומי (זהה לכולם)</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">קריטריון</th>
                <th className="py-2">פרטים</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">חיוב</td>
                <td className="border px-4 py-2">חייב בתשלום</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">מדרגות</td>
                <td className="border px-4 py-2">5.97% עד 75,216 ₪ לשנה, 17.83% מעל</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">הערות חשובות</h2>
          <ul className="list-disc list-inside">
            <li>כל עוסק (פטור או מורשה) שהכנסתו השנתית עד 120,000 ₪ יכול לבחור במסלול עוסק זעיר במס הכנסה</li>
            <li>הבחירה להיות עוסק זעיר לא משפיעה על הסיווג במע"מ</li>
            <li>עוסק שבחר במסלול זעיר:
              <ul className="list-disc list-inside ml-4">
                <li>נהנה מ-30% הוצאות אוטומטיות (למעט ביטוח לאומי)</li>
                <li>חייב להציג קבלות עבור תשלומי ביטוח לאומי כדי להכיר בהן כהוצאה</li>
                <li>פטור מדוח שנתי מלא למס הכנסה</li>
              </ul>
            </li>
            <li>עוסק שלא בחר במסלול זעיר:
              <ul className="list-disc list-inside ml-4">
                <li>מדווח על הוצאות לפי קבלות</li>
                <li>חייב בדוח שנתי מלא למס הכנסה</li>
              </ul>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">הוצאות מוכרות והטבות מס חשובות</h2>
          <ul className="list-disc list-inside">
            <li>קרן השתלמות:
              <ul className="list-disc list-inside ml-4">
                <li>הוצאה מוכרת: עד 4.5% מהרווח השנתי (מקסימום 11,925 ₪)</li>
                <li>פטור ממס רווחי הון: על הפקדות עד 20,520 ₪ בשנה</li>
                <li>חשוב: הפטור ממס רווחי הון לא תלוי בגובה ההכנסה</li>
              </ul>
            </li>
            <li>קרן פנסיה:
              <ul className="list-disc list-inside ml-4">
                <li>זיכוי מס: 35% מההפקדה המוכרת</li>
                <li>הוצאה מוכרת: עד 16.5% מהרווח השנתי</li>
                <li>תקרת הפקדה מוכרת: 34,488 ₪ בשנה</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
