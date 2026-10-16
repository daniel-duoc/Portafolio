import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

/** Monta un elemento React en el DOM real del navegador (Karma). */
export async function render(element) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  await act(async () => { root.render(element); });
  return {
    container,
    unmount: () => { act(() => root.unmount()); container.remove(); },
  };
}

export async function click(el) {
  await act(async () => { el.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
}

/** Simula escribir en un input/textarea controlado por React. */
export async function escribir(el, valor) {
  const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement : HTMLInputElement;
  const setter = Object.getOwnPropertyDescriptor(proto.prototype, 'value').set;
  await act(async () => {
    setter.call(el, valor);
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

export async function enviarForm(form) {
  await act(async () => {
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
}

/** Mock de fetch: recibe un mapa { fragmentoDeUrl: dato } */
export function mockFetch(mapa, { status = 200 } = {}) {
  return spyOn(window, 'fetch').and.callFake((url) => {
    const clave = Object.keys(mapa).find((k) => String(url).includes(k));
    return Promise.resolve({
      ok: status === 200 && clave !== undefined,
      status: clave === undefined ? 404 : status,
      json: () => Promise.resolve(mapa[clave]),
    });
  });
}

/** Espera a que terminen las promesas pendientes (carga de JSON simulada). */
export async function esperar(ms = 20) {
  await act(async () => { await new Promise((r) => setTimeout(r, ms)); });
}
