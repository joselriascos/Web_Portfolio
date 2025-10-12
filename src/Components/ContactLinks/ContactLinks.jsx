import './ContactLinks.css'
import {
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
  MailIcon,
  PhoneIcon,
} from '../Icons'
import { ContactLink } from './ContactLink'
import { useAppContext } from '../../hooks/useAppContext'
import { IL18N } from '../../utils/consts.jsx'

export function ContactLinks() {
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  const LINKS = [
    {
      to: 'https://github.com/joselriascos',
      icon: <GithubIcon />,
      label: 'GitHub',
      color: '#fdfdfd',
    },
    {
      to: 'mailto:joseluis.riascos10@gmail.com',
      icon: <MailIcon />,
      label: il18n.email,
      color: '#facddd',
      newTab: false,
    },
    {
      to: 'tel:573218797465',
      icon: <PhoneIcon />,
      label: il18n.callMe,
      color: '#7adec2',
      newTab: false,
      bigger: true,
    },
    {
      to: 'https://www.linkedin.com/in/joselriascos/',
      icon: <LinkedinIcon />,
      label: 'LinkedIn',
      color: '#0864c1',
    },
    {
      to: 'https://wa.me/3218797465',
      icon: <WhatsappIcon />,
      label: 'WhatsApp',
      color: '#0cc143',
    },
  ]

  return (
    <div className="contact-links">
      {LINKS.map((link, index) => {
        return (
          <ContactLink
            key={index}
            to={link.to}
            icon={link.icon}
            label={link.label}
            color={link.color}
            newTab={link.newTab && link.newTab}
            bigger={link.bigger && link.bigger}
          />
        )
      })}
    </div>
  )
}
