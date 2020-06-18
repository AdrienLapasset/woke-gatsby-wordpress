import React from 'react';
import styled, { css } from 'styled-components'
import Flex from 'src/components/global/Flex'
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';

const NewsletterForm = ({ isNewsletterFormOpen }) => {
  return (
    <>
      <StyledContainer isNewsletterFormOpen={isNewsletterFormOpen}>
        <StyledLayout>
          <StyledTitle>Pour recevoir nos actualités et nos projets, laissez votre email : </StyledTitle>
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
        </StyledLayout>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.section`
  max-height: ${props => props.isNewsletterFormOpen ? '900px' : '0px'};
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.22, 0.61, 0.36, 1);
`
const StyledLayout = styled.section`
  background-color: #eeede2;  
  margin: 0 auto;
  max-width: 1600px;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  ${breakpoint('lg')`
    flex-direction: row;
  `}
  & > * {
    flex: 1 1 0;
  }
`
const StyledTitle = styled.p`
  font-size: 25px;
  margin: 15px 0;
  font-weight: 900;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  ${breakpoint('sm')`
    flex-direction: row;
  `}
`
const StyledInput = styled.input`
  height: 62px;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.black};
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.colors.grey};
  margin: 0 0 30px 0;
  ${breakpoint('sm')`
    margin: 0 60px 0 0;
  `}
`
const StyledButton = styled.button`
  height: 62px;
  display: flex;
  background-color: ${props => props.theme.colors.black};
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
`
const StyledText = styled.p`
  font-style: italic;
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
