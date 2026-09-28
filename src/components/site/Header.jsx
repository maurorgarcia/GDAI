'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../actions/Button.jsx';
import { IconButton } from '../actions/IconButton.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

const LINKS = [
  ['Problemas', '/#problemas'],
  ['Soluciones', '/#soluciones'],
  ['Cómo trabajamos', '/#proceso'],
  ['Trabajos', '/#trabajos'],
  ['Preguntas', '/#preguntas'],
];

const CTA_HREF = whatsappHref('Hola, quiero agendar un diagnóstico para mi empresa.');

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: solid ? 'rgba(10,10,10,0.8)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        borderBottom: '1px solid ' + (solid ? 'var(--border)' : 'transparent'),
        transition: 'background-color var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      }}
    >
      <div className="wrap" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <Link href="/" aria-label="Go Dream AI — Inicio" style={{ display: 'flex' }} onClick={() => setOpen(false)}>
          <Image src="/logo-white.png" alt="Go Dream AI" height={28} width={54} style={{ height: 28, width: 'auto' }} priority />
        </Link>
        <nav className="hide-sm" aria-label="Principal" style={{ display: 'flex', gap: 32 }}>
          {LINKS.map(([label, href]) => (
            <Link key={href} className="navlink" href={href}>{label}</Link>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="nav-cta">
            <Button size="sm" iconRight="arrow-right" href={CTA_HREF} target="_blank" rel="noopener">Agendar diagnóstico</Button>
          </span>
          <span className="nav-mobile">
            <IconButton
              icon={open ? 'x' : 'menu'}
              label={open ? 'Cerrar menú' : 'Abrir menú'}
              variant="secondary"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="nav-panel"
            />
          </span>
        </div>
      </div>
      {open && (
        <div id="nav-panel" className="nav-panel nav-mobile" style={{ flexDirection: 'column' }}>
          <nav className="wrap" aria-label="Principal" style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 4, paddingBottom: 20 }}>
            {LINKS.map(([label, href]) => (
              <Link key={href} className="navlink" href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <div style={{ paddingTop: 20 }}>
              <Button size="lg" fullWidth iconRight="arrow-right" href={CTA_HREF} target="_blank" rel="noopener" onClick={() => setOpen(false)}>Agendar diagnóstico</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
