import { HomePublic, Login, Register } from "../pages";


export const routes = [
    {
        path: '/',
        title: 'AlertaSegura',
        element: <HomePublic/>
    },
    {
        path: '/login',
        title: 'Login',
        element:  <Login/>
    },
    {
        path: '/register',
        title: 'Registrarse',
        element:  <Register/>
    }
]