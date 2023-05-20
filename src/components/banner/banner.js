import React from 'react'
import Button from '../common/button/Button'
import styled from 'styled-components'
import Image from '../common/Image/Image'

function Banner() {
    const ScrollDown = ()=>{
        window.scrollTo({top: 1100, left: 0, behavior: 'smooth'});
    }
  return (
    <Section>
        <Wrapper data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div>
                <Heading>Empower Yourself and Live your Authentic Life</Heading>
                <Description>Empower Yourself and Live your Authentic Life Now and Unlock and Activate Your Leadership Potential</Description>
                <Button title="Book an Appoinment" link="/contact"/>
            </div>
            <Image  name="Faried Chopdat" src="/assets/images/Rectangle6.jpg"/>
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

export default Banner


const Section = styled.div`
    background: linear-gradient(to left, #1E3B97 43.7%, #ffffff 43.7%);
    height: 1166px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    gap:40px;
`

const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 84.4693px;
    line-height: 84px;
    color:#1E4A97;
    max-width: 647px;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 22.7962px;
    line-height: 35px;
    color: #787878;
    max-width: 496px;
    margin-top: 35px;
    margin-bottom: 60px;
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
`
const Svg = styled.svg`
    transform: rotate(90deg);
`