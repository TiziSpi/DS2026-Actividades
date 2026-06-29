import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import BookCard from "../components/BookCard";
import useFetch from "../hooks/UseFetch";
import type { Libro } from "../types/Libro";

function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>("/libros.json");

  useEffect(() => {
    document.title = "Catálogo de libros";
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Catálogo</h1>
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h1>Catálogo</h1>
        <Alert variant="danger">{error}</Alert>
      </section>
    );
  }

  return (
    <section>
      <h1>Catálogo</h1>

      <div className="catalogo-grid">
        {libros?.map((libro) => (
          <BookCard key={libro.id} book={libro} />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;