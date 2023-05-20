import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {

    const LinkItem = styled(Link)`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
    `   

  return (
    <>
        <Section>
            <Wrapper>
                <img src="/assets/images/FooterImg.png" alt="" />
                <div>
                    <ContactItemsHead>Mobile : 
                        <Link to="mailto:faried@equarius8.com"><ContactItems>+44 (0) 7920085439</ContactItems></Link>
                    </ContactItemsHead>
                    <ContactItemsHead>E-mail: 
                        <Link to="mailto:faried@equarius8.com"><ContactItems>faried@equarius8.com</ContactItems></Link>
                    </ContactItemsHead>
                </div>
                <div>
                    <ContactItemsHead>Quick Links</ContactItemsHead>
                    <ListItem>
                        <LinkItem to="/">Home</LinkItem>
                        <LinkItem to="/about">About Us</LinkItem>
                        <LinkItem to="/service">Services</LinkItem>
                        <LinkItem to="/coaching">Why Coaching</LinkItem>
                        <LinkItem to="/result">Results Mechanism</LinkItem>
                        <LinkItem to="/testimonials">Testimonials</LinkItem>
                        <LinkItem to="/contact">Contact Us</LinkItem>
                   </ListItem>
                   
                </div>
                <div>
                    <ContactItemsHead>Follow Me</ContactItemsHead>
                    <Social>
                        <Link to=""><Img src="/assets/icons/Group700.svg" alt="" /></Link>
                        <Link to=""><Img src="/assets/icons/Group700.svg" alt="" /></Link>
                        <Link to=""><Img src="/assets/icons/Group700.svg" alt="" /></Link>
                        <Link to=""><Img src="/assets/icons/Group700.svg" alt="" /></Link>
                        <Link to=""><Img src="/assets/icons/Group700.svg" alt="" /></Link>
                    </Social>

                    <Button>
                        Book an Appoinment  
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/Svg"
                            >
                            <path
                                d="M2 21L21 2"
                                stroke="white"
                                stroke-width="2.63994"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M2 2H21V21"
                                stroke="white"
                                stroke-width="2.63994"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Button>
                </div>
            </Wrapper>
        </Section>
        <Copyright>
            <Title>©2021 equarius8coaching. All Rights Reserved.</Title>
        </Copyright>
    </>
  )
}

export default Footer

const Section = styled.div`
    background-color: #1E3B97 ;
    padding-top: 104px;
    padding-bottom: 60px;
    border: 1px solid #ffffff24;  
`
const Wrapper = styled.div`
    max-width: 1581px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Copyright = styled.div`
    text-align: center;
    background-color: #1E3B97 ;
    padding: 55px 0;
`
const Title = styled.h5`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 19px;
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
    color: #fff;
    `
const ContactItems = styled.h2`
    margin-top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 21.5297px;
    line-height: 25px;
    color: #fff;
    margin-bottom:20px;
    cursor: pointer;
`


const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
`
const Social = styled.div` 
    display: flex;
    gap: 20px;
    margin: 24px 0;

`
const Img = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`
const Button = styled.a`
    display: flex;
    align-items: center;
    gap: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    cursor: pointer;
`
