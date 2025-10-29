import './Footer.css'
import { ArrowIcon } from '../Icons'
import { scrollTop } from '../../utils/functions'

export function Footer() {
  return (
    <section className="main-footer">
      <p>
        Coded by:{' '}
        <a href="https://github.com/joselriascos/Web_Portfolio" target="_blank">
          joselRiascos
        </a>
      </p>

      <div className="icon-container" onClick={scrollTop}>
        <ArrowIcon />
      </div>
    </section>
  )
}
