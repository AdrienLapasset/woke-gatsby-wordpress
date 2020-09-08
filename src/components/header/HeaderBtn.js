import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const HeaderBtn = ({ children, isHeaderWhite, second }) => {
  return <StyledButton isHeaderWhite={isHeaderWhite} second={second}>{children}</StyledButton>
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  transition: all .2s;
  background-color: ${props => props.second ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.second ? props.theme.colors.black : 'white'};
  border: ${props => props.second ? '2px solid' : 'none'};
  border-color: ${props => props.second ? props.theme.colors.black : props.theme.colors.primary};
  box-sizing: border-box;
  height: 40px;

  ${({ isHeaderWhite }) => isHeaderWhite && `
    border-color: white;
    color: white;
  `}

  ${breakpoint('md')`
    display: flex;
    font-size: 18px;
    padding: 12px 25px;
    height: 50px;
  `}
`

export default HeaderBtn;
