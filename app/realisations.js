module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/realisations', function(req, res) {
		res.render('realisations.ejs'); // load the index.ejs file
	});
}
