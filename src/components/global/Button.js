import React from 'react';
import styled from 'styled-components'

const Button = ({ secondary, children, className }) => {
  return <StyledButton className={className} secondary={secondary}>{children}</StyledButton>
}

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background-color: ${props => props.theme.colors.black};
    margin-top: 15px;
    transition: width .2s ease-out
  }
  &:hover:after {
     width: 100%;
  }
  /* background-color: ${props => (props.secondary ? '#F7A072' : '#a1cdf1')}; */
`

export default Button;
