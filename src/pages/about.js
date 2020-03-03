import React from "react";
import Layout from "../components/layout"
import styled from 'styled-components'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Heading from 'src/components/global/Heading'
import Text from 'src/components/global/Text'
import Flex from 'src/components/global/Flex'
import Team from 'src/components/About/Team'
import Map from 'src/components/global/Map/Map.container'

import waterIcon from 'src/assets/icons/eau.svg'
import educationIcon from 'src/assets/icons/education.svg'
import povertyIcon from 'src/assets/icons/poverty.svg'
import emergencyIcon from 'src/assets/icons/urgence.svg'

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/about/"}}) {  
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(width: 600) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <StyledContainer mb={200}>
        <StyledText column>
          <Flex mb={50}>
            <StyledWoke>WOKE:&nbsp;</StyledWoke>
            <StyledItalic>être conscient, être éveillé.</StyledItalic>
          </Flex>
          <p>Créé en 2017, à l’initiative de 3 amis, Woke est une petite ONG qui s’est fixée pour objectif d’apporter son soutien aux initiatives sociales et solidaires qu’elle rencontre sur son chemin. Encore aujourd’hui une personne sur neuf souffre de la faim, 264 millions d’enfants ne sont pas scolarisés et on estime que le nombre de réfugiés dû au changement climatique devrait atteindre 143 millions d’ici 30 ans.
          Ces statistiques, les membres de l’association
          les connaissent bien.
            </p>
        </StyledText>
        <Img fixed={data.allFile.edges[1].node.childImageSharp.fixed} />
      </StyledContainer>
      <Heading h2>Les prémisses</Heading>
      <StyledLgText lg>
        Voyageurs et humanistes, ils ont parcouru le monde cohabitant chaque jour
        avec ceux qui n’ont rien. Ceux qui n’ont de choix que de travailler
        dès leurs plus jeunes âges, ceux qui gagnent moins de 2 dollars par jour.
      </StyledLgText>
      <StyledContainer mb={200}>
        <StyledText column>
          <p>Comment rester inactif face à eux ? Il fallait agir.
            Il nous fallait créer un lien entre la générosité des uns
            et la nécessité des autres. Créer une entité qui nous permettait de collecter des fonds afin de construire, ensemble, des actions humanitaires ayant un réel impact.
            Et pour être certain que ces actions soient le plus efficaces possible et qu’elles perdurent dans le temps, il nous faut s’associer avec des acteurs locaux.<br />
            Des individus, souvent regroupés en petites organisations, qui luttent déjà contre ces problématiques et qui connaissent donc parfaitement leurs environnements. Ce sont eux qui assureront la pérennité du projet après notre départ, un point capital si nous voulons vraiment que les choses changent.
            </p>
        </StyledText>
        <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} imgStyle={{ objectPosition: 'center top' }} />
      </StyledContainer>
      <Heading h2>Notre force</Heading>
      <StyledLgText lg>
        Woke est une entité apolitique, indépendante et autonome.<br />
        Nous choisissons nos projets en fonction des rencontres et des opportunités
        et ceci en toute indépendance. Sachez également que l’ensemble des membres
        de l’association sont des bénévoles nous permettant d’affecter ainsi la totalité
        de nos dons à la réalisation de nos projets.
      </StyledLgText>
      <Team />
      <Flex justifyBetween>
        <Flex column>
          <StyledIcon src={waterIcon} alt="" />
          <Text lg>Eau et assainissement</Text>
        </Flex>
        <Flex column>
          <StyledIcon src={educationIcon} alt="" />
          <Text lg>Education</Text>
        </Flex>
        <Flex column>
          <StyledIcon src={emergencyIcon} alt="" />
          <Text lg>Gestion situation urgence</Text>
        </Flex>
        <Flex column>
          <StyledIcon src={povertyIcon} alt="" />
          <Text lg>Réduction de la pauvreté</Text>
        </Flex>
      </Flex>
      <Map />
    </Layout >
  )
}

const StyledWoke = styled.p`
  font-family: 'Cambria', serif;
`
const StyledItalic = styled.p`
  font-family: 'Cambria', serif;
  font-style: italic;
  font-weight: 300;
`
const StyledContainer = styled(Flex)`
  & > * {
    flex: 1 1 50%;
  }
`
const StyledText = styled(Flex)`
  padding-right: 75px;
`
const StyledLgText = styled(Text)`
  margin: 30px 0 200px;
  max-width: 950px;
`
const StyledIcon = styled.img`
  margin-bottom: 40px;
`

export default About
