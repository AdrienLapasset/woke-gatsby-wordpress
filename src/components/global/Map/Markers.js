import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Markers = () => {

  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "projets"}}}}) {
        nodes {
          excerpt
          title
          slug
          categories {
            slug
          }
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projectsImage = data.allWordpressPost.nodes
  const markers = [
    {
      positionX: 540,
      positionY: 260,
      project: 'Association Woke',
      slug: ''
    },
    {
      positionX: 617,
      positionY: 287,
      project: 'Les prémisses',
      slug: 'les-premisses'
    },
    {
      positionX: 936,
      positionY: 457,
      project: 'YKPA',
      slug: 'ykpa'
    },
    {
      positionX: 949,
      positionY: 467,
      project: '4Ocean + Trash Hero Day',
      slug: 'trash-hero-day'
    },
    {
      positionX: 925,
      positionY: 467,
      project: 'Lombok',
      slug: 'lombok'
    },
    {
      positionX: 890,
      positionY: 447,
      project: 'Les tortues de Sumatra',
      slug: 'tortues-de-sumatra'
    },
    {
      positionX: 882,
      positionY: 440,
      project: 'Kolibri',
      slug: 'kolibri'
    },
    {
      positionX: 224,
      positionY: 370,
      project: 'Ix-Canaan Guatemala',
      slug: 'ix-canaan-guatemala'
    },
    {
      positionX: 874,
      positionY: 361,
      project: 'Thailande',
      slug: 'classroom'
    },
    {
      positionX: 814,
      positionY: 411,
      project: 'Sri Lanka',
      slug: 'sri-lanka'
    },
  ]
  const [imgToDisplay, setImgToDisplay] = useState(null)

  const handleMouseEnter = (img) => {
    const activeProject = projectsImage.find(image => image.slug === img)
    setImgToDisplay(activeProject.featured_media.localFile?.childImageSharp.fluid)
  }

  const renderMarkers = markers.map((marker, index) => {
    return (
      <>
        <StyledContainer x={marker.positionX} y={marker.positionY} key={index}>
          <StyledMarker
            to={`projects/${marker.slug}`}
            onMouseEnter={() => handleMouseEnter(marker.slug)}
            onMouseLeave={() => setImgToDisplay(null)}
          />
          <StyledLabel>{marker.project}</StyledLabel>
        </StyledContainer>
      </>
    )
  })

  return (
    <>
      {imgToDisplay ?
        <StyledImgWrapper>
          <SyledBgImage fluid={imgToDisplay} />
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
