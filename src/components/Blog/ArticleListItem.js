import React from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import Heading from 'src/components/global/Heading'
import Flex from 'src/components/global/Flex'

const ArticleListItem = ({ edge }) => {

  const article = edge.node

  const imgFixed = article.featured_media.localFile?.childImageSharp.fixed

  const truncate = (string) => {
    return string.substring(3, 300) + "... <u>Lire la suite</u>"
  }

  const truncateExcerpt = truncate(article.excerpt)

  return (
    <StyledLink to={`blog/${article.slug}`} >
      <StyledFlex column>
        <Heading>{article.title}</Heading>
        <p dangerouslySetInnerHTML={{ __html: truncateExcerpt }} />
      </StyledFlex>
      <Img fixed={imgFixed} />
    </StyledLink>
  )
}

const StyledFlex = styled(Flex)`
  padding-right: 80px;  
`
const StyledLink = styled(Link)`
  margin-bottom: 200px;
  display: flex;
  & > * {
    flex: 1 1 0;
  }
  &:nth-child(even) {
   flex-direction: row-reverse;

   ${StyledFlex} {
    padding-left: 80px;
    padding-right: 0;   
   }
 }
`

export default ArticleListItem;
