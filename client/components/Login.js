import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import NavBar from './NavBar'; 
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


class Login extends Component {
	render() {
		const style = {
		  marginLeft: 20,
		};



		return (
			<div className="container">
				<div className="row"> 
				  <Paper zDepth={2}>
							<form action="" class="loginForm">
								<div class="input-group">
									<TextField
							      hintText="Hint Text"
							      floatingLabelText="Floating Label Text"
							      underlineShow={false}
							      style={style}
							    />
									<Divider />
									<TextField
							      hintText="Password Field"
							      floatingLabelText="Password"
							      type="password"
							      underlineShow={false}
							      style={style}
							    /> 
							    <Divider />
									<input type="submit" id="submit" class="form-control" value="Submit"></input> 
								</div> 
							</form> 
					</Paper>

					</div> 
			</div> 
		)
	}
}

export default Login; 