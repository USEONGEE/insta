import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');


const ModalContainer = styled.div`
  width: 397px;
  height: 681px;
  color: black;
  font-size: 16px;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
`;

const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  padding: 8px 16px;
  background-color: #FAFAFA;
  color: #000;
  border: 1px solid #EFEFEF;
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
  font-size: 30px;
  text-align: left;
  margin-bottom: 10px;
`;
const RecentSearchTitle = styled.h2`

  font-size: 16px;
  text-align: left;
  margin-bottom: 10px;
`;

const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  align-items: center;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
`;

const MagnifyingGlassButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`;
const ClearSearchLink = styled(Link)`
  font-size: 14px;
  text-align: left;
  color:blue;
  margin-top: 50px;
`;

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleClearSearchHistory = () => {
    setRecentSearches([]);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MagnifyingGlassButton onClick={handleOpenModal}>
        <img src="https://via.placeholder.com/20" alt="Magnifying Glass" />
      </MagnifyingGlassButton>
      <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
        <ModalView onClick={handleModalClick}>
        <ModalContainer isOpen={isOpen}>
            <SearchTitle>검색</SearchTitle>

            <SearchInput
              type="text"
              value={searchText}
              onChange={handleSearchInputChange}
              placeholder="검색"
            />
            <ClearSearchContainer>
            <RecentSearchTitle>최근 검색 항목</RecentSearchTitle>
            <ClearSearchLink to="/" onClick={handleClearSearchHistory}>모두 지우기 </ClearSearchLink>
            </ClearSearchContainer>

            <SearchResultItem>
              <img src="https://via.placeholder.com/30" alt="profile" />
              <span>사용자 1</span>
            </SearchResultItem>

            <SearchResultItem>
              <img src="https://via.placeholder.com/30" alt="profile" />
              <span>사용자 2</span>
            </SearchResultItem>

            <SearchResultItem>
              <img src="https://via.placeholder.com/30" alt="profile" />
              <span>사용자 3</span>
            </SearchResultItem>
          </ModalContainer>
        </ModalView>
      </Modal>
    </>
  );
};

  
// eslint-disable-next-line no-undef
export default Search;