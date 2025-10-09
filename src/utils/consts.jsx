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
      'I am a self-taught software developer with a focus on web development. I am passionate about learning new technologies and continuously improving my skills. I enjoy solving problems and creating functional solutions for dynamic and challenging environments. In this portfolio you will find some of my projects, where I apply my knowledge to develop effective and efficient web experiences.',
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
      'Soy un desarrollador de software autodidacta con enfoque en desarrollo web. Me apasiona aprender nuevas tecnologías y mejorar continuamente mis habilidades. Disfruto resolviendo problemas y creando soluciones funcionales para entornos dinámicos y desafiantes. En este portafolio encontrarás algunos de mis proyectos, donde aplico mis conocimientos para desarrollar experiencias web efectivas y eficientes.',
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
