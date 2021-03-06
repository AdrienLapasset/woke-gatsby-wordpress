import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import Img from "gatsby-image"

const TeamCarousel = ({ teamImages, team }) => {

  const carouselItems = teamImages.map((image, index) => {
    const imgFixed = image.node.childImageSharp.fluid
    const teamMate = team.find(teamMate => teamMate.imgName === image.node.name)
    return (
      <div key={index}>
        <StyledLegend>
          <StyledName>{teamMate.name}</StyledName>
          <StyledPosition>{teamMate.position}</StyledPosition>
        </StyledLegend>
        <Img fluid={imgFixed} imgStyle={{ objectPosition: 'center top' }} />
      </div>
    )
  })

  return (
    <>
      <StyledCarousel showArrows={false} showStatus={false} emulateTouch showThumbs={false}>
        {carouselItems}
      </StyledCarousel>
    </>
  );
}

const StyledCarousel = styled(Carousel)`
  margin: 90px 0 250px;
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
const StyledLegend = styled.div`
  text-align: left;
  margin-bottom: 50px;
`
const StyledName = styled.p`
  font-size: 29px;
  font-weight: 400;
`
const StyledPosition = styled.p`
  font-size: 16px;
`

export default TeamCarousel;
