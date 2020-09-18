import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Heading from 'src/components/global/Heading'
import Text from 'src/components/global/Text'
import styled from 'styled-components'
import Button from 'src/components/global/Button'

const ContactSuccess = () => {

  return (
    <Layout>
      <StyledContainer>
        <Heading>Merci !</Heading>
        <Text>Nous avons bien reçu votre message.</Text>
        <Link to="/">
          <StyledButton submit>Revenir à la page d'accueil</StyledButton>
        </Link>
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.div`
  text-align: center;
`
const StyledButton = styled(Button)`
  margin: 60px auto;
`

export default ContactSuccess
