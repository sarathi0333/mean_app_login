var express 	= require('express');
var app 		= express();
var morgan 		= require('morgan');
var mongoose 	= require('mongoose');
var bodyParser	= require('body-parser');
var port 		= process.env.PORT || 3000;
var router		= express.Router();
var appRoutes	= require('./app/routes/api')(router);
var path		=require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);


mongoose.connect('mongodb://localhost:27017/tutorial', function(err) {
	if(err) {
		console.log("error:" + err);
	} else {
		console.log("connected successfully to Db..");
	}
});


app.get('*', function(req, res) { 
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

 app.listen(port, function() {
 	console.log("server running ... listen to"+ port);
 })