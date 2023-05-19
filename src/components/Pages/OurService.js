import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import BlueSection from '../Section/BlueSection'
import Vision from '../Section/Vision'

function OurService() {
  return (
    <>
        <Header/>
        <PageBanner title="Our Services"/>
        <BlueSection/>
        <Vision/>
        <Footer/>
    </>
  )
}

export default OurService