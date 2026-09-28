import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-progress', '@keyframes gd-indet{0%{transform:translateX(-100%)}100%{transform:translateX(250%)}}');

export function Progress({ value = 0, label, showValue = false, indeterminate = false, size = 'md', style }) {
  const h = size === 'sm' ? 2 : 4;
  const v = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-sans)', ...style }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--text-2)' }}>
          <span>{label}</span>{showValue && !indeterminate && <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-1)' }}>{Math.round(v)}%</span>}
        </div>
      )}
      <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={indeterminate ? undefined : v} aria-label={label} style={{ height: h, background: 'var(--surface-3)', borderRadius: h, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: indeterminate ? '40%' : v + '%', background: 'var(--accent)', borderRadius: h, transition: 'width var(--dur-slow) var(--ease-out)', animation: indeterminate ? 'gd-indet 1.2s var(--ease-in-out) infinite' : undefined }} />
      </div>
    </div>
  );
}
