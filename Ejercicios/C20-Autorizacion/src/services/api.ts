import { obtenerToken } from "./sesion";

const BASE = import.meta.env.VITE_API_URL;

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(
  ruta: string,
  opciones: RequestInit = {}
): Promise<T> {
  const token = obtenerToken();

  const res = await fetch(`${BASE}${ruta}`, {
    ...opciones,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...opciones.headers,
    },
  });

  const cuerpo = await res.json().catch(() => null);

  if (!res.ok) {
    if (res.status === 401 && token) {
      window.dispatchEvent(new Event("auth:unauthorized"));
    }

    throw new ApiError(
      cuerpo?.error ?? `Error ${res.status}`,
      res.status
    );
  }

  return cuerpo as T;
}