import React from 'react';
import { injectCss } from '../shared/css.js';
import { Icon } from '../icons/Icon.jsx';

injectCss('gd-choice', `
.gd-choice{display:inline-flex;align-items:flex-start;gap:10px;cursor:pointer;font-family:var(--font-sans);position:relative}
.gd-choice input{position:absolute;opacity:0;width:1px;height:1px;margin:0}
.gd-choice__box{flex:none;width:18px;height:18px;margin-top:1px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border-hover);background:var(--surface-1);color:var(--on-accent);transition:var(--transition-control)}
.gd-choice:hover .gd-choice__box{border-color:var(--text-2)}
.gd-choice input:focus-visible+.gd-choice__box{box-shadow:var(--focus-shadow)}
.gd-choice--cb .gd-choice__box{border-radius:var(--radius-sm)}
.gd-choice--rd .gd-choice__box{border-radius:50%}
.gd-choice input:checked+.gd-choice__box,.gd-choice input[data-ind=true]+.gd-choice__box{background:var(--accent);border-color:var(--accent)}
.gd-choice--rd input:checked+.gd-choice__box{background:var(--surface-1)}
.gd-choice--cb input:not(:checked):not([data-ind=true])+.gd-choice__box>*{opacity:0}
.gd-choice__dot{width:8px;height:8px;border-radius:50%;background:var(--accent);transform:scale(0);transition:transform var(--dur-fast) var(--ease-out)}
.gd-choice input:checked+.gd-choice__box .gd-choice__dot{transform:scale(1)}
.gd-choice__txt{display:flex;flex-direction:column;gap:2px}
.gd-choice__lbl{font-size:14px;line-height:20px;color:var(--text-1)}
.gd-choice__desc{font-size:13px;line-height:1.45;color:var(--text-3)}
.gd-choice--dis{cursor:not-allowed;opacity:.45}
`);

export function Checkbox({ label, description, indeterminate = false, disabled, style, className = '', ...rest }) {
  return (
    <label className={['gd-choice gd-choice--cb', disabled && 'gd-choice--dis', className].filter(Boolean).join(' ')} style={style}>
      <input type="checkbox" disabled={disabled} data-ind={indeterminate || undefined} aria-checked={indeterminate ? 'mixed' : undefined} {...rest} />
      <span className="gd-choice__box" aria-hidden="true">
        {indeterminate ? <Icon name="minus" size={12} /> : <Icon name="check" size={12} className="gd-choice__tick" />}
      </span>
      {(label || description) && <span className="gd-choice__txt">{label && <span className="gd-choice__lbl">{label}</span>}{description && <span className="gd-choice__desc">{description}</span>}</span>}
    </label>
  );
}
