'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../actions/Button.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

const LINKS = [
  ['Problemas', '/#problemas'],
  ['Soluciones', '/#soluciones'],
  ['Cómo trabajamos', '/#proceso'],
  ['Trabajos', '/#trabajos'],
  ['Preguntas', '/#preguntas'],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: scrolled ? 'rgba(10,10,10,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: '1px solid ' + (scrolled ? 'var(--border)' : 'transparent'),
        transition: 'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      }}
    >
      <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link href="/" aria-label="Go Dream AI — Inicio" style={{ display: 'flex' }}>
          <Image src="/logo-white.png" alt="Go Dream AI" height={28} width={54} style={{ height: 28, width: 'auto' }} priority />
        </Link>
        <nav className="hide-sm" style={{ display: 'flex', gap: 32 }}>
          {LINKS.map(([label, href]) => (
            <Link key={href} className="navlink" href={href}>{label}</Link>
          ))}
        </nav>
        <Button size="sm" iconRight="arrow-right" href={whatsappHref('Hola, quiero agendar un diagnóstico para mi empresa.')} target="_blank" rel="noopener">Agendar diagnóstico</Button>
      </div>
    </header>
  );
}
