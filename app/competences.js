module.exports = function(app){
	// =====================================
	// COMPETENCES PAGE                =====
	// =====================================
var fs = require('fs');
	app.get('/competences', function(req, res) {
    fs.readFile('./data/competences.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('competences.ejs', {obj : obj}); // load the competences.ejs file
      });
	});
}
