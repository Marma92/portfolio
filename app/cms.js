module.exports = function(app){
	// =====================================
	// cms PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/cms', function(req, res) {
    fs.readFile('./data/realisations/cms.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the cms.ejs file
      });
	});
}
