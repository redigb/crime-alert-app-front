import { useState } from "react";
import { Link } from "react-router-dom";
// components:
import { Input, Button, Chip, Menu } from "@material-tailwind/react";
import { HeaderTitle } from "../../components";
// icon: 
import {
  AlertCircle, SaveIcon,
  Search, Filter, ChevronDown,
} from "../../assets/icons/Icons";
import ReporteCard from "../../components/Reports/ReportedCard";


interface Reporte {
  id: number
  titulo: string
  descripcion: string
  ubicacion: string
  categoria: ReporteCategoria
  fecha: string
  hora: string
  usuario: string
  mediaType: ReporteMediaType
  mediaUrl?: string
  comentarios: number
  guardados: number
  denuncias: number
  likes: number
  vistas: number
  estado: ReporteEstado
  fechaGuardado?: string
}

// Tipos de datos
type ReporteEstado = "verificado" | "pendiente" | "urgente"
type ReporteCategoria = "Robo" | "Accidente" | "Incendio" | "Vandalismo" | "Otro"
type ReporteMediaType = "image" | "video" | "none"


// Datos de ejemplo
const reportesGuardadosData: Reporte[] = [
  {
    id: 1,
    titulo: "Robo en el centro",
    descripcion:
      "Dos individuos en motocicleta arrebataron pertenencias a transeúntes en la zona comercial. Llevaban cascos negros y la motocicleta era de color rojo sin placa visible.",
    ubicacion: "Av. Grau 123, Centro Comercial",
    categoria: "Robo",
    fecha: "12/04/2025",
    hora: "14:30",
    usuario: "carlos_vega",
    mediaType: "image",
    mediaUrl:
      "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
    comentarios: 5,
    guardados: 12,
    denuncias: 2,
    likes: 8,
    vistas: 45,
    estado: "verificado",
    fechaGuardado: "15/04/2025",
  },
  {
    id: 2,
    titulo: "Incendio en edificio residencial",
    descripcion:
      "Se reporta un incendio en el tercer piso del edificio residencial 'Las Palmeras'. Bomberos ya están en el lugar controlando la situación. Se recomienda evitar la zona.",
    ubicacion: "Calle Los Pinos 456, Urb. Las Palmeras",
    categoria: "Incendio",
    fecha: "11/04/2025",
    hora: "20:15",
    usuario: "maria_lopez",
    mediaType: "video",
    mediaUrl:
      "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
    comentarios: 12,
    guardados: 24,
    denuncias: 0,
    likes: 15,
    vistas: 120,
    estado: "urgente",
    fechaGuardado: "12/04/2025",
  },
  {
    id: 3,
    titulo: "Vandalismo en colegio",
    descripcion:
      "Grafitis y daños a la propiedad en la fachada del colegio municipal. Se observaron a tres individuos huyendo del lugar alrededor de las 23:00.",
    ubicacion: "Av. Arequipa 450, San Isidro",
    categoria: "Vandalismo",
    fecha: "08/04/2025",
    hora: "23:15",
    usuario: "juan_perez",
    mediaType: "image",
    mediaUrl:
      "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
    comentarios: 3,
    guardados: 2,
    denuncias: 0,
    likes: 5,
    vistas: 28,
    estado: "verificado",
    fechaGuardado: "09/04/2025",
  },

  {
    id: 4,
    titulo: "Vandalismo en colegio",
    descripcion:
      "Grafitis y daños a la propiedad en la fachada del colegio municipal. Se observaron a tres individuos huyendo del lugar alrededor de las 23:00.",
    ubicacion: "Av. Arequipa 450, San Isidro",
    categoria: "Vandalismo",
    fecha: "08/04/2025",
    hora: "23:15",
    usuario: "juan_perez",
    mediaType: "image",
    mediaUrl:
      "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
    comentarios: 3,
    guardados: 2,
    denuncias: 0,
    likes: 5,
    vistas: 28,
    estado: "verificado",
    fechaGuardado: "09/04/2025",
  },

  {
    id: 5,
    titulo: "Incendio en edificio residencial",
    descripcion:
      "Se reporta un incendio en el tercer piso del edificio residencial 'Las Palmeras'. Bomberos ya están en el lugar controlando la situación. Se recomienda evitar la zona.",
    ubicacion: "Calle Los Pinos 456, Urb. Las Palmeras",
    categoria: "Incendio",
    fecha: "11/04/2025",
    hora: "20:15",
    usuario: "maria_lopez",
    mediaType: "video",
    mediaUrl:
      "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
    comentarios: 12,
    guardados: 24,
    denuncias: 0,
    likes: 15,
    vistas: 120,
    estado: "urgente",
    fechaGuardado: "12/04/2025",
  },
]


