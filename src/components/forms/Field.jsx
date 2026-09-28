import React from 'react';
import { injectCss } from '../shared/css.js';
import { Icon } from '../icons/Icon.jsx';

injectCss('gd-field', `
.gd-field{display:flex;flex-direction:column;gap:6px;font-family:var(--font-sans)}
.gd-field__label{font-size:13px;font-weight:500;color:var(--text-1);letter-spacing:-0.005em}
.gd-field__opt{color:var(--text-3);font-weight:400}
.gd-field__ctl{position:relative;display:flex;align-items:center}
.gd-field__ctl>.gd-field__icon{position:absolute;left:12px;color:var(--text-3);pointer-events:none}
.gd-field__ctl>.gd-field__trail{position:absolute;right:12px;color:var(--text-3);pointer-events:none;display:flex}
.gd-input{width:100%;height:var(--control-h-md);padding:0 12px;background:var(--surface-1);color:var(--text-1);border:1px solid var(--border-strong);border-radius:var(--radius-control);font:400 14px/1.4 var(--font-sans);transition:var(--transition-control);outline:none;appearance:none;-webkit-appearance:none}
.gd-input::placeholder{color:var(--text-3)}
.gd-input:hover:not(:disabled){border-color:var(--border-hover)}
.gd-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.gd-input:disabled{opacity:.5;cursor:not-allowed;background:var(--surface-2)}
.gd-input--sm{height:var(--control-h-sm);font-size:13px}
.gd-input--lg{height:var(--control-h-lg);font-size:15px;padding:0 14px}
.gd-input--icon{padding-left:36px}
.gd-input--trail{padding-right:36px}
textarea.gd-input{height:auto;padding:10px 12px;resize:vertical;min-height:96px;line-height:1.5}
.gd-input--error,.gd-input--error:hover:not(:disabled){border-color:var(--danger)}
.gd-input--error:focus{box-shadow:0 0 0 3px var(--danger-soft);border-color:var(--danger)}
.gd-input--success{border-color:var(--success)}
.gd-field__msg{display:flex;align-items:flex-start;gap:6px;font-size:12px;line-height:1.4;color:var(--text-3)}
.gd-field__msg--error{color:var(--danger)}
.gd-field__msg--success{color:var(--success)}
.gd-field__msg>span:first-child{margin-top:1px}
`);

export function Field({ label, htmlFor, optional, hint, error, success, children, style }) {
  const msg = error || success || hint;
  const kind = error ? 'error' : success ? 'success' : 'hint';
  return (
    <div className="gd-field" style={style}>
      {label && <label className="gd-field__label" htmlFor={htmlFor}>{label}{optional && <span className="gd-field__opt"> · opcional</span>}</label>}
      {children}
      {msg && (
        <div className={'gd-field__msg gd-field__msg--' + kind} id={htmlFor ? htmlFor + '-msg' : undefined} role={error ? 'alert' : undefined}>
          {kind !== 'hint' && <Icon name={error ? 'circle-alert' : 'circle-check'} size={13} />}
          <span>{msg}</span>
        </div>
      )}
    </div>
  );
}
