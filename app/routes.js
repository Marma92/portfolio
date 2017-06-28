module.exports = function(app){
	require("./index")(app);
	require("./cv")(app);
	require("./technique")(app);
	require("./realisations")(app);
	require("./me")(app);
	require("./contact")(app);
	require("./transverse")(app);
	require("./parcours.js")(app);
	require("./projetspro")(app);
	require("./projetsperso")(app);
	require("./dungeonrpg")(app);

	app.get('*', function(req, res){
  		res.render('404.ejs');
	});
}
