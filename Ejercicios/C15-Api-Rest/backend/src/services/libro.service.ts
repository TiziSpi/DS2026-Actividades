import type { Libro } from "../types/libro.types";

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

let proximoId = 4;

export function findAll(disponible?: boolean): Libro[] {
  if (disponible === undefined) return libros;

  return libros.filter((libro) => libro.disponible === disponible);
}

export function findById(id: number): Libro | undefined {
  return libros.find((libro) => libro.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = {
    id: proximoId++,
    ...datos
  };

  libros.push(nuevo);

  return nuevo;
}
export function update(
  id: number,
  datos: Omit<Libro, "id">
): Libro | undefined {
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice === -1) {
    return undefined;
  }

  const actualizado: Libro = {
    id,
    ...datos
  };

  libros[indice] = actualizado;

  return actualizado;
}
export function remove(id: number): boolean {
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice === -1) {
    return false;
  }

  libros.splice(indice, 1);

  return true;
}