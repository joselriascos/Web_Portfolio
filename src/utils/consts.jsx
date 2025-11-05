import { FaCss3Alt, FaHtml5, FaPython, FaReact, FaGitAlt } from 'react-icons/fa'
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNodejsLine,
} from 'react-icons/ri'
import { BiLogoTypescript } from 'react-icons/bi'
import { SiDjango, SiMongodb } from 'react-icons/si'
import { IoLogoGithub } from 'react-icons/io'
import { GrMysql } from 'react-icons/gr'

export const IL18N = {
  en: {
    language: 'EN',
    myWork: 'My work',
    aboutMe: 'About me',
    contact: 'Contact',
    subtitle: 'Web Developer',
    projects: 'Projects',
    skills: 'Skills',
    aboutMeContent:
      "Hi! I'm Jose Riascos, a civil engineer who discovered in programming a way to make everyday tasks simpler and more efficient. It all started by automating small processes, and before I knew it, I had found my true passion.\n\nToday, I work in web development as a fullstack developer, with a special focus on frontend. I love turning ideas into clear, useful, and enjoyable interfaces, paying attention to every detail so that technology feels approachable and intuitive.\n\nI consider myself a curious, adaptable person who is always learning. I enjoy new challenges and believe that technology can transform realities when it's created with empathy and purpose.",
    downloadCV: 'Download my CV',
    pageNotFound: 'Page not found',
    goBackHome: 'Go back home',
    email: 'Email',
    phone: 'Phone',
    contactMe: 'Contact me',
    callMe: 'Call me',
    developedWith: 'Developed with',
    project: 'Project',
    mobileSuggestion:
      'If you are viewing this on a phone, I recommend opening the project in a new tab to better view its full content.',
  },
  es: {
    language: 'ES',
    myWork: 'Mi trabajo',
    aboutMe: 'Sobre mí',
    contact: 'Contacto',
    subtitle: 'Desarrollador Web',
    projects: 'Proyectos',
    skills: 'Herramientas',
    aboutMeContent:
      '¡Hola! Soy Jose Riascos, un ingeniero civil que descubrió en la programación una forma de hacer más simples y eficientes las cosas del día a día. Todo comenzó automatizando pequeñas tareas, y sin darme cuenta, terminé encontrando mi verdadera pasión.\n\nHoy me dedico al desarrollo web como fullstack developer, con un enfoque especial en el frontend. Me encanta convertir ideas en interfaces claras, útiles y agradables, cuidando cada detalle para que la tecnología se sienta cercana e intuitiva.\n\nMe considero una persona curiosa, adaptable y en constante aprendizaje. Disfruto los nuevos retos y creo que la tecnología puede transformar realidades cuando se crea con empatía y propósito.',
    downloadCV: 'Descarga mi CV',
    pageNotFound: 'Página no encontrada',
    goBackHome: 'Volver al inicio',
    email: 'Correo',
    phone: 'Teléfono',
    contactMe: 'Contáctame',
    callMe: 'Llámame',
    developedWith: 'Desarrollado con',
    project: 'Proyecto',
    mobileSuggestion:
      'Si estás viendo esto desde un teléfono, es recomendable que abras el proyecto en una nueva pestaña para poder visualizar mejor su contenido completo.',
  },
}

export const LOGOS = [
  {
    node: <FaCss3Alt />,
    title: 'CSS',
    href: 'https://developer.mozilla.org/docs/Web/CSS',
  },
  {
    node: <FaHtml5 />,
    title: 'HTML',
    href: 'https://developer.mozilla.org/docs/Web/HTML',
  },
  {
    node: <RiJavascriptFill />,
    title: 'JavaScript',
    href: 'https://developer.mozilla.org/docs/Web/JavaScript',
  },
  {
    node: <BiLogoTypescript />,
    title: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    node: <FaPython />,
    title: 'Python',
    href: 'https://www.python.org/',
  },
  {
    node: <SiDjango />,
    title: 'Django',
    href: 'https://www.djangoproject.com/',
  },
  {
    node: <FaReact />,
    title: 'React',
    href: 'https://react.dev/',
  },
  {
    node: <RiTailwindCssFill />,
    title: 'Tailwind CSS',
    href: 'https://tailwindcss.com/',
  },
  {
    node: <FaGitAlt />,
    title: 'Git',
    href: 'https://git-scm.com/',
  },
  {
    node: <IoLogoGithub />,
    title: 'GitHub',
    href: 'https://github.com/',
  },
  {
    node: <RiNodejsLine />,
    title: 'Node.js',
    href: 'https://nodejs.org/',
  },
  {
    node: <SiMongodb />,
    title: 'MongoDB',
    href: 'https://www.mongodb.com/',
  },
  {
    node: <GrMysql />,
    title: 'MySQL',
    href: 'https://www.mysql.com/',
  },
]

export const MOBILE_WIDTH = 680

export const DOWNLOAD_CV_URL = {
  en: 'https://drive.google.com/uc?id=1B5M4Fh7lDY_-W8s-vUWUbufs_zPU8WlR&export=download',
  es: 'https://drive.google.com/uc?id=1IuVmiOG1EFtyzEw5CFLn0d9aBUnJE8OW&export=download',
}
