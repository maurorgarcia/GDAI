import React from 'react';
import { BrandIcon } from '../icons/BrandIcon.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

export function WhatsAppButton() {
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
        color: 'var(--on-accent)',
        borderRadius: '50%',
        boxShadow: 'var(--shadow-dropdown)',
      }}
    >
      <BrandIcon name="whatsapp" size={26} />
    </a>
  );
}
