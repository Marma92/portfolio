module.exports = function(app){
	// =====================================
	// TEMPLATE PAGE                ========
	// =====================================
	app.get('/template', function(req, res) {
		res.render('template.ejs'); // load the template.ejs file
	});
}
