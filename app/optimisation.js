module.exports = function(app){
	// =====================================
	// optimisation PAGE                ====
	// =====================================
var fs = require('fs');
	app.get('/realisations/optimisation', function(req, res) {
    fs.readFile('./data/realisations/optimisation.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the optimisation.ejs file
      });
	});
}
