const boton = document.getElementById("btnBuscar");

if (boton) {
  const input = document.getElementById("inputBusqueda");
  const resultados = document.getElementById("resultados");
  const mensajeError = document.getElementById("mensajeError");

  boton.addEventListener("click", buscar);

  async function buscar() {
    const texto = input.value.trim();

    if (texto === "") {
      mensajeError.style.display = "block";
      resultados.innerHTML = "";
      return;
    }

    mensajeError.style.display = "none";
    resultados.innerHTML = "<p>Cargando...</p>";

    try {
      const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(texto)}`;
      const respuesta = await fetch(url);

      if (!respuesta.ok) throw new Error("Error en la petición");

      const datos = await respuesta.json();
      const libros = datos.docs.slice(0, 10);

      resultados.innerHTML = "";

      if (libros.length === 0) {
        resultados.innerHTML = "<p>No se encontraron resultados.</p>";
        return;
      }

      let html = '<div class="row">';

      for (const libro of libros) {
        const titulo = libro.title || "Sin título";
        const autor = libro.author_name ? libro.author_name[0] : "Autor desconocido";
        const coverId = libro.cover_i;
        const imagen = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : "https://via.placeholder.com/300x200";

        html += `
          <div class="col-md-4 mb-4">
            <div class="card h-100">
              <img src="${imagen}" class="card-img-top" alt="${titulo}">
              <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${autor}</p>
                <a href="libro.html" class="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
        `;
      }

      html += '</div>';
      resultados.innerHTML = html;

    } catch (error) {
      resultados.innerHTML = `<p class="text-danger">Error al buscar libros.</p>`;
    }
  }
}