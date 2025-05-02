

const HomePublic = () => {
    return (
        <section className="min-h-screen bg-[#0E0E10] text-white flex flex-col justify-between">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-6 py-4 border-b border-[#1f1f22]">
            <h1 className="text-xl font-bold text-[#715DF2]">AlertaSegura</h1>
            <div className="space-x-4">
              <a href="#funcionalidades" className="text-[#A0A0A0] hover:text-white transition">Características</a>
              <a href="#contacto" className="text-[#A0A0A0] hover:text-white transition">Contacto</a>
              <a href="/login" className="bg-[#715DF2] px-4 py-1 rounded hover:bg-[#5a49c7] transition">Iniciar sesión</a>
            </div>
          </nav>
    
          {/* Hero principal */}
          <main className="flex flex-col items-center justify-center text-center px-6 py-20">
            <h2 className="text-4xl font-bold mb-4">
              Seguridad Ciudadana en tu Mano
            </h2>
            <p className="max-w-xl text-[#A0A0A0] mb-6">
              AlertaSegura te permite reportar incidentes en tiempo real, recibir notificaciones de tu comunidad y mejorar la respuesta ante emergencias.
            </p>
            <div className="space-x-4">
              <a
                href="/registro"
                className="bg-[#715DF2] px-6 py-2 rounded font-semibold hover:bg-[#5a49c7] transition"
              >
                Regístrate Gratis
              </a>
              <a
                href="/login"
                className="border border-[#715DF2] text-[#715DF2] px-6 py-2 rounded font-semibold hover:bg-[#1f1f22] transition"
              >
                Ya tengo cuenta
              </a>
            </div>
          </main>
    
          {/* Footer */}
          <footer className="text-center py-4 border-t border-[#1f1f22] text-[#A0A0A0] text-sm">
            © {new Date().getFullYear()} AlertaSegura. Todos los derechos reservados.
          </footer>
        </section>
      );
}



export default HomePublic;
