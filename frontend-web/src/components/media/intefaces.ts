
export interface MediaFile {
    file: File
    type: "image" | "video"
    url: string
}

export interface MediaViewerProps {
    type: "image" | "video"
    url: string
    alt?: string
}
