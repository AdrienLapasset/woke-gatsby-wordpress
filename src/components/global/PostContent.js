import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const PostContent = ({ content }) => {
  return (
    <>
      <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

const StyledContent = styled.div`
  blockquote {
    margin: 0 0 50px;
    ${breakpoint('md')`
      margin: 0 150px 50px; 
      font-size: 35px;
    `}
    p, span {
      font-family: 'Cambria', 'Oranienbaum', serif;
      font-size: 28px;
      text-align: center;
      line-height: 1.5;
    }
  }
  & p {
    margin: 0 0 50px;
    ${breakpoint('md')`
      margin: 0 100px 50px;
    `}
    & > img {
      margin: 0 auto 50px; 
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
