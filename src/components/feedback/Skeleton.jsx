import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-skeleton', '@keyframes gd-pulse{0%,100%{opacity:1}50%{opacity:.5}}.gd-skel{background:var(--surface-3);animation:gd-pulse 1.6s var(--ease-in-out) infinite}@media (prefers-reduced-motion:reduce){.gd-skel{animation:none}}');

export function Skeleton({ width = '100%', height = 14, radius = 4, style }) {
  return <span className="gd-skel" aria-hidden="true" style={{ display: 'block', width, height, borderRadius: radius, ...style }} />;
}
