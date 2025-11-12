import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import App from './App'
import CaseStudy from './pages/CaseStudy'
import './styles.css'

import SiteHeader from './components/SiteHeader'
import ChatbotSidebar from './components/ChatbotSidebar'

function RootLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    const scroller = document.querySelector('.app-main')
    if (scroller) scroller.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return (
    <div className="app-shell">
      <div className="app-main">
        <SiteHeader />
        <Outlet />
      </div>
      <ChatbotSidebar />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: '/:id', element: <CaseStudy /> },
      { path: '*', element: <App /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
