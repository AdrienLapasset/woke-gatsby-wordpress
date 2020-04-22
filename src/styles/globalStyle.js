import { createGlobalStyle } from 'styled-components/macro'
import 'typeface-nunito-sans'
import CambriaRegular from 'src/assets/fonts/Cambria-regular.ttf'
import CambriaItalic from 'src/assets/fonts/Cambria-italic.ttf'
import breakpoint from 'styled-components-breakpoint';

export default createGlobalStyle`

 @font-face {
  font-family: 'Cambria Regular';
  src: local('Cambria Regular'), local('CambriaRegular')
  url(${CambriaRegular}) format('ttf')
}

 @font-face {
  font-family: 'Cambria Italic';
  src: local('CambriaItalic')
  url(${CambriaItalic}) format('ttf')
}

* {
  margin: 0;
  padding: 0;
}

html {
  background-color: ${props => props.theme.colors.background};
}

h1,
h2,
p,
a,
button,
div,
span,
ul,
li,
q {
	font-size: 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  margin: 0;
  padding: 0;
  display: block;
  box-sizing: border-box;
  ${breakpoint('md')`
			font-size: 20px;
  `}
}

p {
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  display: block;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

li {
  list-style: none;
}

.fade-enter {
  opacity: 0;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 5s ease-in;
}

.fade-leave {
  opacity: 1;
}

.fade-leave.fade-leave-active {
  opacity: 0;
  transition: opacity 3s ease-in;
}
`
