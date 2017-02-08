var User		= require('../models/user');

module.exports = function(router){
	//http:localhost:3000/users
	router.post('/users', function(req, res) {
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		user.email = req.body.email;
		
		if (req.body.username ==null || req.body.password==null || req.body.email==null || req.body.username == '' || req.body.password == ''|| req.body.email == '') {
			res.send('Ensure email and password  is correct')
		} else {
			user.save(function(err) {
			if(err) {
				res.send(err);
			} else {
				res.send('user saved');
			}
		});
		}
	});
	return router;
}