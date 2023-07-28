import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`

export default function PostModal({ setUseModal }) {
  return (
    <Container>
      <button
        onClick={() => setUseModal(false)}>
        x
      </button>
    </Container>
  )
}
