import './ContactInfo.css'
import { PhoneIcon, MailIcon } from '../Icons'
import { ObservedAnimatedComponent } from '../ObservedAnimatedComponent'

export function ContactInfo() {
  return (
    <ObservedAnimatedComponent classIfVisible='appear' threshold={0}>
      <div className="contact-info">
        <div>
          <PhoneIcon />
          <p>(+57) 321 8797465</p>
        </div>
        <div>
          <MailIcon />
          <p>joseluis.riascos10@gmail.com</p>
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
