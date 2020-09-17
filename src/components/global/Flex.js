import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Flex = styled.div`
  display: ${props => (props.noFlex ? 'block' : 'flex')};
  flex-wrap: ${props => {
    if (props.wrapReverse) return 'wrap-reverse'
    else if (props.noWrap) return 'nowrap'
    return 'wrap'
  }};
  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent
    if (props.justifyCenter) return 'center'
    else if (props.justifyAround) return 'space-around'
    else if (props.justifyBetween) return 'space-between'
    else if (props.justifyEnd) return 'flex-end'
    return 'flex-start'
  }};
  align-items: ${props => {
    if (props.alignItems) return props.alignItems
    else if (props.alignStretch) return 'stretch'
    else if (props.alignEnd) return 'flex-end'
    if (props.alignCenter) return 'center'
    else if (props.alignBaseline) return 'baseline'
    return 'flex-start'
  }};
  align-content: ${props => {
    if (props.alignContent) return props.content
    else if (props.contentStart) return 'flex-start'
    else if (props.contentEnd) return 'flex-end'
    else if (props.contentCenter) return 'center'
    else if (props.contentBetween) return 'space-between'
    else if (props.contentAround) return 'contentAround'
    return 'stretch'
  }};
  flex-direction: ${props => (props.column ? 'column' : 'row')};

  margin-top:  ${props => props.mt}px;
  margin-right:  ${props => props.mr}px;
  margin-bottom:  ${props => props.mb}px;
  margin-left:  ${props => props.ml}px;

  ${breakpoint('md')`
    flex-direction: ${props => props.rowMd ? 'row;' : ''}
    margin-bottom:  ${props => props.mbMd}px;
  `}
  ${breakpoint('lg')`
    flex-direction: ${props => props.rowLg ? 'row;' : ''}
  `}
`

export default Flex
