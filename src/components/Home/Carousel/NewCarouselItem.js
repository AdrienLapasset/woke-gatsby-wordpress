import React from 'react';
import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

const NewCarouselItem = ({ project }) => {

  let imgFluid = null
  if (project !== undefined) {
    imgFluid = project.featured_media.localFile.childImageSharp.fluid
  }

  return (
    <>
      <Img fluid={imgFluid} style={{ height: '100%' }} />
      <StyledInfoContainer className="carousel-link" to={'projects/' + project.slug}>
        <StyledTitle className="carousel-link__title">{project.title}</StyledTitle>
        <StyledDate className="carousel-link__date" interval={0} format="DD MMMM YYYY" >{project.date}</StyledDate>
      </StyledInfoContainer>
    </>
  );
}

const StyledInfoContainer = styled(Link)`
  background-color: ${props => props.theme.colors.background};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
`
const StyledTitle = styled.h1`
  font-weight: normal;
  opacity: 0;
`
const StyledDate = styled(Moment)`
  color: ${props => props.theme.colors.grey};
  font-size: 15px;
  opacity: 0;
`

export default NewCarouselItem;
