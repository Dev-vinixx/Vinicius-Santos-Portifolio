import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'


import {
createBrowserRouter, RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/Vinicius-Santos-Portifolio",
    element: <Home />
  },
  {
    path: "/Vinicius-Santos-Portifolio/AboutMe",
    element: <AboutMe />
  },
  {
    path: "/Vinicius-Santos-Portifolio/Projects",
    element: <Projects />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
