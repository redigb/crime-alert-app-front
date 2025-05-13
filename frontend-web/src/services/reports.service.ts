import axios from './config/axios';

export const listReports = async () => {
  try {
    const response = await axios.get("/reports");
    const reportesApi = response.data.data;

    const reportesAdaptados = reportesApi.map((reporte: any) => {
      const [fecha, hora] = reporte.fecha_hora_report.split(" ");

      return {
        id: reporte.id,
        titulo: reporte.titulo,
        descripcion: reporte.descripcion,
        ubicacion: reporte.direccion,
        categoria: reporte.titulo,
        fecha,
        hora,
        usuario: reporte.user?.name || "Anónimo",
        mediaType: reporte.image ? "image" : reporte.video ? "video" : null,
        mediaUrl: reporte.image || reporte.video || null,
        comentarios: reporte.comments_count || 0,
        guardados: 0,
        denuncias: 0,
        likes: reporte.votes_conforme || 0,
        vistas: 0,
        estado: reporte.estado || null,
        latitude: reporte.latitude || 0,
        longitude: reporte.longitude || 0,
      };
    });

    return reportesAdaptados;
  } catch (error) {
    console.error("Error al obtener reportes:", error);
    return [];
  }
};

/*export const listReports = async() => {
  return await axios.get('/reports');
}*/


export const createReport = async (data: FormData) => {
  return await axios.post("/reports/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
