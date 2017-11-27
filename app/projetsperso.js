module.exports = function(app){

	app.get('/projetsperso', function(req, res) {
		res.render('projetsperso.ejs');
	});
}
