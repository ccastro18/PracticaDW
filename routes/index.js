var express = require('express');
var router = express.Router();
const myappController = require('../controllers/myappController');

/* GET home page. */
router.get('/', myappController.index);


module.exports = router;
