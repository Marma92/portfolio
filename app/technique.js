module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/technique', function(req, res) {
		res.render('technique.ejs'); // load the index.ejs file
	});
}
