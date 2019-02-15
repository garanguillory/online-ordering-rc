import * as React from 'react';
import UpdateOrderButton from './UpdateOrderButton';

import styled from '../theme';

interface MenuItemProps {
	className?: string;
	updateOrder?(item: {}, update: number): {};
	itemName?: string;
	price?: number;
	quantity?: number;
}


class MenuItem extends React.Component<MenuItemProps> {

	updateOrder = (update: number) => {
		return this.props.updateOrder(this, update);
	}

	render(){
		const { className, itemName, quantity } = this.props;
		return (
			<div className={className}>
				<div style={{ alignSelf: 'end' }}>{itemName}</div>
				<UpdateOrder>
					{quantity > 0 ? 
						<React.Fragment>
							<RemoveFromOrderButton updateOrder={this.updateOrder} text={'-'} update={-1} />
								{quantity}
							<AddToOrderButton updateOrder={this.updateOrder} text={'+'} update={+1} />
						</React.Fragment>
						: <InitiateOrderButton updateOrder={this.updateOrder} text={'Add to Order'} update={+1} />
					}
				</UpdateOrder>
			</div>
		);
	}
};

const UpdateOrder = styled.div`
	align-self: end;
	display: grid;
	grid-auto-flow: column;
`;

const InitiateOrderButton = styled(UpdateOrderButton)`
	background: orange;
	border: none;
	border-top: 1px solid orange;
	color: white;
`;

const RemoveFromOrderButton = styled(UpdateOrderButton)`
	background: red;
	border: none;
	border-top: 1px solid red;
	color: white;
`;

const AddToOrderButton = styled(UpdateOrderButton)`
	background: green;
	border: none;
	border-top: 1px solid green;
	border-radius: 0px 0px 5% 5%;
	color: white;
`;

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
