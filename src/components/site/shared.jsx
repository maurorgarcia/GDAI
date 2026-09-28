import React from 'react';

export function SectionHead({ title, lead }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginBottom: 56, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
      <h2 className="h1 title-gradient">{title}</h2>
      {lead && <p className="lead" style={{ margin: '0 auto' }}>{lead}</p>}
    </div>
  );
}

export function GridBg({ x = '50%', y = '50%' }) {
  return (
    <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none', maskImage: `radial-gradient(ellipse at ${x} ${y}, #000 0%, transparent 65%)`, WebkitMaskImage: `radial-gradient(ellipse at ${x} ${y}, #000 0%, transparent 65%)` }} />
  );
}
