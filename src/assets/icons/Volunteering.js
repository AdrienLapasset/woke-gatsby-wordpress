import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Volunteering = () => {
	return (
		<>
			<StyledSvg xmlns="http://www.w3.org/2000/svg" width="76" height="53" viewBox="0 0 76 53" fill="black">
				<path d="M69.77 0C73.26 0 76 2.705 76 6.147v40.568c0 3.196-2.99 5.9-6.479 5.9H6.23C2.74 52.615 0 49.911 0 46.47V6.147C0 2.705 2.741 0 6.23 0h63.54zm0 3.688H6.23c-1.496 0-2.492 1.23-2.492 2.459v40.568c0 1.475 1.246 2.458 2.492 2.458h63.54c1.496 0 2.492-1.23 2.492-2.458V6.147c0-1.476-1.246-2.459-2.492-2.459zM52.615 8.769c6.468 0 11.693 5.224 11.693 11.693 0 2.827-1.004 5.654-2.923 7.768v15.616l-7.308-2.806-7.308 2.806V30.49c-.041-.025-.083-.05-.124-.077-3.483-2.239-5.722-5.97-5.722-9.95 0-6.469 5.224-11.693 11.692-11.693zM35.077 38v2.923H8.769V38h26.308zm22.393-5.846c-2.088.701-4.698.701-6.786 0v6.314l3.393-1.403 3.393 1.403v-6.314zM35.077 29.23v2.923H8.769V29.23h26.308zM52.864 12.5c-4.478 0-7.96 3.483-7.96 7.96 0 2.737 1.492 5.474 3.731 6.717 2.488 1.493 5.97 1.493 8.458 0 2.488-1.492 3.732-3.98 3.732-6.716 0-4.478-3.483-7.961-7.96-7.961zm-17.787 7.96v2.924H8.769v-2.923h26.308zm0-8.769v2.923H8.769v-2.923h26.308z" opacity=".6" />
			</StyledSvg>
		</>
	);
}

const StyledSvg = styled.svg`
	display: block;
	margin: 0 auto 20px;
	height: 25px;
  ${breakpoint('sm')`
		fill: #C1BFAB;
		margin: 0 0 36px;
		height: unset;
  `}
`

export default Volunteering;




