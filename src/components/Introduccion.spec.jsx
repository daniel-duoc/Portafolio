import Introduccion from './Introduccion';
import { render } from '../testUtils';

describe('Introduccion', () => {
  const props = {
    nombre: 'Ana', titulo: 'Estudiante', bio: 'Hola mundo', foto: 'img/a.svg',
    github: 'https://github.com/ana',
    redes: [{ nombre: 'GitHub', url: 'https://github.com/ana' }],
  };

  it('renderiza nombre, bio y foto con texto alternativo', async () => {
    const v = await render(<Introduccion {...props} />);
    expect(v.container.querySelector('h1').textContent).toBe('Ana');
    expect(v.container.textContent).toContain('Hola mundo');
    expect(v.container.querySelector('img').getAttribute('alt')).toBe('Foto de Ana');
    v.unmount();
  });

  it('renderiza las redes sociales recibidas por props', async () => {
    const v = await render(<Introduccion {...props} />);
    expect(v.container.querySelectorAll('ul a').length).toBe(1);
    v.unmount();
  });

  it('no falla si no hay redes ni github', async () => {
    const v = await render(<Introduccion nombre="Ana" titulo="t" bio="b" foto="f.svg" />);
    expect(v.container.querySelectorAll('ul a').length).toBe(0);
    v.unmount();
  });
});
