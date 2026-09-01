import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import LibroDetalle from "./pages/LibroDetalle";
import AltaLibro from "./pages/AltaLibro";
import { allBooks } from "./data/Books";
import type { Libro } from "./types/Libro";

function App() {
  const [libros, setLibros] = useState<Libro[]>(allBooks);

  const agregarLibro = (libro: Omit<Libro, "id">) => {
    const nuevoLibro: Libro = {
      id: libros.length + 1,
      ...libro,
    };

    setLibros([...libros, nuevoLibro]);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libros/:id" element={<LibroDetalle libros={libros} />} />
        <Route
          path="/alta-libro"
          element={<AltaLibro onAgregarLibro={agregarLibro} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;