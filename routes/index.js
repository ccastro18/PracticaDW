var express = require('express');
var router = express.Router();
const myappController = require('../controllers/myappController');

/* GET home page. */
router.get('/',function(req,res){
    
    res.send('Hola Mundo');
});


module.exports = router;
