import NewsSection, { LIMITE } from './NewsSection';
import { render, click } from '../testUtils';

const larga = 'x'.repeat(LIMITE + 40);
const noticias = [
  { id: 1, titulo: 'Corta', fecha: '2026-01-05', contenido: 'Texto breve' },
  { id: 2, titulo: 'Larga', fecha: '2026-02-10', contenido: larga },
];

describe('NewsSection', () => {
  let v;
  beforeEach(async () => { v = await render(<NewsSection titulo="Mis noticias" noticias={noticias} />); });
  afterEach(() => v.unmount());

  it('muestra el título de la sección y una tarjeta por noticia', () => {
    expect(v.container.querySelector('h3').textContent).toBe('Mis noticias');
    expect(v.container.querySelectorAll('article').length).toBe(2);
  });

  it('muestra la fecha en una etiqueta <time>', () => {
    expect(v.container.querySelector('time').getAttribute('datetime')).toBe('2026-01-05');
  });

  it('solo las noticias largas tienen botón "Leer más"', () => {
    expect(v.container.querySelectorAll('button').length).toBe(1);
  });

  it('trunca el contenido largo y lo expande al hacer clic', async () => {
    const texto = () => v.container.querySelectorAll('.card-text')[1].textContent;
    expect(texto().length).toBe(LIMITE + 1);
    const btn = v.container.querySelector('button');
    await click(btn);
    expect(texto()).toBe(larga);
    expect(btn.textContent).toBe('Leer menos');
    expect(btn.getAttribute('aria-expanded')).toBe('true');
    await click(btn);
    expect(texto().length).toBe(LIMITE + 1);
  });
});
