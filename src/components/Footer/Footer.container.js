import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import { Link } from "gatsby"

import Flex from 'src/components/global/Flex'
import NewsletterForm from './NewsletterForm'

const Footer = () => {

  const [isNewsletterFormOpen, setIsNewsletterFormOpen] = useState(false)

  useEffect(() => {
    if (isNewsletterFormOpen) window.scrollTo(0, document.body.scrollHeight)
  }, [isNewsletterFormOpen])

  const showNewsletterForm = () => {
    setIsNewsletterFormOpen(!isNewsletterFormOpen)
  }

  return (
    <>
      <StyledContainer>
        <Flex justifyBetween >
          <Flex column>
            <StyledA href=""
              target="_blank"
              rel="noopener noreferrer">
              Facebook
          </StyledA>
            <StyledA href=""
              target="_blank"
              rel="noopener noreferrer">
              Instagram
          </StyledA>
            <StyledA href=""
              target="_blank"
              rel="noopener noreferrer">
              Linkedin
          </StyledA>
          </Flex>
          <Flex column>
            <StyledLink to="/intro">Qui est Woke ?</StyledLink>
            <StyledLink to="/projects">Projets</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </Flex>
          <Flex column>
            <StyledLink to="/Volunteer">Agir</StyledLink>
            <StyledLink to="/Volunteer">Faire un don</StyledLink>
          </Flex>
          <Flex column>
            <p>Woke</p>
            <p>55 allée des côtes de Chanturgues</p>
            <p>63100 Clermont-Ferrand</p>
            <StyledA href="mailto:contact@woke.fr"
              target="_blank"
              rel="noopener noreferrer">
              contact@woke.fr
            </StyledA>
            <StyledA href="tel:+33669640007" >06 69 64 00 07</StyledA>
          </Flex>
        </Flex>
        <Flex mt={60} justifyBetween>
          <Flex>
            © {new Date().getFullYear()} Woke.&nbsp;
        <StyledA href="https://alor.design/"
              target="_blank"
              rel="noopener noreferrer">
              Création : Alor
        </StyledA>
            &nbsp;
            -
            &nbsp;
        <StyledA href="https://adrienlapasset.fr/"
              target="_blank"
              rel="noopener noreferrer">
              Développement : Adrien Lapasset
        </StyledA>
          </Flex>
          <StyledButton isNewsletterFormOpen={isNewsletterFormOpen} onClick={() => showNewsletterForm()}>S’abonner à la newsletter</StyledButton>
        </Flex>
      </StyledContainer>
      {isNewsletterFormOpen ?
        <NewsletterForm />
        : null}
    </>
  );
}

const StyledContainer = styled.section`
  margin: 150px auto 80px;
  max-width: 1600px;
  padding: 0 35px;
`
const LinkStyle = css`
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
const StyledButton = styled.button`
  font-weight: ${props => props.isNewsletterFormOpen ? '700' : '400'};
  &:hover{
    font-weight: 700
  }
`

export default Footer;
