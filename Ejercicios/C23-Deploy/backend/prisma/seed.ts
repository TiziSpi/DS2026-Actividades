
import { prisma } from "../src/config/prisma";

const autores = [
  {
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francia",
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Reino Unido",
  },
  {
    nombre: "Julio Cortázar",
    nacionalidad: "Argentina",
  },
];

const categorias = [
  { nombre: "Novela" },
  { nombre: "Clásico" },
  { nombre: "Ficción" },
];

const libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "https://placehold.co/300x400?text=El+Principito",
    disponible: true,
    cats: ["Novela", "Clásico"],
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    precio: 6200,
    imagen: "https://placehold.co/300x400?text=1984",
    disponible: true,
    cats: ["Novela", "Ficción"],
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    precio: 7000,
    imagen: "https://placehold.co/300x400?text=Rayuela",
    disponible: false,
    cats: ["Novela", "Clásico"],
  },
];

async function main() {
  for (const autor of autores) {
    await prisma.autor.upsert({
      where: { nombre: autor.nombre },
      update: {},
      create: autor,
    });
  }

  for (const categoria of categorias) {
    await prisma.categoria.upsert({
      where: { nombre: categoria.nombre },
      update: {},
      create: categoria,
    });
  }

  for (const { autor, cats, ...datos } of libros) {
    const existente = await prisma.libro.findFirst({
      where: {
        titulo: datos.titulo,
        autor: { nombre: autor },
      },
    });

    if (!existente) {
      await prisma.libro.create({
        data: {
          ...datos,
          autor: {
            connect: { nombre: autor },
          },
          categorias: {
            connect: cats.map((nombre) => ({ nombre })),
          },
        },
      });
    }
  }

  console.log("Datos iniciales cargados correctamente.");
}

main()
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
