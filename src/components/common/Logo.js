import React from 'react'
import { styled } from 'styled-components'


const LogoContainer = styled.div`
  height:${props => props.height};
  width: ${props => props.width};
`

const LogoImg = styled.img` 
  height:100%;
  width:100%;
`

/**
 * 
 * @param {string} height 로고의 높이
 * @param {string} width 로고의 넓이
 * @param {any} img 로고 사진
 */
export default function Logo({height, width, img}) {
  return (
    <div>
      <LogoContainer height={height} width={width}>
        <LogoImg src={img}/>
      </LogoContainer>
    </div>
  )
}
