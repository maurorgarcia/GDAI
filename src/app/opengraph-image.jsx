import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Go Dream AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const logo = await readFile(join(process.cwd(), 'src/app/assets/og-logo.png'));
const logoSrc = 'data:image/png;base64,' + logo.toString('base64');

// Solo el logo, centrado y sobre blanco. WhatsApp muestra esta imagen como miniatura casi cuadrada y
// recorta el centro, así que el logo tiene que caber en la franja central de 630px (x: 285 a 915).
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={500} height={257} />
      </div>
    ),
    { ...size }
  );
}
