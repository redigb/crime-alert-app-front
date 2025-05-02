


const Inicio = () => {
    return (
        <main className="flex-1 flex p-6 space-x-6 overflow-hidden">
            {/* Feed de reportes */}
            <section className="flex-1 space-y-4 overflow-y-auto pr-4">
                {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="bg-[#1E1E21] rounded-xl p-4 shadow-md">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold">Robo en el centro</h2>
                            <span className="text-sm text-[#A0A0A0]">12/04/2025</span>
                        </div>
                        <p className="text-sm text-[#A0A0A0]">Ubicación: Av. Grau</p>
                        <p className="text-sm text-[#5DA6F2] font-medium">Categoría: Robo</p>
                        <img src="/images/reporte.jpg" alt="reporte" className="mt-2 rounded-lg" />
                        <div className="flex mt-4 space-x-4">
                            <button className="text-[#5DA6F2]">Comentar</button>
                            <button className="text-[#30C96F]">Guardar</button>
                            <button className="text-[#FF4C4C]">Denunciar</button>
                        </div>
                    </div>
                ))}
            </section>

            {/* Widgets */}
            <aside className="w-80 space-y-6">
                {/* Estadísticas */}
                <div className="bg-[#1E1E21] rounded-xl p-4">
                    <h3 className="text-lg font-semibold mb-2">Estadísticas de Crimen</h3>
                    <p className="text-sm text-[#A0A0A0]">+12 incidentes esta semana</p>
                    {/* Aquí podrías incluir un gráfico con Chart.js o Recharts */}
                </div>

                {/* Botón de alerta rápida */}
                <button className="w-full py-3 bg-[#FF4C4C] text-white font-bold rounded-xl shadow-lg hover:bg-red-600">
                    Alerta Rápida
                </button>

                {/* Mapa en miniatura */}
                <div className="bg-[#1E1E21] rounded-xl p-4">
                    <h3 className="text-sm font-semibold mb-2">Mapa</h3>
                    <div className="w-full h-32 bg-gray-700 rounded-lg">[Mini mapa]</div>
                </div>

                {/* Usuarios activos */}
                <div className="bg-[#1E1E21] rounded-xl p-4">
                    <h3 className="text-sm font-semibold mb-2">Usuarios activos</h3>
                    <ul className="space-y-2 text-sm text-[#A0A0A0]">
                        <li>@carlos_vega</li>
                        <li>@maria.lopez</li>
                        <li>@user_alerta123</li>
                    </ul>
                </div>
            </aside>
        </main>
    );
}



export default Inicio;
