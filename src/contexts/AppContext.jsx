import { createContext, useEffect, useState, useMemo } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [lang, setLang] = useState(window.localStorage.getItem('lang') || 'en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)

  const isTouch = useMemo(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }, [window, navigator])

  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    window.localStorage.setItem('lang', lang)

    return () => window.localStorage.removeItem('lang')
  }, [lang])

  // Detects changes in the window's width
  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AppContext.Provider
      value={{
        lang,
        toggleLang,
        isMenuOpen,
        toggleIsMenuOpen,
        deviceWidth,
        isTouch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
