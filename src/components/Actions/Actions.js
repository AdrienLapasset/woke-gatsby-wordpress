import React, { useState } from 'react';
import Flex from 'src/components/global/Flex'
import styled, { css } from 'styled-components'
import Text from 'src/components/global/Text'
import { fadeIn, fadeOut } from 'src/styles/keyframes';

const Actions = () => {

  const actions = [
    {
      type: 'donation',
      testymony: '\«  En tant que mère de famille, je voulais aider ces enfants qui n’ont malheureusement pas les mêmes chances que les nôtres. \»',
      testymonySignature: 'Marion L. Donatrice.',
      description: 'Le moyen le plus efficace, le plus simple et le plus rapide de nous aider est bien entendu le don en numéraire. La générosité de nos donateurs est essentielle à la mise en place de nos projets, sans eux, nous ne pourrions assurer notre mission humanitaire.Sachez également que l\’ensemble de vos dons sont déductibles de vos impôts à hauteur de 66%.',
      btnText: 'Je donne',
      btnLink: ''
    },
    {
      type: 'bénévolat',
      testymony: '\«  Merci à toute l’équipe de WOKE, grâce à leur soutien nous avons au-jourd’hui une salle de classe sup-plémentaire dans notre petite école ! \»',
      testymonySignature: ' Whan P., School Principal',
      description: 'Tu souhaites t’engager dans une cause qui te touche, développer tes compétences ou les faire partager, relever un défi ou tout simplement faire de nouvelles rencontres ?  L\’association est constamment à la recherche de bénévoles afin de nous épauler dans nos missions.Que ce soit organiser des évènements caritatifs au profit de l\’association(tournois sportifs, concerts, vente aux enchères...), partir avec nous à l’étranger ou rechercher de nouveaux partenaires, il existe de nombreuses façons de nous aider ! Alors n\’hésite pas à nous contacter.',
      btnText: '',
      btnLink: ''
    },
    {
      type: 'mécénat',
      testymony: '\« Nous sommes très fier de soutenir cette association auvergnate dans leur démarche humanitaire. \»',
      testymonySignature: ' M.Rancy. Mécène',
      description: 'Nous soutenir c’est participer au développement de votre démarche RSE, c’est faire de vos valeurs une source de différenciation face à vos concurrents mais c’est aussi augmenter la fierté d’appartenance de vos collaborateurs et renforcer l’esprit d’équipe autour d’un projet commun. Sachez qu’il existe différents types de mécénats (financiers, de compétences ou en nature) et que puisque nous sommes reconnus d’intérêt général, l’ensemble de vos dons sont déductibles de votre IS à hauteur de 60%.',
      btnText: '',
      btnLink: ''
    }
  ]

  const [activeAction, setActiveAction] = useState('donation')
  const [activeTab, setActiveTab] = useState('donation')
  const [isTransition, setIsTransition] = useState(false)
  const transitionDuration = 150

  const handleClick = (actionType) => {
    setActiveTab(actionType)
    setIsTransition(true)
    setTimeout(() => {
      setActiveAction(actionType)
      setIsTransition(false)
    }, transitionDuration)
  }

  const actionTypes = actions.map((action, index) => {
    const isActive = action.type === activeTab
    return (
      <button key={index} onClick={() => handleClick(action.type)} isActive={isActive}>
        <StyledText lg isActive={isActive}>{action.type}</StyledText>
      </button>
    )
  })

  const currentAction = actions.find(action => action.type === activeAction)

  return (
    <StyledContainer>
      <Flex justifyBetween>
        {actionTypes}
      </Flex>
      <StyledContent isTransition={isTransition} transitionDuration={transitionDuration}>
        <StyledTestymony quote>
          {currentAction.testymony}<br />
          {currentAction.testymonySignature}
        </StyledTestymony>
        <p>{currentAction.description}</p>
      </StyledContent>
    </StyledContainer >
  );
}

const StyledContainer = styled.section`
  max-width: 600px;
  margin: 0 auto;
  height: 900px;
`
const StyledTestymony = styled(Text)`
  margin: 100px 0;
`
const StyledText = styled(Text)`
  text-transform: capitalize;
  color: ${props => props.isActive ? props.theme.colors.black : props.theme.colors.grey};
  transition: color .2s;
  &:hover {
    color: ${props => props.theme.colors.black}
  }
`
const StyledContent = styled.div`
  transition: opacity ${props => props.transitionDuration}ms;
  opacity: ${props => props.isTransition ? 0 : 1}
  /* animation: ${props => props.isTransition ? css`${fadeOut} .4s forwards` : css`${fadeIn} .4s forwards`};  */
`

export default Actions;
