import React from 'react';
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components'
import Flex from 'src/components/global/Flex'
import breakpoint from 'styled-components-breakpoint';

import chevronIcon from 'src/assets/icons/chevron-right.svg'

const ArticleNav = ({ data, currentProjectSlug }) => {

  const projects = data.allWordpressPost.edges

  const findCategories = (cat) => {
    for (let i = 0; i < cat.length; i++) {
      if (cat[i].slug === 'fr') {
        return cat[i];
      }
    }
  }

  const projectsByLang = projects.filter(project => {
    const categorie = findCategories(project.node.categories)
    const lang = categorie.slug
    return lang === 'fr'
  })

  const reversedProjects = projectsByLang.reverse()

  const projectsSlug = reversedProjects.map((project) => {
    return project.node.slug
  })

  const currentProjectIndex = projectsSlug.indexOf(currentProjectSlug)

  let previousSlugIndex = currentProjectIndex - 1
  let nextSlugIndex = currentProjectIndex + 1
  let previousSlug = projectsSlug[previousSlugIndex]
  let nextSlug = projectsSlug[nextSlugIndex]

  if (previousSlugIndex <= -1) {
    previousSlug = projectsSlug[projectsSlug.length - 1]
  }

  if (nextSlugIndex >= projectsSlug.length - 1) {
    nextSlug = projectsSlug[0]
  }

  return (
    <StyledContainer>
      <Link to={`/blog/${previousSlug}`}>
        <Flex alignCenter>
          <img src={chevronIcon} alt="Précédent" />
          <StyledTitle>Précédent</StyledTitle>
        </Flex>
      </Link>
      <Link to={`/blog/${nextSlug}`}>
        <Flex alignCenter>
          <StyledTitle>Suivant</StyledTitle>
          <img src={chevronIcon} alt="Suivant" />
        </Flex>
      </Link>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  a {
    img {
      margin-left: 15px;
      ${breakpoint('sm')`
        margin-left: 30px;
      `}
    }
  &:first-child {
    img {
       margin-right: 15px;
      margin-left: 0px;
      transform: rotate(180deg);
      ${breakpoint('sm')`
        margin-right: 30px;
      `}
    }
  }

  }
`
const StyledTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "blog"}}}}) {
          edges {
            node {
              title
              slug
              categories {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <ArticleNav data={data} {...props} />}
  />
)
