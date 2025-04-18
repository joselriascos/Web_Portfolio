import { useRef, useState, useEffect } from "react"

export function useCarousel ({itemsRef, initialSpeed}) {
   const positionRef = useRef(0)
    const animationId = useRef(null)
    const [speed, setSpeed] = useState(initialSpeed)
  
    const animate = () => {
      if (itemsRef.current) {
        positionRef.current -= speed
        const width = itemsRef.current.scrollWidth / 2
        if (Math.abs(positionRef.current) >= width) {
          positionRef.current = 0
        }
        itemsRef.current.style.transform = `translateX(${positionRef.current}px)`
      }
      animationId.current = requestAnimationFrame(animate)
    }
  
    useEffect(() => {
      animationId.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationId.current)
    }, [speed])
  
    const handleMouseEnter = () => setSpeed(initialSpeed / 2)
    const handleMouseLeave = () => setSpeed(initialSpeed)

    return { handleMouseEnter, handleMouseLeave }

}