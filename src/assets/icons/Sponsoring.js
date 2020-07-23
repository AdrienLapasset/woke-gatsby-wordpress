import React from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint';

const Sponsoring = () => {
	return (
		<>
			<StyledSvg xmlns="http://www.w3.org/2000/svg" width="39" height="54" viewBox="0 0 39 54" stroke="black">
				<g fill="none" fill-rule="evenodd" stroke-width="4" opacity=".6">
					<path d="M33.796 29.615h-2.99c-.53 0-.941.422-.98.951-.294 3.834-2.343 7.157-5.334 9.245-.96-3.01-3.754-5.205-7.088-5.205-3.333 0-6.117 2.196-7.088 5.205-2.98-2.078-5.04-5.411-5.333-9.245-.04-.529-.451-.95-.98-.95H1.011c-.569 0-1.049.48-1.01 1.048.412 6.893 4.843 12.706 10.97 15.157 1.295 2.216 3.677 3.726 6.432 3.726 2.755 0 5.137-1.51 6.432-3.726 6.127-2.44 10.558-8.264 10.97-15.157.03-.568-.441-1.049-1.01-1.049zM1.011 19.922h2.99c.53 0 .941-.422.98-.951.295-3.834 2.344-7.157 5.334-9.246.96 3.01 3.755 5.206 7.088 5.206 3.334 0 6.118-2.196 7.089-5.206 2.98 2.079 5.039 5.412 5.333 9.246.04.529.45.95.98.95h2.99c.57 0 1.05-.48 1.01-1.048-.412-6.883-4.843-12.706-10.97-15.148C22.54 1.51 20.158 0 17.403 0c-2.755 0-5.137 1.51-6.431 3.725C4.844 6.167.413 11.99.002 18.873c-.03.568.44 1.049 1.01 1.049z" transform="translate(2 2)" />
				</g>
			</StyledSvg>
		</>
	);
}

const StyledSvg = styled.svg`
	display: block;
	margin: 0 auto 20px;
	height: 25px;
  ${breakpoint('sm')`
	  margin: 0 0 36px;
		stroke: #C1BFAB;
		height: unset;
  `}
`

export default Sponsoring;
