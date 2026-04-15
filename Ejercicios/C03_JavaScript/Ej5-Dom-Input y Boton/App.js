const input = document.querySelector("#inputAltura");
const boton = document.querySelector("#btnGenerar");
const resultado = document.querySelector("#resultado");
const error = document.querySelector("#error");

boton.addEventListener("click", () => {

  const altura = input.value;

  resultado.textContent = "";
  error.textContent = "";

  if (altura === "" || altura < 1) {
    error.textContent = "Ingrese un número válido";
    return;
  }

  let arbol = "";

  for (let i = 1; i <= altura; i++) {
    arbol += "*".repeat(i) + "\n";
  }

  resultado.textContent = arbol;
});