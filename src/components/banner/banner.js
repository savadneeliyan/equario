import React from 'react'
import Button from '../common/button/Button'
import styled from 'styled-components'
import Image from '../common/Image/Image'

function Banner() {
  return (
    <Section>
        <Wrapper>
            <div>
                <Heading>Empower Yourself and Live your Authentic Life</Heading>
                <Description>Empower Yourself and Live your Authentic Life Now and Unlock and Activate Your Leadership Potential</Description>
                <Button title="Book an Appoinment" link="/home"/>
            </div>
            <Image src="/assets/images/Rectangle6.jpg"/>
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