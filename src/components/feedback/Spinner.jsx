import React from 'react';

export function Spinner({ size = 16, color, label = 'Cargando', style }) {
  return <span className="gd-spinner" role="status" aria-label={label} style={{ width: size, height: size, color, ...style }} />;
}
