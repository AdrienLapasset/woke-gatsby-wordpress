import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"

const ProjectsListItem = ({ edge }) => {
  const project = edge.node
  const lang = project.categories[0].slug
  const imgFluid = project.featured_media.localFile?.childImageSharp.fluid
  if (lang === 'fr' && imgFluid) {
    return (
      <li>
        <Link to={project.slug}>{project.title}</Link>
        <Img fluid={imgFluid} />
      </li>
    )
  } else {
    return null
  }
}

export default ProjectsListItem;
