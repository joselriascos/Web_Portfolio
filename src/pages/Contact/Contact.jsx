import './Contact.css'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { ContactLinks } from '../../Components/ContactLinks/ContactLinks'

export default function Contact() {
  return (
    <ObservedAnimatedComponent>
      <div className="contact-container">
        <ContactLinks />
      </div>
    </ObservedAnimatedComponent>
  )
}
