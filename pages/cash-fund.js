import React from 'react';

const CashFund = () => {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold mb-8 text-primary text-center mt-8">הכי הרבה כסף שתעשו בחיים בחצי דקה</h1>
        
        {/* Split content into 3 transparent boxes */}
        <div className="flex flex-col space-y-4">
          <div className="bg-white bg-opacity-50 p-4 rounded-lg shadow"> {/* Changed bg-opacity from 75 to 50 */}
            {/* Box 1 Content */}
            <h2 className="text-xl font-semibold mb-4 text-primary">מעו"ש לקרן כספית בחצי דקה</h2>
            <p>היכנסו לחשבון הבנק שלכם וראו אם יש לכם פלוס בעובר ושב יותר ממה שאתם צריכים בחודש.</p>
            <p>עכשיו תחפשו בתפריט "שוק ההון" ותעבירו סכום לקרן כספית.</p>
            <p>זהו, פשוט, סיימתם.</p>
          </div>

          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow">
            {/* Box 2 Content */}
            <p>בקרן הכספית הערך של הכסף שלכם נשמר, כלומר הוא עולה ואתם לא מפסידים את הערך שלו בגלל האינפלציה. אתם תמיד יכולים להעביר לעובר ושב ולהחזיר לקרן בלחיצת כפתור לפי הצורך.</p>
            <p>ואם אתם מתלבטים איפה להשקיע את הכסף ואיך להשקיע, ואפילו אם זה יקרה עוד שבועיים - תשימו את הכסף בינתיים בקרן הכספית.</p>
            <p>וכל פעם שאתם רואים שנכנס עוד כסף לחשבון ויש יותר ממה שאתם צריכים בעובר ושב - פשוט תעבירו לקרן. כל יום שהכסף בעובר ושב ולא בקרן, זה הפסד בשבילכם.</p>
          </div>

          <div className="bg-white bg-opacity-75 p-4 rounded-lg shadow">
            {/* Box 3 Content */}
            <h2 className="text-xl font-semibold mb-4 text-primary">מה זה?</h2>
            <p>ואם אתם שואלים מה זה בכלל קרן כספית? זה פשוט קרן שלוקחת את הכסף שלכם ומשקיעה אותו בדברים הכי בטוחים שיש - כמו פיקדונות בבנק ואגרות חוב של המדינה.</p>
            
            <h2 className="text-xl font-semibold mb-4 text-primary">יש לזה כמה יתרונות ממש טובים:</h2>
            <ul className="list-disc list-inside mb-8">
              <li>הכסף שלכם בטוח כי משקיעים רק בדברים בטוחים</li>
              <li>אפשר להוציא את הכסף בכל יום שהבורסה פתוחה</li>
              <li>מקבלים בערך 4.5% תשואה שנתית (כמו הריבית של בנק ישראל היום)</li>
              <li>לא משלמים הרבה עמלות</li>
              <li>יש יתרון במס - משלמים רק על מה שמרוויחים מעל האינפלציה. למשל, אם הקרן עשתה 5% והאינפלציה הייתה 5% - לא משלמים מס בכלל. אם האינפלציה הייתה 4%, משלמים מס של 25% רק על 1% מהרווחים</li>
              <li>זה בדיוק מה שצריך בשביל כסף שרוצים לשמור לחירום או להוצאה שמתכננים בקרוב. במקום לשים בפיקדון בבנק, שמים בקרן כספית - ככה הכסף זמין יותר ויש יותר גמישות.</li>
              <li>זה לא באמת משנה באיזה קרן תשימו, אבל הנה 2 המלצות: 5137740, 5137732.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFund;
