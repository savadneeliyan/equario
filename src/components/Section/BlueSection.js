import React from 'react'
import styled from 'styled-components'

function BlueSection() {
  return (
    <Section>
        <Wrapper>
            <Description>Whether you are a Rising Star, a Leader, a member of the LGBTQ+ or BAME community and ally or wish to apply a spiritual lens to your career, we would love to help you focus on what matters most and tap into your inner resources and strengths, transform, and overcome obstacles, and achieve prosperity and freedom to be who you are.</Description>
            <Description>At equarius8, we collaborate with like-minded coaches who focus on business, professional and executive, life, and spiritual coaching to provide holistic and tailored services to meet your needs. Our services include tailored 1:1 Coaching and Mentoring, Facilitating Group Workshops, and Group Coaching.</Description>
            <Title>So, if you want to:</Title>
            <ListContainer>
                <List>Gain clarity in these times of confusion, chaos, and uncertainty; focus on what matters most to you to succeed and triumph in your career or business.</List>
                <List>Liberate yourself and experience the magic of expanding yourself beyond what you believe is possible.</List>
                <List>Stop leaking energy or being trapped in your anxieties and fears.</List>
                <List>Access your higher wisdom and truths and align them with your life purpose.</List>
                <List>Embrace your difference, unique gifts and superpowers and surpass conventional expectations.</List>
                <List>Be fully aware of pitfalls and risks in navigating your career and be mindful of red flags in relationships.</List>
                <List>Resolve your inner conflict and integrate mind, heart, and soul into your conscious intentions and choices.</List>
                <List>Want to be courageous and leave the paradigms of the past to move to new directions and birth new ways, processes and habits that support you.</List>
                <List>Unlock your power and leadership potential and amplify your impact.</List>
            </ListContainer>
            <Description>If you're ready to take the next step on your journey towards personal and professional growth, please don't hesitate to get in touch and book a discovery call.</Description>
        </Wrapper>
    </Section>
  )
}

export default BlueSection

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
    margin-left: 150px;
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
const Title = styled.h2`
    font-family: 'roboto-500';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 35px;
`
const ListContainer = styled.ul`
    margin-bottom: 50px;
    padding-left: 25px;
    margin-top: 50px;
`
const List = styled.li`
    color: #ffffff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    padding-left: 20px;
    font-size: 21.5297px;
    line-height: 35px;
    margin: 15px 0;
    list-style-image: url(/assets/Icons/List-white.svg);
`
