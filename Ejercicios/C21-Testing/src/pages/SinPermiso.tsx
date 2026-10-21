import { Link } from "react-router-dom";

function SinPermiso() {
  return (
    <section className="alta-libro-page">
      <div className="form-card">
        <h1>Sin permiso</h1>

        <p>
          Tu usuario está autenticado, pero no tiene permisos para acceder a
          esta sección.
        </p>

        <Link to="/catalogo">Volver al catálogo</Link>
      </div>
    </section>
  );
}

export default SinPermiso;