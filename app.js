const html = require('html'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 
const { resolve } = require('path'); 
const express = require('express'); 
const session = require('express-session'); 
const nunjucks = require('nunjucks'); 
const app = express(); 
const validator = require('validator');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy; 
const db = require('./db/index.js'); 
const User = db.models.user; 
const bcrypt = require('bcrypt'); 

/*
* Session and Passport Configuration
*/
const strategy = new localStrategy((username, password, done) => { 
  User.findOne({
    where: { username }
  }).then(user => {
    const hash = bcrypt.hashSync(password, 10); 
    if(!user) {
      return done(null, false, { message: 'Incorrect username'}); 
    }
    if(!bcrypt.compareSync(password, hash)) {
      return done(null, false, { message: 'Incorrect password'}); 
    }
    return done(null, user); 
  })
})


passport.use('local', strategy);  


/*
* Middleware for engine setup, serving static files, and routing via api routes. 
*/

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(resolve('__dirname', '..', 'public'))); 


app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use('/api', require('./server/api.js')); 
app.use('/auth', require('./server/auth.js')); 









module.exports = app; 


if (module === require.main) {
  // Start listening only if we're the main module.

  /* 
    https://nodejs.org/api/modules.html#modules_accessing_the_main_module
      - This (module === require.main) will be true if run via node foo.js, but false if run by require('./foo')
      - If you want to test this, log `require.main` and `module` in this file and also in `api.js`. 
        * Note how `require.main` logs the same thing in both files, because it is always referencing the "main" import, where we starting running in Node 
        * In 'start.js', note how `module` is the same as `require.main` because that is the file we start with in our 'package.json' -- `node server/start.js`
        * In 'api.js', note how `module` (this specific file - i.e. module) is different from `require.main` because this is NOT the file we started in and `require.main` is the file we started in
          ~ To help compare these objects, reference each of their `id` attributes
  */

  const PORT = 3000

  
  db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
  });
}