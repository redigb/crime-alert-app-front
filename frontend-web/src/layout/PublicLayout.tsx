import { Link, Outlet } from "react-router-dom";

import { Button } from "@material-tailwind/react";
import { ButtonGlowEffect } from "../pages/Home-public/components/ButtonGlowEffect";

import { Menu } from "../assets/icons/Icons";
import { MagneticEffect } from "../pages/Home-public/components/MagneticEffect";



function PublicLayout() {

  const logo = "/icon.png";

  return (
    <div>
      {/* Cabecerapagina */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b border-[#8a70ff]/20">
        <MagneticEffect>
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold relative group">
            <img src={logo} alt="Logo AlertaSegura" className="h-12 w-12 object-contain" />

            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff] group-hover:from-[#b9a4ff] group-hover:to-[#9f89ff] transition-all duration-300">
              AlertaSegura
            </span>

            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#a28bff] to-[#8a70ff] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </MagneticEffect>
        <nav className="hidden md:flex items-center gap-10">
          <MagneticEffect strength={15}>
            <Link
              to="/registro"
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Registrate
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8a70ff] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </MagneticEffect>
          <Link to="/login">
            <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white shadow-lg shadow-[#8a70ff]/20 transition-all duration-300">
              Iniciar sesión
            </ButtonGlowEffect>
          </Link>
        </nav>
        <Button className="md:hidden bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white">
          <Menu className="h-5 w-5" />
        </Button>
      </header>
      <main>
        <Outlet /> 
      </main>
    </div>
  )
}

export default PublicLayout
