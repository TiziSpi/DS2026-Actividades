import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .pipe(z.email("Email inválido"));

export const registroSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  email: emailSchema,

  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
    .regex(/[0-9]/, "La contraseña debe tener al menos un número"),
});

export const loginSchema = z.object({
  email: emailSchema,

  password: z
    .string()
    .min(1, "La contraseña es obligatoria"),
});

export type RegistroInput = z.infer<typeof registroSchema>;
export type LoginInput = z.infer<typeof loginSchema>;