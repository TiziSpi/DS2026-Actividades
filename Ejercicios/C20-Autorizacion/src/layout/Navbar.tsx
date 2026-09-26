import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { usuario, estaAutenticado, logout, tieneRol } = useAuth();

  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/">
        📚 Mi Librería
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>

        {tieneRol("ADMIN") && (
          <NavLink to="/libros/nuevo">Nuevo libro</NavLink>
        )}

        {!estaAutenticado ? (
          <NavLink to="/login">Ingresar</NavLink>
        ) : (
          <>
            <span>Hola, {usuario?.nombre}</span>
            <button type="button" onClick={logout}>
              Salir
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;