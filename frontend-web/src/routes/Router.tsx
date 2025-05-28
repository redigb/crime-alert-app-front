import { Route, Routes } from "react-router-dom";
import { routesPublic, routesApp } from "./routesConfig";
import { ProtectedRoute } from "../components/Segure/ProtectedRoute";
import { Suspense } from 'react';

// Value-Zustand
import { useAuthStore } from "../store/auth";
// My Components
import { AppLayout, PublicLayout } from "../layout";
import SpinnerSuspense from "../components/Statics/Spinner";

export const AppRouter = () => {

  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <Routes>

      <Route element={<PublicLayout />}>
        {routesPublic.map((route: any, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route element={<AppLayout />}>
          {
            routesApp.map((route: any, index: number) => (
              <Route key={index} path={route.path} element={
                <Suspense fallback={<SpinnerSuspense />}>
                  {route.element}
                </Suspense>} />
            ))
          }
        </Route>
      </Route>
    </Routes>
  );
}


/* 

Añadir su propio layout: 

<Routes>
      {/* Rutas públicas con su navbar 
      <Route element={<PublicLayout />}>
        {routesPublic.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      {/* Rutas privadas con su navbar y protección 
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route element={<AppLayout />}>
          {routesApp.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>
    </Routes>


    import { Outlet } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";

export default function AppLayout() {
  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}





import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

export default function PublicLayout() {
  return (
    <>
      <PublicNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

*/