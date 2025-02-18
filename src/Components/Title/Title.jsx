import './Title.css'
import { useTitle } from '../../hooks/useTitle'
import { useRef } from 'react'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'

export function Title() {
  const textRef = useRef(null)
  const { handleMouseLeave, handleMouseMove } = useTitle({ textRef })

  return (
    <ObservedAnimatedComponent threshold={0.1} classIfVisible="fade-in">
      <div className="title">
        <div className="main-title">
          <h1
            ref={textRef}
            onPointerMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="text-gradient"
          >
            Jose Riascos
          </h1>
          <h1 className="fixed-text">Jose Riascos</h1>
        </div>
        <h2>&lt;Web developer /&gt;</h2>
      </div>
    </ObservedAnimatedComponent>
  )
}
