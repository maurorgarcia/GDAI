'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../actions/Button.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Tag } from '../display/Tag.jsx';
import { Badge } from '../display/Badge.jsx';
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

function Bullets({ label, items, icon, color }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 12 }}>{label}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it) => (
          <li key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5, color: 'var(--text-2)' }}>
            <span style={{ color, marginTop: 3 }}><Icon name={icon} size={14} /></span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Preview({ p, onFail }) {
  const ref = useRef(null);
  const host = new URL(p.previewUrl).host;
  useEffect(() => {
    const im = ref.current;
    if (im && im.complete && im.naturalWidth === 0) onFail();
  }, [onFail]);
  return (
    <a href={p.previewUrl} target="_blank" rel="noopener" aria-label={'Abrir ' + host} className="work-preview" style={{ display: 'block', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--bg)', textDecoration: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderBottom: '1px solid var(--border)', background: 'var(--surface-2)' }}>
        <span style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2].map((i) => <span key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--border-strong)' }} />)}
        </span>
        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', font: '500 11px/1 var(--font-mono)', color: 'var(--text-3)', background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: '6px 10px' }}>{host}</span>
        <span style={{ color: 'var(--text-3)' }}><Icon name="arrow-up-right" size={14} /></span>
      </div>
      <div style={{ aspectRatio: '16 / 10', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={ref} src={p.image} alt={'Captura de ' + host} loading="lazy" onError={onFail} className="work-preview__img" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </a>
  );
}

function WorkCard({ p, wide = false, delay }) {
  const big = p.featured;
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const preview = failed ? null : <Preview p={p} onFail={() => setFailed(true)} />;
  const summary = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <Badge status={p.badgeStatus}>{p.badge}</Badge>
        <Tag>{p.tag}</Tag>
      </div>
      <h3 className={big ? 'h2' : undefined} style={big ? undefined : { font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>{p.title}</h3>
      <p style={{ fontSize: big ? 16 : 14, color: 'var(--text-2)', lineHeight: 1.55 }}>{p.problem}</p>
    </div>
  );
  const listsInner = (
    <div className={wide ? 'stack-sm' : undefined} style={wide ? { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(24px,5vw,56px)', paddingTop: 32, borderTop: '1px solid var(--border)' } : { display: 'flex', flexDirection: 'column', gap: 24 }}>
      <Bullets label={p.builtLabel} items={p.built} icon="check" color="var(--accent)" />
      <Bullets label="Se puede sumar" items={p.extra} icon="plus" color="var(--text-3)" />
    </div>
  );
  const lists = (
    <div>
      <button type="button" className="work-toggle" onClick={() => setOpen(!open)} aria-expanded={open} data-open={open}>
        {open ? 'Ocultar detalle' : 'Ver qué incluye'}
        <Icon name="chevron-down" size={16} />
      </button>
      <div className="work-collapse" data-open={open}>
        <div style={{ minHeight: 0, overflow: 'hidden' }}>
          <div style={{ paddingTop: 20 }}>{listsInner}</div>
        </div>
      </div>
    </div>
  );
  const actions = (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
      <Button size={big ? 'lg' : 'md'} iconRight="arrow-right" href={whatsappHref(p.message)} target="_blank" rel="noopener">{p.cta}</Button>
      {p.links.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          {p.links.map((l) => (
            <Button key={l.href} variant="secondary" size={big ? 'lg' : 'sm'} iconRight="arrow-up-right" href={l.href} target="_blank" rel="noopener">{l.label}</Button>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <Reveal
      delay={delay}
      style={{ border: '1px solid ' + (big ? 'var(--accent)' : 'var(--border)'), borderRadius: 'var(--radius-lg)', padding: big ? 'clamp(24px,4vw,40px)' : 24, background: 'var(--surface-1)' }}
    >
      {wide ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div className="stack-sm" style={{ display: 'grid', gridTemplateColumns: preview ? '1fr 1.15fr' : '1fr', gap: 'clamp(32px,5vw,56px)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {summary}
              {actions}
            </div>
            {preview}
          </div>
          {lists}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%' }}>
          {preview}
          {summary}
          {lists}
          <div style={{ marginTop: 'auto' }}>{actions}</div>
        </div>
      )}
    </Reveal>
  );
}

const WORK_CLIENTS = [
  {
    featured: true,
    badge: 'Producto propio',
    badgeStatus: 'accent',
    tag: 'Concesionarias',
    image: '/works/goconcesionaria.png',
    previewUrl: 'https://goconcesionaria.godreamai.com/',
    title: 'CRM de ventas, leads y stock con WhatsApp',
    problem: 'Las consultas entran por WhatsApp, se reparten a mano entre vendedores y nadie sabe qué lead está caliente ni qué unidades hay disponibles.',
    builtLabel: 'Construido',
    built: [
      'Bot de WhatsApp que atiende y registra consultas',
      'Clasificación automática de leads',
      'Pipeline de ventas',
      'Gestión de stock y vehículos',
      'Carga manual sin pasar por el bot',
      'Varias concesionarias en un mismo sistema',
    ],
    extra: [
      'Recordatorios de seguimiento a vendedores',
      'Reportes por vendedor y por origen del lead',
      'Integración con portales de publicación',
    ],
    cta: 'Quiero esto para mi concesionaria',
    message: 'Hola, quiero un sistema como GoConcesionaria para mi concesionaria.',
    links: [{ label: 'Ver cómo funciona', href: 'https://goconcesionaria.godreamai.com/' }],
  },
  {
    badge: 'Cliente real',
    badgeStatus: 'success',
    tag: 'Productos a medida (CNC)',
    image: '/works/liever.png',
    previewUrl: 'https://liever.godreamai.com/',
    title: 'Tienda online con pedidos a WhatsApp y panel de gestión',
    problem: 'Vender productos a medida por mensaje, sin catálogo actualizado ni registro de qué pedidos se confirmaron.',
    builtLabel: 'Construido',
    built: [
      'Catálogo y carrito',
      'Pedido enviado a WhatsApp con los datos del cliente',
      'Panel para cargar productos y ver pedidos',
      'Confirmación de pedidos desde el panel',
      'Respuestas prearmadas para WhatsApp',
      'Tabla de envíos editable',
    ],
    extra: [
      'Chatbot de atención para consultas frecuentes',
      'Pagos online',
      'Avisos automáticos de estado del pedido',
      'Estadísticas de ventas',
    ],
    cta: 'Quiero ordenar mis pedidos así',
    message: 'Hola, quiero una tienda con pedidos y panel de gestión como la de Liever.',
    links: [{ label: 'Ver la tienda', href: 'https://liever.godreamai.com/' }],
  },
];

const WORK_DEMOS = [
  {
    badge: 'Demo conceptual',
    badgeStatus: 'neutral',
    tag: 'Gastronomía',
    image: '/works/gastronomia.png',
    previewUrl: 'https://panchodoto.godreamai.com/',
    title: 'Menú digital y pedidos automatizados para gastronomía',
    problem: 'Menús en PDF o fotos sueltas, pedidos que se anotan a mano por WhatsApp y las mismas consultas de precios y horarios todos los días.',
    builtLabel: 'En la demo',
    built: [
      'Menú digital para ver desde el celular',
      'Diseño con la identidad de cada local',
    ],
    extra: [
      'Toma de pedidos automatizada por WhatsApp',
      'Chatbot de consultas frecuentes (horarios, precios, zonas de entrega)',
      'Avisos de estado del pedido',
    ],
    cta: 'Quiero digitalizar mi menú',
    message: 'Hola, quiero un menú digital con toma de pedidos para mi local gastronómico.',
    links: [
      { label: 'Demo 1', href: 'https://panchodoto.godreamai.com/' },
      { label: 'Demo 2', href: 'https://blisspoint.vercel.app/' },
    ],
  },
  {
    badge: 'Demo conceptual',
    badgeStatus: 'neutral',
    tag: 'Inmobiliarias',
    image: '/works/inmobiliaria.png',
    previewUrl: 'https://crm-demo.godreamai.com/',
    title: 'Captación y seguimiento de leads para inmobiliarias',
    problem: 'Consultas por propiedades que llegan por la web, WhatsApp y portales, y quedan en el celular de cada agente sin seguimiento.',
    builtLabel: 'En la demo',
    built: [
      'Web con catálogo de propiedades',
      'CRM de gestión de leads',
    ],
    extra: [
      'Conexión entre la web y el CRM para que cada consulta entre sola',
      'Bot de WhatsApp que responde por propiedad y agenda visitas',
      'Asignación automática de leads a agentes',
      'Seguimiento automático de consultas sin respuesta',
    ],
    cta: 'Quiero esto para mi inmobiliaria',
    message: 'Hola, quiero un sistema de captación y seguimiento de leads para mi inmobiliaria.',
    links: [
      { label: 'Web 1', href: 'https://virginiamalanoinmobiliaria.godreamai.com/' },
      { label: 'Web 2', href: 'https://herediaprops.godreamai.com/' },
      { label: 'CRM', href: 'https://crm-demo.godreamai.com/' },
    ],
  },
  {
    badge: 'Demo conceptual',
    badgeStatus: 'neutral',
    tag: 'Estética y salud',
    image: '/works/estetica.png',
    previewUrl: 'https://excelsia-salud.godreamai.com/',
    title: 'Web y gestión de turnos para centros de estética',
    problem: 'Turnos que se coordinan por mensaje, huecos en la agenda y clientas que no vuelven porque nadie les escribe.',
    builtLabel: 'En la demo',
    built: [
      'Web con catálogo de tratamientos',
      'Sección antes/después',
      'Identidad de marca',
    ],
    extra: [
      'Reserva de turnos online',
      'Recordatorios automáticos por WhatsApp',
      'Chatbot de consultas frecuentes',
      'Mensajes de reactivación de clientas',
    ],
    cta: 'Quiero ordenar mis turnos',
    message: 'Hola, quiero una web con gestión de turnos para mi centro de estética.',
    links: [{ label: 'Ver demo', href: 'https://excelsia-salud.godreamai.com/' }],
  },
];

export function Work() {
  return (
    <section id="trabajos" className="sec" style={{ scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="22%" y="75%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Algunos sistemas que construimos." lead="Un producto propio, un cliente real y demos por rubro: qué ya funciona y qué se puede sumar." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {WORK_CLIENTS.map((p, i) => <WorkCard key={p.title} p={p} wide delay={i * 70} />)}
      </div>
      <div style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>Propuestas y demos</div>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Sitios y sistemas que armamos para presentarle a potenciales clientes. No llegaron a cerrarse, pero muestran cómo trabajamos.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20 }} className="stack-sm">
          {WORK_DEMOS.map((p, i) => <WorkCard key={p.title} p={p} delay={i * 70} />)}
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
