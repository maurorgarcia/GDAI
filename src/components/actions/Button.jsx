import React from 'react';
import { injectCss } from '../shared/css.js';
import { Icon } from '../icons/Icon.jsx';
import { Spinner } from '../feedback/Spinner.jsx';

injectCss('gd-button', `
.gd-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid transparent;border-radius:var(--radius-control);font-family:var(--font-sans);font-weight:500;letter-spacing:-0.01em;line-height:1;cursor:pointer;white-space:nowrap;text-decoration:none;transition:var(--transition-control);position:relative}
.gd-btn:focus-visible{outline:none;box-shadow:var(--focus-shadow)}
.gd-btn:active:not(:disabled){transform:translateY(1px)}
.gd-btn:disabled,.gd-btn[aria-disabled=true]{cursor:not-allowed;opacity:.4}
.gd-btn--sm{height:var(--control-h-sm);padding:0 12px;font-size:13px}
.gd-btn--md{height:var(--control-h-md);padding:0 16px;font-size:14px}
.gd-btn--lg{height:var(--control-h-lg);padding:0 22px;font-size:15px}
.gd-btn--primary{background:var(--accent);color:var(--on-accent)}
.gd-btn--primary:hover:not(:disabled){background:var(--accent-hover)}
.gd-btn--primary:active:not(:disabled){background:var(--accent-press)}
.gd-btn--secondary{background:transparent;color:var(--text-1);border-color:var(--border-strong)}
.gd-btn--secondary:hover:not(:disabled){border-color:var(--border-hover);background:var(--surface-2)}
.gd-btn--tertiary{background:transparent;color:var(--text-2);padding-left:8px;padding-right:8px}
.gd-btn--tertiary:hover:not(:disabled){color:var(--text-1);background:var(--surface-2)}
.gd-btn--inverse{background:var(--surface-inverse);color:var(--text-inverse)}
.gd-btn--inverse:hover:not(:disabled){opacity:.88}
.gd-btn--danger{background:var(--danger-soft);color:var(--danger)}
.gd-btn--danger:hover:not(:disabled){background:var(--danger);color:var(--bg)}
a.gd-btn--primary,a.gd-btn--primary:hover{color:var(--on-accent)}
a.gd-btn--secondary,a.gd-btn--secondary:hover{color:var(--text-1)}
a.gd-btn--tertiary{color:var(--text-2)}
a.gd-btn--tertiary:hover{color:var(--text-1)}
a.gd-btn--inverse,a.gd-btn--inverse:hover{color:var(--text-inverse)}
a.gd-btn--danger{color:var(--danger)}
a.gd-btn--danger:hover{color:var(--bg)}
.gd-btn--full{width:100%}
.gd-btn--loading>.gd-btn__c{visibility:hidden}
.gd-btn__sp{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.gd-btn__c{display:inline-flex;align-items:center;gap:8px}
`);

export function Button({ variant = 'primary', size = 'md', iconLeft, iconRight, loading = false, disabled = false, fullWidth = false, href, type = 'button', children, className = '', ...rest }) {
  const cls = ['gd-btn', 'gd-btn--' + variant, 'gd-btn--' + size, fullWidth && 'gd-btn--full', loading && 'gd-btn--loading', className].filter(Boolean).join(' ');
  const is = size === 'lg' ? 18 : size === 'sm' ? 14 : 16;
  const inner = (
    <>
      <span className="gd-btn__c">
        {iconLeft && <Icon name={iconLeft} size={is} />}
        {children}
        {iconRight && <Icon name={iconRight} size={is} />}
      </span>
      {loading && <span className="gd-btn__sp"><Spinner size={is} label="Procesando" /></span>}
    </>
  );
  if (href) return <a className={cls} href={href} aria-disabled={disabled || undefined} {...rest}>{inner}</a>;
  return <button className={cls} type={type} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>{inner}</button>;
}
