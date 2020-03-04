import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Moment from 'react-moment';
import Layout from "src/components/layout"
import ProjectNav from "src/components/Projects/ProjectNav"

const ArticleTemplate = ({ data }) => {

  const project = data.wordpressPost
  const imgFluid = project.featured_media.localFile?.childImageSharp.fluid

  return (
    <>
      <Layout isFluid>
        <StyledHeaderImg fluid={imgFluid} />
        <StyledInfoContainer>
          <StyledDate>
            <Moment interval={0} format="DD MMMM YYYY" >{project.date}</Moment>
          </StyledDate>
          {project.title}
        </StyledInfoContainer>
        <StyledContainer>
          <StyledContent dangerouslySetInnerHTML={{ __html: project.content }} />
          <ProjectNav currentProjectSlug={project.slug} />
        </StyledContainer>
      </Layout>
    </>
  )
}

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
`
const StyledContent = styled.div`
  & p {
    &:first-of-type{
      font-family: 'Cambria', serif;
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
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
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
