module.exports = function(app){
	// =====================================
	// adexbox PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/adexbox', function(req, res) {
    fs.readFile('./data/realisations/adexbox.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the adexbox.ejs file
      });
	});
}
