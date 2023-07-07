import React from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'


const NavContainer = styled.div`
  width: 19rem;
  padding:1.5rem;
  border-right-width:1px;
  border-right-style:solid;
  border-right-color:#DBDBDB;
`


export default function Nav() {
  return (
    <NavContainer>
      <Logo width={'40%'} height={'3rem'}/>
      <Menu />
    </NavContainer>
  )
}
