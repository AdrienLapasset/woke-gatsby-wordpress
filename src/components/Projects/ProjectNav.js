import React, { useState, useEffect } from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
import Flex from 'src/components/global/Flex'

const ProjectNav = ({ data, currentProjectSlug }) => {

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const reversedProjects = projectsByLang.reverse()

  const projectsSlug = reversedProjects.map((project) => {
    return project.node.slug
  })

  const projectsTitle = reversedProjects.map((project) => {
    return project.node.title
  })

  const currentProjectIndex = projectsSlug.indexOf(currentProjectSlug)

  let previousSlugIndex = currentProjectIndex - 1
  let nextSlugIndex = currentProjectIndex + 1

  let previousSlug = projectsSlug[previousSlugIndex]
  let previousTitle = projectsTitle[previousSlugIndex]
  let previousNumber = previousSlugIndex + 1

  let nextSlug = projectsSlug[nextSlugIndex]
  let nextTitle = projectsTitle[nextSlugIndex]
  let nextNumber = nextSlugIndex + 1

  if (previousSlugIndex <= -1) {
    previousSlug = projectsSlug[projectsSlug.length - 1]
    previousTitle = projectsTitle[projectsSlug.length - 1]
    previousNumber = projectsSlug.length
  }

  if (nextSlugIndex >= projectsSlug.length - 1) {
    nextSlug = projectsSlug[0]
    nextTitle = projectsTitle[0]
    nextNumber = 1
  }

  const addZeroToNumber = (n) => {
    let num = n.toString()
    let zeroNum = num.padStart(2, '0');
    return zeroNum
  }

  return (
    <StyledContainer>
      <Link to={`projects/${previousSlug}`}>
        <Flex alignCenter>
          <StyledNumber>{addZeroToNumber(previousNumber)}</StyledNumber>
          <StyledTitle>{previousTitle}</StyledTitle>
        </Flex>
      </Link>
      <Link to={`projects/${nextSlug}`}>
        <Flex alignCenter>
          <StyledTitle>{nextTitle}</StyledTitle>
          <StyledNumber>{addZeroToNumber(nextNumber)}</StyledNumber>
        </Flex>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`
const StyledNumber = styled.span`
  color: ${props => props.theme.colors.grey};
  font-size: 64px;
  opacity: .3;
  font-weight: 500;
  margin: 0 20px;
`
const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost {
          edges {
            node {
              title
              slug
              categories {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectNav data={data} {...props} />}
  />
)
