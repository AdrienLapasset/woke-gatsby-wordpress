import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import Heading from 'src/components/global/Heading'
import Img from "gatsby-image"

const TeamCarousel = ({ teamImages }) => {

  const carouselItems = teamImages.map((image, index) => {
    const imgFixed = image.node.childImageSharp.fixed
    return <Img fixed={imgFixed} />
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
      display: flex;
      align-items: center;
      .slide {
        /* height: 250px; */
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


export default TeamCarousel;
