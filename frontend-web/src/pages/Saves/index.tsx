import { useState } from "react";



interface ReporteGuardado {
  id: number;
  titulo: string;
  ubicacion: string;
  fecha: string;
  tipo: "Robo" | "Acoso" | "Vandalismo" | "Otro";
  imagen?: string;
}

const Saves = () => {
  const [reportesGuardados, setReportesGuardados] = useState<ReporteGuardado[]>([
    {
      id: 1,
      titulo: "Robo en el mercado central",
      ubicacion: "Av. Grau",
      fecha: "04/05/2025",
      tipo: "Robo",
      imagen: "/images/reporte.jpg",
    },
    {
      id: 2,
      titulo: "Acoso en parque Kennedy",
      ubicacion: "Parque Kennedy",
      fecha: "03/05/2025",
      tipo: "Acoso",
      imagen: "/images/reporte2.jpg",
    },
    {
      id: 3,
      titulo: "Vandalismo en colegio",
      ubicacion: "Av. Arequipa",
      fecha: "02/05/2025",
      tipo: "Vandalismo",
      imagen: "/images/reporte3.jpg",
    },
  ]);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos");

  const eliminarReporte = (id: number) => {
    if (window.confirm("¿Seguro que deseas eliminar este reporte de guardados?")) {
      setReportesGuardados(prev => prev.filter(r => r.id !== id));
    }
  };

  const reportesFiltrados = categoriaSeleccionada === "Todos"
    ? reportesGuardados
    : reportesGuardados.filter(r => r.tipo === categoriaSeleccionada);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4 md:mb-0">
          💾 Tus Reportes Guardados
        </h1>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap gap-4">
          {["Todos", "Robo", "Acoso", "Vandalismo", "Otro"].map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSeleccionada(categoria)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                categoriaSeleccionada === categoria
                  ? "bg-[#715DF2] text-white"
                  : "bg-[#1E1E21] text-[#A0A0B0] hover:bg-[#2a2a2e]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido */}
      {reportesFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fadeIn">
          {reportesFiltrados.map((reporte) => (
            <div
              key={reporte.id}
              className="bg-[#1E1E21] rounded-2xl p-6 shadow-2xl hover:shadow-[#715DF2]/30 transition duration-300 flex flex-col"
            >
              {/* Imagen */}
              {reporte.imagen ? (
                <img
                  src={reporte.imagen}
                  alt="Reporte"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded-lg text-[#A0A0B0]">
                  Sin imagen
                </div>
              )}

              {/* Información */}
              <h2 className="text-lg font-bold text-white mb-2">{reporte.titulo}</h2>
              <p className="text-sm text-[#5DA6F2] font-medium mb-1">📍 {reporte.ubicacion}</p>
              <p className="text-sm text-[#A0A0B0] mb-1">🗓️ {reporte.fecha}</p>
              <p className="text-sm text-[#30C96F] mb-4">{reporte.tipo}</p>

              {/* Acciones */}
              <div className="mt-auto flex gap-4">
                <button
                  className="flex-1 py-2 bg-[#715DF2] hover:bg-[#5a49c7] text-white text-sm font-semibold rounded-full transition"
                >
                  Ver Detalles
                </button>
                <button
                  onClick={() => eliminarReporte(reporte.id)}
                  className="flex-1 py-2 bg-[#FF4C4C] hover:bg-red-600 text-white text-sm font-semibold rounded-full transition"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-[#A0A0B0] text-lg mt-20">
          No hay reportes guardados en esta categoría.
        </div>
      )}
    </div>
  );
};
 
export default Saves;