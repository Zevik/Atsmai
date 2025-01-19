import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary animate-bounce mb-4">
          עצמאים ועצמאיות בישראל
        </h1>
        <p className="text-lg text-gray-600">
          כלמיני דברים שרציתם לדעת
        </p>
      </div>
    </div>
  );
}