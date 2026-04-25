"use strict";
const input = document.querySelector("#inputAltura");
const boton = document.querySelector("#btnGenerar");
const resultado = document.querySelector("#resultado");
const error = document.querySelector("#error");
function generarAsteriscos(altura) {
    let arbol = "";
    for (let i = 1; i <= altura; i++) {
        arbol += "*".repeat(i) + "\n";
    }
    return arbol;
}
boton.addEventListener("click", () => {
    const altura = parseInt(input.value);
    resultado.textContent = "";
    error.textContent = "";
    if (input.value === "" || isNaN(altura) || altura < 1) {
        error.textContent = "Ingrese un número válido";
        return;
    }
    resultado.textContent = generarAsteriscos(altura);
});
