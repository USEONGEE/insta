import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 1.8rem;
  width: 100%;
  display:flex;
  align-items: center;
  &:hover{
    border-radius: 20px;
    background-color: gray;
  }
`
const MenuImg = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`

export default function Menu({ image, selectedImage, selected, onClick}) {
  console.log(selected);
  return (
    <Container onClick={() => onClick()}>
      <MenuImg src={selected ? selectedImage : image} />
    </Container>
  )
}
