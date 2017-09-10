import React, { Component } from 'react'; 
import AppBar from 'material-ui/AppBar';

import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


class NavBar extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			isLoggedIn : false, 
			open: false
		}
		this.handleToggle = this.handleToggle.bind(this); 
		this.handleClose = this.handleClose.bind(this); 
	}

	handleToggle(e) {
		e.preventDefault(); 
		this.setState({open: !this.state.open});
	}

	handleClose(e) {
		this.setState({open: false});
	}


	render() {
		return (
		<div>
			<AppBar
		    title="Ru Dining"
		   	onLeftIconButtonTouchTap={this.handleToggle}
		  /> 
		  <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
      <MenuItem onClick={this.handleClose}>Sign Up</MenuItem>
      </Drawer> 
    </div> 

		)
	}
}

export default NavBar; 