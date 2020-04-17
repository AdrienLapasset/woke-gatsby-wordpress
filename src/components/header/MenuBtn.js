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
