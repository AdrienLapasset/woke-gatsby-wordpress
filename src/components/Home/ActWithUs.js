import React from 'react'
import styled from 'styled-components'
import Button from 'src/components/global/Button';
import Heading from 'src/components/global/Heading'
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

import DonationIcon from 'src/assets/icons/Donation.js'
import SponsoringIcon from 'src/assets/icons/Sponsoring.js'
import VolunteeringIcon from 'src/assets/icons/Volunteering.js'

const ActWithUs = () => {
  return (
    <>
      <StyledSection>
        <Heading h2>Agir avec nous</Heading>
        <StyledContainer>
          <StyledColumn>
            <DonationIcon />
            <StyledTitle>Don en numéraire</StyledTitle>
            <StyledText>Le moyen le plus efficace et le plus simple de nous soutenir. Sans votre générosité, nous ne pourrions assurer notre mission. Dons déductibles de vos impôts</StyledText>
            <StyledLink to="/volunteer" state={{ actionToDisplay: 'donation' }}>
              <Button>Je donne</Button>
            </StyledLink>
          </StyledColumn>
          <StyledColumn>
            <SponsoringIcon />
            <StyledTitle>Bénévolat</StyledTitle>
            <StyledText>Toi aussi tu aimerais agir avec nous ? Tu as des compétences à partager ou simplement du temps à nous accorder ?  Alors rejoins-nous !</StyledText>
            <StyledLink to="/volunteer" state={{ actionToDisplay: 'bénévolat' }}>
              <Button>J'agis</Button>
            </StyledLink>
          </StyledColumn>
          <StyledColumn>
            <VolunteeringIcon />
            <StyledTitle>Mécénat d’entreprise</StyledTitle>
            <StyledText>Vous êtes chez d’entreprise, vous souhaitez soutenir une action sociale et solidaire, renforcer votre image d’entreprise engagée ?</StyledText>
            <StyledLink to="/volunteer" state={{ actionToDisplay: 'mécénat' }}>
              <Button>Je soutiens</Button>
            </StyledLink>
          </StyledColumn>
        </StyledContainer>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  background-color: rgb(225, 218, 184);
  margin: 0 -35px;
  padding: 50px 35px;
  ${breakpoint('sm')`
    background-color: unset;
    margin: unset;
  `}
`
const StyledContainer = styled.div`
  margin-top: 100px;
  ${breakpoint('xl')`
    display: flex;
    justify-content: space-between;
  `}
`
const StyledText = styled.p`
  margin-bottom: 30px;
`
const StyledColumn = styled.div`
  flex: 0 1 340px;
  margin-right: 35px;
  margin-bottom: 50px;
  &:nth-child(2) {
    ${StyledText} {
      margin-bottom: 70px;
    }
  }
  &:nth-child(3) {
    ${StyledText} {
      margin-bottom: 70px;
    }
  }
  ${breakpoint('xl')`
    margin-bottom: 0px;
  `}
`

const StyledTitle = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 24px;
  ${breakpoint('sm')`
    font-weight: 400;
    margin-bottom: 30px;
    font-size: 30px;
  `}
`
const StyledLink = styled(Link)`
  display: none;
  ${breakpoint('xl')`
    display: block;
  `}  
`

export default ActWithUs
