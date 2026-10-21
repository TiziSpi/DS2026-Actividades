import { useParams, Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import useFetch from "../hooks/UseFetch";
import type { Libro } from "../types/Libro";

function LibroDetalle() {
  const { id } = useParams();

  const {
    data: libro,
    loading,
    error,
  } = useFetch<Libro>(`/libros/${id}`);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <section className="detalle-libro">
      <img src={libro.imagen} alt={libro.titulo} />

      <div>
        <h1>{libro.titulo}</h1>
        <p>{libro.autor.nombre}</p>
        <strong>${libro.precio}</strong>
        <br />
        <Link to="/catalogo">Volver al catálogo</Link>
      </div>
    </section>
  );
}

export default LibroDetalle;