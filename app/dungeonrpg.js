module.exports = function(app){


var fs = require('fs');
	app.get('/realisations/dungeonrpg', function(req, res) {
		fs.readFile('./data/realisations/dungeonrpg.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations/dungeonrpg.ejs', {obj : obj}); // load the competences.ejs file
      });
	});
}
