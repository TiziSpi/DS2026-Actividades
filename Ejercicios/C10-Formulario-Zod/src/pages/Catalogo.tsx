import BookCard from "../components/BookCard";
import type { Libro } from "../types/Libro";

type Props = {
  libros: Libro[];
};

function Catalogo({ libros }: Props) {
  return (
    <section>
      <h1>Catálogo</h1>

      <div className="catalogo-grid">
        {libros.map((libro) => (
          <BookCard key={libro.id} book={libro} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;