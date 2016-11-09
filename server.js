var express   = require('express');
var app       = express();
var port      = process.env.PORT || 8090;
var morgan    = require('morgan');

app.use(morgan('dev'));
app.set('view engine', 'ejs');

// routes ======================================================================
require('./app/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
