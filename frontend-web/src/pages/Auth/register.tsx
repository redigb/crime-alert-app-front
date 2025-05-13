import { useState, useEffect } from "react";
import { registerUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useNotification } from "../../components/Dialog/GlobalDialog";

const Register = () => {

  const navigate = useNavigate();
  const { showNotification } = useNotification();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidTelefono = (telefono: string) =>
    /^\+51\d{9}$/.test(telefono);

  const validateForm = () => {
    if (!formData.name.trim()) {
      showNotification({
        type: "error",
        title: "Nombre inválido",
        message: "El nombre es obligatorio.",
      });
      return false;
    }

    if (!isValidEmail(formData.email)) {
      showNotification({
        type: "error",
        title: "Correo inválido",
        message: "El correo debe tener un formato válido.",
      });
      return false;
    }

    if (!isValidTelefono(formData.telefono)) {
      showNotification({
        type: "error",
        title: "Teléfono inválido",
        message: "El teléfono debe empezar con +51 y tener 9 dígitos. Ej: +51987654321",
      });
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      showNotification({
        type: "error",
        title: "Contraseña inválida",
        message: "La contraseña debe tener al menos 6 caracteres.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await registerUser(formData);
      showNotification({
        type: "success",
        title: "Registro exitoso",
        message: "Tu cuenta ha sido creada correctamente.",
      });
      setTimeout(() => navigate("/login"), 1500);
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Ocurrió un error inesperado.";
      showNotification({
        type: "error",
        title: "Error al registrar",
        message: msg,
      });
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] flex items-center justify-center px-4">
      <div className="relative bg-[#141421] rounded-3xl p-1 overflow-hidden shadow-2xl max-w-md w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#715DF2] via-[#5a49c7] to-[#715DF2] animate-gradient-slow rounded-3xl opacity-60 blur-2xl"></div>

        <form onSubmit={handleSubmit} className="relative z-10 w-full bg-[#141421] rounded-3xl p-8 space-y-6 backdrop-blur-md">
          <h2 className="text-4xl font-bold text-white text-center mb-2">Crear Cuenta</h2>
          <p className="text-[#A0A0A0] text-center text-sm mb-6">Únete a AlertaSegura y mantente protegido junto a tu comunidad.</p>

          {/* NOMBRE */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-[#A0A0A0]">Nombre Completo</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="text"
                id="name"
                placeholder="Juan Pérez"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-[#A0A0A0]">Correo Electrónico</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* TELÉFONO */}
          <div className="flex flex-col gap-2">
            <label htmlFor="telefono" className="text-sm text-[#A0A0A0]">Teléfono</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="tel"
                id="telefono"
                placeholder="987654321"
                value={formData.telefono}
                onChange={handleChange}
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* CONTRASEÑA */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-[#A0A0A0]">Contraseña</label>
            <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
              <input
                type="password"
                id="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                required
              />
            </div>
          </div>

          {/* BOTÓN SUBMIT */}
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#715DF2] to-[#5a49c7] hover:brightness-110 text-white font-bold rounded-full transition duration-300">
            Crear Cuenta
          </button>

          <p className="text-center text-[#A0A0A0] text-sm mt-4">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-[#715DF2] font-semibold hover:underline">
              Iniciar sesión
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}



export default Register;
