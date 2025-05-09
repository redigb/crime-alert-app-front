import { useState, useRef, useEffect } from "react"



type MediaFile = {
    file: File
    type: "image" | "video"
    url: string
}

type FormData = {
    titulo: string
    descripcion: string
    ubicacion: string
    latitude: number | null
    longitude: number | null
    tipoIncidente: string
    media: MediaFile | null
}

const TIPOS_INCIDENTE = ["Accidente de tráfico", "Incendio", "Inundación", "Robo", "Vandalismo", "Otro"]


const ReportsPublished = () => {

    const [formData, setFormData] = useState<FormData>({
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
    }, []);

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
        <div>

        </div>
    );
}

export default ReportsPublished;
