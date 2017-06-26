module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/projetsperso', function(req, res) {
		res.render('projetsperso.ejs'); // load the index.ejs file
	});
}
