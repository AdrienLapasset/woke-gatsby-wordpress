import React from "react"
import Layout from "../components/layout"
import Heading from 'src/components/global/Heading'
import Text from 'src/components/global/Text'
import styled from 'styled-components'

const Legal = () => {

  return (
    <Layout>
      <Heading>MENTIONS LEGALES</Heading>
      <StyledText>
        Le site www.woke.fr est la propriété de WOKE, Association loi 1901, reconnue d’intérêt général, dont le siège social est situé au 55 allée des côtes de Chanturgues – 63100 Clermont-Ferrand.
      </StyledText>
      <StyledText>
        Tel : 0661643850<br />
        Courriel : <a href="mailto:contact@woke.fr">contact@woke.fr</a>
      </StyledText>
      <StyledText>
        Directeur de la publication :<br />
        Lê Ludovic, président de l’association
      </StyledText>
    </Layout>
  )
}

const StyledText = styled(Text)`
  margin-bottom: 15px;
  a {
    display: inline;
  }
`

export default Legal
