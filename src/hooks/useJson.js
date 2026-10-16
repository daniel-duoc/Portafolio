import { useEffect, useState } from 'react';
import { loadJson } from '../utils/loadJson';

/**
 * Carga un JSON y expone { data, error, loading } como estado de React.
 */
export default function useJson(url) {
  const [state, setState] = useState({ data: null, error: null, loading: true });

  useEffect(() => {
    let activo = true;
    setState({ data: null, error: null, loading: true });
    loadJson(url)
      .then((data) => activo && setState({ data, error: null, loading: false }))
      .catch((error) => activo && setState({ data: null, error, loading: false }));
    return () => {
      activo = false;
    };
  }, [url]);

  return state;
}
