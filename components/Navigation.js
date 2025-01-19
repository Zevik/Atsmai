import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', text: 'דף הבית' },
    { href: '/employer-obligations', text: 'חובות המעביד' },
    { href: '/worker-employer-relations', text: 'יחסי עובד-מעביד' }, // Changed menu item text
    { href: '/deposit-fund-for-freelancers', text: 'קרן השתלמות' }, // Changed menu item text
    { href: '/practical-guide-global-contract', text: 'העסקה בחוזה גלובלי' }, // Changed menu item text
    { href: '/end-employment', text: 'סיום העסקה' }, // Added new menu item
    { href: '/small-business', text: 'עוסק זעיר' }, // Added new menu item
    { href: '/cash-fund', text: 'קרן כספית' }, // Added new menu item
    { href: '/self-employed-in-israel', text: 'עצמאים בישראל' }, // Updated URL
  ];

  const isActive = (path) => router.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-4xl mx-auto px-4 flex flex-row-reverse justify-between items-center h-16">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:flex-row-reverse md:items-center md:space-x-reverse md:space-x-4">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
            >
              <a 
                className={`px-3 py-2 rounded-md text-white text-right hover:bg-primary/80 transition-colors ${
                  isActive(link.href) ? 'bg-primary/80 cursor-default' : ''
                }`}
                onClick={(e) => isActive(link.href) && e.preventDefault()}
              >
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
            >
              <a 
                className={`block px-3 py-2 rounded-md text-white hover:bg-primary/80 transition-colors ${
                  isActive(link.href) ? 'bg-primary/80 cursor-default' : ''
                }`}
                onClick={handleLinkClick}
              >
                {link.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
