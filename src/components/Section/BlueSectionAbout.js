import React from 'react'
import styled from 'styled-components'

function BlueSectionAbout() {
  return (
    <Section>
        <Wrapper>

            <Heading>My Coaching Philosophy</Heading>
            
            <Description>Having a lived experience of feeling different and journeying with groups and businesses to experience a sense of belonging, I believe in enabling ourselves to liberate from our limiting self-beliefs, consciously transcend our challenges, and experience the freedom to be who we truly and genuinely are.</Description>
           
            <Description>My coaching philosophy is based on my values of integrity, freedom, personal power, treating people fairly and equitably, social justice, empathy, and sovereignty, that has shaped my life growing up in South Africa during a very challenging and dark time of apartheid. My approach integrates my intuition and experience as a gay and brown professional, executive, and Board Member working with diverse people worldwide.</Description>
            
            <Description>As a coach and mentor, I help create a safe and non-judgmental sanctuary to freely explore your wants, desires, and dreams and challenge your own limiting self-beliefs, ways of working, obstacles and paradigms that no longer serve us or that stands in the way of the lives you wish to live. My approach facilitates exploring and accessing your higher truths, wisdom, self-value, and unique gifts, empowering you to live as you want.</Description>
            
            <Description>My coaching approach helps you to focus on what matters most to achieve your personal and professional goals by providing simple and practical tools, resources, and support you may need to succeed. I thrive on creating a coaching relationship built on trust, mutual respect, and a shared commitment to development, growth, and personal transformation.</Description>

            <Description>I thrive on helping people connect to their authentic selves and liberate themselves to achieve the success, abundance, and prosperity they aspire to and wish for.</Description>

        </Wrapper>
    </Section>
  )
}

export default BlueSectionAbout

const Section = styled.div`
    background: #58B8B4;
    padding-top: 216px;
    padding-bottom: 144px;
    display: flex;
    justify-content: center;
    padding-top: 190px;
    color: #fff;
`
const Wrapper = styled.div`
    max-width: 1580px;
    width: 100%;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 21.53px;
    line-height: 35px;
    color: #ffffff;
    /* max-width: 529px; */
    margin-top: 30px;
    margin-bottom: 30px;
`
const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 64px;
    color:#1E3B97;
    max-width: 1580px;
    width: 100%;
    text-align: left;
    color: #fff;
`