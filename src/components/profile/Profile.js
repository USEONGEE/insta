import React, { useState } from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
  width: 45%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
`

const ProfileImageContainer = styled.div`
  width: 10rem;
  margin-right:5rem;
`

const ProfileImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 70%;
`

const ProfileDetailContainer = styled.header`
  flex: 2.0;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`

const ProfileDetailSubContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  height: 30%;
  width: 100%;
  margin-bottom: 0.8rem;
`

const ProfileDetailUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`

const ProfileDetailLi = styled.li`
  font-size: 1rem;
  margin-right:3rem;
  font-weight:500;
`

const Count = styled.span`
  font-weight: 550;
`

const UserName = styled.p`
  font-weight: 550;
  font-size:1.4rem;
  margin-right: 1rem;
`

const ProfileButton = styled.button`
  padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  font-size:0.9rem;
  border: none;
  font-weight: 550;
  margin-right: 1.0rem;
  border-radius:10px;
`

export default function Profile() {


  return (
    <Container>
      <ProfileImageContainer>
        <ProfileImg />
      </ProfileImageContainer>
      <ProfileDetailContainer>
        <ProfileDetailSubContainer>
          <UserName>useongee</UserName>
          <ProfileButton>프로필 편집</ProfileButton>
          <ProfileButton>보관함 스토리 보기</ProfileButton>
        </ProfileDetailSubContainer>
        <ProfileDetailUl>
          <ProfileDetailLi>게시글 <Count>0</Count> </ProfileDetailLi>
          <ProfileDetailLi>팔로워 <Count>0</Count></ProfileDetailLi>
          <ProfileDetailLi>팔로우 <Count>0</Count></ProfileDetailLi>
        </ProfileDetailUl>
        <ProfileDetailSubContainer>
          자기소개
        </ProfileDetailSubContainer>
      </ProfileDetailContainer>
    </Container>
  )
}
