import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled, { keyframes } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql } from "gatsby"
import NewCarouselItem from './NewCarouselItem'
import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'

const NewCarousel = () => {
  let screenWidth = window.innerWidth
  const [isCenterMode, setIsCenterMode] = useState();

  useEffect(() => {
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
    return <NewCarouselItem project={project.node} key={index} />
  })

  return (
    <>
      <StyledContainer>
        <Heading h2>Nos dernières interventions</Heading>
        <StyledCarousel showArrows={false} showStatus={false} centerMode={isCenterMode} centerSlidePercentage={70} emulateTouch>
          {carouselItems}
        </StyledCarousel>
      </StyledContainer>
    </>
  );
}


const ToFullSize = keyframes`
  to {
    width: 350px;
    height 120px;
  }
`;
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
  margin: 100px auto 0;
`

const StyledCarousel = styled(Carousel)`
  margin: 100px auto 0;
  overflow: visible;
  .slider-wrapper {
      height: 616px;
    .slider {
      display: flex;
      align-items: center;
      .slide {
        background-color: transparent;
        transition: height .4s;
        &.selected {
          padding: 0 32px;
          height: 616px;
          .carousel-link {
            animation: ${ToFullSize} .4s forwards;
            &__title {
              animation: ${fadeIn} .2s .4s forwards;
            }
            &__date {
              animation: ${fadeIn} .4s .4s forwards;
            }
          }
        }
        &:not(.selected) {
          height: 500px;
        }
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


export default NewCarousel;
