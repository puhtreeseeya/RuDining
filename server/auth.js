const db = require('../db/index.js')
const User = db.models.user; 
const auth = require('express').Router(); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 
const bcrypt = require('bcrypt'); 

const strategy = new LocalStrategy((username, password, done) => { 
  User.findOne({
    where: { username }
  }).then(user => {
    const hash = bcrypt.hashSync(password, 10); 
    if(!user) {
      return done(null, false, { message: 'Incorrect username'}); 
    }
    if(!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Incorrect password'}); 
    }
    return done(null, user); 
  })
}); 

passport.use('local-login', strategy); 

passport.serializeUser((user, done) => {
	done(null, user.id); 
}); 

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user); 
	})
})

auth.post('/login', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json(user); 
    });
  })(req, res, next);
});

module.exports = auth; 