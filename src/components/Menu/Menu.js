import React from 'react';
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { fadeIn } from 'src/styles/keyframes';

import moreIcon from 'src/assets/icons/more.svg';

const Menu = () => {

  const pages = [
    { name: 'Intro', path: '/' },
    { name: 'Qui est Woke ?', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Agir avec nous', path: '/Volunteer' },
  ]

  const pageList = pages.map((page, index) => {
    return (
      <StyledLi key={index}>
        <StyledNavLink to={page.path} activeClassName="active" partiallyActive={page.path !== '/'}>{page.name}</StyledNavLink>
      </StyledLi>
    )
  })

  const data = useStaticQuery(graphql`
    query {
      menuBgImg: file(relativePath: { eq: "menuBg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledContainer>
        <StyledImg fluid={data.menuBgImg.childImageSharp.fluid} />
        <StyledUlContainer>
          <StyledUl>
            {pageList}
          </StyledUl>
        </StyledUlContainer>
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
const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`
const StyledUlContainer = styled.div`
  max-width: 1600px;
  padding: 0 15px;
  margin: 0 auto;
  position: absolute;
  top: 0;
    right: 0;
`
const StyledUl = styled.ul`
  flex: 0 0 auto;
  margin-left: auto;
  border-left: 1px solid rgba(255, 255, 255, .3);
  padding: 400px 0 0 40px;
  width: 240px;
`
const StyledLi = styled.li`
  list-style: none;
  margin-bottom: 15px;
`
const StyledNavLink = styled(Link)`
  font-weight: 400;
  font-size: 23px;
  color: white;
  text-decoration: none;
  position: relative;
   &.active, &:hover {
    color: ${props => props.theme.colors.primary};
    &:before {
      content: url(${moreIcon});
      position: absolute;
      left: -59px;
      top: -3px;
    }
  }
`

export default Menu;
