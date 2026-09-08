import { useEffect, useState } from "react";
import { apiFetch } from "../services/api";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargar = async () => {
      try {
        setLoading(true);
        setError("");

        const datos = await apiFetch<T>(url);
        setData(datos);
      } catch (error) {
        console.log(error);

        setError(
          error instanceof Error
            ? error.message
            : "Error desconocido"
        );
      } finally {
        setLoading(false);
      }
    };

    cargar();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;