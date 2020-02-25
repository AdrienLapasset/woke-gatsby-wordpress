import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import Moment from 'react-moment';
import 'moment/locale/fr';
import { Link } from "gatsby"

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'

const Carousel = () => {
  const [projects, setProjects] = useState([]);
  const [translateItemsX, setTranslateItemsX] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://woke.fr/wp-json/wp/v2/posts?per_page=4&categories=21`)
      const data = await response.json()
      initActiveItem(data)
    }

    fetchPost()
  }, [])

  const initActiveItem = (data) => {
    data.map((project, index) => {
      if (index === 1) {
        project.active = true
      } else {
        project.active = false
      }
      return null
    })
    setProjects(data)
  }

  const carouselItem = projects.map((project, index) => {
    return (
      <StyledItem to={`/blog/${project.slug}`} key={index} isactive={project.active}>
        {project.active ?
          <StyledInfoContainer>
            <StyledTitle>{project.title.rendered}</StyledTitle>
            <StyledDate interval={0} format="DD MMMM YYYY" >{project.date}</StyledDate>
          </StyledInfoContainer>
          : null}
        <StyledImg src={project.fimg_url} />
      </StyledItem>
    )
  })

  const carouselDot = projects.map((project, index) => {
    return (
      <StyledDot key={index} onClick={() => onClickDot(index)}></StyledDot>
    )
  })

  const setActiveItem = (id) => {
    projects.map((project, index) => {
      if (index !== id) {
        project.active = false
      } else {
        project.active = true
      }
      return null
    })
    setProjects(projects)
  }

  const onClickDot = (id) => {
    let translateX = 0
    const gap = 300
    switch (id) {
      case 0:
        translateX = gap;
        setActiveItem(id)
        break;
      case 1:
        translateX = 0;
        setActiveItem(id)
        break;
      case 2:
        translateX = -gap;
        setActiveItem(id)
        break;
      case 3:
        translateX = -gap * 2;
        setActiveItem(id)
        break;
      default:
        break;
    }
    setTranslateItemsX(translateX)
  }

  return (
    <StyledSection>
      <Heading h2>Nos dernières interventions</Heading>
      <StyledItemCropContainer>
        <StyledItemContainer translateX={translateItemsX}>
          {carouselItem}
        </StyledItemContainer>
      </StyledItemCropContainer>
      <StyledDotContainer>
        {carouselDot}
      </StyledDotContainer>
      <Link to={'/blog'} >
        <Button>Voir tous nos projets</Button>
      </Link>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin-top: 300px;
`
const StyledItemCropContainer = styled.div`
  margin-top: 100px;
  overflow-x: hidden;
  height: 500px;
`
const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  transform: translateX(${props => props.translateX}px);
  transition: transform .4s;
`
const StyledItem = styled(Link)`
  position: relative;
  flex: 0 0 290px;
  height: 400px;
  transition: all .4s;
 ${({ isactive }) => isactive && `
    flex: 0 0 600px;
    height: 500px;
    margin: 0 25px;
`}
`
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const StyledDotContainer = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  margin: 50px auto;
`
const StyledDot = styled.span`
  width: 10px;
  height: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after{
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 100%;     
    background-color: ${props => props.theme.colors.grey};
  }
  &:hover&:after{
    background-color: ${props => props.theme.colors.black};
    width: 10px;
    height: 10px;
  }
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
const StyledInfoContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  position: absolute;
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
export default Carousel
