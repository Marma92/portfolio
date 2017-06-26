module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/projetspro', function(req, res) {
		res.render('projetspro.ejs'); // load the index.ejs file
	});
}
