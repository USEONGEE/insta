import React from 'react'
import { styled } from 'styled-components'

import logoImage from '../../assets/image/logo_instagram_text.png'

const LogoContainer = styled.div`
  height:${props => props.height};
  width: ${props => props.width};
`

const LogoImg = styled.img` 
  height:100%;
  width:100%;
`


export default function Logo({height, width, img}) {
  return (
    <div>
      <LogoContainer height={height} width={width}>
        <LogoImg src={img}/>
      </LogoContainer>
    </div>
  )
}
