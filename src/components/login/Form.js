import React from 'react'
import { styled } from 'styled-components'

const Input = styled.input`
  height:1.5rem;
  margin-top: 0.5rem;
  border: 1px solid #DBDBDB;
  padding: 10px;
  background-color: #FAFAFA;
  &:focus {
    border: 0.5px solid #A8A8A8;
    outline: none;
    /* box-shadow: 0 0 5px #4CAF50; */
  }
`
const LoginButton = styled.button`
  background-color: ${props => props.isactive ? '#0095F6' : '#4CB5F9'};
  &:hover {
    background-color: ${props => (props.isactive ? '#1877F2' : '#4CB5F9')};
  }
  border-radius: 10px;
  color: white;
  width: 100%;
  border: none;
  height: 2.5rem;
  font-weight: bold;
  margin-top: 1rem;
`
const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
`



export default function Form({ Hint1, Hint2, buttonText }) {
  return (
    <FormContainer>
      <Input type="text" placeholder={Hint1}></Input>
      <Input placeholder={Hint2}></Input>
      <LoginButton isactive={true}>{buttonText}</LoginButton>
    </FormContainer>
  )
}
