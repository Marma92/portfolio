module.exports = function(app){
	require("./index")(app);
	require("./experience")(app);
	require("./realisations")(app);
	require("./etudes")(app);
	require("./me")(app);
	require("./contact")(app);
	require("./competences")(app);
	require("./technique")(app);
	require("./transverse")(app);
	require("./parcours.js")(app);
	require("./projetspro")(app);
	require("./projetsperso")(app);
	require("./dungeonrpg")(app);
	require("./template")(app);

	app.get('*', function(req, res){
  		res.render('404.ejs');
	});
}
