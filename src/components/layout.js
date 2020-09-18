import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyle'
import breakpoint from 'styled-components-breakpoint';
import CookieConsent from 'react-cookie-consent';

import Header from "./header/Header.container"
import Footer from "./Footer/Footer.container"
import Cookies from "./global/Cookies"

const Layout = ({ children, isFluid }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false)

  const toggle = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleCookies = () => {
    setIsCookiesAccepted(true)
  }

  return (
    <StyledContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} isFluid={isFluid} toggle={toggle} />
        {!isMenuOpen ?
          <>
            <StyledLayout isFluid={isFluid} >
              {children}
            </StyledLayout>
            <Footer />
          </>
          : null}
        <CookieConsent
          flipButtons
          enableDeclineButton
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#A3944A" }}
          buttonWrapperClasses="btnWrapper"
          buttonStyle={{ color: "white", background: 'transparent', border: '1px solid white', borderRadius: '4px' }}
          declineButtonStyle={{ color: "white", background: 'transparent', border: '1px solid white', borderRadius: '4px' }}
          expires={150}
        >
          Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site.
          Si vous continuez à utiliser ce dernier, nous considérons que vous acceptez l’utilisation des cookies.
        </CookieConsent>
        {/* {!isCookiesAccepted ? <Cookies isCookiesAccepted={handleCookies} /> : null} */}
      </ThemeProvider>
    </StyledContainer>
  )
}

const StyledLayout = styled.section`
  margin: ${props => props.isFluid ? '' : '200px auto 0'};
  max-width: ${props => props.isFluid ? '' : '100%'};
  padding:${props => props.isFluid ? '' : '0 35px'};
  box-sizing: border-box;
  ${breakpoint('sm')`
    max-width: ${props => props.isFluid ? '' : '540px'};
  `}
  ${breakpoint('md')`
    max-width: ${props => props.isFluid ? '' : '720px'};
  `}
  ${breakpoint('md')`
    margin: ${props => props.isFluid ? '' : '220px auto 0'};
  `}
  ${breakpoint('lg')`
    max-width: ${props => props.isFluid ? '' : '960px'};
  `}
  ${breakpoint('xl')`
    max-width: ${props => props.isFluid ? '' : '1140px'};
  `}
`
const StyledContainer = styled.div`
  .CookieConsent {
    align-items: center;
    background: "#A3944A";
    & > * {
    font-size: 16px;
    }
    button {
      font-size: 16px;
    }
    .btnWrapper {
      display: flex;
    }
  }
`
export default Layout
