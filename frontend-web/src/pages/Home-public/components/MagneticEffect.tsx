
import type React from "react"
import { useRef, useState } from "react"

interface MagneticEffectProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export const MagneticEffect: React.FC<MagneticEffectProps> = ({ children, className = "", strength = 30 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = ((clientX - (left + width / 2)) / (width / 2)) * strength
    const y = ((clientY - (top + height / 2)) / (height / 2)) * strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-effect ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
