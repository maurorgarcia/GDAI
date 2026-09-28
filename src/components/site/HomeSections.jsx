'use client';
import React, { useState } from 'react';
import { Button } from '../actions/Button.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Tag } from '../display/Tag.jsx';
import { Tabs } from '../navigation/Tabs.jsx';
import { Reveal } from '../shared/Reveal.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

function SectionHead({ title, lead }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginBottom: 56, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
      <h2 className="h1 title-gradient">{title}</h2>
      {lead && <p className="lead" style={{ margin: '0 auto' }}>{lead}</p>}
    </div>
  );
}

function GridBg({ x = '50%', y = '50%' }) {
  return (
    <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none', maskImage: `radial-gradient(ellipse at ${x} ${y}, #000 0%, transparent 65%)`, WebkitMaskImage: `radial-gradient(ellipse at ${x} ${y}, #000 0%, transparent 65%)` }} />
  );
}

export function Problems() {
  const items = [
    ['copy', 'Tareas repetitivas', 'Copiar datos entre planillas, sistemas y mails, todos los días.'],
    ['message-square', 'Consultas que se repiten', 'Tu equipo responde las mismas preguntas una y otra vez.'],
    ['unplug', 'Herramientas desconectadas', 'La información vive en varios lugares y nadie tiene la versión completa.'],
    ['user-round', 'Procesos que dependen de una persona', 'Si alguien falta, el proceso se frena.'],
    ['clock', 'Seguimientos que se olvidan', 'Oportunidades de venta que se enfrían por falta de respuesta.'],
    ['circle-alert', 'Errores de carga manual', 'Datos mal copiados que después cuestan tiempo corregir.'],
  ];
  return (
    <section id="problemas" className="sec sec--alt" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="18%" y="25%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Tu empresa gasta tiempo en cosas que la tecnología puede hacer mejor." lead="No todo tiene que automatizarse. Empezamos por encontrar dónde se pierde tiempo y dinero de verdad." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', rowGap: 48, columnGap: 32 }} className="stack-sm">
        {items.map(([ic, t, d], i) => (
          <Reveal key={t} delay={(i % 3) * 70} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
            <span style={{ width: 56, height: 56, flex: 'none', borderRadius: '50%', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}><Icon name={ic} size={22} /></span>
            <div style={{ font: 'var(--text-h4)', letterSpacing: 'var(--ls-h4)' }}>{t}</div>
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55, maxWidth: 240 }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </div></section>
  );
}

function MiniFlow({ steps }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-1)', padding: '20px 24px', marginTop: 40 }}>
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          {i > 0 && <span style={{ color: 'var(--text-3)', flex: 'none', margin: '0 16px' }}><Icon name="arrow-right" size={16} /></span>}
          <span style={{ fontSize: 14, color: i === steps.length - 1 ? 'var(--text-1)' : 'var(--text-2)', fontWeight: i === steps.length - 1 ? 500 : 400 }}>{s}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export function Services() {
  const data = {
    ia: { title: 'Inteligencia artificial', desc: 'Agentes y asistentes que responden, clasifican y buscan información dentro de tus procesos.', items: ['Atención al cliente con IA', 'Asistentes internos', 'Recuperación de información', 'Soporte a decisiones'], flow: ['Cliente escribe por WhatsApp', 'La IA responde al instante', 'Se registra en tu sistema'] },
    auto: { title: 'Automatización', desc: 'Flujos que mueven datos, disparan avisos y hacen seguimientos sin intervención manual.', items: ['Automatización de procesos', 'Seguimientos comerciales', 'Notificaciones automáticas', 'Sincronización de datos'], flow: ['Llega un dato nuevo', 'Se procesa sin intervención', 'Se notifica a quien corresponde'] },
    soft: { title: 'Software a medida', desc: 'Herramientas internas, paneles y plataformas pensadas para cómo trabaja tu equipo.', items: ['Dashboards', 'Herramientas internas', 'Portales de clientes', 'Funcionalidades de CRM'], flow: ['Datos dispersos en varios lugares', 'Un panel que los une', 'Tu equipo decide con todo a la vista'] },
    int: { title: 'Integraciones', desc: 'Conectamos los sistemas que ya usás en lugar de reemplazarlos.', items: ['CRM y ERP', 'WhatsApp y email', 'Planillas y bases de datos', 'APIs de terceros'], flow: ['CRM', 'WhatsApp', 'Planillas y sistemas'] },
  };
  const [tab, setTab] = useState('ia');
  const d = data[tab];
  return (
    <section id="soluciones" className="sec" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="82%" y="65%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Combinamos la tecnología que tu problema necesita." />
      <Tabs value={tab} onChange={setTab} items={[{ value: 'ia', label: 'IA' }, { value: 'auto', label: 'Automatización' }, { value: 'soft', label: 'Software' }, { value: 'int', label: 'Integraciones' }]} />
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
    </div></section>
  );
}

export function Process() {
  const steps = [
    ['Diagnóstico', 'Entendemos qué pasa, quién participa y dónde se pierde tiempo.'],
    ['Definición', 'Diseñamos la solución más simple que resuelve el problema.'],
    ['Desarrollo', 'Construimos rápido, con calidad y sin complejidad innecesaria.'],
    ['Implementación', 'Lo ponemos en marcha dentro del flujo real de tu equipo.'],
    ['Evolución', 'Medimos, ajustamos y acompañamos a medida que crecés.'],
  ];
  return (
    <section id="proceso" className="sec sec--alt" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 640px 380px at 50% 45%, var(--accent-soft) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.4, maskImage: 'radial-gradient(ellipse at 50% 45%, #000 0%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, #000 0%, transparent 65%)' }} />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Primero el problema. Después la tecnología." lead="Cada proyecto empieza con un diagnóstico. Así evitamos automatizar por automatizar." />
      <div style={{ position: 'relative' }}>
        <div className="hide-sm" style={{ position: 'absolute', top: 31, left: '10%', right: '10%', height: 1, background: 'var(--border-strong)' }} />
        <ol className="stack-sm" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: 32, position: 'relative' }}>
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 80} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
              <span style={{ width: 64, height: 64, flex: 'none', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--surface-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--accent)', position: 'relative' }}>0{i + 1}</span>
              <div style={{ font: 'var(--text-h4)' }}>{t}</div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55, maxWidth: 210 }}>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div></section>
  );
}

