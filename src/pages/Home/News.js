import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

// import BgImage from 'src/components/global/BgImage'
import Heading from 'src/components/global/Heading'
import Button from 'src/components/global/Button'

const News = () => {

  const [article, setArticle] = useState({
    content: { rendered: null },
    title: { rendered: null },
    excerpt: { rendered: null }
  })

  const fetchPost = async () => {
    const response = await fetch(`https://woke.fr/wp-json/wp/v2/posts?per_page=1&categories=21`)
    const data = await response.json()
    setArticle(data[0])
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <StyledContainer>
      <Heading h2>Les actualités</Heading>
      <StyledLink to={`/blog/${article.slug}`}>
        <FlexContainer>
          <Heading>{article.title.rendered}</Heading>
          <div className="text" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
        </FlexContainer>
        <FlexContainer>
          {/* <BgImage url={article.fimg_url} /> TODO */}
        </FlexContainer>
      </StyledLink>
      <Link to={'/blog'} >
        <Button>Voir tous nos articles</Button>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  margin-top: 200px;
`
const FlexContainer = styled.div`
 flex: 1 1 50%;
 &:first-child{
   padding-right: 80px;
 }
`
const StyledLink = styled(Link)`
  margin-top: 80px;
  display: flex;
`

export default News;
