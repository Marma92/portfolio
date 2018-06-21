module.exports = function(app){
	// =====================================
	// EXPERIENCE PAGE                ======
	// =====================================
var fs = require('fs');
	app.get('/experience', function(req, res) {
    fs.readFile('./data/experience.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('experience.ejs', {obj : obj}); // load the template.ejs file
      });
	});
}
