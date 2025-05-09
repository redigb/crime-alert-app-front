import { useState, useEffect } from "react";
import { loginRequest } from "../../services/auth.service";
import { profileRequest } from "../../services/users.service";
import { useAuthStore } from "../../store/auth";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const token = useAuthStore((state) => state.token);
  const profile = useAuthStore((state) => state.profile);
  const logout = useAuthStore((state) => state.logout);
useEffect(() => {
  const fetchProfile = async () => {
    if (token) {
      try {
        const resProfile = await profileRequest(profile.name);
        if (resProfile.data.status === 200) {
          setProfile(resProfile.data.data);
          navigate("/inicio");
          return;
        }
      } catch (error) {
        console.error("Error al cargar perfil", error);
      }
    }
    logout();
  };

  fetchProfile();
}, []);


  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    // Obtener datos del formulario
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    // Guardado datos del usuario
    try {
      const restLogin = await loginRequest(email, password);
      setToken(restLogin.data.token);

      const resProfile = await profileRequest(restLogin.data.name);
      setProfile(resProfile.data.data);

      navigate("/inicio");
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMsg("Credenciales incorrectas. Verifica tu correo y contraseña.");
        } else if (error.response.status === 422) {
          setErrorMsg("Datos inválidos. Completa correctamente el formulario.");
        } else {
          setErrorMsg("Ocurrió un error inesperado.");
        }
      } else {
        setErrorMsg("No se pudo conectar al servidor.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] flex items-center justify-center px-4">
      <div className="relative bg-[#141421] rounded-3xl p-1 overflow-hidden shadow-2xl max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#715DF2] via-[#5a49c7] to-[#715DF2] animate-gradient-slow rounded-3xl opacity-60 blur-2xl"></div>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full bg-[#141421] rounded-3xl p-8 space-y-6 backdrop-blur-md"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-2">
            Iniciar Sesión
          </h2>
          <p className="text-[#A0A0A0] text-center text-sm mb-6">
            Ingresa a tu cuenta para protegerte mejor.
          </p>

          {/* Mostrar error si existe */}
          {errorMsg && (
            <div className="text-red-500 text-center text-sm mb-4">
              {errorMsg}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-[#A0A0A0]">Correo Electrónico</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-[#A0A0A0]">Contraseña</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="password"
                id="password"
                placeholder="********"
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="/forgot-password" className="text-[#715DF2] text-sm hover:underline transition">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${loading
                ? "bg-[#5a49c7] cursor-not-allowed"
                : "bg-gradient-to-r from-[#715DF2] to-[#5a49c7] hover:brightness-110"
              } text-white font-bold rounded-full transition duration-300`}
          >
            {loading ? "Iniciando..." : "Iniciar Sesión"}
          </button>

          {/* Register Link */}
          <p className="text-center text-[#A0A0A0] text-sm mt-4">
            ¿No tienes cuenta?{" "}
            <a href="/registro" className="text-[#715DF2] font-semibold hover:underline">
              Crear una cuenta
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}



export default Login;
