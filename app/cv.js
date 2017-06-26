module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/cv', function(req, res) {
		res.render('cv.ejs'); // load the index.ejs file
	});
}
