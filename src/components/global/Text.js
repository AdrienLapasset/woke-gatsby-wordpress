import React from 'react';
import styled from 'styled-components'

const Text = ({ className, children, lg }) => {
  if (lg) return <Lg className={className}>{children}</Lg>
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

export default Text;

