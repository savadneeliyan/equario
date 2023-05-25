import React from 'react'
import Button from '../common/button/Button'
import Image from '../common/Image/Image'
import styled from 'styled-components'
import Card from '../Card/Card'

function Service() {
  return (
    <Section  data-aos="fade-up">
        <Heading>Our Services</Heading>
        <Wrapper >
            <CardGridContainer>
                <CardGrid>
                    <Card bg/>
                    <Card bg/>
                    <Card bg/>
                    <Card bg/>
                </CardGrid>
                <Button link="/home"/>
            </CardGridContainer>
            <Image src="/assets/images/Rectangle8.jpg" />
        </Wrapper>
    </Section>
  )
}

export default Service

const Section = styled.div`
    background: linear-gradient(to left, #1E3B97 34.35%, #fff 34.35%);
    height: 917px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 1480px) {
        padding: 0 15px;
    }
    @media (max-width: 1024px) {
       height: auto;
       padding-top: 50px;
       padding-bottom: 100px;
       background: linear-gradient(to top, #1E3B97 52%, #fff 34.35%);
    }
`
const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* margin: auto; */
    gap:40px;
    @media (max-width: 1024px) {
        flex-direction: column-reverse;

    }
`

const CardGridContainer = styled.div`
    width: 44%;
    @media (max-width: 1024px) {
        width: 100%;
        max-width: 650px;
    }
`
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 70px;
    margin-top: 60px;
    gap: 7.5%;
    /* gap: 7.5%; */
`

const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 65px;
    line-height: 76px;
    color:#1E3B97;
    max-width: 1480px;
    width: 100%;
    text-align: left;
`
