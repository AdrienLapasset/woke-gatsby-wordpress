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
  padding: 12px 12px;
  font-size: 14px;
  font-weight: 400;
  transition: all .4s;
  background-color: ${props => props.second ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.second ? props.theme.colors.black : 'white'};
  border: 2px solid;
  border-color: ${props => props.second ? props.theme.colors.black : props.theme.colors.primary};
  /* margin-left: ${props => props.second ? '30px' : 'none'}; */
  box-sizing: border-box;
  transition-delay: ${props => props.second ? '.2s' : '.1s'};

  ${({ isHeaderWhite }) => isHeaderWhite && `
    border-color: white;
    color: white;
  `}

  ${breakpoint('md')`
    display: flex;
    font-size: 18px;
    padding: 12px 25px;
  `}
`

export default HeaderBtn;
