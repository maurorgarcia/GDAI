Tab strip — lime 2px underline for the active tab, or a segmented control.

```jsx
<Tabs items={[{value:'all',label:'Todos',count:12},{value:'err',label:'Con errores',count:2}]} value={v} onChange={setV} />
<Tabs variant="segmented" items={['7d','30d','90d']} value="30d" />
```
