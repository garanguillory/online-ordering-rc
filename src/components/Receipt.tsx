import * as React from 'react';
import styled from '../theme';

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

const Receipt = () => {
	return (
		<ReceiptWrapper>
			<ReceiptHeader>
				<h1>Receipt Component</h1>
			</ReceiptHeader>
		</ReceiptWrapper>
	);
};

export default Receipt;
