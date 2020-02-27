import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsListItem from "src/components/Projects/ProjectsListItem"

const ProjectsList = ({ data }) => {
  const projects = data.allWordpressPost.edges
  const projectsList = projects.map((edge, index) => {
    return <ProjectsListItem edge={edge} key={index} />
  })

  return (
    <Layout>
      {projectsList}
    </Layout>
  )
}

export const query = graphql`
  query {
      allWordpressPost {
        edges {
          node {
            title
            slug
            categories {
              slug
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_noBase64
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
