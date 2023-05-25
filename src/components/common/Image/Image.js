import React from 'react'
import styled from 'styled-components'

function Image({src, name}) {
  return (
    <Container>
      <Img src={ src ? src :"/assets/images/Rectangle6.jpg"} alt="" />
      {name && <Box> Faried Chopdat</Box>}
    </Container>
  )
}

export default Image

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 760px;
  max-height: 645px;
  position: relative;
  @media (max-width: 992px) {
    max-width: 600px;
  }
`
const Img = styled.img`
  outline-offset: -14px;
  outline: 15px solid #fff;
  width: 100%;
  height: 100%;
`
const Box = styled.h2`
  position: absolute;
  bottom: 13px;
  font-family: 'mediumFont';
  font-style: normal;
  font-weight: 600;
  font-size: 27.4857px;
  line-height: 35px;
  color: #fff;
  background-color: #e20000cd;
  padding: 23px 35px;
  right: 14px;
`