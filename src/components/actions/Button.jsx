import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Spinner } from '../feedback/Spinner.jsx';

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
