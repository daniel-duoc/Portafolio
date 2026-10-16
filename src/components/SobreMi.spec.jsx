import SobreMi from './SobreMi';
import { render } from '../testUtils';

describe('SobreMi', () => {
  it('muestra el texto y una insignia por habilidad', async () => {
    const v = await render(<SobreMi texto="Me gusta programar" habilidades={['JS', 'React']} />);
    expect(v.container.textContent).toContain('Me gusta programar');
    expect(v.container.querySelectorAll('.badge').length).toBe(2);
    v.unmount();
  });
});
