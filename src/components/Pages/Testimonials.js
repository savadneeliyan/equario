import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import Comments from '../Section/Comments'

function Testimonials() {
  return (
    <>
        <Header/>
        <PageBanner title="Testimonials"/>
        <Comments/>
        <Footer/>
    </>
  )
}

export default Testimonials