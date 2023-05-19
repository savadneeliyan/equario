import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import ContactPageSection from '../Contact/ContactPageSection'

function ContactPage() {
  return (
    <>
        <Header/>
        <PageBanner full="730" title="Contact Us"/>
        <ContactPageSection/>
        <Footer/>
    </>
  )
}

export default ContactPage