module.exports = function(app){
	// =====================================
	// adexmws PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/adexmws', function(req, res) {
    fs.readFile('./data/realisations/adexmws.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the adexmws.ejs file
      });
	});
}
