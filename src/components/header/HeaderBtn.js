import React from 'react';
import styled from 'styled-components'

const HeaderBtn = ({ children, isHeaderWhite }) => {
  return <StyledButton isHeaderWhite={isHeaderWhite}>{children}</StyledButton>
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
    
    ${({ isHeaderWhite }) => isHeaderWhite && `
      border-color: white;
      color: white;
  `}
`

export default HeaderBtn;
