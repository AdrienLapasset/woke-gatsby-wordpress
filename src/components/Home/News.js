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

  const imgFixed = projectsByLang[0].node.featured_media.localFile.childImageSharp.fixed

  const truncate = (string) => {
    return string.substring(3, 300) + "..."
  }

  return (
    <StyledContainer>
      <Heading h2>Les actualités</Heading>
      <StyledLink to={`/blog/${projectsByLang[0].node.slug}`}>
        <FlexContainer>
          <Heading>{projectsByLang[0].node.title}</Heading>
          {truncate(projectsByLang[0].node.excerpt)}
        </FlexContainer>
        <FlexContainer>
          <Img fixed={imgFixed} />
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

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(limit: 2) {
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
                    fixed(width: 600, height: 300) {
                      ...GatsbyImageSharpFixed
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
