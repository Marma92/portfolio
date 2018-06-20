module.exports = function(app){

var fs = require('fs');
	app.get('/projetsperso', function(req, res) {
		fs.readFile('./data/projetsperso.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('projetsperso.ejs', {obj : obj});
			});
	});
}
