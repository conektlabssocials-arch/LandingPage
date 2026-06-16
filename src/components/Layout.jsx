import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'

const SCREEN_LABELS = {
  '/': 'Home',
  '/services': 'Services',
  '/work': 'Work',
  '/coverage': 'Coverage',
  '/contact': 'Contact',
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const screenLabel = SCREEN_LABELS[pathname] || 'Conekt Ads'

  useEffect(() => {
    document.body.setAttribute('data-screen-label', screenLabel)
  }, [screenLabel])

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}
