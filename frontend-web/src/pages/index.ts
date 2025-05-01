import { lazy } from 'react';
import HomePublic from './HomePublic';

// Pagina-inicial-publica
export { HomePublic }


export const Login = lazy(() => import('./Login'));
export const Register = lazy(() => import('./Login/register'));