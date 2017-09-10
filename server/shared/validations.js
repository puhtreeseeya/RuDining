function loginValidations(data) {
	const errors = {
		username: '', 
		password: ''
	}

	if(data.username === null || data.username.length === 0) {
		errors.username = 'Username field needs a value'; 
	}

	if(data.password === null || data.password.length === 0) {
		errors.password = 'Password field needs a value'; 
	}
	return errors; 
}

module.exports = {
	loginValidations : loginValidations
}