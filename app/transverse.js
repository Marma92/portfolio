module.exports = function(app){

var fs = require('fs');
app.get('/transverse', function(req, res) {
	fs.readFile('./data/transverse.json', 'utf8', function (err, data) {
		if (err) {
			console.log(err);
		}
		var obj = JSON.parse(data);
		console.log(obj.pageTitle);
		res.render('transverse.ejs', {obj : obj});
			});
		});
}
