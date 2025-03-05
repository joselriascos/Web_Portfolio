import './WorkSection.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { projects } from '../../mocks/projects.json'
import { Project } from '../Project/Project'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts'
import { Carousel } from '../Carousel/Carousel'

const projectsDouble = projects.concat(projects)
// const projectsDouble = products

export function WorkSection() {
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  return (
    <section className="work-section">
      <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
        <div className="section projects-section">
          <h1>&lt;{il18n.projects}&gt;</h1>
          <div className="projects-grid">
            {projectsDouble.map((project, index) => {
              return <Project project={project} key={index} />
            })}
          </div>
          <h1 className="close-tag">&lt;/{il18n.projects}&gt;</h1>
        </div>
      </ObservedAnimatedComponent>

      <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
        <div className="section tools-section">
          <h1>&lt;Tecnologies&gt;</h1>
          <Carousel />
          <h1 className="close-tag">&lt;/Tecnologies&gt;</h1>
        </div>
      </ObservedAnimatedComponent>
    </section>
  )
}
