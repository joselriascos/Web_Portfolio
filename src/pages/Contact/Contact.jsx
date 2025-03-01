import './Contact.css'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { ContactLinks } from '../../Components/ContactLinks/ContactLinks'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts'
import { ContactInfo } from '../../Components/ContactInfo/ContactInfo'

export default function Contact() {
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  return (
    <div className="contact-container">
      <ObservedAnimatedComponent classIfVisible='fade-in'>
        <h1>{il18n.contactMe}</h1>
      </ObservedAnimatedComponent>
      <ContactLinks />
      <ContactInfo />
    </div>
  )
}
