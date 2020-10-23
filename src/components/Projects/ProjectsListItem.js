import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

const ProjectsListItem = ({ edge, index }) => {

  const project = edge.node

  // const imgFluid = project.featured_media.localFile?.childImageSharp.fluid
  const imgFluid = project.featured_media.source_url
  const truncate = (string) => {
    return string.substring(3, 100) + "..."
  }

  return (
    <StyledLi>
      <Link to={`/projects/${project.slug}`}>
        <StyledNumber>{index}</StyledNumber>
        <img src={imgFluid} alt={project.title} />
        <StyledTitle>{project.title}</StyledTitle>
        <div>{truncate(project.excerpt)}</div>
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
  line-height: initial;
  bottom: -43px;
`
const StyledLi = styled.li`
  margin-bottom: 150px;
  position: relative;
  &:nth-child(even) {
    ${StyledNumber} {
      text-align: right;
    }
  }
  img {
    width: 100%;
  }
`
const StyledTitle = styled.h1`
  margin: 20px 0;
  font-weight: 400;
  font-size: 26px;
`
export default ProjectsListItem;
