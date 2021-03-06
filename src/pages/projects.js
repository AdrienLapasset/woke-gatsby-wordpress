import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SEO from "src/components/seo"

import Layout from "../components/layout"
import ProjectsListItem from "src/components/Projects/ProjectsListItem"

const ProjectsList = ({ data }) => {

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const projectsList = projectsByLang.map((edge, index) => {
    const revertIndex = projectsByLang.length - index
    return <ProjectsListItem key={index} edge={edge} index={revertIndex} />
  })

  return (
    <Layout>
      <SEO title="Woke - Projets" />
      <StyledUl>
        {projectsList}
      </StyledUl>
    </Layout>
  )
}

const StyledUl = styled.ul`
  margin: 0 auto;
  max-width: 600px;
`

export const query = graphql`
  query {
      allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "projets"}}}}) {
        edges {
          node {
            excerpt
            title
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
`

export default ProjectsList;
