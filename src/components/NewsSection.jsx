import { useState } from 'react';
import { formatFecha } from '../utils/loadJson';

export const LIMITE = 90;

/**
 * Una sección de noticias (se usa dos veces en el portafolio).
 * Props: titulo (string), noticias ([{ id, titulo, fecha, contenido }])
 */
export default function NewsSection({ titulo, noticias = [] }) {
  const [abiertas, setAbiertas] = useState({});
  const alternar = (id) => setAbiertas((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="col-12 col-lg-6">
      <h3 className="h4 mb-3">{titulo}</h3>
      {noticias.map((n) => {
        const larga = n.contenido.length > LIMITE;
        const abierta = !!abiertas[n.id];
        const texto = larga && !abierta ? `${n.contenido.slice(0, LIMITE)}…` : n.contenido;
        return (
          <article className="card mb-3" key={n.id}>
            <div className="card-body">
              <h4 className="card-title h6">{n.titulo}</h4>
              <time className="text-muted small d-block mb-2" dateTime={n.fecha}>
                {formatFecha(n.fecha)}
              </time>
              <p className="card-text">{texto}</p>
              {larga && (
                <button
                  type="button"
                  className="btn btn-link p-0"
                  aria-expanded={abierta}
                  onClick={() => alternar(n.id)}
                >
                  {abierta ? 'Leer menos' : 'Leer más'}
                </button>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
