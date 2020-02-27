import React from 'react'
import styled from 'styled-components'

import Heading from 'src/components/global/Heading'

import donationIcon from 'src/assets/icons/donation.svg'
import sponsoringIcon from 'src/assets/icons/sponsoring.svg'
import volunteeringIcon from 'src/assets/icons/volunteering.svg'

const ActWithUs = () => {
  return (
    <>
      <StyledSection>
        <Heading h2>Agir avec nous</Heading>
        <StyledContainer>
          <StyledColumn>
            <img src={donationIcon} alt="" />
            <StyledTitle>Don en numéraire</StyledTitle>
            <p>Le moyen le plus efficace et le plus simple de nous soutenir. Sans votre générosité, nous ne pourrions assurer notre mission. Dons déductibles de vos impôts.</p>
          </StyledColumn>
          <StyledColumn>
            <img src={volunteeringIcon} alt="" />
            <StyledTitle>Bénévolat</StyledTitle>
            <p>Toi aussi tu aimerais agir avec nous ? Tu as des compétences à partager ou simplement du temps à nous accorder ?  Alors rejoins-nous !</p>
          </StyledColumn>
          <StyledColumn>
            <img src={sponsoringIcon} alt="" />
            <StyledTitle>Mécénat d’entreprise</StyledTitle>
            <p>Vous êtes chez d’entreprise, vous souhaitez soutenir une action sociale et solidaire, renforcer votre image d’entreprise engagée ?</p>
          </StyledColumn>
        </StyledContainer>
      </StyledSection>
    </>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
`
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`
const StyledColumn = styled.div`
  flex: 0 1 340px;
`
const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin: 50px 0 30px;
`

export default ActWithUs
