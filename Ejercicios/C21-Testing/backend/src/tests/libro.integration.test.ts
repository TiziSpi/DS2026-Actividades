
import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../app";

// Test de integración con Supertest.
// No requiere base de datos porque la petición es rechazada
// por el middleware de autenticación antes de llegar al controlador.

describe("Integración de la API de libros", () => {
  it("Debe rechazar la creación de un libro sin token JWT", async () => {
    const nuevoLibro = {
      titulo: "El Principito",
      precio: 4500,
      imagen: "principito.jpg",
      autorId: 1,
    };

    const response = await request(app)
      .post("/api/libros")
      .send(nuevoLibro);

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: "Falta el token",
    });
  });
});
