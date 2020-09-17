import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';
import Text from 'src/components/global/Text'

const Cookies = ({ isCookiesAccepted }) => {

  // const [isCookiesAccepted, setIsCookiesAccepted] = useState(false)

  const onClickOk = () => {
    isCookiesAccepted();
  }

  return (
    <StyledContainer>
      <p>Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site.
        Si vous continuez à utiliser ce dernier, nous considérons que vous acceptez l’utilisation des cookies.</p>
      <button onClick={() => onClickOk()} type="button">Accepter les cookies</button>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-size: 16px;
  }
  button {
    color: white;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 2px 15px;
    margin-left: 15px;
  }
`

export default Cookies;
