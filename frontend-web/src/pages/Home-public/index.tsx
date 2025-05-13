import { Link } from "react-router-dom";

import { Button } from "@material-tailwind/react";

import logo from "../../../public/icon.png";
import {
  ReportIcon as Bell, Users, Menu, ChevronRight,
  Star, Shield,
  MapIcon as MapPin,
  Download
} from "../../assets/icons/Icons";
import { MagneticEffect } from "./components/MagneticEffect";
import { ButtonGlowEffect } from "./components/ButtonGlowEffect";
import { ScrollReveal } from "./components/ScrollReveal";
import { CardHoverEffect } from "./components/CardHoverEffect";

const HomePublic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f17] via-[#12121e] to-[#0f0f17] text-white">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 text-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8a70ff]/10 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-[#6a50df]/10 rounded-full blur-[120px] -z-10 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="relative z-10">
          <ScrollReveal>
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
              <span className="text-[#a28bff] font-medium">Tu seguridad es nuestra prioridad</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#d4caff] to-[#a28bff]">
                Seguridad Ciudadana
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff]">
                en tu Mano
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Reporta incidentes en tiempo real, recibe notificaciones inmediatas de tu comunidad y contribuye a una
              ciudad más segura con nuestra plataforma avanzada.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/registro">
                <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white px-8 py-7 text-lg rounded-xl shadow-xl shadow-[#8a70ff]/20 transition-all duration-300 transform hover:scale-105">
                  Regístrate Gratis
                  <ChevronRight className="ml-2 h-5 w-5" />
                </ButtonGlowEffect>
              </Link>

              <Link to="/login">
                <ButtonGlowEffect
                  variant="outline"
                  glowColor="rgba(138, 112, 255, 0.3)"
                  className="shimmer border-[#8a70ff] text-[#8a70ff] hover:bg-[#8a70ff]/10 px-8 py-7 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Ya tengo cuenta
                </ButtonGlowEffect>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="mt-16 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((user) => (
                    <div
                      key={user}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] border-2 border-[#12121e] flex items-center justify-center text-xs font-bold"
                    >
                      {user}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400">+10K usuarios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-400">4.9/5 rating</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section >

      {/* Features Section */}
      < section className="container mx-auto py-24 px-4 relative" id="caracteristicas" >
        <div className="absolute inset-0 bg-[#8a70ff]/5 rounded-3xl blur-3xl -z-10"></div>

        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
              Características Principales
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestra plataforma ofrece herramientas avanzadas para mantener a tu comunidad segura y conectada.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ScrollReveal delay={200}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Reportes en Vivo
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Envía alertas de incidentes en segundos directamente desde tu móvil con geolocalización precisa.
              </p>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Comunidad Activa
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Recibe notificaciones de eventos relevantes cercanos a ti y mantente informado en todo momento.
              </p>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Respaldo de Autoridades
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Tus reportes fortalecen la acción de la seguridad ciudadana y son enviados directamente a las
                autoridades.
              </p>
            </CardHoverEffect>
          </ScrollReveal>
        </div>
      </section >

      {/* App Showcase Section - NUEVA SECCIÓN MEJORADA */}
      < section className="container mx-auto py-24 px-4 overflow-hidden relative" >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#8a70ff]/5 to-transparent -z-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 relative z-10">
            <ScrollReveal>
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
                <span className="text-[#a28bff] font-medium">Aplicación Móvil</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
                  La seguridad al alcance
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff]">
                  de tu mano
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Nuestra aplicación móvil de última generación te permite reportar incidentes, recibir alertas y
                mantenerte conectado con tu comunidad en todo momento, con una interfaz intuitiva y funciones avanzadas.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={400}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Alertas en tiempo real
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Recibe notificaciones instantáneas sobre incidentes cercanos con detalles precisos y
                      actualizaciones en vivo.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Mapa interactivo
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Visualiza los incidentes reportados en tu zona con un mapa detallado y filtros personalizables.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/*<ScrollReveal delay={600}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Botón de pánico
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Envía alertas de emergencia con un solo toque y comparte tu ubicación exacta con contactos de
                      confianza.
                    </p>
                  </div> 
                </div>
              </ScrollReveal>*/}
            </div>

            <ScrollReveal delay={700}>
              <div className="mt-12 flex gap-5">
                <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white px-6 py-6 rounded-xl shadow-lg shadow-[#8a70ff]/20 transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar App
                </ButtonGlowEffect>
                <ButtonGlowEffect
                  variant="outline"
                  glowColor="rgba(138, 112, 255, 0.3)"
                  className="border-[#8a70ff] text-[#8a70ff] hover:bg-[#8a70ff]/10 px-6 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Ver demo
                </ButtonGlowEffect>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" className="md:w-1/2 relative">
            {/* Phone container with 3D effect */}
            <div className="relative mx-auto w-[320px] h-[650px] transform perspective-1000 rotate-y-[-5deg] rotate-z-2 animate-float">
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] rounded-[40px] border-[6px] border-[#2a2a35] shadow-2xl z-10 overflow-hidden">
                {/* Reflections */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
                <div className="absolute top-0 left-0 w-1/4 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-tl-[40px]"></div>
              </div>

              {/* Screen */}
              <div className="absolute inset-[6px] bg-[#1a1a25] rounded-[34px] overflow-hidden z-20">
                {/* App UI */}
                <div className="h-full w-full flex flex-col">
                  {/* Status bar */}
                  <div className="h-7 bg-black/50 backdrop-blur-md flex justify-between items-center px-5">
                    <span className="text-xs text-white font-medium">9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] p-4 flex justify-between items-center shadow-md">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-white" />
                      <span className="text-white font-bold">AlertaSegura</span>
                    </div>
                    <div className="relative">
                      <Bell className="h-5 w-5 text-white" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border border-white"></div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="flex-1 p-4 flex flex-col gap-4 bg-gradient-to-b from-[#1a1a25] to-[#12121e] ">
                    <div className="bg-gradient-to-br from-[#2a2a35] to-[#252530] p-4 rounded-xl border border-[#8a70ff]/10 shadow-lg shimmer">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-[#a28bff] font-semibold">Alerta de seguridad</h4>
                        <div className="px-2 py-0.5 bg-red-500 rounded-full text-xs text-white">Urgente</div>
                      </div>
                      <p className="text-white text-sm mb-2">Incidente reportado a 500m de tu ubicación actual</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-gray-400 text-xs">Hace 5 min</span>
                        <Button
                          size="sm"
                          className="h-7 bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] text-xs rounded-lg"
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#2a2a35] to-[#252530] h-[220px] rounded-xl border border-[#8a70ff]/10 shadow-lg overflow-hidden relative">
                      {/* Map mockup */}
                      <div className="absolute inset-0 bg-[#1a1a25]">
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-[20%] left-[30%] w-20 h-20 rounded-full border-4 border-[#8a70ff] opacity-50"></div>
                          <div className="absolute top-[40%] left-[50%] w-4 h-4 rounded-full bg-[#8a70ff]"></div>
                          <div className="absolute top-[60%] left-[20%] w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                          <div className="absolute top-[30%] left-[70%] w-3 h-3 rounded-full bg-yellow-500"></div>

                          {/* Roads */}
                          <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-gray-600"></div>
                          <div className="absolute top-0 bottom-0 left-[30%] w-0.5 bg-gray-600"></div>
                          <div className="absolute top-0 bottom-0 left-[70%] w-0.5 bg-gray-600"></div>
                          <div className="absolute top-[20%] left-0 right-0 h-0.5 bg-gray-600"></div>
                          <div className="absolute top-[80%] left-0 right-0 h-0.5 bg-gray-600"></div>
                        </div>
                      </div>

                      {/* Map controls */}
                      <div className="absolute top-3 right-3 bg-[#2a2a35]/80 backdrop-blur-sm p-2 rounded-lg">
                        <div className="flex flex-col gap-2">
                          <div className="w-6 h-6 bg-[#8a70ff] rounded-full flex items-center justify-center text-white text-lg font-bold">
                            +
                          </div>
                          <div className="w-6 h-6 bg-[#2a2a35] rounded-full flex items-center justify-center text-white text-lg font-bold">
                            -
                          </div>
                        </div>
                      </div>

                      {/* Location indicator */}
                      <div className="absolute bottom-3 left-3 bg-[#2a2a35]/80 backdrop-blur-sm py-1 px-3 rounded-lg flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#8a70ff]" />
                        <span className="text-white text-xs">Tu ubicación</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6 rounded-xl shadow-lg shadow-red-500/20 transition-all duration-300 transform hover:scale-[1.02]">
                        BOTÓN DE ALERTA RÁPIDA
                      </Button>
                    </div>
                  </div>

                  {/* Navigation bar */}
                  <div className="h-16 bg-[#2a2a35] border-t border-[#8a70ff]/10 flex justify-around items-center backdrop-blur-sm">
                    <div className="flex flex-col items-center">
                      <div className="p-1.5 rounded-lg bg-[#8a70ff]/10">
                        <MapPin className="h-5 w-5 text-[#8a70ff]" />
                      </div>
                      <span className="text-white text-xs mt-1">Mapa</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-1.5 rounded-lg">
                        <Bell className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">Alertas</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-1.5 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white text-xs mt-1">Comunidad</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[130px] h-7 bg-[#2a2a35] rounded-b-2xl z-30 flex justify-center items-center overflow-hidden">
                <div className="w-16 h-2 bg-black/50 rounded-full"></div>
              </div>
            </div>

            {/* Glow effects */}
            <div className="absolute -inset-10 bg-gradient-to-r from-[#8a70ff]/10 via-[#8a70ff]/20 to-[#8a70ff]/10 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
            <div
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#8a70ff]/30 rounded-full blur-3xl -z-10 animate-pulse-glow"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </ScrollReveal>
        </div>
      </section >

      {/* Web Platform Section */}
      < section className="container mx-auto py-24 px-4 relative" >
        <div className="absolute inset-0 bg-[#8a70ff]/5 rounded-3xl blur-3xl -z-10"></div>

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
              <span className="text-[#a28bff] font-medium">Plataforma Web</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
              Centro de Control en tu Navegador
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Accede a todas las funcionalidades desde cualquier dispositivo con nuestra potente plataforma web.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal direction="left" className="lg:w-1/2 order-2 lg:order-1">
            {/* Web Platform Mockup */}
            <CardHoverEffect className="relative mx-auto w-full max-w-3xl">
              {/* Browser Window Mockup */}
              <div className="bg-gradient-to-br from-[#2a2a35] to-[#1a1a25] rounded-xl overflow-hidden shadow-2xl border border-[#2a2a35]">
                {/* Browser Header */}
                <div className="bg-[#1a1a25] p-3 border-b border-[#2a2a35] flex items-center">
                  <div className="flex gap-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-[#2a2a35] rounded-full h-7 flex items-center px-3">
                    <span className="text-gray-400 text-xs">https://app.alertasegura.com</span>
                  </div>
                </div>

                {/* Browser Content */}
                <div className="bg-[#12121e] p-4">
                  {/* Web App Header */}
                  <div className="bg-[#1a1a25] rounded-t-lg border border-[#2a2a35] border-b-0 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="text-[#8a70ff] font-bold text-xl flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        AlertaSegura
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Bell className="h-5 w-5 text-gray-300" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AS</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="bg-[#1a1a25] rounded-b-lg border border-[#2a2a35] p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-[#2a2a35] rounded-lg p-4 border border-[#8a70ff]/10 shimmer">
                        <h4 className="text-gray-300 text-sm mb-1">Alertas Activas</h4>
                        <p className="text-white text-2xl font-bold">24</p>
                        <div className="mt-2 text-green-500 text-xs flex items-center">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            ></path>
                          </svg>
                          12% más que ayer
                        </div>
                      </div>
                      <div className="bg-[#2a2a35] rounded-lg p-4 border border-[#8a70ff]/10 shimmer">
                        <h4 className="text-gray-300 text-sm mb-1">Usuarios Activos</h4>
                        <p className="text-white text-2xl font-bold">1,248</p>
                        <div className="mt-2 text-green-500 text-xs flex items-center">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            ></path>
                          </svg>
                          8% más que ayer
                        </div>
                      </div>
                      <div className="bg-[#2a2a35] rounded-lg p-4 border border-[#8a70ff]/10 shimmer">
                        <h4 className="text-gray-300 text-sm mb-1">Reportes Resueltos</h4>
                        <p className="text-white text-2xl font-bold">85%</p>
                        <div className="mt-2 text-green-500 text-xs flex items-center">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            ></path>
                          </svg>
                          5% más que ayer
                        </div>
                      </div>
                    </div>

                    {/* Map Section */}
                    <div className="bg-[#2a2a35] rounded-lg p-4 border border-[#8a70ff]/10 mb-6 h-[200px] relative overflow-hidden">
                      <h4 className="text-white font-semibold mb-2">Mapa de Incidentes</h4>

                      {/* Map mockup */}
                      <div className="absolute inset-0 mt-8 opacity-50">
                        <div className="absolute top-[20%] left-[30%] w-20 h-20 rounded-full border-4 border-[#8a70ff] opacity-50"></div>
                        <div className="absolute top-[40%] left-[50%] w-4 h-4 rounded-full bg-[#8a70ff]"></div>
                        <div className="absolute top-[60%] left-[20%] w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                        <div className="absolute top-[30%] left-[70%] w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="absolute top-[50%] left-[80%] w-3 h-3 rounded-full bg-orange-500"></div>
                        <div className="absolute top-[70%] left-[40%] w-3 h-3 rounded-full bg-red-500"></div>

                        {/* Roads */}
                        <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-gray-600"></div>
                        <div className="absolute top-0 bottom-0 left-[30%] w-0.5 bg-gray-600"></div>
                        <div className="absolute top-0 bottom-0 left-[70%] w-0.5 bg-gray-600"></div>
                        <div className="absolute top-[20%] left-0 right-0 h-0.5 bg-gray-600"></div>
                        <div className="absolute top-[80%] left-0 right-0 h-0.5 bg-gray-600"></div>
                      </div>

                      {/* Map controls */}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <div className="bg-[#1a1a25] p-1 rounded text-xs text-white">Vista</div>
                        <div className="bg-[#1a1a25] p-1 rounded text-xs text-white">Filtros</div>
                        <div className="bg-[#8a70ff] p-1 rounded text-xs text-white">Tiempo real</div>
                      </div>
                    </div>

                    {/* Recent Alerts */}
                    <div className="bg-[#2a2a35] rounded-lg p-4 border border-[#8a70ff]/10 shimmer">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-white font-semibold">Alertas Recientes</h4>
                        <div className="text-[#8a70ff] text-xs">Ver todas</div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-[#1a1a25] rounded-lg p-3 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div>
                              <p className="text-white text-sm">Incidente en Av. Principal</p>
                              <p className="text-gray-400 text-xs">Hace 5 minutos</p>
                            </div>
                          </div>
                          <div className="bg-[#2a2a35] px-2 py-1 rounded text-xs text-white">Urgente</div>
                        </div>

                        <div className="bg-[#1a1a25] rounded-lg p-3 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div>
                              <p className="text-white text-sm">Alerta en Parque Central</p>
                              <p className="text-gray-400 text-xs">Hace 15 minutos</p>
                            </div>
                          </div>
                          <div className="bg-[#2a2a35] px-2 py-1 rounded text-xs text-white">Moderado</div>
                        </div>

                        <div className="bg-[#1a1a25] rounded-lg p-3 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div>
                              <p className="text-white text-sm">Situación resuelta en Calle 42</p>
                              <p className="text-gray-400 text-xs">Hace 30 minutos</p>
                            </div>
                          </div>
                          <div className="bg-[#2a2a35] px-2 py-1 rounded text-xs text-white">Resuelto</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className="absolute -inset-10 bg-gradient-to-r from-[#8a70ff]/10 via-[#8a70ff]/20 to-[#8a70ff]/10 rounded-full blur-3xl -z-10 animate-pulse-glow"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </CardHoverEffect>
          </ScrollReveal>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <ScrollReveal>
              <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
                <span className="text-[#a28bff] font-medium">Dashboard Completo</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
                  Gestión avanzada desde
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff]">
                  cualquier dispositivo
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                Nuestra plataforma web te permite acceder a todas las funcionalidades de AlertaSegura desde cualquier
                navegador, con una interfaz intuitiva y potentes herramientas de análisis.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={400}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Estadísticas en tiempo real
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Visualiza datos y métricas importantes sobre incidentes, usuarios activos y resolución de alertas
                      con gráficos interactivos.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Mapa interactivo avanzado
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Explora un mapa detallado con filtros avanzados, zonas de calor y análisis histórico de incidentes
                      por área.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Gestión de comunidad
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Administra grupos, coordina acciones comunitarias y establece canales de comunicación directa con
                      autoridades locales.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <div className="flex items-start gap-5 group">
                  <div className="bg-gradient-to-br from-[#8a70ff] to-[#6a50df] p-3 rounded-xl shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-[#a28bff] transition-colors duration-300">
                      Informes y reportes
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Genera informes detallados sobre incidentes, tendencias y patrones de seguridad para compartir con
                      tu comunidad.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={800}>
              <div className="mt-12">
                <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white px-6 py-6 rounded-xl shadow-lg shadow-[#8a70ff]/20 transition-all duration-300 transform hover:scale-105">
                  Acceder a la plataforma web
                </ButtonGlowEffect>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section >

      {/* Mobile + Web Integration Section */}
      < section className="container mx-auto py-24 px-4 relative" >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8a70ff]/10 to-transparent rounded-3xl blur-3xl -z-10"></div>

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
              <span className="text-[#a28bff] font-medium">Experiencia Completa</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
              Sincronización Perfecta
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nuestras aplicaciones móvil y web trabajan juntas para ofrecerte la mejor experiencia de seguridad
              ciudadana.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={200}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Sincronización en la nube
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Todos tus datos se sincronizan automáticamente entre tus dispositivos para que siempre tengas acceso a
                la información más actualizada.
              </p>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Seguridad integral
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Protección de datos de extremo a extremo y autenticación de dos factores tanto en la aplicación móvil
                como en la plataforma web.
              </p>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8a70ff] to-[#6a50df] flex items-center justify-center mb-6 shadow-lg shadow-[#8a70ff]/20 group-hover:shadow-xl group-hover:shadow-[#8a70ff]/30 transition-all duration-300">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#a28bff] transition-colors duration-300">
                Experiencia sin interrupciones
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                Comienza una acción en tu móvil y continúala en la web sin perder ningún detalle, con una interfaz
                coherente en ambas plataformas.
              </p>
            </CardHoverEffect>
          </ScrollReveal>
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="container mx-auto py-24 px-4 relative" >
        <div className="absolute inset-0 bg-[#8a70ff]/5 rounded-3xl blur-3xl -z-10"></div>

        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
              <span className="text-[#a28bff] font-medium">Testimonios</span>
            </div>

            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Miles de personas ya confían en AlertaSegura para mantenerse seguros e informados.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          <ScrollReveal delay={200}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Con AlertaSegura me siento mucho más informado sobre lo que pasa en mi barrio. La aplicación es
                intuitiva y las alertas son realmente útiles."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] flex items-center justify-center text-white font-bold">
                  LG
                </div>
                <div>
                  <p className="text-white font-semibold">Laura G.</p>
                  <p className="text-gray-400 text-sm">Usuario desde 2024</p>
                </div>
              </div>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Gracias a las alertas pude actuar a tiempo frente a un incidente. La comunidad es muy activa y las
                autoridades responden rápidamente."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] flex items-center justify-center text-white font-bold">
                  CM
                </div>
                <div>
                  <p className="text-white font-semibold">Carlos M.</p>
                  <p className="text-gray-400 text-sm">Usuario desde 2023</p>
                </div>
              </div>
            </CardHoverEffect>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <CardHoverEffect className="bg-gradient-to-br from-[#1a1a25] to-[#1a1a25]/80 p-8 rounded-2xl border border-[#8a70ff]/10 shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:shadow-[#8a70ff]/10 group">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "La aplicación es muy intuitiva y me ha ayudado a sentirme más seguro en mi comunidad. El mapa
                interactivo es especialmente útil."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div>
                  <p className="text-white font-semibold">Miguel R.</p>
                  <p className="text-gray-400 text-sm">Usuario desde 2024</p>
                </div>
              </div>
            </CardHoverEffect>
          </ScrollReveal>
        </div>
      </section >

      {/* CTA Section */}
      < section className="container mx-auto py-24 px-4" >
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#1a1a25] to-[#12121e] rounded-3xl p-12 text-center relative overflow-hidden border border-[#8a70ff]/20">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a70ff]/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-[#6a50df]/20 rounded-full blur-3xl animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="inline-block mb-6 px-4 py-1.5 bg-[#8a70ff]/10 rounded-full backdrop-blur-sm border border-[#8a70ff]/20 shimmer">
                <span className="text-[#a28bff] font-medium">Únete ahora</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#a28bff]">
                  Únete a la comunidad
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff]">
                  AlertaSegura
                </span>
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                Más de 10,000 ciudadanos ya están contribuyendo a crear ciudades más seguras. Descarga la app y forma
                parte del cambio hacia una comunidad más protegida.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white px-8 py-6 rounded-xl shadow-lg shadow-[#8a70ff]/20 transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar para Android
                </ButtonGlowEffect>
                <ButtonGlowEffect className="bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] hover:from-[#9f89ff] hover:to-[#8a70ff] text-white px-8 py-6 rounded-xl shadow-lg shadow-[#8a70ff]/20 transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar para iOS
                </ButtonGlowEffect>
              </div>

              <div className="mt-12 flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((user) => (
                      <div
                        key={user}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8a70ff] to-[#7a60ef] border-2 border-[#12121e] flex items-center justify-center text-xs font-bold"
                      >
                        {user}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-400">+10K usuarios activos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">4.9/5 en tiendas de apps</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section >

      {/* Footer */}
      < footer className="border-t border-[#8a70ff]/20 py-12" >





        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <MagneticEffect>
                <Link to="/" className="text-2xl font-bold relative group">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a28bff] to-[#8a70ff]">
                    AlertaSegura
                  </span>
                </Link>
              </MagneticEffect>
              <p className="text-gray-400 mt-3">© 2025 AlertaSegura. Todos los derechos reservados.</p>
              <div className="flex gap-4 mt-4">
                {/* GitHub - Redigb */}
                <a
                  href="https://github.com/redigb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-15 h-15 rounded-full bg-[#1a1a25] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#8a70ff]/20 transition-all duration-300"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.603-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.006-.404 11.52 11.52 0 013.006.404c2.29-1.554 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.096.823 2.21v3.285c0 .319.192.693.8.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>

                {/* GitHub - Xander */}
                <a
                  href="https://github.com/xander-18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-15 h-15 rounded-full bg-[#1a1a25] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#8a70ff]/20 transition-all duration-300"
                >
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.755-1.333-1.755-1.089-.745.082-.729.082-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.603-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.006-.404 11.52 11.52 0 013.006.404c2.29-1.554 3.297-1.23 3.297-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.221 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.096.823 2.21v3.285c0 .319.192.693.8.576A12.001 12.001 0 0024 12c0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div>
                <h3 className="text-white font-semibold mb-4">Producto</h3>
                {/* <ul className="space-y-3">
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Características
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Descargas
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Precios
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        FAQ
                      </Link>
                    </MagneticEffect>
                  </li>
                </ul> */}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Compañía</h3>
                <ul className="space-y-3">
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        RD - Software devlopmente
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Codex - Software devlopmente
                      </Link>
                    </MagneticEffect>
                  </li>
                  {/*<li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Contacto
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Prensa
                      </Link>
                    </MagneticEffect>
                  </li>*/}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                {/*<ul className="space-y-3">
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Términos
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Privacidad
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Cookies
                      </Link>
                    </MagneticEffect>
                  </li>
                  <li>
                    <MagneticEffect strength={10}>
                      <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        Licencias
                      </Link>
                    </MagneticEffect>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#8a70ff]/10 text-center">
            <p className="text-gray-500">Diseñado para la seguridad de tu comunidad</p>
          </div>
        </div>
      </footer >
    </div >
  );
}



export default HomePublic;