function WorkCard({ name, tag, desc, href, delay }) {
  return (
    <Reveal
      as="a"
      href={href}
      target="_blank"
      rel="noopener"
      delay={delay}
      className="hover-card center-sm"
      style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 24, display: 'flex', flexDirection: 'column', gap: 14, background: 'var(--surface-1)', textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <Tag>{tag}</Tag>
        <span style={{ color: 'var(--text-3)' }}><Icon name="arrow-up-right" size={16} /></span>
      </div>
      <div>
        <div style={{ font: 'var(--text-h4)' }}>{name}</div>
        <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55, marginTop: 6 }}>{desc}</p>
      </div>
    </Reveal>
  );
}

export function Work() {
  const clients = [
    { name: 'Nombre del proyecto', tag: 'Rubro', desc: 'Descripción corta de la solución que construimos para este cliente.', href: '#' },
    { name: 'Nombre del proyecto', tag: 'Rubro', desc: 'Descripción corta de la solución que construimos para este cliente.', href: '#' },
  ];
  const proposals = [
    { name: 'Nombre del proyecto', tag: 'Rubro', desc: 'Descripción corta de la propuesta que armamos.', href: '#' },
    { name: 'Nombre del proyecto', tag: 'Rubro', desc: 'Descripción corta de la propuesta que armamos.', href: '#' },
  ];
  return (
    <section id="trabajos" className="sec" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="22%" y="75%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Algunos sistemas que construimos." lead="Ejemplos reales de páginas, paneles y chatbots que diseñamos para distintos rubros." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 20 }} className="stack-sm">
        {clients.map((p, i) => <WorkCard key={p.name + i} delay={i * 70} {...p} />)}
      </div>
      <div style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>Propuestas y demos</div>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Sitios que armamos para presentarle a potenciales clientes. No llegaron a cerrarse, pero muestran cómo trabajamos.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 20 }} className="stack-sm">
          {proposals.map((p, i) => <WorkCard key={p.name + i} delay={i * 70} {...p} />)}
        </div>
      </div>
    </div></section>
  );
}

export function Faq() {
  const items = [
    ['¿Necesito saber de tecnología para trabajar con ustedes?', 'No. Vos conocés tu negocio; nosotros nos encargamos de la parte técnica. Te explicamos todo en términos simples antes de avanzar.'],
    ['¿Funciona para cualquier rubro?', 'Sí. No vendemos un producto único: cada solución se diseña según los procesos reales de tu empresa, sea cual sea el rubro.'],
    ['Ya uso planillas y WhatsApp para mi negocio, ¿para qué necesito esto?', 'No reemplazamos lo que ya usás, lo conectamos. La idea es que dejes de cargar los mismos datos a mano en varios lugares.'],
    ['¿Cuánto tiempo lleva un proyecto?', 'Depende del alcance. Después del diagnóstico te damos un plazo concreto, no una estimación genérica.'],
    ['¿Qué pasa si la solución no se ajusta a lo que esperaba?', 'El diagnóstico inicial existe justamente para evitar eso: definimos el alcance antes de construir, no después.'],
  ];
  const [open, setOpen] = useState(-1);
  return (
    <section id="preguntas" className="sec" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="78%" y="20%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Preguntas que quizás te estés haciendo." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
        {items.map(([q, a], i) => (
          <div key={q} className="faq-item" data-open={open === i}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              {q}
              <span className="faq-chevron"><Icon name="chevron-down" size={18} /></span>
            </button>
            <div className="faq-a"><p>{a}</p></div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

export function Principles() {
  const p = [
    ['crosshair', 'Problema primero', 'Partimos de lo que pasa en tu operación, no de una herramienta.'],
    ['users', 'Personas + IA', 'La tecnología complementa a tu equipo; no busca reemplazarlo.'],
    ['feather', 'Complejidad mínima', 'La mejor solución no es la que usa más tecnologías.'],
  ];
  return (
    <section className="sec sec--alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <GridBg x="50%" y="50%" />
      <div className="wrap stack-sm" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }}>
        {p.map(([ic, t, d], i) => (
          <Reveal key={t} delay={i * 80} className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ color: 'var(--text-2)' }}><Icon name={ic} size={20} /></span>
            <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>{t}</div>
            <p style={{ color: 'var(--text-2)' }}>{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}>
      <div className="wrap stack-sm" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'end', padding: 'clamp(64px,8vw,112px) var(--gutter)' }}>
        <h2 className="h1 center-sm" style={{ color: 'var(--on-accent)' }}>¿Qué proceso te está costando más tiempo?</h2>
        <div className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
          <p style={{ fontSize: 17, lineHeight: 1.5 }}>Contanos cómo trabaja tu equipo hoy. En una primera conversación identificamos oportunidades concretas.</p>
          <Button variant="inverse" size="lg" iconRight="arrow-right" href={whatsappHref('Hola, quiero agendar un diagnóstico para mi empresa.')} target="_blank" rel="noopener" style={{ background: 'var(--gd-black)', color: 'var(--gd-offwhite)' }}>Agendar diagnóstico</Button>
        </div>
      </div>
    </section>
  );
}
