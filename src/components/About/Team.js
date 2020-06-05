import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Flex from 'src/components/global/Flex'
import Text from 'src/components/global/Text'
import { fadeIn } from 'src/styles/keyframes';
import breakpoint from 'styled-components-breakpoint';
import TeamCarousel from './TeamCarousel'
import theme from 'src/styles/theme'

const Team = () => {

  const data = useStaticQuery(graphql`
    query {
       allFile(filter: {relativeDirectory: {regex: "/team/"}}) {
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 600, height: 700, quality: 90) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const teamImages = data.allFile.edges
  const team = [
    {
      name: 'Ludovic Lê',
      position: 'Les projets',
      imgName: 'Ludo'
    },
    {
      name: 'Clément Rousseau',
      position: 'Le mécénat',
      imgName: 'clement'
    },
    {
      name: 'Sébastien Lê',
      position: 'La com’',
      imgName: 'sebastien'
    },
    {
      name: 'Yazmin H. Moreno',
      position: 'Bénévole',
      imgName: 'yazmin'
    },
    {
      name: 'Yannick Edart',
      position: 'Bénévole',
      imgName: 'yannick'
    },
    {
      name: 'Luisa Weber',
      position: 'Bénévole',
      imgName: 'luisa'
    },
  ]

  const [screenWidth, setScreenWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))
    if (screenWidth < theme.breakpoints.lg) { setIsMobile(true) } else { setIsMobile(false) }
  }, [screenWidth]);

  const [currentImage, setCurrentImage] = useState(teamImages.find(image => image.node.name === 'Ludo'))
  const [memberActive, setMenmberActive] = useState('Ludovic Lê')

  const handleMouseEnter = (imgName, memberName) => {
    setCurrentImage(teamImages.find(image => image.node.name === imgName))
    setMenmberActive(memberName)
  }

  const teamRender = team.map((member, index) => {
    const isActive = member.name === memberActive
    return (
      <>
        <SyledLi key={index} onMouseEnter={() => handleMouseEnter(member.imgName, member.name)} isActive={isActive}>
          <StyledName lg>{member.name}</StyledName>
          <p>{member.position}</p>
        </SyledLi>
      </>
    )
  })

  return (
    <>
      {isMobile ?
        <TeamCarousel teamImages={teamImages} team={team} />
        :
        <>
          <StyledContainer>
            <StyledImg fixed={currentImage.node.childImageSharp.fixed} imgStyle={{ objectPosition: 'center top' }} />
            <StyledTextContainer column>
              <StyledTitle>Derrière Woke …</StyledTitle>
              <ul>
                {teamRender}
              </ul>
            </StyledTextContainer>
          </StyledContainer>
        </>
      }
    </>
  );
}


const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 200px;
  & > * {
    flex: 1 1 0;
  }
`
const StyledTextContainer = styled(Flex)`
  margin-left: 100px;
`
const StyledTitle = styled.p`
  color: ${props => props.theme.colors.grey};
`
const StyledName = styled(Text)`
  margin-top: 20px;
`
const SyledLi = styled.li`
  & > * {
    transition: color .4s;
    color: ${props => props.isActive ? props.theme.colors.black : props.theme.colors.grey};
  }

`
const StyledImg = styled(Img)`
  opacity: 0;
  animation: ${fadeIn} .4s forwards; 
`


export default Team;
