import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { useAppContext } from '../../hooks/useAppContext'
import './Project.css'

export function Project({ project }) {
  // const { title, image_path } = project
  const {title, images} = project
  const { lang } = useAppContext()

  //TODO: Redirect to route to show project info
  const handleClick = () => {
    // console.log(project.title)
    const alertMsg = lang === 'en' ? 'Working on this' : 'Trabajando en esto'
    alert(alertMsg)
  }

  return (
    <ObservedAnimatedComponent
      threshold={0.1}
      classIfVisible="fade-in"
      classIfNotVisible="hidden"
    >
      <div className="project" onClick={handleClick}>
        <img src={images[0]} alt={title} />
        <div className="hidden-link">
          <span>{title}</span>
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
