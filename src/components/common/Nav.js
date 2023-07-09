import React from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'


const NavContainer = styled.div`
  width: 19rem;
  padding-top: 1.2rem;
  padding-left: 0.6rem;
  padding-right: 0.8rem;
  border-right-width:1px;
  border-right-style:solid;
  border-right-color:#DBDBDB;
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
  return (
    <NavContainer>
      <LogoContainer>
        <GapContainer/>
        <Logo width={'8rem'} height={'3rem'} />
      </LogoContainer>
      <Menu />
    </NavContainer>
  )
}
