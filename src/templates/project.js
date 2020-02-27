import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Moment from 'react-moment';
import Layout from "src/components/layout"

const ProjectTemplate = ({ data }) => {

  const post = data.wordpressPost
  const imgFluid = post.featured_media.localFile?.childImageSharp.fluid

  return (
    <>
      <Layout isFluid>
        <StyledHeaderImg fluid={imgFluid} />
        <StyledInfoContainer>
          <StyledDate>
            <Moment interval={0} format="DD MMMM YYYY" >{post.date}</Moment>
          </StyledDate>
          {post.title}
        </StyledInfoContainer>
        <StyledContainer>
          <StyledContent dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* <ProjectNav postSlugs={postSlugs} currentSlug={slug} /> */}
        </StyledContainer>
      </Layout>
    </>
  )
}

const StyledHeaderImg = styled(Img)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
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
`
const StyledContent = styled.div`
  & p {
    &:first-of-type{
      font-family: 'CambriaRegular', serif;
      font-size: 35px;
      margin-bottom: 120px;
    }
    &:not(:first-of-type) {
      margin: 0 100px 70px;
      line-height: 1.7;
    }
  }
  & img {
    width: 70%;
    height: auto;
    margin: auto;
    display: block;
  }
`

export default ProjectTemplate

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
