import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Spinner } from '../feedback/Spinner.jsx';

const MAP = {
  success: { icon: 'circle-check', c: 'var(--success)', bg: 'var(--success-soft)' },
  warning: { icon: 'triangle-alert', c: 'var(--warning)', bg: 'var(--warning-soft)' },
  danger: { icon: 'circle-x', c: 'var(--danger)', bg: 'var(--danger-soft)' },
  info: { icon: 'info', c: 'var(--info)', bg: 'var(--info-soft)' },
  accent: { icon: 'zap', c: 'var(--accent-text)', bg: 'var(--accent-soft)' },
  neutral: { icon: null, c: 'var(--text-2)', bg: 'var(--surface-3)' },
  processing: { icon: null, c: 'var(--info)', bg: 'var(--info-soft)' },
};

export function Badge({ status = 'neutral', icon, dot = false, size = 'md', children, style }) {
  const s = MAP[status] || MAP.neutral;
  const ic = icon === undefined ? s.icon : icon;
  const h = size === 'sm' ? 20 : 24;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: h, padding: size === 'sm' ? '0 6px' : '0 8px', borderRadius: 'var(--radius-sm)', background: s.bg, color: s.c, font: '500 12px/1 var(--font-sans)', letterSpacing: '-0.005em', whiteSpace: 'nowrap', ...style }}>
      {status === 'processing' ? <Spinner size={11} /> : dot || !ic ? <span style={{ width: 6, height: 6, borderRadius: status === 'neutral' ? 1 : '50%', background: 'currentColor', flex: 'none' }} /> : <Icon name={ic} size={12} />}
      {children}
    </span>
  );
}
