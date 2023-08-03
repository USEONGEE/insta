import React from 'react'
import  styled  from 'styled-components'
import Explore from '../components/Explore/Explore'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

export default function ExplorePage() {
  return (
    <Container>
      <Explore />
    </Container>
  )
}
