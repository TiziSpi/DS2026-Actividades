import { Link } from "react-router-dom";
import type { Libro } from "../types/Libro";

type Props = {
  book: Libro;
};

function BookCard({ book }: Props) {
  return (
    <article className="book-card">
      <div className="book-img-wrapper">
        <img src={book.cover} alt={book.title} />
      </div>

      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <strong>${book.price}</strong>
        <Link to={`/libros/${book.id}`}>Ver detalle</Link>
      </div>
    </article>
  );
}

export default BookCard;