import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsappHref } from '../../lib/whatsapp.js';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="wrap stack-sm" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 32, padding: '56px var(--gutter) 40px' }}>
        <div className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Image className="center-sm" src="/logo-white.png" alt="Go Dream AI" height={32} width={62} style={{ height: 32, width: 'auto', display: 'block', alignSelf: 'flex-start', objectFit: 'contain' }} />
          <p style={{ fontSize: 14, color: 'var(--text-3)', maxWidth: 340 }}>Ayudamos a las empresas a ganar más tiempo y dinero mediante soluciones con IA para que puedan escalar.</p>
        </div>
        <div className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
          <span className="eyebrow">Empresa</span>
          <Link className="navlink" href="/#soluciones">Soluciones</Link>
          <Link className="navlink" href="/#proceso">Cómo trabajamos</Link>
          <Link className="navlink" href="/#trabajos">Trabajos</Link>
          <Link className="navlink" href="/#preguntas">Preguntas frecuentes</Link>
        </div>
        <div className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span style={{ font: '700 14px/1 var(--font-sans)', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-1)', marginBottom: 4 }}>Contacto</span>
          {[['whatsapp', 'WhatsApp', whatsappHref('Hola, quiero saber más sobre Go Dream AI.')], ['instagram', 'Instagram', 'https://www.instagram.com/godreamai.ar/']].map(([n, l, href]) => (
            <a key={n} className="fcontact" href={href} target="_blank" rel="noopener">
              <img src={'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/' + n + '.svg'} alt="" width="20" height="20" />{l}
            </a>
          ))}
          <a className="fcontact" href="mailto:go@godreamai.com">go@godreamai.com</a>
          <span style={{ fontSize: 15, color: 'var(--text-3)', opacity: 0.7 }}>Buenos Aires, Argentina</span>
        </div>
      </div>
      <div className="wrap center-sm" style={{ padding: '20px var(--gutter)', borderTop: '1px solid var(--border)', fontSize: 13, color: 'var(--text-3)' }}>
        <span>© 2026 Go Dream AI</span>
      </div>
    </footer>
  );
}
