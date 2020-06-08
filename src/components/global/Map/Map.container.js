import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'
import worldMap from 'src/assets/imgs/worldMap.svg'
import Path from './Path'
import Markers from './Markers'

const Map = () => {

  return (
    <StyledSection>
      <Heading h2>Nous sommes passés par là</Heading>
      <StyledMapContainer>
        <StyledImg src={worldMap} alt="" />
        <Path />
        <Markers />
      </StyledMapContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: none;
  margin-top: 300px;
  ${breakpoint('xl')`
    display: block;
  `}
`
const StyledMapContainer = styled.div`
  margin-top: 40px;
  position: relative;
`
const StyledImg = styled.img`
  width: 100%;
`

export default Map
