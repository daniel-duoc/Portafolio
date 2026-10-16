import useJson from './hooks/useJson';
import NavBar from './components/NavBar';
import Introduccion from './components/Introduccion';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const LINKS = [
  { href: '#inicio', label: 'Introducción' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#noticias', label: 'Noticias' },
  { href: '#contacto', label: 'Contacto' },
];

/** Componente raíz. baseUrl permite publicar en subcarpetas (GitHub Pages). */
export default function App({ baseUrl = './' }) {
  const perfil = useJson(`${baseUrl}data/perfil.json`);
  const proyectos = useJson(`${baseUrl}data/proyectos.json`);

  if (perfil.error || proyectos.error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          No se pudo cargar el portafolio. Revisa los archivos de la carpeta public/data.
        </div>
      </div>
    );
  }
  if (!perfil.data || !proyectos.data) {
    return <p className="container py-5" role="status">Cargando portafolio…</p>;
  }

  const p = perfil.data;
  return (
    <>
      <a className="visually-hidden-focusable" href="#contenido">Saltar al contenido</a>
      <NavBar brand="Mi Portafolio" links={LINKS} />
      <Introduccion
        nombre={p.nombre} titulo={p.titulo} bio={p.bio}
        foto={`${baseUrl}${p.foto}`} github={p.github} redes={p.redes}
      />
      <main id="contenido">
        <SobreMi texto={p.sobreMi} habilidades={p.habilidades} />
        <Proyectos
          proyectos={proyectos.data.map((x) => ({ ...x, imagen: `${baseUrl}${x.imagen}` }))}
        />
        <Noticias url={`${baseUrl}data/noticias.json`} />
        <Contacto />
      </main>
      <Footer nombre={p.nombre} />
    </>
  );
}
