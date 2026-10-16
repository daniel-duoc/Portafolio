/**
 * Sección de introducción: nombre, foto y biografía.
 * Props: nombre, titulo, bio, foto, github, redes ([{ nombre, url }])
 */
export default function Introduccion({ nombre, titulo, bio, foto, github, redes = [] }) {
  return (
    <header id="inicio" className="hero text-center text-white d-flex align-items-center">
      <div className="container py-5">
        <img
          src={foto}
          alt={`Foto de ${nombre}`}
          className="hero-foto rounded-circle border border-3 border-white mb-3"
          width="140"
          height="140"
        />
        <h1 className="display-5 fw-bold">{nombre}</h1>
        <p className="lead mb-1">{titulo}</p>
        {github && (
          <p className="mb-3">
            <a className="link-light" href={github} target="_blank" rel="noreferrer">{github}</a>
          </p>
        )}
        <p className="mx-auto hero-bio">{bio}</p>
        <ul className="list-inline mb-0">
          {redes.map((r) => (
            <li className="list-inline-item" key={r.nombre}>
              <a className="btn btn-outline-light btn-sm" href={r.url} target="_blank" rel="noreferrer">
                {r.nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
