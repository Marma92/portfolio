module.exports = function(app){
	// =====================================
	// bjsfoot PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/bjsfoot', function(req, res) {
    fs.readFile('./data/realisations/bjsfoot.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the bjsfoot.ejs file
      });
	});
}
