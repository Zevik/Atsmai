import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white p-4 text-center">
        <p>
          כל הזכויות שמורות. {' '}
          <a 
            href="https://wa.me/972546609385" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            זאביק אבינר 0546609385
          </a>
        </p>
      </footer>
    </div>
  );
}
