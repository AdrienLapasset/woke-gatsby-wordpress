import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Markers = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/interactiveMap/"}}) {  
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const projectsImage = data.allFile.edges

  const markers = [
    {
      positionX: 540,
      positionY: 260,
      project: 'Association Woke',
      path: '',
      img: ''
    },
    {
      positionX: 617,
      positionY: 287,
      project: 'Les prémisses',
      path: '',
      img: ''
    },
    {
      positionX: 936,
      positionY: 457,
      project: 'YKPA',
      path: '',
      img: ''
    },
    {
      positionX: 949,
      positionY: 467,
      project: '4Ocean + Trash Hero Day',
      path: '',
      img: ''
    },
    {
      positionX: 925,
      positionY: 467,
      project: 'Lombok',
      path: '',
      img: ''
    },
    {
      positionX: 890,
      positionY: 447,
      project: 'Les tortues de Sumatra',
      path: '',
      img: ''
    },
    {
      positionX: 882,
      positionY: 440,
      project: 'Kolibri',
      path: '',
      img: ''
    },
    {
      positionX: 224,
      positionY: 370,
      project: 'Ix-Canaan Guatemala',
      path: '',
      img: ''
    },
    {
      positionX: 874,
      positionY: 361,
      project: 'Thailande',
      path: '',
      img: ''
    },
    {
      positionX: 814,
      positionY: 411,
      project: 'Sri Lanka',
      path: '',
      img: ''
    },
  ]
  const [projectActive, setProjectActive] = useState(null)

  const handleMouseEnter = (img) => {
    setProjectActive(projectsImage.find(image => image.node.name === img))
  }

  const renderMarkers = markers.map((marker, index) => {
    return (
      <>
        <StyledContainer x={marker.positionX} y={marker.positionY} key={index}>
          <StyledMarker
            to={`projects/${marker.path}`}
            onMouseEnter={() => handleMouseEnter(marker.img)}
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
        <StyledImgWrapper>
          <SyledBgImage fluid={projectActive.node.childImageSharp.fluid} />
        </StyledImgWrapper>
        : null}
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
`
const StyledLabel = styled.div`
  display: none;
  opacity: 0;
  width: max-content;
  background-color: ${props => props.theme.colors.black};
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  transition: opacity .2s;
  position: absolute;
  left: 25px;
`
const StyledMarker = styled(Link)`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.black};
  margin-right: 10px;
  transition: all .2s;
  &:hover {
    transform: scale(2);
    background-color: ${props => props.theme.colors.primary};
    & + ${StyledLabel} {
      opacity: 1;
      display: block;
    }
  }
`
const fadeIn = keyframes`
  to {
    opacity: .15;
  }
`
const StyledImgWrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
`
const SyledBgImage = styled(Img)`
  opacity: 0;
  filter: saturate(0);
  animation: ${fadeIn} .2s forwards;
  height: 100%;
`

export default Markers;
