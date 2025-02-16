import './Footer.css'
import { ScrollTopIcon } from '../Icons'
import { scrollTop } from '../../utils/functions'

export function Footer() {
  return (
    <section className="main-footer">
      <p>
        Coded by:{' '}
        <a href="https://github.com/joselriascos" target="_blank">
          joselRiascos
        </a>
      </p>

      <div className="icon-container" onClick={scrollTop}>
        <ScrollTopIcon />
      </div>
    </section>
  )
}
