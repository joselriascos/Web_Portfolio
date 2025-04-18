import './Carousel.css'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { useRef, useMemo } from 'react'
import { logos } from '../../utils/consts'
import { useCarousel } from '../../hooks/useCarousel'

export function Carousel({ initialSpeed = 1 }) {
  const itemsRef = useRef(null)
  const { handleMouseEnter, handleMouseLeave } = useCarousel({
    itemsRef,
    initialSpeed,
  })

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
            <div key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
