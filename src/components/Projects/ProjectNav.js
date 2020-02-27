import React, { useState, useEffect } from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'

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

  return (
    <StyledContainer>
      <Link to={previousSlug}>
        {previousNumber}
        {previousTitle}
      </Link>
      <Link to={nextSlug}>
        {nextNumber}
        {nextTitle}
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  & > a {
    font-size: 18px;
  }
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
