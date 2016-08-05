// make an express application instance
var express = require('express');
var app = express();

//build-in module -require path which takes array of string and combine them as a dir address with '/'
var path = require('path');

//require method override to use in delete
var methodOverride = require('method-override');

//require bodyParser to get information sent to the server
var bodyParser = require('body-parser');

//require swig to render html with cache set to false
var swig = require('swig');
swig.setDefaults({cache:false});

//require db.js to access methods
var db = require('./db');

//use path module to get and set static middleware
app.use(express.static(path.join( __dirname, 'node_modules')));

//use method override to delete
app.use(methodOverride('_method'));

//use body parser to add products
app.use(bodyParser.urlencoded({extended: true}));

//use swig to render html files and send it to clint
app.set('view engine', 'html');
app.engine('html', swig.renderFile);


//set up home page route to home.html
app.get('/', function (req, res, next){
	res.render('home', {title: 'Home', categories: db.getCategories()});
});

//set up product page routes
app.use('/categories', require('./routes/categories'));

//set up port to listen
app.listen(process.env.PORT, function (){
	console.log('listening on port ' + process.env.PORT);
});
