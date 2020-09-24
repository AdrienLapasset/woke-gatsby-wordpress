import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import Img from "gatsby-image"

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'

const TheyTrustUs = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "logos/theyTrustUs"}}) {
        nodes {
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const logos = data.allFile.nodes

  const logosRender = logos.map((logo, index) => {
    return (
      <StyledLogoContainer key={index}>
        <StyledLogo fixed={logo.childImageSharp.fixed} imgStyle={{ objectFit: 'contain' }} />
      </StyledLogoContainer>
    )
  })

  return (
    <StyledContainer>
      <Heading h2>Ils nous font confiance</Heading>
      <StyledLogosContainer>
        {logosRender}
      </StyledLogosContainer>
      <Link to={'/volunteer'} state={{ actionToDisplay: 'mécénat' }}>
        <StyledButton>Entreprises, rejoignez-nous</StyledButton>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin: 200px 0;
`
const StyledLogosContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex: 0 0 50%;
  ${breakpoint('lg')`
    flex: 0 0 33%;
  `}
`
const StyledLogo = styled(Img)`
  max-height: 60px;
  max-width: 100px;
  ${breakpoint('md')`
    max-height: unset; 
    max-width: unset;
  `}
`
const StyledButton = styled(Button)`
  margin: 100px auto 0;
`
export default TheyTrustUs;
