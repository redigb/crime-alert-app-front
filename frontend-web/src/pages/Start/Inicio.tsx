


const Inicio = () => {
    return (
        <main className="flex-1 flex p-6 gap-6 overflow-hidden bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13]">

        {/* FEED de Reportes */}
        <section className="flex-1 space-y-6 overflow-y-auto pr-4">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-[#1E1E21] rounded-2xl p-6 shadow-2xl hover:shadow-[#715DF2]/20 transition duration-300">
      
              {/* Título y fecha */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#FF4C4C]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 14h2v2h-2v-2zm0-8h2v6h-2V6z" />
                  </svg>
                  Robo en el centro
                </h2>
                <span className="text-xs text-[#A0A0B0]">12/04/2025</span>
              </div>
      
              {/* Información del reporte */}
              <div className="space-y-2 mb-4 text-[#A0A0B0] text-sm">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#5DA6F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  Av. Grau
                </p>
                <p className="flex items-center gap-2 text-[#5DA6F2] font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                  </svg>
                  Categoría: Robo
                </p>
              </div>
      
              {/* Imagen o video */}
              <div className="w-full h-60 bg-gray-800 rounded-lg overflow-hidden">
                {/* Aquí cambia dinámicamente según tipo de archivo */}
                <img src="/images/reporte.jpg" alt="Reporte" className="object-cover w-full h-full" />
                {/* O para video sería: 
                <video controls src="/videos/reporte.mp4" className="object-cover w-full h-full" /> 
                */}
              </div>
      
              {/* Acciones */}
              <div className="flex mt-4 gap-6 text-sm font-semibold">
                <button className="text-[#5DA6F2] hover:underline flex items-center gap-1">
                  💬 Comentar
                </button>
                <button className="text-[#30C96F] hover:underline flex items-center gap-1">
                  📥 Guardar
                </button>
                <button className="text-[#FF4C4C] hover:underline flex items-center gap-1">
                  🚫 Denunciar
                </button>
              </div>
      
            </div>
          ))}
        </section>
      
        {/* WIDGETS laterales */}
        <aside className="w-80 flex flex-col space-y-6">
      
          {/* Estadísticas */}
          <div className="bg-[#1E1E21] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4">📊 Estadísticas de Crimen</h3>
            <p className="text-sm text-[#A0A0B0]">+12 incidentes esta semana</p>
          </div>
      
          {/* Botón de Alerta */}
          <button className="w-full py-4 bg-gradient-to-r from-[#FF4C4C] to-[#f87171] hover:brightness-110 text-white font-bold rounded-full shadow-lg transition duration-300">
            🚨 Alerta Rápida
          </button>
      
          {/* Mapa Miniatura */}
          <div className="bg-[#1E1E21] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-3">🗺️ Mapa de Incidentes</h3>
            <div className="w-full h-32 bg-gradient-to-br from-[#2a2a2e] to-[#1f1f22] rounded-lg flex items-center justify-center text-[#A0A0B0] text-xs">
              [Mini mapa]
            </div>
          </div>
      
          {/* Usuarios Activos */}
          <div className="bg-[#1E1E21] rounded-2xl p-6 shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-3">👥 Usuarios activos</h3>
            <ul className="space-y-2 text-sm text-[#A0A0B0]">
              <li>👤 @carlos_vega</li>
              <li>👤 @maria.lopez</li>
              <li>👤 @user_alerta123</li>
            </ul>
          </div>
      
        </aside>
      </main>
    );
}



export default Inicio;
