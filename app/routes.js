module.exports = function(app){
	require("./index")(app);
	require("./experience")(app);
	require("./etudes")(app);
	require("./contact")(app);
	require("./technique")(app);
	require("./transverse")(app);
	require("./projetspro")(app);
	require("./projetsperso")(app);
	require("./template")(app);
	require("./dungeonrpg")(app);
	require("./adexbox")(app);
	require("./adexleads")(app);
	require("./adexmws")(app);
	require("./automatisation")(app);
	require("./bjsfoot")(app);
	require("./cms")(app);
	require("./fargex")(app);
	require("./forcelogs")(app);
	require("./inmykitchen")(app);
	require("./jack")(app);
	require("./nodesource")(app);
	require("./optimisation")(app);
	require("./petbook")(app);
	require("./rationalisation")(app);
	require("./securiapi")(app);



	app.get('*', function(req, res){
  		res.render('404.ejs');
	});
}
