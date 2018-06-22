module.exports = function(app){
	// =====================================
	// inmykitchen PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/inmykitchen', function(req, res) {
    fs.readFile('./data/realisations/inmykitchen.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations/inmykitchen.ejs', {obj : obj}); // load the inmykitchen.ejs file
      });
	});
}
