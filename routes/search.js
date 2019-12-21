var express = require('express');
var router = express.Router();

var search = require('../controllers/search');

router.use('/search', search);

module.exports = router;
