import './Carousel.css'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { useRef, useState, useEffect, useMemo } from 'react'
import { logos } from '../../utils/consts'

export function Carousel({ initialSpeed = 1 }) {
  const itemsRef = useRef(null)
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

  const items = useMemo(
    () => Array.from({ length: 10 }, () => logos).flat(),
    [logos]
  )

  return (
    <ObservedAnimatedComponent threshold={0} classIfVisible="fade-in">
      <div className="carousel">
        <div
          className="items"
          ref={itemsRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div>
              <img src={item.src} alt={item.alt} key={index} />
            </div>
          ))}
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
