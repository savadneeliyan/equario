import React from 'react'
import styled from 'styled-components'

function Image({src}) {
  return (
    <Img src={ src ? src :"/assets/images/Rectangle6.jpg"} alt="" />
  )
}

export default Image

const Img = styled.img`
    outline-offset: -14px;
    outline: 15px solid #fff;
    width: 100%;
    height: 100%;
    max-width: 760px;
    max-height: 645px;
`