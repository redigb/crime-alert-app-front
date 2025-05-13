import { useState, useEffect } from "react";

// components
import ReporteCard from "../../components/Reports/ReportedCard"
import { Chip, Button, Tabs, Menu } from "@material-tailwind/react";
import { AlertCircle, Filter, ReportIcon, SimpleIcon } from "../../assets/icons/Icons";

import { motion } from "framer-motion";
// Data - preview
import HeaderTitle from "../../components/HeaderTitle";

import { listReports } from "../../services/reports.service";
import SpinnerSuspense from "../../components/Statics/Spinner";

type Report = {
    id: number;
    estado: string;
    titulo: string;
    descripcion: string;
    direccion: string;
    fecha_hora_report: string;
    image: string | null;
    video: string | null;
    user: {
        id: number;
        name: string;
        image_profile: string | null;
    };
    // ...otros campos si los usas
};


const ReportsPublished = () => {

    const [expandedReporte, setExpandedReporte] = useState<number | null>(null);

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
                return <Chip className="bg-yellow-500 hover:bg-yellow-600"><Chip.Label>Nuevo</Chip.Label></Chip>
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

    // Prepara ñas consultas adecuadas // Busqueda - y Filtrado
    const [reportes, setReportes] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReportes = async () => {
            const data = await listReports();
            setReportes(data);
            setLoading(false);
        };
        fetchReportes();
    }, []);

    if (loading) return <SpinnerSuspense />;


    return (
        <div className="space-y-6">
            {/* Encabezado con título y botones de acción */}
            <motion.div
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <HeaderTitle
                    icon={<SimpleIcon className="h-7 w-7" />}
                    title1="Reportes de"
                    title2="Incidentes"
                    subtitle="Mantente informado sobre lo que ocurre en tu alrededor."
                />
                <div className="flex gap-2">
                    <Menu>
                        <Menu.Trigger>
                            <Button
                                variant="outline"
                                className="bg-[#1a1d29]/80 border border-[#2e3347] text-white hover:bg-[#2e3347]/50 flex items-center gap-2"
                            >
                                <Filter className="h-4 w-4" />
                                Filtrar
                            </Button>
                        </Menu.Trigger>

                        <Menu.Content className="bg-[#1a1d29] text-white border border-[#2e3347] shadow-lg rounded-lg mt-2">
                            <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">Add Team</Menu.Item>
                            <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">Add Project</Menu.Item>
                            <Menu.Item className="hover:bg-[#2e3347] px-4 py-2 cursor-pointer">My Profile</Menu.Item>
                        </Menu.Content>
                    </Menu>
                </div>
            </motion.div>
            <Tabs defaultValue="todos" className="w-full">
                <Tabs.List className="flex gap-2 bg-[#1a1d29]/80 border border-[#2e3347]/50 p-1 rounded-lg">
                    {[
                        { label: "Todos", value: "todos" },
                        { label: "Nuevos", value: "nuevo" },
                        { label: "Urgente", value: "urgente" },
                        { label: "Verificado", value: "verificado" },
                        { label: "Otros", value: "otros" },
                    ].map((tab) => (
                        <Tabs.Trigger
                            key={tab.value}
                            value={tab.value}
                            className="px-4 py-2 text-sm rounded-md transition-colors duration-200 
                                        aria-selected:bg-[#6c5ce7] font-medium
                                        aria-selected:text-white 
                                        text-[#A0A0B0] 
                                        hover:bg-[#2a2e42]"
                        >
                            {tab.label}
                        </Tabs.Trigger>
                    ))}
                </Tabs.List>
                <Tabs.Panel value="todos" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reportes.map((reporte, index) => (
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
                </Tabs.Panel>
                <Tabs.Panel value="nuevo">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reportes.filter((r) => r.estado.toLowerCase() === "nuevo").map((reporte, index) => (
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
                </Tabs.Panel>
                <Tabs.Panel value="urgente">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reportes.filter((r) => r.estado.toLowerCase() === "urgente").map((reporte, index) => (
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
                </Tabs.Panel>
                <Tabs.Panel value="verificado">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {reportes.filter((r) => r.estado.toLowerCase() === "verificado").map((reporte, index) => (
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
                </Tabs.Panel>
                <Tabs.Panel value="otros">
                    <div className="p-8 text-center text-gray-400">
                        <ReportIcon className="h-12 w-12 mx-auto mb-4 text-gray-500 opacity-50" />
                        <p>No hay reportes en esta categoría</p>
                    </div>
                </Tabs.Panel>
            </Tabs>
        </div>
    );
}

export default ReportsPublished;
