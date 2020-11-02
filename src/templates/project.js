import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Moment from 'react-moment';
import Layout from "src/components/layout"
import PostContent from "src/components/global/PostContent"
import ProjectNav from "src/components/Projects/ProjectNav"
import SEO from "src/components/seo"

const ProjectTemplate = ({ data }) => {

  const project = data.wordpressPost
  const imgFluid = project.featured_media.localFile?.childImageSharp.fluid

  return (
    <>
      <Layout isFluid>
        <SEO title={`Woke - ${project.title}`} />
        <StyledHeaderImg fluid={imgFluid} />
        <StyledOverlay />
        <StyledInfoContainer>
          <StyledDate>
            <Moment interval={0} format="DD MMMM YYYY" >{project.date}</Moment>
          </StyledDate>
          {project.title}
        </StyledInfoContainer>
        <StyledContainer>
          <PostContent content={project.content} />
          <ProjectNav currentProjectSlug={project.slug} />
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
const StyledContainer = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 0 30px; 
`
const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 120px;
`
const StyledDate = styled.p`
  color: ${props => props.theme.colors.grey};
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
  }
`
