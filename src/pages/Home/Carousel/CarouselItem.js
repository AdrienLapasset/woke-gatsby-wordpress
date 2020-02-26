import React from 'react';
import Img from "gatsby-image"
import styled, { keyframes } from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { Link } from "gatsby"

const CarouselItem = ({ project, isActive, onClickItem }) => {
  const imgFluid = project.featured_media.localFile.childImageSharp.fluid

  return (
    <StyledItem isActive={isActive} onClick={onClickItem}>
      <StyledImg fluid={imgFluid} />
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
  flex: 0 0 200px;
  height: 300px;
  transition: all .4s;
 ${({ isActive }) => isActive && `
    flex: 0 0 500px;
    height: 400px;
    padding: 0 25px;
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
