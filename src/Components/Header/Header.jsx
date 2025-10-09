import './Header.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useHeader } from '../../hooks/useHeader'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N, MOBILE_WIDTH } from '../../utils/consts.jsx'
import { scrollTop } from '../../utils/functions'
import { OpenCloseMenu } from './OpenCloseMenu'
import { Link, useLocation, useNavigate } from 'react-router'
import { GlobeAmerica, GlobeEurope } from '../Icons'

export function Header() {
  const { deviceWidth } = useAppContext()
  const { shouldBeVisible, headerAboveTitle } = useHeader()
  const location = useLocation()
  const navigate = useNavigate()

  const spanVisible =
    shouldBeVisible && (!headerAboveTitle || location.pathname !== '/')

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
    }
    scrollTop()
  }

  return deviceWidth <= MOBILE_WIDTH ? (
    <MobileHeader handleHomeClick={handleHomeClick} spanVisible={spanVisible} />
  ) : (
    <DesktopHeader
      handleHomeClick={handleHomeClick}
      spanVisible={spanVisible}
    />
  )
}

function MobileHeader({ handleHomeClick, spanVisible }) {
  const { shouldBeVisible } = useHeader()

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <span
            className={spanVisible ? 'visible' : ''}
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

function DesktopHeader({ handleHomeClick, spanVisible }) {
  const { shouldBeVisible } = useHeader()
  const { toggleLang, lang } = useAppContext()
  const location = useLocation()
  const il18n = IL18N[lang]

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <span
            className={spanVisible ? 'visible' : ''}
            onClick={handleHomeClick}
          >
            Jose Riascos
          </span>
        </div>
        <div className="header-nav-column">
          <ul>
            <li
              className={
                location.pathname === '/' ||
                location.pathname.startsWith('/project/')
                  ? 'active'
                  : ''
              }
            >
              <Link to="/">{il18n.myWork}</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">{il18n.aboutMe}</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact">{il18n.contact}</Link>
            </li>
            <li onClick={toggleLang}>
              {lang === 'en' ? <GlobeAmerica /> : <GlobeEurope />}
              <span>{il18n.language}</span>
            </li>
          </ul>
        </div>
      </header>
    </ObservedAnimatedComponent>
  )
}
