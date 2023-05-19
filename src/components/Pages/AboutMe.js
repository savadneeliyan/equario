import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import BlueSectionAbout from '../Section/BlueSectionAbout'
import VisionAbout from '../Section/VisionAbout'
import SectionList from '../ListBanner/SectionList'

function AboutMe() {
  return (
    <>
        <Header/>
        <PageBanner title="About me"/>
        <BlueSectionAbout/>
        <VisionAbout/>
        <SectionList/>
        <Footer/>
    </>
  )
}

export default AboutMe
