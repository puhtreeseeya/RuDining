'use strict' 
import React from 'react'; 
import { render } from 'react-dom'; 
import { Provider } from 'react-redux'; 
import ReactDOM from 'react-dom'; 
import Home from './components/Home.js'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
	return (
		<MuiThemeProvider> 
			<Home /> 
		</MuiThemeProvider> 
	)
}

ReactDOM.render(
	<App />, 
	document.getElementById("app")
)