export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
}

export interface Libro {
  id: number;
  titulo: string;
  autor: Autor;
  precio: number;
  imagen: string;
  disponible: boolean;
}