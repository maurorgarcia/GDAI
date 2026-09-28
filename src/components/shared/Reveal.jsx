'use client';
import React, { useEffect, useRef, useState } from 'react';

export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={'reveal' + (visible ? ' is-visible' : '') + (className ? ' ' + className : '')}
      style={{ transitionDelay: delay + 'ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
