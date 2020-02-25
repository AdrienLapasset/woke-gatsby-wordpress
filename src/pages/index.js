import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const postsList = data.allWordpressPost.edges.map(edge => {
    const lang = edge.node.categories[0].slug
    console.log(lang)
    if (lang === 'fr') {
      return <li><Link to={edge.node.slug}>{edge.node.title}</Link></li>

    } else {
      return null
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">Go to page 2</Link>
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
          }
        }
      }
    }
`

export default IndexPage
