import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
