import { useState } from "react";

import { NavLink } from "react-router-dom";
import {
    HomeIcon, MapIcon, ChevronRight,
    Chevronleft, LogoutIcon, User,
    ReportIcon, SaveIcon
   
} from "../assets/icons/Icons";
// Hooks
import { useLogout } from "../hooks";

const menuItems = [
    { name: "Inicio", icon: <HomeIcon width={22} height={22} />, path: "/inicio" },
    { name: "Mapa", icon: <MapIcon width={22} height={22} />, path: "/mapa" },
    { name: "Alertas", icon: <ReportIcon width={22} height={22} />, path: "/reportar" },
    { name: "Guardados", icon: <SaveIcon width={22} height={22} />, path: "/guardados" },
];

const SideBarApp = () => {

    const [collapsed, setCollapsed] = useState(false);
    const logout = useLogout();

    return (
        <aside
            className={`h-screen bg-background_2 text-white flex flex-col justify-between shadow-xl transition-all duration-300 ${collapsed ? "w-20" : "w-72"
                } border border-border_color`}
        >
            {/* Header */}
            <div>
                <div className="flex items-center justify-between p-6">
                    {!collapsed && (
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Alerta<span className="text-primary">Segura</span>
                            {/* Logo */}
                        </h1>
                    )}
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="text-white hover:text-[#5DA6F2] transition-colors"
                    >
                        {collapsed ? <ChevronRight width={24} height={24} /> : <Chevronleft width={24} height={24} />}
                    </button>
                </div>

                {/* Menu */}
                <nav className="mt-6 flex flex-col gap-2">
                    {menuItems.map(({ name, icon, path }) => (
                        <NavLink
                            to={path}
                            key={name}
                            className={({ isActive }) =>
                                `group relative flex items-center gap-4 px-6 py-3 text-base font-medium rounded-lg transition-all 
                                 ${isActive ? "bg-primary text-white" : "hover:bg-[#3d33c234] text-white"} 
                                 ${collapsed ? "justify-center px-4" : ""}`
                            }
                        >
                            {icon}
                            {!collapsed && name}
                            {/* Tooltip solo visible si el sidebar está colapsado */}
                            {collapsed && (
                                <span
                                    className="absolute left-full top-1/2 -translate-y-1/2 ml-3 
                                                bg-[#1f1f22] text-white text-sm px-2 py-1 rounded shadow-lg 
                                                whitespace-nowrap opacity-0 group-hover:opacity-100 
                                                transition-opacity duration-300 z-50"
                                >
                                    {name}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border_color flex items-center justify-between">
                {collapsed ? (
                    <div className="relative group mx-auto">
                        <NavLink to="/perfil"
                            className={({ isActive }) =>
                                `group relative flex items-center  py-3 text-base font-medium rounded-lg transition-all 
                                 ${isActive ? "bg-primary text-white" : "hover:bg-[#3d33c234] text-white"} 
                                 ${collapsed ? "justify-center px-4" : ""}`
                            }>
                            <User width={24} height={24} />
                        </NavLink>
                        {/* Tooltip */}
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 z-50 
                            whitespace-nowrap bg-border_color text-white text-xs 
                            px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300">
                            Perfil
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="relative group flex items-center gap-3">
                            <NavLink to="/perfil" className="bg-primary p-2 rounded-full">
                                <User width={20} height={20} className="text-white" />
                                <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                                    Ver Perfil
                                </div>
                            </NavLink>
                            <div>
                                <p className="text-sm font-semibold">constAlerta</p>
                                <p className="text-xs text-secondary">usuario@email.com</p>
                            </div>
                        </div>

                        {/* Logout con tooltip */}
                        <div className="relative group inline-block">
                            <button className="text-white hover:text-danger transition-colors" onClick={logout}>
                                <LogoutIcon width={20} height={20} />
                            </button>
                            <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                                Cerrar sesión
                            </div>
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}

export default SideBarApp;