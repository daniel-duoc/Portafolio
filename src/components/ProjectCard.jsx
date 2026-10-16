/**
 * Tarjeta de proyecto (Bootstrap Card).
 * Props: proyecto { titulo, descripcion, imagen, tecnologias[], enlace }
 */
export default function ProjectCard({ proyecto }) {
  const { titulo, descripcion, imagen, tecnologias = [], enlace } = proyecto;
  return (
    <article className="card h-100 shadow-sm project-card">
      <img src={imagen} className="card-img-top" alt={`Captura del proyecto ${titulo}`} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{titulo}</h3>
        <p className="card-text">{descripcion}</p>
        <ul className="list-unstyled d-flex flex-wrap gap-1 mb-3">
          {tecnologias.map((t) => (
            <li key={t}><span className="badge text-bg-secondary">{t}</span></li>
          ))}
        </ul>
        <a
          href={enlace}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noreferrer"
          aria-label={`Ver ${titulo} en GitHub`}
        >
          Ver proyecto
        </a>
      </div>
    </article>
  );
}
