import React, { useState } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Heading from 'src/components/global/Heading'
import Button from 'src/components/global/Button'

import video from 'src/assets/videos/homePageVideo.mp4'
import closeIcon from 'src/assets/icons/close.svg'

const Landing = () => {

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const onToggleVideo = () => {
    setIsVideoOpen(!isVideoOpen)
  }

  const data = useStaticQuery(graphql`
    query {
      landingImg: file(relativePath: { eq: "premices.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <StyledContainer>
        <StyledColumn>
          <Heading>
            Soutenez-nous,<br />
            Soutenez-les !
          </Heading>
          <p>
            ONG humanitaire française, nous voyageons
            à travers le monde à la rencontre d’initiatives locales
            afin d’apporter, ensemble, des solutions pérennes
            à la lutte contre la pauvreté et l’exclusion sociale.
        </p>
          <StyledButton>En savoir + sur Woke</StyledButton>
        </StyledColumn>
        <StyledColumn>
          <StyledImg fluid={data.landingImg.childImageSharp.fluid} />
          <VideoBtn onClick={onToggleVideo}>
            <PlayIcon>
              <Triangle />
            </PlayIcon>
            Voir la vidéo
            </VideoBtn>
        </StyledColumn>
      </StyledContainer>
      {isVideoOpen ?
        <StyledVideoContainer>
          <StyledIcon src={closeIcon} alt="close video" onClick={onToggleVideo} />
          <StyledVideo controls src={video} autoPlay type="video/mov" />
        </StyledVideoContainer>
        : null
      }
    </>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 260px;
  ${breakpoint('lg')`
    flex-direction: row;
    margin-bottom: 200px;
  `}
`
const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: flex-start;
  &:first-child{
    padding: 150px 0 260px;
    ${breakpoint('lg')`
      padding: 120px 120px 0 0;
    `}
  }
  &:last-child{
    padding-left: 0;
    ${breakpoint('lg')`
      padding-left: 120px;
    `}
  }
`
const StyledButton = styled(Button)`
  margin-top: 60px;
`
const StyledImg = styled(Img)`
  width: 100%;
  height: 520px;
  ${breakpoint('lg')`
    height: 800px;
  `}
`
const VideoBtn = styled.button`
  width: 200px;
  height: 85px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  ${breakpoint('md')`
    width: 320px;
    height: 120px;
  `}
`
const PlayIcon = styled.span`
  width: 35px;
  height: 35px;
  border: solid 1px ${props => props.theme.colors.black};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`
const Triangle = styled.span`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;  
  border-left: 15px solid ${props => props.theme.colors.black};
  position: relative;
  left: 2px;
`
const StyledVideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;  
  background-color: #28241C;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledVideo = styled.video`
  width: 80%;
`
const StyledIcon = styled.img`
  position: absolute;
  width: 25px;
  top: 50px;
  right: 50px;
  cursor: pointer;
`

export default Landing;
