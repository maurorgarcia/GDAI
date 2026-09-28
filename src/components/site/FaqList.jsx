'use client';
import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

export function FaqList({ items }) {
  const [open, setOpen] = useState(-1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
      {items.map(([q, a], i) => (
        <div key={q} className="faq-item" data-open={open === i}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {q}
            <span className="faq-chevron"><Icon name="chevron-down" size={18} /></span>
          </button>
          <div className="faq-a"><div><p>{a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
