import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    document.title = lang === 'en' ? 'Web Portfolio' : 'Portafolio Web'

    return () => (document.title = 'Web Portfolio')
  }, [lang])

  useEffect(() => {
    const handleResize = () => setDeviceWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AppContext.Provider
      value={{ lang, toggleLang, deviceWidth }}
    >
      {children}
    </AppContext.Provider>
  )
}
