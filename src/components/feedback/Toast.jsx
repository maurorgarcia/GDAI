import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Spinner } from '../feedback/Spinner.jsx';

const MAP = { success: ['circle-check', 'var(--success)'], danger: ['circle-x', 'var(--danger)'], warning: ['triangle-alert', 'var(--warning)'], info: ['info', 'var(--info)'], loading: [null, 'var(--text-2)'] };

export function Toast({ status = 'success', title, description, action, onClose, style }) {
  const [ic, c] = MAP[status] || MAP.info;
  return (
    <div role="status" aria-live="polite" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', width: 360, maxWidth: '100%', padding: '14px 14px 14px 16px', background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-dropdown)', fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ color: c, marginTop: 2, display: 'flex' }}>{status === 'loading' ? <Spinner size={16} /> : <Icon name={ic} size={16} />}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.4 }}>{title}</div>
        {description && <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.45, marginTop: 2 }}>{description}</div>}
        {action && <div style={{ marginTop: 10 }}>{action}</div>}
      </div>
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Cerrar" style={{ display: 'flex', padding: 4, margin: '-2px -2px 0 0', border: 0, background: 'none', color: 'var(--text-3)', cursor: 'pointer', borderRadius: 4 }}>
          <Icon name="x" size={14} />
        </button>
      )}
    </div>
  );
}
