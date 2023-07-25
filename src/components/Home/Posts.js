import React from 'react'
import { styled } from 'styled-components'
import Post from './Post'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <Container>
      {/* todo: 나중에 데이터 받아와서 map으로 돌려서 Post 만들면 됨 */}
      <Post 
      profileName={"gcc_applied_statisticss"}
      likes={999}
      content={"예시를 위한 content입니다."}
      comments={[1,2,3,4,5]}/>
    </Container>
  )
}
