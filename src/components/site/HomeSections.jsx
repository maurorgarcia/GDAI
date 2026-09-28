import React from 'react';
import Image from 'next/image';
import { Button } from '../actions/Button.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Reveal } from '../shared/Reveal.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';
import { SectionHead, GridBg } from './shared.jsx';
import { ServicesTabs } from './ServicesTabs.jsx';
import { WorkCard } from './WorkCard.jsx';
import { FaqList } from './FaqList.jsx';
import { ConcesionariaPhone, LieverPhone } from './Showcases.jsx';

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
    <section id="problemas" className="sec sec--alt" style={{ '--gx': '12%', '--gy': '0%', scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
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

export function Services() {
  return (
    <section id="soluciones" className="sec" style={{ '--gx': '88%', '--gy': '100%', scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="82%" y="65%" />
      <div className="wrap" style={{ position: 'relative' }}>
        <SectionHead title="Combinamos la tecnología que tu problema necesita." />
        <ServicesTabs />
      </div>
    </section>
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
    <section id="proceso" className="sec sec--alt" style={{ '--ga': 0, scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 640px 380px at 50% 45%, var(--accent-soft) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.4, maskImage: 'radial-gradient(ellipse at 50% 45%, #000 0%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, #000 0%, transparent 65%)' }} />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Primero el problema. Después la tecnología." lead="Cada proyecto empieza con un diagnóstico. Así evitamos automatizar por automatizar." />
      <div style={{ position: 'relative' }}>
        <Reveal className="hide-sm proceso-line" style={{ position: 'absolute', top: 31, left: '10%', right: '10%', height: 1, background: 'var(--border-strong)' }} />
        <ol className="stack-sm" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', gap: 32, position: 'relative' }}>
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 80} style={{ '--d': i * 80 + 'ms', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
              <span className="step-n" style={{ width: 64, height: 64, flex: 'none', borderRadius: '50%', border: '2px solid var(--accent)', background: 'var(--surface-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600, color: 'var(--accent)', position: 'relative' }}>0{i + 1}</span>
              <div style={{ font: 'var(--text-h4)' }}>{t}</div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.55, maxWidth: 210 }}>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </div></section>
  );
}

const WORK_CLIENTS = [
  {
    featured: true,
    badge: 'Producto propio',
    badgeStatus: 'accent',
    tag: 'Concesionarias',
    image: '/works/goconcesionaria-leads.webp',
    previewUrl: 'https://goconcesionaria.godreamai.com/',
    previewLabel: 'goconcesionaria.godreamai.com/leads',
    phone: <ConcesionariaPhone />,
    phonePos: { width: '25%', bottom: '-22%' },
    title: 'CRM de ventas, leads y stock con WhatsApp',
    chips: { built: ['Bot de WhatsApp', 'Clasificación de leads', 'Pipeline de ventas'], extra: ['Recordatorios a vendedores'] },
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
    image: '/works/liever-panel.webp',
    imageAspect: '4 / 3',
    previewUrl: 'https://liever.godreamai.com/',
    previewLabel: 'liever.godreamai.com/admin/pedidos',
    phone: <LieverPhone />,
    phonePos: { width: '22%', bottom: '-17%' },
    title: 'Tienda online con pedidos a WhatsApp y panel de gestión',
    chips: { built: ['Catálogo y carrito', 'Pedido a WhatsApp', 'Panel de pedidos'], extra: ['Pagos online'] },
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
    image: '/works/gastronomia.webp',
    previewUrl: 'https://panchodoto.godreamai.com/',
    title: 'Menú digital y pedidos automatizados para gastronomía',
    chips: { built: ['Menú digital', 'Identidad del local'], extra: ['Pedidos por WhatsApp', 'Chatbot de consultas'] },
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
    image: '/works/inmobiliaria.webp',
    previewUrl: 'https://crm-demo.godreamai.com/',
    title: 'Captación y seguimiento de leads para inmobiliarias',
    chips: { built: ['Web con catálogo', 'CRM de leads'], extra: ['Bot de WhatsApp', 'Asignación automática'] },
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
    image: '/works/estetica.webp',
    previewUrl: 'https://excelsia-salud.godreamai.com/',
    title: 'Web y gestión de turnos para centros de estética',
    chips: { built: ['Web de tratamientos', 'Antes y después', 'Identidad de marca'], extra: ['Reserva de turnos'] },
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
    <section id="trabajos" className="sec" style={{ '--gx': '50%', '--gy': '0%', scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="22%" y="75%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Algunos sistemas que construimos." lead="Un producto propio, un cliente real y demos por rubro: qué ya funciona y qué se puede sumar." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {WORK_CLIENTS.map((p, i) => <WorkCard key={p.title} p={p} wide delay={i * 70} />)}
      </div>
      <div style={{ marginTop: 64 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, marginBottom: 24, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
          <div style={{ font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>Demos por rubro</div>
          <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Así se vería para tu negocio: sitios y sistemas armados por rubro para mostrar cómo trabajamos.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20 }} className="stack-sm">
          {WORK_DEMOS.map((p, i) => <WorkCard key={p.title} p={p} delay={i * 70} />)}
        </div>
      </div>
    </div></section>
  );
}

const FAQ_ITEMS = [
  ['¿Necesito saber de tecnología para trabajar con ustedes?', 'No. Vos conocés tu negocio; nosotros nos encargamos de la parte técnica. Te explicamos todo en términos simples antes de avanzar.'],
  ['¿Funciona para cualquier rubro?', 'Sí. No vendemos un producto único: cada solución se diseña según los procesos reales de tu empresa, sea cual sea el rubro.'],
  ['Ya uso planillas y WhatsApp para mi negocio, ¿para qué necesito esto?', 'No reemplazamos lo que ya usás, lo conectamos. La idea es que dejes de cargar los mismos datos a mano en varios lugares.'],
  ['¿Cuánto tiempo lleva un proyecto?', 'Depende del alcance. Después del diagnóstico te damos un plazo concreto, no una estimación genérica.'],
  ['¿Qué pasa si la solución no se ajusta a lo que esperaba?', 'El diagnóstico inicial existe justamente para evitar eso: definimos el alcance antes de construir, no después.'],
];

export function Faq() {
  return (
    <section id="preguntas" className="sec" style={{ '--gx': '50%', '--gy': '100%', '--ga': 0.1, scrollMarginTop: 68, position: 'relative', overflow: 'hidden' }}>
      <GridBg x="78%" y="20%" />
      <div className="wrap" style={{ position: 'relative' }}>
      <SectionHead title="Preguntas que quizás te estés haciendo." />
      <FaqList items={FAQ_ITEMS} />
    </div></section>
  );
}

export function CtaBand() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--accent)', color: 'var(--on-accent)' }}>
      <div className="cta-grid" />
      <Image className="cta-mark" src="/bg/logo-watermark.png" alt="" width={720} height={371} />
      <div className="wrap stack-sm" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'end', padding: 'clamp(64px,8vw,112px) var(--gutter)' }}>
        <h2 className="h1 center-sm" style={{ color: 'var(--on-accent)' }}>¿Qué proceso te está costando más tiempo?</h2>
        <div className="center-sm" style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
          <p style={{ fontSize: 17, lineHeight: 1.5 }}>Contanos cómo trabaja tu equipo hoy. En una primera conversación identificamos oportunidades concretas.</p>
          <Button variant="inverse" size="lg" iconRight="arrow-right" href={whatsappHref('Hola, quiero agendar un diagnóstico para mi empresa.')} target="_blank" rel="noopener" style={{ background: 'var(--gd-black)', color: 'var(--gd-offwhite)' }}>Agendar diagnóstico</Button>
        </div>
      </div>
    </section>
  );
}
