import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function Stat({ label, value, unit, delta, deltaDirection = 'up', deltaPositive = true, context, highlight = false, style }) {
  const dc = deltaPositive ? 'var(--success)' : 'var(--danger)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ font: 'var(--text-label)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-3)' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontSize: 36, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.035em', fontVariantNumeric: 'tabular-nums', color: highlight ? 'var(--accent-text)' : 'var(--text-1)' }}>{value}</span>
        {unit && <span style={{ fontSize: 15, color: 'var(--text-2)' }}>{unit}</span>}
      </div>
      {(delta || context) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-3)' }}>
          {delta && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, color: dc, fontWeight: 500 }}><Icon name={deltaDirection === 'up' ? 'arrow-up-right' : 'arrow-down-right'} size={14} />{delta}</span>}
          {context && <span>{context}</span>}
        </div>
      )}
    </div>
  );
}
