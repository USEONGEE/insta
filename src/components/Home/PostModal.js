import React from 'react'
import { styled } from 'styled-components'
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import '../../style/Post.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Container = styled.div`
  position: fixed;
  background-color: yellow;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 알파 값이 0.3으로 설정하여 살짝 어둡게 투명하게 만듦 */
  z-index: 999;
`

const CloseButton = styled.button`
  position: fixed;
  color: white;
  font-size: 2rem;
  background-color: transparent;
  border: none;
  left: 98%;
  top: 2%;
`

const PostContainer = styled.div`
  display: flex;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  height: 90%;
  width: 70%;
  background-color: white;
  flex-direction: row;
`
const SwiperContainer = styled.div`
  fleX: 7;
  height:100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  scroll-behavior: smooth;
  background-color:green;
`
const CommentContainer = styled.div`
  flex: 4;
`
const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


// TODO 어떤 값들을 받아올 건지, 아니면은 modal에서 자체적으로 요청을 보낸 건지 결정해야함
// TODO 화면 오른족 게시글 UI 작성해야함
// TODO x 버튼 뿐만아니라 바깥 클릭해도 사라지게 customHooks 만들어야함
// TODO x 버튼 디자인 해야함

/**
 * 
 * @param {function} setUseModal modal여부를 조절하기 위함 
 * @param {Array} images Post에서 보여준 이미지들
 */
export default function PostModal({ setUseModal, images }) {
  return (
    <Container>
      <CloseButton
        onClick={() => setUseModal(false)}>
        x
      </CloseButton>
      <PostContainer>
        <SwiperContainer>
          <Swiper
            modules={[Navigation, Pagination]}
            loop={false}
            navigation
            pagination={{ clickable: true }}
            slidesPerView={1}
            slidesPerGroup={1}
          >
            {images.map((item) => 
              (<SwiperSlide>
                <ContentImage src={item} />
              </SwiperSlide>)
            )}
          </Swiper>
        </SwiperContainer>
        <CommentContainer>

        </CommentContainer>

      </PostContainer>
    </Container>
  )
}
