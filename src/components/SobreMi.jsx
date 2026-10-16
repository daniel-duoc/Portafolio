/**
 * Sección "Sobre mí" reutilizable.
 * Props: texto (string), habilidades (string[])
 */
export default function SobreMi({ texto, habilidades = [] }) {
  return (
    <section id="sobre-mi" className="py-5" aria-labelledby="sobre-mi-titulo">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-md-7">
            <h2 id="sobre-mi-titulo">Sobre mí</h2>
            <p>{texto}</p>
          </div>
          <div className="col-12 col-md-5">
            <h3 className="h5">Habilidades</h3>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
              {habilidades.map((h) => (
                <li key={h}><span className="badge text-bg-primary">{h}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
