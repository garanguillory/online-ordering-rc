import * as React from 'react';
import styled from '../theme';

import Header from './Header';
import Menu from './Menu';
import Receipt from './Receipt';

interface State {
	[order: string]: Order;
}

interface Order {
	[combo: string]: {
		price: number,
		tenders: number,
		quantity: number
	}
}

class App extends React.Component<State> {
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

	updateOrder = (order: Order) => {
		this.setState({ order });
		return order;
	};

	render(){
		return (
			<div>
				<Header />
				<OrderSection>
					<Menu order={this.state.order} updateOrder={this.updateOrder} />
					<Receipt order={this.state.order} updateOrder={this.updateOrder} />
				</OrderSection>
			</div>
		);
	}
};

const OrderSection = styled.div`
	display: grid;
  height: 70vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  background: lightgrey;
`;

export default App;
