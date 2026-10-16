import { useState } from 'react';

const VACIO = { nombre: '', email: '', mensaje: '' };

/**
 * Formulario de contacto (Bootstrap Form) con validación simple.
 * No envía datos a un servidor: muestra una confirmación en pantalla.
 */
export default function Contacto() {
  const [form, setForm] = useState(VACIO);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validar = () => {
    const err = {};
    if (!form.nombre.trim()) err.nombre = 'Escribe tu nombre.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Escribe un correo válido.';
    if (form.mensaje.trim().length < 10) err.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    return err;
  };

  const enviar = (e) => {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    if (Object.keys(err).length === 0) {
      setEnviado(true);
      setForm(VACIO);
    } else {
      setEnviado(false);
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light" aria-labelledby="contacto-titulo">
      <div className="container">
        <h2 id="contacto-titulo">Contacto</h2>
        <form className="row g-3 mt-1" onSubmit={enviar} noValidate>
          <div className="col-12 col-md-6">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input id="nombre" name="nombre" className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
              value={form.nombre} onChange={cambiar} aria-describedby="nombre-error" />
            <div id="nombre-error" className="invalid-feedback">{errores.nombre}</div>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Correo</label>
            <input id="email" name="email" type="email" className={`form-control ${errores.email ? 'is-invalid' : ''}`}
              value={form.email} onChange={cambiar} aria-describedby="email-error" />
            <div id="email-error" className="invalid-feedback">{errores.email}</div>
          </div>
          <div className="col-12">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows="4" className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
              value={form.mensaje} onChange={cambiar} aria-describedby="mensaje-error" />
            <div id="mensaje-error" className="invalid-feedback">{errores.mensaje}</div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
          </div>
          {enviado && (
            <div className="col-12">
              <div className="alert alert-success mb-0" role="status">¡Mensaje enviado! Gracias por escribirme.</div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
