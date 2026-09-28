import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const geist = await readFile(join(process.cwd(), 'src/app/fonts/Geist-SemiBold.ttf'));
const logo = await readFile(join(process.cwd(), 'public/logo-white.png'));
const logoSrc = 'data:image/png;base64,' + logo.toString('base64');

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
          fontFamily: 'Geist',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={117} height={60} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 940 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2, display: 'flex' }}>
            Transformá procesos repetitivos en sistemas que trabajan por vos.
          </div>
          <div style={{ fontSize: 26, color: '#B0B0B0', display: 'flex' }}>
            IA · Automatización · Software — Go Dream AI
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Geist', data: geist, style: 'normal', weight: 600 }] }
  );
}
