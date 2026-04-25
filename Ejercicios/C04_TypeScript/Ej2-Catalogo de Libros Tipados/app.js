"use strict";
const catalogo = [
    { isbn: "001", titulo: "JAJA", autor: "Borges", precio: 5800, disponible: true, genero: "Ficción" },
    { isbn: "002", titulo: "Gmus", autor: "Manu", precio: 22800, disponible: false, genero: "Novela" },
    { isbn: "003", titulo: "Accionar", autor: "Misiones", precio: 10200, disponible: true, genero: "Ficción" },
    { isbn: "005", titulo: "Estudiar", autor: "Yazmin", precio: 55000, disponible: true, genero: "Tecnologia" },
];
const listado = document.querySelector("#listado");
const stats = document.querySelector("#stats");
const filtroAutor = document.querySelector("#filtroAutor");
const btnFiltrar = document.querySelector("#filtrar");
const btnDisponibles = document.querySelector("#mostrarDisponibles");
const btnTodos = document.querySelector("#mostrarTodos");
function buscarPorAutor(autor) {
    return catalogo.filter((libro) => libro.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter((libro) => libro.disponible);
}
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    const total = libros.reduce((acc, libro) => acc + libro.precio, 0);
    return total / libros.length;
}
function renderizar(libros) {
    listado.innerHTML = "";
    libros.forEach((libro) => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? "Disponible" : "No disponible"}`;
        listado.appendChild(li);
    });
    stats.textContent = `Cantidad: ${libros.length} | Precio promedio: $${precioPromedio(libros).toFixed(2)}`;
}
btnFiltrar.addEventListener("click", () => {
    renderizar(buscarPorAutor(filtroAutor.value));
});
btnDisponibles.addEventListener("click", () => {
    renderizar(librosDisponibles());
});
btnTodos.addEventListener("click", () => {
    renderizar(catalogo);
});
renderizar(catalogo);
