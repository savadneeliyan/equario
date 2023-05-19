import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import Focus from './Focus'

function Coaching() {
  return (
    <>
        <Header/>
        <PageBanner title="Why Coaching?"/>
        <Focus/>
        <Footer/>
    </>
  )
}

export default Coaching