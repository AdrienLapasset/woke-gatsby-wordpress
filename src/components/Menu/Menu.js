import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import { fadeIn } from 'src/styles/keyframes';

import menuBg from 'src/assets/imgs/menuBg.jpg';
import moreIcon from 'src/assets/icons/more.svg';

const Menu = () => {

  const pages = [
    { name: 'Intro', path: '/' },
    { name: 'Qui est Woke ?', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Agir avec nous', path: '/Volunteer' },
  ]

  const pageList = pages.map((page, index) => {
    return (
      <StyledLi key={index}>
        <StyledNavLink to={page.path} activeClassName="active">{page.name}</StyledNavLink>
      </StyledLi>
    )
  })

  return (
    <>
      <StyledContainer>
        <StyledUlContainer>
          <StyledUl>
            {pageList}
          </StyledUl>
        </StyledUlContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  z-index: 1;
  background-image: url(${menuBg});
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  animation: ${fadeIn} .2s forwards;
`
const StyledUlContainer = styled.div`
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
`
const StyledUl = styled.ul`
  flex: 0 0 auto;
  margin-left: auto;
  border-left: 1px solid rgba(255, 255, 255, .3);
  padding: 400px 0 0 40px;
  width: 240px;
`
const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 15px;
`
const StyledNavLink = styled(Link)`
  font-weight: 700;
  font-size: 23px;
  color: white;
  text-decoration: none;
  position: relative;
   &.active, &:hover {
    color: ${props => props.theme.colors.primary};
    &:before {
      content: url(${moreIcon});
      position: absolute;
      left: -59px;
      top: -3px;
    }
  }
`

export default Menu;
