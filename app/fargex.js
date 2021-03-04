module.exports = function(app){
	// =====================================
	// fargex PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/fargex', function(req, res) {
    fs.readFile('./data/realisations/fargex.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); // load the fargex.ejs file
      });
	});
}
