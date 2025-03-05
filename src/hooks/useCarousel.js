import { useState, useEffect, useMemo } from 'react'
import { useAppContext } from './useAppContext'
import { logos } from '../utils/consts'

export function useCarousel({ containerRef }) {
  const [isHovered, setIsHovered] = useState(false)
  const [position, setPosition] = useState(0)
  const { deviceWidth } = useAppContext()

  const repeatedLogos = useMemo(
    () => Array.from({ length: 10 }, () => logos).flat(),
    [logos]
  )

  const carouselSpeed = useMemo(() => deviceWidth * 12.5, [deviceWidth]) // 12.5 is the speed multiplier

  const carouselLimitX = useMemo(
    () => -(repeatedLogos.length / logos.length - 1) * 60,
    [repeatedLogos, logos]
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId
    let startTime
    let lastX = position

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime

      const elapsed = currentTime - startTime
      const speed = isHovered ? carouselSpeed : carouselSpeed / 2
      const progress = elapsed / speed

      const newX = lastX - progress * 100

      if (newX <= carouselLimitX) {
        lastX = 0
        startTime = currentTime
      }

      setPosition(newX)

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isHovered])

  return { position, setIsHovered, repeatedLogos }
}
