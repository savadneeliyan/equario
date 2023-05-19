import React from 'react'
import styled from 'styled-components'

function Focus() {
  return (
    <Section>
        <Wrapper>
            <Description>Coaching and mentoring can significantly impact the professional development of diverse professionals and executives. Some of the benefits of coaching and mentoring include the following:</Description>
            <Heading>Be clear on what you want and focus on what matters most to you:</Heading>
            <Container>
                <img src="/assets/icons/Group700.svg" alt="" />
                <div>
                    <Title>Be your authentic self</Title>
                    <ContainerDescription>Coaching can empower you to be your authentic self by providing a safe and supportive environment for you to explore and understand your vision, personal mission, values, beliefs, strengths, weaknesses, and motivations. Through coaching, you can identify your limiting beliefs or behaviours that may be preventing you from being your true self and work on developing new habits and perspectives that align with your authentic self.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group701.svg" alt="" />
                <div>
                    <Title>Cultivate your Vision and make your dreams a reality</Title>
                    <Title>Improve your Performance</Title>
                    <ContainerDescription>Coaching and mentoring can help you to identify your strengths and weaknesses and develop strategies to improve your performance. You can gain new knowledge and leverage existing skills to achieve your goals.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group702.svg" alt="" />
                <div>
                    <Title>Increase your Confidence</Title>
                    <ContainerDescription>Coaching and mentoring can help you to build your confidence and self-esteem. You can better understand your value and worth, which can help you to advocate for yourself and take on new challenges.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group703.svg" alt="" />
                <div>
                    <Title>Expand your Networks</Title>
                    <ContainerDescription>Coaching and mentoring can help you to expand your networks and build relationships with individuals who can help you to achieve your goals. You can access new opportunities and resources and gain exposure to different perspectives and ideas.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group704.svg" alt="" />
                <div>
                    <Title>Advance in your career & manage your career Transitions</Title>
                    <ContainerDescription>Coaching and mentoring can help you to develop the skills and knowledge you need to advance your career. You can better understand the opportunities available to you and develop strategies to navigate the challenges you may face.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group705.svg" alt="" />
                <div>
                    <Title>Improve your Work-Life Balance</Title>
                    <ContainerDescription>Coaching and mentoring can help you to develop strategies to manage your work-life balance. You can learn how to prioritise your time, delegate tasks, and set boundaries to ensure that you can achieve your personal and professional goals.</ContainerDescription>
                </div>
            </Container>
            <Container>
                <img src="/assets/icons/Group706.svg" alt="" />
                <div>
                    <Title>Lead and be the Change</Title>
                    <ContainerDescription>Coaching and mentoring can help provide the support, guidance, perspective, and leadership skills to lead your team and the business through transformation and change.</ContainerDescription>
                </div>
            </Container>
        </Wrapper>
    </Section>
  )
}

export default Focus

const Section = styled.div`
    background: #FFD300;
    display: flex;
    justify-content: center;
    padding-top: 180px;
    padding-bottom: 100px;
`
const Wrapper = styled.div`
    max-width: 1560px;
    width: 100%;
    column-gap: 30px;
`
const Description = styled.p`
    font-family: 'roboto-400';
    font-style: normal;
    font-weight: 400;
    font-size: 21.5297px;
    line-height: 35px;
    color: #272101;
    /* max-width: 529px; */
    margin-top: 30px;
    margin-bottom: 30px;
`
const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color:#1E3B97;
    max-width: 1580px;
    width: 100%;
    text-align: left;
    color: #272101;
`
const Container = styled.div`
    display: flex;
    align-items: start;
    gap: 40px;
    margin-top: 50px;
`
const Title = styled.h2`
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 27px;
`
const ContainerDescription = styled(Description)`
    margin-top: 10px;
`