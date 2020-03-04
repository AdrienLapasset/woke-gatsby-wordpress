import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { fadeIn } from 'src/styles/keyframes';

import wokeLogoBlack from 'src/assets/logos/wokeLogoBlack.svg';
import wokeLogoWhite from 'src/assets/logos/wokeLogoWhite.svg';

const WokeLogo = ({ isHeaderWhite }) => {
  const [isTransition, setIsTransition] = useState(false)
  const transitionDuration = 400

  useEffect(() => {
    setIsTransition(true)
    setTimeout(() => {
      setIsTransition(false)
    }, transitionDuration)
  }, [isHeaderWhite])

  return (
    <>
      {isHeaderWhite ?
        <StyledImg src={wokeLogoWhite} alt="Woke logo" isTransition={isTransition} transitionDuration={transitionDuration} />
        :
        <StyledImg src={wokeLogoBlack} alt="Woke logo" isTransition={isTransition} transitionDuration={transitionDuration} />}
    </>
  )
}

const StyledImg = styled.img`
  opacity: ${props => props.isTransition ? '0' : '1'}; 
  animation: ${props => props.isTransition ? css`${fadeIn} ${props.transitionDuration}ms forwards` : 'none'}; 
  /* animation: ${fadeIn} .4s 2s forwards; */
`


export default WokeLogo;
