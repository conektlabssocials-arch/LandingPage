import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Coverage from './pages/Coverage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
