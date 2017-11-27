module.exports = function(app){

	app.get('/realisations/dungeonrpg', function(req, res) {
		res.render('realisations/dungeonrpg.ejs'); 
	});
}
