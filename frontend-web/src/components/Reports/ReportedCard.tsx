import { motion } from "framer-motion"
import { Button } from "@material-tailwind/react"
import { MediaViewer } from "../media"
// Icons
import {
    Calendar, User, MapIcon as MapPin,
    Clock, Eye, Tag, ChevronDown,
    MessageCircle, Flag, Like, Share,
    SaveIcon
} from "../../assets/icons/Icons"
// utils
import { useCn as cn } from "../../utils"


interface ReporteCardProps {
    reporte: any
    index: number
    expandedReporte: number | null
    toggleExpand: (id: number) => void
    getEstadoBadge: (estado: string) => JSX.Element
    getCategoriaIcon: (categoria: string) => JSX.Element
}


export default function ReporteCard({
    reporte,
    index,
    expandedReporte,
    toggleExpand,
    getEstadoBadge,
    getCategoriaIcon,
}: ReporteCardProps) {
    return (
        <div className="shadow-md flex flex-col justify-between h-full">
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
                <div className="p-4">
                    {/* Encabezado del reporte */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1d29] to-[#13151f] flex items-center justify-center mt-1 border border-[#2e3347]/50 shadow-inner">
                                {getCategoriaIcon(reporte.categoria)}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold group flex items-center">
                                    {reporte.titulo}
                                    <span className="ml-2 text-xs bg-[#13151f] px-2 py-0.5 rounded-full text-gray-400">#{reporte.id}</span>
                                </h2>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-gray-400">
                                    <div className="flex items-center">
                                        <Calendar className="h-3.5 w-3.5 mr-1" />
                                        <span>{reporte.fecha}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-3.5 w-3.5 mr-1" />
                                        <span>{reporte.hora}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <User className="h-3.5 w-3.5 mr-1" />
                                        <span>@{reporte.usuario}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">{getEstadoBadge(reporte.estado)}</div>
                    </div>

                    {/* Ubicación y categoría */}
                    <div className="flex flex-wrap gap-3 mb-4">
                        <div className="flex items-center gap-1.5 bg-[#13151f]/80 px-3 py-1.5 rounded-full text-sm">
                            <MapPin className="h-3.5 w-3.5 text-[#6c5ce7]" />
                            <span className="text-gray-300">{reporte.ubicacion}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#13151f]/80 px-3 py-1.5 rounded-full text-sm">
                            <Tag className="h-3.5 w-3.5 text-[#6c5ce7]" />
                            <span className="text-gray-300">Categoría: {reporte.categoria}</span>
                        </div>
                    </div>

                    {/* Contenido multimedia */}
                    <div className="rounded-lg overflow-hidden mb-4 border border-[#2e3347]/30">
                        <MediaViewer type={reporte.mediaType as "image" | "video"} url={reporte.mediaUrl} alt={reporte.titulo} />
                    </div>

                    {/* Descripción */}
                    <div className="text-sm text-gray-300 mb-3 line-clamp-2">{reporte.descripcion}</div>
                    {/* 
                <div
                    className={cn(
                        "transition-all duration-300 overflow-hidden bg-[#13151f]/50 rounded-lg p-4 border-l-2 border-[#6c5ce7]",
                        expandedReporte === reporte.id ? "max-h-96" : "max-h-20",
                    )}
                >
                    <p className="text-gray-300 text-sm leading-relaxed">{reporte.descripcion}</p>
                </div>*/}

                    {/* Botón para expandir/colapsar */}
                    {reporte.descripcion.length > 100 && (
                        <button
                            className="text-[#6c5ce7] text-sm flex items-center mt-2 hover:underline"
                            onClick={() => toggleExpand(reporte.id)}
                        >
                            {expandedReporte === reporte.id ? "Ver menos" : "Ver más"}
                            <ChevronDown
                                className={cn("h-4 w-4 ml-1 transition-transform", expandedReporte === reporte.id ? "rotate-180" : "")}
                            />
                        </button>

                    )}
                    {/* Separador */}
                    <hr className="my-4 w-full border-t border-white/10" />
                    {/* Acciones */}
                    <div className="flex flex-wrap items-center justify-between gap-y-2">
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-[#2e3347]/50 rounded-lg"
                            >
                                <MessageCircle className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">{reporte.comentarios}</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-[#2e3347]/50 rounded-lg"
                            >
                                <SaveIcon className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">{reporte.guardados}</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-[#2e3347]/50 rounded-lg"
                            >
                                <Flag className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">{reporte.denuncias}</span>
                            </Button>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white hover:bg-[#2e3347]/50 rounded-lg"
                            >
                                <Eye className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">{reporte.vistas}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
