import * as React from 'react';
import styled from '../theme';

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

interface AppProps {
	compiler: string;
	framework: string
}

class App extends React.Component<AppProps> {
	render(){
		return (
			<div>
				<Header />
				<OrderSection>
					<Menu />
					<Receipt />
				</OrderSection>
			</div>
		);
	}
};

export default App;
