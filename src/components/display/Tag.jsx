import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function Tag({ children, icon, onRemove, selected = false, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 24, padding: onRemove ? '0 4px 0 8px' : '0 8px', border: '1px solid ' + (selected ? 'var(--accent)' : 'var(--border-strong)'), borderRadius: 'var(--radius-tag)', color: selected ? 'var(--accent-text)' : 'var(--text-2)', font: '500 11px/1 var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', ...style }}>
      {icon && <Icon name={icon} size={12} />}
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} aria-label="Quitar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 16, padding: 0, border: 0, borderRadius: 2, background: 'transparent', color: 'inherit', cursor: 'pointer' }}>
          <Icon name="x" size={12} />
        </button>
      )}
    </span>
  );
}
