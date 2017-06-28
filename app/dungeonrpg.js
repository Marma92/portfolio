module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/realisations/dungeonrpg', function(req, res) {
		res.render('realisations/dungeonrpg.ejs'); // load the index.ejs file
	});
}
