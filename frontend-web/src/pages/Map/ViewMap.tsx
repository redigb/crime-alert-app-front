import { useState, useEffect } from 'react';

import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { motion, AnimatePresence } from 'motion/react';
// Components
import { Button, Input, Chip as Badge, IconButton } from '@material-tailwind/react';
import {
  AlertTriangle, AlertCircle, ReportIcon, User,
  Flame, Filter, Search, Calendar, Menu,
  MapIcon, ChevronRight, Barchart, X
} from '../../assets/icons/Icons';
// utils and Hoks
import { useCn as cn } from '../../utils';
import { useIsMobile } from '../../hooks/useIsMobile';
// Data
import { REPORTES_EJEMPLO } from '../../components/Reports/dataReport';
import { HeaderTitle } from '../../components';

interface MapaAvanzadoProps {
  alertas: any[]
  onSelectAlerta: (id: number) => void
}

const ViewMap = () => {

  const [alertas, setAlertas] = useState<any[]>(REPORTES_EJEMPLO);
  //setAlertas(REPORTES_EJEMPLO);
  const [filtroActivo, setFiltroActivo] = useState("todos")
  const [alertaHover, setAlertaHover] = useState<number | null>(null)
  const [reportesRecientes, setReportesRecientes] = useState<any[]>([])
  const [estadisticas, setEstadisticas] = useState({ robos: 8, acoso: 3 })
  const [showFilters, setShowFilters] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false)
  const isMobile = useIsMobile();

  const onSelectAlerta = (id: number) => {
    console.log(`Alerta seleccionada: ${id}`);
  }

  // Generar posiciones fijas para los marcadores
  useEffect(() => {
    // Filtrar y ordenar alertas para el panel de reportes recientes
    const recientes = [...alertas].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()).slice(0, 4)

    setReportesRecientes(recientes)
  }, [alertas])

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "robo":
        return <AlertTriangle className="h-5 w-5 text-white" />
      case "incendio":
        return <Flame className="h-5 w-5 text-white" />
      case "accidente":
        return <AlertCircle className="h-5 w-5 text-white" />
      case "sospechoso":
        return <User className="h-5 w-5 text-white" />
      case "servicios":
        return <ReportIcon className="h-5 w-5 text-white" />
      default:
        return <ReportIcon className="h-5 w-5 text-white" />
    }
  }

  const getCategoriaColor = (categoria: string) => {
    switch (categoria.toLowerCase()) {
      case "robo":
        return "bg-red-500"
      case "incendio":
        return "bg-orange-500"
      case "accidente":
        return "bg-yellow-500"
      case "sospechoso":
        return "bg-purple-500"
      case "servicios":
        return "bg-blue-500"
      default:
        return "bg-green-500"
    }
  }

  // Generar posiciones fijas para los marcadores
  const getMarkerPosition = (id: number) => {
    // Usar el id para generar posiciones semi-aleatorias pero consistentes
    const seed = (id * 13) % 100
    const offsetX = ((seed % 7) - 3) * 5
    const offsetY = ((seed % 11) - 5) * 5

    // Posiciones base para diferentes áreas del mapa
    const basePositions = [
      { top: 30, left: 40 },
      { top: 50, left: 60 },
      { top: 70, left: 30 },
      { top: 40, left: 70 },
      { top: 60, left: 50 },
    ]

    const basePos = basePositions[id % basePositions.length]

    return {
      top: `${basePos.top + offsetY}%`,
      left: `${basePos.left + offsetX}%`,
    }
  }

  return (
    <div className="h-full flex flex-col">

      {/* Header del mapa */}
      <motion.div
        className="p-4 border-b border-[#2e3347]/50 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderTitle
          icon={<MapIcon className="h-7 w-7" />}
          title1="Mapa de"
          title2="Incidentes"
          subtitle="Visualiza en tiempo real los reportes de tu comunidad."
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50 flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span className={`${isMobile ? "hidden" : "inline"}`}>Filtrar Reportes</span>
          </Button>

          {isMobile && (
            <IconButton
              onClick={() => setShowSidebar(true)}
              variant="outline"

              className="h-8 w-8 md:h-9 md:w-9 bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
            >
              <Menu className="h-4 w-4" />
            </IconButton>
          )}
        </div>
      </motion.div>

      {/* Panel de filtros desplegable */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            className="border-b border-[#2e3347]/50 bg-[#13151f]/90 backdrop-blur-sm rounded-t-xl border-rounded-t-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Buscar reportes..."
                    className="pl-10 bg-[#1a1d29]/80 border-[#2e3347] text-white h-10 rounded-lg"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  className={`${filtroActivo === "todos"
                    ? "bg-[#6c5ce7] hover:bg-[#5b4bc9] text-white"
                    : "bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                    } rounded-md transition`}
                  onClick={() => setFiltroActivo("todos")}
                >
                  Todos
                </Button>
                <Button
                  size="sm"
                  className={`${filtroActivo === "robos"
                    ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                    : "bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                    }  rounded-md transition`}
                  onClick={() => setFiltroActivo("robos")}
                >
                  Robos
                </Button>
                <Button

                  size="sm"
                  className={`${filtroActivo === "incendios"
                    ? "bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                    : "bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                    } rounded-md transition`}
                  onClick={() => setFiltroActivo("incendios")}
                >
                  Incendios
                </Button>
                <Button
                  size="sm"
                  className={`${filtroActivo === "accidentes"
                    ? "bg-yellow-500 hover:bg-yellow-600 border-yellow-500"
                    : "bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                    } border-transparent rounded-md transition`}
                  onClick={() => setFiltroActivo("accidentes")}
                >
                  Accidentes
                </Button>
                <Button
                  size="sm"
                  className={
                    filtroActivo === "sospechosos"
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                  }
                  onClick={() => setFiltroActivo("sospechosos")}
                >
                  Sospechosos
                </Button>
              </div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="sm" className="border-[#2e3347] text-white hover:bg-[#2e3347]/50">
                  <Calendar className="h-4 w-4 mr-2" />
                  Últimas 24h
                </Button>
                <Button variant="outline" size="sm" className="border-[#2e3347] text-white hover:bg-[#2e3347]/50">
                  <Filter className="h-4 w-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Contenido Principal */}
      <div className="flex-1 flex overflow-hidden">

        {/* Mapa */}
        <div className="flex-1 relative">
          <div className="w-full h-full bg-[#1f1f22] relative">
            {/* Mapa real aquí (puede ser react-leaflet, etc.) */}
            <Map
              initialViewState={{
                longitude: -76.2422,
                latitude: -9.9306,
                zoom: 14
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
            />;
          </div>

          {/* Marcadores de incidentes */}
          {alertas.map((alerta) => {
            const position = getMarkerPosition(alerta.id)
            const colorClass = getCategoriaColor(alerta.categoria)

            return (
              <div
                key={alerta.id}
                className="absolute"
                style={{ top: position.top, left: position.left }}
                onMouseEnter={() => setAlertaHover(alerta.id)}
                onMouseLeave={() => setAlertaHover(null)}
                onClick={() => onSelectAlerta(alerta.id)}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg",
                    colorClass,
                    alertaHover === alerta.id && "ring-2 ring-white",
                  )}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: alertaHover === alerta.id ? 1.2 : 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: alertaHover === alerta.id ? 0 : Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 1,
                  }}
                >
                  {getCategoriaIcon(alerta.categoria)}

                  {/* Efecto de pulso */}
                  <motion.div
                    className={cn("absolute inset-0 rounded-full", colorClass, "opacity-40")}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </motion.div>

                {/* Tooltip con información */}
                {alertaHover === alerta.id && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-[#1a1d29]/95 backdrop-blur-sm rounded-lg border border-[#2e3347] p-3 shadow-xl z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", colorClass)}>
                        {getCategoriaIcon(alerta.categoria)}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{alerta.titulo}</h3>
                        <p className="text-xs text-gray-400">{alerta.ubicacion}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-2">{alerta.descripcion}</p>
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`${alerta.estado === "verificada"
                          ? "bg-green-500"
                          : alerta.estado === "urgente"
                            ? "bg-red-500"
                            : "bg-yellow-500"
                          }`}
                      >
                        {alerta.estado}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        {alerta.fecha} • {alerta.hora}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#1a1d29] border-r border-b border-[#2e3347]"></div>
                  </motion.div>
                )}
              </div>
            )
          })}

          {/* Leyenda del mapa - Responsive */}
          <div className="absolute bottom-4 left-4 bg-[#1a1d29]/90 backdrop-blur-sm rounded-lg border border-[#2e3347] p-2 md:p-3 max-w-[140px] md:max-w-none">
            <h3 className="text-xs md:text-sm font-medium mb-1 md:mb-2">Leyenda</h3>
            <div className="space-y-1 md:space-y-2">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 flex items-center justify-center">
                  <AlertTriangle className="h-2 w-2 md:h-2.5 md:w-2.5 text-white" />
                </div>
                <span className="text-[10px] md:text-xs">Robos</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 flex items-center justify-center">
                  <Flame className="h-2 w-2 md:h-2.5 md:w-2.5 text-white" />
                </div>
                <span className="text-[10px] md:text-xs">Incendios</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-yellow-500 flex items-center justify-center">
                  <AlertCircle className="h-2 w-2 md:h-2.5 md:w-2.5 text-white" />
                </div>
                <span className="text-[10px] md:text-xs">Accidentes</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500 flex items-center justify-center">
                  <User className="h-2 w-2 md:h-2.5 md:w-2.5 text-white" />
                </div>
                <span className="text-[10px] md:text-xs">Sospechosos</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 bg-[#1a1d29]/90 backdrop-blur-sm rounded-lg border border-[#2e3347] p-3">
            <h3 className="text-sm font-medium mb-2">Leyenda</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                  <AlertTriangle className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs">Robos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                  <Flame className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs">Incendios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center">
                  <AlertCircle className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs">Accidentes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center">
                  <User className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-xs">Sospechosos</span>
              </div>
            </div>
          </div>

          {/* Botón flotante para mostrar panel en móvil */}
          {isMobile && !showSidebar && (
            <Button
              onClick={() => setShowSidebar(true)}
              className="absolute bottom-4 right-4 bg-[#6c5ce7] hover:bg-[#5b4bc9] text-white rounded-full h-12 w-12 shadow-lg"
            >
              <Barchart className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Panel lateral de reportes recientes - Versión desktop */}
        {!isMobile && (
          <div className="w-80 bg-[#13151f] border-l border-[#2e3347]/50 overflow-y-auto hidden md:block">
            {/* Reportes recientes */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Reportes Recientes</h2>
              <div className="space-y-3">
                {reportesRecientes.map((reporte) => (
                  <motion.div
                    key={reporte.id}
                    className="bg-[#1a1d29]/80 rounded-lg p-3 cursor-pointer hover:bg-[#1a1d29] transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => onSelectAlerta(reporte.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center",
                          getCategoriaColor(reporte.categoria),
                        )}
                      >
                        {getCategoriaIcon(reporte.categoria)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{reporte.titulo}</h3>
                        <p className="text-sm text-gray-400">{reporte.ubicacion} • hace 10 min</p>
                        <div className="flex justify-end mt-1">
                          <Button
                            className="h-6 p-0 text-[#6c5ce7] text-xs flex items-center"
                            onClick={(e) => {
                              e.stopPropagation()
                              onSelectAlerta(reporte.id)
                            }}
                          >
                            Ver detalles <ChevronRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Estadísticas */}
            <div className="p-4 border-t border-[#2e3347]/50">
              <div className="bg-[#1a1d29]/80 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Barchart className="h-5 w-5 text-[#6c5ce7]" />
                  <h3 className="font-medium">Estadísticas Hoy</h3>
                </div>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>- {estadisticas.robos} reportes de robos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>- {estadisticas.acoso} alertas de acoso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Panel lateral móvil (slide-in) */}
        <AnimatePresence>
          {isMobile && showSidebar && (
            <motion.div
              className="absolute inset-0 z-20 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSidebar(false)}
            >
              <motion.div
                className="absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-[#13151f] overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 border-b border-[#2e3347]/50 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Reportes Recientes</h2>
                  <Button variant="ghost" className="h-8 w-8" onClick={() => setShowSidebar(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Reportes recientes - Móvil */}
                <div className="p-3">
                  <div className="space-y-3">
                    {reportesRecientes.map((reporte) => (
                      <motion.div
                        key={reporte.id}
                        className="bg-[#1a1d29]/80 rounded-lg p-3 cursor-pointer hover:bg-[#1a1d29] transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => onSelectAlerta(reporte.id)}
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center",
                              getCategoriaColor(reporte.categoria),
                            )}
                          >
                            {getCategoriaIcon(reporte.categoria)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">{reporte.titulo}</h3>
                            <p className="text-xs text-gray-400 truncate">{reporte.ubicacion}</p>
                            <div className="flex items-center justify-between mt-1">
                              <Badge
                                className={`text-[10px] px-1.5 py-0 h-4 ${reporte.estado === "verificada"
                                  ? "bg-green-500"
                                  : reporte.estado === "urgente"
                                    ? "bg-red-500"
                                    : "bg-yellow-500"
                                  }`}
                              >
                                {reporte.estado}
                              </Badge>
                              <span className="text-[10px] text-gray-400">{reporte.fecha}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Estadísticas - Móvil */}
                <div className="p-3 border-t border-[#2e3347]/50">
                  <div className="bg-[#1a1d29]/80 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Barchart className="h-4 w-4 text-[#6c5ce7]" />
                      <h3 className="font-medium text-sm">Estadísticas Hoy</h3>
                    </div>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>- {estadisticas.robos} reportes de robos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        <span>- {estadisticas.acoso} alertas de acoso</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Ubicaciones recientes - Móvil */}
                <div className="p-3 border-t border-[#2e3347]/50">
                  <h3 className="font-medium text-sm mb-2">Ubicaciones recientes</h3>
                  <div className="space-y-2">
                    <div className="bg-[#1a1d29]/80 rounded-lg p-2 flex items-center gap-2">
                      <MapIcon className="h-4 w-4 text-[#6c5ce7]" />
                      <span className="text-xs">Centro Comercial</span>
                    </div>
                    <div className="bg-[#1a1d29]/80 rounded-lg p-2 flex items-center gap-2">
                      <MapIcon className="h-4 w-4 text-[#6c5ce7]" />
                      <span className="text-xs">Urb. Las Palmeras</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



      </div>
    </div>
  )
}

export default ViewMap;