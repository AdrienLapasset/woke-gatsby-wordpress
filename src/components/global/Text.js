import React from 'react';
import styled from 'styled-components'

const Text = ({ className, children, lg, quote }) => {
  if (lg) return <Lg className={className}>{children}</Lg>
  if (quote) return <Quote className={className}>{children}</Quote>
  return <Base className={className}>{children}</Base>

}

const Base = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`
const Lg = styled.p`
  font-size: 28px;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
`
const Quote = styled.p`
  font-family: 'Cambria', 'Oranienbaum', serif;
  font-size: 35px;
  color: ${props => props.theme.colors.black};
  line-height: initial;
`

export default Text;

