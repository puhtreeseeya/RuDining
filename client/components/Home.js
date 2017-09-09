import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Login from './Login'; 

class Home extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component= {Login} /> 
			</Router> 
		)
	}
}

export default Home; 