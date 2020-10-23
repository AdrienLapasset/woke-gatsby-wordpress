import React from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
// import Img from "gatsby-image"
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'
import Button from 'src/components/global/Button'

const News = ({ data }) => {

  const projects = data.allWordpressPost.edges

  // const projectsByLang = projects.filter(project => {
  //   const lang = project.node.categories[0].slug
  //   return lang === 'fr'
  // })

  // const imgFluid = projects[0].node.featured_media.localFile.childImageSharp.fluid
  const imgFluid = projects[0].node.featured_media.source_url

  const truncate = (string) => {
    return string.substring(3, 170) + "..."
  }

  return (
    <StyledContainer>
      <Heading h2>Les actualités</Heading>
      <FlexContainer>
        <FlexElement>
          <Link to={`/blog/${projects[0].node.slug}`}>
            <Heading>{projects[0].node.title}</Heading>
            <StyledImgMobile src={imgFluid} />
            {truncate(projects[0].node.excerpt)}
            <StyledReadBtn>Lire la suite</StyledReadBtn>
          </Link>
          <StyledArticlesLink to='/blog' >
            Voir tous nos articles
          </StyledArticlesLink>
        </FlexElement>
        <FlexElement>
          <Link to={`/blog/${projects[0].node.slug}`}>
            <StyledImg src={imgFluid} />
          </Link>
        </FlexElement>
      </FlexContainer>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
const FlexContainer = styled.div`
  display: flex;
  margin-top: 60px;
`
const StyledReadBtn = styled.u`
  font-size: 14px;
  display: block;
  text-align: center;
  margin-top: 85px;
  ${breakpoint('lg')`
    font-size: 18px;
    display: inline-block;
    margin-top: 0;
  `}
`
const FlexElement = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  &:first-child {
    ${breakpoint('lg')`
    padding-right: 80px;
  `}
  }
  &:last-child {
    display: none;
    ${breakpoint('lg')`
      display: block
  `}
  }
`
const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  display: none;
  object-fit: cover;
  ${breakpoint('lg')`
    display: block;
  `}
`
const StyledImgMobile = styled.img`
  width: 100%;
  margin-bottom: 30px;
  ${breakpoint('lg')`
    display: none;
  `}
`
const StyledArticlesLink = styled(Button)`
  margin: 30px auto 0;
  display: none;
  ${breakpoint('lg')`
    display: block;
    margin: 30px auto 0 0;
  `}
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
                source_url
                # localFile {
                #   childImageSharp {
                #     fluid(maxWidth: 900, quality: 90) {
                #       ...GatsbyImageSharpFluid_withWebp
                #   }
                #   }
                # }
              }
            }
          }
        }
      }
    `}
    render={data => <News data={data} {...props} />}
  />
)
