import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const MenuBtn = ({ onClick, isHeaderWhite }) => {
  return (
    <StyledButton onClick={() => onClick()} isHeaderWhite={isHeaderWhite}>
      <FirstBar />
      <SecondBar />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: 0;
  & > * {
    background-color: ${props => props.isHeaderWhite ? `white` : props.theme.colors.black}
  }
  ${breakpoint('md')`
    margin-right: 50px;
  `}
  &:hover {
    &:after {
      content: 'Menu';
      position: absolute;
      color: white;
      background-color: ${props => props.theme.colors.black};
      font-size: 12px;
      padding: 5px 20px;
      border-radius: 2px;
      top: 40px;
      left: -20px;
    }
    &:before {
      content:"";
      width: 0; 
      height: 0; 
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid ${props => props.theme.colors.black};
      position: absolute;
      top: 35px;
      left: 9px;
    }
  }
`
const FirstBar = styled.div`
  width: 25px;
  height: 5px;
  margin-bottom: 5px;
`
const SecondBar = styled(FirstBar)`
  width: 20px;
`

export default MenuBtn;
