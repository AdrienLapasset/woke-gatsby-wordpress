import React from "react";
import Layout from "../components/layout"
import styled, { css } from 'styled-components'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

import Heading from 'src/components/global/Heading'
import Text from 'src/components/global/Text'
import Flex from 'src/components/global/Flex'
import Button from 'src/components/global/Button'

const Contact = () => {

  const data = useStaticQuery(graphql`
    query {
      contactImg: file(relativePath: {eq: "contact.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 900, quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const contactImg = data.contactImg.childImageSharp.fluid

  return (<>
    <Layout>
      <StyledContainer>
        <StyledIntro>
          <Heading>Contactez-nous<br />ou venez nous rencontrer.</Heading>
          <Text>Vous avez envie de nous rejoindre,
      d’apporter votre soutien au projet, de nous poser pleins de questions&nbsp;?<br />
      Appelez-nous, envoyez-nous un mail,
      un courrier postal ou passez nous voir, on offre le café.
      </Text>
        </StyledIntro>
        <Img fluid={contactImg} imgStyle={{ objectPosition: 'center top' }} />
      </StyledContainer>

      <StyledForm name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <StyledFormRow>
          <StyledInputText type="text" name="company" placeholder="Nom de votre entreprise"></StyledInputText>
          <StyledInputText type="text" name="firstname" placeholder="Nom *" required></StyledInputText>
        </StyledFormRow>
        <StyledFormRow>
          <StyledInputText type="text" name="lastname" placeholder="Prénom *" required></StyledInputText>
          <StyledInputText type="text" name="phone" placeholder="Téléphone *" required></StyledInputText>
        </StyledFormRow>
        <StyledFormRow>
          <StyledInputText type="text" name="city" placeholder="Ville *" required></StyledInputText>
          <StyledInputText type="email" name="email" placeholder="Email *" required></StyledInputText>
        </StyledFormRow>
        <StyledInputTextarea name="message" placeholder="Votre message *" rows="8" required></StyledInputTextarea>
        <StyledAsterix>* Champs obligatoires</StyledAsterix>
        <StyledButton submit>Envoyer mon message</StyledButton>
      </StyledForm>
      <StyledAdress>
        <Text>55 allée des côtes de Chanturgues<br />63100 Clermont-Ferrand</Text>
        <StyledIframe
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTCJQiYvYBBbHvQTd82Zlg17otE_X0PH0&q=55+Allée+des+Côtes+de+Chanturgue,+63100+Clermont-Ferrand" allowfullscreen>
        </StyledIframe>
      </StyledAdress>
    </Layout>
  </>)
}

const StyledIntro = styled.div`
  margin-bottom: 60px;
  ${breakpoint('lg')`
    padding-right: 80px;
  `}
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  & > * {
    flex: 0 0 50%;
  }
  ${breakpoint('lg')`
    flex-direction: row;
  `}
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledInput = css`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.theme.colors.grey};
  overflow: auto;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  font-size: 18px;
  resize: none;
  ::placeholder {
    color: ${props => props.theme.colors.black};
    font-size: 18px;
  }
  ${breakpoint('lg')`
    padding: 5px 10px;
  `}
`
const StyledInputText = styled.input`
  ${StyledInput}; 
  margin-bottom: 40px;
`
const StyledInputTextarea = styled.textarea`
  ${StyledInput};
  margin-bottom: 15px;
`
const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint('lg')`
    flex-direction: row;
  `}
  & > * {
    flex: 1 1 auto;
    &:first-child {
      ${breakpoint('lg')`
        margin-right: 40px;
      `}
    }
    &:last-child {
      ${breakpoint('lg')`
        margin-left: 40px;
      `}
    }
  }
`
const StyledButton = styled(Button)`
  margin: 40px auto 0;
`
const StyledAdress = styled.div`
  max-width: 780px;
  margin: 230px auto;
  p {
    font-size: 16px;
    margin-bottom: 30px;
    ${breakpoint('lg')`
      font-size: 23px;
    `}
  }
`
const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 400px;
`
const StyledAsterix = styled.p`
  font-style: italic;
  font-size: 12px;
`
export default Contact
