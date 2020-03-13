import React from 'react';
import styled from 'styled-components'

const PostContent = ({ content }) => {
  return (
    <>
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

const StyledContent = styled.div`
  blockquote p {
    font-family: 'Cambria', serif;
    font-size: 35px;
    margin: 0 150px 50px; 
    text-align: center
  }
  & p {
    &:first-of-type {
      font-family: 'Cambria', serif;
      font-size: 35px;
      margin-bottom: 120px;
    }
    &:not(:first-of-type) {
      margin: 0 100px 50px;
      & > img {
        margin: 0 auto 50px; 
      }
    }
  }
  & img, .wp-video {
    max-width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
  & iframe {
    max-width: 100%;
  }
`

export default PostContent;
