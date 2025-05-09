
export type FormDataReport = {
  titulo: string
  descripcion: string
  ubicacion: string
  latitude: number | null
  longitude: number | null
  tipoIncidente: string
  media: MediaFile | null
}


type MediaFile = {
  file: File
  type: "image" | "video"
  url: string
}