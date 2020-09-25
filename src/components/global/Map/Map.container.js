import React, { useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import ScrollMagic from 'scrollmagic'
import Heading from 'src/components/global/Heading'
import worldMap from 'src/assets/imgs/worldMap.svg'
import Path from './Path'
import Markers from './Markers'

const Map = ({ about }) => {

  useEffect(() => {
    let screenWidth = window.innerWidth
    window.addEventListener("resize", () => screenWidth = window.innerWidth)
    if (screenWidth > 768) {
      let controller = new ScrollMagic.Controller();
      if (about) {
        new ScrollMagic.Scene({
          offset: 3800,
          duration: 2500
        })
          .setPin('#pinned')
          .addTo(controller)
      } else {
        new ScrollMagic.Scene({
          offset: 1800,
          duration: 2500
        })
          .setPin('#pinned')
          .addTo(controller)
      }
    }
  })

  return (
    <StyledSection id="pinned">
      <Heading h2>Nous sommes passés par là</Heading>
      <StyledMapContainer >
        <StyledImg src={worldMap} alt="" />
        <Path about={about} />
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
