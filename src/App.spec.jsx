import App from './App';
import { render, mockFetch, esperar } from './testUtils';

const perfil = {
  nombre: 'Ana Pérez', titulo: 'Estudiante', bio: 'Bio', foto: 'img/avatar.svg',
  github: 'https://github.com/ana', redes: [], sobreMi: 'Sobre mí texto', habilidades: ['JS'],
};
const proyectos = [
  { id: 1, titulo: 'P1', descripcion: 'd', imagen: 'img/p1.svg', tecnologias: ['React'], enlace: '#' },
  { id: 2, titulo: 'P2', descripcion: 'd', imagen: 'img/p2.svg', tecnologias: ['CSS'], enlace: '#' },
  { id: 3, titulo: 'P3', descripcion: 'd', imagen: 'img/p3.svg', tecnologias: ['HTML'], enlace: '#' },
];
const noticias = {
  tecnologia: { titulo: 'Tec', items: [{ id: 1, titulo: 'N1', fecha: '2026-01-01', contenido: 'c' }] },
  personales: { titulo: 'Per', items: [{ id: 1, titulo: 'N2', fecha: '2026-01-02', contenido: 'c' }] },
};

describe('App (integración)', () => {
  it('carga los tres JSON y muestra todas las secciones', async () => {
    mockFetch({ 'perfil.json': perfil, 'proyectos.json': proyectos, 'noticias.json': noticias });
    const v = await render(<App baseUrl="./" />);
    await esperar();
    const { container } = v;
    expect(container.querySelector('h1').textContent).toBe('Ana Pérez');
    ['inicio', 'sobre-mi', 'proyectos', 'noticias', 'contacto'].forEach((id) => {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    });
    expect(container.querySelectorAll('.project-card').length).toBe(3);
    v.unmount();
  });

  it('incluye enlace para saltar al contenido (accesibilidad)', async () => {
    mockFetch({ 'perfil.json': perfil, 'proyectos.json': proyectos, 'noticias.json': noticias });
    const v = await render(<App baseUrl="./" />);
    await esperar();
    expect(v.container.querySelector('a[href="#contenido"]')).not.toBeNull();
    v.unmount();
  });

  it('muestra un mensaje de error si falta un JSON', async () => {
    mockFetch({}, { status: 404 });
    const v = await render(<App baseUrl="./" />);
    await esperar();
    expect(v.container.querySelector('.alert-danger')).not.toBeNull();
    v.unmount();
  });
});
