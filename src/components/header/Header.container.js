import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'

import WokeLogo from './WokeLogo';
import MenuBtn from './MenuBtn';
import HeaderBtn from './HeaderBtn';
import Menu from 'src/components/Menu/Menu';


const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isHeaderWhite, setHeaderWhite] = useState(false)
  const [isHeaderFixed, setHeaderFixed] = useState(false)

  // useEffect((isLocationBlog, isMenuOpen) => {
  //   const handleMenu = () => {
  //     if (!isLocationBlog && isMenuOpen) {
  //       setMenuOpen(false)
  //       setHeaderWhite(false)
  //       setHeaderFixed(true)
  //     } else if (!isLocationBlog && !isMenuOpen) {
  //       setMenuOpen(false)
  //       setHeaderWhite(false)
  //       setHeaderFixed(true)
  //     } else {
  //       setHeaderWhite(true)
  //       setHeaderFixed(false)
  //     }
  //   }

  //   handleMenu()
  // }, [location])

  const toggleMenu = () => {
    // if (isLocationBlog) {
    setMenuOpen(!isMenuOpen)
    setHeaderWhite(!isHeaderWhite)
    // } else {
    //   setMenuOpen(!isMenuOpen)
    //   setHeaderWhite(!isHeaderWhite)
    // }
  }

  return (
    <>
      <StyledContainer isHeaderWhite={isHeaderWhite} isHeaderFixed={isHeaderFixed} >
        <StyledGroup>
          <MenuBtn onClick={toggleMenu} isHeaderWhite={isHeaderWhite} />
          <Link to={'/'} >
            <WokeLogo isHeaderWhite={isHeaderWhite} />
          </Link>
        </StyledGroup>
        <StyledGroup>
          <Link to={'/Volunteer'} >
            <HeaderBtn isHeaderWhite={isHeaderWhite}>Faire un don</HeaderBtn>
          </Link>
          <Link to={'/Volunteer'} >
            <HeaderBtn isHeaderWhite={isHeaderWhite}>Devenir volontaire</HeaderBtn>
          </Link>
        </StyledGroup>
      </StyledContainer>
      {isMenuOpen ? <Menu /> : null}
    </>
  );
}

const StyledContainer = styled.div`
    z-index: 2;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1600px;
    position: ${props => props.isHeaderFixed ? `fixed` : `absolute`};
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: 150px;
    background-color: ${props => props.theme.colors.background};
    ${({ isHeaderWhite }) => isHeaderWhite && `
      background-color: transparent;
  `}
`
const StyledGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      & > * {
      margin-left: 90px
    }
  }
`

export default Header;
