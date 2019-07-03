import * as React from 'react';
import styled from '../theme';
import MenuItem from './MenuItem';

interface MenuProps {
	className?: string;
	order: Order;
	updateOrder(order: {}): {};
}

export interface Order {
	[combo: string]: {
		price: number,
		tenders: number,
		quantity: number
	}
}

interface ItemProps {
	itemName: string,
	price: string,
	quantity: number
}

interface Item {
	props: ItemProps
}

class Menu extends React.Component<MenuProps> {

	updateOrder = (item: Item, update: number) => {
		const combo: string = item.props.itemName;
		let order: Order = this.props.order;
		const quantity: number = order[combo].quantity;

		if(quantity === 0 && update === -1){
			return this.props.updateOrder(this.props.order);
		}

		order = {
			...order,
			[combo]: {
				price: order[combo].price,
				tenders: order[combo].tenders,
				quantity: order[combo].quantity + update
			}
		};
		return this.props.updateOrder(order);
	};

	renderItems = (order: Order) => {
		return Object.keys(order).map( combo => {
			return <MenuItem 
							updateOrder={this.updateOrder}
							itemName={combo} 
							price={order[combo].price} 
							quantity={order[combo].quantity}
							key={combo} />
		});
	}

	render(){
		return (
			<div className={this.props.className}>
				<h1>Menu Component</h1>
				<MenuItemsWrapper>
					{this.renderItems(this.props.order)}
				</MenuItemsWrapper>
			</div>
		);
	}
};

const MenuItemsWrapper = styled.div`
	display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5%;
  grid-column-gap: 5%;
	margin: 0 auto;
	width: 50%;
`;

const StyledMenu = styled(Menu)`
	border: 2px dashed red;
	text-align: center;
`;

export default StyledMenu;