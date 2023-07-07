import React from 'react'
import Home from '../components/Home/Home'
import { styled } from 'styled-components'

const Container = styled.div`
`

export default function HomePage() {
  console.log("렌더링이 되었습니다.")
  return (
    <Container>
      <Home />
    </Container>
  )
}
