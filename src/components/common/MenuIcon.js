import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 2.6rem;
  width: 100%;
  display:flex;
  align-items: center;
  margin-bottom: 0.8rem;
  margin-right:1rem;
  padding-left: 1rem;
  &:hover{
    border-radius: 20px;
    background-color: #FAFAFA;
  }
  
  box-sizing: border-box;
`

const GapContainer = styled.div`
  display: block;
  height: 100%;
  width: 0.8rem;
`

const MneuItemSpan = styled.span`
  color: black;
  font-weight: ${props => props.selected ? "bold" : "normal"};
`


const MenuImg = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`

export default function Menu({ image, selectedImage, selected, onClick, title, useModal,setUseModal}) {
  console.log(selected)
  return (
    <Container onClick={() => onClick()}>
      <MenuImg src={selected ? selectedImage : image} />
      <GapContainer/>
      {!useModal ? <MneuItemSpan selected={selected}>{title}</MneuItemSpan> : null}
    </Container>
  )
}
