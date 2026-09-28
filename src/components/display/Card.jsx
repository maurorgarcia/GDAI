import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-card', `
.gd-card{display:flex;flex-direction:column;background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius-card);color:var(--text-1);font-family:var(--font-sans);text-align:left;transition:var(--transition-control)}
.gd-card--flat{background:transparent}
.gd-card--sm{padding:16px;gap:12px}
.gd-card--md{padding:24px;gap:16px}
.gd-card--lg{padding:32px;gap:20px}
.gd-card--none{padding:0}
.gd-card--int{cursor:pointer}
.gd-card--int:hover{border-color:var(--border-hover)}
.gd-card--int:focus-visible{outline:none;box-shadow:var(--focus-shadow)}
.gd-card--sel{border-color:var(--accent);box-shadow:inset 0 0 0 1px var(--accent)}
.gd-card__hd{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}
.gd-card__eb{font:var(--text-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--text-3);margin-bottom:8px}
.gd-card__t{font:var(--text-h4);letter-spacing:var(--ls-h4);color:var(--text-1)}
.gd-card__d{font:var(--text-small);color:var(--text-2);margin-top:4px}
.gd-card__ft{display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:4px}
`);

export function Card({ eyebrow, title, description, actions, footer, padding = 'md', variant = 'default', interactive = false, selected = false, onClick, children, style, className = '' }) {
  const cls = ['gd-card', 'gd-card--' + padding, variant === 'flat' && 'gd-card--flat', (interactive || onClick) && 'gd-card--int', selected && 'gd-card--sel', className].filter(Boolean).join(' ');
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag className={cls} onClick={onClick} style={style} aria-pressed={onClick && selected ? true : undefined} type={onClick ? 'button' : undefined}>
      {(eyebrow || title || actions) && (
        <div className="gd-card__hd">
          <div>
            {eyebrow && <div className="gd-card__eb">{eyebrow}</div>}
            {title && <div className="gd-card__t">{title}</div>}
            {description && <div className="gd-card__d">{description}</div>}
          </div>
          {actions}
        </div>
      )}
      {children}
      {footer && <div className="gd-card__ft">{footer}</div>}
    </Tag>
  );
}
