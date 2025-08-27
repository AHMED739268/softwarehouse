import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import FeaturesPage from './pages/FeaturesPage2'
import PricingPage from './pages/PricingPage'
import Contact from './pages/Contact'
import Solution from './pages/Solution'
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Solution" element={<Solution />} />
        {/* <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Route>
    </Routes>
  )
}
