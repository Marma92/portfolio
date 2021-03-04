module.exports = function(app){
	// =====================================
	// automatisation PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/automatisation', function(req, res) {
    fs.readFile('./data/realisations/automatisation.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the automatisation.ejs file
      });
	});
}
