import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useAppContext } from '../../hooks/useAppContext'
import './Project.css'
import { useNavigate } from 'react-router'

export function Project({ project }) {
  const { title, image_path, id } = project
  const { lang } = useAppContext()
  const navigate = useNavigate()

  const handleClick = () => {
    if (id) {
      navigate(`/project/${id}`)
      return
    }

    const alertMsg =
      lang === 'en' ? 'Project not found' : 'Proyecto no encontrado'
    alert(alertMsg)
  }

  return (
    <ObservedAnimatedComponent
      threshold={0.1}
      classIfVisible="fade-in"
      classIfNotVisible="hidden"
    >
      <div className="project" onClick={handleClick}>
        <img src={image_path} alt={title[lang]} />
        <div className="hidden-link">
          <span>{title[lang]}</span>
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
