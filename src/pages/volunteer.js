import React from 'react'
import Layout from "src/components/layout"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Flex from 'src/components/global/Flex'
import Actions from 'src/components/Actions/Actions'

const Volunteer = ({ location }) => {

  const actionToDisplay = location.state.actionToDisplay

  const data = useStaticQuery(graphql`
    query {
      volunteerImg: file(relativePath: { eq: "volunteer.jpg" }) {
        childImageSharp {
          fixed(width: 900, height: 500) {
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
        <StyledImg fixed={data.volunteerImg.childImageSharp.fixed} />
      </Flex>
      <Actions actionToDisplay={actionToDisplay} />
    </Layout>
  );
}

const StyledText = styled.p`
  max-width: 550px;
  margin: 300px auto 0;
`
const StyledImg = styled(Img)`
`

export default Volunteer
