
import { useState } from "react";

const ReportCrimen = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] px-6 py-10">

      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">🚨 Publicar Nuevo Reporte</h1>
        <p className="text-[#A0A0B0] mt-2 text-sm">
          Completa la información y visualiza cómo se verá tu publicación.
        </p>
      </div>

      {/* Layout de dos columnas */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-1/2 bg-[#1E1E21] rounded-2xl p-8 shadow-2xl space-y-6"
        >
          {/* Tipo de Incidente */}
          <div className="flex flex-col gap-2">
            <label htmlFor="tipo" className="text-sm text-[#A0A0B0]">Tipo de incidente</label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="bg-[#141421] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#715DF2] focus:outline-none"
              required
            >
              <option value="">Seleccionar...</option>
              <option value="Robo">Robo</option>
              <option value="Acoso">Acoso</option>
              <option value="Vandalismo">Vandalismo</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-2">
            <label htmlFor="descripcion" className="text-sm text-[#A0A0B0]">Descripción</label>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows={4}
              placeholder="Describe brevemente lo sucedido..."
              className="bg-[#141421] text-white px-4 py-3 rounded-lg resize-none focus:ring-2 focus:ring-[#715DF2] focus:outline-none"
              required
            />
          </div>

          {/* Ubicación */}
          <div className="flex flex-col gap-2">
            <label htmlFor="ubicacion" className="text-sm text-[#A0A0B0]">Ubicación</label>
            <input
              type="text"
              id="ubicacion"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              placeholder="Ej: Av. Grau 123"
              className="bg-[#141421] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#715DF2] focus:outline-none"
              required
            />
          </div>

          {/* Subir Archivo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="archivo" className="text-sm text-[#A0A0B0]">Subir imagen/video (opcional)</label>
            <input
              type="file"
              id="archivo"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="bg-[#141421] text-[#A0A0B0] px-4 py-3 rounded-lg file:bg-[#715DF2] file:text-white file:rounded-md file:px-4 file:py-2 file:border-none focus:outline-none focus:ring-2 focus:ring-[#715DF2]"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#715DF2] to-[#5a49c7] hover:brightness-110 text-white font-bold rounded-full transition duration-300"
          >
            🚨 Publicar Reporte
          </button>
        </form>

        {/* Vista previa de la publicación */}
        <div className="lg:w-1/2 bg-[#1E1E21] rounded-2xl p-6 shadow-2xl space-y-6">
          <h2 className="text-xl font-bold text-white mb-4">👀 Vista Previa</h2>
          
          <div className="bg-[#141421] rounded-2xl p-6 space-y-4">
            {/* Imagen o video */}
            {filePreview ? (
              <img src={filePreview} alt="Evidencia" className="w-full h-48 object-cover rounded-lg" />
            ) : (
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center rounded-lg text-[#A0A0B0]">
                Sin archivo adjunto
              </div>
            )}

            {/* Datos del reporte */}
            <h3 className="text-lg font-bold text-white">{tipo || "Tipo de Incidente"}</h3>
            <p className="text-sm text-[#A0A0B0]">{ubicacion || "Ubicación aproximada"}</p>
            <p className="text-sm text-white">{descripcion || "Descripción breve del incidente..."}</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ReportCrimen;