import useJson from '../hooks/useJson';
import NewsSection from './NewsSection';

/**
 * Carga noticias.json y muestra dos secciones de noticias.
 * Props: url (string) ruta del archivo JSON
 */
export default function Noticias({ url = 'data/noticias.json' }) {
  const { data, error, loading } = useJson(url);

  return (
    <section id="noticias" className="py-5" aria-labelledby="noticias-titulo">
      <div className="container">
        <h2 id="noticias-titulo" className="mb-4">Noticias</h2>
        {loading && <p role="status">Cargando noticias…</p>}
        {error && (
          <div className="alert alert-danger" role="alert">
            No se pudieron cargar las noticias. Recarga la página e inténtalo de nuevo.
          </div>
        )}
        {data && (
          <div className="row g-4">
            <NewsSection titulo={data.tecnologia.titulo} noticias={data.tecnologia.items} />
            <NewsSection titulo={data.personales.titulo} noticias={data.personales.items} />
          </div>
        )}
      </div>
    </section>
  );
}
