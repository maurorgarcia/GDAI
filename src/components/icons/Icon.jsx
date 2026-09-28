import React from 'react';
import { ICONS } from './icons-data.js';

export function Icon({ name, size = 16, color, label, style, ...rest }) {
  const els = ICONS[name];
  if (!els) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ display: 'inline-block', flex: 'none', color: color || undefined, ...style }}
      {...rest}
    >
      {els.map(([Tag, attrs], i) => <Tag key={i} {...attrs} />)}
    </svg>
  );
}
