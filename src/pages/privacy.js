import React from "react"
import Layout from "../components/layout"
import Heading from 'src/components/global/Heading'
import Text from 'src/components/global/Text'
import styled from 'styled-components'

const Privacy = () => {

  return (
    <Layout>
      <Heading>POLITIQUE DE CONFIDENTIALITE</Heading>
      <StyledHeading h2>Collecte de l’information</StyledHeading>
      <StyledText>
        Nous recueillons des informations lorsque vous vous inscrivez sur notre site, lorsque vous vous connectez à votre compte, faites un achat, participez à un concours, et / ou lorsque vous vous déconnectez. Les informations recueillies incluent votre nom, votre adresse e-mail, numéro de téléphone, et / ou carte de crédit.
      </StyledText>
      <StyledText>
        En outre, nous recevons et enregistrons automatiquement des informations à partir de votre ordinateur et navigateur, y compris votre adresse IP, vos logiciels et votre matériel, et la page que vous demandez.
      </StyledText>
      <StyledHeading h2>Utilisation des informations</StyledHeading>
      <StyledText>
        Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :
      </StyledText>
      <StyledUl>
        <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
        <li>Fournir un contenu publicitaire personnalisé</li>
        <li>Améliorer notre site</li>
        <li>Améliorer le service client et vos besoins de prise en charge</li>
        <li>Vous contacter par e-mail</li>
        <li>Administrer un concours, une promotion, ou une enquête</li>
      </StyledUl>
      <StyledHeading h2>Confidentialité du commerce en ligne</StyledHeading>
      <StyledText>
        Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n’importe quelle raison, sans votre consentement, en dehors de ce qui est nécessaire pour répondre à une demande et / ou une transaction, comme par exemple pour expédier une commande.
      </StyledText>
      <StyledHeading h2>Divulgation à des tiers</StyledHeading>
      <StyledText>
        Nous ne vendons, n’échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
      </StyledText>
      <StyledText>
        Nous pensons qu’il est nécessaire de partager des informations afin d’enquêter, de prévenir ou de prendre des mesures concernant des activités illégales, fraudes présumées, situations impliquant des menaces potentielles à la sécurité physique de toute personne, violations de nos conditions d’utilisation, ou quand la loi nous y contraint.
      </StyledText>
      <StyledText>
        Les informations non-privées, cependant, peuvent être fournies à d’autres parties pour le marketing, la publicité, ou d’autres utilisations.
      </StyledText>
      <StyledHeading h2>Protection des informations</StyledHeading>
      <StyledText>
        Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d’effectuer un travail spécifique (par exemple, la facturation ou le service à la clientèle) ont accès aux informations personnelles identifiables. Les ordinateurs et serveurs utilisés pour stocker des informations personnelles identifiables sont conservés dans un environnement sécurisé.
        </StyledText>
      <StyledText>
        Est-ce que nous utilisons des cookies ?<br /> Nos cookies améliorent l’accès à notre site et identifient les visiteurs réguliers. En outre, nos cookies améliorent l’expérience d’utilisateur grâce au suivi et au ciblage de ses intérêts. Cependant, cette utilisation des cookies n’est en aucune façon liée à des informations personnelles identifiables sur notre site.
      </StyledText>
      <StyledHeading h2>Se désabonner</StyledHeading>
      <StyledText>
        Nous utilisons l’adresse e-mail que vous fournissez pour vous envoyer des informations et mises à jour relatives à votre commande, des nouvelles de l’entreprise de façon occasionnelle, des informations sur des produits liés, etc. Si à n’importe quel moment vous souhaitez-vous désinscrire et ne plus recevoir d’e-mails, des instructions de désabonnement détaillées sont incluses en bas de chaque e-mail.
      </StyledText>
      <StyledHeading h2>Consentement</StyledHeading>
      <StyledText>En utilisant notre site, vous consentez à notre politique de confidentialité.</StyledText>
    </Layout>
  )
}

const StyledText = styled(Text)`
  margin-bottom: 15px;
`
const StyledHeading = styled(Heading)`
  margin: 60px 0 15px;
`
const StyledUl = styled.ul`
  padding-left: 30px;
  li {
    list-style: disc;
    display: list-item;
  }
`

export default Privacy
