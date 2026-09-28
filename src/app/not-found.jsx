import { Button } from '@/components/actions/Button.jsx';
import { whatsappHref } from '@/lib/whatsapp.js';

export default function NotFound() {
  return (
    <section style={{ padding: 'clamp(96px,14vw,180px) 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-3)' }}>Error 404</span>
        <h1 className="h1">Esta página no existe.</h1>
        <p className="lead" style={{ textAlign: 'center' }}>Puede que el link esté roto o que la página se haya movido. Volvé al inicio o escribinos directamente.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button size="lg" iconRight="arrow-right" href="/">Volver al inicio</Button>
          <Button size="lg" variant="secondary" href={whatsappHref('Hola, entré a un link del sitio que no funcionó.')} target="_blank" rel="noopener">Escribinos por WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
