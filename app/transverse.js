module.exports = function(app){

	app.get('/transverse', function(req, res) {
		res.render('transverse.ejs');
	});
}
