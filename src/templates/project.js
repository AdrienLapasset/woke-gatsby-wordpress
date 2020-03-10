import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Moment from 'react-moment';
import Layout from "src/components/layout"
import ProjectNav from "src/components/Projects/ProjectNav"

const ProjectTemplate = ({ data }) => {

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
  blockquote p {
    font-family: 'Cambria', serif;
    font-size: 35px;
    margin: 0 150px 50px; 
    text-align: center
  }
  & p {
    &:first-of-type {
      font-family: 'Cambria', serif;
      font-size: 35px;
      margin-bottom: 120px;
    }
    &:not(:first-of-type) {
      margin: 0 100px 50px;
      & > img {
        margin: 0 auto 50px; 
      }
    }
  }
  & img {
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
  & iframe {
    max-width: 100%;
  }
`

export default ProjectTemplate

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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
