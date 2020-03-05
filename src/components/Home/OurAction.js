import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'

const OurAction = () => {
  return (
    <>
      <Heading h2>Notre action</Heading>
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
    </>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-top: 15px;
  ${breakpoint('lg')`
    flex-direction: row;
  `}
`
const ActionContainer = styled.div`
  text-align: center;
  margin-top: 120px;
  ${breakpoint('lg')`
     margin-top: 0;
  `}
`
const Number = styled.div`
  font-size: 60px;
`
const Text = styled.div`
  color: ${props => props.theme.colors.grey}
`

export default OurAction
