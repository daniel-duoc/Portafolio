/**
 * Lee un archivo JSON desde una URL y devuelve su contenido.
 * Lanza un Error si la respuesta no es exitosa.
 */
export async function loadJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`No se pudo cargar ${url} (${res.status})`);
  }
  return res.json();
}

/** Formatea una fecha ISO (AAAA-MM-DD) como "20 de septiembre de 2026". */
export function formatFecha(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
