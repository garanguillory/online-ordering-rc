import * as React from 'react';
import styled from '../theme';
import MenuItem from './MenuItem';

const MenuItemsWrapper = styled.div`
	display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5%;
  grid-column-gap: 5%;
	margin: 0 auto;
	width: 50%;
`;

interface MenuProps {
  className?: string;
}

interface State {
  [order: string]: Order;
};

interface Order {
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


interface ItemToRemove {
	props: ItemProps
}

interface Item {
	props: ItemProps
}

class Menu extends React.Component<MenuProps, State> {

	state: State = { 
		order: {
			'Box Combo': {
					price: 6.98,
					tenders: 4,
					quantity: 0
			},
			'3 Finger Combo': {
					price: 6.38,
					tenders: 3,
					quantity: 0
			},
			'Caniac Combo': {
					price: 9.98,
					tenders: 6,
					quantity: 0
			},
			'Sandwich Combo': {
					price: 5.98,
					tenders: 3,
					quantity: 0
			},
			'Kids Combo': {
					price: 4.58,
					tenders: 2,
					quantity: 0
			},
			'Tailgates': {
					price: 27.49,
					tenders: 25,
					quantity: 0
			}
		}
	};

	updateOrder = (item: Item, update: number) => {
		const combo: string = item.props.itemName;
		const order: Order = this.state.order;
		const quantity: number = order[combo].quantity;

		if(quantity === 0 && update === -1){
			return this.state;
		}

		this.setState({ 
			order: {...order, 
				[combo]: { 
					price: order[combo].price,
					tenders: order[combo].tenders,
					quantity: order[combo].quantity + update
				}
			}
		});
	};

	renderItems = (order: Order) => {
		return Object.keys(order).map( combo => {
			return <MenuItem 
							updateOrder={this.updateOrder}
							itemName={combo} 
							price={this.state.order[combo].price} 
							quantity={this.state.order[combo].quantity}
							key={combo} />
		});
	}

	render(){
		return (
			<div className={this.props.className}>
				<h1>Menu Component</h1>
				<MenuItemsWrapper>
					{this.renderItems(this.state.order)}
				</MenuItemsWrapper>
			</div>
		);
	}
};

const StyledMenu = styled(Menu)`
	border: 2px dashed red;
	text-align: center;
`;

export default StyledMenu;