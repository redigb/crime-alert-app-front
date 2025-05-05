

const HomePublic = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B0B13] to-[#141421] text-white flex flex-col justify-between">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f22] shadow-md">
        <h1 className="text-2xl font-extrabold text-[#715DF2] tracking-wide">
          AlertaSegura
        </h1>
        <div className="space-x-6 text-sm font-semibold">
          <a href="#funcionalidades" className="text-[#A0A0A0] hover:text-white transition duration-200">Características</a>
          <a href="#contacto" className="text-[#A0A0A0] hover:text-white transition duration-200">Contacto</a>
          <a href="/login" className="bg-[#715DF2] px-4 py-2 rounded-full hover:bg-[#5a49c7] transition duration-200">
            Iniciar sesión
          </a>
        </div>
      </nav>

      {/* Hero principal */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#715DF2] to-[#5a49c7] bg-clip-text text-transparent">
          Seguridad Ciudadana <br /> en tu Mano
        </h2>
        <p className="max-w-2xl text-[#A0A0A0] text-lg">
          Reporta incidentes en tiempo real, recibe notificaciones inmediatas de tu comunidad y contribuye a una ciudad más segura.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-6">
          <a
            href="/registro"
            className="bg-[#715DF2] px-8 py-3 rounded-full font-semibold hover:bg-[#5a49c7] transition duration-200"
          >
            Regístrate Gratis
          </a>
          <a
            href="/login"
            className="border border-[#715DF2] text-[#715DF2] px-8 py-3 rounded-full font-semibold hover:bg-[#1f1f22] transition duration-200"
          >
            Ya tengo cuenta
          </a>
        </div>
      </main>

      <section className="flex flex-col md:flex-row justify-center items-center text-center gap-6 px-6 py-10">
        <div className="bg-[#141421] rounded-2xl p-6 w-72 hover:scale-105 transition duration-300 shadow-md">
          <h3 className="text-2xl font-bold text-[#715DF2] mb-2">Reportes en Vivo</h3>
          <p className="text-[#A0A0A0]">Envía alertas de incidentes en segundos directamente desde tu móvil.</p>
        </div>
        <div className="bg-[#141421] rounded-2xl p-6 w-72 hover:scale-105 transition duration-300 shadow-md">
          <h3 className="text-2xl font-bold text-[#715DF2] mb-2">Comunidad Activa</h3>
          <p className="text-[#A0A0A0]">Recibe notificaciones de eventos relevantes cercanos a ti.</p>
        </div>
        <div className="bg-[#141421] rounded-2xl p-6 w-72 hover:scale-105 transition duration-300 shadow-md">
          <h3 className="text-2xl font-bold text-[#715DF2] mb-2">Respaldo de Autoridades</h3>
          <p className="text-[#A0A0A0]">Tus reportes fortalecen la acción de la seguridad ciudadana.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-16 px-6">
        <img src="/ruta/mockup-telefono.png" alt="App AlertaSegura" className="w-72 rounded-2xl shadow-xl" />
        <div className="max-w-md">
          <h3 className="text-3xl font-bold mb-4">Funcionalidades de la App</h3>
          <ul className="list-disc list-inside text-[#A0A0A0] space-y-2">
            <li>Botón de Alerta Rápida</li>
            <li>Mapa interactivo de incidentes</li>
            <li>Historial de reportes</li>
            <li>Notificaciones inmediatas</li>
            <li>Colaboración comunitaria</li>
          </ul>
        </div>
      </section>

      <section className="bg-[#141421] py-10 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Lo que dicen nuestros usuarios</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-[#0B0B13] p-6 rounded-2xl max-w-sm text-center shadow-lg">
            <p className="text-[#A0A0A0] mb-4">"Con AlertaSegura me siento mucho más informado sobre lo que pasa en mi barrio."</p>
            <span className="font-bold text-[#715DF2]">- Laura G.</span>
          </div>
          <div className="bg-[#0B0B13] p-6 rounded-2xl max-w-sm text-center shadow-lg">
            <p className="text-[#A0A0A0] mb-4">"Gracias a las alertas pude actuar a tiempo frente a un incidente."</p>
            <span className="font-bold text-[#715DF2]">- Carlos M.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-[#1f1f22] text-[#A0A0A0] text-sm">
        © {new Date().getFullYear()} AlertaSegura. Todos los derechos reservados.
      </footer>

    </section>
  );
}



export default HomePublic;
