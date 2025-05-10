import { useState, useRef, useEffect } from "react"
import { IconButton } from "@material-tailwind/react";
import Slider from "../MySlider";
// Icons
import {
    Play, SkipBack, SkipForward, Pause,
    Maximize, VolumeX, Volume2
} from "../../assets/icons/Icons"
// interface
import { MediaViewerProps } from "./intefaces";



// Visualizar el archivo - ya definido por url
const MediaViewer: React.FC<MediaViewerProps> = ({ type, url, alt }) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    const [showControls, setShowControls] = useState(false);


    useEffect(() => {
        const video = videoRef.current
        if (!video || type !== "video") return

        const updateTime = () => setCurrentTime(video.currentTime)
        const updateDuration = () => setDuration(video.duration)
        const handleEnded = () => setIsPlaying(false)

        video.addEventListener("timeupdate", updateTime)
        video.addEventListener("loadedmetadata", updateDuration)
        video.addEventListener("ended", handleEnded)

        return () => {
            video.removeEventListener("timeupdate", updateTime)
            video.removeEventListener("loadedmetadata", updateDuration)
            video.removeEventListener("ended", handleEnded)
        }
    }, [type]);

    const togglePlay = () => {
        const video = videoRef.current
        if (!video) return

        if (isPlaying) {
            video.pause()
        } else {
            video.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleSeek = (value: number) => {
        const video = videoRef.current
        if (!video) return

        video.currentTime = value
        setCurrentTime(value)
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return

        video.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const handleVolumeChange = (value: number) => {
        const video = videoRef.current
        if (!video) return

        const newVolume = value
        video.volume = newVolume
        setVolume(newVolume)
        setIsMuted(newVolume === 0)
    }

    const skipForward = () => {
        const video = videoRef.current
        if (!video) return

        video.currentTime = Math.min(video.currentTime + 10, video.duration)
    }

    const skipBackward = () => {
        const video = videoRef.current
        if (!video) return

        video.currentTime = Math.max(video.currentTime - 10, 0)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`
    }

    if (type === "image") {
        return (
            <div className="rounded-lg overflow-hidden bg-[#232736] relative group">
                <img
                    src={url || "/placeholder.svg"}
                    alt={alt || "Imagen del reporte"}
                    className="w-full h-auto max-h-[400px] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        )
    }

    return (
        <div
            className="rounded-lg overflow-hidden bg-[#232736] relative"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video ref={videoRef} src={url} className="w-full h-auto max-h-[400px]" onClick={togglePlay} />


            {/* Overlay para play/pause al hacer clic */}
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
                {!isPlaying && (
                    <div className="bg-black/40 rounded-full p-4 backdrop-blur-sm">
                        <Play className="h-8 w-8 text-white" />
                    </div>
                )}
            </div>
            {/* Controles de video */}
            <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 transition-opacity duration-300 ${showControls || isPlaying ? "opacity-100" : "opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-2">
                    {/* Barra de progreso */}
                    <Slider
                        value={currentTime}
                        onChange={(val) => handleSeek(val)}
                        min={0}
                        max={duration || 100}
                        step={0.1}
                    />

                    <div className="flex items-center gap-2">
                        {/* Botones de control */}
                        <div className="flex items-center">
                            <IconButton
                                type="button"
                                variant="ghost"
                                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                                onClick={skipBackward}
                            >
                                <SkipBack className="h-4 w-4" />
                            </IconButton>

                            <IconButton
                                type="button"
                                variant="ghost"

                                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                                onClick={togglePlay}
                            >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </IconButton>

                            <IconButton
                                type="button"
                                variant="ghost"

                                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                                onClick={skipForward}
                            >
                                <SkipForward className="h-4 w-4" />
                            </IconButton>
                        </div>

                        {/* Tiempo */}
                        <div className="text-xs text-white">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>

                        {/* Control de volumen */}
                        <div className="relative ml-auto flex items-center">
                            <IconButton
                                type="button"
                                variant="ghost"

                                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                                onClick={toggleMute}
                                onMouseEnter={() => setShowVolumeControl(true)}
                            >
                                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                            </IconButton>

                            {showVolumeControl && (
                                <div
                                    className="absolute right-0 bottom-full mb-2 bg-black/80 p-2 rounded-md w-24"
                                    onMouseEnter={() => setShowVolumeControl(true)}
                                    onMouseLeave={() => setShowVolumeControl(false)}
                                >

                                    <Slider
                                        value={volume}
                                        onChange={handleVolumeChange}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                    />
                                </div>
                            )}

                            <IconButton
                                type="button"
                                variant="ghost"

                                className="h-8 w-8 text-white hover:bg-white/20 rounded-full"
                            >
                                <Maximize className="h-4 w-4" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaViewer;
