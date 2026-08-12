import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { libroSchema, type LibroFormData } from "../schemas/LibroSchemas";

type AltaLibroProps = {
  onAgregarLibro: (libro: LibroFormData) => void;
};

type FormErrors = Partial<Record<keyof LibroFormData, string>>;

function AltaLibro({ onAgregarLibro }: AltaLibroProps) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    cover: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const resultado = libroSchema.safeParse({
      title: form.title,
      author: form.author,
      price: Number(form.price),
      cover: form.cover,
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

    onAgregarLibro(resultado.data);
    navigate("/catalogo");
  };

  return (
    <section className="alta-libro-page">
      <div className="form-card">
        <h1>Alta de libro</h1>
        <p>Completá los datos para agregar un nuevo libro al catálogo.</p>

        <form className="alta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej: Rayuela"
            />
            {errors.title && <span>{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Autor</label>
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder="Ej: Julio Cortázar"
            />
            {errors.author && <span>{errors.author}</span>}
          </div>

          <div className="form-group">
            <label>Precio</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Ej: 15000"
            />
            {errors.price && <span>{errors.price}</span>}
          </div>

          <div className="form-group">
            <label>URL de portada</label>
            <input
              name="cover"
              value={form.cover}
              onChange={handleChange}
              placeholder="https://..."
            />
            {errors.cover && <span>{errors.cover}</span>}
          </div>

          <button type="submit">Guardar libro</button>
        </form>
      </div>
    </section>
  );
}

export default AltaLibro;