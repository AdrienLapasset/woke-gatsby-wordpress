import React from 'react';
import styled from 'styled-components'

const Text = ({ className, children, big }) => {
  if (big) return <Big className={className}>{children}</Big>
  return <Base className={className}>{children}</Base>

}

const Base = styled.p`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`
const Big = styled.p`
  font-size: 28px;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
`

export default Text;

