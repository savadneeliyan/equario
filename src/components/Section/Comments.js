import React from 'react'
import styled from 'styled-components'

function Comments() {
  return (
    <Section  data-aos="fade-up">
        <Wrapper>
            <Container backgroundColor="#58B8B4">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>"Working with Faried has been a transformative experience. His personalised coaching approach has helped me gain clarity, focus, and confidence in both my personal and professional life. Faried's genuine care for my growth and his ability to guide and challenge me in a supportive manner has resulted in profound self-discovery and meaningful change. I highly recommend Faried to anyone seeking to unlock their potential and achieve their goals."</Description>
                    <Title>Julius Kirumira</Title>
                    <Span>Head of Audit, UK and Europe (Financial Services, London, UK)</Span>
                </ContainerItem>
            </Container>
            
            <Container backgroundColor="#F9A600">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>“I worked with Faried for 6 months during a time when I had just started a new leadership role and my employer was going through structural changes. The experience truly changed how I was able to approach each challenge, whether internal or external. He was an exceptional listener; picking up on what was said but also unsaid. His insightful questions and calm demeanour created a safe yet challenging environment for deeper discussions; I was able to grow and realize my own potential and learnt to understand and manage imposter syndrome. A year since we started the coaching, I feel like a completely different person and I can see that my team have felt the benefits and been empowered vicariously; I feel stronger as an individual, manager, and leader. I’ve been able to reflect on my leadership style, my values, and focus my actions on a practical way to drive progress through our organisation’s transformation, and my own career. I cannot stress enough how much I valued the dedicated time with Faried. Thank you.”</Description>
                    <Title>Ameya Shah</Title>
                    <Span>Senior Finance Director (Media, London, UK)</Span>
                </ContainerItem>
            </Container>
            <Container backgroundColor="#58B8B4">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>Faried is an exceptional coach who has helped me to identify my strengths and have the courage to use them. Working with Faried has helped me immeasurably in all aspects of my life. He has challenged the way that I think, so that I am more intentional with my choices and daily behaviours. Working with Faried has enabled me to gain clarity over my goals and I now feel empowered to shape my future.</Description>
                    <Title>Shazia Ahmed</Title>
                    <Span>Director Regulatory Compliance (Financial Services, London, UK)</Span>
                </ContainerItem>
            </Container>
            
            <Container backgroundColor="#F9A600">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>“I can say with absolute certainty that my experience of executive coaching and mentoring from Faried has exceeded my expectations in a manner that I could not even begin to imagine. The reasons for this are two. First, it was evident from the outset that Faried has the structure, experience, knowledge, and credibility to add significant value as my executive coach. Second, Faried’s experience is underpinned by his integrity, razor-sharp intellect, empathy, and unyielding passion for what he does. For these reasons (amongst others) Faried is able to help one get to the core of one is, what one wants and how one can establish one’s own framework for bringing this to life. I am not subject to hyperbole, but for me this was a life changing experience and for those looking for the next step in their career but are not sure as to how they take it, then this is route for them.</Description>

                    <Description>I cannot recommend Faried’s service highly enough. If you want guidance that will help you take the next step in your career, I implore you to consider Faried as your executive coach. You will not regret it.</Description>

                    <Title>Sennay Zerihun</Title>
                    <Span>Global Account Manager – Enterprise and Technology Sector (Technology, Manchester, UK)</Span>
                </ContainerItem>
            </Container>
            <Container backgroundColor="#58B8B4">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>I first started working with Faried during an extremely challenging period at work, which was amplified by a lot of change and uncertainly. During the 6 months in which we worked together, Faried was truly my north star, providing invaluable advice, motivation, and guidance. His compassionate approach, authentic nature and strategic ability really challenged my thinking, turning problems into viable, practical solutions, that resulted in very positive outcomes for me personally. Whilst working with Faried I have grown in confidence, and I have learnt my value. I now feel confidently inspired and empowered, which has helped provide greater clarity about myself as a person and my future career goals.</Description>

                    <Description>I cannot speak highly enough of my time working with Faried and would encourage anyone who wants to make a difference in their workplace to start their journey with him!</Description>

                    <Title>Mark Thomas</Title>
                    <Span>Head of Marketing (Media, London, UK)</Span>
                </ContainerItem>
            </Container>
            
            <Container backgroundColor="#F9A600">
                <Img src="/assets/images/Ellipse2031.png" alt="" />
                <ContainerItem>
                    <Description>“Faried has been a fantastic coach for me. A journey of consciously discovering my values, brand, goals, challenges & leadership skills has been an eye-opener. It has been helping me to be a better leader, take decisions confidently, reduce stress, bring intentionality to my actions & the ultimate feeling of fulfilment in all aspects of my life.”</Description>
                    <Title>Puneet Kumar Arora</Title>
                    <Span>Senior Program Manager (Financial Services, Singapore)</Span>
                </ContainerItem>
            </Container>
            
        </Wrapper>
    </Section>
  )
}

