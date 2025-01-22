import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white p-4 text-center">
        {/* הוסף טופס Netlify Forms */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">הוסף הערה</h2>
          <form name="contact" method="POST" data-netlify="true" className="flex flex-col items-center">
            <input type="hidden" name="form-name" value="contact" />
            <textarea
              name="message"
              placeholder="הזן את ההערה שלך כאן..."
              className="w-full max-w-md p-2 rounded-md text-black bg-secondary resize-none"
              style={{ minHeight: '100px' }}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
            >
              שלח
            </button>
          </form>
        </div>
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
