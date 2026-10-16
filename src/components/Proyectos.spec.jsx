import Proyectos from './Proyectos';
import { render, click } from '../testUtils';

const datos = [
  { id: 1, titulo: 'A', descripcion: 'a', imagen: 'a.svg', tecnologias: ['React'], enlace: '#' },
  { id: 2, titulo: 'B', descripcion: 'b', imagen: 'b.svg', tecnologias: ['CSS'], enlace: '#' },
  { id: 3, titulo: 'C', descripcion: 'c', imagen: 'c.svg', tecnologias: ['React', 'CSS'], enlace: '#' },
];
const botones = (c) => [...c.querySelectorAll('[role="group"] button')];

describe('Proyectos', () => {
  let v;
  beforeEach(async () => { v = await render(<Proyectos proyectos={datos} />); });
  afterEach(() => v.unmount());

  it('muestra todos los proyectos al inicio (al menos tres)', () => {
    expect(v.container.querySelectorAll('.card').length).toBe(3);
  });

  it('crea un botón por tecnología más "Todos"', () => {
    expect(botones(v.container).map((b) => b.textContent)).toEqual(['Todos', 'React', 'CSS']);
  });

  it('filtra al hacer clic en una tecnología', async () => {
    await click(botones(v.container).find((b) => b.textContent === 'CSS'));
    expect(v.container.querySelectorAll('.card').length).toBe(2);
  });

  it('actualiza aria-pressed del filtro activo', async () => {
    const react = botones(v.container).find((b) => b.textContent === 'React');
    await click(react);
    expect(react.getAttribute('aria-pressed')).toBe('true');
    expect(v.container.querySelectorAll('.card').length).toBe(2);
  });

  it('"Todos" restaura la lista completa', async () => {
    const b = botones(v.container);
    await click(b[1]);
    await click(b[0]);
    expect(v.container.querySelectorAll('.card').length).toBe(3);
  });
});
