
import { describe, it, expect } from "vitest";
import { libroCreateSchema } from "../validations/libro.validation";

describe("Validaciones de libros con Zod", () => {
  it("Debe aceptar un libro con datos válidos", () => {
    const libro = {
      titulo: "El Principito",
      precio: 4500,
      imagen: "principito.jpg",
      disponible: true,
      autorId: 1,
    };

    const resultado = libroCreateSchema.safeParse(libro);

    expect(resultado.success).toBe(true);
  });

  it("Debe rechazar un libro con título vacío", () => {
    const libro = {
      titulo: "",
      precio: 4500,
      imagen: "principito.jpg",
      autorId: 1,
    };

    const resultado = libroCreateSchema.safeParse(libro);

    expect(resultado.success).toBe(false);
  });

  it("Debe rechazar un libro con precio negativo", () => {
    const libro = {
      titulo: "El Principito",
      precio: -100,
      imagen: "principito.jpg",
      autorId: 1,
    };

    const resultado = libroCreateSchema.safeParse(libro);

    expect(resultado.success).toBe(false);
  });
});
