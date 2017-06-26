module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/me', function(req, res) {
		res.render('me.ejs'); // load the index.ejs file
	});
}
