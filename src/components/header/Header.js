import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

      }, [])

    const [state,setState] = useState(false)
    
    const handleClick = ()  =>{
        setState(!state)
    }

  return (
    <Wrapper>
        <Link to="/">
            <img src="/assets/images/logo.png" alt="" />
        </Link>
        <RightDiv>
            <Contact>
                <ContactItemsHead>Mobile : 
                <Link to="Tel:+44 (0) 7920085439"><ContactItems>+44 (0) 7920085439</ContactItems></Link>
                </ContactItemsHead>
                <ContactItemsHead>E-mail: 
                <Link to="mailto:faried@equarius8.com"><ContactItems>faried@equarius8.com</ContactItems></Link>
                </ContactItemsHead>
            </Contact>
            <Ham onClick={handleClick} width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6991 2.44653H46.3918M2.6991 17.4857H46.3918M2.6991 32.5249H46.3918" stroke="white" stroke-width="3.79937" stroke-linecap="round"/>
            </Ham>
        </RightDiv>

        {state && <Menu>
            <Svg  onClick={handleClick} width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/Svg">
                <path d="M47.25 15.75L15.75 47.25" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.75 15.75L47.25 47.25" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
            <div>
                <List>
                    <ListItem to="/">Home</ListItem>
                    <ListItem to="/purpose">Our Core Purpose</ListItem>
                    <ListItem to="/service" >Our Services</ListItem>
                    <ListItem to="/about" >About Me</ListItem>
                    <ListItem to="/coaching" >Why Coaching?</ListItem>
                    <ListItem to="/result" >Result Mechanism</ListItem>
                    <ListItem to="/testimonials" >Testimonials</ListItem>
                    <ListItem to="/contact" >Contact Us</ListItem>
                </List>
            </div>
        </Menu>}
    </Wrapper>
  )
}

export default Header

const Menu = styled.div`
    height: 100vh;
    background-color: #1E3B97;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    /* display: none; */
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Ham = styled.svg`
    cursor: pointer;
`
const Svg = styled.svg`
    position: absolute;
    right:50px;
    top:50px;
    cursor: pointer;
`

const Wrapper = styled.div`
    max-width: 1747px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    gap:40px;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
`
const RightDiv = styled.div`
    align-items: center;
    display: flex;
    gap: 40px;
    color: #fff;
`
const Contact = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    color: #fff;
    `
const ContactItemsHead = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12.6646px;
    line-height: 15px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    `
const ContactItems = styled.h2`
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 21.5297px;
    line-height: 25px;
    color: #fff;
`
const List = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1090px;
    column-gap: 90px;
    row-gap: 30px;
    margin: auto;
`
const ListItem = styled(Link)`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 64px;
    list-style-type: none;
    color:#fff;
`