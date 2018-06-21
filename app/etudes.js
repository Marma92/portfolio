module.exports = function(app){
	// =====================================
	// STUDIES PAGE                =========
	// =====================================
var fs = require('fs');
	app.get('/etudes', function(req, res) {
    fs.readFile('./data/etudes.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('etudes.ejs', {obj : obj}); // load the template.ejs file
      });
	});
}
