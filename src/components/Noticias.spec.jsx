import Noticias from './Noticias';
import { render, mockFetch, esperar } from '../testUtils';

const json = {
  tecnologia: { titulo: 'Tecnología', items: [{ id: 1, titulo: 'T1', fecha: '2026-01-01', contenido: 'c1' }] },
  personales: { titulo: 'Personales', items: [{ id: 1, titulo: 'P1', fecha: '2026-01-02', contenido: 'c2' }] },
};

describe('Noticias', () => {
  it('muestra "Cargando" mientras llegan los datos', async () => {
    spyOn(window, 'fetch').and.returnValue(new Promise(() => {}));
    const v = await render(<Noticias url="data/noticias.json" />);
    expect(v.container.querySelector('[role="status"]').textContent).toContain('Cargando');
    v.unmount();
  });

  it('carga el JSON (mock de fetch) y renderiza dos secciones', async () => {
    const spy = mockFetch({ 'noticias.json': json });
    const v = await render(<Noticias url="data/noticias.json" />);
    await esperar();
    expect(spy).toHaveBeenCalledWith('data/noticias.json');
    expect(v.container.querySelectorAll('h3').length).toBe(2);
    expect(v.container.textContent).toContain('T1');
    expect(v.container.textContent).toContain('P1');
    v.unmount();
  });

  it('muestra un mensaje de error si falla la carga', async () => {
    mockFetch({}, { status: 404 });
    const v = await render(<Noticias url="data/noticias.json" />);
    await esperar();
    expect(v.container.querySelector('.alert-danger')).not.toBeNull();
    v.unmount();
  });
});
