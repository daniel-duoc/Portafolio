import { loadJson, formatFecha } from './loadJson';
import { mockFetch } from '../testUtils';

describe('loadJson', () => {
  it('devuelve el JSON cuando la respuesta es exitosa', async () => {
    mockFetch({ 'x.json': { a: 1 } });
    expect(await loadJson('data/x.json')).toEqual({ a: 1 });
  });

  it('lanza un error cuando la respuesta falla', async () => {
    mockFetch({}, { status: 404 });
    await expectAsync(loadJson('data/no-existe.json')).toBeRejectedWithError(/No se pudo cargar/);
  });
});

describe('formatFecha', () => {
  it('formatea una fecha ISO en español', () => {
    const txt = formatFecha('2026-09-20');
    expect(txt).toContain('2026');
    expect(txt.toLowerCase()).toContain('septiembre');
  });
});
