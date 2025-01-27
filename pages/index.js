import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-6">
          אוטומציות לפייסבוק
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-6">
          מחשבות שלא יהיו
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-6">
          עצמאים ועצמאיות בישראל
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-6">
          אתגרי ניהול קהילות
        </h1>
        <h1 className="text-3xl font-bold text-primary animate-pulse mb-6">
          בינה מלאכותית במיוחד
        </h1>
        <p className="text-lg text-gray-600">
          ועוד
        </p>
      </div>
    </div>
  );
}