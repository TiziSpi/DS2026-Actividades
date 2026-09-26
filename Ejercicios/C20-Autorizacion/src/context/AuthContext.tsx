import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { apiFetch } from "../services/api";
import {
  borrarToken,
  guardarToken,
  obtenerToken,
} from "../services/sesion";

export type Rol = "ADMIN" | "CLIENTE";

type Usuario = {
  id: number;
  email: string;
  nombre: string;
  rol: Rol;
  creadoEn: string;
};

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

type AuthContextType = {
  usuario: Usuario | null;
  cargando: boolean;
  estaAutenticado: boolean;
  login: (datos: LoginData) => Promise<void>;
  logout: () => void;
  tieneRol: (rol: Rol) => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  const cargarUsuario = async () => {
    const token = obtenerToken();

    if (!token) {
      setUsuario(null);
      setCargando(false);
      return;
    }

    try {
      const usuarioActual = await apiFetch<Usuario>("/auth/yo");
      setUsuario(usuarioActual);
    } catch {
      borrarToken();
      setUsuario(null);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarUsuario();
  }, []);

  useEffect(() => {
    const manejarUnauthorized = () => {
      borrarToken();
      setUsuario(null);
    };

    window.addEventListener("auth:unauthorized", manejarUnauthorized);

    return () => {
      window.removeEventListener(
        "auth:unauthorized",
        manejarUnauthorized
      );
    };
  }, []);

  const login = async (datos: LoginData) => {
    const sesion = await apiFetch<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(datos),
    });

    guardarToken(sesion.token);

    try {
      const usuarioActual = await apiFetch<Usuario>("/auth/yo");
      setUsuario(usuarioActual);
    } catch (error) {
      borrarToken();
      setUsuario(null);
      throw error;
    }
  };

  const logout = () => {
    borrarToken();
    setUsuario(null);
  };

  const tieneRol = (rol: Rol) => {
    return usuario?.rol === rol;
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        cargando,
        estaAutenticado: usuario !== null,
        login,
        logout,
        tieneRol,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);

  if (!contexto) {
    throw new Error(
      "useAuth debe utilizarse dentro de AuthProvider"
    );
  }

  return contexto;
}