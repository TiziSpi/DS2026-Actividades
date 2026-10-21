import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { libroSchema, type LibroFormData } from "../schemas/LibroSchemas";
import { apiFetch } from "../services/api";
import type { Libro } from "../types/Libro";

type FormErrors = Partial<Record<keyof LibroFormData, string>>;

function AltaLibro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: "",
    precio: "",
    imagen: "",
    autorId: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [errorApi, setErrorApi] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorApi("");

    const resultado = libroSchema.safeParse({
      titulo: form.titulo,
      precio: Number(form.precio),
      imagen: form.imagen,
      autorId: Number(form.autorId),
    });

    if (!resultado.success) {
      const nuevosErrores: FormErrors = {};

      resultado.error.issues.forEach((issue) => {
        const campo = issue.path[0] as keyof LibroFormData;
        nuevosErrores[campo] = issue.message;
      });

      setErrors(nuevosErrores);
      return;
    }

    setErrors({});

    try {
      await apiFetch<Libro>("/libros", {
        method: "POST",
        body: JSON.stringify(resultado.data),
      });

      navigate("/catalogo");
    } catch (error) {
      setErrorApi(
        error instanceof Error
          ? error.message
          : "No se pudo crear el libro"
      );
    }
  };

  return (
    <section className="alta-libro-page">
      <div className="form-card">
        <h1>Alta de libro</h1>
        <p>Completá los datos para agregar un nuevo libro al catálogo.</p>

        {errorApi && <Alert variant="danger">{errorApi}</Alert>}

        <form className="alta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título</label>
            <input
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              placeholder="Ej: Rayuela"
            />
            {errors.titulo && <span>{errors.titulo}</span>}
          </div>

          <div className="form-group">
            <label>Precio</label>
            <input
              name="precio"
              type="number"
              value={form.precio}
              onChange={handleChange}
              placeholder="Ej: 15000"
            />
            {errors.precio && <span>{errors.precio}</span>}
          </div>

          <div className="form-group">
            <label>URL de portada</label>
            <input
              name="imagen"
              value={form.imagen}
              onChange={handleChange}
              placeholder="https://..."
            />
            {errors.imagen && <span>{errors.imagen}</span>}
          </div>

          <div className="form-group">
            <label>ID del autor</label>
            <input
              name="autorId"
              type="number"
              value={form.autorId}
              onChange={handleChange}
              placeholder="Ej: 1"
            />
            {errors.autorId && <span>{errors.autorId}</span>}
          </div>

          <button type="submit">Guardar libro</button>
        </form>
      </div>
    </section>
  );
}

export default AltaLibro;