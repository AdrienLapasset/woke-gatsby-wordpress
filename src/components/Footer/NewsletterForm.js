import React from 'react';
import styled, { css } from 'styled-components'
import Flex from 'src/components/global/Flex'
import { Link } from "gatsby"

const NewsletterForm = () => {
  return (
    <>
      <StyledContainer>
        <p>Pour recevoir nos actualités et nos projets, laissez votre email : </p>
        <Flex column>
          <StyledForm method="post" action="#">
            <StyledInput type="email" name="email" id="email" />
            <StyledButton type="submit">Je m’abonne</StyledButton>
          </StyledForm>
          <StyledText>
            En renseignant votre adresse mail, vous acceptez de recevoir chaque semaine
            nos derniers articles de blog par courrier électronique et vous prenez connaissance
            de notre <StyledLink to="/terms">Politique de confidentialité</StyledLink>.  Vous pouvez vous désinscrire à tout moment à l’aide
            des liens de désinscription ou en nous contactant à l’adresse mail :  <StyledA href="mailto:contact@woke.fr"
              target="_blank"
              rel="noopener noreferrer">
              contact@woke.fr
            </StyledA>.
          </StyledText>
        </Flex>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  background-color: #eeede2;
  padding: 60px 0;
  display: flex;
  & > * {
    flex: 1 1 0;
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`
const StyledInput = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.black};
  margin-right: 60px;
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.colors.grey};
`
const StyledButton = styled.button`
  display: flex;
  background-color: ${props => props.theme.colors.black};
  color: white;
  padding: 10px 50px;
`
const StyledText = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 18px;
`
const LinkStyle = css`
  font-size: 18px;
  display: inline-block;
  &:hover{
    text-decoration: underline;
  }
`
const StyledLink = styled(Link)`
  ${LinkStyle}
`
const StyledA = styled.a`
  ${LinkStyle}
`

export default NewsletterForm;
