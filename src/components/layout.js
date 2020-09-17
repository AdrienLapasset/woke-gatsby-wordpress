import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyle'
import breakpoint from 'styled-components-breakpoint';
// import CookieConsent from 'react-cookie-consent';

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
    <>
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
        {/* <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          This site uses cookies ...
        </CookieConsent> */}
        {!isCookiesAccepted ? <Cookies isCookiesAccepted={handleCookies} /> : null}
      </ThemeProvider>
    </>
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

export default Layout
