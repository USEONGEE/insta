import React from 'react'
import { styled } from 'styled-components'

const ImgContainer = styled.div`
  height: 1.2rem;
  width: 1.2rem;
`
const MenuImg = styled.img` 
  height:100%;
  width:100%;
`



export default function Menu({image}) {
  return (
    <ImgContainer>
      <MenuImg src={image}/>
    </ImgContainer>
  )
}
