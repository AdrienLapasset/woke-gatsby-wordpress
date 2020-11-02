import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled, { keyframes } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql, Link } from "gatsby"

import CarouselItem from './CarouselItem'
import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'
import chevron from 'src/assets/icons/chevron-white.svg'

const ProjectsCarousel = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [isCenterMode, setIsCenterMode] = useState(true)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))
    if (screenWidth < 768) {
      setIsCenterMode(false)
    } else {
      setIsCenterMode(true)
    }
  }, [screenWidth]);

  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(limit: 8) {
        edges {
          node {
            title
            date
            slug
            categories {
              slug
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const carouselItems = projectsByLang.map((project, index) => {
    return <CarouselItem project={project.node} key={index} />
  })

  return (
    <>
      <StyledContainer>
        <Heading h2>Nos dernières interventions</Heading>
        <StyledCarousel autoPlay infiniteLoop transitionTime={600} interval={4000} showStatus={false} centerMode={isCenterMode} centerSlidePercentage={70} emulateTouch showThumbs={false}
          renderArrowPrev={(onClickHandler) =>
            <button className="prevBtn" type="button" onClick={onClickHandler}>
              <img src={chevron} alt="" />
            </button>}
          renderArrowNext={(onClickHandler) =>
            <button className="nextBtn" type="button" onClick={onClickHandler}>
              <img src={chevron} alt="" />
            </button>}
        >
          {carouselItems}
        </StyledCarousel>
        <StyledLink to="/projects">
          <Button>Voir tous nos projets</Button>
        </StyledLink>
      </StyledContainer>
    </>
  );
}


const ToFullSizeSm = keyframes`
  to {
    width: 188px;
    height 70px;
  }
`
const ToFullSizeLg = keyframes`
  to {
    width: 350px;
    height 120px;
  }
`
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`
const StyledContainer = styled.div`
  margin: 250px auto 0;
  ${breakpoint('md')`
    margin: 100px auto 0;
  `}
`
const StyledCarousel = styled(Carousel)`
  position: relative;
  margin: 100px auto 0;
  overflow: visible;
  .slider-wrapper {
    height: 250px;
    .slider {
      display: flex;
      align-items: center;
      .slide {
        height: 250px;
        background-color: transparent;
        transition: height .4s;
        ${breakpoint('md')`
          padding: 0 16px;
        `}
        &.selected {
          .carousel-link {
              animation: ${ToFullSizeSm} .4s forwards;
            ${breakpoint('md')`
              animation: ${ToFullSizeLg} .4s forwards;
            `}
            &__title {
              animation: ${fadeIn} .2s .4s forwards;
            }
            &__date {
              animation: ${fadeIn} .4s .4s forwards;
            }
          }
        }
        &:not(.selected) {
          ${breakpoint('md')`
            height: 500px;
          `}
        }
        ${breakpoint('md')`
          height: 616px;
        `}
      }
    }
    ${breakpoint('md')`
      height: 616px;
    `}
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
  button {
    z-index: 1;
    position: absolute;
    top: 0px;
    display: none;
    height: 610px;
    width: 100px;
    opacity: 0;
    transition: opacity .2s;
    &:hover {
      opacity: 1;
    }
    ${breakpoint('md')`
      display: block;
    `}
    &.prevBtn {
      left: 0px;
      transform: rotate(180deg);
    }
    &.nextBtn {
      right: 0px;
    }
    img {
      width: auto;
    }
  }
`
const StyledLink = styled(Link)`
  margin-top: 60px;
  Button {
    margin: auto;
    ${breakpoint('md')`
      margin: unset;
    `}
  }
`


export default ProjectsCarousel;
