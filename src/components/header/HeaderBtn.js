import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const HeaderBtn = ({ children, isHeaderWhite, second }) => {
  return <StyledButton isHeaderWhite={isHeaderWhite} second={second}>{children}</StyledButton>
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  padding: 0 25px;
  font-size: 18px;
  font-weight: 400;
  transition: all .4s;
  background-color: ${props => props.second ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.second ? props.theme.colors.black : 'white'};
  border: ${props => props.second ? '2px solid' + props.theme.colors.black : 'none'};
  box-sizing: border-box;
  transition-delay: ${props => props.second ? '.2s' : '.1s'};
  
  ${({ isHeaderWhite }) => isHeaderWhite && `
    border-color: white;
    color: white;
  `}

  ${breakpoint('md')`
    display: flex;
  `}
`

export default HeaderBtn;
