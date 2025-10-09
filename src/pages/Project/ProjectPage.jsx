import './ProjectPage.css'
import { useNavigate, useParams } from 'react-router'
import { projects } from '../../mocks/projects.json'
import { useAppContext } from '../../hooks/useAppContext'
import { useEffect, useRef, useState } from 'react'
import { scrollTop } from '../../utils/functions'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { IL18N } from '../../utils/consts.jsx'
import { GoBack, GithubIcon, VisitPage } from '../../Components/Icons'

export default function Project() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { lang, isTouch } = useAppContext()
  const il18n = IL18N[lang]
  const initialHistoryLength = useRef(window.history.length)
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  const selectedProject = projects.find(
    (project) => project.id === parseInt(projectId)
  )

  useEffect(() => scrollTop(), [])

  useEffect(() => {
    if (isContentLoaded && isTouch && selectedProject.iframeConflict) {
      alert(il18n.mobileSuggestion)
    }
  }, [isTouch, selectedProject, isContentLoaded])

  useEffect(() => {
    if (!selectedProject) navigate('/404')
  }, [selectedProject])

  const goBack = () => {
    const steps = initialHistoryLength.current - window.history.length - 1
    window.history.go(steps)
  }

  if (!selectedProject) {
    return null
  }

  return (
    <ObservedAnimatedComponent threshold={0} classIfVisible="fade-in">
      <div
        className="project-container"
        onLoad={() => setIsContentLoaded(true)}
      >
        <div className="project-title-container">
          <div onClick={() => goBack()}>
            <GoBack />
          </div>
          <h1>{il18n.project}:</h1>
          <p>{selectedProject?.title[lang]}</p>
        </div>
        <div className="project-description-container">
          <p>{selectedProject?.description[lang]}</p>
          <iframe src={selectedProject.site_url}></iframe>
        </div>
        <div className="project-links">
          <a href={selectedProject.github_url} target="_blank">
            <GithubIcon />
          </a>
          <a href={selectedProject.site_url} target="_blank">
            <VisitPage />
          </a>
        </div>
        <div className="project-tools-container">
          <h2>{il18n.developedWith}:</h2>
          <div className="tools">
            {selectedProject.tools.map((tool) => (
              <span key={tool} className="tool">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
