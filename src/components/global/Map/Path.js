import React, { useEffect } from 'react';

import styled from 'styled-components'

const Path = ({ about }) => {

  let animOffset = 0

  if (about) { animOffset = 3100 }
  else { animOffset = 1200 }

  useEffect(() => {
    const path = document.querySelector('#path');
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    window.addEventListener("scroll", function (e) {
      let scrollLength = document.documentElement.scrollTop + document.body.scrollTop - animOffset;
      let strokeDashoffset = pathLength - scrollLength
      if (strokeDashoffset >= 0) {
        path.style.strokeDashoffset = strokeDashoffset
      } else {
        path.style.strokeDashoffset = 0
      }
    });
  });

  return (
    <StyledSvg width="900px" height="300px" viewBox="0 0 900 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g stroke="#A19F9B" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
        <path id="path" d="M389.783441,42.705862 C429.252683,29.4021402 462.573028,40.5067133 489.744476,76.0195814 C489.456215,75.2366073 807.488832,-62.6328125 887.48113,291.703488 C887.48113,291.485176 891.329374,293.874763 899.025862,298.872248 L877.081618,297.945467 C855.221985,296.643022 840.121532,289.137599 831.780258,275.429197 C831.312132,274.056943 827.42098,270.61773 820.106802,265.111559 C574.273666,83.2987855 301.217503,54.7046032 0.938314273,179.329012 C-1.97413793,179.434331 260.921538,-216.768399 813.7928,172.576738 C814.439655,170.121537 763.233484,149.112069 731.589031,228.767241" ></path>
        <path stroke="#E3E2D5" strokeWidth="3" strokeDasharray="1 10" d="M389.783441,42.705862 C429.252683,29.4021402 462.573028,40.5067133 489.744476,76.0195814 C489.456215,75.2366073 807.488832,-62.6328125 887.48113,291.703488 C887.48113,291.485176 891.329374,293.874763 899.025862,298.872248 L877.081618,297.945467 C855.221985,296.643022 840.121532,289.137599 831.780258,275.429197 C831.312132,274.056943 827.42098,270.61773 820.106802,265.111559 C574.273666,83.2987855 301.217503,54.7046032 0.938314273,179.329012 C-1.97413793,179.434331 260.921538,-216.768399 813.7928,172.576738 C814.439655,170.121537 763.233484,149.112069 731.589031,228.767241" ></path>
      </g>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  position: absolute;
  width: 677px;
  top: 183px;
  left: 218px;
`
export default Path;
