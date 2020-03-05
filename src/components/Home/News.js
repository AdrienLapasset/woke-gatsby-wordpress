import React, { useState, useEffect } from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"

import Heading from 'src/components/global/Heading'
import Button from 'src/components/global/Button'

const News = ({ data }) => {

  const projects = data.allWordpressPost.edges

  const projectsByLang = projects.filter(project => {
    const lang = project.node.categories[0].slug
    return lang === 'fr'
  })

  const imgFluid = projects[0].node.featured_media.localFile.childImageSharp.fluid

  const truncate = (string) => {
    return string.substring(3, 300) + "..."
  }

  return (
    <StyledContainer>
      <Heading h2>Les actualités</Heading>
      <StyledLink to={`/blog/${projects[0].node.slug}`}>
        <FlexContainer>
          <Heading>{projects[0].node.title}</Heading>
          {truncate(projects[0].node.excerpt)}
        </FlexContainer>
        <FlexContainer>
          <StyledImg fluid={imgFluid} />
        </FlexContainer>
      </StyledLink>
      <Link to={'/blog'} >
        <Button>Voir tous nos articles</Button>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
const FlexContainer = styled.div`
 flex: 1 1 50%;
 &:first-child{
   padding-right: 80px;
 }
`
const StyledLink = styled(Link)`
  margin-top: 80px;
  display: flex;
`
const StyledImg = styled(Img)`
  width: 100%;
  height: 300px;
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit: 2, filter: {categories: {elemMatch: {slug: {eq: "blog"}}}}) {
          edges {
            node {
              title
              excerpt
              slug
              categories {
                slug
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 900) {
                      ...GatsbyImageSharpFluid_withWebp
                  }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <News data={data} {...props} />}
  />
)
