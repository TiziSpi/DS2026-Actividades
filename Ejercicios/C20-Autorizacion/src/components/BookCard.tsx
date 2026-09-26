import { Link } from "react-router-dom";
import type { Libro } from "../types/Libro";

type Props = {
  book: Libro;
};

function BookCard({ book }: Props) {
  return (
    <article className="book-card">
      <div className="book-img-wrapper">
        <img src={book.imagen} alt={book.titulo} />
      </div>

      <div className="book-info">
        <h3>{book.titulo}</h3>
        <p>{book.autor.nombre}</p>
        <strong>${book.precio}</strong>
        <Link to={`/libros/${book.id}`}>Ver detalle</Link>
      </div>
    </article>
  );
}

export default BookCard;