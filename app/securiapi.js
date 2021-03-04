module.exports = function(app){
	// =====================================
	// securiapi PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/securiapi', function(req, res) {
    fs.readFile('./data/realisations/securiapi.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the securiapi.ejs file
      });
	});
}
