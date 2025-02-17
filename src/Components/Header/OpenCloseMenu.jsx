import { useDisableScroll } from '../../hooks/useDisableScroll'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts'

export function OpenCloseMenu() {
  const { lang, toggleLang, isMenuOpen, toggleIsMenuOpen } = useAppContext()
  const il18n = IL18N[lang]
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
            <li className="active">{il18n.myWork}</li>
            <li>{il18n.aboutMe}</li>
            <li>{il18n.contact}</li>
            <li onClick={toggleLang}>{il18n.language}</li>
          </ul>
        </div>
      )}
    </div>
  )
}
