import { createGlobalStyle } from 'styled-components/macro'
import styled from 'styled-components'
import Img from "gatsby-image"

const postStyle = () => {

  const StyledHeaderImg = styled(Img)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
`
  const StyledInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 50px 120px;
`
  const StyledDate = styled.p`
  color: ${props => props.theme.colors.grey};
`
  const StyledContainer = styled.div`
  max-width: 960px;
  margin: auto; 
`
  const StyledContent = styled.div`
  blockquote p {
    font-family: 'Cambria', 'Oranienbaum', serif;
    font-size: 35px;
    margin: 0 150px 50px; 
    text-align: center
  }
  & p {
    &:first-of-type {
      font-family: 'Cambria', 'Oranienbaum', serif;
      font-size: 35px;
      margin-bottom: 120px;
    }
    &:not(:first-of-type) {
      margin: 0 100px 50px;
      & > img {
        margin: 0 auto 50px; 
      }
    }
  }
  & img, .wp-video {
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
  & iframe {
    max-width: 100%;
  }
`
}
export default postStyle
