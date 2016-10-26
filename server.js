var express   = require('express');
var app       = express();
var port      = process.env.PORT || 8080;
var morgan    = require('morgan');

app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
});

app.listen(port);
console.log('The magic happens on port ' + port);
