module.exports = function(app){

var fs = require('fs');
	app.get('/technique', function(req, res) {
		fs.readFile('./data/technique.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('technique.ejs', {obj : obj});
			});
	});
}
