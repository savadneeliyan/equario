import React from 'react'
import styled from 'styled-components'

function BannerImage({src}) {
  return (
    <Container>
      <Img src={ src ? src :"/assets/images/Rectangle6.jpg"} alt="" />
    </Container>
  )
}

export default BannerImage

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 597px;
  max-height: 507px;
  position: relative;
`
const Img = styled.img`
  outline-offset: -14px;
  outline: 15px solid #fff;
  width: 100%;
  height: 100%;
`