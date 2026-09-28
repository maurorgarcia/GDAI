'use client';
import React from 'react';
import { Button } from '../actions/Button.jsx';
import { Badge } from '../display/Badge.jsx';
import { Icon } from '../icons/Icon.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

function FlowPreview() {
  const steps = [
    ['message-square', 'Consulta recibida por WhatsApp', '09:41:02', 'success', 'Recibido'],
    ['sparkles', 'IA clasifica: pedido de presupuesto', '09:41:03', 'success', 'Clasificado'],
    ['database', 'Contacto creado en el CRM', '09:41:04', 'success', 'Sincronizado'],
    ['user-round', 'Asignado a ventas para seguimiento', '09:41:04', 'warning', 'Requiere persona'],
  ];
  return (
    <div className="fade-up" style={{ animationDelay: '140ms', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-xl)', background: 'var(--surface-1)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ fontSize: 13, color: 'var(--text-2)' }}>Flujo de consultas entrantes</span>
        <Badge status="accent" dot size="sm">Activo</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '22px 18px 18px', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 34, fontWeight: 600, color: 'var(--accent)', lineHeight: 1 }}>2,1s</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6 }}>Con automatización</div>
        </div>
        <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--border)' }} />
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 500, color: 'var(--text-3)', textDecoration: 'line-through', lineHeight: 1 }}>45 min</div>
          <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 6 }}>Proceso manual</div>
        </div>
      </div>
      <div style={{ padding: '6px 18px 10px' }}>
        {steps.map(([ic, t, ts, st, l], i) => (
          <div key={i} className="fade-up" style={{ animationDelay: 260 + i * 110 + 'ms', display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 0 }}>
            <span style={{ width: 28, height: 28, borderRadius: 6, border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 1 ? 'var(--accent)' : 'var(--text-2)' }}><Icon name={ic} size={14} /></span>
            <div><div style={{ fontSize: 14 }}>{t}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>{ts}</div></div>
            <Badge status={st} size="sm">{l}</Badge>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 18px', borderTop: '1px solid var(--border)', background: 'var(--surface-2)', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-3)' }}>
        <span>Ejemplo ilustrativo</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 620px 420px at 72% 38%, var(--accent-soft) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.5, maskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at 70% 40%, #000 0%, transparent 65%)' }} />
      <div className="wrap stack-sm" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center', padding: 'clamp(64px,9vw,128px) var(--gutter) clamp(72px,10vw,144px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h1 className="fade-up" style={{ font: 'var(--text-display)', letterSpacing: 'var(--ls-display)' }}>Transformá procesos repetitivos en <span style={{ color: 'var(--accent)' }}>sistemas que trabajan por vos.</span></h1>
          <p className="lead fade-up" style={{ animationDelay: '60ms' }}>Identificamos las tareas digitales que le cuestan tiempo y dinero a tu empresa, y diseñamos la solución con IA, automatización y software que las resuelve.</p>
          <div className="fade-up" style={{ animationDelay: '120ms', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button size="lg" iconRight="arrow-right" href={whatsappHref('Hola, quiero agendar un diagnóstico para mi empresa.')} target="_blank" rel="noopener">Agendar diagnóstico</Button>
            <Button size="lg" variant="secondary" href="/#proceso">Cómo trabajamos</Button>
          </div>
        </div>
        <FlowPreview />
      </div>
    </section>
  );
}
