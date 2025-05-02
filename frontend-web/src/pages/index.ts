import { lazy } from 'react';
import HomePublic from './Home-public';

// Pagina-inicial-publica
export { HomePublic }

// App-paginas
export const Inicio = lazy(() => import('./Start/Inicio'));
export const Profile = lazy(() => import('./Profile'));
export const ReportCrimen = lazy(() => import('./ReportCrimen'));
export const Map = lazy(() => import('./Map'));
export const Saves = lazy(() => import('./Saves'));


/// Pagina-No encontrada.
export const NotFound = lazy(() => import('./NotFound.tsx'));

// Auths-publicas
export const Login = lazy(() => import('./Login'));
export const Register = lazy(() => import('./Login/register'));