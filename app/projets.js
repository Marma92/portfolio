module.exports = function(app){

var fs = require('fs');
	app.get('/projets', function(req, res) {
		fs.readFile('./data/projets.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('projets.ejs', {obj : obj});
			});
	});
}
