import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CorePurpose from '../Pages/CorePurpose'
import OurService from '../Pages/OurService'
import AboutMe from '../Pages/AboutMe'
import HomePage from '../Pages/HomePage'
import Results from '../Pages/Results'
import Testimonials from '../Pages/Testimonials'
import Coaching from '../Pages/Coaching'
import ContactPage from '../Pages/ContactPage'

function Router() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/purpose" element={<CorePurpose/>} />
      <Route path="/service" element={<OurService/>} />
      <Route path="/about" element={<AboutMe/>} />
      <Route path="/result" element={<Results/>} />
      <Route path="/coaching" element={<Coaching/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
    </Routes>

  )
}

export default Router