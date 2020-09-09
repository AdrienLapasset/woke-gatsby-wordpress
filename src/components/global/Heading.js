import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Heading = ({ h2, children, className }) => {
  if (h2) return <HeadingTwo className={className}>{children}</HeadingTwo>
  return <HeadingOne className={className}>{children}</HeadingOne>
}

const HeadingOne = styled.h1`
  font-size: 32px;
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  margin: 0 0 30px;
  line-height: 30px;
  ${breakpoint('md')`
    line-height: unset;
    font-size: 38px;
    font-weight: 600;
  `}
`
const HeadingTwo = styled.h2`
  font-size: 16px;
  color: #B1B3B4;
  font-weight: 400;
  ${breakpoint('md')`
    font-size: 24px;
  `}
`

export default Heading;
