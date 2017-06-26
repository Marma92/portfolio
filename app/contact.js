module.exports = function(app){
	// =====================================
	// HOME PAGE                    ========
	// =====================================
	app.get('/contact', function(req, res) {
		res.render('contact.ejs'); // load the index.ejs file
	});
}
