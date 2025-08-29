import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

import Solution from './pages/Solution'
import WhyZid from './pages/whyzid'
export default function Routess() {
  return (
   <Routes>
      
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} />  */}
   
        <Route path="/Solution" element={<Solution />} />
        <Route path="/whyzid" element={<WhyZid />} />

    </Routes>
  )
}