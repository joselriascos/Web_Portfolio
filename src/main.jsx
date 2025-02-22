import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './contexts/AppContext.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
)
