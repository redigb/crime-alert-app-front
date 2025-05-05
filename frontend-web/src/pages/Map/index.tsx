

const Map = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13]">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-5 border-b border-[#1f1f22] bg-[#141421] shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
          🛡️ Mapa de Incidentes
        </h1>
        <p className="text-sm text-[#A0A0B0] mt-1">
          Visualiza en tiempo real los reportes de tu comunidad
        </p>
      </div>
      <button className="bg-[#715DF2] hover:bg-[#5a49c7] text-white font-semibold px-6 py-2 rounded-full shadow-lg transition">
        Filtrar Reportes
      </button>
    </div>

    {/* Contenido Principal */}
    <div className="flex flex-1 overflow-hidden relative">

      {/* Mapa */}
      <div className="flex-1 relative">
        <div className="w-full h-full bg-[#1f1f22] relative">
          {/* Mapa real aquí (puede ser react-leaflet, etc.) */}
          <p className="text-center text-[#A0A0B0] mt-20">[ Aquí se cargará el Mapa dinámico ]</p>
        </div>

        {/* Botones flotantes en mapa */}
        <div className="absolute top-6 right-6 flex flex-col space-y-4">
          <button className="bg-[#30C96F] p-4 rounded-full shadow-lg hover:scale-110 transition" title="Ubicación Actual">
            📍
          </button>
          <button className="bg-[#5DA6F2] p-4 rounded-full shadow-lg hover:scale-110 transition" title="Cambiar Vista">
            🗺️
          </button>
          <button className="bg-[#FF4C4C] p-4 rounded-full shadow-lg hover:scale-110 transition" title="Reportar">
            ⚠️
          </button>
        </div>
      </div>

      {/* Panel Lateral */}
      <aside className="w-[380px] p-6 bg-[#1E1E21] border-l border-[#1f1f22] overflow-y-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Reportes Recientes</h2>
          
          {/* Lista de Reportes */}
          {[1, 2, 3, 4].map((_, idx) => (
            <div key={idx} className="bg-[#141421] p-4 rounded-xl hover:bg-[#2a2a2e] transition">
              <h3 className="text-white text-sm font-bold mb-1">Robo registrado</h3>
              <p className="text-xs text-[#A0A0B0]">Av. Grau • hace 10 min</p>
              <button className="text-[#5DA6F2] text-xs mt-2 hover:underline">Ver detalles →</button>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="bg-[#141421] p-4 rounded-xl mt-8">
          <h3 className="text-white text-sm font-bold mb-2">Estadísticas Hoy 📈</h3>
          <p className="text-xs text-[#A0A0B0]">- 8 reportes de robos</p>
          <p className="text-xs text-[#A0A0B0]">- 3 alertas de acoso</p>
        </div>

      </aside>

    </div>

  </div>
  )
}

export default Map