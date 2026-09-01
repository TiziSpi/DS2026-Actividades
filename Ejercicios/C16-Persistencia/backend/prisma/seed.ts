import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "https://placehold.co/300x400?text=El+Principito",
    disponible: true
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    precio: 6200,
    imagen: "https://placehold.co/300x400?text=1984",
    disponible: true
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    precio: 7000,
    imagen: "https://placehold.co/300x400?text=Rayuela",
    disponible: false
  }
];

const autores = [
  {
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francia"
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Reino Unido"
  },
  {
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina"
  }
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}

main();