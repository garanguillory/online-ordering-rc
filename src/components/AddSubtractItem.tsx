import * as React from 'react';
import styled from '../theme';

interface UpdateOrderProps {
	className?: string;
	updateOrder?(update: number): {};
	text: string;
}

const UpdateOrder: React.FunctionComponent<UpdateOrderProps> = (props: UpdateOrderProps) => {
	// console.log(props);
	return (
		<div>
			<button onClick={() => props.updateOrder(+1)} className={props.className}>{props.text}</button>
			<button onClick={() => props.updateOrder(-1)} className={props.className}>{props.text}</button>
		</div>
	);
};

// const StyledOrderButton = styled(UpdateOrder)`
// 	align-self: end;
// 	background: orange;
// 	border: none;
// 	border-top: 1px solid red;
// 	border-radius: 0px 0px 5% 5%;
// 	color: white;
// 	height: 50%;
// `;

// export default StyledOrderButton;