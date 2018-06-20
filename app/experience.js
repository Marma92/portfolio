module.exports = function(app){

	app.get('/experience', function(req, res) {
		res.render('experience.ejs');
	});
}
