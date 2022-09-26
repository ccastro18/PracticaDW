var express = require('express');
var router = express.Router();
const myappController = require('../controllers/myappController');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({ extended: false });
/* GET home page. */
router.get('/', myappController.index);
router.get('/crear', myappController.crear);
router.post("/", urlencoded,myappController.guardar);
module.exports = router;
