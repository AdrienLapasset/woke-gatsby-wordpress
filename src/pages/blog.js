import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import ArticleListItem from "src/components/Blog/ArticleListItem"

const Blog = ({ data }) => {

  console.log(data)

  const articles = data.allWordpressPost.edges

  const articlesList = articles.map((edge, index) => {
    const revertIndex = articles.length - index
    return <ArticleListItem key={index} edge={edge} index={revertIndex} />
  })

  return (
    <Layout>
      <StyledUl>
        {articlesList}
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
      allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "blog"}}}}) {
      # allWordpressPost {
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
                  fluid(maxWidth: 600) {
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

export default Blog;
