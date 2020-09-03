import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Button = ({ children, className, submit }) => {
  if (submit) return <StyledButton className={className} type="submit">{children}</StyledButton>
  return <StyledButton className={className}>{children}</StyledButton>
}

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  &:after {
    content: '';
    display: block;
    width: 30%;
    height: 4px;
    background-color: ${props => props.theme.colors.black};
    margin-top: 15px;
    transition: width .2s ease-out;
    border-radius: 4px;
  }
  &:hover:after {
     width: 100%;
  }
  ${breakpoint('md')`
    font-size: 22px;
  `}
`

export default Button;
