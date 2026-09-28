Centered modal (16px radius, blurred overlay) with title, description, body and right-aligned footer actions.

```jsx
<Dialog open={open} onClose={close} title="¿Enviar 24 respuestas?" description="La IA preparó los borradores. Nada se envía hasta que confirmes."
  footer={<><Button variant="secondary" onClick={close}>Revisar</Button><Button>Enviar ahora</Button></>} />
```
