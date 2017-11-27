module.exports = function(app){

	app.get('/projetspro', function(req, res) {
		res.render('projetspro.ejs');
	});
}
