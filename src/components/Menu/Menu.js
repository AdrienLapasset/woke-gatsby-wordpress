import React from 'react';
import styled, { keyframes } from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import { fadeIn } from 'src/styles/keyframes';

import moreIcon from 'src/assets/icons/more.svg';

const Menu = () => {

  const pages = [
    { name: 'Intro', path: '/' },
    { name: 'Qui est Woke ?', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Agir avec nous', path: '/volunteer' },
  ]

  const data = useStaticQuery(graphql`
    query {
      menuBgImg: file(relativePath: { eq: "menuBg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const pageList = pages.map((page, index) => {
    return (
      <StyledLi key={index}>
        <StyledNavLink to={page.path} activeClassName="active" partiallyActive={page.path !== '/'}>
          <StyledText>
            {page.name}
          </StyledText>
        </StyledNavLink>
      </StyledLi>
    )
  })

  return (
    <>
      <StyledContainer>
        <StyledBackgroundImage fluid={data.menuBgImg.childImageSharp.fluid} fadeIn={false}>
          <StyledUlContainer>
            <StyledUl>
              {pageList}
            </StyledUl>
          </StyledUlContainer>
        </StyledBackgroundImage>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  animation: ${fadeIn} .2s forwards;
`
const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
`
const StyledUlContainer = styled.div`
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
  top: 0;
  right: 0;
`
const heightAnim = keyframes`
  to {
    padding: 400px 0 0 40px;
    height: 680px;
  }
`
const StyledUl = styled.ul`
  flex: 0 0 auto;
  margin-left: auto;
  border-left: 1px solid rgba(255, 255, 255, .3);
  width: 240px;
  animation: ${heightAnim} .6s forwards;
  height: 0;
`
const StyledText = styled.p`
  font-weight: 400;
  font-size: 23px;
`
const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 15px;
  opacity: 0;
  animation: ${fadeIn} .8s .4s forwards;
  &:nth-child(2)  {
    animation-delay: .5s;
  }
  &:nth-child(3) {
    animation-delay: .6s;
  }
  &:nth-child(4) {
    animation-delay: .7s;
  }
  &:nth-child(5) {
    animation-delay: .8s;
  }
`
const StyledNavLink = styled(Link)`
  position: relative;
  color: white;
   &.active, &:hover {
    color: ${props => props.theme.colors.primary};
    &:before {
      content: url(${moreIcon});
      position: absolute;
      left: -59px;
      top: -3px;
    }
  }
  &:hover&:before {
    opacity: .5;
  }
`

export default Menu;
