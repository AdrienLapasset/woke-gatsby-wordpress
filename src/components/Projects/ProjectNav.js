import React, { useState, useEffect } from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'

const ProjectNav = ({ data, currentProjectSlug }) => {

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const projectsSlug = projectsByLang.map((project) => {
    return project.node.slug
  })

  const projectsTitle = projectsByLang.map((project) => {
    return project.node.title
  })

  const currentProjectIndex = projectsSlug.indexOf(currentProjectSlug)

  let previousSlugId = currentProjectIndex - 1
  let nextSlugId = currentProjectIndex + 1
  let previousSlug = null
  let nextSlug = null
  let previousTitle = null
  let nextTitle = null

  if (previousSlugId <= -1) {
    previousSlug = projectsSlug[projectsSlug.length - 1]
    previousTitle = projectsTitle[projectsSlug.length - 1]
    // previousSlugId = projectsSlug.length - 1
  } else {
    previousSlug = projectsSlug[previousSlugId]
    previousTitle = projectsTitle[previousSlugId]
  }
  if (nextSlugId >= projectsSlug.length - 1) {
    nextSlug = projectsSlug[0]
    nextTitle = projectsTitle[0]
    // nextSlugId = projectsSlug.length - 1
  } else {
    nextSlug = projectsSlug[nextSlugId]
    nextTitle = projectsTitle[nextSlugId]
  }

  return (
    <StyledContainer>
      <Link to={previousSlug}>{previousSlugId + 2}{previousTitle}</Link>
      <Link to={nextSlug}>{nextSlugId + 2}{nextTitle}</Link>
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
