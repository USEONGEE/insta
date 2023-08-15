import { useState,useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Link, useLocation,useNavigate } from 'react-router-dom';


const ModalContainer = styled.div`
  width: 100%;
  color: black;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  padding: 16px;
`;
const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #efefef;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  padding: 5px;
  margin-bottom: 10px;
`;

const SearchIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
`;

const ClearSearchContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;

`;
const SearchResultItem = styled.div`
  display: flex;
  align-items: left;
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
  role: 'Modal',
}))`
display:flex;
justify-content: center;

padding: 20px;
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



const Search = ({ isModalOpen,handleCloseModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
  };
  
  const filteredResults = searchResults.filter((result) => 
  result.username.toLowerCase().includes(searchText.toLowerCase())
);


  return (
    <>
      <Modal 
      isOpen={isModalOpen} 
      onRequestClose={handleCloseModal}
      onClick={handleCloseModal}
      style={{
        content:{
          backgroundColor:'#fafafa',
          width:'350px',
          height:'100%',
          top:'50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          marginRight: '-50%',
          borderRadius: '12px',
          padding: '0px',
          },
          overlay:{backgroundColor: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
        },}}>
        <ModalView onClick={handleModalClick}>
          <ModalContainer isOpen={isOpen}>
            <SearchTitle>검색</SearchTitle>
            <SearchInputWrapper>

            <SearchInput
              type="text"
              value={searchText}
              onChange={handleSearchInputChange}
              placeholder="검색" />
              </SearchInputWrapper>

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
     
    </>
  );
}

  
// eslint-disable-next-line no-undef
export default Search;