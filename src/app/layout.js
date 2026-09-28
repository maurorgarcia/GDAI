import './globals.css';
import { preload } from 'react-dom';
import { Header } from '@/components/site/Header.jsx';
import { Footer } from '@/components/site/Footer.jsx';
import { WhatsAppButton } from '@/components/site/WhatsAppButton.jsx';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp.js';

const SITE_URL = 'https://www.godreamai.com';
const TITLE = 'Go Dream AI — Soluciones con IA y automatización';
const DESCRIPTION = 'Ayudamos a las empresas a ganar más tiempo y dinero mediante soluciones con IA para que puedan escalar.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · Go Dream AI',
  },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Go Dream AI',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
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

// Datos estructurados para Google (Organization).
const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Go Dream AI',
  url: SITE_URL,
  logo: SITE_URL + '/android-chrome-512x512.png',
  description: DESCRIPTION,
  email: 'go@godreamai.com',
  telephone: '+' + WHATSAPP_NUMBER,
  address: { '@type': 'PostalAddress', addressLocality: 'Buenos Aires', addressCountry: 'AR' },
  sameAs: ['https://www.instagram.com/godreamai.ar/'],
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'go@godreamai.com', telephone: '+' + WHATSAPP_NUMBER, availableLanguage: 'es' }],
};

export default function RootLayout({ children }) {
  // La tipografía principal se pide desde el HTML (y no recién cuando se lee el CSS), para que el título pinte antes.
  preload('/fonts/Geist-latin.woff2', { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION).replace(/</g, '\\u003c') }} />
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header />
        <main id="contenido" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
