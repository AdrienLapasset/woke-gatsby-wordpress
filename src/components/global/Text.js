import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Text = ({ className, children, lg, quote }) => {
  if (lg) return <Lg className={className}>{children}</Lg>
  if (quote) return <Quote className={className}>{children}</Quote>
  return <Base className={className}>{children}</Base>

}

const Base = styled.p`
  line-height: 22px;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  ${breakpoint('md')`
    line-height: 1.7;
		font-size: 20px;
  `}
`
const Lg = styled.p`
  font-size: 22px;
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  ${breakpoint('md')`
    font-weight: 400;
    line-height: 30px;
    font-size: 28px;
  `}
`
const Quote = styled.p`
  font-size: 35px;
  color: ${props => props.theme.colors.black};
  line-height: initial;
`

export default Text;

