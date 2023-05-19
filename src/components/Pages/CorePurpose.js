import React from 'react'
import PageBanner from '../common/Banner/PageBanner'
import ListSection from '../ListBanner/ListSection'
import Footer from '../Footer/Footer'
import Header from '../header/Header'

function CorePurpose() {
  return (
    <>
        <Header/>
        <PageBanner title="Our Core Purpose"/>
        <ListSection/>
        <Footer/>
    </>
  )
}

export default CorePurpose