const Saves: React.FC = () => {

  const [categoriaActiva, setCategoriaActiva] = useState<string>("todos")

  //const [openDialog, setOpenDialog] = useState(false)
  //const [openAlertDialog, setOpenAlertDialog] = useState(false)
  //const [reporteAEliminar, setReporteAEliminar] = useState<number | null>(null)
 // const [reportes, setReportes] = useState<Reporte[]>(reportesGuardadosData);
  const [expandedReporte, setExpandedReporte] = useState<number | null>(null);

  // Filtrar reportes por categoría
  const reportesFiltrados =
    categoriaActiva === "todos"
      ? reportesGuardadosData
      : reportesGuardadosData.filter((reporte) => reporte.categoria.toLowerCase() === categoriaActiva.toLowerCase())

  // Abrir diálogo con detalles del reporte
  /*const verDetalles = (reporte: Reporte) => {
    setReporteSeleccionado(reporte)
    setOpenDialog(true)
  }

  // Función para confirmar eliminación
  const confirmarEliminar = (id: number) => {
    setReporteAEliminar(id)
    setOpenAlertDialog(true)
  }

  // Función para eliminar reporte
  const eliminarReporte = () => {
    if (reporteAEliminar) {
      setReportes(reportes.filter((reporte) => reporte.id !== reporteAEliminar))
      setOpenAlertDialog(false)
      setReporteAEliminar(null)

      // Si el reporte eliminado es el que está en el diálogo, cerrarlo
      if (reporteSeleccionado && reporteSeleccionado.id === reporteAEliminar) {
        setOpenDialog(false)
      }
    }
  }*/
  const toggleExpand = (id: number) => {
    setExpandedReporte(expandedReporte === id ? null : id)
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "verificado":
        return <Chip className="bg-blue-500 hover:bg-blue-600"><Chip.Label>Verificado</Chip.Label></Chip>
      case "urgente":
        return <Chip className="bg-red-500 hover:bg-red-600"><Chip.Label>Urgente</Chip.Label></Chip>
      case "resuelto":
        return <Chip className="bg-green-500 hover:bg-green-600"><Chip.Label>Resuelto</Chip.Label></Chip>
      default:
        return <Chip className="bg-yellow-500 hover:bg-yellow-600"><Chip.Label>Pendiente</Chip.Label></Chip>
    }
  }

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "robo":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "incendio":
        return <AlertCircle className="h-5 w-5 text-orange-500" />
      case "accidente":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <AlertCircle className="h-5 w-5 text-blue-500" />
    }
  }


  return (
    <div className="min-h-screen text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <HeaderTitle
          icon={<SaveIcon className="h-7 w-7 text-white" />}
          title1="Tus Reportes"
          title2="Guardados"
          subtitle="Los reportes de incidentes que has guardado para seguimiento."
        />

        <div className="flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header with count */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {reportesFiltrados.length} {reportesFiltrados.length === 1 ? "reporte guardado" : "reportes guardados"}
              </h2>
              <div className="flex gap-2">
                <Menu>
                  <Menu.Trigger>
                    <Button
                      variant="outline"
                      className="bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50 flex items-center gap-2"
                    >
                      <ChevronDown className="h-4 w-4" />
                      Mas Recientes
                    </Button>
                  </Menu.Trigger>

                  <Menu.Content className="bg-[#1a1d29] text-white border border-[#2e3347] shadow-lg rounded-lg mt-2">
                    <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">Hoy</Menu.Item>
                    <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">Ayer</Menu.Item>
                    <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">Semana</Menu.Item>
                  </Menu.Content>
                </Menu>
              </div>
            </div>

            {/* Reports Grid */}
            {reportesFiltrados.length > 0 ? (
              <div className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {reportesFiltrados.map((reporte, index) => (
                    <ReporteCard
                      key={reporte.id}
                      reporte={reporte}
                      index={index}
                      expandedReporte={expandedReporte}
                      toggleExpand={toggleExpand}
                      getEstadoBadge={getEstadoBadge}
                      getCategoriaIcon={getCategoriaIcon}
                    />
                  ))}
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 rounded-xl bg-[#1a1d29]/80 backdrop-blur-sm border border-[#2e3347]/50">
                <div className="bg-[#2a2a3d] p-4 rounded-full mb-4">
                  <SaveIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium mb-2">No hay reportes guardados</h3>
                <p className="text-gray-400 text-center max-w-md mb-6">
                  No tienes reportes guardados en esta categoría. Explora reportes y guárdalos para acceder rápidamente
                  a ellos.
                </p>

                <Button className="bg-gradient-to-r from-primary to-red-500 via-purple-500 hover:from-primary hover:to-red-500 text-white rounded-lg shadow-lg shadow-purple-500/20 transition-all duration-300">
                  <Link to={"/inicio"}>
                    Explorar reportes
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar - Filters */}
          <div className="w-full md:w-64 space-y-6">
            <div className="bg-[#1a1d29]/80 backdrop-blur-sm border border-[#2e3347]/50 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5" />
                <h2 className="font-semibold">Filtros</h2>
              </div>

              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar reportes..."
                  className="pl-10 bg-[#1a1d29]/80 border-[#2e3347] text-white h-10 rounded-lg"
                />
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => setCategoriaActiva("todos")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "todos"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setCategoriaActiva("robo")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "robo"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Robo
                </button>
                <button
                  onClick={() => setCategoriaActiva("incendio")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "incendio"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Incendio
                </button>
                <button
                  onClick={() => setCategoriaActiva("vandalismo")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "vandalismo"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Vandalismo
                </button>
                <button
                  onClick={() => setCategoriaActiva("accidente")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "accidente"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Accidente
                </button>
                <button
                  onClick={() => setCategoriaActiva("otro")}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${categoriaActiva === "otro"
                    ? "bg-gradient-to-r from-purple-500/20 to-primary/70 text-white"
                    : "text-gray-400 hover:bg-[#2a2a3d]/50"
                    }`}
                >
                  Otro
                </button>
              </div>

              {/* <div className="mt-6 pt-4 border-t border-[#2a2a3d]">
                <h3 className="text-sm font-medium text-gray-400 mb-3">Estado</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="verificado"
                      className="rounded bg-[#13131d] border-[#2a2a3d] text-purple-500 focus:ring-purple-500"
                    />
                    <label htmlFor="verificado" className="ml-2 text-sm text-gray-300">
                      Verificado
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="pendiente"
                      className="rounded bg-[#13131d] border-[#2a2a3d] text-purple-500 focus:ring-purple-500"
                    />
                    <label htmlFor="pendiente" className="ml-2 text-sm text-gray-300">
                      Pendiente
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="urgente"
                      className="rounded bg-[#13131d] border-[#2a2a3d] text-purple-500 focus:ring-purple-500"
                    />
                    <label htmlFor="urgente" className="ml-2 text-sm text-gray-300">
                      Urgente
                    </label>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div >
    </div >
  );
};

export default Saves;