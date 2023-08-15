import React, { useState } from 'react';
import MenuIcon from './MenuIcon';
import menu_add from '../../assets/image/menu_add.png';
import menu_add_selected from '../../assets/image/menu_add_selected.png';
import menu_DM from '../../assets/image/menu_DM.png';
import menu_DM_selected from '../../assets/image/menu_DM_selected.png';
import menu_explore from '../../assets/image/menu_explore.png';
import menu_explore_selected from '../../assets/image/menu_explore_selected.png';
import menu_Home from '../../assets/image/menu_Home.png';
import menu_Home_selected from '../../assets/image/menu_Home_selected.png';
import menu_info from '../../assets/image/menu_info.png';
import menu_info_selected from '../../assets/image/menu_info_selected.png';
import menu_menu from '../../assets/image/menu_menu.png';
import menu_menu_selected from '../../assets/image/menu_menu_selected.png';
import menu_search from '../../assets/image/menu_search.png';
import menu_search_selected from '../../assets/image/menu_search_selected.png';
import menu_video from '../../assets/image/menu_video.png';
import menu_video_selected from '../../assets/image/menu_video_selected.png';
import  styled  from 'styled-components';
import Search from './Search';
import Notification from './Notification';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const image = {
  add: menu_add,
  add_selected: menu_add_selected,
  dm: menu_DM,
  dm_selected: menu_DM_selected,
  explore: menu_explore,
  explore_selected: menu_explore_selected,
  home: menu_Home,
  home_selected: menu_Home_selected,
  info: menu_info,
  info_selected: menu_info_selected,
  menu: menu_menu,
  menu_selected: menu_menu_selected,
  search: menu_search,
  search_selected: menu_search_selected,
  video: menu_video,
  video_selected: menu_video_selected
};

const Container = styled.div`
  display:flex; 
  flex-direction:column;
  justify-content: space-between;
  margin-left: 0.5rem;
  margin-top: 1.8rem;
`

export default function Menu({useModal,setUseModal}) {
  const [selectedMenu, setSelectedMenu] = useState('home');
  const navigate = useNavigate();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);


  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);

    if(menu ==='search'){
      setIsSearchModalOpen(true);
      setUseModal(true);
    }
    else if(menu === 'info'){
      // eslint-disable-next-line no-undef
      setIsInfoModalOpen(true);
      setUseModal(true);
     }
     else{
      setUseModal(false);
     }
   
  };
 
  const handleExploreClick = () => {
    setSelectedMenu('explore');
    navigate('/ExplorePage');
  };
  const handleHomeClick = () => {
    setSelectedMenu('home');
    navigate('/MainPage');
  };
  return (
    <Container>
      <MenuIcon
        image={image.home}
        selectedImage={image.home_selected}
        selected={selectedMenu === 'home'}
        onClick={handleHomeClick}
        title={"홈"}
        useModal={useModal}
      />
      <MenuIcon
        image={image.search}
        selectedImage={image.search_selected}
        selected={selectedMenu === 'search'}
        title={"검색"}
        useModal={useModal}
        onClick={()=>handleMenuClick('search')}
      />
      <Search
        isModalOpen={isSearchModalOpen}
        handleCloseModal={() => setIsSearchModalOpen(false)}
      />
      <MenuIcon
        image={image.explore}
        selectedImage={image.explore_selected}
        selected={selectedMenu === 'explore'}
        onClick={handleExploreClick}
        title={"탐색 탭"}
        useModal={useModal}
      />
      <MenuIcon
        image={image.video}
        selectedImage={image.video_selected}
        selected={selectedMenu === 'video'}
        onClick={() => handleMenuClick('video')}
        title={"릴스"}
        useModal={useModal}
      />
      <MenuIcon
        image={image.dm}
        selectedImage={image.dm_selected}
        selected={selectedMenu === 'dm'}
        onClick={() => handleMenuClick('dm')}
        title={"메세지"}
        useModal={useModal}
      />
      <MenuIcon
        image={image.info}
        selectedImage={image.info_selected}
        selected={selectedMenu === 'info'}
        onClick={() => handleMenuClick('info')}
        title={"알림"}
        useModal={useModal}
      />
      <Notification
        isModalOpen={isInfoModalOpen}
        handleCloseModal={() => setIsInfoModalOpen(false)}
      />
      <MenuIcon
        image={image.add}
        selectedImage={image.add_selected}
        selected={selectedMenu === 'add'}
        onClick={() => handleMenuClick('add')}
        title={"만들기"}
        useModal={useModal}
      />
      {/* 프로필 */}
      {/* 공백 */}
      <MenuIcon
        image={image.menu}
        selectedImage={image.menu_selected}
        selected={selectedMenu === 'menu'}
        onClick={() => handleMenuClick('menu')}
        title={"더 보기"}
        useModal={useModal}
      />
    </Container>
  );
}
