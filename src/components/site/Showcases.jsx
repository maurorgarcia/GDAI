import React from 'react';
import { BrandIcon } from '../icons/BrandIcon.jsx';

// Celulares con un chat de WhatsApp que se superponen a las capturas de los sistemas.
// Los mensajes son de ejemplo: ilustran cómo llega la consulta o el pedido al sistema.

const C = {
  bg: '#0A0A0A',
  raised: '#1C1C1C',
  lineStrong: 'rgba(245,245,245,0.18)',
  t1: '#F5F5F5',
  t2: '#B0B0B0',
  wa: '#25D366',
  waBg: '#0E1512',
  waHead: '#16231C',
  waOut: '#1E3B2C',
};

function Lines({ x, y, lines, size = 8.5, fill = C.t1, gap = 12, weight }) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} fontWeight={weight}>
      {lines.map((l, i) => <tspan key={i} x={x} dy={i === 0 ? 0 : gap}>{l}</tspan>)}
    </text>
  );
}

function Phone({ name, label, children }) {
  return (
    <svg viewBox="0 0 172 300" width="100%" role="img" aria-label={label} style={{ display: 'block', fontFamily: 'var(--font-sans)', filter: 'drop-shadow(0 14px 28px rgba(0,0,0,0.55))' }}>
      <rect x="1.5" y="1.5" width="169" height="297" rx="28" fill="#050505" stroke="#3A3A3A" strokeWidth="3" />
      <rect x="6" y="6" width="160" height="288" rx="22" fill={C.waBg} />
      <rect x="6" y="6" width="160" height="46" rx="22" fill={C.waHead} />
      <rect x="6" y="30" width="160" height="22" fill={C.waHead} />
      <rect x="62" y="12" width="48" height="6" rx="3" fill="#050505" />
      <circle cx="26" cy="38" r="9" fill={C.raised} stroke={C.lineStrong} />
      <text x="40" y="36" fontSize="9.5" fontWeight="600" fill={C.t1}>{name}</text>
      <text x="40" y="47" fontSize="7.5" fill={C.wa}>en línea</text>
      <BrandIcon name="whatsapp" size={15} x={140} y={30} fill={C.wa} />
      {children}
    </svg>
  );
}

export function ConcesionariaPhone() {
  return (
    <Phone name="Demo Motors" label="Conversación de WhatsApp: un cliente pregunta por una Amarok y le agendan una visita">
      <rect x="18" y="62" width="112" height="34" rx="9" fill={C.raised} />
      <Lines x={27} y={77} lines={['Hola, ¿la Amarok 2021', 'sigue disponible?']} />
      <rect x="26" y="106" width="128" height="46" rx="9" fill={C.waOut} />
      <Lines x={35} y={121} lines={['¡Hola Pablo! Sí, está', 'disponible. ¿Querés coordinar', 'una visita?']} />
      <rect x="18" y="162" width="92" height="22" rx="9" fill={C.raised} />
      <text x="27" y="176" fontSize="8.5" fill={C.t1}>Mañana a la tarde</text>
      <rect x="26" y="194" width="128" height="34" rx="9" fill={C.waOut} />
      <Lines x={35} y={209} lines={['Listo, te agendé para', 'mañana a las 17:30.']} />
    </Phone>
  );
}

export function LieverPhone() {
  return (
    <Phone name="Cliente" label="Conversación de WhatsApp: llega el pedido de un cliente y se lo confirman">
      <rect x="18" y="62" width="128" height="82" rx="9" fill={C.raised} />
      <text x="27" y="77" fontSize="8.5" fontWeight="600" fill={C.t1}>Nuevo pedido #1009</text>
      <Lines x={27} y={92} size={8} fill={C.t2} gap={11} lines={['1 × Panel ranurado con logo', 'Medida: 90 × 60 cm', 'Color: Roble natural']} />
      <text x="27" y="135" fontSize="8.5" fontWeight="600" fill={C.t1}>Total: $ 43.100</text>
      <rect x="34" y="156" width="112" height="34" rx="9" fill={C.waOut} />
      <Lines x={43} y={171} lines={['¡Recibido! Te confirmo', 'el pedido ahora.']} />
    </Phone>
  );
}
