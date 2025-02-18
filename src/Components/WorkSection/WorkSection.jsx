import './WorkSection.css'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'

export function WorkSection() {
  return (
    <section className="work-section">
      <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
        <div className="example" />
      </ObservedAnimatedComponent>

      <ObservedAnimatedComponent classIfVisible="put-closer" threshold={0}>
        <div className="example" />
      </ObservedAnimatedComponent>
    </section>
  )
}
