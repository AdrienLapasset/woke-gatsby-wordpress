import React from 'react';
import styled from 'styled-components'
import { fadeIn } from 'src/styles/keyframes';

import wokeLogoBlack from 'src/assets/logos/wokeLogoBlack.svg';
import wokeLogoWhite from 'src/assets/logos/wokeLogoWhite.svg';

const WokeLogo = ({ isHeaderWhite }) => {
  if (isHeaderWhite) { return <StyledImg src={wokeLogoWhite} alt="Woke logo" /> }
  else { return <StyledImg src={wokeLogoBlack} alt="Woke logo" /> }
}

const StyledImg = styled.img`
  opacity: 0;
  animation: ${fadeIn} 4s .2s forwards;
`


export default WokeLogo;
