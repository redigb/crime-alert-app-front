
const Register = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí manejar el registro
      };
    
      return (
        <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] flex items-center justify-center px-4">
    
          {/* Contenedor con aura animada */}
          <div className="relative bg-[#141421] rounded-3xl p-1 overflow-hidden shadow-2xl max-w-md w-full">
    
            {/* Aura animada */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#715DF2] via-[#5a49c7] to-[#715DF2] animate-gradient-slow rounded-3xl opacity-60 blur-2xl"></div>
    
            {/* Formulario real */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 w-full bg-[#141421] rounded-3xl p-8 space-y-6 backdrop-blur-md"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-2">
                Crear Cuenta
              </h2>
              <p className="text-[#A0A0A0] text-center text-sm mb-6">
                Únete a AlertaSegura y mantente protegido junto a tu comunidad.
              </p>
    
              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-[#A0A0A0]">Nombre Completo</label>
                <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
                  <svg className="w-5 h-5 text-[#715DF2] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5.121 17.804A13.937 13.937 0 0112 15c2.182 0 4.22.52 6.038 1.445M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                  <input
                    type="text"
                    id="name"
                    placeholder="Juan Pérez"
                    className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                    required
                  />
                </div>
              </div>
    
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-[#A0A0A0]">Correo Electrónico</label>
                <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
                  <svg className="w-5 h-5 text-[#715DF2] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@gmail.com"
                    className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                    required
                  />
                </div>
              </div>
    
              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm text-[#A0A0A0]">Teléfono</label>
                <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
                  <svg className="w-5 h-5 text-[#715DF2] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h2l3 7-1.5 1.5a11 11 0 006.5 6.5L15 15l7 3v2a2 2 0 01-2 2h-1a19 19 0 01-19-19V5z" />
                  </svg>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="987654321"
                    className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                    required
                  />
                </div>
              </div>
    
              {/* Password */}
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm text-[#A0A0A0]">Contraseña</label>
                <div className="flex items-center bg-[#1a1a1d] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#715DF2] transition">
                  <svg className="w-5 h-5 text-[#715DF2] mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 17a1 1 0 110 2 1 1 0 010-2zm0-10a5 5 0 00-5 5v3h10v-3a5 5 0 00-5-5z" />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="flex-1 bg-transparent text-white placeholder-[#666] focus:outline-none"
                    required
                  />
                </div>
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#715DF2] to-[#5a49c7] hover:brightness-110 text-white font-bold rounded-full transition duration-300"
              >
                Crear Cuenta
              </button>
    
              {/* Link to Login */}
              <p className="text-center text-[#A0A0A0] text-sm mt-4">
                ¿Ya tienes cuenta?{" "}
                <a
                  href="/login"
                  className="text-[#715DF2] font-semibold hover:underline"
                >
                  Iniciar sesión
                </a>
              </p>
            </form>
          </div>
        </div>
      );
}



export default Register;
