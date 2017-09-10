import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import NavBar from './NavBar'; 
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { loginValidations } from '../../server/shared/validations'; 
import store, { sendSingleUserFromLogin } from '../store'; 
import { validateLogin } from '../../server/shared/validations.js'; 

class Login extends Component {
	constructor() {
		super(); 
		this.state = {
			username : '', 
			password: '', 
			usernameErr : '', 
			passwordErr : ''
		}; 
		this.onSubmit = this.onSubmit.bind(this); 
		this.onChange = this.onChange.bind(this);
		this.canSubmit = this.canSubmit.bind(this); 
	}

	canSubmit(event) {
		event.preventDefault(); 
		let errors = validateLogin(this.state);
		console.log(errors); 
		this.setState({
			usernameErr : errors.username, 
			passwordErr : errors.password
		}, () => {
			console.log(this.state); 
		}) 
	}

	onSubmit(event) {
		event.preventDefault(); 
		const username = this.state.username; 
		const password = this.state.password; 
		const user = { username, password }; 
		store.dispatch(sendSingleUserFromLogin(user)); 
	}

	onChange(event) {
		this.setState({[event.target.name] : event.target.value})
	}


	render() {
		const style = { marginLeft: 20, }; 
		return (
			<div className="container">
				<div className="col-xs-10 col-sm-8 col-md-6 col-lg-5 col-centered"> 
				  <Paper zDepth={2}>
							<form onSubmit={this.canSubmit}>
								<div>
									<TextField
							      hintText="Username Field"
							      floatingLabelText="Username"
							      underlineShow={false}
							      style={style}
							      name="username"
							      onChange={this.onChange}
							      errorText={this.state.usernameErr}
							    />
									<Divider />
									<TextField
							      hintText="Password Field"
							      floatingLabelText="Password"
							      type="password"
							      underlineShow={false}
							      style={style}
							      name="password"
							      onChange={this.onChange}
							      errorText={this.state.passwordErr}
							    /> 
							    <Divider />
							    <div>
							    <br/> 
    								<RaisedButton type="submit" label="Login" primary={true} style={style} />
    							</div> 
    							<br/>
								</div> 
							</form> 
					</Paper>
					</div> 
			</div> 
		)
	}
}

export default Login; 