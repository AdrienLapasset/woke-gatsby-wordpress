import React from 'react';
import styled from 'styled-components'

const Heading = ({ h2, children }) => {
  if (h2) return <HeadingTwo>{children}</HeadingTwo>
  return <HeadingOne>{children}</HeadingOne>
}

const HeadingOne = styled.h1`
  font-size: 38px;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
  margin: 0 0 30px;
`
const HeadingTwo = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.colors.grey};
  font-weight: 400;
`

export default Heading;
