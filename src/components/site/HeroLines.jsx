import React from 'react';

// Estelas de luz lima para el fondo del hero: un abanico de curvas que se cruzan y se apagan hacia la izquierda.
// Es SVG puro (sin imagen), así que no suma peso ni afecta la carga.

const N = 26;
const CURVES = Array.from({ length: N }, (_, i) => {
  const t = i / (N - 1);
  const d = [
    `M ${380 + t * 260} 860`,
    `C ${520 + t * 80} ${520 - t * 160}, ${760 - t * 120} ${300 + t * 120}, 1320 ${-40 + t * 300}`,
  ].join(' ');
  const opacity = 0.07 + 0.36 * Math.sin(Math.PI * t) ** 2;
  return { d, opacity, width: i % 6 === 0 ? 1.6 : 1 };
});

export function HeroLines() {
  return (
    <svg
      aria-hidden="true"
      className="hero-lines"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMid slice"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, transparent 38%, #000 74%)',
        maskImage: 'linear-gradient(90deg, transparent 0%, transparent 38%, #000 74%)',
      }}
    >
      <defs>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#CCFF00" stopOpacity="0" />
          <stop offset="0.45" stopColor="#CCFF00" stopOpacity="0.9" />
          <stop offset="1" stopColor="#E0FF66" stopOpacity="0.5" />
        </linearGradient>
        <filter id="hero-glow" x="-10%" y="-30%" width="120%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <g filter="url(#hero-glow)" opacity="0.5">
        <path d={CURVES[Math.floor(N * 0.35)].d} stroke="#CCFF00" strokeWidth="7" fill="none" strokeOpacity="0.55" />
        <path d={CURVES[Math.floor(N * 0.7)].d} stroke="#CCFF00" strokeWidth="5" fill="none" strokeOpacity="0.4" />
      </g>
      <g fill="none" stroke="url(#hero-line)">
        {CURVES.map((c, i) => (
          <path key={i} d={c.d} strokeWidth={c.width} strokeOpacity={c.opacity} />
        ))}
      </g>
    </svg>
  );
}
