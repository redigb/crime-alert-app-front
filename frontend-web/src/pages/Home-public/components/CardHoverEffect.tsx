
import type React from "react"
import { useState, useRef, useEffect } from "react"

interface CardHoverEffectProps {
  children: React.ReactNode
  className?: string
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({ children, className = "" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate position relative to the card
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setOpacity(0)
  }

  // Add rotation effect
  useEffect(() => {
    const card = cardRef.current
    if (!card || !isHovering) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((position.y - centerY) / centerY) * 5
    const rotateY = ((centerX - position.x) / centerX) * 5

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    return () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }, [position, isHovering])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(138, 112, 255, 0.15), transparent 40%)`,
        }}
      />
      <div
        className="light-border pointer-events-none absolute -inset-px rounded-[inherit] opacity-0"
        style={{
          opacity: opacity * 0.6,
        }}
      />
    </div>
  )
}
