import './Header.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useHeader } from '../../hooks/useHeader'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N, MOBILE_WIDTH } from '../../utils/consts'
import { scrollTop } from '../../utils/functions'
import { OpenCloseMenu } from './OpenCloseMenu'
import { Link, useLocation, useNavigate } from 'react-router'

function MobileHeader() {
  const { shouldBeVisible, headerAboveTitle } = useHeader()

  const handleHomeClick = () => {
    scrollTop()
  }

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <span
            className={shouldBeVisible && !headerAboveTitle ? 'visible' : ''}
            onClick={handleHomeClick}
          >
            Jose Riascos
          </span>
        </div>
        <div className="header-nav-column">
          <OpenCloseMenu />
        </div>
      </header>
    </ObservedAnimatedComponent>
  )
}

function DesktopHeader() {
  const { shouldBeVisible, headerAboveTitle } = useHeader()
  const { toggleLang, lang } = useAppContext()
  const il18n = IL18N[lang]
  const location = useLocation()
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
    scrollTop()
  }

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <span
            className={
              shouldBeVisible && !headerAboveTitle || location.pathname !== '/'
                ? 'visible'
                : ''
            }
            onClick={handleHomeClick}
          >
            Jose Riascos
          </span>
        </div>
        <div className="header-nav-column">
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">{il18n.myWork}</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">{il18n.aboutMe}</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="contact">{il18n.contact}</Link>
            </li>
            <li onClick={toggleLang}>{il18n.language}</li>
          </ul>
        </div>
      </header>
    </ObservedAnimatedComponent>
  )
}

export function Header() {
  const { deviceWidth } = useAppContext()

  return deviceWidth <= MOBILE_WIDTH ? MobileHeader() : DesktopHeader()
}
