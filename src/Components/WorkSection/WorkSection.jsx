import './WorkSection.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'
import { projects } from '../../mocks/projects.json'
import { Project } from '../Project/Project'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N, LOGOS } from '../../utils/consts.jsx'
import { LogoLoop } from '../LogoLoop/LogoLoop'
import { Particles } from '../Particles/Particles'

export function WorkSection() {
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  const logos = LOGOS

  return (
    <section className="work-section">
      <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
        <Particles
          particleColors={['#b22cc9', '#980bde']}
          particleCount={200}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={75}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
          className="work-background"
        />
        <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
          <div className="section projects-section">
            <h1>&lt;{il18n.projects}&gt;</h1>
            <div className="projects-grid">
              {projects.map((project, index) => {
                return <Project project={project} key={index} />
              })}
            </div>
            <h1 className="close-tag">&lt;/{il18n.projects}&gt;</h1>
          </div>
        </ObservedAnimatedComponent>

        <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
          <div className="section tools-section">
            <h1>&lt;{il18n.skills}&gt;</h1>
            <div className="tools-container">
              <LogoLoop
                logos={logos}
                speed={80}
                direction="left"
                logoHeight={80}
                gap={50}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
              />
            </div>
            <h1 className="close-tag">&lt;/{il18n.skills}&gt;</h1>
          </div>
        </ObservedAnimatedComponent>
      </div>
    </section>
  )
}
