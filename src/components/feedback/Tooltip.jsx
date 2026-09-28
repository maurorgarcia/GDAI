'use client';
import React, { useState } from 'react';

export function Tooltip({ content, side = 'top', children, style }) {
  const [open, setOpen] = useState(false);
  const pos = side === 'bottom' ? { top: 'calc(100% + 6px)' } : { bottom: 'calc(100% + 6px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', left: '50%', ...pos, transform: 'translateX(-50%) translateY(' + (open ? 0 : side === 'bottom' ? -2 : 2) + 'px)', opacity: open ? 1 : 0, pointerEvents: 'none', transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)', background: 'var(--surface-inverse)', color: 'var(--text-inverse)', font: '500 12px/1.35 var(--font-sans)', padding: '6px 8px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 50 }}>
        {content}
      </span>
    </span>
  );
}
