/**
 * Barra de navegación (Bootstrap Navbar, colapsable en móvil).
 * Props: brand (string), links ([{ href, label }])
 */
export default function NavBar({ brand, links }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand" href="#inicio">{brand}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Mostrar u ocultar el menú"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
