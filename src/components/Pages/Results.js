import React from 'react'
import Header from '../header/Header'
import PageBanner from '../common/Banner/PageBanner'
import Footer from '../Footer/Footer'
import ResultListing from '../ListBanner/ResultListing'
import Chart from '../Section/Chart'

function Results() {
  return (
    <>
        <Header/>
        <PageBanner title="Results Mechanism"/>
        <ResultListing/>
        <Chart/>
        <Footer/>
    </>
  )
}

export default Results

