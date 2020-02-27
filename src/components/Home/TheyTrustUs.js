import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

import Button from 'src/components/global/Button'
import Heading from 'src/components/global/Heading'

const TheyTrustUs = () => {

  return (
    <StyledContainer>
      <Heading h2>Ils nous font confiance TODO</Heading>
      <Link to={'/volunteer'} >
        <Button>Entreprises, rejoignez-nous</Button>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
export default TheyTrustUs;
