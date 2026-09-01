import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/">
        📚 Mi Librería
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/alta-libro">Alta libro</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;