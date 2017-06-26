module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/parcours', function(req, res) {
		res.render('parcours.ejs'); // load the index.ejs file
	});
}
