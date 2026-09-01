import { useEffect, useState } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar datos");
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
        setError("No se pudieron cargar los libros");
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;