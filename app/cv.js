module.exports = function(app){

	app.get('/cv', function(req, res) {
		res.render('cv.ejs');
	});
}
