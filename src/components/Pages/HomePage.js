import React from 'react'
import Header from '../header/Header'
import Banner from '../banner/banner'
import ListBanner from '../ListBanner/ListBanner'
import Service from '../Sevice/Service'
import Coaching from '../Coaching/Coaching'
import Slide from '../SlideSection/Slide'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function HomePage() {
  return (
    <>
        <Header/>
        <Banner/>
        <ListBanner/>
        <Service/>
        <Coaching/>
        <Slide />
        <Contact/>
        <Footer/>
    </>
  )
}

export default HomePage