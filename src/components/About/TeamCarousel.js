import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import Heading from 'src/components/global/Heading'
import Img from "gatsby-image"

const TeamCarousel = ({ teamImages, team }) => {

  const carouselItems = teamImages.map((image, index) => {
    const imgFixed = image.node.childImageSharp.fixed
    const teamMate = team.find(teamMate => teamMate.imgName === image.node.name)
    return (
      <div key={index}>
        <StyledLegend>
          <StyledName>{teamMate.name}</StyledName>
          <StyledPosition>{teamMate.position}</StyledPosition>
        </StyledLegend>
        <Img fixed={imgFixed} style={{ width: '100%' }} />
      </div>
    )
  })

  return (
    <>
      <StyledContainer>
        <StyledCarousel showArrows={false} showStatus={false} emulateTouch>
          {carouselItems}
        </StyledCarousel>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  margin: 250px auto 0;
  ${breakpoint('md')`
    margin: 100px auto 0;
  `}
`
const StyledCarousel = styled(Carousel)`
  .slider-wrapper {
    .slider {
     
      .slide {
        background-color: transparent;
      }
    }
  }
  .control-dots {
    position: relative;
    margin: 60px 0 0 0;
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: ${props => props.theme.colors.grey};
      box-shadow: none;
      margin: 0 12px;
      &.selected {
        background-color: black;
        transform: scale(2);
        outline: none;
      }
    }
  }
`
const StyledName = styled.p`
  font-size: 29px;
  font-weight: 400;
`
const StyledPosition = styled.p`
  font-size: 16px;
`
const StyledLegend = styled.p`
  text-align: left;
  margin-bottom: 50px;
`


export default TeamCarousel;
