import React, { useState } from 'react';
import styled from 'styled-components'
import 'moment/locale/fr';
import { Link, graphql, StaticQuery } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'
import CarouselItem from './CarouselItem'

const Carousel = ({ data }) => {
  const imgWidth = 200
  const [activeProject, setActiveProject] = useState(1);
  const [translateItemsX, setTranslateItemsX] = useState(0);

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const carouselItem = projectsByLang.map((project, index) => {
    let isActive = false
    if (index === activeProject) isActive = true
    return <CarouselItem project={project.node} key={index} isActive={isActive} onClickItem={() => slide(index)} />
  })

  const carouselDot = projectsByLang.map((project, index) => {
    let isActive = false
    if (index === activeProject) isActive = true
    return (
      <StyledDot key={index} isActive={isActive} onClick={() => slide(index)} />
    )
  })

  const slide = (id) => {
    setActiveProject(id)
    setTranslateItemsX((-id * imgWidth) + imgWidth)
  }

  return (
    <>
      <Heading h2>Nos dernières interventions</Heading>
      <StyledItemCropContainer>
        <StyledItemContainer translateX={translateItemsX}>
          {carouselItem}
        </StyledItemContainer>
      </StyledItemCropContainer>
      <StyledDotContainer>
        {carouselDot}
      </StyledDotContainer>
      <Link to='/projects' >
        <Button>Voir tous nos projets</Button>
      </Link>
    </>
  )
}

const StyledItemCropContainer = styled.div`
  margin: 100px auto 0;
  overflow-x: hidden;
  max-width: 900px;
  height: 400px;
  /* ${breakpoint('lg')`
    width: 1600px;
    height: 700px;
  `} */
`
const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(${props => props.translateX}px);
  transition: transform .4s;
`
const StyledDotContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 50px auto 20px;
`
const StyledDot = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;     
    background-color: ${props => props.isActive ? 'black' : props.theme.colors.grey};
    transform: ${props => props.isActive ? 'scale(2)' : 'scale(1)'};
  }
  &:hover&:after {
    background-color: ${props => props.theme.colors.black};
    transform: scale(2);
  }
  `
export default props => (
  <StaticQuery
    query={graphql`
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
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Carousel data={data} {...props} />}
  />
)
