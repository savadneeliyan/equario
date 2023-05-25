import React from 'react'
import styled from 'styled-components'

function ResultListing() {
  return (
    <Section  data-aos="fade-up">
        <Wrapper>
            
            <div>
                <Description>My approach to coaching is driven by my coaching philosophy and life purpose to be in service to humanity, the experience I have gained during my professional career and life, and my intuition and spiritual journey. I hold the following as key to any client who wishes to embark on a coaching journey with me:</Description>

                <ListContainer>
                    
                    <List>Offer a safe sanctuary for individuals to explore their challenges and personal and professional goals, focusing on whole-person development and emphasising confidentiality while providing clients with a critical friend who can offer constructive feedback and support.</List>
                    
                    <List>Incorporates creative, reflective exercises and brainstorming sessions to help clients tap into their creativity and unlock new possibilities in their work and personal life.</List>
                    
                    <List>A results-based approach that encourages clients to set clear goals and track progress towards achieving them while also providing a supportive and objective sounding board for their ideas and concerns.</List>
                    
                    <List>That helps individuals integrate their personal and professional lives, focusing on developing a holistic approach to goal setting and self-improvement.</List>
                    
                    <List>That provides a safe and confidential space for individuals to explore their fears and anxieties and learn new strategies for managing stress and building resilience.</List>
                    
                    <List>That emphasises the importance of staying true to one's values and principles while encouraging clients to think creatively and take risks to pursue their goals.</List>
                    
                    <List>That helps individuals build solid and supportive relationships with colleagues, family, and friends while fostering sovereignty and freedom.</List>
                    
                    <List>That helps individuals develop greater self-awareness and a deeper understanding of their strengths and weaknesses while providing tools and strategies for overcoming obstacles and achieving success.</List>

                    <List>That helps individuals find meaning and purpose in their work and personal lives, focusing on developing a sense of purpose and direction grounded in personal values and principles.</List>

                </ListContainer>
            </div>
            
        </Wrapper>
    </Section>
  )
}

export default ResultListing

const Section = styled.div`
    background: #FFD300;
    /* height: 937px; */
    display: flex;
    justify-content: center;
    padding-top: 180px;
    padding-bottom: 100px;
    @media (max-width: 1600px) {
        padding: 180px 15px;
        padding-bottom: 80px;
    }
`
const Wrapper = styled.div`
    max-width: 1580px;
    width: 100%;
    column-gap: 30px;
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

const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 35px;
    color: #272101;
    margin-top: 21px;
    margin-bottom: 21px;
`