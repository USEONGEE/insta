import React from 'react'
import { styled } from 'styled-components'
import Form from './Form'
import logoImage from '../../assets/image/logo_instagram_text.png'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid #DBDBDB;
`

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  padding: 2rem;
  border: 1px solid #DBDBDB;
`

const GapContainer = styled.div`
  display: block;
  width: 100%;
  height: 2rem;
`

const LogoImg = styled.img`
  height: 5rem;
`

const SeparateContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Separate = styled.div`
  display:block;
  width: 9rem;
  height:1px;
  background-color: #DBDBDB;
`

const SepatateText = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  color: #737373;
  font-weight: bold;
`

const Register = styled.span`
  color: #4CB5F9;
`


export default function Login() {
  return (
    <Container>
      <LoginContainer>
        <Logo height={"5rem"} width={"100%"} img={logoImage}/>

        <GapContainer />

        <Form
          Hint1={`전화번호, 사용자 이름 또는 이메일`}
          Hint2={`비밀번호`}
          buttonText={`로그인`} />

        <GapContainer />

        <SeparateContainer>
          <Separate />
          <SepatateText>
            또는
          </SepatateText>
          <Separate />
        </SeparateContainer>

        <GapContainer/>

        <Link>비밀번호를 잊으셨나요?</Link>
      </LoginContainer>

      <GapContainer/>

      <RegisterContainer>
        <p>계정이 없으신가요? &nbsp;</p>
        <Register>가입하기</Register>
      </RegisterContainer>

    </Container>
  )
}
