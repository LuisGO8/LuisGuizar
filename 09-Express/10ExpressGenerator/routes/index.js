var express = require('exress');
var router = express.Router();
//Ruta principal
router.get('/', function(req, res){
    //Vamos a crear una vista
    res.render('index', {title: 'Ejemplo Express'});
});

//El index es el EJS de no ser render (response) entonces sería un HTML
module.exports = router;