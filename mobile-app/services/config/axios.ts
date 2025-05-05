import axios from "axios";
import { useAuthStore } from "../../store/auth";

// cambia segun el arranque "dev" // "prod"
const isDev = process.env.NODE_ENV === 'development';

const baseURL = isDev
    ? process.env.EXPO_PUBLIC_TESTING_URL
    : process.env.EXPO_PUBLIC_PRODUCTION_URL;

// Aotomatic conect - backend with axios
const authApi = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

export default authApi;