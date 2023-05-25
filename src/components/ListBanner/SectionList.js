import React from 'react'
import styled from 'styled-components'

function SectionList() {
  return (
    <Section  data-aos="fade-up">
        <Wrapper>
            <div>
                <Heading>My Values</Heading>
                <ListContainer>
                    <List>Personal Freedom & Sovereignty</List>
                    <List>Authenticity</List>
                    <List>Respecting and Treating people fairly</List>
                    <List>Empathy</List>
                    <List>Personal Power</List>
                    <List>Ownership and Accountability</List>
                </ListContainer>
            </div>
            <div>
                <Heading>My areas of Expertise</Heading>
                <ListContainer>
                    <List>Leadership Development</List>
                    <List>Diversity & Inclusion</List>
                    <List>Change & Transformation</List>
                    <List>Stakeholder Management</List>
                    <List>Conflict Management</List>
                    <List>Alignment and Performance</List>
                    <List>Career Strategy</List>
                </ListContainer>
            </div>
            <div>
                <Heading>Levels Coached & Hours Coaching</Heading>
                <ListContainer>
                    <List>Excess of 500 hours of coaching</List>
                    <List>Executives & C-Suite</List>
                    <List>Directors</List>
                    <List>Sr. Managers</List>
                    <List>Managers</List>
                    <List>Entrepreneurs and Founders</List>
                </ListContainer>
            </div>
            <div>
                <Heading>Education</Heading>
                <ListContainer>
                    <List>Business degree (Commerce)</List>
                    <List>Business Honours degree (Accounting)</List>
                    <List>Business Honours degree (Business Administration)</List>
                </ListContainer>
            </div>
            <div>
                <Heading>Certifications</Heading>
                <ListContainer>
                    <List>Chartered Accountant (C.A. SA)</List>
                    <List>Digital & Disruption Strategies</List>
                    <List>Certified Internal Auditor</List>
                </ListContainer>
            </div>
            <div>
                <Heading>Industry Experience</Heading>
                <ListContainer>
                    <List>Fast Moving Consumer Goods</List>
                    <List>Financial Services, including Fintech</List>
                    <List>Professional Services</List>
                    <List>Digital Startups</List>
                    <List>Professional Services</List>
                </ListContainer>
            </div>
            <div>
                <Heading>Languages</Heading>
                <ListContainer>
                    <List>English</List>
                </ListContainer>
            </div>
        </Wrapper>
    </Section>
  )
}

export default SectionList

const Section = styled.div`
    background: #FFD300;
    /* height: 937px; */
    display: flex;
    justify-content: center;
    padding-top: 180px;
    padding-bottom: 100px;
    @media (max-width: 992px) {
        padding: 50px 15px;
        padding-top: 100px;
    }
`
const Wrapper = styled.div`
    max-width: 1560px;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    column-gap: 30px;
    @media (max-width: 992px) {
        padding: 0 15px;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const ListContainer = styled.ul`
    margin-bottom: 50px;
    padding-left: 25px;
    margin-top: 30px;
`
const List = styled.li`
    color: #272101;
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 400;
    padding-left: 20px;
    font-size: 21.5297px;
    line-height: 35px;
    margin: 15px 0;
    list-style-image: url(/assets/Icons/List.svg);
`

const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 33px;
    line-height: 42px;
    color:#000000;
    max-width: 1580px;
    width: 100%;
    text-align: left;
`