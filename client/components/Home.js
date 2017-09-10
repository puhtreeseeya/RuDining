import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Login from './Login'; 
import NavBar from './NavBar'; 

class Home extends Component {
	render() {
		return (

			<Router>
				<div> 
					<NavBar />
					<Switch> 
					<Route exact path='/' component= {Login} /> 
					</Switch> 
				</div> 
			</Router> 
		)
	}
}

export default Home; 