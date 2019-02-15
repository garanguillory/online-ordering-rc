import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme } from "./theme";

import App from './components/App';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App compiler="TypeScript" framework="React" />
	</ThemeProvider>, 
	document.querySelector('#root'));
