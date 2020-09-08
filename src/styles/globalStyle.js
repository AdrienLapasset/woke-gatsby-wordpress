import { createGlobalStyle } from 'styled-components/macro'
import 'typeface-nunito-sans'
import 'typeface-oranienbaum'
import breakpoint from 'styled-components-breakpoint';

export default createGlobalStyle`

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
q,
input,
textarea {
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
  line-height: 22px;
  ${breakpoint('md')`
    line-height: 1.7;
  `}
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
