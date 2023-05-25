import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

function Slide() {
  return (
    <Section  data-aos="fade-up">
        <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Comma src='/assets/images/comma.png' alt="" />
                <Description>Faried is an exceptional coach who has helped me to identify my strengths and have the courage to use them. Working with Faried has helped me immeasurably in all aspects of my life. He has challenged the way that I think, so that I am more intentional with my choices and daily behaviours. Working with Faried has enabled me to gain clarity over my goals and I now feel empowered to shape my future.</Description>
                <Title>Shazia Ahmed</Title>
                <SubTitle>Director Regulatory Compliance</SubTitle>
            </SwiperSlide>
            <SwiperSlide>
                <Comma src='/assets/images/comma.png' alt="" />
                <Description>Faried is an exceptional coach who has helped me to identify my strengths and have the courage to use them. Working with Faried has helped me immeasurably in all aspects of my life. He has challenged the way that I think, so that I am more intentional with my choices and daily behaviours. Working with Faried has enabled me to gain clarity over my goals and I now feel empowered to shape my future.</Description>
                <Title>Shazia Ahmed</Title>
                <SubTitle>Director Regulatory Compliance</SubTitle>
            </SwiperSlide>
            <SwiperSlide>
                <Comma src='/assets/images/comma.png' alt="" />
                <Description>Faried is an exceptional coach who has helped me to identify my strengths and have the courage to use them. Working with Faried has helped me immeasurably in all aspects of my life. He has challenged the way that I think, so that I am more intentional with my choices and daily behaviours. Working with Faried has enabled me to gain clarity over my goals and I now feel empowered to shape my future.</Description>
                <Title>Shazia Ahmed</Title>
                <SubTitle>Director Regulatory Compliance</SubTitle>
            </SwiperSlide>
            <SwiperSlide>
                <Comma src='/assets/images/comma.png' alt="" />
                <Description>Faried is an exceptional coach who has helped me to identify my strengths and have the courage to use them. Working with Faried has helped me immeasurably in all aspects of my life. He has challenged the way that I think, so that I am more intentional with my choices and daily behaviours. Working with Faried has enabled me to gain clarity over my goals and I now feel empowered to shape my future.</Description>
                <Title>Shazia Ahmed</Title>
                <SubTitle>Director Regulatory Compliance</SubTitle>
            </SwiperSlide>
            
        </Swiper>
    </Section>
    
  )
}

export default Slide

const Section = styled.div`
    background: #58B8B4;
    padding: 130px 15px;
    overflow: hidden;

`
const Description = styled.div`
    max-width:938px;
    margin: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 35px;
    text-align: center;
`
const Comma = styled.img`
    margin: auto;
    margin-bottom: 60px;
`
const Title = styled.div`
    max-width:153px;
    margin: auto;
    font-family: 'poppins-500';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 33px;
`
const SubTitle = styled.div`
    max-width:253px;
    margin: auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 40px;
    margin-top: 10px;
`