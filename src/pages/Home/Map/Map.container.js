import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import Heading from 'src/components/global/Heading'
import worldMap from 'src/assets/imgs/worldMap.svg'
import Path from './Path'

const Map = () => {
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top - 1300);
    // setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
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
      {scrollY}
      <StyledPath scrollY={scrollY} />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
  position: relative;
`
const StyledPath = styled(Path)`
  stroke-dasharray: 1000;
  stroke-dashoffset: ${props => props.scrollY};
`
const StyledImg = styled.img`
  max-width: 100%;
  margin-top: 40px;
  position: absolute;
`

export default Map
