import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

import Solution from './pages/Solution'
import WhyZid from './pages/whyzid'
export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/whyzid" element={<WhyZid />} />
        {/* <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Route>
    </Routes>
  )
}
