# Guía rápida de Git (commits sugeridos)

```bash
git init
git branch -M main
git add package.json vite.config.js index.html .gitignore
git commit -m "chore: inicializa proyecto React con Vite"
git add src/main.jsx src/App.jsx src/styles.css public
git commit -m "feat: estructura base y datos JSON"
git add src/components/NavBar.jsx src/components/Introduccion.jsx src/components/SobreMi.jsx
git commit -m "feat: navbar, introducción y sobre mí"
git add src/components/ProjectCard.jsx src/components/Proyectos.jsx
git commit -m "feat: sección de proyectos con filtro"
git add src/components/NewsSection.jsx src/components/Noticias.jsx src/hooks src/utils/loadJson.js
git commit -m "feat: noticias cargadas desde JSON"
git add src/components/Contacto.jsx src/components/Footer.jsx
git commit -m "feat: formulario de contacto y footer"
git add karma.conf.cjs src/testUtils.js src/**/*.spec.jsx
git commit -m "test: configura Karma/Jasmine y pruebas unitarias"
git add README.md docs .github
git commit -m "docs: README, plan de pruebas y deploy a GitHub Pages"
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```
