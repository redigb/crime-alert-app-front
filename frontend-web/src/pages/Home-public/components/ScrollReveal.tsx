
import { useEffect, useRef, useState } from "react"
import type React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  direction = "up",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Define transform and opacity based on direction
  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-16"
      case "down":
        return "translate-y-[-4rem]"
      case "left":
        return "translate-x-16"
      case "right":
        return "translate-x-[-4rem]"
      case "none":
        return ""
      default:
        return "translate-y-16"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getInitialStyles()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
