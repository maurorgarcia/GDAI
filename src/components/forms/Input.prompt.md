Labeled text field with hint, error, success and loading states; set `multiline` for a textarea.

```jsx
<Input label="Email de trabajo" type="email" placeholder="nombre@empresa.com" />
<Input label="Sitio web" error="Falta el dominio. Ej: empresa.com" defaultValue="https://" />
<Input label="¿Qué proceso querés mejorar?" multiline rows={4} />
```

- Focus: lime border + soft lime ring. Error: red border + message with icon.
- Sizes sm 32 · md 40 · lg 48.
