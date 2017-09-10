import thunkMiddleware from 'redux-thunk';
import axios from 'axios'; 

const GET_USER_AFTER_LOGIN = 'GET_USER_AFTER_LOGIN'; 
const POST_NEW_USER_AFTER_SIGN_UP = 'POST_NEW_USER_AFTER_SIGN_UP'; 

export function getSingleUser(user) {
	const action = { type: GET_USER_AFTER_LOGIN, user: user}; 
	return action; 
}

export function postSingleUser(user) {
	const action = { type: POST_NEW_USER_AFTER_SIGN_UP, user: user }; 
	return action; 
}

export function sendSingleUserFromLogin(user) {
	return function thunk (dispatch) {
		return axios.post('/api/register', user)
		.then(res => res.data) 
		.then(newUser => {
			const action = postSingleUser(newUser);  
			dispatch(action); 
		})
	}
}

export function fetchSingleUserFromLogin(user) {
	console.log(user); 
	return function thunk (dispatch) {
		return axios.post('/auth/login', user)
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
		case POST_NEW_USER_AFTER_SIGN_UP : 
			return action.user; 
		default: 
			return state; 
	}
}