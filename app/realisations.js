module.exports = function(app){

	app.get('/realisations', function(req, res) {
		res.render('realisations.ejs');
	});
}
