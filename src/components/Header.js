import React from 'react';
import styled from 'styled-components';
import Location from './Location';

const HeaderWrapper = styled.div`
	border-bottom: 4px solid black;
	display: grid;
	height: 20vh;
	margin: 0 auto;
	text-align: center;
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Location />
		</HeaderWrapper>
	);
};

export default Header;
