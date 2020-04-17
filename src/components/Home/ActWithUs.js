import React from 'react'
import styled from 'styled-components'
import Button from 'src/components/global/Button';
import Heading from 'src/components/global/Heading'
import Flex from 'src/components/global/Flex'
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

import donationIcon from 'src/assets/icons/donation.svg'
import sponsoringIcon from 'src/assets/icons/sponsoring.svg'
import volunteeringIcon from 'src/assets/icons/volunteering.svg'

const ActWithUs = () => {
  return (
    <>
      <StyledSection>
        <Heading h2>Agir avec nous</Heading>
        <Flex mt={100} mb={50} justifyBetween noWrap>
          <FlexIcon>
            <StyledIcon src={donationIcon} alt="" />
          </FlexIcon>
          <FlexIcon>
            <StyledIcon src={volunteeringIcon} alt="" />
          </FlexIcon>
          <FlexIcon>
            <StyledIcon src={sponsoringIcon} alt="" />
          </FlexIcon>
        </Flex>
        <StyledContainer>
          <StyledColumn>
            <StyledTitle>Don en numéraire</StyledTitle>
            <StyledText>Le moyen le plus efficace et le plus simple de nous soutenir. Sans votre générosité, nous ne pourrions assurer notre mission. Dons déductibles de vos impôts</StyledText>
          </StyledColumn>
          <StyledColumn>
            <StyledTitle>Bénévolat</StyledTitle>
            <StyledText>Toi aussi tu aimerais agir avec nous ? Tu as des compétences à partager ou simplement du temps à nous accorder ?  Alors rejoins-nous !</StyledText>
          </StyledColumn>
          <StyledColumn>
            <StyledTitle>Mécénat d’entreprise</StyledTitle>
            <StyledText>Vous êtes chez d’entreprise, vous souhaitez soutenir une action sociale et solidaire, renforcer votre image d’entreprise engagée ?</StyledText>
          </StyledColumn>
        </StyledContainer>
        <Flex justifyBetween noWrap>
          <FlexIcon>
            <Link to="/volunteer" state={{ actionToDisplay: 'donation' }}>
              <StyledButton>Je donne</StyledButton>
            </Link>
          </FlexIcon>
          <FlexIcon>
            <Link to="/volunteer" state={{ actionToDisplay: 'bénévolat' }}>
              <StyledButton>J'agis</StyledButton>
            </Link>
          </FlexIcon>
          <FlexIcon>
            <Link to="/volunteer" state={{ actionToDisplay: 'mécénat' }}>
              <StyledButton>Je soutiens</StyledButton>
            </Link>
          </FlexIcon>
        </Flex>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
`
const StyledContainer = styled.div`
  
  ${breakpoint('lg')`
    display: flex;
    justify-content: space-between;
  `}
`
const StyledColumn = styled.div`
  flex: 0 1 340px;
  margin-right: 35px;
`
const StyledText = styled.p`
  margin-bottom: 30px;
`
const StyledButton = styled(Button)`
  flex: 0 1 340px;
  margin-right: 35px;
`
const StyledIcon = styled.img`
`
const FlexIcon = styled.div`
  flex: 0 1 340px;
  margin-right: 35px;
`
const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 30px;
`

export default ActWithUs
