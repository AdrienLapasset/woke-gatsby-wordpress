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
      positionX: 550,
      positionY: 150,
      project: 'Association Woke',
      path: 'sri-lanka',
      img: 'menuBg'
    },
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
