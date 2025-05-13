// import { useState } from "react";
import { Button, Card } from "@material-tailwind/react"

// services
// import { uploadProfileImage, deleteProfileImage } from "../../services/users.service";

import { useAuthStore } from "../../store/auth"
import { useLogout } from "../../hooks"
import { HeaderTitle } from "../../components";

// icons
import {
  User, CheckCircle, Clock, SaveIcon, AlertPlus,
  LogoutIcon
} from "../../assets/icons/Icons";

const ProfileUser = () => {

  const logout = useLogout();
  //const updateProfile = useAuthStore((state) => state.setProfile);
  const getProfile = useAuthStore((state) => state.profile);

  //const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //const [fileName, setFileName] = useState<string | null>(null);
  //const [loading, setLoading] = useState(false);

  if (!getProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0B0B13] text-white">
        Cargando datos de perfil...
      </div>
    );
  }

  const imageUrl = getProfile.image_profile
    ? `${import.meta.env.VITE_TESTING_STORAGE}${getProfile.image_profile}`
    : null;

  /*const handleUpload = async () => {
    if (!selectedFile) return;
    try {
     // setLoading(true);
      const res = await uploadProfileImage(selectedFile);
      const updatedProfile = { ...getProfile, image_profile: res.data.data.path };
      updateProfile(updatedProfile);
      setSelectedFile(null);
     // setFileName(null);
    } catch (error) {
      console.error("Error al subir imagen", error);
    } finally {
     // setLoading(false);
    }
  };*/

  /*const handleDelete = async () => {
    try {
     // setLoading(true);
      await deleteProfileImage();
      const updatedProfile = { ...getProfile, image_profile: null };
      updateProfile(updatedProfile);
    } catch (error) {
      console.error("Error al eliminar imagen", error);
    } finally {
      //setLoading(false);
    }
  };*/

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeaderTitle
          icon={<User className="h-7 w-7" />}
          title1="Mi"
          title2="Perfil"
          subtitle="Administra tu información personal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-6 bg-[#1a1a24] border-[#2a2a3d] shadow-xl overflow-hidden">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#3F37C9] to-[#7C3AED] h-40">
              <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 mix-blend-soft-light" />
            </div>
            <div className="p-3 space-y-5">
              <div className="flex items-end justify-between px-6 ">
                <div className="flex items-center gap-4 border-b border-[#2a2a3d]">
                  {/* Avatar */}
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="Foto de Perfil"
                      className="w-36 h-36 rounded-full object-cover border-4 border-[#7C3AED] mb-4"
                    />
                  ) : (
                    <div className="w-36 h-36 bg-[#2e3347] rounded-full flex items-center justify-center text-5xl text-white mb-4">
                      👤
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-white">{getProfile.name}</h2>
                    <p className="text-textSecondary text-sm">{getProfile.email}</p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      <span className="bg-gradient-to-r from-green-500 to-green-300 text-black text-xs px-3 py-1 rounded-full font-semibold shadow">
                        Colaborador
                      </span>
                      <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">
                        Cuenta Activa
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
                  Editar perfil
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-[#2a2a3d]">
                <div className="bg-card p-4 rounded-lg border border-border_color text-white space-y-1">
                  <p className="text-sm text-textSecondary">Teléfono</p>
                  <p className="font-semibold">+20 1234567890</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border_color text-white space-y-1">
                  <p className="text-sm text-textSecondary">Ubicacion</p>
                  <p className="font-semibold truncate">Av LAt: Log: -- ubicacion referencia</p>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border_color">
                <h3 className="text-white font-semibold mb-4">Estadísticas de Actividad</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-textSecondary text-sm">Reportes creados</p>
                    <p className="text-2xl font-bold text-white">24</p>
                  </div>
                  <div className="text-center">
                    <p className="text-textSecondary text-sm">Reportes guardados</p>
                    <p className="text-2xl font-bold text-white">18</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button className="bg-gradient-to-br from-red-500/90 to-orange-500/90 hover:from-red-600 hover:to-orange-600 text-white h-20 rounded-xl shadow-lg shadow-red-500/20 flex flex-col items-center justify-center gap-1 border-transparent"
                onClick={logout}>
                <LogoutIcon className="h-6 w-6" />
                <span>Cerrar sesión</span>
              </Button>
            </div>
            </div>
            
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Actividad reciente */}
            <Card className="bg-[#1a1a24] border-[#2a2a3d] shadow-xl overflow-hidden">
              <Card.Body className="p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  Actividad reciente
                </h3>

                <div className="space-y-3">
                  <div className="flex gap-3 pb-3 border-b border-[#2a2a3d]">
                    <div className="bg-blue-500/20 p-1.5 rounded-full h-fit">
                      <AlertPlus className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm">Creaste un nuevo reporte</p>
                      <p className="text-xs text-gray-400">Hace 2 horas</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pb-3 border-b border-[#2a2a3d]">
                    <div className="bg-purple-500/20 p-1.5 rounded-full h-fit">
                      <SaveIcon className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm">Guardaste un reporte</p>
                      <p className="text-xs text-gray-400">Ayer</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="bg-green-500/20 p-1.5 rounded-full h-fit">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm">Verificaste un reporte</p>
                      <p className="text-xs text-gray-400">Hace 2 días</p>
                    </div>
                  </div>
                </div>

                {/* <Button variant="outline" className="w-full mt-4 border-[#2a2a3d] hover:bg-[#2a2a3d]">
                  Ver historial completo
                </Button>*/}
              </Card.Body>
            </Card>

            <div className="bg-card p-6 rounded-lg border border-border_color">
              <h3 className="text-white font-semibold mb-4">Información de cuenta</h3>
              <div className="space-y-3 text-white">
                <div>
                  <p className="text-sm text-textSecondary">Fecha de registro</p>
                  <p className="font-medium">15 de marzo de 2025</p>
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Último acceso</p>
                  <p className="font-medium">Hoy, 14:30</p>
                </div>
                <div>
                  <p className="text-sm text-textSecondary">Rol</p>
                  <p className="font-medium text-green-400">Colaborador</p>
                </div>
              </div>

              <div className="mt-6 bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">Agradecimiento por tu apoyo</h4>
                <ul className="text-sm space-y-1 text-white">
                  <li>✓ Ayudas a mantener la aplicación</li>
                  <li>✓ Soporte preferencial</li>
                  <li>✓ Reconocimiento en el perfil</li>
                </ul>
                <button className="w-full mt-4 bg-green-500 text-gray-300 py-2 rounded-lg font-semibold hover:bg-green-400 transition-all">
                  Ver formas de apoyar
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProfileUser;
