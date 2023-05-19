import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Wrapper>
        <img src="/assets/images/logo.png" alt="" />
        <RightDiv>
            <Contact>
                <ContactItemsHead>Mobile : 
                <a href=""><ContactItems>+44 (0) 7920085439</ContactItems></a>
                </ContactItemsHead>
                <ContactItemsHead>E-mail: 
                <a href=""><ContactItems>faried@equarius8.com</ContactItems></a>
                </ContactItemsHead>
            </Contact>
            <svg width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6991 2.44653H46.3918M2.6991 17.4857H46.3918M2.6991 32.5249H46.3918" stroke="white" stroke-width="3.79937" stroke-linecap="round"/>
            </svg>
        </RightDiv>

        <Menu>
            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.25 15.75L15.75 47.25" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.75 15.75L47.25 47.25" stroke="white" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Our Core Purpose</li>
                    <li>Our Services</li>
                    <li>About Me</li>
                    <li>Why Coaching?</li>
                    <li>Result Mechanism</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </Menu>
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
    display: none;
    z-index: 3;
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