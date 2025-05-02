import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const useLogout = () => {
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setTimeout(() => navigate("/login"), 0);
  };

  return handleLogout;
};

export default useLogout;