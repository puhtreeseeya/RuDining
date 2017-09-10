import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_USER_AFTER_LOGIN = 'GET_USER_AFTER_LOGIN'; 

export function getSingleUser(user) {
	const action = { type: GET_USER_AFTER_LOGIN, user: user}; 
	return action; 
}

export function sendSingleUserFromLogin(user) {
	return function thunk (dispatch) {
		return axios.post('/api/register', user)
		.then(res => res.data) 
		.then(newUser => {
			console.log("New User Has Been Created!!"); 
		})
	}
}

export function fetchSingleUserFromLoginInfo(user) {
	return function thunk (dispatch) {
		return axios.get('/api/users/' + user.username)
		.then(res => res.data)
		.then(user => {
			const action = getSingleUser(user); 
			dispatch(action); 
			
		})
	}
}

export default function reducer(state = {}, action) {
	switch(action.type) {
		case GET_USER_AFTER_LOGIN : 
		 return action.user; 
		default: 
			return state; 
	}
}