export default Comments


const Section = styled.div`
    background: linear-gradient(180deg, #E1EEF7 0%, rgba(250, 250, 250, 0) 100%);
    display: flex;
    justify-content: center;
    padding-top: 180px;
    padding-bottom: 50px;
`
const Wrapper = styled.div`
    max-width: 1580px;
    width: 100%;
    column-gap: 30px;
    @media (max-width: 1480px) {
        padding: 0 15px;
    }
`
const Container = styled.div`
    background-color:${(props) => props.backgroundColor};
    padding: 60px;
    border-radius: 20px;
    display: flex;
    margin-bottom: 50px;
    @media (max-width: 992px) {
        flex-direction: column;
        gap: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }
`
const Img = styled.img`
    width: 134px;
    height: 134px;
    object-fit: cover;
`
const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1244px;
    gap: 10px;    
    margin-left: 60px;
    position: relative;
    &:before {
        left: -80px;
        top:-30px;
        position: absolute;
        content: url('data:image/svg+xml;utf8,<svg width="69" height="50" viewBox="0 0 69 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M29.1381 0V3.13175C23.4333 4.28366 18.595 6.87545 14.6232 10.9071C10.7237 14.9388 8.73783 20.0864 8.66562 26.3499C11.1209 24.406 13.865 23.4341 16.898 23.4341C20.7253 23.4341 23.7582 24.622 25.9969 26.9978C28.2355 29.3736 29.3548 32.5414 29.3548 36.5011C29.3548 40.3168 27.9827 43.5205 25.2386 46.1123C22.4945 48.7041 19.1366 50 15.1648 50C10.6154 50 6.9325 48.4521 4.11617 45.3564C1.37206 42.1886 0 37.977 0 32.7214C0 23.7941 2.59969 16.3427 7.79906 10.3672C13.0706 4.31965 20.1837 0.863931 29.1381 0ZM68.7834 0V3.13175C63.1507 4.28366 58.3485 6.87545 54.3768 10.9071C50.4772 14.9388 48.4914 20.0864 48.4192 26.3499C50.8744 24.406 53.6185 23.4341 56.6515 23.4341C60.4066 23.4341 63.4035 24.622 65.6421 26.9978C67.8807 29.3017 69 32.4694 69 36.5011C69 40.3168 67.6279 43.5205 64.8838 46.1123C62.1397 48.7041 58.7818 50 54.81 50C50.2606 50 46.6138 48.4521 43.8697 45.3564C41.1256 42.1886 39.7535 37.977 39.7535 32.7214C39.7535 23.7941 42.3532 16.3427 47.5526 10.3672C52.752 4.31965 59.8289 0.863931 68.7834 0Z" fill="black"/></svg>');
        @media (max-width: 992px) {
            left: -15px;
            top:-50px
        }
    }
    @media (max-width: 992px) {
        margin-left: 0px;
        margin-top: 40px;
    }
`
const Span = styled.span`
    color: #fff;
    font-family: 'poppins-400';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    max-width: 353px;
`
const Title = styled.p`
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 33px;
`
const Description = styled.p`
    font-family: 'poppins-400';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #fff;
    margin-top: 21px;
    margin-bottom: 21px;
`