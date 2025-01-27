import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-2 flex items-center justify-center"> {/* Changed p-4 to p-2 */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-4"> {/* Changed mb-6 to mb-4 */}
          אוטומציות לפייסבוק
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-4">
          מחשבות שלא יהיו
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-4">
          עצמאים ועצמאיות בישראל
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-4">
          אתגרי ניהול קהילות
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-4">
          בינה מלאכותית במיוחד
        </h1>
        <p className="text-lg text-gray-600">
          ועוד
        </p>
      </div>
    </div>
  );
}