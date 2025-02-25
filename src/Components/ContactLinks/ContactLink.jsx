import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'

export function ContactLink({ to, color, label, icon, newTab = true }) {
  return (
    <ObservedAnimatedComponent classIfVisible="appear" threshold={0}>
      <a
        href={to}
        target={newTab ? '_blank' : '_self'}
        className="link"
        style={{ '--color': color }}
      >
        {icon}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="title">{label}</span>
      </a>
    </ObservedAnimatedComponent>
  )
}
