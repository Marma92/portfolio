module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/transverse', function(req, res) {
		res.render('transverse.ejs'); // load the index.ejs file
	});
}
