import { styled } from "styled-components"
import React, { useState } from 'react'

const PostsCategoryContainer = styled.div` 
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color:#DBDBDB;
  width: 60%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PostsCategory = styled.a`
  border-width: 1.5px 0 0 0;
  border-style: solid;
  border-color: ${props => props.active ? "black" : "transparent"};
  font-size: 0.8rem;
  font-weight: 550;
  text-decoration: none;
  margin-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color:${proprs => proprs.active ? "black" : "#DBDBDB"};
  &:visited {
    text-decoration: none;
  
  }
  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:hover,
  &:active {
    text-decoration: none;
  }
`

export default function PostCategory() {

  const catoery = {
    POST: "post",
    SAVED: "saved",
    TAG: "TAG"
  }

  const [activeLink, setActiveLink] = useState("post")

  const handleClickCategory = (catoery) => {
    setActiveLink(catoery);
  }
  return (
    <PostsCategoryContainer>
      <PostsCategory
        active={activeLink === catoery.POST}
        onClick={() => handleClickCategory(catoery.POST)}>게시글</PostsCategory>
      <PostsCategory
        active={activeLink === catoery.SAVED}
        onClick={() => handleClickCategory(catoery.SAVED)}>저장됨</PostsCategory>
      <PostsCategory
        active={activeLink === catoery.TAG}
        onClick={() => handleClickCategory(catoery.TAG)}>태그됨</PostsCategory>
    </PostsCategoryContainer>
  )
}
