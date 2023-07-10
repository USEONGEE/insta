import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display : flex;
  justify-content : center;
  align-items : center;
  height : 100%;
`;


export const ModalBtn = styled.button`
  background-color: var(--coz-purple-600);
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ExitBtn = styled(ModalBtn) `
background-color : #4000c7;
border-radius: 10px;
text-decoration: none;
margin: 10px;
padding: 5px 10px;
width: 40px;
height: 40px;
display : flex;
justify-content : center;
align-items : center;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있다.
  role: 'dialog',
}))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  width: 500px;
  heigth: 200px;
  background-color: #ffffff;
    >div.desc {
      margin: 50px;
      font-size: 20px;
      color: var(--coz-purple-600);
    }
`;

const CustomModal = ({ isOpen, closeModal }) => {
    return (
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>검색</h2>
        <p>Modal Content</p>
        <p1>최근 검색항목</p1>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    );
  };
  
  export default CustomModal;