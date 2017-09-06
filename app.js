const html = require('html'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 
const { resolve } = require('path'); 
const express = require('express'); 
const nunjucks = require('nunjucks'); 
const app = express(); 


const routes = require('./routes'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(resolve(__dirname, '..', 'public'))) 

// app.set('view engine', 'html'); 
// app.engine('html', nunjucks.render); 

// app.use(routes);
// app.use(express.static('views'));

module.exports = app; 



app.listen(3000, function() {
	console.log('App is listening on port 3000'); 
}); 

