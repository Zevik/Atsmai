import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const links = [
    { href: '/', text: 'דף הבית', subLinks: [] },
    {
      text: 'עצמאים ועצמאיות',
      href: null,
      subLinks: [
        { href: '/employer-obligations', text: 'חובות המעביד' },
        { href: '/worker-employer-relations', text: 'יחסי עובד-מעביד' },
        { href: '/deposit-fund-for-freelancers', text: 'קרן השתלמות' },
        { href: '/practical-guide-global-contract', text: 'העסקה בחוזה גלובלי' },
        { href: '/end-employment', text: 'סיום העסקה' },
        { href: '/small-business', text: 'עוסק זעיר' },
        { href: '/cash-fund', text: 'קרן כספית' },
        { href: '/self-employed-in-israel', text: 'עצמאים בישראל' },
      ],
    },
    {
      text: 'עולם הקהילות', // שונה מ'כלמיני'
      href: '/communities',    // עדכון ה-URL ל'communities'
      subLinks: [
        { href: '/blindness', text: 'על העיוורון' }, // Updated page
        { href: '/communities/judges-and-police', text: 'שופטים ושוטרים' }, // עדכון ה-URL ל'/communities/judges-and-police'
        { href: '/communities/monetization-and-pricing', text: 'מוניטיזציה ותמחור' }, // הוסף קישור חדש
        { href: '/communities/marketing-writing', text: 'כתיבה שיווקית' }, // הוסף קישור חדש
        { href: '/communities/group-managers-legal-responsibility', text: 'אחריות משפטית' }, // הוסף קישור חדש
        { href: '/communities/monetization', text: 'מוניטיזציה' }, // הוסף קישור חדש
      ],
    },
  ];

  const isActive = (path) => router.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (text) => {
    setActiveDropdown(activeDropdown === text ? null : text);
  };

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
              <div key={link.text} className="relative group">
                {link.subLinks.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.text)}
                      className={`px-3 py-2 rounded-md text-white text-right hover:bg-primary/80 transition-colors`}
                    >
                      {link.text}
                    </button>
                    {activeDropdown === link.text && (
                      <div className="absolute bg-primary shadow-lg mt-1 transition-all duration-300 ease-in-out transform scale-y-100 origin-top">
                        {link.subLinks.map(subLink => (
                          <Link key={subLink.href} href={subLink.href}>
                            <a
                              className="block px-4 py-2 text-white hover:bg-primary/70"
                              onClick={handleLinkClick}
                            >
                              {subLink.text}
                            </a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href}>
                    <a className={`px-3 py-2 rounded-md text-white text-right hover:bg-primary/80 transition-colors`}>
                      {link.text}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map(link => (
                <div key={link.text} className="relative">
                  {link.subLinks.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.text)}
                        className={`block px-3 py-2 rounded-md text-white text-right hover:bg-primary/80 transition-colors`}
                      >
                        {link.text}
                      </button>
                      {activeDropdown === link.text && (
                        <div className="pl-4 mt-1 space-y-1">
                          {link.subLinks.map(subLink => (
                            <Link key={subLink.href} href={subLink.href}>
                              <a
                                className={`block px-3 py-2 rounded-md text-white hover:bg-primary/80 transition-colors`}
                                onClick={handleLinkClick}
                              >
                                {subLink.text}
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href}>
                      <a
                        className={`block px-3 py-2 rounded-md text-white text-right hover:bg-primary/80 transition-colors`}
                        onClick={handleLinkClick}
                      >
                        {link.text}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
