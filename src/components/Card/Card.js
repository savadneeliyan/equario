import React from 'react'
import styled from 'styled-components'

function Card({bg}) {

    const CardItem = styled.div`
    background-color:  ${props => (bg ? `#58B8B4` : `none`)};
    background-image:  ${props => (bg ? `url("/assets/background/backgroundRound.svg")` : `none`)};
    max-width: 300px;
    width: 100%;
    height: 245px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
`
const Img = styled.img`
    object-fit:cover;
    width: 100%;
    height: 100%;
    max-width: 81px;
    height: 81px;
    margin: auto;
`
const Title = styled.h2`
    color: #fff;
    font-family: 'roboto-500';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    margin-top: 20px;
    width: 200px;
    text-align: center;
`


  return (
    <>
        <CardItem>
            <div>
                <Img src="/assets/icons/Group700.svg" alt="" />
                <Title>Rising Stars and Leaders</Title>
            </div>
        </CardItem>
    </>
  )
}


export default Card