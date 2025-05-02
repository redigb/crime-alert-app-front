import {
    HomePublic, Login, Register,
    Inicio, Profile, ReportCrimen, Map, Saves
} from "../pages";


export const routesPublic = [
    {
        path: '/',
        title: 'AlertaSegura',
        element: <HomePublic />
    },
    {
        path: '/login',
        title: 'Login',
        element: <Login />
    },
    {
        path: '/registro',
        title: 'Registrarse',
        element: <Register />
    }
]

export const routesApp = [
    {
        path: '/inicio',
        title: 'Inicio',
        element: <Inicio />
    },
    {
        path: '/perfil',
        title: 'Perfil',
        element: <Profile />
    },
    {
        path: '/reportar',
        title: 'Reportar-Crimen',
        element: <ReportCrimen />
    },
    {
        path: '/mapa',
        title: 'Mapa',
        element: <Map />
    },
    {
        path: '/guardados',
        title: 'Guardados',
        element: <Saves />
    }
];