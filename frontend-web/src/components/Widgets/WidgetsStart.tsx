import { Map } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

import { Input, Button } from "@material-tailwind/react";
import { motion } from "motion/react";
import {
    Barchart, Search, TrendingUp,
    ReportIcon, MapIcon, ChevronRight,
    User, AlertTriangle,
    Shield
} from "../../assets/icons/Icons";

const WidgetsStart = () => {

    // Datos de ejemplo para los widgets
    const estadisticas = {
        incidentes_semana: 12,
        robos: 5,
        accidentes: 3,
        incendios: 2,
        otros: 2,
    }

    const usuarios_activos = [
        { id: 1, username: "carlos_vega", online: true },
        { id: 2, username: "maria_lopez", online: true },
        { id: 3, username: "user_alerta123", online: false },
    ]


    return (
        <div className="space-y-6">
            {/* Buscador */}
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-200" />
                    <Input
                        placeholder="Buscar reportes..."
                        className="bg-[#13151f]/70 border-[#2e3347] text-white pl-10 h-12 rounded-lg"
                    />
                </div>
            </motion.div>

            {/* Estadísticas de Crimen */}
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Barchart className="h-4 w-4 text-blue-500" />
                    </div>
                    <h2 className="text-lg font-semibold">Estadísticas de Crimen</h2>
                </div>

                <div className="bg-[#13151f]/50 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Esta semana:</span>
                        <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-green-500 font-medium">+{estadisticas.incidentes_semana} incidentes</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Robos</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-[#13151f] rounded-full overflow-hidden">
                                <div
                                    className="bg-red-500 h-full"
                                    style={{ width: `${(estadisticas.robos / estadisticas.incidentes_semana) * 100}%` }}
                                ></div>
                            </div>
                            <span>{estadisticas.robos}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Accidentes</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-[#13151f] rounded-full overflow-hidden">
                                <div
                                    className="bg-yellow-500 h-full"
                                    style={{ width: `${(estadisticas.accidentes / estadisticas.incidentes_semana) * 100}%` }}
                                ></div>
                            </div>
                            <span>{estadisticas.accidentes}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Incendios</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-[#13151f] rounded-full overflow-hidden">
                                <div
                                    className="bg-orange-500 h-full"
                                    style={{ width: `${(estadisticas.incendios / estadisticas.incidentes_semana) * 100}%` }}
                                ></div>
                            </div>
                            <span>{estadisticas.incendios}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Otros</span>
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-[#13151f] rounded-full overflow-hidden">
                                <div
                                    className="bg-blue-500 h-full"
                                    style={{ width: `${(estadisticas.otros / estadisticas.incidentes_semana) * 100}%` }}
                                ></div>
                            </div>
                            <span>{estadisticas.otros}</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Botón de Alerta Rápida */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white h-14 rounded-xl shadow-lg shadow-red-500/20">
                    <ReportIcon className="h-5 w-5 mr-2" />
                    Reportar Incidente
                </Button>
            </motion.div>

            {/* Mapa de Incidentes */}
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center">
                            <MapIcon className="h-4 w-4 text-[#6c5ce7]" />
                        </div>
                        <h2 className="text-lg font-semibold">Mapa de Incidentes</h2>
                    </div>
                </div>

                <div className="relative h-[200px] bg-[#13151f]">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full bg-[#1f1f22] relative">
                            {/* Mapa real aquí (puede ser react-leaflet, etc.) */}
                            <Map
                                initialViewState={{
                                    longitude: -76.2422,
                                    latitude: -9.9306,
                                    zoom: 12
                                }}
                                style={{ width: '100%', height: '100%' }}
                                mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
                            />;
                        </div>
                    </div>

                    {/* Puntos de ejemplo en el mapa */}
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>

                <div className="p-3 bg-[#13151f]/50">
                    <Button variant="ghost" className="w-full text-[#6c5ce7] hover:bg-[#6c5ce7]/10 text-sm">
                        Ver mapa completo
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                </div>
            </motion.div>

            {/* Usuarios Activos */}
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <User className="h-4 w-4 text-green-500" />
                    </div>
                    <h2 className="text-lg font-semibold">Usuarios Activos</h2>
                </div>

                <div className="space-y-3">
                    {usuarios_activos.map((usuario) => (
                        <div key={usuario.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                {/*<Avatar className="h-8 w-8 border border-[#2e3347]">
                                    <AvatarFallback className="bg-[#13151f] text-[#6c5ce7]">
                                        {usuario.username.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar> */}
                                <span className="text-sm">@{usuario.username}</span>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${usuario.online ? "bg-green-500" : "bg-gray-500"}`}></div>
                        </div>
                    ))}
                </div>

                <Button variant="ghost" className="w-full mt-3 text-[#6c5ce7] hover:bg-[#6c5ce7]/10 text-sm">
                    Ver todos los usuarios
                    <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
            </motion.div>

            {/* Información de Emergencia */}
            <motion.div
                className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl border border-[#2e3347]/50 shadow-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-red-500" />
                    </div>
                    <h2 className="text-lg font-semibold">Contactos de Emergencia</h2>
                </div>

                <div className="space-y-3">
                    <div className="bg-[#13151f]/50 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Policía</p>
                                <p className="text-xs text-gray-400">Emergencias</p>
                            </div>
                        </div>
                        <Button size="sm" className="bg-red-500 hover:bg-red-600 h-8">
                            105
                        </Button>
                    </div>

                    <div className="bg-[#13151f]/50 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                                <AlertTriangle className="h-4 w-4 text-orange-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Bomberos</p>
                                <p className="text-xs text-gray-400">Incendios y rescates</p>
                            </div>
                        </div>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600 h-8">
                            116
                        </Button>
                    </div>

                    <div className="bg-[#13151f]/50 rounded-lg p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                <AlertTriangle className="h-4 w-4 text-green-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Ambulancia</p>
                                <p className="text-xs text-gray-400">Emergencias médicas</p>
                            </div>
                        </div>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600 h-8">
                            106
                        </Button>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}

export default WidgetsStart;
