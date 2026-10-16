import ProjectCard from './ProjectCard';
import { render } from '../testUtils';

const proyecto = {
  titulo: 'Tienda', descripcion: 'Una tienda', imagen: 'img/p.svg',
  tecnologias: ['React', 'Bootstrap'], enlace: 'https://github.com/x/tienda',
};

describe('ProjectCard', () => {
  let v;
  beforeEach(async () => { v = await render(<ProjectCard proyecto={proyecto} />); });
  afterEach(() => v.unmount());

  it('usa la estructura de Card de Bootstrap', () => {
    expect(v.container.querySelector('.card')).not.toBeNull();
    expect(v.container.querySelector('.card-img-top')).not.toBeNull();
  });

  it('muestra título, descripción y tecnologías', () => {
    expect(v.container.querySelector('.card-title').textContent).toBe('Tienda');
    expect(v.container.querySelector('.card-text').textContent).toBe('Una tienda');
    expect(v.container.querySelectorAll('.badge').length).toBe(2);
  });

  it('la imagen tiene alt y el botón enlaza al repositorio', () => {
    expect(v.container.querySelector('img').getAttribute('alt')).toContain('Tienda');
    const a = v.container.querySelector('a.btn');
    expect(a.getAttribute('href')).toBe('https://github.com/x/tienda');
    expect(a.getAttribute('rel')).toContain('noreferrer');
  });
});
