# Go Dream AI — sitio web

Sitio institucional de [Go Dream AI](https://www.godreamai.com): soluciones con IA y automatización para empresas. Es una página única (landing) con hero, problemas, soluciones, proceso, trabajos, preguntas frecuentes y contacto por WhatsApp.

Hecho con Next.js 16 (App Router), React 19 y CSS propio con tokens de diseño. No usa librerías de UI ni de estilos.

## Empezar

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000). Los cambios se ven al guardar.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm start` | Sirve el build de producción |
| `npm run lint` | ESLint |

> Esta versión de Next.js tiene cambios respecto de lo que se conoce de versiones anteriores. Ante la duda, la documentación oficial está en `node_modules/next/dist/docs/`.

## Estructura

```
src/
├── app/                  Rutas y metadata (layout, page, sitemap, robots, not-found, og image)
├── components/
│   ├── site/             Secciones del sitio (Header, Hero, HomeSections, Footer, WhatsAppButton)
│   ├── actions/ display/ feedback/ forms/ icons/ navigation/   Sistema de componentes (Button, Badge, Tag, Tabs, etc.)
│   └── shared/           Utilidades de componentes (Reveal, css)
├── lib/whatsapp.js       Número de contacto y armado de links de WhatsApp
└── styles/               Tokens de diseño (colores, tipografía, espaciado, movimiento) y estilos del sitio
public/
├── works/                Capturas de los proyectos de la sección Trabajos
├── fonts/                Geist y Geist Mono (locales)
└── logo-*.png, favicons, site.webmanifest
scripts/capture-works.mjs Genera las capturas de los proyectos
```

Las secciones de la home están en [src/components/site/HomeSections.jsx](src/components/site/HomeSections.jsx) y se ordenan en [src/app/page.jsx](src/app/page.jsx). Los componentes base tienen una guía de uso en el `.prompt.md` que está junto a cada uno.

## Contenido que se edita seguido

**Número de WhatsApp.** Está en [src/lib/whatsapp.js](src/lib/whatsapp.js). Todos los botones de contacto lo usan.

**Sección Trabajos.** Los proyectos son dos listas al principio del bloque `Work` de `HomeSections.jsx`:

- `WORK_CLIENTS`: proyectos cerrados (se muestran a todo el ancho).
- `WORK_DEMOS`: propuestas y demos (se muestran en tres columnas).

Cada proyecto tiene título, problema, lo construido (`built`), lo que se puede sumar (`extra`), el mensaje de WhatsApp de su botón (`message`), sus links y la captura (`image`, `previewUrl`). En "Construido" se pone solo lo que la demo o el sistema hace hoy; lo demás va en "Se puede sumar".

**Capturas de los proyectos.** Son archivos PNG en `public/works/` y se sirven como cualquier archivo estático: quedan en el repo y no hace falta regenerarlas en cada deploy. Para actualizar una, reemplazá el archivo conservando el nombre, o generala con:

```bash
node scripts/capture-works.mjs            # todas
node scripts/capture-works.mjs liever     # solo una
```

El script usa Edge o Chrome sin ventana y guarda la captura de la parte de arriba de cada sitio a 1440×900. Nombres válidos: `goconcesionaria`, `liever`, `gastronomia`, `inmobiliaria`, `estetica`. Si falta una imagen, la card se muestra sin captura.

## SEO y metadata

El título, la descripción y Open Graph están en [src/app/layout.js](src/app/layout.js); el dominio base es `https://www.godreamai.com`. `sitemap.js`, `robots.js` y `opengraph-image.jsx` generan los archivos correspondientes. Si cambia el dominio, hay que actualizarlo en `layout.js` y `sitemap.js`.

## Deploy

Es un proyecto Next.js estándar: sirve cualquier plataforma que lo soporte, como Vercel. Antes de publicar conviene correr `npm run lint` y `npm run build`.

Las variables de entorno (`.env*`) están en `.gitignore`. Hoy el sitio no necesita ninguna.
