module.exports = function(app){
	// =====================================
	// rationalisation PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/rationalisation', function(req, res) {
    fs.readFile('./data/realisations/rationalisation.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations/rationalisation.ejs', {obj : obj}); // load the rationalisation.ejs file
      });
	});
}
