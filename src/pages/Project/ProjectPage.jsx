import './ProjectPage.css'
import { useNavigate, useParams } from 'react-router'
import { projects } from '../../data/projects.json'
import { useAppContext } from '../../hooks/useAppContext'
import { useEffect, useState } from 'react'
import { scrollTop } from '../../utils/functions'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { IL18N } from '../../utils/consts.jsx'
import {
  GoBack,
  GithubIcon,
  VisitPage,
  ArrowIcon,
} from '../../Components/Icons'
import { RiArrowDownDoubleLine } from 'react-icons/ri'

export default function Project() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { lang, isTouch } = useAppContext()
  const il18n = IL18N[lang]
  const [isContentLoaded, setIsContentLoaded] = useState(false)

  const selectedProject = projects.find(
    (project) => project.id === parseInt(projectId)
  )

  useEffect(() => scrollTop({ behavior: 'instant' }), [selectedProject])

  useEffect(() => {
    if (isContentLoaded && isTouch && selectedProject.iframeConflict) {
      alert(il18n.mobileSuggestion)
    }
  }, [isTouch, selectedProject, isContentLoaded])

  useEffect(() => {
    if (!selectedProject) navigate('/404')
  }, [selectedProject])

  const goBack = () => {
    navigate('/')
  }

  const previusProject = () => {
    const previusId =
      selectedProject.id - 1 === 0 ? projects.length : selectedProject.id - 1
    navigate(`/project/${previusId}`)
  }

  const nextProject = () => {
    const nextId =
      selectedProject.id + 1 > projects.length ? 1 : selectedProject.id + 1
    navigate(`/project/${nextId}`)
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
          <div onClick={goBack}>
            <GoBack />
          </div>
          <h1>{il18n.project}:</h1>
          <p>{selectedProject?.title[lang]}</p>
          <RiArrowDownDoubleLine />
        </div>

        <div className="project-description-container">
          <p>{selectedProject?.description[lang]}</p>

          <div className="frame-container">
            <div className="change-project previus" onClick={previusProject}>
              <ArrowIcon />
            </div>
            {!selectedProject.iframeBlocked && (
              <iframe
                key={selectedProject.id}
                src={selectedProject.site_url}
                title={selectedProject.title}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              ></iframe>
            )}
            <div className="change-project next" onClick={nextProject}>
              <ArrowIcon />
            </div>
          </div>
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
