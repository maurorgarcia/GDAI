import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0A0A0A',
          color: '#F5F5F5',
          padding: 80,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: '#CCFF00', display: 'flex' }} />
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1, display: 'flex' }}>godai</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 920 }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.12, letterSpacing: -2, display: 'flex' }}>
            Transformá procesos repetitivos en sistemas que trabajan por vos.
          </div>
          <div style={{ fontSize: 26, color: '#B0B0B0', display: 'flex' }}>
            IA · Automatización · Software — Go Dream AI
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
