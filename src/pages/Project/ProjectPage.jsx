import './ProjectPage.css'
import { useNavigate, useParams } from 'react-router'
import { projects } from '../../mocks/projects.json'
import { useAppContext } from '../../hooks/useAppContext'
import { useEffect } from 'react'
import { scrollTop } from '../../utils/functions'

export default function Project() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const { lang } = useAppContext()
  const selectedProject = projects.find(
    (project) => project.id === parseInt(projectId)
  )

  useEffect(() => {
    if (!selectedProject) navigate('/404')
  }, [selectedProject])

  useEffect(() => scrollTop(), [])

  return (
    <div
      className="project-container"
      style={{ display: 'grid', placeContent: 'center' }}
    >
      <h1
        style={{
          color: 'var(--white)',
          fontSize: '4em',
          fontWeight: '400',
          textAlign: 'center',
        }}
      >
        Project:
      </h1>
      <p
        style={{
          color: 'var(--white)',
          fontSize: '2em',
          fontWeight: '400',
          textAlign: 'center',
        }}
      >
        {selectedProject?.title[lang]}
      </p>
    </div>
  )
}
