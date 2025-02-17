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
      text: 'עולם הקהילות',
      href: '/communities',
      subLinks: [
        { href: '/communities/judges-and-police', text: 'שופטים ושוטרים' },
        { href: '/communities/monetization-and-pricing', text: 'מוניטיזציה ותמחור' },
        { href: '/communities/marketing-writing', text: 'כתיבה שיווקית' },
        { href: '/communities/group-managers-legal-responsibility', text: 'אחריות משפטית' },
        { href: '/communities/monetization', text: 'מוניטיזציה' },
        { href: '/communities/shaming', text: 'שיימינג' },
      ],
    },
    {
      text: 'התוספים שלי',
      href: null,
      subLinks: [
        { href: '/myextensions/gmac', text: 'Gmac' },
        { href: '/myextensions/groupsmonitoring', text: 'GroupsMonitoring' },
        { href: '/myextensions/replycomments', text: 'ReplyComments' },
      ],
    },
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
      text: 'סטריאוטיפים',
      href: null,
      subLinks: [
        { href: '/stereotypes/why-not-haredim', text: 'למה אסור לכתוב חרדים' },
        { href: '/stereotypes/the-haredim', text: 'החרדים' },
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
    <nav className="bg-primary shadow-lg z-50 relative">
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

          {/* Logo for Mobile */}
          <div className="md:hidden">
            <Link href="/">
              <a>
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
              </a>
            </Link>
          </div>
          
          {/* Logo for Desktop */}
          <div className="hidden md:block md:order-2"> {/* Added md:order-2 */}
            <Link href="/">
              <a>
                <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
              </a>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse md:order-1"> {/* Added md:order-1 */}
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
                      <div className="absolute bg-primary shadow-lg mt-1 transition-all duration-300 ease-in-out transform scale-y-100 origin-top z-50">
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
                        className={`block px-3 py-2 rounded-md text-blue-500 text-right hover:bg-primary/80 transition-colors`} // Changed to blue
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
                        className={`block px-3 py-2 rounded-md text-blue-500 text-right hover:bg-primary/80 transition-colors`} // Changed to blue
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
