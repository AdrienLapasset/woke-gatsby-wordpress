import React from 'react';
import { Link } from "gatsby"
// import Img from "gatsby-image"
import styled from 'styled-components'
import Heading from 'src/components/global/Heading'
import Flex from 'src/components/global/Flex'
import breakpoint from 'styled-components-breakpoint';

const ArticleListItem = ({ edge }) => {

  const article = edge.node

  // const imgFluid = article.featured_media.localFile?.childImageSharp.fluid
  const imgFluid = article.featured_media.source_url

  const truncate = (string) => {
    return string.substring(3, 300) + "... <u>Lire la suite</u>"
  }

  const truncateExcerpt = truncate(article.excerpt)

  return (
    <StyledLink to={`/blog/${article.slug}`} >
      <StyledFlex column>
        <Heading>{article.title}</Heading>
        <p dangerouslySetInnerHTML={{ __html: truncateExcerpt }} />
      </StyledFlex>
      <div>
        <img src={imgFluid} alt={article.title} />
      </div>
    </StyledLink>
  )
}

const StyledFlex = styled(Flex)`
  ${breakpoint('md')`
    padding-right: 80px; 
  `}   
`
const StyledLink = styled(Link)`
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  ${breakpoint('md')`
    flex-direction: row;
    & > * {
      flex: 1 1 0;
    }
  `}
  &:nth-child(even) {
    ${breakpoint('md')`
   flex-direction: row-reverse;
  `}
   ${StyledFlex} {
    ${breakpoint('md')`
      padding-left: 80px;
      padding-right: 0; 
    `}  
   }
 }
 p {
   margin-bottom: 30px;
   ${breakpoint('md')`
    margin-bottom: 0px;
  `} 
 }
 img {
    width: 100%;
  } 
`

export default ArticleListItem;
