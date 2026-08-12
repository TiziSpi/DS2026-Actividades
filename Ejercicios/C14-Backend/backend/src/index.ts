import express from "express";

const app = express();
const PORT = 3000;

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  precio: number;
  imagen: string;
  disponible: boolean;
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "https://placehold.co/300x400?text=El+Principito",
    disponible: true
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    precio: 6200,
    imagen: "https://placehold.co/300x400?text=1984",
    disponible: true
  },
  {
    id: 3,
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    precio: 7000,
    imagen: "https://placehold.co/300x400?text=Rayuela",
    disponible: false
  }
];

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería" });
});

app.get("/libros", (_req, res) => {
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});