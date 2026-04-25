const input = document.querySelector("#inputAltura") as HTMLInputElement;
const boton = document.querySelector("#btnGenerar") as HTMLButtonElement;
const resultado = document.querySelector("#resultado") as HTMLElement;
const error = document.querySelector("#error") as HTMLElement;
 
function generarAsteriscos(altura: number): string {
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