import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Moment from 'react-moment';
import Layout from "src/components/layout"
import PostContent from "src/components/global/PostContent"
import ArticleNav from "src/components/Blog/ArticleNav"
import SEO from "src/components/seo"

const ArticleTemplate = ({ data }) => {

  const article = data.wordpressPost
  const imgFluid = article.featured_media.localFile?.childImageSharp.fluid

  return (
    <>
      <Layout isFluid>
        <SEO title={`Woke - ${article.title}`} />
        <StyledHeaderImg fluid={imgFluid} />
        <StyledOverlay />
        <StyledInfoContainer>
          <StyledDate>
            <Moment interval={0} format="DD MMMM YYYY" >{article.date}</Moment>
          </StyledDate>
          {article.title}
        </StyledInfoContainer>
        <StyledContainer>
          <PostContent content={article.content} />
          <ArticleNav currentProjectSlug={article.slug} />
        </StyledContainer>
      </Layout>
    </>
  )
}

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.black}36;
  position: absolute;
  top: 0;
`
const StyledHeaderImg = styled(Img)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`
const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 120px;
`
const StyledDate = styled.p`
  color: ${props => props.theme.colors.grey};
`
const StyledContainer = styled.div`
  max-width: 960px;
  margin: auto; 
  padding: 0 30px; 
`
export default ArticleTemplate

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      slug
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
