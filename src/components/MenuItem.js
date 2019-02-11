import React from 'react';
import styled from 'styled-components';

const Item = styled.button`
	border: 1px solid red;
	border-radius: 5%;
	cursor: pointer;
	height: 100px;
	width: 100%;
`;

const MenuItem = (props) => {
	return (
		<Item>{props.itemName}</Item>
	);
};

export default MenuItem;