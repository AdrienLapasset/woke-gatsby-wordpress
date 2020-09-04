import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import breakpoint from 'styled-components-breakpoint';

import WokeLogo from './WokeLogo';
import MenuBtn from './MenuBtn';
import HeaderBtn from './HeaderBtn';
import Menu from 'src/components/Menu/Menu';

const Header = ({ isFluid, toggle }) => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isHeaderWhite, setHeaderWhite] = useState(isFluid)
  const [isHeaderFixed, setHeaderFixed] = useState(!isFluid)

  useEffect(() => {
    if (isMenuOpen) {
      setHeaderFixed(true)
    } else {
      setHeaderFixed(false)
    }
    if (isMenuOpen || isFluid) {
      setHeaderWhite(true)
    } else {
      setHeaderWhite(false)
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
    toggle()
  }

  return (
    <>
      <StyledContainer isHeaderWhite={isHeaderWhite} isHeaderFixed={isHeaderFixed} >
        <StyledGroup>
          <Link to={'/'} >
            <WokeLogo isHeaderWhite={isHeaderWhite} />
          </Link>
          <MenuBtn onClick={toggleMenu} isHeaderWhite={isHeaderWhite} />
        </StyledGroup>
        <StyledGroup>
          <Link to={'/'}  >
            <HeaderBtn isHeaderWhite={isHeaderWhite}>Faire un don</HeaderBtn>
          </Link>
          <Link to={'/volunteer'} state={{ actionToDisplay: 'bénévolat' }} >
            <HeaderBtn second isHeaderWhite={isHeaderWhite}>Devenir volontaire</HeaderBtn>
          </Link>
        </StyledGroup>
      </StyledContainer>
      {isMenuOpen ? <Menu toggleMenu={toggleMenu} /> : null}
    </>
  );
}

const StyledContainer = styled.div`
  z-index: 2;
  margin: 0 auto;
  padding: 35px 35px 15px;
  max-width: 1600px;
  position: ${props => props.isHeaderFixed ? `fixed` : `absolute`};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;

  ${({ isHeaderWhite }) => isHeaderWhite && `
    background-color: transparent;
  `}

  ${breakpoint('md')`
    padding: 58px 35px 35px;
    flex-direction: row;
    height: 150px;
  `}
`
const StyledGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:first-child {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 35px;
    ${breakpoint('md')`
      flex-direction: row-reverse;
      width: unset;
      margin-bottom: 0;
    `}
  }
  
  &:last-child {
    & > * {
      ${breakpoint('md')`
        margin-left: 40px;
      `}
      ${breakpoint('lg')`
        margin-left: 90px
      `}
    }
    ${breakpoint('md')`
      display: flex;
    `}
  }
`

export default Header;
