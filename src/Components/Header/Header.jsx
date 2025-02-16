import './Header.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useHeader } from '../../hooks/useHeader'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts'
import { scrollTop } from '../../utils/functions'

export function Header() {
  const { shouldBeVisible } = useHeader()
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
          <span onClick={handleHomeClick}>Jose Riascos</span>
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
