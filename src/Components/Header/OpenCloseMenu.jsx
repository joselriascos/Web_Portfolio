import { useDisableScroll } from '../../hooks/useDisableScroll'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts.jsx'
import { Link, useLocation } from 'react-router'
import { GlobeAmerica, GlobeEurope } from '../Icons'

export function OpenCloseMenu() {
  const { lang, toggleLang, isMenuOpen, toggleIsMenuOpen } = useAppContext()
  const il18n = IL18N[lang]
  const location = useLocation()
  useDisableScroll({ isMenuOpen })

  return (
    <div className="menu-container">
      <div
        onClick={toggleIsMenuOpen}
        className={`open-close-menu ${isMenuOpen ? 'open-menu' : ''}`}
      >
        {[...Array(9)].map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li
              onClick={toggleIsMenuOpen}
              className={
                location.pathname === '/' ||
                location.pathname.startsWith('/project/')
                  ? 'active'
                  : ''
              }
            >
              <Link to="/">{il18n.myWork}</Link>
            </li>
            <li
              onClick={toggleIsMenuOpen}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              <Link to="/about">{il18n.aboutMe}</Link>
            </li>
            <li
              onClick={toggleIsMenuOpen}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              <Link to="/contact">{il18n.contact}</Link>
            </li>
            <li onClick={toggleLang}>
              {lang === 'en' ? <GlobeAmerica /> : <GlobeEurope />}
              <span>{il18n.language}</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
