
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookCard from "./BookCard";
import type { Libro } from "../types/Libro";

describe("Componente BookCard", () => {
  it("Debe mostrar correctamente los datos de un libro", () => {
    const libro: Libro = {
      id: 1,
      titulo: "El Principito",
      autor: {
        id: 1,
        nombre: "Antoine de Saint-Exupéry",
        nacionalidad: "Francesa",
      },
      precio: 4500,
      imagen: "principito.jpg",
      disponible: true,
    };

    render(
      <MemoryRouter>
        <BookCard book={libro} />
      </MemoryRouter>
    );

    expect(screen.getByText("El Principito")).toBeInTheDocument();

    expect(
      screen.getByText("Antoine de Saint-Exupéry")
    ).toBeInTheDocument();

    expect(screen.getByText("$4500")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "Ver detalle" })
    ).toHaveAttribute("href", "/libros/1");

    expect(
      screen.getByRole("img", { name: "El Principito" })
    ).toHaveAttribute("src", "principito.jpg");
  });
});
