import React from 'react'
import { keyframes, styled } from 'styled-components'
import settingButton from '../../assets/image/button_menu.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';

import commentImg from '../../assets/image/comments.png';
import likeImg from '../../assets/image/menu_info.png';
import shareImg from '../../assets/image/menu_DM.png';
import saveImg from '../../assets/image/saved.png';


import fooImg from 'C:/Users/shdbt/Desktop/배경화면.jpg'

const Container = styled.div`
  display: flex;
  width: 30rem;// 나중에 height 제거
  flex-direction: column;
  border-width: 1px;
  border-style: solid;
  border-color: #DBDBDB;
  border-radius: 10px;
  overflow: hidden;
`

const SubContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`


const ProfileContainer = styled.div`
  display:flex;
  flex-direction: row;
`

// 버튼에 hover시 줌인 효과
const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`

const SettingButton = styled.img`
  height: 1.5rem;
  width: 1.5rem;

  filter: saturate(100%);
  transition: filter 0.3s;

  &:hover {
    filter: saturate(70%);
    animation: ${zoomIn} 0.3s forwards;
  }
`

const ProfileImg = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  
`

const ProfileNameContainer = styled.div`
  font-size: 0.8rem;
  font-weight: 550;
`
const ContentImage = styled.img`
  width: 100%;
  object-fit: contain;
`
const SwiperCOntainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
`
const SubContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.1rem;
  padding:0.4rem;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ActionButton = styled.img`
  height:1.5rem;
  width:1.5rem;
  margin-right:1.0rem;
`

const SaveContainer = styled.div`
  display: flex;
`

const SaveButton = styled.img`
  height:1.5rem;
  width:1.5rem;
`

const SubContainer3 = styled.div`
  display:flex;
  margin-top: 0.5rem;
  padding-left:0.4rem;
`

const LikeContainer = styled.div`
  font-size: 0.8rem;
  font-weight: 550;
`

const SubContainer4 = styled.div`
  display:flex;
  flex-direction:row;
  margin-top: 0.5rem;
`

const Content = styled.span`
  font-size: 0.8rem;
`

export default function Post({ profileImage, profileName, images, likes, content, tag, commments }) {

  return (
    <Container>
      <SubContainer1 >
        <ProfileContainer>
          <ProfileImg />
          <ProfileNameContainer>
            {profileName}
          </ProfileNameContainer>
        </ProfileContainer>
        <SettingButton src={settingButton} />
      </SubContainer1>

      <SwiperCOntainer >
        <Swiper
          modules={[Navigation, Pagination]}
          loop={false}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          slidesPerGroup={1}
        >
          {/* 나중에 이미지 데이터를 받아와서 map으로 slide 생성 */}
          <SwiperSlide>
            <ContentImage src={fooImg} />
          </SwiperSlide>
          <SwiperSlide>
            <ContentImage src={fooImg} />
          </SwiperSlide>
        </Swiper>
      </SwiperCOntainer>

      <SubContainer2>
        <ActionContainer>
          <ActionButton src={likeImg} />
          <ActionButton src={commentImg} />
          <ActionButton src={shareImg} />
        </ActionContainer>
        <SaveContainer>
          <SaveButton src={saveImg} />
        </SaveContainer>
      </SubContainer2>
      <SubContainer3>
        <LikeContainer>
          좋아요 {likes}개
        </LikeContainer>
      </SubContainer3>

      <SubContainer4>
        <ProfileNameContainer>
          {profileName}
        </ProfileNameContainer>
        <div>
          &nbsp;
        </div>
        <Content>
          {content}
        </Content>
      </SubContainer4>

    </Container>
  )
}
