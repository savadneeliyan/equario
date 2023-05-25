import React from 'react'
import styled from 'styled-components'
import BannerImage from '../Image/BannerImage'

function PageBanner({title, full}) {
    const ScrollDown = ()=>{
        window.scrollTo({top: 600, left: 0, behavior: 'smooth'});
    }
  return (
    <Section full={full}  data-aos="fade-up">
        <Wrapper full={full}>
            <Div>
                <Heading>{ title ? title :"Heading" }</Heading>
            </Div>
            <BannerImage  src="/assets/images/Rectangle6.jpg"/>
            <Scroll onClick={ScrollDown}>
                <Svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.69934 13.838L8.74611 20.8848L15.7929 13.838M8.74611 1.14916L8.74611 20.6874" stroke="white" stroke-width="1.51975" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
                Scroll down
            </Scroll>
        </Wrapper>
    </Section>
  )
}

export default PageBanner


const Section = styled.div`
    background: linear-gradient(to left, #1E3B97 44%, #ffffff 44%);
    height:${(props) => props.full ? "730px" : "613px" } ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    @media (max-width: 992px) {
        height: auto;
        padding-top: 220px;
    }
    @media (max-width: 1600px) {
        background: linear-gradient(to left, #1E3B97 720px, #ffffff 43.7%);
    }
    @media (max-width: 1200px) {
        background: linear-gradient(to left, #1E3B97 600px, #ffffff 43.7%);
    }
    @media (max-width: 992px) {
        background: linear-gradient(to top, #1E3B97 35%, #ffffff 10%);
        padding-bottom: 30px;
    }
`
const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    margin: auto;
    gap:40px;
    margin-bottom: ${(props) => props.full ? "0px" : "-128px" } ;
    @media (max-width: 1480px) {
        padding: 0 15px;
    }
    @media (max-width: 992px) {
        align-items: start;
        flex-direction: column;
    }
`
const Div = styled.div`
    max-width: 677px;
    width: 100%;
`

const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 84.4693px;
    line-height: 84px;
    color:#1E4A97;
    max-width: 500px;
    /* max-width: 647px; */
    @media (max-width: 1480px) {
        font-size: 64px;
        line-height: 64px;
    }
`


const Scroll = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    width: 170px;
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.02em;
    position: absolute;
    right: 50px;
    transform: rotate(270deg);
    bottom: 150px;
    cursor: pointer;
    @media (max-width: 1500px) {
        right: 0;
        display: none;
    }
`
const Svg = styled.svg`
    transform: rotate(90deg);
`