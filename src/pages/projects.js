import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const ProjectsList = ({ data }) => {
  const postsList = data.allWordpressPost.edges.map((edge, index) => {
    const lang = edge.node.categories[0].slug
    const imgFluid = edge.node.featured_media.localFile?.childImageSharp.fluid
    if (lang === 'fr' && imgFluid) {
      return (
        <li key={index}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <Img fluid={imgFluid} />
        </li>
      )
    } else {
      return null
    }
  })

  return (
    <Layout>
      {postsList}
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
