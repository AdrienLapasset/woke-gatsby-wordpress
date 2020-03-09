import React from 'react';
import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

const CarouselItem = ({ project, isActive, onClickItem }) => {

  let imgFluid = null
  if (project !== undefined) {
    imgFluid = project.featured_media.localFile.childImageSharp.fluid
  }

  return (
    <StyledItem isActive={isActive} onClick={onClickItem}>
      {imgFluid ?
        <StyledImg fluid={imgFluid} />
        : null}
      {isActive ?
        <StyledInfoContainer to={project.slug}>
          <StyledTitle>{project.title}</StyledTitle>
          <StyledDate interval={0} format="DD MMMM YYYY" >{project.date}</StyledDate>
        </StyledInfoContainer>
        : null}
    </StyledItem>
  )
}

const StyledItem = styled.div`
  position: relative;
  transition: all .4s;
  padding: ${props => props.isActive ? '0 25px' : '0'};
  cursor: ${props => props.isActive ? 'initial' : 'pointer'};
  flex: 0 0 100%;
  height: ${props => props.isActive ? '500px' : '400px'};
  ${breakpoint('lg')`
    flex: ${props => props.isActive ? '0 0 500px' : '0 0 230px'};
  `}
  ${breakpoint('xl')`
    flex: ${props => props.isActive ? '0 0 640px' : '0 0 250px'};
  `}
`
const sizeAnim = keyframes`
  to {
    width: 350px;
    height 120px;
  }
`;
const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;
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
  animation: ${sizeAnim} .4s forwards;
`
const StyledTitle = styled.h1`
  font-weight: normal;
  opacity: 0;
  animation: ${fadeIn} .2s .4s forwards;
`
const StyledDate = styled(Moment)`
  color: ${props => props.theme.colors.grey};
  font-size: 15px;
  opacity: 0;
  animation: ${fadeIn} .4s .4s forwards;
`
const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default CarouselItem;
