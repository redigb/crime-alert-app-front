import { Route, Routes } from "react-router-dom";
import { routes } from "./routeConfig";

export const AppRouter = () =>{
    // Por habilitar el manejo de login
    return(
        <Routes>
            {
                routes.map((route:any, index: number) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))
            }
        </Routes>
    );
}