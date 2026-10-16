import Contacto from './Contacto';
import { render, escribir, enviarForm } from '../testUtils';

describe('Contacto', () => {
  let v, form;
  const campo = (id) => v.container.querySelector(`#${id}`);
  beforeEach(async () => {
    v = await render(<Contacto />);
    form = v.container.querySelector('form');
  });
  afterEach(() => v.unmount());

  it('cada campo tiene su label asociado', () => {
    ['nombre', 'email', 'mensaje'].forEach((id) => {
      expect(v.container.querySelector(`label[for="${id}"]`)).not.toBeNull();
    });
  });

  it('actualiza el estado al escribir', async () => {
    await escribir(campo('nombre'), 'Ana');
    expect(campo('nombre').value).toBe('Ana');
  });

  it('muestra errores si el formulario está vacío', async () => {
    await enviarForm(form);
    expect(v.container.querySelectorAll('.is-invalid').length).toBe(3);
    expect(v.container.querySelector('.alert-success')).toBeNull();
  });

  it('rechaza un correo inválido', async () => {
    await escribir(campo('nombre'), 'Ana');
    await escribir(campo('email'), 'no-es-correo');
    await escribir(campo('mensaje'), 'Mensaje suficientemente largo');
    await enviarForm(form);
    expect(campo('email').classList.contains('is-invalid')).toBeTrue();
  });

  it('con datos válidos confirma el envío y limpia el formulario', async () => {
    await escribir(campo('nombre'), 'Ana');
    await escribir(campo('email'), 'ana@correo.cl');
    await escribir(campo('mensaje'), 'Hola, me gustó tu portafolio');
    await enviarForm(form);
    expect(v.container.querySelector('.alert-success')).not.toBeNull();
    expect(campo('nombre').value).toBe('');
  });
});
