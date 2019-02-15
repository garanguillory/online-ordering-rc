import * as React from 'react';
import styled from '../theme';

interface OrderButtonProps {
	className?: string;
	updateOrder?(update: number): {};
	text: string;
}

const OrderButton: React.SFC<OrderButtonProps> = (props: OrderButtonProps) => {
	return (
		<button onClick={() => props.updateOrder(+1)} className={props.className}>{props.text}</button>
	);
};

const StyledOrderButton = styled(OrderButton)`
	align-self: end;
	background: orange;
	border: none;
	border-top: 1px solid red;
	border-radius: 0px 0px 5% 5%;
	color: white;
	height: 50%;
`;

export default StyledOrderButton;
