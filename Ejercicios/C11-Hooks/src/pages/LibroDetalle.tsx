import { useParams, Link } from "react-router-dom";
import type { Libro } from "../types/Libro";

type Props = {
  libros: Libro[];
};

function LibroDetalle({ libros }: Props) {
  const { id } = useParams();

  const libro = libros.find((libro) => libro.id === Number(id));

  if (!libro) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <section className="detalle-libro">
      <img src={libro.cover} alt={libro.title} />

      <div>
        <h1>{libro.title}</h1>
        <p>{libro.author}</p>
        <strong>${libro.price}</strong>
        <br />
        <Link to="/catalogo">Volver al catálogo</Link>
      </div>
    </section>
  );
}

export default LibroDetalle;