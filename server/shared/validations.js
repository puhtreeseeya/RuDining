import axios from 'axios'; 

function _updateError(user, errors) {
	(user !== null) ? errors.username = 'Username is already taken' : ''; 
}

function _findUser(username, errors) {
		axios.get('/api/user/' + username)
		.then(res => res.data)
		.then(user => _updateError(user, errors))
	
}

function validateLogin(data) { 
	let errors = {
		username: '', 
		password: ''
	}

	if(data.username === null || data.username.length === 0) {
		errors.username = 'Username field needs a value'; 
	} else {
		_findUser(data.username, errors); 
	}

	if(data.password === null || data.password.length === 0) {
		errors.password = 'Password field needs a value'; 
	}

	return errors; 
}

module.exports = {
	validateLogin : validateLogin
}