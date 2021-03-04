module.exports = function(app){
	// =====================================
	// forcelogs PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/forcelogs', function(req, res) {
    fs.readFile('./data/realisations/forcelogs.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the forcelogs.ejs file
      });
	});
}
