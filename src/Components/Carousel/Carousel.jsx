import './Carousel.css'
import { motion } from 'framer-motion'
import { useCarousel } from '../../hooks/useCarousel'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { useRef } from 'react'

export function Carousel() {
  const containerRef = useRef(null)
  const { setIsHovered, position, repeatedLogos } = useCarousel({
    containerRef,
  })

  return (
    <ObservedAnimatedComponent
      threshold={0}
      classIfVisible="fade-in"
      ref={containerRef}
    >
      <div
        ref={containerRef}
        className="carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="carousel"
          style={{ transform: `translateX(${position}%)` }}
        >
          {repeatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="carousel-element"
            />
          ))}
        </motion.div>
      </div>
    </ObservedAnimatedComponent>
  )
}
