import React, { useState } from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'


const NavContainer = styled.div`
  width: ${props => props.useModal ? '5rem' : '19rem'};
  padding-top: 1.2rem;
  padding-left: 0.6rem;
  padding-right: 0.8rem;
  border-right-width:1px;
  border-right-style:solid;
  border-right-color:#DBDBDB;
  transition: width 0.3s ease-in-out;

`

const LogoContainer = styled.div`
  display:flex;
`
const GapContainer = styled.div`
  display: block;
  height:100%;
  width:0.9rem;
`


export default function Nav() {

  const [useModal, setUseModal] = useState(false) // 검색, 알림창으로 인한 모달 발생 여부 state

  return (
    <NavContainer useModal={useModal}>
      <LogoContainer>
        <GapContainer/>
        <Logo width={'8rem'} height={'3rem'} />
      </LogoContainer>
      <Menu useModal={useModal} setUseModal={setUseModal}/>
    </NavContainer>
  )
}
