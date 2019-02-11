import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuWrapper = styled.div`
	border: 2px dashed red;
	text-align: center;
`;

const MenuItemsWrapper = styled.div`
	display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5%;
  grid-column-gap: 5%;
	margin: 0 auto;
	width: 50%;
`;

const CanesItems = [
	{
		name: 'Box Combo',
		price: 6.98,
		tenders: 4
	},
	{
		name: '3 Finger Combo',
		price: 6.38,
		tenders: 3
	},
	{
		name: 'Caniac Combo',
		price: 9.98,
		tenders: 6
	},
	{
		name: 'Sandwich Combo',
		price: 5.98,
		tenders: 3
	},
	{
		name: 'Kids Combo',
		price: 4.58,
		tenders: 2
	},
	{
		name: 'Tailgates',
		price: 27.49,
		tenders: 25
	}
];

class Menu extends Component {

	renderItems(items){
		return items.map( item => {
			return <MenuItem itemName={item.name} price={item.price} key={item.name} />
		});
	}

	render(){
		return (
			<MenuWrapper>
				<h1>Menu Component</h1>
				<MenuItemsWrapper>
					{this.renderItems(CanesItems)}
				</MenuItemsWrapper>
			</MenuWrapper>
		);
	}
};

export default Menu;