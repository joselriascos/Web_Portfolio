import './404.css'
import { useNavigate } from 'react-router'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts.jsx'

export default function Error404() {
  const navigate = useNavigate()
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  return (
    <ObservedAnimatedComponent classIfVisible="fade-in">
      <div className="error-404-container">
        <h1>Error 404</h1>
        <p>{il18n.pageNotFound}</p>
        <button onClick={() => navigate('/')}>{il18n.goBackHome}</button>
      </div>
    </ObservedAnimatedComponent>
  )
}
