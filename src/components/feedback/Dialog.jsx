'use client';
import React, { useEffect } from 'react';
import { IconButton } from '../actions/IconButton.jsx';

export function Dialog({ open, onClose, title, description, children, footer, width = 480 }) {
  useEffect(() => {
    if (!open) return;
    const k = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'var(--overlay)', backdropFilter: 'var(--blur-overlay)', WebkitBackdropFilter: 'var(--blur-overlay)' }}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '100%', maxHeight: '100%', overflow: 'auto', background: 'var(--surface-1)', borderRadius: 'var(--radius-dialog)', boxShadow: 'var(--shadow-dialog)', fontFamily: 'var(--font-sans)', color: 'var(--text-1)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '24px 24px 0' }}>
          <div>
            <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>{title}</div>
            {description && <div style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.5, marginTop: 6 }}>{description}</div>}
          </div>
          {onClose && <IconButton icon="x" label="Cerrar" size="sm" onClick={onClose} style={{ margin: '-4px -8px 0 0' }} />}
        </div>
        {children && <div style={{ padding: '20px 24px 0' }}>{children}</div>}
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: 24 }}>{footer}</div>}
        {!footer && <div style={{ height: 24 }} />}
      </div>
    </div>
  );
}
