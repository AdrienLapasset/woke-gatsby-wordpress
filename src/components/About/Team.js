import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Flex from 'src/components/global/Flex'
import Text from 'src/components/global/Text'

const Team = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/team/"}}) {  
        edges {
          node {
            name
            childImageSharp {
              fixed(width: 600, quality: 90) {
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
          <StyledName big>{member.name}</StyledName>
          <p>{member.position}</p>
        </SyledLi>
      </>
    )
  })

  return (
    <>
      <StyledContainer>
        <Img fixed={currentImage.node.childImageSharp.fixed} imgStyle={{ objectPosition: 'center top' }} />
        <StyledTextContainer column>
          <StyledTitle>Derrière Woke …</StyledTitle>
          <ul>
            {teamRender}
          </ul>
          <p>Test</p>
        </StyledTextContainer>
      </StyledContainer>
    </>
  );
}


const StyledContainer = styled(Flex)`
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
    color: ${props => props.isActive ? props.theme.colors.black : props.theme.colors.grey};
  }
`


export default Team;
