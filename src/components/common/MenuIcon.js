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

/**
 * 
 * @param {any} image 선택되지 않았을 때 보여줄 아이콘 이미지 
 * @param {any} selectedImage 선택되었을 때 보여줄 아이콘 이미지 
 * @param {boolean} selected 선택되었는 지 
 * @param {function} onClick 아이콘 클릭 시에 이벤트 리스너 
 * @param {string} title 아이콘 이름
 * @param {boolean} useModal modal을 사용하는 지에 대한 여부, 사용하면 아이콘이 커짐
 * @returns 
 */
export default function Menu({ image, selectedImage, selected, onClick, title, useModal }) {
  console.log(selected)
  return (
    <Container onClick={() => onClick()}>
      <MenuImg src={selected ? selectedImage : image} />
      <GapContainer/>
      {!useModal ? <MneuItemSpan selected={selected}>{title}</MneuItemSpan> : null}
    </Container>
  )
}
