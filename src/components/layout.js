import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyle'
import breakpoint from 'styled-components-breakpoint'
import CookieConsent from './CookieConsent'
import Header from "./header/Header.container"
import Footer from "./Footer/Footer.container"
import SEO from "./seo"

const Layout = ({ children, isFluid }) => {

  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggle = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header isFluid={isFluid} toggle={toggle} />
        {!isMenuOpen ?
          <>
            <StyledLayout isFluid={isFluid} >
              {children}
            </StyledLayout>
            <Footer />
          </>
          : null}
        <CookieConsent />
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
