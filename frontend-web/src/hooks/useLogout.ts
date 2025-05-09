import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { logoutRequest } from "../services/auth.service";

const useLogout = () => {
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await logoutRequest(); // espera a que el backend cierre sesión

      if (res.data.status === true) {
        logout(); // limpia tu estado local (ej. usuario/contexto/token)
        setTimeout(() => navigate("/login"), 0);
        ; // redirige al login
      } else {
        console.error("Error al cerrar sesión:", res.data.message);
      }
    } catch (error) {
      console.error("Error en el logout:", error);
    }
  };

  return handleLogout;
};

export default useLogout;