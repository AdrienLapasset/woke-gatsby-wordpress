import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'
import worldMap from 'src/assets/imgs/worldMap.svg'
import Path from './Path'
import Markers from './Markers'

const Map = () => {
  const [bodyOffset, setBodyOffset] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top - 1300);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return (
    <StyledSection>
      <Heading h2>Nous sommes passés par là</Heading>
      <StyledMapContainer>
        <StyledImg src={worldMap} alt="" />
        <Path scrollY={scrollY} />
        <Markers />
      </StyledMapContainer>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  display: none;
  margin-top: 300px;
  height: 1200px;
  overflow: hidden;
  ${breakpoint('lg')`
    display: block;
  `}
`
const StyledMapContainer = styled.div`
  margin-top: 40px;
  position: relative;
  width: 1600px;
`
const StyledImg = styled.img`
  width: 100%;
`

export default Map
