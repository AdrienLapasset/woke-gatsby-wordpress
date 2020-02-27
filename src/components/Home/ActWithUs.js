import React from 'react'
import styled from 'styled-components'

import Heading from 'src/components/global/Heading'

const ActWithUs = () => {
  return (
    <>
      <StyledSection>
        <Heading h2>Agir avec nous TODO</Heading>
        <StyledContainer>
          <ActionContainer>
            <Number>3</Number>
            <Text>continents</Text>
          </ActionContainer>
          <ActionContainer>
            <Number>+10</Number>
            <Text>projets</Text>
          </ActionContainer>
          <ActionContainer>
            <Number>+500</Number>
            <Text>personnes touchées</Text>
          </ActionContainer>
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
        justify-content: space-around;
        width: 100%;
      `
const ActionContainer = styled.div`
      text-align: center;
      `
const Number = styled.div`
      font-size: 60px;
      `
const Text = styled.div`
color: ${props => props.theme.colors.grey}
        `

export default ActWithUs
