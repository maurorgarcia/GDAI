import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const MAP = {
  success: { icon: 'circle-check', c: 'var(--success)', bg: 'var(--success-soft)' },
  warning: { icon: 'triangle-alert', c: 'var(--warning)', bg: 'var(--warning-soft)' },
  danger: { icon: 'circle-x', c: 'var(--danger)', bg: 'var(--danger-soft)' },
  info: { icon: 'info', c: 'var(--info)', bg: 'var(--info-soft)' },
  neutral: { icon: 'circle-dot', c: 'var(--text-2)', bg: 'var(--surface-2)' },
};

export function Alert({ status = 'info', title, children, action, style }) {
  const s = MAP[status] || MAP.info;
  return (
    <div role={status === 'danger' ? 'alert' : 'status'} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 'var(--radius-lg)', background: s.bg, border: '1px solid ' + 'color-mix(in srgb, ' + s.c + ' 28%, transparent)', fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ color: s.c, marginTop: 2, display: 'flex' }}><Icon name={s.icon} size={16} /></span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title && <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)', lineHeight: 1.4 }}>{title}</div>}
        {children && <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{children}</div>}
      </div>
      {action && <div style={{ flex: 'none', alignSelf: 'center' }}>{action}</div>}
    </div>
  );
}
