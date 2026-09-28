import React from 'react';

const LUCIDE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.460.0/icons/';

export function Icon({ name, size = 16, color, label, style, ...rest }) {
  const url = 'url(' + LUCIDE + name + '.svg)';
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-block', flex: 'none', width: size, height: size,
        backgroundColor: color || 'currentColor',
        WebkitMask: url + ' center / contain no-repeat', mask: url + ' center / contain no-repeat',
        ...style,
      }}
      {...rest}
    />
  );
}
