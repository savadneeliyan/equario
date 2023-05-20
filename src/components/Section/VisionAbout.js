import React from 'react'
import styled from 'styled-components'
import Image from '../common/Image/Image'

function VisionAbout() {
  return (
    <Section>
        <Heading>My profile</Heading>
        <Wrapper>
            <div>

                <Description>I am an accomplished global business leader with experience in multinational organisations and executive leadership and management positions at SABMiller plc, Travelex, and Deloitte. I have extensive board experience at global and market levels. I am an Independent Non-Executive Director on the board of directors for Grant Thornton (UK) and Great Western Hospitals NHS Foundation Trust.</Description>

                <Description>I am a qualified Chartered Accountant specialising in Finance, Strategy, Business Planning, Risk Management, Audit, and Business Transformation and change grounded in 25+ years of first-hand experience in the corporate world.</Description>

                <Description>I am known for my ability to lead global teams through diversity and inclusion, understanding the importance of empathy in collaborative work with people in matrix organisations. I was nominated 18th out of 100 LGBTQ+ leaders in the Financial Times in 2014.</Description>

                <Description>Helping people through coaching and mentoring has been common thread across my all areas of my career and I have a passion to help people through their journeys.</Description>

            </div>
            <Image src="/assets/images/Rectangle82.jpg" />
        </Wrapper>
    </Section>
  )
}

export default VisionAbout


const Section = styled.div`
    background: linear-gradient(to left, #E20001 34.35%, #fff 34.35%);
    /* height: 917px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 160px 0;
`
const Wrapper = styled.div`
    max-width: 1581px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* margin: auto; */
    gap:60px;
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
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 35px;
    color: #737373;
    max-width: 754px;
    margin-top: 30px;
    margin-bottom: 30px;
`
