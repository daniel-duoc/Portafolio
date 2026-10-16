# Mi Portafolio

Portafolio personal hecho con **React + Vite + Bootstrap 5**. Los datos (perfil, proyectos y noticias) se cargan desde archivos JSON en `public/data/`. Pruebas unitarias con **Jasmine + Karma**.

> DSY1104 – Desarrollo Fullstack II · Evaluación Formativa N° 2

**Demo:** https://daniel-duoc.github.io/Portafolio/

![Captura del portafolio](docs/captura-portafolio.png)

## Requisitos
- Node.js 18 o superior
- Google Chrome (y opcionalmente Firefox) para Karma

## Instalación y ejecución
```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # compila en /dist
npm run preview    # prueba la versión compilada
```

## Pruebas
```bash
npm test           # Karma + Jasmine (Chrome headless) + cobertura
npm run test:all   # Chrome y Firefox
```
El informe de cobertura queda en `coverage/html/index.html`.
El plan de pruebas está en [`docs/PLAN_DE_PRUEBAS.md`](docs/PLAN_DE_PRUEBAS.md).

## Estructura
```
public/data/   perfil.json, proyectos.json, noticias.json
public/img/    imágenes (usa .webp/.svg optimizadas)
src/components NavBar, Introduccion, SobreMi, ProjectCard, Proyectos,
               NewsSection, Noticias, Contacto, Footer  (+ *.spec.jsx)
src/hooks      useJson (carga JSON y maneja estado)
src/utils      loadJson, formatFecha
karma.conf.cjs configuración de Karma/Jasmine/cobertura
```

## Personalizar
1. Edita `public/data/perfil.json` (nombre, bio, redes, habilidades).
2. Edita `public/data/proyectos.json` (mínimo 3 proyectos).
3. Edita `public/data/noticias.json` (dos secciones).
4. Reemplaza las imágenes de `public/img/`.

## Publicar en GitHub Pages
**Opción A (automática):** sube a la rama `main`; el workflow `.github/workflows/deploy.yml` prueba, compila y publica. En GitHub: *Settings → Pages → Source: GitHub Actions*.
**Opción B (manual):** `npm run build && npm run deploy`.

## Accesibilidad y rendimiento
- `alt` en todas las imágenes, `label` en formularios, enlace "Saltar al contenido", foco visible y navegación por teclado.
- Imágenes con `loading="lazy"`, SVG livianos y build minificado con Vite.
