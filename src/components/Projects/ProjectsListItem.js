import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const ProjectsListItem = ({ edge, index }) => {

  const project = edge.node

  const imgFluid = project.featured_media.localFile?.childImageSharp.fluid

  const truncate = (string) => {
    return string.substring(3, 100) + "..."
  }

  return (
    <StyledLi>
      <Link to={`projects/${project.slug}`}>
        <StyledNumber>{index}</StyledNumber>
        <Img fluid={imgFluid} />
        <StyledTitle>{project.title}</StyledTitle>
        <StyledExcerpt>{truncate(project.excerpt)}</StyledExcerpt>
      </Link>
    </StyledLi>
  )
}

const StyledNumber = styled.p`
  font-size: 120px;
  font-weight: 600;
  color: ${props => props.theme.colors.grey};
  opacity: .3;
  position: relative;
  bottom: -40px;
`
const StyledLi = styled.li`
  margin-bottom: 150px;
  &:nth-child(even) {
    ${StyledNumber} {
      text-align: right;
    }
  }
`
const StyledTitle = styled.h1`
  margin: 20px 0;
  font-weight: 400;
  font-size: 26px;
`
const StyledExcerpt = styled.div`

`

export default ProjectsListItem;
