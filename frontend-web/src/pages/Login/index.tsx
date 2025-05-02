import { loginRequest, profileRequest } from "../../services/auth";
import { useAuthStore } from "../../store/auth";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const setToken = useAuthStore((state) => state.setToken);
    const setProfile = useAuthStore((state) => state.setProfile);       
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
        // Guardado datos del usuario
        const restLogin = await loginRequest(email, password);
        setToken(restLogin.data.token);
        const resProfile = await profileRequest();
        setProfile(resProfile.data.profile);
        // Redireccionar a la pagina de inicio
        navigate("/inicio");
    }

    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-background">
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-16 p-6 border border-[#1f1f22] rounded-lg shadow-lg space-y-4"
        >
            <h2 className="text-2xl font-semibold text-white text-center">Iniciar Sesión</h2>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm text-[#A0A0A0]">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@gmail.com"
                    className="px-4 py-2 rounded bg-[#1a1a1d] text-white focus:outline-none focus:ring-2 focus:ring-[#715DF2]"
                    required
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm text-[#A0A0A0]">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    placeholder="********"
                    className="px-4 py-2 rounded bg-[#1a1a1d] text-white focus:outline-none focus:ring-2 focus:ring-[#715DF2]"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 bg-[#715DF2] hover:bg-[#5a49c7] text-white font-semibold rounded transition-colors"
            >
                Iniciar Sesión
            </button>
        </form>
      </div>
        

    )
}



export default Login;
