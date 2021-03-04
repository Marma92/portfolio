module.exports = function(app){
	// =====================================
	// myowncloud PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/myowncloud', function(req, res) {
    fs.readFile('./data/realisations/myowncloud.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the myowncloud.ejs file
      });
	});
}
