import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'

import axaLogo from 'src/assets/logos/theyTrustUs/axa-logo.png'
import capdecoLogo from 'src/assets/logos/theyTrustUs/capdeco-logo.png'
import cesisLogo from 'src/assets/logos/theyTrustUs/cesis-logo.png'
import pizzasLogo from 'src/assets/logos/theyTrustUs/euro-pizzas-logo.png'
import albaneLogo from 'src/assets/logos/theyTrustUs/logo-albane.png'
import octopusLogo from 'src/assets/logos/theyTrustUs/logo-octopus.png'
import pitayaLogo from 'src/assets/logos/theyTrustUs/logo-pitaya.png'
import mmaLogo from 'src/assets/logos/theyTrustUs/mma-logo.png'
import sushishopLogo from 'src/assets/logos/theyTrustUs/sushishop-logo.png'

const TheyTrustUs = () => {

  return (
    <StyledContainer>
      <Heading h2>Ils nous font confiance</Heading>
      <StyledLogosContainer>
        <StyledLogoContainer>
          <StyledLogo src={axaLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={capdecoLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={cesisLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={pizzasLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={albaneLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={octopusLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={pitayaLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={mmaLogo} alt="" />
        </StyledLogoContainer>
        <StyledLogoContainer>
          <StyledLogo src={sushishopLogo} alt="" />
        </StyledLogoContainer>
      </StyledLogosContainer>
      <Link to={'/volunteer'} state={{ actionToDisplay: 'mécénat' }}>
        <StyledButton>Entreprises, rejoignez-nous</StyledButton>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 200px 0;
`
const StyledLogosContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex: 0 0 50%;
  ${breakpoint('lg')`
    flex: 0 0 33%;
  `}
`
const StyledLogo = styled.img`
  max-height: 60px;
  max-width: 100px;
  ${breakpoint('md')`
    max-height: unset; 
    max-width: unset;
  `}
`
const StyledButton = styled(Button)`
  margin: 100px auto 0;
`
export default TheyTrustUs;
