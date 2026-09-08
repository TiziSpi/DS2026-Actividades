import express from "express";
import cors from "cors";
import libroRoutes from "./routes/libro.routes";
import autorRoutes from "./routes/autor.routes";
import authRoutes from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: [process.env.FRONTEND_URL ?? "http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/libros", libroRoutes);
app.use("/api/autores", autorRoutes);
app.use("/api/auth", authRoutes);

app.use((_req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
  });
});

// Siempre al final, después de las rutas
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});