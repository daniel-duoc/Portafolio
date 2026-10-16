import NavBar from './NavBar';
import { render } from '../testUtils';

describe('NavBar', () => {
  const links = [{ href: '#a', label: 'Uno' }, { href: '#b', label: 'Dos' }];
  let vista;
  beforeEach(async () => { vista = await render(<NavBar brand="Mi Portafolio" links={links} />); });
  afterEach(() => vista.unmount());

  it('muestra la marca y un enlace por cada elemento', () => {
    expect(vista.container.querySelector('.navbar-brand').textContent).toBe('Mi Portafolio');
    expect(vista.container.querySelectorAll('.nav-link').length).toBe(2);
  });

  it('enlaces apuntan a sus secciones', () => {
    const hrefs = [...vista.container.querySelectorAll('.nav-link')].map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['#a', '#b']);
  });

  it('el botón del menú es accesible', () => {
    const btn = vista.container.querySelector('.navbar-toggler');
    expect(btn.getAttribute('aria-label')).toBeTruthy();
    expect(btn.getAttribute('aria-expanded')).toBe('false');
  });
});
