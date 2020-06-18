import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
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
        <Flex column justifyBetween rowMd >
          <Flex column mb={70} mbMd={0}>
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
            <StyledLink to="/volunteer" state={{ actionToDisplay: 'bénévolat' }}>Agir</StyledLink>
            <StyledLink to="/">Faire un don</StyledLink>
          </Flex>
          <StyledAdress >
            <p>Woke</p>
            <p>55 allée des côtes de Chanturgues</p>
            <p>63100 Clermont-Ferrand</p>
            <StyledA href="mailto:contact@woke.fr"
              target="_blank"
              rel="noopener noreferrer">
              contact@woke.fr
            </StyledA>
            <StyledA href="tel:+33669640007" >06 69 64 00 07</StyledA>
          </StyledAdress>
        </Flex>
        <Flex column rowMd mt={60} justifyBetween>
          <Flex column rowMd>
            © {new Date().getFullYear()} Woke.&nbsp;
        <StyledA href="https://alor.design/"
              target="_blank"
              rel="noopener noreferrer">
              Création : Alor
        </StyledA>
            <StyledScore>
              &nbsp;
              -
              &nbsp;
            </StyledScore>
            <StyledA href="https://adrienlapasset.fr/"
              target="_blank"
              rel="noopener noreferrer">
              Développement : Adrien Lapasset
        </StyledA>
          </Flex>
          <StyledButton isNewsletterFormOpen={isNewsletterFormOpen} onClick={() => showNewsletterForm()}>S’abonner à la newsletter</StyledButton>
        </Flex>
      </StyledContainer>
      <NewsletterForm isNewsletterFormOpen={isNewsletterFormOpen} />
    </>
  );
}

const StyledContainer = styled.section`
  margin: 150px auto 80px;
  max-width: 1600px;
  padding: 0 35px;
`
const LinkStyle = css`
  font-weight: 600;
  margin-bottom: 15px;
  &:hover{
    text-decoration: underline;
  }
  ${breakpoint('md')`
    font-weight: 300;
    margin-bottom: unset;
  `}
`
const StyledLink = styled(Link)`
  ${LinkStyle}
`
const StyledA = styled.a`
  ${LinkStyle}
  text-decoration: underline;
`
const StyledButton = styled.button`
  font-weight: ${props => props.isNewsletterFormOpen ? '700' : '400'};
  margin-top: 50px;
  ${breakpoint('lg')`
    margin-top: 0;
  `}
  &:hover{
    font-weight: 700
  }
`
const StyledAdress = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
`
const StyledScore = styled.div`
  display: none;
  ${breakpoint('md')`
    display: block;
  `}
`

export default Footer;
