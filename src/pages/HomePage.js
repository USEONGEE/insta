import React from 'react'
import { styled } from 'styled-components'
import Posts from '../components/Home/Posts'

const Container = styled.div`
  flex:4.8;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center; 
`

export default function HomePage() {
  console.log("렌더링이 되었습니다.")
  return (
    <Container>
      {/* todo: 스토리 */}
      <Posts />
      {/* todo: 계정전환 */}
    </Container>
  )
}
