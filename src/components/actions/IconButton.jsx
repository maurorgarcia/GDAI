import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function IconButton({ icon, label, variant = 'tertiary', size = 'md', pressed, className = '', ...rest }) {
  const is = size === 'lg' ? 20 : size === 'sm' ? 14 : 16;
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={pressed} className={['gd-ib', 'gd-ib--' + variant, 'gd-ib--' + size, className].join(' ')} {...rest}>
      <Icon name={icon} size={is} />
    </button>
  );
}
