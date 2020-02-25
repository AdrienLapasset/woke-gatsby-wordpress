import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Post = ({ data }) => {

  const post = data.wordpressPost
  const imgFluid = post.featured_media.localFile?.childImageSharp.fluid

  return (
    <>
      <h1>{post.title}</h1>
      <Img fluid={imgFluid} />
      <div className="text" dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
