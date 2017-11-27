module.exports = function(app){

	app.get('/me', function(req, res) {
		res.render('me.ejs'); 
	});
}
