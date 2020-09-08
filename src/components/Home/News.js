import React from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from "gatsby-image"
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'
import Button from 'src/components/global/Button'

const News = ({ data }) => {

  const projects = data.allWordpressPost.edges

  // const projectsByLang = projects.filter(project => {
  //   const lang = project.node.categories[0].slug
  //   return lang === 'fr'
  // })

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
          <StyledImgMobile fluid={imgFluid} />
          {truncate(projects[0].node.excerpt)}
        </FlexContainer>
        <FlexContainer>
          <StyledImg fluid={imgFluid} />
        </FlexContainer>
      </StyledLink>
      <StyledArticlesLink to={'/blog'} >
        <Button>Voir tous nos articles</Button>
      </StyledArticlesLink>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
const FlexContainer = styled.div`
 flex: 1 1 50%;
 &:first-child{
   ${breakpoint('lg')`
    padding-right: 80px;
  `}
 }
`
const StyledLink = styled(Link)`
  margin-top: 80px;
  ${breakpoint('lg')`
    display: flex;
  `}
`
const StyledImg = styled(Img)`
  width: 100%;
  height: 300px;
  display: none;
  ${breakpoint('lg')`
    display: block;
  `}
`
const StyledImgMobile = styled(Img)`
  width: 100%;
  margin-bottom: 30px;
  ${breakpoint('lg')`
    display: none;
  `}
`
const StyledArticlesLink = styled(Link)`
  Button {
    margin: 30px auto 0;
    ${breakpoint('lg')`
      margin: 30px auto 0 0;
    `}
  }
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
                    fluid(maxWidth: 900, quality: 90) {
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
