import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const ModalContainer = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 16px;
`;

const ModalHeader = styled.h2`
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #EFEFEF;
  cursor: pointer;

  &:hover {
    background-color: #FAFAFA;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
  }

  span {
    font-weight: 500;
  }
`;

const notifications = [
  { id: 1, username: '사용자 1' },
  { id: 2, username: '사용자 2' },
  { id: 3, username: '사용자 3' },
];

const Notifications = ({ isModalOpen, handleCloseModal }) => {

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onClick={handleCloseModal}
        style={{
          content: {
            backgroundColor: '#fafafa',
            width: '350px',
            height: '85%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginRight: '-50%',
            borderRadius: '12px',
            padding: '0px',
          },
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'flex',
            alignItems: 'center',
          },
        }}
      >
        <ModalContainer>
          <ModalHeader>알림</ModalHeader>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id}>
              <img
                src="https://via.placeholder.com/30"
                alt="profile"
              />
              <span>
                {notification.username}님이 회원님의 사진에 좋아요를 눌렀습니다.
              </span>
            </NotificationItem>
          ))}
        </ModalContainer>
      </Modal>
    </>
  );
};

export default Notifications;
