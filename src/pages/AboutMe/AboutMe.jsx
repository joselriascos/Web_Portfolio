import './AboutMe.css'
import portrait from '../../assets/portrait.jpeg'
import { ObservedAnimatedComponent } from '../../Components/ObservedAnimatedComponent'
import { useAppContext } from '../../hooks/useAppContext'
import { DOWNLOAD_CV_URL, IL18N } from '../../utils/consts'
import { useEffect } from 'react'
import { scrollTop } from '../../utils/functions'

export default function AboutMe() {
  const { lang } = useAppContext()
  const il18n = IL18N[lang]

  useEffect(() => scrollTop(), [])

  return (
    <ObservedAnimatedComponent threshold={0} classIfVisible="fade-in">
      <div className="about-me-container">
        <h1 className="about-me-title">{il18n.aboutMe}</h1>
        <div className="about-me-content">
          <p>{il18n.aboutMeContent}</p>
          <a href={lang === 'en' ? DOWNLOAD_CV_URL.en : DOWNLOAD_CV_URL.es}>
            {il18n.downloadCV}
          </a>
        </div>
        <div className="about-me-img">
          <img src={portrait} alt="Me" />
        </div>
      </div>
    </ObservedAnimatedComponent>
  )
}
