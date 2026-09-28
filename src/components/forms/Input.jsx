import React, { useId } from 'react';
import { Field } from './Field.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Spinner } from '../feedback/Spinner.jsx';

export function Input({ label, hint, error, success, optional, icon, loading, size = 'md', multiline = false, rows = 4, id, style, className = '', ...rest }) {
  const auto = useId();
  const fid = id || auto;
  const trail = loading || success;
  const cls = ['gd-input', 'gd-input--' + size, icon && !multiline && 'gd-input--icon', trail && !multiline && 'gd-input--trail', error && 'gd-input--error', success && 'gd-input--success', className].filter(Boolean).join(' ');
  const aria = { 'aria-invalid': error ? true : undefined, 'aria-describedby': (error || success || hint) ? fid + '-msg' : undefined };
  return (
    <Field label={label} htmlFor={fid} hint={hint} error={error} success={success} optional={optional} style={style}>
      {multiline ? (
        <textarea id={fid} rows={rows} className={cls} {...aria} {...rest} />
      ) : (
        <div className="gd-field__ctl">
          {icon && <span className="gd-field__icon"><Icon name={icon} size={16} /></span>}
          <input id={fid} className={cls} {...aria} {...rest} />
          {trail && <span className="gd-field__trail">{loading ? <Spinner size={14} /> : <Icon name="check" size={16} color="var(--success)" />}</span>}
        </div>
      )}
    </Field>
  );
}
