module.exports = function(app){
	// =====================================
	// adexleads PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/realisations/adexleads', function(req, res) {
    fs.readFile('./data/realisations/adexleads.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisation.ejs', {obj : obj}); 
      });
	});
}
