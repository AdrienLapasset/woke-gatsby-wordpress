import React from 'react';
// import { Link } from "gatsby"
import styled, { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Button = ({ children, className, submit }) => {
  if (submit) return <StyledButton className={className} type="submit">{children}</StyledButton>
  // if (to !== null) return <StyledLink to={to} className={className}>{children}</StyledLink>
  return <StyledButton className={className}>{children}</StyledButton>
}

const Styles = css`
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

const StyledButton = styled.button`
  ${Styles}
`
// const StyledLink = styled(Link)`
//   ${Styles}
// `

export default Button;
