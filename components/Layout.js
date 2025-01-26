import { useState } from 'react';
import Navigation from './Navigation';

export default function Layout({ children }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary text-white p-4 text-center">
        {/* הוסף טופס Netlify Forms */}
        <div className="mt-6">
          {!submitted && <h2 className="text-xl font-semibold mb-2">רשמו הערה</h2>}
          {submitted ? (
            <p className="text-blue-500">תודה. ההודעה נשלחה.</p>
          ) : (
            <form name="contact" method="POST" data-netlify="true" className="flex flex-col items-center" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <textarea
                name="message"
                className="w-full max-w-md p-2 rounded-md text-black bg-primary border resize-none"
                rows="2"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-secondary text-primary rounded-md hover:bg-secondary-dark transition-colors"
              >
                שלח
              </button>
            </form>
          )}
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
