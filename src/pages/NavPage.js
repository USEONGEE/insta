import React from 'react'
import Nav from '../components/common/Nav'
import { styled } from 'styled-components'
import { Outlet } from 'react-router'


const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height:100vh;
`

export default function NavPage() {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  )
}
