import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: '/', text: 'דף הבית' },
    { href: '/employer-obligations', text: 'חובות המעביד' },
    { href: '/worker-employer-relations', text: 'יחסי עובד-מעביד בעידן הפרילנסרים' }, // Changed menu item name
    { href: '/deposit-fund-for-freelancers', text: 'קרן השתלמות' }, // Changed menu item text
    { href: '/practical-guide-global-contract', text: 'העסקה בחוזה גלובלי' }, // Changed menu item text
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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
          <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
              >
                <a 
                  className={`px-3 py-2 rounded-md text-white hover:bg-primary/80 transition-colors ${
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
        {isOpen && (
          <div className="md:hidden">
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
                    onClick={(e) => isActive(link.href) && e.preventDefault()}
                  >
                    {link.text}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
