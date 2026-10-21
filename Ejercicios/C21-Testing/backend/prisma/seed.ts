import { prisma } from "../src/config/prisma";
import bcrypt from "bcrypt";

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

  const usuarios = [
    {
      email: "admin@libreria.test",
      nombre: "Admin",
      rol: "ADMIN" as const,
      password: "Admin1234"
    },
    {
      email: "cliente@libreria.test",
      nombre: "Cliente",
      rol: "CLIENTE" as const,
      password: "Cliente1234"
    }
  ];

  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: {
        ...datos,
        passwordHash: await bcrypt.hash(password, 10)
      }
    });
  }
}

main();