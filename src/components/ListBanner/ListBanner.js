import React from 'react'
import Image from '../common/Image/Image'
import styled from 'styled-components'
import Button from '../common/button/Button'

function ListBanner() {
  return (
    <Section  data-aos="fade-up">
        <Wrapper>
            <Image src="/assets/images/Rectangle8.jpg"/>
            <div>
                <Heading>Unleash Your Inner Superhero</Heading>
                <Description>Reimagine and Elevate Your Professional Game with Executive Coaching</Description>
                    <ListContainer>
                        <List>Activate Your Superpowers</List>
                        <List>Liberate yourself from Limiting Beliefs</List>
                        <List>Live your Authentic Life</List>
                        <List>Amplify the Power of the Group</List>
                    </ListContainer>
                <Button link="/home"/>
            </div>
        </Wrapper>
    </Section>
  )
}

export default ListBanner

const Section = styled.div`
    background: linear-gradient(to left, #FFD300 65.7%, #E20001 65.7%);
    height: 917px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 992px) {
        background: linear-gradient(to top, #FFD300 65%, #E20001 65%);
        padding: 50px 0;
        height: auto;
    }
`
const Wrapper = styled.div`
    max-width: 1480px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    gap:40px;
    @media (max-width: 1480px) {
        padding: 0 15px;
    }
    @media (max-width: 992px) {
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
`

const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 65px;
    line-height: 66px;
    color:#272101;
    max-width: 524px;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 22.7962px;
    line-height: 35px;
    color: #272101;
    max-width: 529px;
    margin-top: 21px;
    margin-bottom: 21px;
`
const ListContainer = styled.ul`
    margin-bottom: 50px;
    padding-left: 25px;
`
const List = styled.li`
    color: #272101;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    padding-left: 20px;
    font-size: 21.5297px;
    line-height: 35px;
    list-style-image: url(/assets/Icons/List.svg);
`