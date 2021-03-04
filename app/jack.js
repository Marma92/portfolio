module.exports = function(app){
	// =====================================
	// jack PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/jack', function(req, res) {
    fs.readFile('./data/realisations/jack.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the jack.ejs file
      });
	});
}
