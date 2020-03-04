import React from 'react';
import styled from 'styled-components'

const HeaderBtn = ({ children, isHeaderWhite, second }) => {
  return <StyledButton isHeaderWhite={isHeaderWhite} second={second}>{children}</StyledButton>
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 5px;
    padding: 0 25px;
    border: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    background-color: transparent;
    transition: all .4s;
    transition-delay: ${props => props.second ? '.2s' : '.1s'};
    
    ${({ isHeaderWhite }) => isHeaderWhite && `
      border-color: white;
      color: white;
  `}
`

export default HeaderBtn;
