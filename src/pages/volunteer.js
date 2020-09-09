import React from 'react'
import Layout from "src/components/layout"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Flex from 'src/components/global/Flex'
import Actions from 'src/components/Actions/Actions'
import Text from 'src/components/global/Text'

const Volunteer = ({ location }) => {
  let actionToDisplay = ''
  if (location.state) { // Must be tested for Build
    if (location.state.actionToDisplay) {
      actionToDisplay = location.state.actionToDisplay
    }
    else {
      actionToDisplay = 'donation' // Donation is displayed basically
    }
  } else {
    actionToDisplay = 'donation'
  }

  const data = useStaticQuery(graphql`
    query {
      volunteerImg: file(relativePath: { eq: "volunteer.jpg" }) {
        childImageSharp {
          fixed(width: 900, height: 500, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <StyledText>
        Que vous soyez un particulier, une entreprise ou une fondation, que vous ayez beaucoup de temps libre ou très peu, il existe de nombreuses façons d’agir avec nous.
      </StyledText>
      <Flex justifyCenter mt={100} mb={100}>
        <Img fixed={data.volunteerImg.childImageSharp.fixed} />
      </Flex>
      <Actions actionToDisplay={actionToDisplay} />
    </Layout>
  );
}

const StyledText = styled(Text)`
  max-width: 550px;
  margin: 300px auto 0;
`

export default Volunteer
