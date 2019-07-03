import * as React from 'react';
import styled from '../theme';

import ReceiptItem from './ReceiptItem';

const ReceiptWrapper = styled.div`
	background: white;
	border: 2px dashed green;
	text-align: center;
`;

const ReceiptHeader = styled.div`
	background: url('/images/caneslogoblackandwhite.jpg') no-repeat;
	background-position: 50% 0%;
	background-size: contain;
	height: 200px;
	width: 100%;
`;

interface ReceiptProps {
	className?: string;
	order: Order;
	updateOrder(order: {}): {};
}

interface Order {
	[combo: string]: {
		price: number,
		tenders: number,
		quantity: number
	}
}

// if quantity of a specific combo item is > 0,
// item needs to show up in the receipt 

/*
	return Object.keys(order).map( combo => {
		return <MenuItem
						updateOrder={this.updateOrder}
						itemName={combo}
						price={this.props.order[combo].price}
						quantity={this.props.order[combo].quantity}
						key={combo} />
	});
*/

class Receipt extends React.Component<ReceiptProps> {

	renderItems(order: Order){
		return Object.keys(order).map( combo => {
			if(order[combo].quantity > 0){
				return <ReceiptItem
								// updateOrder={this.updateOrder}
								itemName={combo}
								price={order[combo].price}
								quantity={order[combo].quantity}
								key={combo} />
			}
		});
	}
	
	render(){
		console.log(this.props);
		return (
			<ReceiptWrapper>
				<ReceiptHeader>
					<h1>Receipt Component</h1>
				</ReceiptHeader>
				<div>
					{this.renderItems(this.props.order)}
				</div>
				<div>
					<h4>Order Total: {}</h4>
				</div>
			</ReceiptWrapper>
		);
	}
};

export default Receipt;
