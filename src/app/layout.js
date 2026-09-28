import './globals.css';
import { Header } from '@/components/site/Header.jsx';
import { Footer } from '@/components/site/Footer.jsx';
import { WhatsAppButton } from '@/components/site/WhatsAppButton.jsx';

export const metadata = {
  metadataBase: new URL('https://www.godreamai.com'),
  title: {
    default: 'Go Dream AI — Soluciones con IA y automatización',
    template: '%s · Go Dream AI',
  },
  description: 'Ayudamos a las empresas a ganar más tiempo y dinero mediante soluciones con IA para que puedan escalar.',
  openGraph: {
    title: 'Go Dream AI — Soluciones con IA y automatización',
    description: 'Ayudamos a las empresas a ganar más tiempo y dinero mediante soluciones con IA para que puedan escalar.',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
