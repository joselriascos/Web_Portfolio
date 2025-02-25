import './ContactLinks.css'
import { LinkedinIcon, GithubIcon, WhatsappIcon, MailIcon } from '../Icons'
import { ContactLink } from './ContactLink'

export function ContactLinks() {
  return (
    <div className="contact-links">
      <ContactLink
        to="https://www.linkedin.com/in/jose-luis-riascos-cubillos-584367268/"
        icon={<LinkedinIcon />}
        label="LinkedIn"
        color="#0864c1"
      />
      <ContactLink
        to="https://github.com/joselriascos"
        icon={<GithubIcon />}
        label="GitHub"
        color="#fdfdfd"
      />
      <ContactLink
        to="https://wa.me/3218797465"
        icon={<WhatsappIcon />}
        label="WhatsApp"
        color="#0cc143"
      />
      <ContactLink
        to="mailto:joseluis.riascos10@gmail.com"
        icon={<MailIcon />}
        label="Email"
        color="#facddd"
        newTab={false}
      />
      <ContactLink
        to="#"
        icon={<MailIcon />}
        label="Email 2"
        color="#facddd"
        newTab={false}
      />
    </div>
  )
}
