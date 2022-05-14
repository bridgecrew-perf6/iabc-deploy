// set up ======================================================================
var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
// var bodyParser = require('body-parser');

// configuration ===============================================================
app.set('port', process.env.PORT || 80);
app.use(express.static('./site')); 	// set the static files location /public/img will be /img for users
// app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
// app.use(bodyParser.json()); // parse application/json
// app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'app')));
// app.use(express.static('./app'));

// if (app.get('env') === 'development') {
//     app.use(express.errorHandler());
// }

// routes ======================================================================
// require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
server.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});