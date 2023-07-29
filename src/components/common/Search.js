import { useState,useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link, useLocation,useNavigate } from 'react-router-dom';

const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  width: 350px;
  color: black;
  font-size: 16px;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease-in-out; 
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'}; 
`;


const SearchInput = styled.input`
  width: 350px;
  height: 25px;
  padding: 8px 16px;
  background-color: #f0f0f0;
  color: #000;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const ClearSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
const SearchResultItem = styled.div`
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
const SearchTitle = styled.h1`
  font-size: 24px;
  text-align: left;
  margin-bottom: 10px;
`;
const RecentSearchTitle = styled.h2`
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
`;
const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  align-items: center;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
`;


const ClearSearchLink = styled(Link)`
  font-size: 14px;
  text-align: left;
  color:blue;
  margin-top: 50px;
`;

const EmptySearchResult = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 20px;
`;

const ConfirmModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  width: 300px;
  outline: none;
  border-radius: 10px;
`;

const ConfirmButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width:397px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Search = ({ isModalOpen,handleCloseModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [searchResults, setsearchResults] = useState([

    { id: 1, username: '사용자 1' },
    { id: 2, username: '사용자 2' },
    { id: 3, username: '사용자 3' },
  ]);


  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleClearSearchHistory = () => {
   setsearchResults([]);
   setConfirmModalOpen(false);
  };
  const openConfirmModal = (e) => {
    e.preventDefault();
    setConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };
  const filteredResults = searchResults.filter((result) => 
  result.username.toLowerCase().includes(searchText.toLowerCase())
);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
   navigate('/MainPage')  };

  return (
    <>
      <Modal 
      isOpen={isModalOpen} 
      onRequestClose={handleCloseModal}
      onClick={handleCloseModal}
      style={{
        content:{
          width:'397px',
          height:'100%',
          margin:'20px',
        }
      }}>
        <ModalView onClick={handleModalClick}>
          <ModalContainer isOpen={isOpen}>
            <SearchTitle>검색</SearchTitle>

            <SearchInput
              type="text"
              value={searchText}
              onChange={handleSearchInputChange}
              placeholder="검색" />
            <ClearSearchContainer>
              <RecentSearchTitle>최근 검색 항목</RecentSearchTitle>
              <ClearSearchLink to="/" onClick={handleClearSearchHistory}>모두 지우기 </ClearSearchLink>
            </ClearSearchContainer>
            {filteredResults.length>0 ? filteredResults.map((result) => (
              <SearchResultItem key={result.id}>
                <img src="https://via.placeholder.com/30" alt="profile" />
                <span>{result.username}</span>
              </SearchResultItem>
            )): <EmptySearchResult>최근 검색 내역 없음</EmptySearchResult>}
          </ModalContainer>
        </ModalView>
      </Modal>
      <ConfirmModal isOpen={confirmModalOpen} onRequestClose={closeConfirmModal}>
        <h2>검색 내역을 정말 지우시겠습니까?</h2>
        <ConfirmButtons>
          <Button onClick={handleClearSearchHistory}>예</Button>
          <Button onClick={closeConfirmModal}>아니오</Button>
        </ConfirmButtons>
      </ConfirmModal>
    </>
  );
}

  
// eslint-disable-next-line no-undef
export default Search;