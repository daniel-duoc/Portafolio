import { useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * Lista de proyectos con filtro por tecnología (estado + eventos).
 * Props: proyectos (array)
 */
export default function Proyectos({ proyectos = [] }) {
  const [filtro, setFiltro] = useState('Todos');
  const tecnologias = ['Todos', ...new Set(proyectos.flatMap((p) => p.tecnologias))];
  const visibles =
    filtro === 'Todos' ? proyectos : proyectos.filter((p) => p.tecnologias.includes(filtro));

  return (
    <section id="proyectos" className="py-5 bg-light" aria-labelledby="proyectos-titulo">
      <div className="container">
        <h2 id="proyectos-titulo">Proyectos</h2>
        <div className="d-flex flex-wrap gap-2 my-3" role="group" aria-label="Filtrar proyectos por tecnología">
          {tecnologias.map((t) => (
            <button
              key={t}
              type="button"
              className={`btn btn-sm ${t === filtro ? 'btn-primary' : 'btn-outline-primary'}`}
              aria-pressed={t === filtro}
              onClick={() => setFiltro(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {visibles.map((p) => (
            <div className="col" key={p.id}>
              <ProjectCard proyecto={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
