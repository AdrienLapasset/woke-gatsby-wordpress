import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyle'

import Header from "./header/Header.container"

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} isFluid={isFluid} />
        <StyledLayout isFluid={isFluid} >
          {children}
        </StyledLayout>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </ThemeProvider>
    </>
  )
}

const StyledLayout = styled.section`
  margin: ${props => props.isFluid ? '' : '150px auto'};
  max-width: ${props => props.isFluid ? '' : '1600px'};
  padding:${props => props.isFluid ? '' : '15px'};
`

export default Layout
