import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import theme from 'src/styles/theme'
import GlobalStyle from 'src/styles/globalStyle'

import Header from "./header/Header.container"
import "./layout.css"

const Layout = ({ children }) => {
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>
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
  margin: 150px auto;
  max-width: 1200px;
`

export default Layout
