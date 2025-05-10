
import { useState, useEffect, useRef } from "react";
// Components
import {
  Button, Input, Textarea,
  Select, IconButton
} from "@material-tailwind/react";
import { motion } from "framer-motion"
// Types || Interface || utils
import { FormDataReport } from "./TypesReportCrimen";
import { useCn as cn } from "../../utils";
//Icon
import {
  ReportIcon, MapIcon, Upload,
  AlertTriangle, Calendar, Clock,
  Eye, ChevronRight, User, X
} from "../../assets/icons/Icons";
import { MediaPreview } from "../../components/media";

/*const MAX_IMAGE_SIZE_MB = 5;
const MAX_VIDEO_SIZE_MB = 20;*/
const TIPOS_INCIDENTE = ["Accidente de tráfico", "Incendio", "Inundación", "Robo", "Vandalismo", "Otro"];
const ReportCrimen = () => {

  const [formData, setFormData] = useState<FormDataReport>({
    titulo: "",
    descripcion: "",
    ubicacion: "",
    latitude: null,
    longitude: null,
    tipoIncidente: "",
    media: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    // Set current date and time
    const now = new Date()
    setDate(now.toLocaleDateString())
    setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.titulo) {
      newErrors.titulo = "El título es obligatorio"
    } else if (formData.titulo.length > 255) {
      newErrors.titulo = "El título no puede exceder los 255 caracteres"
    }

    if (!formData.descripcion) {
      newErrors.descripcion = "La descripción es obligatoria"
    }

    if (!formData.latitude || !formData.longitude) {
      newErrors.ubicacion = "La ubicación es obligatoria"
    }

    if (!formData.tipoIncidente) {
      newErrors.tipoIncidente = "Selecciona un tipo de incidente"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Aquí iría la lógica para enviar los datos al servidor
      // Simulamos un envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1500))
      alert("Reporte publicado con éxito")

      // Resetear el formulario
      setFormData({
        titulo: "",
        descripcion: "",
        ubicacion: "",
        latitude: null,
        longitude: null,
        tipoIncidente: "",
        media: null,
      })
      setCurrentStep(1)
    } catch (error) {
      console.error("Error al publicar el reporte:", error)
      alert("Error al publicar el reporte. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validar tamaño y tipo de archivo
    const isImage = file.type.startsWith("image/")
    const isVideo = file.type.startsWith("video/")

    if (isImage) {
      // Máximo 5MB para imágenes
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, media: "La imagen no debe exceder los 5MB" })
        return
      }
    } else if (isVideo) {
      // Máximo 20MB para videos
      if (file.size > 20 * 1024 * 1024) {
        setErrors({ ...errors, media: "El video no debe exceder los 20MB" })
        return
      }
    } else {
      setErrors({ ...errors, media: "Formato de archivo no soportado" })
      return
    }

    // Crear URL para previsualización
    const url = URL.createObjectURL(file)
    setFormData({
      ...formData,
      media: {
        file,
        type: isImage ? "image" : "video",
        url,
      },
    })

    // Limpiar error si existía
    if (errors.media) {
      const { media, ...restErrors } = errors
      setErrors(restErrors)
    }
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setFormData({
            ...formData,
            latitude,
            longitude,
            ubicacion: `Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`,
          })

          // Limpiar error si existía
          if (errors.ubicacion) {
            const { ubicacion, ...restErrors } = errors
            setErrors(restErrors)
          }
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error)
          setErrors({
            ...errors,
            ubicacion: "No se pudo obtener la ubicación. Por favor, ingrésala manualmente.",
          })
        },
      )
    } else {
      setErrors({
        ...errors,
        ubicacion: "Tu navegador no soporta geolocalización.",
      })
    }
  }

  const handleRemoveMedia = () => {
    if (formData.media) {
      URL.revokeObjectURL(formData.media.url)
      setFormData({
        ...formData,
        media: null,
      })
    }
  }

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.tipoIncidente) {
        setErrors({ ...errors, tipoIncidente: "Selecciona un tipo de incidente" })
        return
      }
      if (!formData.descripcion) {
        setErrors({ ...errors, descripcion: "La descripción es obligatoria" })
        return
      }
    } else if (currentStep === 2) {
      if (!formData.latitude || !formData.longitude) {
        setErrors({ ...errors, ubicacion: "La ubicación es obligatoria" })
        return
      }
    }

    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <motion.h1
          className="text-4xl font-bold flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ReportIcon className="h-10 w-10 text-red-500" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-[#6c5ce7]">
            Publicar Nuevo Reporte
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Completa la información y visualiza cómo se verá tu publicación.
        </motion.p>
      </div>

      {/* Progress Steps */}
      <motion.div
        className="mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-[#6c5ce7]" : "bg-gray-700"}`}
            >
              <ReportIcon className="h-5 w-5" />
            </div>
            <span className="text-xs mt-1">Incidente</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${currentStep >= 2 ? "bg-[#6c5ce7]" : "bg-gray-700"}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-[#6c5ce7]" : "bg-gray-700"}`}
            >
              <MapIcon className="h-5 w-5" />
            </div>
            <span className="text-xs mt-1">Ubicación</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${currentStep >= 3 ? "bg-[#6c5ce7]" : "bg-gray-700"}`}></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-[#6c5ce7]" : "bg-gray-700"}`}
            >
              <Upload className="h-5 w-5" />
            </div>
            <span className="text-xs mt-1">Multimedia</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Formulario */}
        <motion.div
          className="lg:col-span-3 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >

          <div className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2e3347]/50 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#6c5ce7]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6 relative">
                {/* Título (oculto pero procesado) */}
                <input type="hidden" name="titulo" value={formData.tipoIncidente} />
                {/* Step 1: Tipo de incidente y descripción */}
                {currentStep === 1 && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                        <ReportIcon className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-semibold">Detalles del Incidente</h2>
                    </div>
                    {/* Tipo de incidente */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-1">
                        <span className="text-[#6c5ce7]">•</span> Tipo de incidente
                      </label>
                      <Select size="lg"
                        value={formData.tipoIncidente}
                        onValueChange={(value) => {
                          setFormData({
                            ...formData,
                            tipoIncidente: value,
                            titulo: value,
                          });

                          if (errors.tipoIncidente) {
                            const { tipoIncidente, ...rest } = errors;
                            setErrors(rest);
                          }
                        }}
                      >
                        <Select.Trigger className="w-full text-white" placeholder="Seleccionar..." />

                        <Select.List className="max-h-60 overflow-y-auto">
                          {TIPOS_INCIDENTE.map((tipo) => (
                            <Select.Option key={tipo} value={tipo}>
                              {tipo}
                            </Select.Option>
                          ))}
                        </Select.List>
                      </Select>
                      {errors.tipoIncidente && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.tipoIncidente}
                        </p>
                      )}
                    </div>

                    {/* Fecha y hora */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-1">
                          <span className="text-[#6c5ce7]">•</span> Fecha
                        </label>
                        <div className="relative">
                          <Input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-[#13151f]/80 border-[#2e3347] text-white pl-10 h-12 rounded-lg"
                          />
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-1">
                          <span className="text-[#6c5ce7]">•</span> Hora
                        </label>
                        <div className="relative">
                          <Input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="bg-[#13151f]/80 border-[#2e3347] text-white pl-10 h-12 rounded-lg"
                          />
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    {/* Descripción */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-1">
                        <span className="text-[#6c5ce7]">•</span> Descripción
                      </label>
                      <Textarea
                        placeholder="Describe brevemente lo sucedido..."
                        className={cn(
                          "bg-[#13151f]/80 border-[#2e3347] text-white min-h-[120px] rounded-lg",
                          errors.descripcion && "border-red-500",
                        )}
                        value={formData.descripcion}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            descripcion: e.target.value,
                          })
                          if (errors.descripcion) {
                            const { descripcion, ...rest } = errors
                            setErrors(rest)
                          }
                        }}
                      />
                      {errors.descripcion && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.descripcion}
                        </p>
                      )}
                    </div>
                  </motion.div>)}

                {/* Step 2: Ubicación */}
                {currentStep === 2 && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                        <MapIcon className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-semibold">Ubicación del Incidente</h2>
                    </div>

                    {/* Mapa simulado */}
                    <div className="relative rounded-lg overflow-hidden h-[200px] mb-4 bg-[#13151f]/80 border border-[#2e3347]">
                      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-50"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapIcon className="h-8 w-8 text-[#6c5ce7] mx-auto mb-2" />
                          <p className="text-sm text-white/80">Mapa interactivo</p>
                        </div>
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-1">
                        <span className="text-[#6c5ce7]">•</span> Dirección
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Input
                            placeholder="Ej: Av. Grau 123"
                            className={cn(
                              "bg-[#13151f]/80 border-[#2e3347] text-white pl-10 h-12 rounded-lg",
                              errors.ubicacion && "border-red-500",
                            )}
                            value={formData.ubicacion}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                ubicacion: e.target.value,
                              })
                              if (errors.ubicacion) {
                                const { ubicacion, ...rest } = errors
                                setErrors(rest)
                              }
                            }}
                          />
                          <MapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                        <Button
                          type="button"
                          className="bg-[#6c5ce7] hover:bg-[#5b4bc9] text-white h-12 px-4 rounded-lg"
                          onClick={handleGetLocation}
                        >
                          <MapIcon className="h-4 w-4 mr-2" />
                          Ubicación actual
                        </Button>
                      </div>
                      {errors.ubicacion && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.ubicacion}
                        </p>
                      )}
                    </div>

                    {/* Coordenadas */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-1">
                          <span className="text-[#6c5ce7]">•</span> Latitud
                        </label>
                        <Input
                          value={formData.latitude?.toString() || ""}
                          readOnly
                          className="bg-[#13151f]/80 border-[#2e3347] text-white h-12 rounded-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium flex items-center gap-1">
                          <span className="text-[#6c5ce7]">•</span> Longitud
                        </label>
                        <Input
                          value={formData.longitude?.toString() || ""}
                          readOnly
                          className="bg-[#13151f]/80 border-[#2e3347] text-white h-12 rounded-lg"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Multimedia */}
                {currentStep === 3 && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#6c5ce7] flex items-center justify-center">
                        <Upload className="h-4 w-4" />
                      </div>
                      <h2 className="text-xl font-semibold">Evidencia Multimedia</h2>
                    </div>

                    {/* Subir imagen/video */}
                    <div className="space-y-4">
                      <label className="text-sm font-medium flex items-center gap-1">
                        <span className="text-[#6c5ce7]">•</span> Subir imagen/video (opcional)
                      </label>

                      {!formData.media ? (
                        <div
                          className="border-2 border-dashed border-[#2e3347] rounded-lg p-8 text-center bg-[#13151f]/50 hover:bg-[#13151f]/80 transition-colors cursor-pointer"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="h-12 w-12 mx-auto mb-4 text-[#6c5ce7]" />
                          <p className="text-white mb-2">Arrastra y suelta archivos aquí o haz clic para seleccionar</p>
                          <p className="text-xs text-gray-400">
                            Imágenes: JPG, PNG, GIF (máx. 5MB) <br />
                            Videos: MP4, MOV, AVI, FLV (máx. 20MB)
                          </p>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="rounded-lg overflow-hidden">
                            <MediaPreview media={formData.media} />
                          </div>
                          <IconButton variant="outline"
                            type="button"
                            color="error"
                            className="absolute top-2 right-2 rounded-full h-8 w-8"
                            onClick={handleRemoveMedia}
                          >
                            <X className="h-4 w-4" />
                          </IconButton>
                        </div>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/jpeg,image/png,image/jpg,image/gif,video/mp4,video/mov,video/avi,video/flv"
                        onChange={handleFileChange}
                      />
                      {errors.media && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {errors.media}
                        </p>
                      )}
                    </div>

                    {/* Información del usuario */}
                    <div className="bg-[#13151f]/50 rounded-lg p-4 border border-[#2e3347]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center">
                          <User className="h-5 w-5 text-[#6c5ce7]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Reportado por: Usuario Anónimo</p>
                          <p className="text-xs text-gray-400">
                            ID: #12345 • {date} {time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 0 ? (
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-transparent border-[#2e3347] text-white hover:bg-[#2e3347]/50"
                      onClick={prevStep}
                    >
                      Anterior
                    </Button>
                  ) : (
                    <div />
                  )}
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      className="bg-[#6c5ce7] hover:bg-[#5b4bc9] text-white"
                      onClick={nextStep}
                    >
                      Siguiente <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#6c5ce7] to-[#8a7bf8] hover:from-[#5b4bc9] hover:to-[#7a6be8] text-white"
                      disabled={isSubmitting}
                    >
                      <ReportIcon className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Publicando..." : "Publicar Reporte"}
                    </Button>
                  )}

                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Vista previa */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-[#1a1d29]/80 backdrop-blur-sm rounded-xl p-6 border border-[#2e3347]/50 shadow-xl sticky top-4">
            <div className="mb-6 flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center mr-3">
                <Eye className="h-5 w-5 text-[#6c5ce7]" />
              </div>
              <h2 className="text-xl font-semibold">Vista Previa</h2>
            </div>
            <div className="bg-[#13151f]/80 rounded-lg overflow-hidden border border-[#2e3347]/50">

              {/* Media preview */}
              <div className="relative mb-6">
                <MediaPreview media={formData.media} />
                {formData.media && (
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                    {formData.media.type === "image" ? "Imagen" : "Video"}
                  </div>
                )}
              </div>

              {/* Contenido de la vista previa */}
              <div className="p-6 space-y-6">
                {/* Tipo de incidente */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <ReportIcon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{formData.tipoIncidente || "Tipo de Incidente"}</h3>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="h-3 w-3 mr-2" />
                      <span>{time}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-3 w-3 mr-2" />
                      <span>{date}</span>
                    </div>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-start gap-3 bg-[#1a1d29]/50 p-4 rounded-lg">
                  <MapIcon className="h-5 w-5 text-[#6c5ce7] mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{formData.ubicacion || "Ubicación aproximada"}</p>
                    {formData.latitude && formData.longitude && (
                      <p className="text-xs text-gray-400">
                        Lat: {formData.latitude.toFixed(6)}, Lng: {formData.longitude.toFixed(6)}
                      </p>
                    )}
                  </div>
                </div>

                {/* Descripción */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-400">Descripción</h4>
                  <p className="text-sm text-gray-300 bg-[#1a1d29]/30 p-4 rounded-lg border-l-4 border-[#6c5ce7]">
                    {formData.descripcion || "Descripción breve del incidente..."}
                  </p>
                </div>

                {/* Estado */}
                <div className="flex items-center justify-between pt-3 border-t border-[#2e3347]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6c5ce7]/20 flex items-center justify-center">
                      <User className="h-4 w-4 text-[#6c5ce7]" />
                    </div>
                    <span className="text-xs text-gray-400">Usuario Anónimo</span>
                  </div>
                  <div className="bg-yellow-500/20 text-yellow-500 text-xs px-3 py-1 rounded-full">Pendiente</div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
}

export default ReportCrimen;