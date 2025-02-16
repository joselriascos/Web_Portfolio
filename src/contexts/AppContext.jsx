import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    document.title = lang === 'en' ? 'Web Portfolio' : 'Portafolio Web'

    return () => (document.title = 'Web Portfolio')
  }, [lang])

  return (
    <AppContext.Provider value={{ lang, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}
