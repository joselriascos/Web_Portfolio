import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    document.title = lang === 'en' ? 'Web Portfolio' : 'Portafolio Web'
    window.localStorage.setItem('lang', lang)

    return () => {
      document.title = 'Web Portfolio'
      window.localStorage.removeItem('lang')
    }
  }, [lang])

  return (
    <AppContext.Provider
      value={{ lang, toggleLang, isMenuOpen, toggleIsMenuOpen }}
    >
      {children}
    </AppContext.Provider>
  )
}
