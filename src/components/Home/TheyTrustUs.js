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

  const logosImgs = data.allFile.nodes
  const logos = [
    {
      name: 'cesis',
      url: 'https://www.cesis-avocats.com'
    },
    {
      name: 'albane',
      url: 'https://salon.camillealbane.com/coiffeur/chamalieres/'
    },
    {
      name: 'axa',
      url: 'https://agence.axa.fr/auvergne/puy-de-dome/chamalieres/premiere-ligne-1'
    },
    {
      name: 'capdeco',
      url: 'https://www.capdeco-france.com/fr/'
    },
    {
      name: 'colombus',
      url: 'https://www.columbuscafe.com/'
    },
    {
      name: 'euro-pizzas',
      url: 'https://www.euro-pizza.fr/'
    },
    {
      name: 'mma',
      url: 'https://agence.mma.fr/clermont-ferrand-blatin/'
    },
    {
      name: 'octopus',
      url: 'https://www.octopusmag.fr/'
    },
    {
      name: 'pitaya',
      url: 'https://clermont-ferrand.pitayaresto.fr/?utm_source=google&utm_medium=organic&utm_campaign=mybusiness-website'
    },
    {
      name: 'pokawa',
      url: 'https://www.pokawa.com/'
    },
    {
      name: 'sushishop',
      url: 'https://www.sushishop.fr/fr/restaurant/clermont-ferrand'
    }
  ]


  const logosRender = logos.map((logo, index) => {
    const logoImg = logosImgs.find(logoImg => logoImg.name === logo.name)
    return (
      <StyledLogoContainer key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
        <StyledLogo fixed={logoImg.childImageSharp.fixed} imgStyle={{ objectFit: 'contain' }} />
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
const StyledLogoContainer = styled.a`
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
