import { z } from "zod";

export const libroSchema = z.object({
  title: z.string().min(1, "El título es obligatorio"),
  author: z.string().min(1, "El autor es obligatorio"),
  price: z.number().positive("El precio debe ser mayor a 0"),
  cover: z.string().url("La imagen debe ser una URL válida"),
});

export type LibroFormData = z.infer<typeof libroSchema>;