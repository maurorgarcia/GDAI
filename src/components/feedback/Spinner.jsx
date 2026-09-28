import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-spinner', '@keyframes gd-spin{to{transform:rotate(360deg)}}.gd-spinner{display:inline-block;flex:none;border-radius:50%;border:1.5px solid currentColor;border-right-color:transparent;animation:gd-spin .7s linear infinite}@media (prefers-reduced-motion:reduce){.gd-spinner{animation-duration:2s}}');

export function Spinner({ size = 16, color, label = 'Cargando', style }) {
  return <span className="gd-spinner" role="status" aria-label={label} style={{ width: size, height: size, color, ...style }} />;
}
