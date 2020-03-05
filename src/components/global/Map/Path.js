import React from 'react';
import styled from 'styled-components'

const Path = ({ scrollY }) => {
  return (
    <StyledSvg
      width="504px"
      height="601px"
      viewBox="0 0 504 601"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        stroke="black"
        strokeLinecap="round"
        fill="none"
        fillRule="evenodd"
      >
        <StyledPath scrollY={scrollY} strokeWidth="2"

          d="M270.1515,106.2337 L270.1515,21.9997 C270.1515,10.9997 279.1515,1.9997 290.1515,1.9997 L481.1515,1.9997 C492.1515,1.9997 501.1515,10.9997 501.1515,21.9997 L501.1515,289.3637 C501.1515,300.3637 492.1515,309.3637 481.1515,309.3637 L378.4965,309.3637"
          id="Stroke-1"
        />
        <path strokeDasharray="10" stroke="#f5f4ec" strokeWidth="4"
          d="M270.1515,106.2337 L270.1515,21.9997 C270.1515,10.9997 279.1515,1.9997 290.1515,1.9997 L481.1515,1.9997 C492.1515,1.9997 501.1515,10.9997 501.1515,21.9997 L501.1515,289.3637 C501.1515,300.3637 492.1515,309.3637 481.1515,309.3637 L378.4965,309.3637"
          id="Stroke-1"
        />
      </g>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`
const StyledPath = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: ${props => props.scrollY};
`
export default Path;
