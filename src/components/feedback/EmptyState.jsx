import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function EmptyState({ icon = 'inbox', title, description, actions, align = 'center', style }) {
  const c = align === 'center';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: c ? 'center' : 'flex-start', textAlign: c ? 'center' : 'left', gap: 16, padding: '48px 24px', fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', color: 'var(--text-2)' }}><Icon name={icon} size={20} /></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 380 }}>
        <div style={{ font: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)', color: 'var(--text-1)' }}>{title}</div>
        {description && <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-2)' }}>{description}</div>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>{actions}</div>}
    </div>
  );
}
