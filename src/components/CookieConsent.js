import React from 'react';
import styled from 'styled-components'
import ReactCookieConsent from 'react-cookie-consent';
import breakpoint from 'styled-components-breakpoint';

const CookieConsent = () => {
  return (
    <StyledContainer>
      <ReactCookieConsent
        disableStyles
        flipButtons
        enableDeclineButton
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        cookieName="gatsby-gdpr-google-analytics"
        buttonWrapperClasses="btnWrapper"
        expires={150}
      >
        Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site.
        Si vous continuez à utiliser ce dernier, nous considérons que vous acceptez l’utilisation des cookies.
      </ReactCookieConsent>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  .CookieConsent {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    padding: 15px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    ${breakpoint('md')`
      flex-direction: row;
    `}
    & > div:first-child {
      font-size: 16px;
      margin-bottom: 10px;
      ${breakpoint('md')`
        margin-bottom: 0;
      `}
    }
    .btnWrapper {
      display: flex;
      button {
        color: white;
        font-size: 16px;
        border: 1px solid white;
        border-radius: 4px;
        padding: 2px 15px;
        margin-left: 15px;
      }
    }
  }
`

export default CookieConsent
