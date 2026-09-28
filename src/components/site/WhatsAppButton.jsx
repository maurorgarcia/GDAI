import React from 'react';
import { whatsappHref } from '../../lib/whatsapp.js';

export function WhatsAppButton() {
  const maskUrl = 'https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/whatsapp.svg';
  return (
    <a
      href={whatsappHref('Hola, quiero saber más sobre Go Dream AI.')}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      className="wa-fab"
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 30,
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--accent)',
        borderRadius: '50%',
        boxShadow: 'var(--shadow-dropdown)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 26,
          height: 26,
          display: 'block',
          background: 'var(--on-accent)',
          WebkitMask: `url(${maskUrl}) no-repeat center / contain`,
          mask: `url(${maskUrl}) no-repeat center / contain`,
        }}
      />
    </a>
  );
}
