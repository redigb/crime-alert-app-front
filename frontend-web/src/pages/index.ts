import { lazy } from 'react';
import HomePublic from './Home-public';

// Pagina-inicial-publica
export { HomePublic }

// App-paginas-privates
export const Inicio = lazy(() => import('./Start/Inicio'));
export const Profile = lazy(() => import('./Profile/ProfileUser.tsx'));
export const ReportCrimen = lazy(() => import('./ReportCrimen/ReportCrimen.tsx'));
export const Map = lazy(() => import('./Map/ViewMap.tsx'));
export const Saves = lazy(() => import('./Saves/Saves.tsx'));


// Pagina-No encontrada.
export const NotFound = lazy(() => import('./NotFound.tsx'));

// Auths-publicas
export const Login = lazy(() => import('../pages/Auth/login.tsx'));
export const Register = lazy(() => import('./Auth/register.tsx'));