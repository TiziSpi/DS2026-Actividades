import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <div className="home-card">
        <h1>📚 Mi Librería</h1>
        <p>Bienvenido a nuestra colección de libros.</p>

        <Link className="home-button" to="/catalogo">
          Ver Catálogo
        </Link>
      </div>
    </section>
  );
}

export default Home;