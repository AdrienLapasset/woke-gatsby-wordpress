import React from 'react'
import Layout from "src/components/layout"
import styled from 'styled-components'
import Actions from 'src/components/Actions/Actions'
import Text from 'src/components/global/Text'
import SEO from "src/components/seo"

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

  return (
    <Layout>
      <SEO title="Woke - Agir avec nous" />
      <StyledText>
        Que vous soyez un particulier, une entreprise ou une fondation, que vous ayez beaucoup de temps libre ou très peu, il existe de nombreuses façons d’agir avec nous.
      </StyledText>
      <Actions actionToDisplay={actionToDisplay} />
    </Layout>
  );
}

const StyledText = styled(Text)`
  max-width: 550px;
  margin: 300px auto 0;
`

export default Volunteer
