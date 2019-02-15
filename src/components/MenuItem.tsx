import * as React from 'react';
import AddToOrder from './AddToOrder';

import styled from '../theme';

interface MenuItemProps {
	className?: string;
	updateOrder?(item: {}, update: number): {};
	itemName?: string;
	price?: number;
	quantity?: number;
}

// on hover menu item, show add to order button or increase/decrease button
// depending on whether or not the Order has that item in it

class MenuItem extends React.Component<MenuItemProps> {

	updateOrder = (update: number) => {
		return this.props.updateOrder(this, update);
	}

	render(){
		return (
			<div className={this.props.className}>
				<div style={{ alignSelf: 'end' }}>{this.props.itemName}</div>
				<button onClick={() => this.updateOrder(-1)}>Remove from Order</button>
				<AddToOrder updateOrder={this.updateOrder} text={'Add to Order'} />
			</div>
		);
	}
};

const Item = styled(MenuItem)`
	background: white;
	border: 1px solid red;
	border-radius: 5%;
	cursor: pointer;
	display: grid;
	height: 100px;
	width: 100%;
`;

export default Item;
