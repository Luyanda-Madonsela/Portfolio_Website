import './styles/globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export const metadata = {
  title: 'Luyanda Madonsela',
  description: "Luyanda Madonsela's Portfolio Website",
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({children,}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden overflow-y-auto font-poppins whitespace-nowrap scrollbar-hide bg-gradient-to-b from-gray-50 to-sky-100">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
