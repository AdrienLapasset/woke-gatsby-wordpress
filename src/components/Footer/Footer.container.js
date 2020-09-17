import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import { Link } from "gatsby"

import Flex from 'src/components/global/Flex'
import NewsletterForm from './NewsletterForm'
import statutsPDF from 'src/assets/docs/STATUTS ASSOCIATION WOKE.pdf'

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
        <Flex column justifyBetween rowLg >
          <Flex column mb={70} mblg={0}>
            <StyledA href="https://www.facebook.com/Woke-121383801750149/"
              target="_blank"
              rel="noopener noreferrer">
              Facebook
            </StyledA>
            <StyledA href="https://www.instagram.com/woke.fr/"
              target="_blank"
              rel="noopener noreferrer">
              Instagram
            </StyledA>
            <StyledA href="https://www.linkedin.com/company/ngowoke/"
              target="_blank"
              rel="noopener noreferrer">
              Linkedin
            </StyledA>
          </Flex>
          <Flex column>
            <StyledLink to="/about">Qui est Woke ?</StyledLink>
            <StyledLink to="/projects">Projets</StyledLink>
            <StyledLink to="/blog">Blog</StyledLink>
          </Flex>
          <Flex column>
            <StyledLink to="/volunteer" state={{ actionToDisplay: 'bénévolat' }}>Agir</StyledLink>
            <StyledA className="noUnderline" href="https://www.helloasso.com/associations/woke/formulaires/1/widget" target="_blank" rel="noopener noreferrer">
              Faire un don
            </StyledA>
            <StyledLink to="/contact">Contact</StyledLink>
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
            <StyledA className="noUnderline" href="tel:+33669640007" >06 69 64 00 07</StyledA>
          </StyledAdress>
        </Flex>
        <StyledLegalContainer>
          <Link to="/privacy">Politique de confidentialité</Link>
          <Link to="/legal">Mentions légales</Link>
          <a href={statutsPDF} download>Statuts</a>
        </StyledLegalContainer>
        <Flex column rowlg mt={60} justifyBetween>
          <StyledSignature column rowlg>
            <StyledCopyrights>
              © {new Date().getFullYear()} Woke.&nbsp;
            </StyledCopyrights>
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
            <StyledA href="https://alapasset.dev/"
              target="_blank"
              rel="noopener noreferrer">
              Développement : Adrien Lapasset
            </StyledA>
          </StyledSignature>
          <StyledButton isNewsletterFormOpen={isNewsletterFormOpen} onClick={() => showNewsletterForm()}>S’abonner à la newsletter</StyledButton>
        </Flex>
      </StyledContainer>
      <NewsletterForm isNewsletterFormOpen={isNewsletterFormOpen} />
    </>
  );
}

const StyledContainer = styled.section`
  margin: 185px auto 80px;  
  max-width: 1600px;
  padding: 0 35px;
  box-sizing: border-box;
  ${breakpoint('lg')`
    margin: 150px auto 80px;
  `}
  ${breakpoint('sm')`
    max-width: ${props => props.isFluid ? '' : '540px'};
  `}
  ${breakpoint('md')`
    max-width: ${props => props.isFluid ? '' : '720px'};
  `}
  ${breakpoint('lg')`
    max-width: ${props => props.isFluid ? '' : '960px'};
  `}
  ${breakpoint('xl')`
    max-width: ${props => props.isFluid ? '' : '1140px'};
  `}
`
const LinkStyle = css`
  font-weight: 600;
  margin-bottom: 15px;
  &:hover{
    text-decoration: underline;
  }
  ${breakpoint('lg')`
    font-weight: 300;
    margin-bottom: unset;
  `}
`
const StyledLink = styled(Link)`
  ${LinkStyle}
`
const StyledA = styled.a`
  ${LinkStyle}
  &:not(.noUnderline) {
    text-decoration: underline;
  }
`
const StyledButton = styled.button`
  font-weight: ${props => props.isNewsletterFormOpen ? '700' : '400'};
  margin: 50px auto;
  ${breakpoint('lg')`
    margin: 0;
  `}
  &:hover{
    font-weight: 700
  }
`
const StyledAdress = styled.div`
  display: none;
  ${breakpoint('lg')`
    display: block;
  `}
`
const StyledScore = styled.div`
  display: none;
  ${breakpoint('lg')`
    display: block;
  `}
`
const StyledCopyrights = styled.p`
  margin-bottom: 15px;
  ${breakpoint('lg')`
    margin-bottom: 0;
  `}
`
const StyledSignature = styled(Flex)`
  align-items: center;
  width: 100%;
  ${breakpoint('lg')`
    width: auto;
  `}
  a {
    font-weight: 400;
    text-decoration: none;
    margin-bottom: 0;
  }
`
const StyledLegalContainer = styled.div`
  margin-top: 60px;
  & > * {
    ${LinkStyle} 
    margin-right: 30px;
  }
  ${breakpoint('lg')`
    margin-top: 30px;
    display: flex;
  `}
`

export default Footer;
