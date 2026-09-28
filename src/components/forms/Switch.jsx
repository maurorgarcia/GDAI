import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-switch', `
.gd-sw{display:inline-flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--font-sans);position:relative}
.gd-sw input{position:absolute;opacity:0;width:1px;height:1px;margin:0}
.gd-sw__track{flex:none;width:34px;height:20px;border-radius:var(--radius-pill);background:var(--surface-3);border:1px solid var(--border-strong);position:relative;transition:var(--transition-control)}
.gd-sw__thumb{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:var(--text-2);transition:transform var(--dur-base) var(--ease-out),background-color var(--dur-fast) var(--ease-out)}
.gd-sw input:checked+.gd-sw__track{background:var(--accent);border-color:var(--accent)}
.gd-sw input:checked+.gd-sw__track .gd-sw__thumb{transform:translateX(14px);background:var(--on-accent)}
.gd-sw input:focus-visible+.gd-sw__track{box-shadow:var(--focus-shadow)}
.gd-sw__lbl{font-size:14px;color:var(--text-1)}
.gd-sw--dis{opacity:.45;cursor:not-allowed}
`);

export function Switch({ label, disabled, style, className = '', ...rest }) {
  return (
    <label className={['gd-sw', disabled && 'gd-sw--dis', className].filter(Boolean).join(' ')} style={style}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="gd-sw__track" aria-hidden="true"><span className="gd-sw__thumb" /></span>
      {label && <span className="gd-sw__lbl">{label}</span>}
    </label>
  );
}
