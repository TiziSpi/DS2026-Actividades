"use strict";
let catalogo = [
    { isbn: "001", titulo: "JAJA", autor: "Borges", precio: 5800, disponible: true, genero: "Ficción" },
    { isbn: "002", titulo: "Gmus", autor: "Manu", precio: 22800, disponible: false, genero: "Novela" },
    { isbn: "003", titulo: "Accionar", autor: "Misiones", precio: 10200, disponible: true, genero: "Ficción" },
    { isbn: "005", titulo: "Estudiar", autor: "Yazmin", precio: 55000, disponible: true, genero: "Tecnologia" },
];
const inputTitulo = document.querySelector("#inputTitulo");
const inputAutor = document.querySelector("#inputAutor");
const inputPrecio = document.querySelector("#inputPrecio");
const inputDisponible = document.querySelector("#inputDisponible");
const inputGenero = document.querySelector("#inputGenero");
const btnAgregar = document.querySelector("#btnAgregar");
const listado = document.querySelector("#listado");
const stats = document.querySelector("#stats");
const errorForm = document.querySelector("#errorForm");
const filtroAutor = document.querySelector("#filtroAutor");
const btnFiltrar = document.querySelector("#filtrar");
const btnDisponibles = document.querySelector("#mostrarDisponibles");
const btnTodos = document.querySelector("#mostrarTodos");
function precioPromedio(libros) {
    if (libros.length === 0)
        return 0;
    return libros.reduce((acc, l) => acc + l.precio, 0) / libros.length;
}
function buscarPorAutor(autor) {
    return catalogo.filter((l) => l.autor.toLowerCase().includes(autor.toLowerCase()));
}
function librosDisponibles() {
    return catalogo.filter((l) => l.disponible);
}
function renderizar(libros) {
    listado.innerHTML = "";
    libros.forEach((libro) => {
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - ${libro.autor} - $${libro.precio} - ${libro.disponible ? "Disponible" : "No disponible"}`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => eliminarLibro(libro.isbn));
        li.appendChild(btnEliminar);
        listado.appendChild(li);
    });
    stats.textContent = `Cantidad: ${libros.length} | Promedio: $${precioPromedio(libros).toFixed(2)}`;
}
function validarFormulario() {
    const titulo = inputTitulo.value.trim();
    const autor = inputAutor.value.trim();
    const precio = Number(inputPrecio.value);
    const genero = inputGenero.value.trim();
    if (!titulo || !autor || precio <= 0) {
        return null;
    }
    return {
        isbn: "AUTO-" + Date.now(),
        titulo,
        autor,
        precio,
        disponible: inputDisponible.checked,
        genero: genero !== "" ? genero : undefined,
    };
}
function agregarLibro(libro) {
    catalogo.push(libro);
    renderizar(catalogo);
}
function eliminarLibro(isbn) {
    catalogo = catalogo.filter((l) => l.isbn !== isbn);
    renderizar(catalogo);
}
btnAgregar.addEventListener("click", () => {
    const libro = validarFormulario();
    if (libro === null) {
        errorForm.textContent = "Datos inválidos";
        return;
    }
    errorForm.textContent = "";
    agregarLibro(libro);
    inputTitulo.value = "";
    inputAutor.value = "";
    inputPrecio.value = "";
    inputGenero.value = "";
    inputDisponible.checked = false;
});
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
