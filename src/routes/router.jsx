import { createBrowserRouter } from 'react-router'
import App from '../App'
import Home from '../pages/Home'
import AboutMe from '../pages/AboutMe/AboutMe'
import Contact from '../pages/Contact/Contact'
import Project from '../pages/Project'
import Error404 from '../pages/404/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'project/:projectId',
        element: <Project />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
])
