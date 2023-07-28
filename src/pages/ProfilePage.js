import React from 'react'
import { styled } from 'styled-components'
import Profile from '../components/profile/Profile'
import PostCategory from '../components/profile/PostCategory'

const Container = styled.div`
  flex: 4.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
`

export default function ProfilePage() {
  return (
    <Container>
      <Profile />
      <PostCategory />
    </Container>
  )
}
