import { z } from "zod";

export const libroSchema = z.object({
  titulo: z
    .string()
    .trim()
    .min(1, "El título es obligatorio")
    .max(200, "El título no puede superar los 200 caracteres"),

  precio: z
    .number()
    .int("El precio debe ser un número entero")
    .positive("El precio debe ser mayor a 0"),

  imagen: z
    .string()
    .min(1, "La imagen es obligatoria"),

  autorId: z
    .number()
    .int()
    .positive("El autor es obligatorio"),
});

export type LibroFormData = z.infer<typeof libroSchema>;