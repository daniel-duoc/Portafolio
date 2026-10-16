export default function Footer({ nombre }) {
  return (
    <footer className="bg-dark text-white-50 text-center py-3">
      <small>© {new Date().getFullYear()} {nombre}. Hecho con React y Bootstrap.</small>
    </footer>
  );
}
