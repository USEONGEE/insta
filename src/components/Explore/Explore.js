import React, {useState,useEffect} from 'react';
import styled from 'styled-components';

const ImagesGridWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  width: 1102px;
`;
const extendImageList = (images) => {
  let newImages = [...images];
  for (let i = 0; i < images.length; i++) {
    newImages.push(images[i]);
  }
  return newImages;
};


const ImagesGrid = styled.div`
  width: 90%;
  height:auto;
  max-width: 900px;
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
  const [imageList, setImageList] = useState(mockImages);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      
      if (maxScrollTop - scrollTop < 300) {
        setImageList((prevImageList) => extendImageList(prevImageList));
      }
    };
    window.addEventListener('scroll',handleScroll);
    return () =>{
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);

  return (
    <ImagesGridWrapper>
      <ImagesGrid>
        {imageList.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Explore image ${index}`} />
          </ImageWrapper>
        ))}
      </ImagesGrid>
    </ImagesGridWrapper>
  );
};

export default Explore;
