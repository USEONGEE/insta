import React from 'react';
import styled from 'styled-components';
const ImagesGridWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const ImagesGrid = styled.div`
  width: 100%;
  max-width: 940px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; // 1:1 비율을 유지하기 위해 설정
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Explore = () => {
  const mockImages = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <ImagesGridWrapper>
      <ImagesGrid>
        {mockImages.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Explore image ${index}`} />
          </ImageWrapper>
        ))}
      </ImagesGrid>
    </ImagesGridWrapper>
  );
};

export default Explore;
