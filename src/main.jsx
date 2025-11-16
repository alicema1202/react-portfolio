import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import App from './App'
import CaseStudy from './pages/CaseStudy'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'
import './styles.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SiteHeader from './components/SiteHeader'
import ChatbotSidebar from './components/ChatbotSidebar'
import OverlayScrollbar from './components/OverlayScrollbar'

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
  <OverlayScrollbar targetSelector=".app-main" watchKey={pathname} />
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
      { path: '/about', element: <About /> },
      { path: '/resume', element: <Resume /> },
      { path: '/contact', element: <Contact /> },
      { path: '/thankyou', element: <ThankYou /> },
      { path: '/404', element: <NotFound /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
