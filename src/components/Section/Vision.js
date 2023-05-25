import React from 'react'
import styled from 'styled-components'
import Image from '../common/Image/Image'

function Vision() {
  return (
    <Section  data-aos="fade-up">
        <Heading>Our Services</Heading>
        <Wrapper>
            <div>
                <Description>Personalised 1:1 coaching to help Rising Stars and Future Leaders unlock their leadership potential, including career advancement and life transition plans and strategies, developing personal and professional brands, communication skills covering speaking up and having challenging conversations, networking strategies, conflict management, leading change, and work-life balance.</Description>
                <Heading>Diversity, Equity, Inclusion and Belonging</Heading>
                <Description>Customised and empathic 1:1 or group coaching to help professionals and executives who identify as part of the LGBTQ+ or BAME communities or is an ally, to transcend their challenges consciously, develop strategies to break through the 'glass ceiling', and feel empowered to bring your whole and authentic selves to work.</Description>
                <Heading>Spiritually Mindful Professionals</Heading>
                <Description>A uniquely immersive spiritual coaching and mentoring experience utilising spiritual tools, metaphors, and practices to help professionals, executives, or entrepreneurs better understand their purpose and mission to align their careers or businesses to their spiritual values and higher truths. Including assisting in providing guidance and support in areas such as mindfulness, meditation, and self-care to help entrepreneurs and professionals maintain balance and harmony.</Description>
            </div>
            <Image src="/assets/images/Rectangle82.jpg" />
        </Wrapper>
    </Section>
  )
}

export default Vision


const Section = styled.div`
    background: linear-gradient(to left, #E20001 34.35%, #fff 34.35%);
    /* height: 917px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 160px 0;
    @media (max-width: 1480px) {
        padding: 0 15px;
    }
    @media (max-width: 9920px) {
        background:none;
    }
`
const Wrapper = styled.div`
    max-width: 1580px;
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    /* margin: auto; */
    gap:60px;
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        gap: 0px;
    }
`
const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 33px;
    line-height: 42px;
    color:#1E3B97;
    max-width: 1580px;
    width: 100%;
    text-align: left;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 35px;
    color: #737373;
    max-width: 752px;
    margin-top: 30px;
    margin-bottom: 30px;
`
