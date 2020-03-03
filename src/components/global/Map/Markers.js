import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

const Markers = () => {
  const markers = [
    {
      positionX: 200,
      positionY: 300,
      project: 'Sri Lanka',
      path: 'sri-lanka',
      img: 'menuBg'
    },
    {
      positionX: 400,
      positionY: 100,
      project: 'Trash Hero Day',
      path: 'classroom',
      img: 'premices'
    }
  ]
  const [projectActive, setProjectActive] = useState(null);

  const projectsImgs = require.context('src/assets/imgs/interactiveMap', true);

  const renderMarkers = markers.map((marker, index) => {
    let imgSrc = projectsImgs(`./${marker.img}.jpg`);
    return (
      <>
        <StyledContainer x={marker.positionX} y={marker.positionY} key={index}>
          <StyledMarker
            to={`projects/${marker.path}`}
            onMouseEnter={() => setProjectActive(imgSrc)}
            onMouseLeave={() => setProjectActive(null)}
          />
          <StyledLabel>{marker.project}</StyledLabel>
        </StyledContainer>
      </>
    )
  })

  return (
    <>
      {projectActive ?
        <SyledBgImage src={projectActive} />
        : null
      }
      {renderMarkers}
    </>
  );
}

const StyledContainer = styled.div`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  display: flex;
  align-items: center;
  width: 200px;
  height: 50px;
`
const StyledLabel = styled.div`
  opacity: 0;
  background-color: ${props => props.theme.colors.black};
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  transition: opacity .2s;
`
const StyledMarker = styled(Link)`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.black};
  margin-right: 10px;
  transition: all .2s;
  &:hover {
    transform: scale(2);
    background-color: ${props => props.theme.colors.primary};
    & + ${StyledLabel} {
       opacity: 1;
    }
  }
`
const fadeIn = keyframes`
  to {
    opacity: .1;
  }
`
const SyledBgImage = styled.img`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  animation: ${fadeIn} .2s forwards;
`

export default Markers;
