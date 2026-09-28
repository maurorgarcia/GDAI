import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-tabs', `
.gd-tabs{display:flex;gap:24px;border-bottom:1px solid var(--border);font-family:var(--font-sans)}
.gd-tab{position:relative;display:inline-flex;align-items:center;gap:8px;height:40px;padding:0;border:0;background:none;color:var(--text-3);font:500 14px/1 var(--font-sans);letter-spacing:-0.01em;cursor:pointer;transition:var(--transition-control)}
.gd-tab:hover{color:var(--text-1)}
.gd-tab:focus-visible{outline:none;box-shadow:var(--focus-shadow);border-radius:2px}
.gd-tab[aria-selected=true]{color:var(--text-1)}
.gd-tab[aria-selected=true]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--accent)}
.gd-tab__n{font:500 11px/1 var(--font-mono);color:var(--text-3);padding:3px 5px;border-radius:3px;background:var(--surface-3)}
.gd-tabs--seg{display:inline-flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:8px;background:var(--surface-1)}
.gd-tabs--seg .gd-tab{height:30px;padding:0 12px;border-radius:5px}
.gd-tabs--seg .gd-tab[aria-selected=true]{background:var(--surface-3)}
.gd-tabs--seg .gd-tab[aria-selected=true]::after{display:none}
`);

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
