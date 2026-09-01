import { prisma } from "../src/config/prisma";

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

const categorias = [
  { nombre: "Novela" },
  { nombre: "Clásico" },
  { nombre: "Ficción" }
];

const libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "https://placehold.co/300x400?text=El+Principito",
    disponible: true,
    cats: ["Novela", "Clásico"]
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    precio: 6200,
    imagen: "https://placehold.co/300x400?text=1984",
    disponible: true,
    cats: ["Novela", "Ficción"]
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    precio: 7000,
    imagen: "https://placehold.co/300x400?text=Rayuela",
    disponible: false,
    cats: ["Novela", "Clásico"]
  }
];

async function main() {
  await prisma.autor.createMany({
    data: autores
  });

  await prisma.categoria.createMany({
    data: categorias
  });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: {
          connect: { nombre: autor }
        },
        categorias: {
          connect: cats.map(nombre => ({ nombre }))
        }
      }
    });
  }
}

main();