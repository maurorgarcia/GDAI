'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '../actions/Button.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Tag } from '../display/Tag.jsx';
import { Badge } from '../display/Badge.jsx';
import { Reveal } from '../shared/Reveal.jsx';
import { whatsappHref } from '../../lib/whatsapp.js';

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

function Preview({ p, wide, onFail }) {
  const ref = useRef(null);
  const host = p.previewLabel || new URL(p.previewUrl).host;
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
      <div style={{ position: 'relative', aspectRatio: p.imageAspect || '16 / 10', overflow: 'hidden' }}>
        <Image ref={ref} src={p.image} alt={'Captura de ' + host} fill sizes={wide ? '(max-width: 860px) 100vw, 640px' : '(max-width: 860px) 100vw, 400px'} onError={onFail} className="work-preview__img" style={{ objectFit: 'cover', objectPosition: 'top' }} />
        {p.phone && (
          <div style={{ position: 'absolute', right: '3%', bottom: p.phonePos.bottom, width: p.phonePos.width, pointerEvents: 'none' }}>{p.phone}</div>
        )}
      </div>
    </a>
  );
}

function Chips({ label, items, kind }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div className="eyebrow">{label}</div>
      <ul className="chips" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((it) => (
          <li key={it} className="chip" data-kind={kind}>
            <Icon name={kind === 'built' ? 'check' : 'plus'} size={12} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WorkCard({ p, wide = false, delay }) {
  const big = p.featured;
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const preview = failed ? null : <Preview p={p} wide={wide} onFail={() => setFailed(true)} />;
  const summary = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
        <Badge status={p.badgeStatus}>{p.badge}</Badge>
        <Tag>{p.tag}</Tag>
      </div>
      <h3 className={big ? 'h2' : undefined} style={big ? undefined : { font: 'var(--text-h3)', letterSpacing: 'var(--ls-h3)' }}>{p.title}</h3>
      <p style={{ fontSize: big ? 16 : 14, color: 'var(--text-2)', lineHeight: 1.55 }}>{p.problem}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Chips label={p.builtLabel} items={p.chips.built} kind="built" />
        <Chips label="Se puede sumar" items={p.chips.extra} kind="extra" />
      </div>
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
        {open ? 'Ocultar la lista' : 'Ver la lista completa'}
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
      <Button variant={big ? 'primary' : 'secondary'} size={big ? 'lg' : 'md'} iconRight="arrow-right" href={whatsappHref(p.message)} target="_blank" rel="noopener">{p.cta}</Button>
      {p.links.length > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: big ? 10 : 4, marginLeft: big ? 0 : -8 }}>
          {p.links.map((l) => (
            <Button key={l.href} variant={big ? 'secondary' : 'tertiary'} size={big ? 'lg' : 'sm'} iconRight="arrow-up-right" href={l.href} target="_blank" rel="noopener">{l.label}</Button>
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
