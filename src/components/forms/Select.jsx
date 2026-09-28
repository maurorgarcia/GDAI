import React, { useId } from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../icons/Icon.jsx';

export function Select({ label, hint, error, optional, options = [], placeholder, size = 'md', id, style, className = '', ...rest }) {
  const auto = useId();
  const fid = id || auto;
  const cls = ['gd-input', 'gd-input--' + size, 'gd-input--trail', error && 'gd-input--error', className].filter(Boolean).join(' ');
  return (
    <Field label={label} htmlFor={fid} hint={hint} error={error} optional={optional} style={style}>
      <div className="gd-field__ctl">
        <select id={fid} className={cls} style={{ cursor: 'pointer' }} aria-invalid={error ? true : undefined} defaultValue={rest.value === undefined && rest.defaultValue === undefined && placeholder ? '' : undefined} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => { const v = typeof o === 'string' ? { value: o, label: o } : o; return <option key={v.value} value={v.value}>{v.label}</option>; })}
        </select>
        <span className="gd-field__trail"><Icon name="chevron-down" size={16} /></span>
      </div>
    </Field>
  );
}
