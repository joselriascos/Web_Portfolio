import './Header.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useHeader } from '../../hooks/useHeader'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N, MOBILE_WIDTH } from '../../utils/consts'
import { scrollTop } from '../../utils/functions'
import { OpenCloseMenu } from './OpenCloseMenu'

function MobileHeader() {
  const { shouldBeVisible, headerAboveTitle } = useHeader()

  const handleHomeClick = () => {
    scrollTop()
  }

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <div className="background-decoration" />
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

  const handleHomeClick = () => {
    scrollTop()
  }

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in" threshold={0.1}>
      <header className={`main-header ${shouldBeVisible ? '' : 'hidden'}`}>
        <div className="header-name-column">
          <div className="background-decoration" />
          <span
            className={shouldBeVisible && !headerAboveTitle ? 'visible' : ''}
            onClick={handleHomeClick}
          >
            Jose Riascos
          </span>
        </div>
        <div className="header-nav-column">
          <ul>
            <li className="active">{il18n.myWork}</li>
            <li>{il18n.aboutMe}</li>
            <li>{il18n.contact}</li>
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
