const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    query {
      allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "projets"}}}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const articles = await graphql(`
    query {
      allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: "blog"}}}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve(`./src/templates/project.js`)
  projects.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `projects/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(projectTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })

  const articleTemplate = path.resolve(`./src/templates/article.js`)
  articles.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `blog/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(articleTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
