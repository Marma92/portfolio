module.exports = function(app){

var fs = require('fs');
	app.get('/projetspro', function(req, res) {
		fs.readFile('./data/projetspro.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('projetspro.ejs', {obj : obj});
			});
	});
}
