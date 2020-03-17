import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import 'moment/locale/fr'
import { Link, graphql, StaticQuery } from "gatsby"
import breakpoint from 'styled-components-breakpoint'
import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'
import CarouselItem from './CarouselItem'

const Carousel = ({ data }) => {
  let imgWidth
  let screenWidth
  const [activeProject, setActiveProject] = useState(1);

  useEffect(() => {
    screenWidth = window.innerWidth
    if (screenWidth > 1200) imgWidth = 250
    else if (screenWidth > 992) imgWidth = 230
    else if (screenWidth > 768) imgWidth = 720
    else imgWidth = 540
  });

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
    if (screenWidth > 992) {
      set({ x: (-id * imgWidth) + imgWidth })
    } else {
      set({ x: -id * imgWidth })
    }
    setActiveProject(id)
  }

  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ down, movement: [mx], cancel }) => {
    if (screenWidth < 992) {
      if (down && mx < -200) {
        cancel(set({ x: activeProject + 1 * -imgWidth }))
        setActiveProject(activeProject + 1)
      }
      set({ x: down ? mx : 0, immediate: down })
    }
  })


  return (
    <>
      <Heading h2>Nos dernières interventions</Heading>
      <StyledItemCropContainer>
        <StyledItemContainer {...bind()} style={{ x }} >
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
  width: 100%;
  ${breakpoint('lg')`
    height: 500px;
  `}
`
const StyledItemContainer = styled(animated.div)`
  display: flex;
  align-items: center;
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
    `}
    render={data => <Carousel data={data} {...props} />}
  />
)
