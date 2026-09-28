Data table with mono headers, hairline dividers and optional row click/selection.

```jsx
<Table columns={[{key:'name',header:'Flujo'},{key:'runs',header:'Ejecuciones',numeric:true},{key:'status',header:'Estado',render:r=><Badge status={r.s}>{r.l}</Badge>}]} rows={rows} onRowClick={open} />
```
