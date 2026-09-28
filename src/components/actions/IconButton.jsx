import React from 'react';
import { injectCss } from '../shared/css.js';
import { Icon } from '../icons/Icon.jsx';

injectCss('gd-iconbtn', `
.gd-ib{display:inline-flex;align-items:center;justify-content:center;flex:none;border:1px solid transparent;border-radius:var(--radius-control);cursor:pointer;transition:var(--transition-control);padding:0}
.gd-ib:focus-visible{outline:none;box-shadow:var(--focus-shadow)}
.gd-ib:active:not(:disabled){transform:translateY(1px)}
.gd-ib:disabled{opacity:.4;cursor:not-allowed}
.gd-ib--sm{width:var(--control-h-sm);height:var(--control-h-sm)}
.gd-ib--md{width:var(--control-h-md);height:var(--control-h-md)}
.gd-ib--lg{width:var(--control-h-lg);height:var(--control-h-lg)}
.gd-ib--primary{background:var(--accent);color:var(--on-accent)}
.gd-ib--primary:hover:not(:disabled){background:var(--accent-hover)}
.gd-ib--secondary{background:transparent;color:var(--text-1);border-color:var(--border-strong)}
.gd-ib--secondary:hover:not(:disabled){border-color:var(--border-hover);background:var(--surface-2)}
.gd-ib--tertiary{background:transparent;color:var(--text-2)}
.gd-ib--tertiary:hover:not(:disabled){color:var(--text-1);background:var(--surface-2)}
.gd-ib[aria-pressed=true]{color:var(--accent-text);background:var(--accent-soft)}
`);

export function IconButton({ icon, label, variant = 'tertiary', size = 'md', pressed, className = '', ...rest }) {
  const is = size === 'lg' ? 20 : size === 'sm' ? 14 : 16;
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={pressed} className={['gd-ib', 'gd-ib--' + variant, 'gd-ib--' + size, className].join(' ')} {...rest}>
      <Icon name={icon} size={is} />
    </button>
  );
}
