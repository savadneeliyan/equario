import React from 'react'
import Image from '../common/Image/Image'
import styled from 'styled-components'
import Card from '../Card/Card'
import ButtonRound from '../common/button/ButonRound'

function Coaching() {
  return (
    <Section>
        <WrapperTop>
            <WrapperLeft>
                <Title>Why Coaching?</Title>
                <Description>Coaching and mentoring can significantly impact the professional development of diverse professionals and executives. Some of the benefits of coaching and mentoring include the following:</Description>
            </WrapperLeft>
        </WrapperTop>
        <Wrapper>
            <Image src="/assets/images/Rectangle81.jpg"/>
            <CardGrid>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <ButtonRound/>
            </CardGrid>
        </Wrapper>
    </Section>
  )
}

export default Coaching

const Section = styled.div`
    background: linear-gradient(to left, #E20001 65.7%, #FFD300 65.7%);
    padding-bottom: 190px;
    padding-top: 120px;
`

const WrapperTop = styled.div`
    max-width: 1480px;
    margin: auto;
    margin-bottom: 80px;
`    
const WrapperLeft = styled.div`
    margin-left: 30%;
    max-width: 657px;
`


const Title = styled.div`
    font-family: 'mediumFont';
    font-weight: 600;
    font-size: 65px;
    line-height: 94px;
    color: #fff;
`
    
const Description = styled.div`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 34px;
    color: #fff;
    margin-top: 18px;
`
    
const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
`

const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    gap:110px;
`