import axios from "axios";
import { useAuthStore } from "../../store/auth";

// cambia segun el arranque "dev" // "prod"
const isDev = import.meta.env.MODE === "development";

const baseURL = isDev
  ? import.meta.env.VITE_TESTING_URL
  : import.meta.env.VITE_PRODUCTION_URL;

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