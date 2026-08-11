import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería" });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});