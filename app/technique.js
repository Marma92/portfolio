module.exports = function(app){

	app.get('/technique', function(req, res) {
		res.render('technique.ejs');
	});
}
