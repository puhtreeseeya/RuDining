'use strict'
const api = require('express').Router()
const db = require('../db/index.js')
const User = db.models.user; 
const bcrypt = require('bcrypt'); 


api.post('/register', (req, res, next) => {
	const password = req.body.password; 
	bcrypt.hash(password, 10, (err, bcryptedPassword) => {
		if(err) {
			next(err); 
			res.send(err); 
		} else {
			User.create({
				username: req.body.username, 
				password: bcryptedPassword
			}).then(user => {
				res.json(user); 
			})
		}
	})
}); 
 

api.get('/user/:username', (req, res, next) => {
	console.log(req.params.username); 
	User.findOne({
		where: { username : req.params.username }
	}).then(user => {
		res.json(user); 
	})
})

module.exports = api