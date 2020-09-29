import React from "react";
import styled, { css } from 'styled-components'
import Flex from 'src/components/global/Flex'
import { Link } from "gatsby"
import breakpoint from 'styled-components-breakpoint';
import addToMailchimp from 'gatsby-plugin-mailchimp'

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isSubscribed: false,
      isError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
    this.setState({ isSubscribed: false, isError: false })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const mailChimp = await addToMailchimp(this.state.email)
    console.log('mailChimp =>', mailChimp)
    if (mailChimp.result === 'success') {
      this.setState({ isSubscribed: true })
    }
    if (mailChimp.result === 'error') {
      this.setState({ isError: true })
    }
  }

  render() {
    return (
      <>
        <StyledContainer isNewsletterFormOpen={this.props.isNewsletterFormOpen}>
          <StyledLayout>
            <StyledTitle>Pour recevoir nos actualités et nos projets, laissez votre email&nbsp;: </StyledTitle>
            <Flex column>
              <StyledForm onSubmit={this.handleSubmit}>
                <StyledInput onChange={this.handleChange} type="email" name="email" id="email" placeholder="exemple : monmail@gmail.com" />
                <StyledButton type="submit">Je m’abonne</StyledButton>
              </StyledForm>
              {this.state.isSubscribed ?
                <StyledText>Merci, vous allez recevoir un mail afin de confirmer votre abonnement.</StyledText>
                : this.state.isError ?
                  <StyledText>Vous êtes déjà inscrit(e) à notre newsletter.</StyledText>
                  :
                  <StyledText>
                    En renseignant votre adresse mail, vous acceptez de recevoir chaque semaine
                    nos derniers articles de blog par courrier électronique et vous prenez connaissance
                de notre <StyledLink to="/terms">Politique de confidentialité</StyledLink>.  Vous pouvez vous désinscrire à tout moment à l’aide
                des liens de désinscription ou en nous contactant à l’adresse mail&nbsp;:&nbsp;
                <StyledA href="mailto:contact@woke.fr" target="_blank" rel="noopener noreferrer"> contact@woke.fr</StyledA>.
              </StyledText>
              }
            </Flex>
          </StyledLayout>
        </StyledContainer>
      </>
    );
  }
}

const StyledContainer = styled.section`
  display: ${props => props.isNewsletterFormOpen ? 'block' : 'none'};
  background-color: #eeede2;  
`
const StyledLayout = styled.section`
  margin: 0 auto;
  max-width: 1600px;
  padding: 60px 30px;
  display: flex;
  flex-direction: column;
  ${breakpoint('xl')`
    flex-direction: row;
    & > * {
      flex: 1 1 0;
    }
  `}
`
const StyledTitle = styled.p`
  font-weight: 600;
  margin: 0 0 60px 0;
  ${breakpoint('sm')`
    margin: 15px 15px 15px 0;
  `}
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  ${breakpoint('sm')`
    flex-direction: row;
  `}
`
const StyledInput = styled.input`
  height: 62px;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.black};
  text-align: center;
  font-size: 17px;
  color: ${props => props.theme.colors.black};
  margin: 0 0 30px 0;
  font-style: italic;
  border-radius: 5px;
  ${breakpoint('sm')`
    margin: 0 60px 0 0;
  `}
`
const StyledButton = styled.button`
  height: 62px;
  display: flex;
  background-color: ${props => props.theme.colors.black};
  color: white;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  border-radius: 5px;
`
const StyledText = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.black};
  font-size: 14px;
  ${breakpoint('sm')`
    font-size: 18px;
  `}
`
const LinkStyle = css`
  font-size: 14px;
  display: inline-block;
  &:hover{
    text-decoration: underline;
  }
  ${breakpoint('sm')`
    font-size: 18px;
  `}
`
const StyledLink = styled(Link)`
  ${LinkStyle};
  text-decoration: underline;
`
const StyledA = styled.a`
  ${LinkStyle}
`

export default NewsletterForm;
