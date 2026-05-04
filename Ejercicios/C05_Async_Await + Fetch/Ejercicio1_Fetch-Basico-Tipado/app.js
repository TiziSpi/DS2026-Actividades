"use strict";
async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respuesta.ok) {
        throw new Error("Error en la petición");
    }
    const datos = await respuesta.json();
    return datos;
}
async function main() {
    try {
        const usuarios = await obtenerUsuarios();
        for (const usuario of usuarios) {
            console.log(`Nombre: ${usuario.name} | Email: ${usuario.email}`);
        }
    }
    catch (error) {
        console.error("Ocurrió un error:", error);
    }
}
main();
