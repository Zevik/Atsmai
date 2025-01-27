import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-secondary/20 overflow-x-hidden p-2 flex items-center justify-center">
      <div className="text-center">
        {/* Removed existing headings and texts */}

        {/* New Hero Section */}
        <h1 className="text-5xl font-bold text-primary mb-4">נעים מאוד</h1>
        <p className="text-xl text-gray-700 mb-6">זאביק אבינר</p>
        {/* Removed Get Started button */}
      </div>
    </div>
  );
}