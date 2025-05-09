import { useState } from "react";
import { Button } from "@material-tailwind/react"

// services
import { uploadProfileImage, deleteProfileImage } from "../../services/users.service";

import { useAuthStore } from "../../store/auth"
import { useLogout } from "../../hooks"

const ProfileUser = () => {

  const logout = useLogout();
  const updateProfile = useAuthStore((state) => state.setProfile);
  const getToken = useAuthStore((state) => state.token);
  const getProfile = useAuthStore((state) => state.profile);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      setLoading(true);
      const res = await uploadProfileImage(selectedFile);
      const updatedProfile = { ...getProfile, image_profile: res.data.data.path };
      updateProfile(updatedProfile);
      setSelectedFile(null);
      setFileName(null);
    } catch (error) {
      console.error("Error al subir imagen", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteProfileImage();
      const updatedProfile = { ...getProfile, image_profile: null };
      updateProfile(updatedProfile);
    } catch (error) {
      console.error("Error al eliminar imagen", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0B0B13] via-[#141421] to-[#0B0B13] flex items-center justify-center p-6">
      <div className="bg-[#1E1E21] w-full max-w-2xl rounded-2xl shadow-2xl p-8 space-y-8">

        {/* Avatar e información */}
        <div className="flex flex-col items-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Foto de Perfil"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#715DF2] mb-4"
            />
          ) : (
            <div className="w-36 h-36 bg-gray-700 rounded-full flex items-center justify-center text-5xl text-white mb-4">
              👤
            </div>
          )}
          <h2 className="text-2xl font-bold text-white">{getProfile.name || "Usuario"}</h2>
          <p className="text-sm text-[#A0A0B0] mt-1">{getProfile.email}</p>
          <p className="text-sm text-[#A0A0B0] mt-1">Token: {getToken}</p>
        </div>

        {/* Subida de imagen estilizada */}
        {!getProfile.image_profile && (
          <div className="flex flex-col items-center gap-3">
            <label className="w-full max-w-sm px-4 py-3 bg-[#141421] text-[#A0A0B0] rounded-lg text-center cursor-pointer hover:bg-[#2a2a2e] transition">
              📁 {fileName || "Seleccionar imagen..."}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setSelectedFile(file);
                    setFileName(file.name);
                  }
                }}
              />
            </label>
          </div>
        )}

        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            onClick={handleUpload}
            disabled={loading || !selectedFile}
            className={`flex-1 py-3 bg-gradient-to-r from-[#715DF2] to-[#5a49c7] text-white font-bold rounded-full transition ${(!selectedFile || loading) && "opacity-50 cursor-not-allowed"
              }`}
          >
            {loading ? "Subiendo..." : "Subir Nueva Foto"}
          </Button>

          <Button
            onClick={handleDelete}
            disabled={loading || !getProfile.image_profile}
            className={`flex-1 py-3 bg-gradient-to-r from-[#FF4C4C] to-[#f87171] text-white font-bold rounded-full transition ${(!getProfile.image_profile || loading) && "opacity-50 cursor-not-allowed"
              }`}
          >
            {loading ? "Eliminando..." : "Eliminar Foto"}
          </Button>
        </div>

        {/* Cerrar sesión */}
        <div className="pt-6 border-t border-[#2a2a2e]">
          <Button
            onClick={logout}
            className="w-full py-3 bg-[#1a1a1d] hover:bg-[#2a2a2e] text-[#FF4C4C] font-bold rounded-full"
          >
            🔒 Cerrar Sesión
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;