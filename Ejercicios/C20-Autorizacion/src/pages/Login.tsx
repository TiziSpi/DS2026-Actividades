import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import {
  loginSchema,
  type LoginFormData,
} from "../schemas/LoginSchema";
import { useAuth } from "../context/AuthContext";

type FormErrors = Partial<Record<keyof LoginFormData, string>>;

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    const resultado = loginSchema.safeParse(form);

    if (!resultado.success) {
      const nuevosErrores: FormErrors = {};

      resultado.error.issues.forEach((issue) => {
        const campo = issue.path[0] as keyof LoginFormData;
        nuevosErrores[campo] = issue.message;
      });

      setErrors(nuevosErrores);
      return;
    }

    setErrors({});

    try {
      await login(resultado.data);
      navigate("/catalogo");
    } catch (error) {
      setErrorApi(
        error instanceof Error
          ? error.message
          : "No se pudo iniciar sesión"
      );
    }
  };

  return (
    <section className="alta-libro-page">
      <div className="form-card">
        <h1>Iniciar sesión</h1>

        {errorApi && <Alert variant="danger">{errorApi}</Alert>}

        <form className="alta-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@libreria.test"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
            {errors.password && <span>{errors.password}</span>}
          </div>

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </section>
  );
}

export default Login;