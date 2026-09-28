import React from 'react';

export function Tabs({ items = [], value, onChange, variant = 'underline', style }) {
  return (
    <div role="tablist" className={'gd-tabs' + (variant === 'segmented' ? ' gd-tabs--seg' : '')} style={style}>
      {items.map((it) => {
        const v = typeof it === 'string' ? { value: it, label: it } : it;
        return (
          <button key={v.value} role="tab" type="button" className="gd-tab" aria-selected={v.value === value} onClick={() => onChange && onChange(v.value)}>
            {v.label}{v.count !== undefined && <span className="gd-tab__n">{v.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
