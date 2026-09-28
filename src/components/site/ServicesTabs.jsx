'use client';
import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Tabs } from '../navigation/Tabs.jsx';

const DATA = {
  ia: { title: 'Inteligencia artificial', desc: 'Agentes y asistentes que responden, clasifican y buscan información dentro de tus procesos.', items: ['Atención al cliente con IA', 'Asistentes internos', 'Recuperación de información', 'Soporte a decisiones'], flow: ['Cliente escribe por WhatsApp', 'La IA responde al instante', 'Se registra en tu sistema'] },
  auto: { title: 'Automatización', desc: 'Flujos que mueven datos, disparan avisos y hacen seguimientos sin intervención manual.', items: ['Automatización de procesos', 'Seguimientos comerciales', 'Notificaciones automáticas', 'Sincronización de datos'], flow: ['Llega un dato nuevo', 'Se procesa sin intervención', 'Se notifica a quien corresponde'] },
  soft: { title: 'Software a medida', desc: 'Herramientas internas, paneles y plataformas pensadas para cómo trabaja tu equipo.', items: ['Dashboards', 'Herramientas internas', 'Portales de clientes', 'Funcionalidades de CRM'], flow: ['Datos dispersos en varios lugares', 'Un panel que los une', 'Tu equipo decide con todo a la vista'] },
  int: { title: 'Integraciones', desc: 'Conectamos los sistemas que ya usás en lugar de reemplazarlos.', items: ['CRM y ERP', 'WhatsApp y email', 'Planillas y bases de datos', 'APIs de terceros'], flow: ['CRM', 'WhatsApp', 'Planillas y sistemas'] },
};

const TABS = [{ value: 'ia', label: 'IA' }, { value: 'auto', label: 'Automatización' }, { value: 'soft', label: 'Software' }, { value: 'int', label: 'Integraciones' }];

function MiniFlow({ steps }) {
  return (
    <div className="miniflow" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-1)', padding: '20px 24px', marginTop: 40 }}>
      {steps.map((s, i) => (
        <span key={s} className="miniflow__step">
          <span style={{ fontSize: 14, color: i === steps.length - 1 ? 'var(--text-1)' : 'var(--text-2)', fontWeight: i === steps.length - 1 ? 500 : 400 }}>{s}</span>
          {i < steps.length - 1 && <span className="miniflow__arrow" style={{ color: 'var(--text-3)', flex: 'none' }}><Icon name="arrow-right" size={16} /></span>}
        </span>
      ))}
    </div>
  );
}

export function ServicesTabs() {
  const [tab, setTab] = useState('ia');
  const d = DATA[tab];
  return (
    <>
      <Tabs value={tab} onChange={setTab} items={TABS} />
      <div key={tab} className="fade-swap" style={{ paddingTop: 48 }}>
        <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 className="h2">{d.title}</h3>
            <p className="lead">{d.desc}</p>
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, borderTop: '1px solid var(--border)' }}>
            {d.items.map((it) => <li key={it} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', borderBottom: '1px solid var(--border)', fontSize: 17 }}>{it}<span style={{ color: 'var(--accent)' }}><Icon name="check" size={16} /></span></li>)}
          </ul>
        </div>
        <MiniFlow steps={d.flow} />
      </div>
    </>
  );
}
