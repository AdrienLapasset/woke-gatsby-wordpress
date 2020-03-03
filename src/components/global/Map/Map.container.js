import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

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
      <StyledImg src={worldMap} alt="" />
      <StyledPath scrollY={scrollY} />
      <Markers />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
  position: relative;
  height: 1200px;
`
const StyledPath = styled(Path)`
  stroke-dasharray: 1000;
  stroke-dashoffset: ${props => props.scrollY};
  position: absolute;
`
const StyledImg = styled.img`
  width: 100%;
  margin-top: 40px;
  position: absolute;
`

export default Map
