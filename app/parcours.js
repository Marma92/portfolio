module.exports = function(app){

	app.get('/parcours', function(req, res) {
		res.render('parcours.ejs'); 
	});
}
