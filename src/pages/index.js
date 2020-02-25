import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/projects/">Projects</Link>
    </Layout>
  )
}

export default IndexPage
