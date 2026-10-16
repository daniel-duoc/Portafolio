# Plan de pruebas

Herramientas: **Jasmine** (pruebas), **Karma** (ejecución en navegador), **Istanbul/karma-coverage** (cobertura).
Ejecutar: `npm test` · Informe: `coverage/html/index.html`

| ID | Componente | Caso de prueba | Resultado esperado |
|----|-----------|----------------|--------------------|
| T01 | loadJson | Respuesta OK (fetch simulado) | Devuelve el objeto JSON |
| T02 | loadJson | Respuesta 404 | Lanza error "No se pudo cargar" |
| T03 | formatFecha | Fecha ISO | Fecha legible en español |
| T04 | NavBar | Render con 2 enlaces | Marca y 2 `.nav-link` con su href |
| T05 | NavBar | Botón del menú | Tiene `aria-label` y `aria-expanded="false"` |
| T06 | Introduccion | Render con props | h1 con nombre, bio y foto con `alt` |
| T07 | Introduccion | Sin redes/github | No falla, 0 enlaces de redes |
| T08 | SobreMi | Habilidades | Una insignia por habilidad |
| T09 | ProjectCard | Estructura | Usa `.card`, imagen, título, descripción, tecnologías |
| T10 | ProjectCard | Enlace | Botón con href al repositorio y `rel="noreferrer"` |
| T11 | Proyectos | Render inicial | Muestra los 3 proyectos |
| T12 | Proyectos | Clic en filtro | Solo proyectos con esa tecnología; `aria-pressed` correcto |
| T13 | Proyectos | Clic en "Todos" | Restaura la lista completa |
| T14 | NewsSection | Render | Título, una tarjeta por noticia, `<time datetime>` |
| T15 | NewsSection | "Leer más" | Texto truncado → completo → truncado; `aria-expanded` cambia |
| T16 | Noticias | Carga pendiente | Muestra "Cargando noticias…" |
| T17 | Noticias | fetch simulado OK | Dos secciones con sus noticias |
| T18 | Noticias | fetch simulado con error | Muestra `.alert-danger` |
| T19 | Contacto | Labels | Cada campo tiene `label for` |
| T20 | Contacto | Escribir | El estado actualiza el valor del campo |
| T21 | Contacto | Envío vacío | 3 campos `.is-invalid`, sin mensaje de éxito |
| T22 | Contacto | Correo inválido | Campo email `.is-invalid` |
| T23 | Contacto | Datos válidos | Mensaje de éxito y formulario limpio |
| T24 | App | JSON simulados | Muestra las 5 secciones y 3 tarjetas |
| T25 | App | Accesibilidad | Existe enlace "Saltar al contenido" |
| T26 | App | JSON no disponible | Muestra mensaje de error |

**Mocks usados:** `spyOn(window, 'fetch')` para simular los archivos JSON (helper `mockFetch` en `src/testUtils.js`).
**Meta de cobertura:** ≥ 80 % statements/lines/functions y ≥ 70 % branches (configurado en `karma.conf.cjs`).
