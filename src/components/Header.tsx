import * as React from 'react';
import styled from '../theme';
import Location from './Location';

interface HeaderProps {
	className?: string;
}

const Header: React.SFC<HeaderProps> = (props) => {
	return (
		<div className={props.className}>
			<Location />
		</div>
	);
};

const StyledHeader = styled(Header)`
	border-bottom: 4px solid black;
	display: grid;
	height: 20vh;
	margin: 0 auto;
	text-align: center;
`;

export default StyledHeader;
