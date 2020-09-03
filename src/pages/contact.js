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

      <StyledForm name="contact" method="POST" data-netlify="true">
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
        <StyledInputTextarea name="message" placeholder="Votre message *" rows="10" required></StyledInputTextarea>
        <StyledButton submit>Envoyer mon message </StyledButton>
      </StyledForm>


      {/* <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form> */}

    </Layout>
  </>)
}

const StyledIntro = styled.div`
  padding-right: 80px;
  margin-bottom: 80px;
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
  padding: 5px 15px 5px;
  box-sizing: border-box;
  margin-bottom: 40px;
  font-size: 18px;
  resize: none;
  ::placeholder {
    color: ${props => props.theme.colors.black};
    font-size: 18px;
  }
`
const StyledInputText = styled.input`
  ${StyledInput}; 
`
const StyledInputTextarea = styled.textarea`
  ${StyledInput};
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
  margin: auto
`
export default Contact
