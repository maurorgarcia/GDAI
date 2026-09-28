import React from 'react';
import { injectCss } from '../shared/css.js';

injectCss('gd-table', `
.gd-tbl{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:14px;color:var(--text-1)}
.gd-tbl th{font:var(--text-label);letter-spacing:var(--ls-label);text-transform:uppercase;color:var(--text-3);text-align:left;padding:0 16px 10px;border-bottom:1px solid var(--border-strong);white-space:nowrap}
.gd-tbl td{padding:14px 16px;border-bottom:1px solid var(--border);vertical-align:middle}
.gd-tbl--dense td{padding:9px 16px;font-size:13px}
.gd-tbl th:first-child,.gd-tbl td:first-child{padding-left:0}
.gd-tbl th:last-child,.gd-tbl td:last-child{padding-right:0}
.gd-tbl--click tbody tr{cursor:pointer}
.gd-tbl tbody tr{transition:background-color var(--dur-fast) var(--ease-out)}
.gd-tbl--click tbody tr:hover{background:var(--surface-1)}
.gd-tbl tr[aria-selected=true]{background:var(--accent-soft)}
.gd-tbl .gd-num{font-family:var(--font-mono);font-variant-numeric:tabular-nums}
`);

export function Table({ columns = [], rows = [], rowKey = 'id', dense = false, onRowClick, selectedKey, style }) {
  return (
    <div style={{ overflowX: 'auto', ...style }}>
      <table className={['gd-tbl', dense && 'gd-tbl--dense', onRowClick && 'gd-tbl--click'].filter(Boolean).join(' ')}>
        <thead><tr>{columns.map((c) => <th key={c.key} style={{ textAlign: c.align || 'left', width: c.width }}>{c.header}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[rowKey] ?? i} onClick={onRowClick ? () => onRowClick(r) : undefined} aria-selected={selectedKey !== undefined && r[rowKey] === selectedKey ? true : undefined}>
              {columns.map((c) => <td key={c.key} className={c.numeric ? 'gd-num' : undefined} style={{ textAlign: c.align || (c.numeric ? 'right' : 'left'), color: c.muted ? 'var(--text-2)' : undefined }}>{c.render ? c.render(r) : r[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
