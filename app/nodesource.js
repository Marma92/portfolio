module.exports = function(app){
	// =====================================
	// nodesource PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/nodesource', function(req, res) {
    fs.readFile('./data/realisations/nodesource.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations/nodesource.ejs', {obj : obj}); // load the nodesource.ejs file
      });
	});
}
