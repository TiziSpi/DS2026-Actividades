const inputProd = document.querySelector("#producto");
const btnAgregar = document.querySelector("#btnAgregar");
const lista = document.querySelector("#lista");
const contador = document.querySelector("#contador");

const actualizarContador = () => {
  contador.textContent = $`{lista.children.length} productos en la lista`;
};

btnAgregar.addEventListener("click", () => {

  if (inputProd.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = inputProd.value;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  btnEliminar.addEventListener("click", () => {
    li.remove();
    actualizarContador();
  });

  li.appendChild(btnEliminar);
  lista.appendChild(li);

  inputProd.value = "";

  actualizarContador();
});