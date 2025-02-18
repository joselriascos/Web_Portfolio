import './Title.css'
import { useTitle } from '../../hooks/useTitle'
import { useRef } from 'react'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts'

export function Title() {
  const textRef = useRef(null)
  const { isMenuOpen, lang } = useAppContext()
  const { handleMouseLeave, handleMouseMove, handleTouch } = useTitle({ textRef })
  const il18n = IL18N[lang]

  return (
    <ObservedAnimatedComponent threshold={0.1} classIfVisible="fade-in">
      <div className={`title ${isMenuOpen ? 'send-to-back' : ''}`}>
        <div className="main-title">
          <h1
            ref={textRef}
            onPointerMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            // onTouchStart={handleTouch}
            className="text-gradient"
          >
            Jose Riascos
          </h1>
          <h1 className="fixed-text">Jose Riascos</h1>
        </div>
        <h2>&lt;{il18n.subtitle} /&gt;</h2>
      </div>
    </ObservedAnimatedComponent>
  )
}
