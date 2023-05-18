import React from 'react'
import Button from '../common/button/Button'
import Image from '../common/Image/Image'
import styled from 'styled-components'
import Card from '../Card/Card'

function Service() {
  return (
    <Section>
        <Heading>Our Services</Heading>
        <Wrapper>
            <div>
                <CardGrid>
                    <Card bg/>
                    <Card bg/>
                    <Card bg/>
                    <Card bg/>
                </CardGrid>
                <Button link="/home"/>
            </div>
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
`
const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* margin: auto; */
    gap:40px;
`

const CardGrid = styled.h1`
    display: grid;
    grid-template-columns: 300px 300px;
    margin-bottom: 70px;
    margin-top: 60px;
    gap: 50px;
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
