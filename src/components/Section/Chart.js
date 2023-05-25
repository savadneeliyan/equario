import React from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import styled from 'styled-components'

function Chart() {

    const data = [
        {
          "name": "Pillar 1",
          "uv": 400,
          
        },
        {
          "name": "Pillar 2",
          "uv": 300,
          
        },
        {
          "name": "Pillar C",
          "uv": 200,
          
        },
        {
          "name": "Pillar D",
          "uv": 278,
          
        },
        {
          "name": "Pillar E",
          "uv": 189,
          
        },
        {
          "name": "Pillar F",
          "uv": 239,
          
        },
        {
          "name": "Pillar G",
          "uv": 349,
          
        }
      ]


  return (
    <Section  data-aos="fade-up">
        <Wrapper>
            <Heading>The coaching model broadly incorporates the following pillars:</Heading>
            <WrapperContainer>
                <div>
                    <ChartBar width={850} height={478} data={data}>
                        <XAxis dataKey="name" fontFamily="poppins-500" tickMargin={20}  tickSize   dy='25' />
                        <CartesianGrid vertical={false}   stroke="#ebf3f0"   />
                        <YAxis tickMargin={20} tickSize axisLine={false} />
                        <Tooltip />
                        <Bar dataKey="uv" barSize={35} radius={[10, 10, 0, 0]} fill="#E20001" />
                    </ChartBar>
                </div>
                <div>
                    <Title>Pillar 1: <SubTitle>Personal Discovery and Insights</SubTitle></Title>
                    <Title>Pillar 2: <SubTitle>Visioning</SubTitle></Title>
                    <Title>Pillar 3: <SubTitle>Challenges, Obstacles & Limiting Beliefs</SubTitle></Title>
                    <Title>Pillar 4: <SubTitle>Strategy Development</SubTitle></Title>
                    <Title>Pillar 5: <SubTitle>Experiment, and Implement</SubTitle></Title>
                    <Title>Pillar 6: <SubTitle>Feedback, Lessons Learnt & Way Forward</SubTitle></Title>
                </div>
            </WrapperContainer>
        </Wrapper>
    </Section>
  )
}

export default Chart

const Section = styled.div`
    padding-top: 150px;
    padding-bottom: 160px;
    display:flex;
    justify-content: center;
    @media (max-width: 1600px) {
        padding: 100px 15px;
    }
`
const Wrapper = styled.div`
    max-width: 1580px;
    width: 100%;
`
const WrapperContainer = styled.div`
    column-gap: 50px;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    @media (max-width: 992px) {
        flex-direction: column-reverse;
        row-gap: 50px;
        align-items: start;
    }
`

const ChartBar = styled(BarChart)`
  @media (max-width: 992px) {
    width: 100% !important;
  }
`
const Title = styled.h2`
    color:#E20001;
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 600;
    font-size: 21.5297px;
    line-height: 75px;
`
const SubTitle = styled.span`
    color:#787878;
    font-family: 'poppins-400';
    font-style: normal;
    font-weight: 400;
    font-size: 21.5297px;
    line-height: 75px;
`
const Heading = styled.h1`
    font-family: 'mediumFont';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    color:#000;
    margin-bottom: 90px;
    /* max-width: 500px; */
    /* max-width: 647px; */
`