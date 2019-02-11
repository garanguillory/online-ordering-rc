import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Menu from './Menu';
import Receipt from './Receipt';

const OrderSection = styled.div`
	display: grid;
  height: 70vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  background: lightgrey;
`;

const App = () => {
	return (
		<div>
			<Header />
			<OrderSection>
				<Menu />
				<Receipt />
			</OrderSection>
		</div>
	);
};

export default App;
