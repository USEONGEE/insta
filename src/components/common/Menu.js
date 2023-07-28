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
import { styled } from 'styled-components';
import Explore from '../Explore/Explore';
import ExplorePage from './ExplorePage'

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
  display: flex;
  flex-direction: column;
  height:100vh;
`

const MenuContainer = styled.div`
  display:flex; 
  flex-direction:column;
  justify-content: space-between;
  margin-left: 0.5rem;
  margin-top: 1.8rem;
`
const MoreContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom:3rem;
`

export default function Menu({ useModal }) {
  const menu = {
    HOME: "home",
    SEARCH: "search",
    EXPLORE: "explore",
    VIDEO: "video",
    DM: "dm",
    INFO: "info",
    ADD: "add",
    MORE: "more",
    PROFILE: "profile"
  }

  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  }
  return (
    <Container>
      <MenuContainer>
        <MenuIcon
          onClick={() => handleMenuClick(menu.HOME)}
          image={image.home}
          selectedImage={image.home_selected}
          selected={selectedMenu === menu.HOME}
          title={"홈"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.search}
          selectedImage={image.search_selected}
          selected={selectedMenu === menu.SEARCH}
          onClick={() => handleMenuClick(menu.SEARCH)}
          title={"검색"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.explore}
          selectedImage={image.explore_selected}
          selected={selectedMenu === menu.EXPLORE}
          onClick={() => {
            handleMenuClick(menu.EXPLORE);
          }}
          title={"탐색 탭"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.video}
          selectedImage={image.video_selected}
          selected={selectedMenu === menu.VIDEO}
          onClick={() => handleMenuClick(menu.VIDEO)}
          title={"릴스"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.dm}
          selectedImage={image.dm_selected}
          selected={selectedMenu === menu.DM}
          onClick={() => handleMenuClick(menu.DM)}
          title={"메세지"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.info}
          selectedImage={image.info_selected}
          selected={selectedMenu === menu.INFO}
          onClick={() => handleMenuClick(menu.INFO)}
          title={"알림"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.add}
          selectedImage={image.add_selected}
          selected={selectedMenu === menu.ADD}
          onClick={() => handleMenuClick(menu.ADD)}
          title={"만들기"}
          useModal={useModal}
        />
        <MenuIcon
          image={image.menu}
          selectedImage={image.menu_selected}
          selected={selectedMenu === menu.PROFILE}
          onClick={() => handleMenuClick(menu.PROFILE)}
          title={"프로필"}
          useModal={useModal}
        />


        <MoreContainer>
          <MenuIcon
            image={image.menu}
            selectedImage={image.menu_selected}
            selected={selectedMenu === menu.MORE}
            onClick={() => handleMenuClick(menu.MORE)}
            title={"더 보기"}
            useModal={useModal}
          />
        </MoreContainer>
      </MenuContainer>
    </Container>
  );
}
