import React, { useState } from 'react'
import { styled } from 'styled-components'
import Logo from './Logo'
import textLogoImg from '../../assets/image/logo_instagram_text.png'
import logoImg from '../../assets/image/logo_instagram.png'
import Menu from './Menu'


const NavContainer = styled.div`
  width: ${props => props.useModal ? '4.2rem' : '19rem'};
  padding-top: 1.2rem;
  padding-left: 0.6rem;
  padding-right: 0.8rem;
  border-right-width:1px;
  border-right-style:solid;
  border-right-color:#DBDBDB;
`

const LogoContainer = styled.div`
  display:flex;
  height:3rem;
  align-items:center;
  padding-left: ${props => props.useModal ? '0.6rem' : ''};
`
const GapContainer = styled.div`
  display: block;
  height:100%;
  width:0.9rem;
`
const logoSize = {
  smallWidth: '1.2rem',
  smallHeight: '1.2rem',
  bigWidth: '8rem',
  bigHeight: '3rem'
}

export default function Nav() {

  const [useModal, setUseModal] = useState(false) // 검색, 알림창으로 인한 모달 발생 여부 state

  return (
    <NavContainer useModal={useModal}>
      <LogoContainer useModal={useModal}>
        <GapContainer />
        <Logo
          width={useModal ? logoSize.smallWidth : logoSize.bigWidth}
          height={useModal ? logoSize.smallWidth : logoSize.bigHeight}
          img={useModal ? logoImg : textLogoImg} />
      </LogoContainer>
      <Menu
        useModal={useModal}
        setUseModal={setUseModal} />
    </NavContainer>
  )
}