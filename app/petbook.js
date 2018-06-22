module.exports = function(app){
	// =====================================
	// petbook PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/petbook', function(req, res) {
    fs.readFile('./data/realisations/petbook.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations/petbook.ejs', {obj : obj}); // load the petbook.ejs file
      });
	});
}
